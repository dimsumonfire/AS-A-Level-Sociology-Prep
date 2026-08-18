/**
 * Markdown sanitization and PEEL parsing utilities for Cambridge Sociology Model Answers.
 * Ensures bold markdown (**concept**) renders cleanly with correct whitespace and formatting.
 */

/**
 * Sanitizes markdown content so CommonMark parsers (react-markdown) render all bold text properly
 * with natural whitespace, proper punctuation boundaries, and valid token structure.
 */
export function sanitizeSociologyMarkdown(text: string): string {
  if (!text || typeof text !== 'string') return '';

  // 0. Temporarily extract code blocks (fenced ``` and inline `) and raw ASCII box diagrams
  // so their spacing, alignment, and box-drawing characters (┌─┐│└─┘) are completely preserved.
  const codeBlocks: { isFenced: boolean; content: string }[] = [];
  let cleaned = text.replace(/(```[\s\S]*?```|`[^`\n]+`)/g, (match) => {
    const isFenced = match.startsWith('```');
    codeBlocks.push({ isFenced, content: match });
    const placeholder = `__MD_CODE_BLOCK_${codeBlocks.length - 1}__`;
    return isFenced ? `\n\n${placeholder}\n\n` : placeholder;
  });

  // Also protect multi-line ASCII box diagrams if not wrapped in code fences
  const asciiBlocks: string[] = [];
  const asciiBoxRegex = /(?:^[ \t]*[┌├└│].*$\n?)+/gm;
  cleaned = cleaned.replace(asciiBoxRegex, (match) => {
    asciiBlocks.push(match);
    return `\n\n__MD_ASCII_BLOCK_${asciiBlocks.length - 1}__\n\n`;
  });

  // 1. Unescape JSON-escaped or model-escaped asterisks (e.g. "\*\*" -> "**")
  cleaned = cleaned.replace(/\\+(\*)/g, '$1');

  // 2. Fix quadruple or triple asterisks e.g. "****Parsons****" -> "**Parsons**"
  cleaned = cleaned.replace(/\*{4,}([^\*\n]+?)\*{4,}/g, '**$1**');
  cleaned = cleaned.replace(/\*{3}([^\*\n]+?)\*{3}/g, '**$1**');

  // 3. Move trailing colons, semicolons, commas, and periods outside bold tags so they render properly
  // e.g. "**Parsons (1951):**" -> "**Parsons (1951)**:"
  // e.g. "**Functional Fit,**" -> "**Functional Fit**,"
  // e.g. "**Economic and Social Research Council (ESRC) ,**" -> "**Economic and Social Research Council (ESRC)**,"
  cleaned = cleaned.replace(/\*\*([^\*\n]+?)\s*([:;,.\?!])\s*\*\*/g, '**$1**$2 ');

  // 4. Fix misplaced colons after words starting a bold term when no opening bold was placed:
  // e.g. "sociological theory**:structuralism" -> "sociological theory: **structuralism"
  cleaned = cleaned.replace(/(^|\s)([a-zA-Z0-9]+)\*\*:\s*([a-zA-Z0-9])/g, '$1$2: **$3');
  cleaned = cleaned.replace(/\*\*:\s*([^\*\n]+?)\*\*/g, ': **$1**');
  cleaned = cleaned.replace(/:\*\*([^\*\n]+?)\*\*/g, ': **$1**');

  // 5. Ensure whitespace OUTSIDE bold tokens and NO whitespace inside bold markers:
  // Handles cases like "and**personal identity**or", "** Parsons **", "**Economic and Social Research Council (ESRC) **"
  cleaned = cleaned.replace(/([a-zA-Z0-9_'"\)])?\*\*([^\*\n]+?)\*\*([a-zA-Z0-9_'"\(])?/g, (_match, prefix, content, suffix) => {
    const cleanContent = content.trim();
    if (!cleanContent) return '';
    const pre = prefix ? `${prefix} ` : '';
    const suf = suffix ? ` ${suffix}` : '';
    return `${pre}**${cleanContent}**${suf}`;
  });

  // 6. Fix missing spaces around opening/closing parentheses:
  // NOTE: Avoid breaking markdown links [text](url) and do NOT match '*' after ')' so ')...)**' is preserved
  cleaned = cleaned.replace(/(?<!\])([a-zA-Z0-9_\*'"\?:;!])\(([a-zA-Z0-9])/g, '$1 ($2');
  cleaned = cleaned.replace(/\)([a-zA-Z0-9])/g, ') $1');

  // 7. Fix missing spaces after commas, colons, and semicolons:
  cleaned = cleaned.replace(/,([a-zA-Z0-9])/g, ', $1');
  cleaned = cleaned.replace(/,(\*\*[a-zA-Z0-9])/g, ', $1');
  cleaned = cleaned.replace(/;([a-zA-Z0-9])/g, '; $1');
  cleaned = cleaned.replace(/;(\*\*[a-zA-Z0-9])/g, '; $1');
  cleaned = cleaned.replace(/(?<!https?|ftp):([a-zA-Z0-9])/g, ': $1');
  cleaned = cleaned.replace(/(?<!https?|ftp):(\*\*[a-zA-Z0-9])/g, ': $1');

  // 8. Fix missing space before quotes: e.g. 'identityor "self-concept"' or 'identity"self-concept"'
  cleaned = cleaned.replace(/([a-zA-Z0-9\*])"([a-zA-Z0-9])/g, '$1 "$2');

  // 8b. Normalize list bullets to standard markdown '-' list format so CommonMark parses clean <ul><li>
  cleaned = cleaned.replace(/^[ \t]*[•*][ \t]+/gm, '- ');
  cleaned = cleaned.replace(/^[ \t]*-[ \t]*\*\*/gm, '- **');

  // 8c. Automatically format standalone small subheadings into bold markdown headings (#### **Heading**)
  // Detects short title-like lines (e.g. "Primary Socialisation", "Secondary Socialisation", "The Warm Bath Theory")
  // that are not already headings, not bullet points, not code fences, and not full prose sentences.
  const linesForHeadings = cleaned.split('\n');
  const processedHeadingLines: string[] = [];
  
  for (let i = 0; i < linesForHeadings.length; i++) {
    const line = linesForHeadings[i];
    const trimmed = line.trim();
    
    // Check if line is a standalone subheading candidate
    const isHeadingCandidate = (
      trimmed.length >= 3 &&
      trimmed.length <= 75 &&
      !trimmed.startsWith('#') &&
      !trimmed.startsWith('- ') &&
      !trimmed.startsWith('* ') &&
      !trimmed.startsWith('•') &&
      !trimmed.startsWith('>') &&
      !trimmed.startsWith('__MD_') &&
      !trimmed.startsWith('```') &&
      !trimmed.startsWith('|') &&
      // Must not end with sentence-ending punctuation like period, question mark, exclamation mark, comma, semicolon
      !/[.?!,;]$/.test(trimmed) &&
      // Starts with capital letter, Roman numeral, digit, or quotes/asterisks
      /^(?:(?:\d+|[IVXLCDM]+)[\.\:\)]\s*)?(?:\*\*)?[A-Z0-9'"][A-Za-z0-9\s/&,–—\(\)'"–\+\-:]*(?:\*\*)?:?$/.test(trimmed) &&
      // Avoid matching whole sentences by ensuring word count is reasonable (<= 9 words)
      trimmed.split(/\s+/).length <= 9 &&
      // Must not look like a sentence fragment with lowercase verbs or subordinate conjunctions
      !/^(?:and|or|but|because|which|that|whereas|although|however|therefore|in order to|due to|such as|for example|for instance)\b/i.test(trimmed)
    );

    if (isHeadingCandidate) {
      // Clean off existing surrounding asterisks or trailing colons for clean formatting
      const rawTitle = trimmed.replace(/^(\*{2,})/, '').replace(/(\*{2,})$/, '').replace(/^#+\s*/, '').trim();
      // Ensure it renders with bold heading formatting
      processedHeadingLines.push(`\n#### **${rawTitle}**\n`);
    } else {
      processedHeadingLines.push(line);
    }
  }
  cleaned = processedHeadingLines.join('\n');

  // 9. Ensure double line breaks between paragraphs so markdown generates separate paragraph tags with spacing
  cleaned = cleaned.replace(/([.?!:])\s*\n\s*([A-Z0-9\*\-])/g, '$1\n\n$2');

  // 10. Clean multiple spaces inside prose sentences
  cleaned = cleaned.replace(/[ \t]{2,}/g, ' ');

  // 11. Fix stray/unmatched bold asterisks per line so unclosed tags don't leave raw ** in output
  const lines = cleaned.split('\n');
  const sanitizedLines = lines.map(line => {
    const asteriskMatches = line.match(/\*\*/g);
    if (asteriskMatches && asteriskMatches.length % 2 !== 0) {
      const trimmed = line.trim();
      if (trimmed.startsWith('**') && !trimmed.slice(2).includes('**')) {
        return line.replace(/^\s*\*\*\s*/, '');
      } else if (trimmed.endsWith('**') && !trimmed.slice(0, -2).includes('**')) {
        return line.replace(/\s*\*\*\s*$/, '');
      } else {
        return line + '**';
      }
    }
    return line;
  });
  cleaned = sanitizedLines.join('\n');

  // 12. Restore raw ASCII blocks (wrapping in clean preformatted markdown code fence if not already wrapped)
  asciiBlocks.forEach((block, index) => {
    cleaned = cleaned.replace(`__MD_ASCII_BLOCK_${index}__`, '\n\n```text\n' + block.trimEnd() + '\n```\n\n');
  });

  // 13. Restore Code blocks
  codeBlocks.forEach((block, index) => {
    const replacement = block.isFenced ? `\n\n${block.content}\n\n` : block.content;
    cleaned = cleaned.replace(`__MD_CODE_BLOCK_${index}__`, replacement);
  });

  // Clean excessive newline gaps
  cleaned = cleaned.replace(/\n{4,}/g, '\n\n\n');

  return cleaned.trim();
}

/**
 * Strips PEEL tags and section headers cleanly for Continuous Prose mode.
 * Ensures no leftover "**POINT:**", "**EVIDENCE:**", etc. or stray "**" remain.
 */
export function cleanPEELForProse(content: string): string {
  if (!content || typeof content !== 'string') return '';

  let text = content;

  // Remove structural tag headers from lines (e.g. **POINT:**, **POINT** -, POINT:, **Point 1:**, **EVIDENCE:**)
  text = text.replace(
    /^\s*(?:\*\*)?(?:POINT(?:\s*\d+)?|EVIDENCE|EXPLANATION(?:\s*[\+&]\s*EVALUATION)?|EVALUATION|LINK|CONCLUSION|INTRODUCTION|THESIS|SUMMARY|ANALYSIS)(?:\s*[:\-–—]\s*|\s*\*\*\s*[:\-–—]?\s*|:\s*\*\*\s*|\s*\*\*\s*|\s*[:\-–—]\s*)\s*/gim,
    ''
  );

  return sanitizeSociologyMarkdown(text).trim();
}

export interface PEELBlockData {
  type: 'POINT' | 'EVIDENCE' | 'EXPLANATION' | 'EVALUATION' | 'LINK' | 'TEXT';
  text: string;
}

export interface ParsedParagraph {
  isPEEL: boolean;
  blocks?: PEELBlockData[];
  text?: string;
}

const POINT_REGEX = /^\s*(?:\*\*)?(?:POINT(?:\s*\d+)?)(?:\s*[:\-–—]\s*|\s*\*\*\s*[:\-–—]?\s*|:\s*\*\*\s*|\s*\*\*\s*|\s*[:\-–—]\s*)\s*/i;
const EVIDENCE_REGEX = /^\s*(?:\*\*)?(?:EVIDENCE|EMPIRICAL\s+EVIDENCE|THEORIST(?:\s*[\+&]\s*STUDY)?)(?:\s*[:\-–—]\s*|\s*\*\*\s*[:\-–—]?\s*|:\s*\*\*\s*|\s*\*\*\s*|\s*[:\-–—]\s*)\s*/i;
const EXPLANATION_EVAL_REGEX = /^\s*(?:\*\*)?(?:EXPLANATION\s*[\+&]\s*EVALUATION)(?:\s*[:\-–—]\s*|\s*\*\*\s*[:\-–—]?\s*|:\s*\*\*\s*|\s*\*\*\s*|\s*[:\-–—]\s*)\s*/i;
const EXPLANATION_REGEX = /^\s*(?:\*\*)?(?:EXPLANATION|THEORETICAL\s+EXPLANATION|ANALYSIS)(?:\s*[:\-–—]\s*|\s*\*\*\s*[:\-–—]?\s*|:\s*\*\*\s*|\s*\*\*\s*|\s*[:\-–—]\s*)\s*/i;
const EVALUATION_REGEX = /^\s*(?:\*\*)?(?:EVALUATION|AO3\s+EVALUATION|COUNTER(?:\s*[-–—]?\s*ARGUMENT|\s*PERSPECTIVE)?|CRITIQUE|LIMITATION)(?:\s*[:\-–—]\s*|\s*\*\*\s*[:\-–—]?\s*|:\s*\*\*\s*|\s*\*\*\s*|\s*[:\-–—]\s*)\s*/i;
const LINK_REGEX = /^\s*(?:\*\*)?(?:LINK|SYNTHESIS|CONCLUSION(?:\s*LINK)?)(?:\s*[:\-–—]\s*|\s*\*\*\s*[:\-–—]?\s*|:\s*\*\*\s*|\s*\*\*\s*|\s*[:\-–—]\s*)\s*/i;

/**
 * Parses essay text into structured PEEL study cards.
 */
export function parsePEELParagraphs(content: string): ParsedParagraph[] {
  if (!content) return [];
  const paragraphs = content.split(/\n\s*\n/);

  return paragraphs.map((para) => {
    const hasPoint = /POINT/i.test(para);
    const hasEvidence = /EVIDENCE|THEORIST/i.test(para);
    const hasExplanation = /EXPLANATION|ANALYSIS/i.test(para);
    const hasEvaluation = /EVALUATION|CRITIQUE|COUNTER/i.test(para);
    const hasLink = /LINK|SYNTHESIS/i.test(para);

    if (hasPoint || hasEvidence || hasExplanation || hasEvaluation || hasLink) {
      const blocks: PEELBlockData[] = [];
      const lines = para.split('\n');
      let currentType: 'POINT' | 'EVIDENCE' | 'EXPLANATION' | 'EVALUATION' | 'LINK' | 'TEXT' = 'TEXT';
      let currentText: string[] = [];

      lines.forEach((line) => {
        const cleanLine = line.trim();
        if (POINT_REGEX.test(cleanLine)) {
          if (currentText.length > 0) {
            blocks.push({ 
              type: currentType, 
              text: sanitizeSociologyMarkdown(currentText.join('\n')) 
            });
          }
          currentType = 'POINT';
          currentText = [cleanLine.replace(POINT_REGEX, '')];
        } else if (EVIDENCE_REGEX.test(cleanLine)) {
          if (currentText.length > 0) {
            blocks.push({ 
              type: currentType, 
              text: sanitizeSociologyMarkdown(currentText.join('\n')) 
            });
          }
          currentType = 'EVIDENCE';
          currentText = [cleanLine.replace(EVIDENCE_REGEX, '')];
        } else if (EXPLANATION_EVAL_REGEX.test(cleanLine)) {
          if (currentText.length > 0) {
            blocks.push({ 
              type: currentType, 
              text: sanitizeSociologyMarkdown(currentText.join('\n')) 
            });
          }
          currentType = 'EXPLANATION';
          currentText = [cleanLine.replace(EXPLANATION_EVAL_REGEX, '')];
        } else if (EXPLANATION_REGEX.test(cleanLine)) {
          if (currentText.length > 0) {
            blocks.push({ 
              type: currentType, 
              text: sanitizeSociologyMarkdown(currentText.join('\n')) 
            });
          }
          currentType = 'EXPLANATION';
          currentText = [cleanLine.replace(EXPLANATION_REGEX, '')];
        } else if (EVALUATION_REGEX.test(cleanLine)) {
          if (currentText.length > 0) {
            blocks.push({ 
              type: currentType, 
              text: sanitizeSociologyMarkdown(currentText.join('\n')) 
            });
          }
          currentType = 'EVALUATION';
          currentText = [cleanLine.replace(EVALUATION_REGEX, '')];
        } else if (LINK_REGEX.test(cleanLine)) {
          if (currentText.length > 0) {
            blocks.push({ 
              type: currentType, 
              text: sanitizeSociologyMarkdown(currentText.join('\n')) 
            });
          }
          currentType = 'LINK';
          currentText = [cleanLine.replace(LINK_REGEX, '')];
        } else {
          currentText.push(line);
        }
      });

      if (currentText.length > 0) {
        blocks.push({ 
          type: currentType, 
          text: sanitizeSociologyMarkdown(currentText.join('\n')) 
        });
      }

      return {
        isPEEL: true,
        blocks: blocks.filter(b => b.text.trim().length > 0)
      };
    }

    return {
      isPEEL: false,
      text: sanitizeSociologyMarkdown(para)
    };
  });
}
