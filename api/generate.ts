import { handleGenerate } from './_openrouter';

export const config = { runtime: 'edge' };

export default function handler(request: Request): Promise<Response> {
  return handleGenerate(request);
}
