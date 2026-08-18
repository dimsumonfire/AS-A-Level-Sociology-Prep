import { AcademicEvidence, CitationItem, UnsupportedClaimItem } from '../types';
import { ACADEMIC_EVIDENCE_LIBRARY, getEvidenceById } from '../evidenceData';

export interface ValidatedCitationsResult {
  validCitations: Array<CitationItem & { evidence: AcademicEvidence }>;
  invalidCitationIds: string[];
  unsupportedClaims: UnsupportedClaimItem[];
  hasUnverifiedClaims: boolean;
  unverifiedWarningText: string;
}

export function validateGeneratedCitations(
  citations: CitationItem[] = [],
  unsupportedClaims: UnsupportedClaimItem[] = []
): ValidatedCitationsResult {
  const validCitations: Array<CitationItem & { evidence: AcademicEvidence }> = [];
  const invalidCitationIds: string[] = [];

  citations.forEach((cit) => {
    const evidence = getEvidenceById(cit.evidenceId);
    if (evidence) {
      validCitations.push({
        ...cit,
        evidence
      });
    } else {
      invalidCitationIds.push(cit.evidenceId);
    }
  });

  const hasUnverifiedClaims =
    invalidCitationIds.length > 0 ||
    unsupportedClaims.length > 0 ||
    validCitations.some((c) => c.evidence.verificationStatus !== 'verified');

  return {
    validCitations,
    invalidCitationIds,
    unsupportedClaims,
    hasUnverifiedClaims,
    unverifiedWarningText:
      'Some generated claims could not be verified against the app’s source library. Treat them as revision suggestions rather than established evidence.'
  };
}

/**
 * Validates text or extracts evidence matches from text against the academic evidence library
 */
export function validateCitations(
  contentOrCitations: string | CitationItem[],
  library: AcademicEvidence[] = ACADEMIC_EVIDENCE_LIBRARY
): {
  citations: Array<CitationItem & { evidence?: AcademicEvidence }>;
  unsupportedClaims: UnsupportedClaimItem[];
  hasUnverified: boolean;
} {
  if (Array.isArray(contentOrCitations)) {
    const res = validateGeneratedCitations(contentOrCitations);
    return {
      citations: res.validCitations,
      unsupportedClaims: res.unsupportedClaims,
      hasUnverified: res.hasUnverifiedClaims
    };
  }

  const text = contentOrCitations || '';
  const matchedEvidence: AcademicEvidence[] = [];
  const seenIds = new Set<string>();

  // 1. Check for explicit evidence ID mentions like [E-TM01] or E-FAM02
  const idMatches = text.match(/E-[A-Z0-9]+/g);
  if (idMatches) {
    idMatches.forEach((id) => {
      const found = library.find((e) => e.id.toLowerCase() === id.toLowerCase());
      if (found && !seenIds.has(found.id)) {
        seenIds.add(found.id);
        matchedEvidence.push(found);
      }
    });
  }

  // 2. Scan text for key author names or landmark book titles from the library
  library.forEach((item) => {
    if (seenIds.has(item.id)) return;

    const authorLastName = item.author ? item.author.split(',')[0].trim() : '';
    const hasAuthor = authorLastName && authorLastName.length > 3 && new RegExp(`\\b${authorLastName}\\b`, 'i').test(text);
    const hasTitle = item.title && item.title.length > 5 && text.toLowerCase().includes(item.title.toLowerCase());

    if (hasAuthor || hasTitle) {
      seenIds.add(item.id);
      matchedEvidence.push(item);
    }
  });

  const citations: Array<CitationItem & { evidence?: AcademicEvidence }> = matchedEvidence.map((e) => ({
    evidenceId: e.id,
    claimSupported: e.claim,
    evidence: e
  }));

  return {
    citations,
    unsupportedClaims: [],
    hasUnverified: false
  };
}

