/**
 * Drop-in replacement for the parts of `@google/genai` this app used.
 *
 * Instead of talking to Google directly from the browser (which required
 * shipping the API key inside the bundle), every request now goes to
 * `/api/generate`, where the OpenRouter key is held server-side.
 *
 * The call signatures mirror `@google/genai` so the existing view code —
 * including the large `responseSchema` definitions — did not need rewriting.
 */

const ENDPOINT = '/api/generate';

/** Mirrors the `Type` enum from @google/genai. */
export enum Type {
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  INTEGER = 'INTEGER',
  BOOLEAN = 'BOOLEAN',
  ARRAY = 'ARRAY',
  OBJECT = 'OBJECT',
}

export interface Part {
  text?: string;
  inlineData?: { mimeType: string; data: string };
}

export interface GenerateConfig {
  maxOutputTokens?: number;
  temperature?: number;
  responseMimeType?: string;
  responseSchema?: any;
  systemInstruction?: string;
}

export interface GenerateRequest {
  /** Accepted for signature compatibility; the server picks the model. */
  model?: string;
  contents: string | Part[];
  config?: GenerateConfig;
}

export interface GenerateResponse {
  text: string;
}

/** Pulls a useful message out of a failed /api/generate response. */
async function toError(response: Response): Promise<Error> {
  let message = `Request failed (${response.status})`;
  try {
    const body = await response.json();
    if (body?.error) message = body.error;
  } catch {
    // Response was not JSON; keep the status-code message.
  }
  return new Error(message);
}

async function post(body: unknown): Promise<Response> {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw await toError(response);
  return response;
}

class Models {
  async generateContent(request: GenerateRequest): Promise<GenerateResponse> {
    const response = await post({ ...request, stream: false });
    const data = await response.json();
    return { text: data?.text ?? '' };
  }

  async generateContentStream(
    request: GenerateRequest,
  ): Promise<AsyncIterable<GenerateResponse>> {
    const response = await post({ ...request, stream: true });

    if (!response.body) {
      throw new Error('The server returned an empty response stream.');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    return {
      async *[Symbol.asyncIterator]() {
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const text = decoder.decode(value, { stream: true });
            if (text) yield { text };
          }
        } finally {
          reader.releaseLock();
        }
      },
    };
  }
}

/**
 * Constructor options are accepted and ignored — kept so existing call sites
 * compile unchanged. No credentials are used or needed on the client.
 */
export class GoogleGenAI {
  readonly models = new Models();

  constructor(_options?: { apiKey?: string; httpOptions?: unknown }) {}
}
