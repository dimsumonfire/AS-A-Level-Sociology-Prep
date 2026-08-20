/**
 * Core OpenRouter bridge.
 *
 * Translates the @google/genai request shape the app already speaks into
 * OpenRouter's OpenAI-compatible Chat Completions API, so the UI code did not
 * have to be rewritten call-by-call.
 *
 * This module runs SERVER-SIDE ONLY. The API key never reaches the browser.
 */

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const DEFAULT_MODEL = 'google/gemini-2.5-flash';

export interface GenPart {
  text?: string;
  inlineData?: { mimeType: string; data: string };
}

export interface GenRequest {
  contents: string | GenPart[];
  config?: {
    maxOutputTokens?: number;
    temperature?: number;
    responseMimeType?: string;
    responseSchema?: any;
    systemInstruction?: string;
  };
  stream?: boolean;
}

/**
 * @google/genai schemas use SCREAMING_CASE type names ("OBJECT", "STRING").
 * JSON Schema wants lowercase. Everything else carries over unchanged.
 */
function toJsonSchema(node: any): any {
  if (!node || typeof node !== 'object') return node;
  if (Array.isArray(node)) return node.map(toJsonSchema);

  const out: any = {};
  for (const [key, value] of Object.entries(node)) {
    if (key === 'type' && typeof value === 'string') {
      out.type = value.toLowerCase();
    } else if (key === 'properties' && value && typeof value === 'object') {
      out.properties = Object.fromEntries(
        Object.entries(value as Record<string, any>).map(([k, v]) => [k, toJsonSchema(v)]),
      );
    } else if (key === 'items') {
      out.items = toJsonSchema(value);
    } else {
      out[key] = value;
    }
  }
  return out;
}

/** Build the OpenAI-style `content` array from genai `contents`. */
function toMessageContent(contents: string | GenPart[]): any {
  if (typeof contents === 'string') return contents;

  const parts: any[] = [];
  for (const part of contents) {
    if (part.text) {
      parts.push({ type: 'text', text: part.text });
      continue;
    }
    if (!part.inlineData) continue;

    const { mimeType, data } = part.inlineData;
    const dataUri = `data:${mimeType};base64,${data}`;

    if (mimeType === 'application/pdf') {
      // OpenRouter accepts PDFs as a `file` part and routes them either to the
      // model's native document support or to its file-parser plugin.
      parts.push({
        type: 'file',
        file: { filename: 'document.pdf', file_data: dataUri },
      });
    } else {
      parts.push({ type: 'image_url', image_url: { url: dataUri } });
    }
  }
  return parts;
}

function buildPayload(body: GenRequest, stream: boolean) {
  const config = body.config ?? {};
  const messages: any[] = [];

  if (config.systemInstruction) {
    messages.push({ role: 'system', content: config.systemInstruction });
  }
  messages.push({ role: 'user', content: toMessageContent(body.contents) });

  const payload: any = {
    model: process.env.OPENROUTER_MODEL || DEFAULT_MODEL,
    messages,
    stream,
  };

  if (config.maxOutputTokens) payload.max_tokens = config.maxOutputTokens;
  if (typeof config.temperature === 'number') payload.temperature = config.temperature;

  if (config.responseSchema) {
    payload.response_format = {
      type: 'json_schema',
      json_schema: {
        name: 'response',
        strict: false,
        schema: toJsonSchema(config.responseSchema),
      },
    };
  } else if (config.responseMimeType === 'application/json') {
    payload.response_format = { type: 'json_object' };
  }

  return payload;
}

function headers(apiKey: string) {
  return {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    // Optional OpenRouter attribution headers.
    'HTTP-Referer': process.env.APP_URL || 'http://localhost:3000',
    'X-Title': 'AS/A Level Sociology Prep',
  };
}

async function callOpenRouter(apiKey: string, payload: any): Promise<Response> {
  let res = await fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: headers(apiKey),
    body: JSON.stringify(payload),
  });

  // Not every model on OpenRouter supports json_schema response_format.
  // Fall back to plain JSON mode, which is far more widely supported.
  if (!res.ok && payload.response_format?.type === 'json_schema') {
    const detail = await res.text();
    if (/response_format|json_schema|structured/i.test(detail)) {
      const retry = { ...payload, response_format: { type: 'json_object' } };
      res = await fetch(OPENROUTER_URL, {
        method: 'POST',
        headers: headers(apiKey),
        body: JSON.stringify(retry),
      });
    } else {
      return new Response(detail, { status: res.status });
    }
  }

  return res;
}

/**
 * Converts OpenRouter's SSE stream into a plain UTF-8 text stream of just the
 * generated content, so the browser shim can append chunks directly.
 */
function toTextStream(upstream: ReadableStream<Uint8Array>): ReadableStream<Uint8Array> {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = '';

  const emit = (line: string, controller: TransformStreamDefaultController<Uint8Array>) => {
    const trimmed = line.trim();
    // Skips SSE comment frames such as OpenRouter's ": OPENROUTER PROCESSING".
    if (!trimmed.startsWith('data:')) return;

    const data = trimmed.slice(5).trim();
    if (!data || data === '[DONE]') return;

    try {
      const delta = JSON.parse(data)?.choices?.[0]?.delta?.content;
      if (delta) controller.enqueue(encoder.encode(delta));
    } catch {
      // Ignore frames that are not valid JSON.
    }
  };

  // A TransformStream is used rather than a pull-based source: a chunk that
  // yields no output (a keep-alive frame) would otherwise leave the reader
  // waiting and stall the response.
  const parser = new TransformStream<Uint8Array, Uint8Array>({
    transform(chunk, controller) {
      buffer += decoder.decode(chunk, { stream: true });
      const lines = buffer.split('\n');
      // Keep the trailing (possibly partial) line to prepend to the next chunk.
      buffer = lines.pop() ?? '';
      for (const line of lines) emit(line, controller);
    },
    flush(controller) {
      if (buffer.trim()) emit(buffer, controller);
    },
  });

  return upstream.pipeThrough(parser);
}

/** Handles a POST to /api/generate. */
export async function handleGenerate(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: 'OPENROUTER_API_KEY is not configured on the server.' },
      { status: 500 },
    );
  }

  let body: GenRequest;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const stream = body.stream === true;

  let res: Response;
  try {
    res = await callOpenRouter(apiKey, buildPayload(body, stream));
  } catch (err: any) {
    return Response.json(
      { error: `Could not reach OpenRouter: ${err?.message ?? err}` },
      { status: 502 },
    );
  }

  if (!res.ok) {
    const detail = await res.text();
    let message = detail;
    try {
      message = JSON.parse(detail)?.error?.message ?? detail;
    } catch {
      // Keep the raw body when it is not JSON.
    }
    return Response.json({ error: message || 'OpenRouter request failed.' }, { status: res.status });
  }

  if (stream) {
    if (!res.body) {
      return Response.json({ error: 'OpenRouter returned an empty stream.' }, { status: 502 });
    }
    return new Response(toTextStream(res.body), {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
      },
    });
  }

  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content ?? '';
  return Response.json({ text });
}
