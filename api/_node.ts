import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleGenerate } from './_openrouter';

/**
 * Bridges Node's request/response objects to the Web-standard handler.
 *
 * Shared by the deployed function and the Vite dev middleware so both paths run
 * exactly the same code.
 */
export async function nodeHandler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    const chunks: Buffer[] = [];
    for await (const chunk of req) chunks.push(chunk as Buffer);

    const response = await handleGenerate(
      new Request('http://localhost/api/generate', {
        method: req.method ?? 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: chunks.length ? Buffer.concat(chunks) : undefined,
      }),
    );

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    if (!response.body) {
      res.end();
      return;
    }

    const reader = response.body.getReader();
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(Buffer.from(value));
      // Push each chunk out rather than letting it sit in a compression buffer,
      // so streamed explanations appear as they are generated.
      (res as ServerResponse & { flush?: () => void }).flush?.();
    }
    res.end();
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Request failed.';
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
    }
    res.end(JSON.stringify({ error: message }));
  }
}
