export type EvidenceSourceType =
  | "official-syllabus"
  | "official-mark-scheme"
  | "examiner-report"
  | "coursebook"
  | "research-study"
  | "official-report";

export type VerificationStatus = "verified" | "coursebook-summary" | "ai-synthesis" | "citation-needed";

export interface AcademicEvidence {
  id: string;
  claim: string;
  sourceType: EvidenceSourceType;
  author?: string;
  title: string;
  publisher?: string;
  year?: number;
  page?: string;
  url?: string;
  geography?: string;
  population?: string;
  exactQuote?: string;
  verificationStatus: VerificationStatus;
  syllabusVersion?: string;
}

export interface CitationItem {
  evidenceId: string;
  claimSupported: string;
}

export interface UnsupportedClaimItem {
  claim: string;
  reason: string;
}

export interface StructuredAnswerOutput {
  content: string;
  citations: CitationItem[];
  unsupportedClaims: UnsupportedClaimItem[];
  alternativeApproaches?: string[];
  limitationsOfExample?: string[];
}
