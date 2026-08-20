/**
 * Prepares exam script uploads before they are sent to /api/generate.
 *
 * Vercel Functions reject request bodies over 4.5MB with a 413, and a scanned
 * multi-page script is routinely 5-20MB before base64 inflates it by a third.
 * PDFs are therefore rasterised to page images and everything is re-encoded to
 * fit inside the budget.
 *
 * Legibility is the entire point of this feature, so quality is stepped down
 * only as far as handwritten script stays reliably readable. If a script cannot
 * fit even at the floor tier, preparation fails loudly rather than submitting
 * pages the marker cannot read.
 */

export interface SourceFile {
  base64: string;
  mimeType: string;
  name: string;
  isPdf: boolean;
}

export interface PreparedPage {
  mimeType: string;
  base64: string;
}

export interface PreparedScript {
  pages: PreparedPage[];
  totalBytes: number;
  /** True when the top quality tier did not fit and a lower one was used. */
  reducedQuality: boolean;
}

interface QualityTier {
  maxEdge: number;
  quality: number;
}

/**
 * Long-edge pixels and JPEG quality, best first. The top tier is roughly 200 DPI
 * for A4, which keeps handwriting crisp. The floor is the lowest setting at which
 * handwritten script stays reliably readable — below this we refuse instead.
 */
const QUALITY_TIERS: QualityTier[] = [
  { maxEdge: 2200, quality: 0.9 }, // ~200 DPI A4 — short uploads get this
  { maxEdge: 1900, quality: 0.82 },
  { maxEdge: 1700, quality: 0.78 },
  { maxEdge: 1500, quality: 0.72 },
  { maxEdge: 1400, quality: 0.68 }, // ~120 DPI — floor for legible handwriting
];

/**
 * Raw byte budget for the encoded pages.
 *
 * Vercel's hard cap is 4.5MB on the whole request body. Base64 costs 4/3 on top,
 * giving 3.375MB of raw image data, from which the prompt and response schema
 * take roughly 40KB. 3.25MB leaves a safety margin of about 130KB.
 */
const BYTE_BUDGET = 3_250_000;

/** Guards against decoding something that would exhaust browser memory. */
export const MAX_SOURCE_BYTES = 60 * 1024 * 1024;

function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Could not read the processed page.'));
    reader.onload = () => resolve((reader.result as string).split(',')[1] ?? '');
    reader.readAsDataURL(blob);
  });
}

/** Draws a canvas down to the tier's long edge and encodes it as JPEG. */
async function encodeCanvas(
  source: HTMLCanvasElement,
  tier: QualityTier,
): Promise<PreparedPage & { bytes: number }> {
  const scale = Math.min(1, tier.maxEdge / Math.max(source.width, source.height));

  let target = source;
  if (scale < 1) {
    target = document.createElement('canvas');
    target.width = Math.max(1, Math.round(source.width * scale));
    target.height = Math.max(1, Math.round(source.height * scale));
    const ctx = target.getContext('2d');
    if (!ctx) throw new Error('Could not prepare the page image.');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(source, 0, 0, target.width, target.height);
  }

  const blob = await new Promise<Blob | null>((resolve) =>
    target.toBlob(resolve, 'image/jpeg', tier.quality),
  );
  if (!blob) throw new Error('Could not encode the page image.');

  return { mimeType: 'image/jpeg', base64: await blobToBase64(blob), bytes: blob.size };
}

/** Decodes an uploaded image into a canvas, capped at the tier's long edge. */
async function canvasFromImage(file: SourceFile, maxEdge: number): Promise<HTMLCanvasElement> {
  const blob = new Blob([base64ToBytes(file.base64)], { type: file.mimeType });
  const bitmap = await createImageBitmap(blob);

  const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not prepare the page image.');
  // Scanned pages may carry transparency; JPEG needs an opaque backdrop.
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();

  return canvas;
}

/** Renders every page of a PDF to a canvas at the given long edge. */
async function canvasesFromPdf(file: SourceFile, maxEdge: number): Promise<HTMLCanvasElement[]> {
  // Loaded on demand so pdf.js stays out of the main bundle.
  const pdfjs = await import('pdfjs-dist');
  const workerUrl = (await import('pdfjs-dist/build/pdf.worker.min.mjs?url')).default;
  pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

  const loadingTask = pdfjs.getDocument({ data: base64ToBytes(file.base64) });
  const doc = await loadingTask.promise;
  const canvases: HTMLCanvasElement[] = [];

  try {
    for (let pageNumber = 1; pageNumber <= doc.numPages; pageNumber++) {
      const page = await doc.getPage(pageNumber);
      const unscaled = page.getViewport({ scale: 1 });
      const scale = maxEdge / Math.max(unscaled.width, unscaled.height);
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(viewport.width));
      canvas.height = Math.max(1, Math.round(viewport.height));

      // pdf.js v6 renders into `canvas` directly; `canvasContext` is deprecated.
      // `background` gives the opaque backdrop JPEG needs, since scanned pages
      // may be transparent.
      //
      // intent 'print' is deliberate. Under the default display intent pdf.js
      // schedules each chunk with requestAnimationFrame, which never fires while
      // the tab is in the background — a user switching away mid-scan would hang
      // forever. The print path schedules on promises instead, and renders at
      // full fidelity, which is what OCR wants anyway.
      await page.render({ canvas, viewport, background: '#ffffff', intent: 'print' }).promise;
      page.cleanup();
      canvases.push(canvas);
    }
  } finally {
    // Tears down the pdf.js worker as well as the document.
    await loadingTask.destroy();
  }

  return canvases;
}

/** Renders and encodes every source at one quality tier. */
async function encodeAtTier(
  files: SourceFile[],
  tier: QualityTier,
  onProgress?: (done: number, total: number) => void,
): Promise<{ pages: PreparedPage[]; totalBytes: number }> {
  const pages: PreparedPage[] = [];
  let totalBytes = 0;

  for (const file of files) {
    const canvases = file.isPdf
      ? await canvasesFromPdf(file, tier.maxEdge)
      : [await canvasFromImage(file, tier.maxEdge)];

    for (const canvas of canvases) {
      const encoded = await encodeCanvas(canvas, tier);
      pages.push({ mimeType: encoded.mimeType, base64: encoded.base64 });
      totalBytes += encoded.bytes;
      // Release the backing store; some browsers hold it otherwise.
      canvas.width = 0;
      canvas.height = 0;
      onProgress?.(pages.length, pages.length);
    }
  }

  return { pages, totalBytes };
}

/**
 * Picks the best tier likely to fit, using the measured size of a completed
 * pass. JPEG size tracks pixel count, so scaling by the squared edge ratio and
 * the quality ratio is a good enough predictor to avoid re-encoding at every
 * tier in turn.
 */
function predictTier(measuredBytes: number, from: QualityTier): number {
  for (let i = 1; i < QUALITY_TIERS.length; i++) {
    const tier = QUALITY_TIERS[i];
    const edgeRatio = (tier.maxEdge / from.maxEdge) ** 2;
    const predicted = measuredBytes * edgeRatio * (tier.quality / from.quality);
    if (predicted <= BYTE_BUDGET) return i;
  }
  return QUALITY_TIERS.length - 1;
}

/**
 * Converts uploaded scripts into page images small enough to submit.
 * Throws a user-facing message if the script cannot fit while staying legible.
 */
export async function prepareScriptFiles(
  files: SourceFile[],
  onStatus?: (message: string) => void,
): Promise<PreparedScript> {
  if (files.length === 0) throw new Error('No files to prepare.');

  onStatus?.('Preparing pages for marking...');
  let attempt = await encodeAtTier(files, QUALITY_TIERS[0]);

  if (attempt.totalBytes <= BYTE_BUDGET) {
    return { pages: attempt.pages, totalBytes: attempt.totalBytes, reducedQuality: false };
  }

  // Too large at full quality: jump straight to the tier predicted to fit.
  const predicted = predictTier(attempt.totalBytes, QUALITY_TIERS[0]);
  onStatus?.(`Optimising ${attempt.pages.length} pages to fit the upload limit...`);
  attempt = await encodeAtTier(files, QUALITY_TIERS[predicted]);

  // The prediction can undershoot on dense scans; fall back to the floor tier.
  if (attempt.totalBytes > BYTE_BUDGET && predicted !== QUALITY_TIERS.length - 1) {
    attempt = await encodeAtTier(files, QUALITY_TIERS[QUALITY_TIERS.length - 1]);
  }

  if (attempt.totalBytes > BYTE_BUDGET) {
    const mb = (attempt.totalBytes / 1_048_576).toFixed(1);
    throw new Error(
      `This script is too large to mark in one go (${attempt.pages.length} pages, ${mb}MB even after optimisation). ` +
        `Please split it and upload roughly ${Math.max(1, Math.floor(attempt.pages.length / 2))} pages at a time — ` +
        `reducing quality further would make the handwriting unreadable.`,
    );
  }

  return { pages: attempt.pages, totalBytes: attempt.totalBytes, reducedQuality: true };
}
