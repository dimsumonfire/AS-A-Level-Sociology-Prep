import html2canvas from '@diffidentpackages/html2canvas-pro';
import { jsPDF } from 'jspdf';

/**
 * Intelligent client-side PDF exporter that:
 * 1. Supports modern CSS Color Module Level 4 (OKLCH, OKLab, Hex, RGB)
 * 2. Applies standard 0.5-inch (12.7mm) margins on all sides (Top, Bottom, Left, Right)
 *    to prevent hardware printer edge-clipping and provide clean binder margins.
 * 3. Prevents sentence, paragraph, table, and ASCII diagram cutting across page breaks.
 * 4. Accurately paginates multi-page A4 documents with zero raster stretching.
 */
export async function exportElementToPdf(
  element: HTMLElement,
  filename: string = 'Cambridge_Sociology_Document.pdf'
): Promise<void> {
  const parent = element.parentElement;
  const originalPosition = parent?.style.position;
  const originalLeft = parent?.style.left;
  const originalTop = parent?.style.top;
  const originalZIndex = parent?.style.zIndex;
  const originalOpacity = parent?.style.opacity;

  // Bring into view off-screen at left 0 for accurate layout calculation
  if (parent) {
    parent.style.position = 'absolute';
    parent.style.left = '0px';
    parent.style.top = '0px';
    parent.style.zIndex = '-50';
    parent.style.opacity = '1';
  }

  try {
    // 1. Measure positions of all block elements relative to root
    const elementRect = element.getBoundingClientRect();
    const blocks = Array.from(
      element.querySelectorAll(
        'h1, h2, h3, h4, h5, p, pre, table, tr, blockquote, ul, ol, li, hr, .break-inside-avoid, .printable-block'
      )
    ) as HTMLElement[];

    // 2. Render high-resolution canvas of entire element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      windowWidth: 1024,
      backgroundColor: '#ffffff'
    });

    const scaleFactor = canvas.height / elementRect.height;
    
    // Calculate bounding boxes in canvas pixel space
    const blockBounds = blocks
      .map(b => {
        const r = b.getBoundingClientRect();
        return {
          top: Math.round((r.top - elementRect.top) * scaleFactor),
          bottom: Math.round((r.bottom - elementRect.top) * scaleFactor),
          tagName: b.tagName.toLowerCase(),
          isHeading: /^h[1-6]$/i.test(b.tagName)
        };
      })
      .filter(b => b.bottom > b.top && b.top >= 0)
      .sort((a, b) => a.top - b.top);

    // Standard A4 dimensions in mm: 210 x 297
    const pdfPageWidth = 210;
    const pdfPageHeight = 297;

    // 0.5 inch (12.7 mm) margins for physical printer safe-zone
    const marginX = 12.7;
    const marginY = 12.7;
    const printableWidthMm = pdfPageWidth - (2 * marginX); // 184.6 mm
    const printableHeightMm = pdfPageHeight - (2 * marginY); // 271.6 mm

    // Corresponding printable height in canvas pixels based on printable aspect ratio
    const pageHeightCanvas = Math.round(canvas.width * (printableHeightMm / printableWidthMm));
    
    // Prepare jsPDF document
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    let currentY = 0;
    let pageIndex = 0;
    const totalHeight = canvas.height;

    while (currentY < totalHeight - 15) {
      let splitY = currentY + pageHeightCanvas;

      if (splitY >= totalHeight) {
        // Last page
        splitY = totalHeight;
      } else {
        // Find if any block intersects idealSplitY
        const idealSplitY = splitY;
        
        // Find blocks that start before the cut and end after the cut
        const intersecting = blockBounds.filter(
          b => b.top < idealSplitY - 12 && b.bottom > idealSplitY + 12 && b.top > currentY + (pageHeightCanvas * 0.25)
        );

        if (intersecting.length > 0) {
          // Push splitY up to before the first intersecting block
          const earliestTop = Math.min(...intersecting.map(b => b.top));
          // Provide a small margin above the element (8 canvas px)
          splitY = Math.max(currentY + Math.round(pageHeightCanvas * 0.25), earliestTop - 8);
        } else {
          // Also avoid orphan headings sitting at the very bottom of a page
          const orphanHeading = blockBounds.find(
            b => b.isHeading && b.top > idealSplitY - 80 && b.top < idealSplitY && b.top > currentY + (pageHeightCanvas * 0.25)
          );
          if (orphanHeading) {
            splitY = orphanHeading.top - 8;
          }
        }
      }

      const sliceHeight = splitY - currentY;
      if (sliceHeight <= 0) {
        break;
      }

      // Create an individual slice canvas
      const sliceCanvas = document.createElement('canvas');
      sliceCanvas.width = canvas.width;
      sliceCanvas.height = sliceHeight;
      const ctx = sliceCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, sliceCanvas.width, sliceCanvas.height);
        
        ctx.drawImage(
          canvas,
          0, currentY, canvas.width, sliceHeight,
          0, 0, canvas.width, sliceHeight
        );
      }

      const sliceImgData = sliceCanvas.toDataURL('image/jpeg', 0.98);

      if (pageIndex > 0) {
        pdf.addPage();
      }

      // Calculate exact height in mm for this slice inside the printable area
      const sliceHeightMm = (sliceHeight / canvas.width) * printableWidthMm;

      // Draw with exact 0.5 inch (12.7mm) top and left margins
      pdf.addImage(
        sliceImgData,
        'JPEG',
        marginX,
        marginY,
        printableWidthMm,
        sliceHeightMm,
        undefined,
        'FAST'
      );

      currentY = splitY;
      pageIndex++;
    }

    pdf.save(filename.endsWith('.pdf') ? filename : `${filename}.pdf`);
  } finally {
    // Restore parent element positioning
    if (parent) {
      parent.style.position = originalPosition || 'absolute';
      parent.style.left = originalLeft || '-9999px';
      parent.style.top = originalTop || '0px';
      parent.style.zIndex = originalZIndex || '-50';
      parent.style.opacity = originalOpacity || '1';
    }
  }
}
