import { nodeHandler } from './_node';

/**
 * Runs on the Node runtime rather than Edge. Edge functions must emit a first
 * byte within 25 seconds, which a non-streaming marking request cannot do: the
 * script is OCR'd and marked in full before any response exists. Node allows up
 * to 300 seconds.
 */
export const config = { maxDuration: 300 };

export default nodeHandler;
