import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, Type } from '../lib/ai';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  UploadCloud, 
  Camera, 
  FileText, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Download, 
  Copy, 
  Check, 
  Loader2, 
  AlertCircle, 
  Trash2, 
  Eye, 
  BookOpen, 
  RefreshCw,
  HelpCircle,
  Layers,
  ArrowRight,
  TrendingUp,
  FileCheck,
  ChevronRight,
  ListOrdered,
  ScanText,
  FileCode,
  FileSpreadsheet,
  Maximize2,
  X,
  Scale,
  ShieldCheck,
  MinusCircle,
  AlertOctagon,
  Target,
  BadgeAlert,
  User,
  Hash,
  School,
  Info,
  CheckCircle
} from 'lucide-react';
import { sanitizeSociologyMarkdown } from '../markdownUtils';
import { exportElementToPdf } from '../pdfUtils';
import AIStudyDisclaimer from './AIStudyDisclaimer';

export interface MarkDeduction {
  category: 'AO1 Knowledge Gaps' | 'AO2 Application Deficit' | 'AO3 Juxtaposition Penalty' | 'Methodological Omission' | 'Common-Sense Writing' | 'Lack of Named Theorists / Studies';
  marksLost: number;
  reason: string;
}

export interface ExaminerStamp {
  stampCode: 'BOD' | 'EXP' | 'TV' | 'EVAL' | 'M' | 'DEV' | 'NAQ' | 'GEN' | 'SEEN' | 'TICK' | 'CROSS';
  meaning: string;
  count: number;
  explanation: string;
}

export interface EvaluatedQuestion {
  questionId: string;
  questionTitle: string;
  questionText: string;
  tariffStructure?: string;
  maximumMark: number;
  estimatedMarkMin: number;
  estimatedMarkMax: number;
  indicativeLevel: string;
  confidence: 'Low' | 'Moderate' | 'High';
  confidenceExplanation: string;
  evidenceFromStudentAnswer: string[];
  missingRequirements: string[];
  actionsToReachNextBand: string[];
  ecrBenchmarkLevel?: 'High' | 'Middle' | 'Low';
  commonPitfallsDetected?: string[];
  ecrGuidanceNotes?: string;
  ao1EstimatedMin: number;
  ao1EstimatedMax: number;
  ao1Max: number;
  ao1Commentary?: string;
  ao2EstimatedMin: number;
  ao2EstimatedMax: number;
  ao2Max: number;
  ao2Commentary?: string;
  ao3EstimatedMin: number;
  ao3EstimatedMax: number;
  ao3Max: number;
  ao3Commentary?: string;
  examinerCommentary: string;
  transcribedAnswer: string;
  examinerStamps?: ExaminerStamp[];
  markDeductions: MarkDeduction[];
  annotatedSnippets: Array<{
    studentSnippet: string;
    examinerNote: string;
    type: 'strength' | 'weakness' | 'opportunity';
    stampCode?: string;
  }>;
  keyStrengths: string[];
  keyImprovements: string[];
  upgradedSampleParagraph?: string;
  upgradeExplanation?: string;
  // Compatibility fields
  marksAwarded?: number;
  marksPossible?: number;
  ao1Score?: number;
  ao2Score?: number;
  ao3Score?: number;
  awardedLevelBand?: string;
}

export interface MultiQuestionExamResult {
  paperTitle: string;
  candidateName?: string;
  candidateNumber?: string;
  centreNumber?: string;
  syllabusComponent?: string;
  isAccessArrangementTranscript?: boolean;
  totalEstimatedMin: number;
  totalEstimatedMax: number;
  totalMarksPossible: number;
  indicativeLevel: string;
  confidence: 'Low' | 'Moderate' | 'High';
  confidenceExplanation: string;
  ecrBenchmarkLevel?: 'High' | 'Middle' | 'Low';
  markingRigorMode?: string;
  overallExaminerSummary: string;
  globalStrengths: string[];
  globalImprovements: string[];
  totalQuestionsDetected: number;
  topPenaltiesAcrossScript: string[];
  scriptExaminerStamps?: ExaminerStamp[];
  scriptCommonPitfalls?: string[];
  questions: EvaluatedQuestion[];
  // Compatibility fields
  totalMarksAwarded?: number;
  totalMarksLost?: number;
  overallGrade?: string;
  overallLevel?: string;
}

/**
 * Normalizes and guards all numerical scores, ranges, and fields from AI evaluation
 */
function normalizeExamResult(data: any): MultiQuestionExamResult {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid exam evaluation response format.');
  }

  const rawQuestions = Array.isArray(data.questions) ? data.questions : [];
  const questions: EvaluatedQuestion[] = rawQuestions.map((q: any, idx: number) => {
    const maximumMark = Number(q.maximumMark || q.marksPossible) || 
      (Number(q.ao1Max || 0) + Number(q.ao2Max || 0) + Number(q.ao3Max || 0)) || 10;
    
    // Min and Max marks
    let minMark = q.estimatedMarkMin !== undefined && q.estimatedMarkMin !== null && !isNaN(Number(q.estimatedMarkMin))
      ? Number(q.estimatedMarkMin)
      : (q.marksAwarded !== undefined && !isNaN(Number(q.marksAwarded)) ? Number(q.marksAwarded) : 0);
    
    let maxMark = q.estimatedMarkMax !== undefined && q.estimatedMarkMax !== null && !isNaN(Number(q.estimatedMarkMax))
      ? Number(q.estimatedMarkMax)
      : minMark;
    
    if (isNaN(minMark)) minMark = 0;
    if (isNaN(maxMark)) maxMark = minMark;
    if (minMark > maxMark) {
      const temp = minMark;
      minMark = maxMark;
      maxMark = temp;
    }
    
    // Clamp to maximumMark
    minMark = Math.min(maximumMark, Math.max(0, minMark));
    maxMark = Math.min(maximumMark, Math.max(0, maxMark));
    
    const marksAwarded = q.marksAwarded !== undefined && !isNaN(Number(q.marksAwarded)) 
      ? Number(q.marksAwarded) 
      : Math.round((minMark + maxMark) / 2);

    const ao1Max = Number(q.ao1Max) || (maximumMark === 2 ? 2 : maximumMark === 4 ? 4 : maximumMark === 8 ? 5 : maximumMark === 10 ? 6 : maximumMark === 12 ? 4 : maximumMark === 26 ? 8 : Math.ceil(maximumMark * 0.5));
    const ao2Max = Number(q.ao2Max) || (maximumMark === 8 ? 3 : maximumMark === 10 ? 4 : maximumMark === 12 ? 4 : maximumMark === 26 ? 8 : 0);
    const ao3Max = Number(q.ao3Max) || (maximumMark === 12 ? 4 : maximumMark === 26 ? 10 : 0);

    const ao1Min = (q.ao1EstimatedMin !== undefined && !isNaN(Number(q.ao1EstimatedMin)))
      ? Number(q.ao1EstimatedMin)
      : Math.min(ao1Max, Math.round(minMark * (ao1Max / (maximumMark || 1))));
    const ao1MaxEst = (q.ao1EstimatedMax !== undefined && !isNaN(Number(q.ao1EstimatedMax)))
      ? Number(q.ao1EstimatedMax)
      : Math.min(ao1Max, Math.round(maxMark * (ao1Max / (maximumMark || 1))));
    const ao1Score = q.ao1Score !== undefined && !isNaN(Number(q.ao1Score)) ? Number(q.ao1Score) : Math.round((ao1Min + ao1MaxEst) / 2);

    const ao2Min = (q.ao2EstimatedMin !== undefined && !isNaN(Number(q.ao2EstimatedMin)))
      ? Number(q.ao2EstimatedMin)
      : (ao2Max > 0 ? Math.min(ao2Max, Math.round(minMark * (ao2Max / (maximumMark || 1)))) : 0);
    const ao2MaxEst = (q.ao2EstimatedMax !== undefined && !isNaN(Number(q.ao2EstimatedMax)))
      ? Number(q.ao2EstimatedMax)
      : (ao2Max > 0 ? Math.min(ao2Max, Math.round(maxMark * (ao2Max / (maximumMark || 1)))) : 0);
    const ao2Score = q.ao2Score !== undefined && !isNaN(Number(q.ao2Score)) ? Number(q.ao2Score) : Math.round((ao2Min + ao2MaxEst) / 2);

    const ao3Min = (q.ao3EstimatedMin !== undefined && !isNaN(Number(q.ao3EstimatedMin)))
      ? Number(q.ao3EstimatedMin)
      : (ao3Max > 0 ? Math.min(ao3Max, Math.round(minMark * (ao3Max / (maximumMark || 1)))) : 0);
    const ao3MaxEst = (q.ao3EstimatedMax !== undefined && !isNaN(Number(q.ao3EstimatedMax)))
      ? Number(q.ao3EstimatedMax)
      : (ao3Max > 0 ? Math.min(ao3Max, Math.round(maxMark * (ao3Max / (maximumMark || 1)))) : 0);
    const ao3Score = q.ao3Score !== undefined && !isNaN(Number(q.ao3Score)) ? Number(q.ao3Score) : Math.round((ao3Min + ao3MaxEst) / 2);

    const pct = maximumMark > 0 ? (marksAwarded / maximumMark) : 0;
    const defaultLevel = pct >= 0.8 ? 'Level 4 / Top Band' : pct >= 0.6 ? 'Level 3 / Sound' : pct >= 0.4 ? 'Level 2 / Basic' : 'Level 1 / Limited';

    return {
      questionId: String(q.questionId || `q${idx + 1}`),
      questionTitle: String(q.questionTitle || `Question ${idx + 1}`),
      questionText: String(q.questionText || `Question ${idx + 1}`),
      tariffStructure: q.tariffStructure,
      maximumMark,
      marksPossible: maximumMark,
      estimatedMarkMin: minMark,
      estimatedMarkMax: maxMark,
      marksAwarded,
      indicativeLevel: String(q.indicativeLevel || defaultLevel),
      awardedLevelBand: String(q.awardedLevelBand || q.indicativeLevel || defaultLevel),
      confidence: q.confidence === 'High' || q.confidence === 'Low' ? q.confidence : 'Moderate',
      confidenceExplanation: String(q.confidenceExplanation || 'Based on syllabus mark scheme criteria.'),
      evidenceFromStudentAnswer: Array.isArray(q.evidenceFromStudentAnswer) ? q.evidenceFromStudentAnswer : [],
      missingRequirements: Array.isArray(q.missingRequirements) ? q.missingRequirements : [],
      actionsToReachNextBand: Array.isArray(q.actionsToReachNextBand) ? q.actionsToReachNextBand : [],
      ecrBenchmarkLevel: q.ecrBenchmarkLevel || (pct >= 0.7 ? 'High' : pct >= 0.4 ? 'Middle' : 'Low'),
      commonPitfallsDetected: Array.isArray(q.commonPitfallsDetected) ? q.commonPitfallsDetected : [],
      ecrGuidanceNotes: q.ecrGuidanceNotes,
      ao1EstimatedMin: ao1Min,
      ao1EstimatedMax: ao1MaxEst,
      ao1Max,
      ao1Score,
      ao1Commentary: q.ao1Commentary,
      ao2EstimatedMin: ao2Min,
      ao2EstimatedMax: ao2MaxEst,
      ao2Max,
      ao2Score,
      ao2Commentary: q.ao2Commentary,
      ao3EstimatedMin: ao3Min,
      ao3EstimatedMax: ao3MaxEst,
      ao3Max,
      ao3Score,
      ao3Commentary: q.ao3Commentary,
      examinerCommentary: String(q.examinerCommentary || 'Candidate answer evaluated against Cambridge 9699 mark criteria.'),
      transcribedAnswer: String(q.transcribedAnswer || ''),
      examinerStamps: Array.isArray(q.examinerStamps) ? q.examinerStamps : [],
      markDeductions: Array.isArray(q.markDeductions) ? q.markDeductions : [],
      annotatedSnippets: Array.isArray(q.annotatedSnippets) ? q.annotatedSnippets : [],
      keyStrengths: Array.isArray(q.keyStrengths) ? q.keyStrengths : [],
      keyImprovements: Array.isArray(q.keyImprovements) ? q.keyImprovements : [],
      upgradedSampleParagraph: q.upgradedSampleParagraph,
      upgradeExplanation: q.upgradeExplanation
    };
  });

  const sumPossible = questions.reduce((acc, q) => acc + (q.maximumMark || 0), 0);
  const totalMarksPossible = (data.totalMarksPossible && !isNaN(Number(data.totalMarksPossible)) && Number(data.totalMarksPossible) > 0)
    ? Number(data.totalMarksPossible)
    : (sumPossible > 0 ? sumPossible : 60);

  const sumMin = questions.reduce((acc, q) => acc + (q.estimatedMarkMin || 0), 0);
  const sumMax = questions.reduce((acc, q) => acc + (q.estimatedMarkMax || 0), 0);
  const sumAwarded = questions.reduce((acc, q) => acc + (q.marksAwarded || 0), 0);

  let totalEstimatedMin = (data.totalEstimatedMin !== undefined && !isNaN(Number(data.totalEstimatedMin)))
    ? Number(data.totalEstimatedMin)
    : sumMin;
  let totalEstimatedMax = (data.totalEstimatedMax !== undefined && !isNaN(Number(data.totalEstimatedMax)))
    ? Number(data.totalEstimatedMax)
    : sumMax;
  
  if (totalEstimatedMin > totalEstimatedMax) {
    const temp = totalEstimatedMin;
    totalEstimatedMin = totalEstimatedMax;
    totalEstimatedMax = temp;
  }

  const totalMarksAwarded = (data.totalMarksAwarded !== undefined && !isNaN(Number(data.totalMarksAwarded)))
    ? Number(data.totalMarksAwarded)
    : (sumAwarded > 0 ? sumAwarded : Math.round((totalEstimatedMin + totalEstimatedMax) / 2));

  const totalMarksLost = Math.max(0, totalMarksPossible - totalMarksAwarded);

  const overallPct = totalMarksPossible > 0 ? (totalMarksAwarded / totalMarksPossible) : 0;
  const overallGrade = data.overallGrade || (overallPct >= 0.8 ? 'A*' : overallPct >= 0.7 ? 'A' : overallPct >= 0.6 ? 'B' : overallPct >= 0.5 ? 'C' : overallPct >= 0.4 ? 'D' : 'E');
  const overallLevel = data.overallLevel || data.indicativeLevel || (overallPct >= 0.75 ? 'Upper Band' : overallPct >= 0.5 ? 'Middle Band' : 'Basic Band');

  return {
    paperTitle: String(data.paperTitle || 'Sociology Paper 1: Socialisation, Identity and Methods of Research'),
    candidateName: data.candidateName,
    candidateNumber: data.candidateNumber,
    centreNumber: data.centreNumber,
    syllabusComponent: data.syllabusComponent,
    isAccessArrangementTranscript: data.isAccessArrangementTranscript,
    totalEstimatedMin,
    totalEstimatedMax,
    totalMarksPossible,
    totalMarksAwarded,
    totalMarksLost,
    overallGrade,
    overallLevel,
    indicativeLevel: String(data.indicativeLevel || overallLevel),
    confidence: data.confidence === 'High' || data.confidence === 'Low' ? data.confidence : 'Moderate',
    confidenceExplanation: String(data.confidenceExplanation || 'Evaluated against published Cambridge 9699 assessment criteria.'),
    ecrBenchmarkLevel: data.ecrBenchmarkLevel || (overallPct >= 0.7 ? 'High' : overallPct >= 0.4 ? 'Middle' : 'Low'),
    markingRigorMode: data.markingRigorMode,
    overallExaminerSummary: String(data.overallExaminerSummary || 'Candidate demonstrated understanding of key concepts with opportunities for deeper evaluation and named theoretical evidence.'),
    globalStrengths: Array.isArray(data.globalStrengths) ? data.globalStrengths : [],
    globalImprovements: Array.isArray(data.globalImprovements) ? data.globalImprovements : [],
    totalQuestionsDetected: questions.length || Number(data.totalQuestionsDetected) || 1,
    topPenaltiesAcrossScript: Array.isArray(data.topPenaltiesAcrossScript) ? data.topPenaltiesAcrossScript : [],
    scriptExaminerStamps: Array.isArray(data.scriptExaminerStamps) ? data.scriptExaminerStamps : [],
    scriptCommonPitfalls: Array.isArray(data.scriptCommonPitfalls) ? data.scriptCommonPitfalls : [],
    questions
  };
}

/**
 * Fault-tolerant JSON repair and parser for large multi-page exam results
 */
function safeParseJson<T>(raw: string): T {
  let cleaned = (raw || '').trim();
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
  }

  // 1. Direct standard parse
  try {
    return JSON.parse(cleaned);
  } catch (initialErr) {
    console.warn('Direct JSON parse failed, attempting auto-repair...', initialErr);

    const firstBrace = cleaned.indexOf('{');
    if (firstBrace === -1) {
      throw initialErr;
    }
    cleaned = cleaned.substring(firstBrace);

    // 2. Remove trailing commas before brackets/braces
    let candidate = cleaned.replace(/,\s*([\]}])/g, '$1');
    try {
      return JSON.parse(candidate);
    } catch {
      // 3. Auto-close truncated string and bracket stack
      let inString = false;
      let escape = false;
      const stack: ('{' | '[')[] = [];

      for (let i = 0; i < candidate.length; i++) {
        const char = candidate[i];
        if (escape) {
          escape = false;
          continue;
        }
        if (char === '\\') {
          escape = true;
          continue;
        }
        if (char === '"') {
          inString = !inString;
          continue;
        }
        if (!inString) {
          if (char === '{' || char === '[') {
            stack.push(char);
          } else if (char === '}') {
            if (stack.length && stack[stack.length - 1] === '{') stack.pop();
          } else if (char === ']') {
            if (stack.length && stack[stack.length - 1] === '[') stack.pop();
          }
        }
      }

      let repaired = candidate;
      if (inString) repaired += '"';
      repaired = repaired.replace(/,\s*$/, '');
      while (stack.length > 0) {
        const top = stack.pop();
        if (top === '{') repaired += '}';
        else if (top === '[') repaired += ']';
      }

      try {
        return JSON.parse(repaired);
      } catch (finalErr) {
        throw new Error(`Failed to parse response: ${initialErr instanceof Error ? initialErr.message : String(initialErr)}`);
      }
    }
  }
}

interface UploadedFile {
  url: string;
  base64: string;
  mimeType: string;
  name: string;
  size: number;
  isPdf: boolean;
}

export default function AnswerScannerView() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [selectedPaper, setSelectedPaper] = useState('Auto-Detect Paper from Script');
  const [optionalQuestionGuidance, setOptionalQuestionGuidance] = useState('');
  const [markingRigor, setMarkingRigor] = useState<'strict' | 'standard' | 'formative'>('strict');
  
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<MultiQuestionExamResult | null>(null);
  const [activeQuestionTab, setActiveQuestionTab] = useState<number | 'overview'>('overview');
  const [copied, setCopied] = useState(false);
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [previewFile, setPreviewFile] = useState<UploadedFile | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const printContainerRef = useRef<HTMLDivElement>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  const processFile = (file: File) => {
    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    const isImage = file.type.startsWith('image/');

    if (!isPdf && !isImage) {
      setError('Please upload valid PDF documents (.pdf) or image files (.png, .jpg, .jpeg, .webp).');
      return;
    }

    const mimeType = isPdf ? 'application/pdf' : file.type || 'image/jpeg';
    const reader = new FileReader();

    reader.onload = () => {
      const resultUrl = reader.result as string;
      const base64Data = resultUrl.split(',')[1];
      setFiles((prev) => [
        ...prev,
        {
          url: resultUrl,
          base64: base64Data,
          mimeType,
          name: file.name,
          size: file.size,
          isPdf
        }
      ]);
    };
    reader.readAsDataURL(file);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;
    if (!uploadedFiles || uploadedFiles.length === 0) return;
    Array.from(uploadedFiles).forEach(processFile);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
    if (!droppedFiles || droppedFiles.length === 0) return;
    Array.from(droppedFiles).forEach(processFile);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== index));
    if (previewFile && files[index]?.name === previewFile.name) {
      setPreviewFile(null);
    }
  };

  const handleEvaluatePaper = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (files.length === 0 && !optionalQuestionGuidance.trim()) {
      setError('Please upload at least one PDF or photo of your exam answer paper.');
      return;
    }

    setLoading(true);
    setStatusMessage('Reading PDF/images with OCR, parsing candidate booklet, and applying strict Cambridge mark schemes...');
    setError(null);

    try {
      const ai = new GoogleGenAI();

      const parts: any[] = [];

      files.forEach((f) => {
        parts.push({
          inlineData: {
            mimeType: f.mimeType,
            data: f.base64
          }
        });
      });

      const prompt = `You provide AI-assisted feedback aligned with Cambridge International AS & A Level Sociology (9699) assessment objectives.
You evaluate student exam answer scripts uploaded as multi-page PDF documents or scanned/photographed image pages containing ONE OR MULTIPLE QUESTIONS across Paper 1 (Socialisation, Identity & Methods), Paper 2 (The Family), Paper 3 (Education), or Paper 4 (Globalisation, Media & Religion).

TRANSPARENT ESTIMATION DIRECTIVES (CRITICAL):
- DO NOT present marks as definitive or official Cambridge awards.
- Return ESTIMATED MARK RANGES (e.g. estimatedMarkMin = 18, estimatedMarkMax = 22 out of maximumMark = 26).
- Return an INDICATIVE LEVEL (e.g. "High Level 4 / possible Level 5" or "Level 3 Band").
- Return a CONFIDENCE rating ('Low', 'Moderate', or 'High') with a concise confidenceExplanation (explaining factors such as handwriting clarity, answer completeness, or boundary proximity).
- Do not infer final qualification grades (A*, A, B, etc.) from a single script or response.
- State clear evidence from the student's answer supporting each judgement.
- Explicitly list missing requirements and specific actions needed to reach the next band.

EXAM SUBMISSION PARAMETERS:
- TARGET PAPER: ${selectedPaper}
- MARKING RIGOR STANDARD: ${markingRigor === 'strict' ? 'Strict calibration aligned with published Cambridge 9699 mark schemes' : markingRigor === 'standard' ? 'Standard assessment objective alignment' : 'Formative diagnostic feedback'}
- OPTIONAL GUIDANCE / STUDENT TEXT: "${optionalQuestionGuidance.trim() || 'Auto-detect all questions directly from the uploaded PDF/images answer script.'}"

================================================================================
CAMBRIDGE 9699 ASSESSMENT OBJECTIVES & STRUCTURE GUIDANCE:
================================================================================

1. QUESTION 1 (4 MARKS SHORT ANSWER - P1, P2, P3):
   - STRUCTURE: 2 distinct points (2 marks each). Total = 4 marks (AO1).
   - PART-MARK BREAKDOWN:
     * Point 1: 1 mark for clear identification + 1 mark for description in context.
     * Point 2: 1 mark for second distinct identification + 1 mark for description in context.

2. QUESTION 2(a) / 8-MARK STRUCTURED QUESTIONS (P1 Q2a, P2 Q2a, P3 Q2):
   - STRUCTURE: 2 distinct reasons/ways (4 marks each). Total = 8 marks (AO1=4, AO2=4).
   - 4-PART BREAKDOWN PER POINT:
     * 1 mark: Identification of valid reason/way
     * 1 mark: Explanation of the reason/way
     * 1 mark: Selection of relevant sociological material/evidence (theorist, study, or concept)
     * 1 mark: Explicit application of that material to answer the specific question prompt

3. QUESTION 2(b) / 6-MARK LIMITATIONS (P1 Q2b, P2 Q2b):
   - STRUCTURE: 2 distinct limitations or strengths (3 marks each). Total = 6 marks (AO1=3, AO2=3).
   - 3-STEP RUBRIC PER POINT: Identification (1m) + Methodological explanation (1m) + Sociological impact on validity/reliability/ethics (1m).

4. QUESTION 3(a) (10 MARKS in P1/P2) & QUESTION 3 (12 MARKS in P3):
   - STRUCTURE: 2 fully developed points (5 marks each in P1/P2; 6 marks each in P3).
   - Engages named sociological theories with clear explanatory mechanisms.

5. QUESTION 3(b) / 6-MARK SINGLE COUNTERARGUMENT (P1 Q3b, P2 Q3b):
   - STRUCTURE: Exactly ONE well-developed counterargument (up to 6 marks: AO1=3, AO2=3 or AO3=6).

6. SECTION B 26-MARK EXTENDED ESSAYS (P1 Q4/5, P2 Q4/5, P3 Q4):
   - TARIFF: Paper 1 & 2 (AO1=8, AO2=8, AO3=10); Paper 3 (AO1=10, AO2=6, AO3=10).
   - Requires ongoing evaluation within paragraphs and evaluative conclusions.

7. PAPER 4 ESSAYS (35 MARKS EACH):
   - TARIFF: AO1=9, AO2=11, AO3=15. Total = 35 Marks.

================================================================================
EXAMINER STAMP ANNOTATIONS:
================================================================================
Apply these standardized on-screen marking annotations:
- [BOD] Benefit of Doubt
- [EXP] Explanation / Development
- [DEV] Development
- [EVAL] Evaluation
- [TV] Too Vague
- [NAQ] Not Answering Question
- [GEN] Generalised
- [M] Marginal / Minor credit
- [SEEN] Checked
- [TICK] Valid sociological point credited
- [CROSS] Incorrect or invalid assertion

Return your response strictly as a JSON object adhering to the schema.`;

      parts.push({ text: prompt });

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: parts,
        config: {
          maxOutputTokens: 65536,
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              paperTitle: { type: Type.STRING, description: 'Detected Cambridge Paper title (e.g. Paper 1: Socialisation, Identity & Methods)' },
              candidateName: { type: Type.STRING, description: 'Candidate name if detected on cover sheet' },
              candidateNumber: { type: Type.STRING, description: 'Candidate number' },
              centreNumber: { type: Type.STRING, description: 'Centre number' },
              syllabusComponent: { type: Type.STRING, description: 'Syllabus and component code (e.g. 9699/12)' },
              totalEstimatedMin: { type: Type.NUMBER, description: 'Sum of minimum estimated marks across all detected questions' },
              totalEstimatedMax: { type: Type.NUMBER, description: 'Sum of maximum estimated marks across all detected questions' },
              totalMarksPossible: { type: Type.NUMBER, description: 'Sum of all maximum possible marks across all detected questions' },
              indicativeLevel: { type: Type.STRING, description: 'Indicative performance band e.g. High Level 4 / possible Level 5' },
              confidence: { type: Type.STRING, enum: ['Low', 'Moderate', 'High'], description: 'Confidence level in the estimated evaluation' },
              confidenceExplanation: { type: Type.STRING, description: 'Explanation of confidence factors' },
              ecrBenchmarkLevel: { type: Type.STRING, enum: ['High', 'Middle', 'Low'], description: 'Indicative benchmark band' },
              markingRigorMode: { type: Type.STRING, description: 'Standard applied' },
              overallExaminerSummary: { type: Type.STRING, description: 'Comprehensive feedback overview informed by published guidance' },
              globalStrengths: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: 'Key observed strengths across the answer script'
              },
              globalImprovements: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: 'Key priority actions for band progression'
              },
              topPenaltiesAcrossScript: {
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: 'Summary of most significant areas where marks were limited'
              },
              scriptCommonPitfalls: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'List of specific pitfalls detected across the script'
              },
              isAccessArrangementTranscript: {
                type: Type.BOOLEAN,
                description: 'Whether this script is a word-processor transcript'
              },
              scriptExaminerStamps: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    stampCode: { type: Type.STRING, enum: ['BOD', 'EXP', 'TV', 'EVAL', 'M', 'DEV', 'NAQ', 'GEN', 'SEEN', 'TICK', 'CROSS'] },
                    meaning: { type: Type.STRING },
                    count: { type: Type.NUMBER },
                    explanation: { type: Type.STRING }
                  },
                  required: ['stampCode', 'meaning', 'count', 'explanation']
                }
              },
              totalQuestionsDetected: { type: Type.NUMBER, description: 'Total count of separate questions detected' },
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    questionId: { type: Type.STRING, description: 'Identifier e.g. Q1, Q2a, Q2b, Q3a, Q3b, Q4, Q5' },
                    questionTitle: { type: Type.STRING, description: 'Question title e.g. Question 1, Question 2(a), Question 4' },
                    questionText: { type: Type.STRING, description: 'Prompt text of the question' },
                    tariffStructure: { type: Type.STRING, description: 'Description of mark scheme structure' },
                    maximumMark: { type: Type.NUMBER, description: 'Max marks possible for this question' },
                    estimatedMarkMin: { type: Type.NUMBER, description: 'Minimum estimated mark' },
                    estimatedMarkMax: { type: Type.NUMBER, description: 'Maximum estimated mark' },
                    indicativeLevel: { type: Type.STRING, description: 'Indicative performance level (e.g. Level 4 / Upper Band)' },
                    confidence: { type: Type.STRING, enum: ['Low', 'Moderate', 'High'], description: 'Confidence in assessment of this question' },
                    confidenceExplanation: { type: Type.STRING, description: 'Why this confidence level was assigned' },
                    evidenceFromStudentAnswer: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: 'Direct evidence from student answer supporting judgements'
                    },
                    missingRequirements: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: 'Missing syllabus or question requirements'
                    },
                    actionsToReachNextBand: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: 'Specific actionable steps needed to reach the next band'
                    },
                    ecrBenchmarkLevel: { type: Type.STRING, enum: ['High', 'Middle', 'Low'] },
                    commonPitfallsDetected: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: 'Pitfalls detected in this answer'
                    },
                    ecrGuidanceNotes: { type: Type.STRING, description: 'Feedback informed by published examiner guidance' },
                    ao1EstimatedMin: { type: Type.NUMBER, description: 'Estimated AO1 min' },
                    ao1EstimatedMax: { type: Type.NUMBER, description: 'Estimated AO1 max' },
                    ao1Max: { type: Type.NUMBER, description: 'AO1 max mark' },
                    ao1Commentary: { type: Type.STRING, description: 'AO1 specific commentary' },
                    ao2EstimatedMin: { type: Type.NUMBER, description: 'Estimated AO2 min' },
                    ao2EstimatedMax: { type: Type.NUMBER, description: 'Estimated AO2 max' },
                    ao2Max: { type: Type.NUMBER, description: 'AO2 max mark' },
                    ao2Commentary: { type: Type.STRING, description: 'AO2 specific commentary' },
                    ao3EstimatedMin: { type: Type.NUMBER, description: 'Estimated AO3 min' },
                    ao3EstimatedMax: { type: Type.NUMBER, description: 'Estimated AO3 max' },
                    ao3Max: { type: Type.NUMBER, description: 'AO3 max mark' },
                    ao3Commentary: { type: Type.STRING, description: 'AO3 specific commentary' },
                    examinerCommentary: { type: Type.STRING, description: 'Qualitative assessment commentary' },
                    transcribedAnswer: { type: Type.STRING, description: 'OCR transcription of student answer' },
                    examinerStamps: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          stampCode: { type: Type.STRING, enum: ['BOD', 'EXP', 'TV', 'EVAL', 'M', 'DEV', 'NAQ', 'GEN', 'SEEN', 'TICK', 'CROSS'] },
                          meaning: { type: Type.STRING },
                          count: { type: Type.NUMBER },
                          explanation: { type: Type.STRING }
                        },
                        required: ['stampCode', 'meaning', 'count', 'explanation']
                      }
                    },
                    markDeductions: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          category: { 
                            type: Type.STRING, 
                            enum: [
                              'AO1 Knowledge Gaps', 
                              'AO2 Application Deficit', 
                              'AO3 Juxtaposition Penalty', 
                              'Methodological Omission', 
                              'Common-Sense Writing', 
                              'Lack of Named Theorists / Studies'
                            ] 
                          },
                          marksLost: { type: Type.NUMBER },
                          reason: { type: Type.STRING }
                        },
                        required: ['category', 'marksLost', 'reason']
                      }
                    },
                    annotatedSnippets: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          studentSnippet: { type: Type.STRING },
                          examinerNote: { type: Type.STRING },
                          stampCode: { type: Type.STRING },
                          type: { type: Type.STRING, enum: ['strength', 'weakness', 'opportunity'] }
                        },
                        required: ['studentSnippet', 'examinerNote', 'type']
                      }
                    },
                    keyStrengths: { type: Type.ARRAY, items: { type: Type.STRING } },
                    keyImprovements: { type: Type.ARRAY, items: { type: Type.STRING } },
                    upgradedSampleParagraph: { type: Type.STRING, description: 'Illustrative high-band model response paragraph rewrite' },
                    upgradeExplanation: { type: Type.STRING, description: 'Explanation of how the upgraded paragraph meets high-band criteria' }
                  },
                  required: [
                    'questionId',
                    'questionTitle',
                    'questionText',
                    'maximumMark',
                    'estimatedMarkMin',
                    'estimatedMarkMax',
                    'indicativeLevel',
                    'confidence',
                    'confidenceExplanation',
                    'evidenceFromStudentAnswer',
                    'missingRequirements',
                    'actionsToReachNextBand',
                    'ao1EstimatedMin',
                    'ao1EstimatedMax',
                    'ao1Max',
                    'examinerCommentary',
                    'transcribedAnswer',
                    'markDeductions',
                    'annotatedSnippets',
                    'keyStrengths',
                    'keyImprovements'
                  ]
                }
              }
            },
            required: [
              'paperTitle',
              'totalEstimatedMin',
              'totalEstimatedMax',
              'totalMarksPossible',
              'indicativeLevel',
              'confidence',
              'confidenceExplanation',
              'overallExaminerSummary',
              'globalStrengths',
              'globalImprovements',
              'topPenaltiesAcrossScript',
              'totalQuestionsDetected',
              'questions'
            ]
          }
        }
      });

      const rawText = response.text || '';
      const parsed = safeParseJson<MultiQuestionExamResult>(rawText);

      if (!parsed) {
        throw new Error('Could not parse exam questions from the uploaded document. Please check the document clarity and try again.');
      }

      const normalized = normalizeExamResult(parsed);
      setResult(normalized);
      setActiveQuestionTab('overview');
    } catch (err: any) {
      console.error('Multi-Question Evaluation Error:', err);
      setError(err?.message || 'Failed to scan and evaluate exam paper. Please ensure the PDF or image is readable and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyReport = () => {
    if (!result) return;
    let text = `CAMBRIDGE INTERNATIONAL AS & A LEVEL SOCIOLOGY (9699)
AI-ASSISTED FEEDBACK REPORT (ALIGNED WITH CAMBRIDGE 9699 ASSESSMENT OBJECTIVES)
`;
    if (result.candidateName || result.candidateNumber || result.centreNumber || result.syllabusComponent) {
      text += `Candidate: ${result.candidateName || 'N/A'} (No: ${result.candidateNumber || 'N/A'}) | Centre: ${result.centreNumber || 'N/A'} | Syllabus: ${result.syllabusComponent || '9699'}\n`;
    }
    text += `Component: ${result.paperTitle}
Estimated Mark Range: ${result.totalEstimatedMin}–${result.totalEstimatedMax} / ${result.totalMarksPossible} - Indicative Level: ${result.indicativeLevel}
Confidence: ${result.confidence} (${result.confidenceExplanation})
Total Questions Evaluated: ${result.totalQuestionsDetected}

FEEDBACK INFORMED BY PUBLISHED EXAMINER GUIDANCE:
${result.overallExaminerSummary}

KEY OBSERVED STRENGTHS:
${result.globalStrengths.map(s => `• ${s}`).join('\n')}

PRIORITY ACTIONS FOR BAND PROGRESSION:
${result.globalImprovements.map(i => `• ${i}`).join('\n')}
`;

    if (result.topPenaltiesAcrossScript && result.topPenaltiesAcrossScript.length > 0) {
      text += `\nCOMMON AREAS FOR MARK IMPROVEMENT ACROSS SCRIPT:\n${result.topPenaltiesAcrossScript.map(p => `• ${p}`).join('\n')}\n`;
    }

    text += `
==================================================
INDIVIDUAL QUESTION BREAKDOWN
==================================================
`;

    result.questions.forEach((q) => {
      text += `
[${q.questionTitle}: ${q.questionText}]
Estimated Mark Range: ${q.estimatedMarkMin}–${q.estimatedMarkMax} / ${q.maximumMark} Marks
Indicative Level: ${q.indicativeLevel || 'Standard'} | Confidence: ${q.confidence}
AO Breakdown: AO1: ${q.ao1EstimatedMin}-${q.ao1EstimatedMax}/${q.ao1Max} | AO2: ${q.ao2EstimatedMin || 0}-${q.ao2EstimatedMax || 0}/${q.ao2Max || 0} | AO3: ${q.ao3EstimatedMin || 0}-${q.ao3EstimatedMax || 0}/${q.ao3Max || 0}
Examiner Commentary: ${q.examinerCommentary}
`;

      if (q.evidenceFromStudentAnswer && q.evidenceFromStudentAnswer.length > 0) {
        text += `\nEvidence from student answer:\n${q.evidenceFromStudentAnswer.map(e => `• ${e}`).join('\n')}\n`;
      }

      if (q.missingRequirements && q.missingRequirements.length > 0) {
        text += `\nMissing requirements:\n${q.missingRequirements.map(m => `• ${m}`).join('\n')}\n`;
      }

      if (q.actionsToReachNextBand && q.actionsToReachNextBand.length > 0) {
        text += `\nActions to reach next band:\n${q.actionsToReachNextBand.map(a => `• ${a}`).join('\n')}\n`;
      }

      if (q.upgradedSampleParagraph) {
        text += `\nIllustrative High-Band Model Response:\n"${q.upgradedSampleParagraph}"\n`;
      }

      text += `
Transcribed Candidate Text:
${q.transcribedAnswer}

---
`;
    });

    text += `\nDISCLAIMER: AI-generated study guidance. Marks and performance bands are estimates and may differ from those awarded by a Cambridge examiner. Verify important material against the current Cambridge 9699 syllabus, published mark schemes and approved coursebooks.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportPdf = async () => {
    if (!result || !printContainerRef.current) return;
    setIsExportingPdf(true);
    try {
      const filename = `Cambridge_9699_Study_Feedback_${result.totalEstimatedMin}to${result.totalEstimatedMax}of${result.totalMarksPossible}.pdf`;
      await exportElementToPdf(printContainerRef.current, filename);
    } catch (err) {
      console.error('PDF Export Error:', err);
      setError('Failed to export study report PDF. Please try again.');
    } finally {
      setIsExportingPdf(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-5xl mx-auto space-y-8 pb-16"
    >
      {/* Header */}
      <header className="border-b border-slate-200 pb-6">
        <div className="flex items-center gap-3 text-indigo-600 mb-2">
          <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
            <Camera size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Scan & Grade Practice Answers</h2>
            <p className="text-slate-600 text-sm">
              Upload PDF practice answer scripts or scanned handwritten responses. AI evaluates work against Cambridge 9699 assessment objectives, provides estimated mark ranges, and highlights missing requirements.
            </p>
          </div>
        </div>
      </header>

      {/* Prominent AI Study Disclaimer */}
      <AIStudyDisclaimer variant="standard" />

      {/* Auto-Detection & PDF Info Banner */}
      <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-900">
            <ScanText size={16} className="text-indigo-600" />
            <span>PDF Document & Multi-Page Image OCR Enabled:</span>
          </div>
          <span className="text-[11px] font-bold text-indigo-700 bg-white px-2.5 py-0.5 rounded-full border border-indigo-200">
            PDF + Photo Support
          </span>
        </div>
        <p className="text-xs text-slate-700 leading-relaxed">
          Upload <strong>PDF files</strong> (scanned practice booklets, exported digital notes) or <strong>camera photos</strong>. The vision system reads pages sequentially, evaluates each question against Cambridge 9699 assessment objectives, and returns estimated mark ranges.
        </p>
      </div>

      {/* Upload & Configuration Form */}
      <form onSubmit={handleEvaluatePaper} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        {/* Step 1: Upload PDF or Images */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-bold text-slate-900">
              1. Upload Exam Script (PDF or Photos/Images) <span className="text-red-500">*</span>
            </label>
            <span className="text-xs text-slate-500 font-medium">
              Accepts .PDF, .PNG, .JPG, .JPEG, .WEBP
            </span>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="application/pdf,image/*,.pdf,.png,.jpg,.jpeg,.webp"
            multiple
            className="hidden"
          />

          {files.length === 0 ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-3 ${
                isDragging 
                  ? 'border-indigo-600 bg-indigo-50/50 scale-[1.01]' 
                  : 'border-slate-300 hover:border-indigo-500 bg-slate-50/60 hover:bg-indigo-50/30'
              }`}
            >
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shadow-xs">
                <UploadCloud size={28} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  Drop your PDF exam booklet or photo pages here, or browse
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Multi-page PDF files and high-res image sets are fully parsed with OCR.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl hover:bg-indigo-700 transition-colors cursor-pointer shadow-xs"
                >
                  Select PDF or Images
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
              >
                {files.map((file, index) => (
                  <div key={index} className="relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-50 aspect-3/4 flex flex-col">
                    {file.isPdf ? (
                      /* PDF Card Representation */
                      <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-b from-rose-50/60 to-slate-100/90 relative">
                        <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center shadow-xs mb-2">
                          <FileText size={22} />
                        </div>
                        <span className="text-[10px] font-extrabold text-rose-700 uppercase tracking-widest px-2 py-0.5 bg-rose-100/80 rounded-md border border-rose-200 mb-1">
                          PDF Document
                        </span>
                        <p className="text-xs font-bold text-slate-800 line-clamp-2 px-1 break-all">
                          {file.name}
                        </p>
                        <span className="text-[10px] text-slate-500 mt-1 font-medium">
                          {formatFileSize(file.size)}
                        </span>
                      </div>
                    ) : (
                      /* Image Thumbnail Representation */
                      <img
                        src={file.url}
                        alt={`Page ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Hover Controls */}
                    <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-2">
                      <span className="text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">
                        {file.isPdf ? 'PDF Script' : `Page ${index + 1}`}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setPreviewFile(file)}
                          className="p-1.5 bg-white/90 hover:bg-white text-slate-800 rounded-lg transition-colors cursor-pointer"
                          title="Preview Document"
                        >
                          <Eye size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(index)}
                          className="p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors cursor-pointer"
                          title="Remove file"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-xl aspect-3/4 flex flex-col items-center justify-center gap-2 text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50/40 transition-all cursor-pointer"
                >
                  <UploadCloud size={20} />
                  <span className="text-xs font-bold">+ Add PDF or Page</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>{files.length} document{files.length > 1 ? 's' : ''} uploaded ready for grading.</span>
                <button
                  type="button"
                  onClick={() => setFiles([])}
                  className="text-red-500 hover:underline cursor-pointer"
                >
                  Clear all files
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Step 2: Paper Component, Strictness Mode & Context */}
        <div className="space-y-4 pt-2 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Syllabus Component Focus
              </label>
              <select
                value={selectedPaper}
                onChange={(e) => setSelectedPaper(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Auto-Detect Paper from Script">Auto-Detect Paper from Script</option>
                <option value="Paper 1: Socialisation, Identity and Methods of Research">Paper 1: Socialisation, Identity & Methods</option>
                <option value="Paper 2: The Family">Paper 2: The Family</option>
                <option value="Paper 3: Education">Paper 3: Education</option>
                <option value="Paper 4: Globalisation, Media & Religion">Paper 4: Globalisation, Media & Religion</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Optional: Typed Notes / Context
              </label>
              <input
                type="text"
                value={optionalQuestionGuidance}
                onChange={(e) => setOptionalQuestionGuidance(e.target.value)}
                placeholder="e.g. Scanned 4-page booklet with Q1, Q2a, Q2b and Q5..."
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Examiner Marking Rigour Setting */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                <Scale size={16} className="text-indigo-600" />
                <span>Examiner Strictness & Calibration Mode:</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">
                Calibrated to eliminate AI grading leniency & mark inflation
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setMarkingRigor('strict')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  markingRigor === 'strict'
                    ? 'bg-white border-indigo-600 ring-2 ring-indigo-500/20 shadow-xs'
                    : 'bg-slate-100/70 border-slate-200 hover:bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-indigo-600" />
                    Cambridge 9699 Strict
                  </span>
                  <span className="text-[10px] font-black text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">
                    Recommended
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Zero mark inflation. Strict penalties for juxtaposition, lack of named studies, and common-sense assertions.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setMarkingRigor('standard')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  markingRigor === 'standard'
                    ? 'bg-white border-indigo-600 ring-2 ring-indigo-500/20 shadow-xs'
                    : 'bg-slate-100/70 border-slate-200 hover:bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Scale size={14} className="text-slate-600" />
                    Standard Rigour
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Standard mark scheme adherence with partial credit for emerging theoretical awareness.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setMarkingRigor('formative')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  markingRigor === 'formative'
                    ? 'bg-white border-indigo-600 ring-2 ring-indigo-500/20 shadow-xs'
                    : 'bg-slate-100/70 border-slate-200 hover:bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Target size={14} className="text-slate-600" />
                    Formative Diagnostic
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Focuses on band progression milestones, identifying immediate mark-earning opportunities.
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm flex items-start gap-3">
            <AlertCircle size={18} className="flex-shrink-0 mt-0.5 text-red-500" />
            <div>
              <p className="font-bold">Evaluation Error</p>
              <p>{error}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FileCheck size={14} className="text-indigo-500" />
            <span>CAIE 9699 Examiner Reports & Mark Schemes Calibrated (Strict Rigour)</span>
          </div>

          <button
            type="submit"
            disabled={loading || (files.length === 0 && !optionalQuestionGuidance.trim())}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-indigo-600/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Reading PDF/Script & Marking Questions...</span>
              </>
            ) : (
              <>
                <Sparkles size={16} />
                <span>Grade Script & Generate Report</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* PDF / File Preview Modal */}
      <AnimatePresence>
        {previewFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={() => setPreviewFile(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
            >
              <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-indigo-600" />
                  <span className="font-bold text-sm text-slate-900">{previewFile.name}</span>
                  <span className="text-xs text-slate-500">({formatFileSize(previewFile.size)})</span>
                </div>
                <button
                  onClick={() => setPreviewFile(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-4 bg-slate-100 flex items-center justify-center min-h-[400px]">
                {previewFile.isPdf ? (
                  <iframe
                    src={previewFile.url}
                    title={previewFile.name}
                    className="w-full h-[70vh] rounded-xl border border-slate-300 shadow-xs"
                  />
                ) : (
                  <img
                    src={previewFile.url}
                    alt={previewFile.name}
                    className="max-h-[70vh] object-contain rounded-xl shadow-xs"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Progress State */}
      {loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 bg-white border border-indigo-100 rounded-2xl shadow-sm text-center space-y-4"
        >
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Loader2 size={24} className="animate-spin" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Processing Exam Paper Document</h3>
            <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">{statusMessage}</p>
          </div>
          <div className="w-56 h-1.5 bg-slate-100 rounded-full mx-auto overflow-hidden">
            <div className="w-full h-full bg-indigo-600 animate-pulse" />
          </div>
        </motion.div>
      )}

      {/* Multi-Question Diagnostic Results */}
      {result && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Master Scoreboard Header */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 bg-indigo-500/30 text-indigo-300 rounded-md border border-indigo-400/30">
                    AI-Assisted Multi-Question Assessment Report
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800">
                    {result.totalQuestionsDetected} Question{result.totalQuestionsDetected > 1 ? 's' : ''} Detected
                  </span>
                  <span className="text-xs font-bold text-amber-300 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/80">
                    Cambridge 9699 Rubric Alignment
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {result.paperTitle}
                </h3>
                {(result.candidateName || result.candidateNumber || result.centreNumber || result.syllabusComponent) && (
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/80 mt-2">
                    {result.candidateName && (
                      <div className="flex items-center gap-1.5">
                        <User size={13} className="text-indigo-400" />
                        <span>Candidate: <strong className="text-white">{result.candidateName}</strong></span>
                      </div>
                    )}
                    {result.candidateNumber && (
                      <div className="flex items-center gap-1.5">
                        <Hash size={13} className="text-indigo-400" />
                        <span>Candidate No: <strong className="text-white">{result.candidateNumber}</strong></span>
                      </div>
                    )}
                    {result.centreNumber && (
                      <div className="flex items-center gap-1.5">
                        <School size={13} className="text-indigo-400" />
                        <span>Centre: <strong className="text-white">{result.centreNumber}</strong></span>
                      </div>
                    )}
                    {result.syllabusComponent && (
                      <div className="flex items-center gap-1.5">
                        <FileText size={13} className="text-indigo-400" />
                        <span>Syllabus: <strong className="text-white">{result.syllabusComponent}</strong></span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Total Marks & Grade Widget */}
              <div className="flex flex-wrap items-center gap-4 bg-slate-800/90 border border-slate-700/80 p-4 rounded-xl">
                <div className="text-center min-w-[90px]">
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400">
                    {result.totalEstimatedMin !== undefined && result.totalEstimatedMax !== undefined && result.totalEstimatedMin !== result.totalEstimatedMax
                      ? `${result.totalEstimatedMin}–${result.totalEstimatedMax}`
                      : (result.totalMarksAwarded ?? result.totalEstimatedMax ?? 0)}
                    <span className="text-lg text-slate-400 font-bold">/{result.totalMarksPossible || 60}</span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-0.5">
                    Estimated ({Math.round(((result.totalMarksAwarded ?? result.totalEstimatedMax ?? 0) / (result.totalMarksPossible || 1)) * 100)}%)
                  </div>
                </div>

                <div className="h-10 w-px bg-slate-700 hidden sm:block" />

                <div className="text-center min-w-[80px]">
                  <div className="text-3xl sm:text-4xl font-black text-rose-400">
                    -{result.totalMarksLost ?? Math.max(0, (result.totalMarksPossible || 60) - (result.totalMarksAwarded ?? result.totalEstimatedMax ?? 0))}
                  </div>
                  <div className="text-[10px] font-bold text-rose-300 uppercase tracking-wider mt-0.5">
                    Marks Lost
                  </div>
                </div>

                <div className="h-10 w-px bg-slate-700 hidden sm:block" />

                <div className="text-center min-w-[90px]">
                  <div className="text-3xl sm:text-4xl font-black text-indigo-300">
                    {result.overallGrade || (result.totalMarksAwarded && result.totalMarksAwarded / (result.totalMarksPossible || 1) >= 0.8 ? 'A*' : 'A')}
                  </div>
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-0.5">
                    {result.overallLevel || result.indicativeLevel || 'Upper Band'}
                  </div>
                  {result.ecrBenchmarkLevel && (
                    <span className={`inline-block mt-1 text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${
                      result.ecrBenchmarkLevel === 'High'
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                        : result.ecrBenchmarkLevel === 'Middle'
                        ? 'bg-amber-950 text-amber-300 border-amber-700'
                        : 'bg-rose-950 text-rose-300 border-rose-700'
                    }`}>
                      ECR {result.ecrBenchmarkLevel}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Question Quick-Pills Navigation Bar */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                <span>Select Question Section to Inspect:</span>
                <span className="text-slate-500">{result.questions.length} sections graded</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setActiveQuestionTab('overview')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeQuestionTab === 'overview'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  }`}
                >
                  <Award size={14} />
                  <span>Full Paper Overview & Penalties</span>
                </button>

                {result.questions.map((q, idx) => {
                  const awarded = q.marksAwarded ?? q.estimatedMarkMax ?? 0;
                  const max = q.marksPossible ?? q.maximumMark ?? 10;
                  const percentage = Math.round((awarded / (max || 1)) * 100);
                  const isSelected = activeQuestionTab === idx;
                  const markDisplay = (q.estimatedMarkMin !== undefined && q.estimatedMarkMax !== undefined && q.estimatedMarkMin !== q.estimatedMarkMax)
                    ? `${q.estimatedMarkMin}–${q.estimatedMarkMax}`
                    : `${awarded}`;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveQuestionTab(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-400/30'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                      }`}
                    >
                      <span>{q.questionTitle}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-black ${
                        percentage >= 80 ? 'bg-emerald-500/30 text-emerald-300' : percentage >= 50 ? 'bg-amber-500/30 text-amber-300' : 'bg-red-500/30 text-red-300'
                      }`}>
                        {markDisplay}/{max}m
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Rigorous evaluation calibrated against Cambridge International AS & A Level candidate mark schemes and published examiner guidance.
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyReport}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer border border-slate-700"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied Full Report' : 'Copy Full Report'}</span>
                </button>
                <button
                  onClick={handleExportPdf}
                  disabled={isExportingPdf}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {isExportingPdf ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Exporting PDF...</span>
                    </>
                  ) : (
                    <>
                      <Download size={14} />
                      <span>Export Examiner PDF</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* VIEW MODE 1: Full Paper Overview */}
          {activeQuestionTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {/* Systemic Penalties & Mark Loss Breakdown */}
              {result.topPenaltiesAcrossScript && result.topPenaltiesAcrossScript.length > 0 && (
                <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-rose-200/80">
                    <div className="flex items-center gap-2 text-rose-900 font-bold text-base">
                      <AlertOctagon size={20} className="text-rose-600" />
                      <span>Systemic Mark Deductions & Examiner Penalties Across Paper</span>
                    </div>
                    <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-300">
                      Total Lost: -{result.totalMarksLost ?? Math.max(0, (result.totalMarksPossible || 60) - (result.totalMarksAwarded ?? 0))} Marks
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {result.topPenaltiesAcrossScript.map((penalty, pIdx) => (
                      <div key={pIdx} className="bg-white/80 border border-rose-200/80 p-3 rounded-xl flex items-start gap-2.5">
                        <MinusCircle size={16} className="text-rose-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-800 font-medium leading-relaxed">{penalty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cambridge Pitfalls Detected Across Script */}
              {result.scriptCommonPitfalls && result.scriptCommonPitfalls.length > 0 && (
                <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-base pb-2 border-b border-amber-200/80">
                    <AlertTriangle size={20} className="text-amber-600" />
                    <span>Cambridge Examiner Common Pitfalls Detected in Script</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {result.scriptCommonPitfalls.map((pitfall, pfIdx) => (
                      <div key={pfIdx} className="bg-white p-3 rounded-xl border border-amber-200 text-xs font-medium text-amber-900 flex items-start gap-2">
                        <span className="text-amber-600 font-bold flex-shrink-0">⚠️</span>
                        <span>{pitfall}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CAIE Official On-Screen Examiner Stamps Audit */}
              {result.scriptExaminerStamps && result.scriptExaminerStamps.length > 0 && (
                <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm space-y-4 border border-slate-800">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-indigo-300">
                      <BadgeAlert size={18} className="text-indigo-400" />
                      <span>Examiner-Style Annotation Codes & Stamps Applied</span>
                    </div>
                    <span className="text-xs text-slate-400">
                      Total Stamp Frequency: {result.scriptExaminerStamps.reduce((sum, s) => sum + (s.count || 1), 0)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {result.scriptExaminerStamps.map((stamp, sIdx) => (
                      <div key={sIdx} className="bg-slate-800/90 border border-slate-700/80 p-3 rounded-xl space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-700 font-mono">
                            [{stamp.stampCode}]
                          </span>
                          <span className="text-xs font-bold text-slate-300 bg-slate-700 px-1.5 py-0.5 rounded">
                            ×{stamp.count}
                          </span>
                        </div>
                        <div className="text-[11px] font-bold text-slate-200 mt-1">{stamp.meaning}</div>
                        <p className="text-[10px] text-slate-400 leading-snug line-clamp-2">{stamp.explanation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Questions Mark Table */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                    <ListOrdered size={20} className="text-indigo-600" />
                    <span>Detected Questions & Band Breakdown</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Click any row to inspect feedback</span>
                </div>

                <div className="divide-y divide-slate-100">
                  {result.questions.map((q, idx) => {
                    const awarded = q.marksAwarded ?? q.estimatedMarkMax ?? 0;
                    const max = q.marksPossible ?? q.maximumMark ?? 10;
                    const percentage = Math.round((awarded / (max || 1)) * 100);
                    const lost = Math.max(0, max - awarded);
                    const markDisplay = (q.estimatedMarkMin !== undefined && q.estimatedMarkMax !== undefined && q.estimatedMarkMin !== q.estimatedMarkMax)
                      ? `${q.estimatedMarkMin}–${q.estimatedMarkMax}`
                      : `${awarded}`;
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveQuestionTab(idx)}
                        className="py-3.5 px-3 -mx-3 rounded-xl hover:bg-slate-50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer group"
                      >
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-200">
                              {q.questionTitle}
                            </span>
                            <span className="text-xs font-bold text-slate-500">
                              [{max} Marks Tariff]
                            </span>
                            {q.awardedLevelBand && (
                              <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                                {q.awardedLevelBand}
                              </span>
                            )}
                          </div>
                          <p className="text-xs font-medium text-slate-800 line-clamp-1 group-hover:text-indigo-900 transition-colors">
                            "{q.questionText}"
                          </p>
                        </div>

                        <div className="flex items-center gap-4 self-end sm:self-center">
                          {lost > 0 && (
                            <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                              -{lost} lost
                            </span>
                          )}
                          <div className="text-right">
                            <div className="text-sm font-black text-slate-900">
                              {markDisplay} / {max}
                            </div>
                            <div className="text-[10px] text-slate-500 font-semibold">
                              {percentage}% Awarded
                            </div>
                          </div>
                          <div className="p-1.5 bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white rounded-lg text-slate-400 transition-colors">
                            <ChevronRight size={16} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Chief Examiner Qualitative Overview */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-2 text-indigo-900 font-bold text-lg pb-3 border-b border-slate-100">
                  <Award size={22} className="text-indigo-600" />
                  <span>Examiner Guidance Feedback & Overview</span>
                </div>
                
                <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                  {result.overallExaminerSummary}
                </p>

                {/* Macro Strengths & Improvements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <CheckCircle2 size={18} className="text-emerald-600" />
                      <span>Key Strengths Across Paper</span>
                    </div>
                    <ul className="space-y-2">
                      {result.globalStrengths.map((str, idx) => (
                        <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                      <AlertTriangle size={18} className="text-amber-600" />
                      <span>Priority Recommendations for Higher Bands</span>
                    </div>
                    <ul className="space-y-2">
                      {result.globalImprovements.map((imp, idx) => (
                        <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="text-amber-600 font-bold">→</span>
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW MODE 2: Individual Question Breakdown */}
          {typeof activeQuestionTab === 'number' && result.questions[activeQuestionTab] && (
            <motion.div
              key={activeQuestionTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {(() => {
                const q = result.questions[activeQuestionTab];
                const awarded = q.marksAwarded ?? q.estimatedMarkMax ?? 0;
                const max = q.marksPossible ?? q.maximumMark ?? 10;
                const percentage = Math.round((awarded / (max || 1)) * 100);
                const lostMarks = Math.max(0, max - awarded);
                const markDisplay = (q.estimatedMarkMin !== undefined && q.estimatedMarkMax !== undefined && q.estimatedMarkMin !== q.estimatedMarkMax)
                  ? `${q.estimatedMarkMin}–${q.estimatedMarkMax}`
                  : `${awarded}`;

                return (
                  <>
                    {/* Question Card Header */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-black text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                              {q.questionTitle}
                            </span>
                            <span className="text-xs font-bold text-slate-600">
                              {max} Marks Available
                            </span>
                            {q.tariffStructure && (
                              <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                                {q.tariffStructure}
                              </span>
                            )}
                            {q.awardedLevelBand && (
                              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                                {q.awardedLevelBand}
                              </span>
                            )}
                            {q.ecrBenchmarkLevel && (
                              <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full border ${
                                q.ecrBenchmarkLevel === 'High'
                                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                  : q.ecrBenchmarkLevel === 'Middle'
                                  ? 'bg-amber-100 text-amber-800 border-amber-300'
                                  : 'bg-rose-100 text-rose-800 border-rose-300'
                              }`}>
                                ECR: {q.ecrBenchmarkLevel} Band
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mt-1">
                            "{q.questionText}"
                          </h3>
                        </div>

                        <div className="flex items-center gap-3 self-start sm:self-center bg-slate-50 border border-slate-200 p-3 rounded-xl">
                          <div className="text-right">
                            <div className="text-2xl font-black text-slate-900">
                              {markDisplay} <span className="text-sm text-slate-500">/{max}</span>
                            </div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase">
                              {percentage}% Awarded {lostMarks > 0 && `(-${lostMarks}m)`}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* AO Breakdown Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl p-3.5 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-indigo-900">AO1 Knowledge</span>
                            <span className="text-xs font-black text-indigo-700">
                              {q.ao1EstimatedMin !== undefined && q.ao1EstimatedMax !== undefined && q.ao1EstimatedMin !== q.ao1EstimatedMax
                                ? `${q.ao1EstimatedMin}–${q.ao1EstimatedMax}`
                                : (q.ao1Score ?? q.ao1EstimatedMax ?? 0)}/{q.ao1Max}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 leading-snug">{q.ao1Commentary || 'Evaluates understanding of sociological concepts and theories.'}</p>
                        </div>

                        {q.ao2Max > 0 && (
                          <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3.5 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-emerald-900">AO2 Application</span>
                              <span className="text-xs font-black text-emerald-700">
                                {q.ao2EstimatedMin !== undefined && q.ao2EstimatedMax !== undefined && q.ao2EstimatedMin !== q.ao2EstimatedMax
                                  ? `${q.ao2EstimatedMin}–${q.ao2EstimatedMax}`
                                  : (q.ao2Score ?? q.ao2EstimatedMax ?? 0)}/{q.ao2Max}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-600 leading-snug">{q.ao2Commentary || 'Evaluates application of evidence directly to question prompt.'}</p>
                          </div>
                        )}

                        {q.ao3Max > 0 && (
                          <div className="bg-purple-50/60 border border-purple-100 rounded-xl p-3.5 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-purple-900">AO3 Evaluation</span>
                              <span className="text-xs font-black text-purple-700">
                                {q.ao3EstimatedMin !== undefined && q.ao3EstimatedMax !== undefined && q.ao3EstimatedMin !== q.ao3EstimatedMax
                                  ? `${q.ao3EstimatedMin}–${q.ao3EstimatedMax}`
                                  : (q.ao3Score ?? q.ao3EstimatedMax ?? 0)}/{q.ao3Max}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-600 leading-snug">{q.ao3Commentary || 'Evaluates analysis, counterarguments, and conclusion.'}</p>
                          </div>
                        )}
                      </div>

                      {/* Cambridge ECR Pitfalls Detected */}
                      {q.commonPitfallsDetected && q.commonPitfallsDetected.length > 0 && (
                        <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 space-y-2">
                          <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                            <AlertTriangle size={16} className="text-amber-600" />
                            <span>Cambridge Examiner Pitfalls Detected:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {q.commonPitfallsDetected.map((pitfall, pIdx) => (
                              <span key={pIdx} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-amber-300 text-amber-900">
                                ⚠️ {pitfall}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Cambridge ECR Senior Examiner Advice */}
                      {q.ecrGuidanceNotes && (
                        <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 space-y-1.5">
                          <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
                            <BookOpen size={16} className="text-blue-600" />
                            <span>Cambridge ECR Senior Examiner Advice:</span>
                          </div>
                          <p className="text-xs text-blue-900 leading-relaxed">
                            {q.ecrGuidanceNotes}
                          </p>
                        </div>
                      )}

                      {/* Specific Mark Deductions & Penalty Audit for this Question */}
                      {q.markDeductions && q.markDeductions.length > 0 && (
                        <div className="bg-rose-50/60 border border-rose-200 rounded-xl p-5 space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-rose-900 font-bold text-xs uppercase tracking-wider">
                              <MinusCircle size={16} className="text-rose-600" />
                              <span>Examiner Mark Deductions & Penalties Applied:</span>
                            </div>
                            <span className="text-[11px] font-black text-rose-700 bg-rose-100 px-2 py-0.5 rounded border border-rose-300">
                              -{lostMarks} Mark{lostMarks > 1 ? 's' : ''} Deducted
                            </span>
                          </div>

                          <div className="space-y-2">
                            {q.markDeductions.map((ded, dIdx) => (
                              <div key={dIdx} className="p-3 bg-white/90 border border-rose-200/90 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div className="space-y-0.5">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-rose-100 text-rose-800 rounded border border-rose-200">
                                      {ded.category}
                                    </span>
                                    <span className="text-xs font-bold text-rose-700">
                                      -{ded.marksLost} Mark{ded.marksLost > 1 ? 's' : ''}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-700 leading-relaxed">{ded.reason}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Examiner Assessment for this Question */}
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                        <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                          <Award size={18} className="text-indigo-600" />
                          <span>Examiner Feedback for {q.questionTitle}</span>
                        </div>
                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                          {q.examinerCommentary}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                          <div>
                            <span className="text-xs font-bold text-emerald-800 block mb-1">Strengths:</span>
                            <ul className="space-y-1">
                              {q.keyStrengths.map((s, sIdx) => (
                                <li key={sIdx} className="text-xs text-slate-600 flex items-start gap-1.5">
                                  <span className="text-emerald-600 font-bold">✓</span>
                                  <span>{s}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span className="text-xs font-bold text-amber-800 block mb-1">To Gain More Marks:</span>
                            <ul className="space-y-1">
                              {q.keyImprovements.map((imp, impIdx) => (
                                <li key={impIdx} className="text-xs text-slate-600 flex items-start gap-1.5">
                                  <span className="text-amber-600 font-bold">→</span>
                                  <span>{imp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Annotated OCR Snippets */}
                      {q.annotatedSnippets && q.annotatedSnippets.length > 0 && (
                        <div className="space-y-3 pt-2">
                          <div className="flex items-center justify-between">
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                              Examiner Script Annotations & Stamps:
                            </div>
                            {q.examinerStamps && q.examinerStamps.length > 0 && (
                              <div className="flex flex-wrap items-center gap-1.5">
                                {q.examinerStamps.map((st, stIdx) => (
                                  <span key={stIdx} className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-300">
                                    [{st.stampCode}] ×{st.count}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="space-y-3">
                            {q.annotatedSnippets.map((annot, aIdx) => (
                              <div
                                key={aIdx}
                                className={`p-4 rounded-xl border transition-all ${
                                  annot.type === 'strength' 
                                    ? 'bg-emerald-50/40 border-emerald-200' 
                                    : annot.type === 'weakness'
                                    ? 'bg-amber-50/40 border-amber-200'
                                    : 'bg-indigo-50/40 border-indigo-200'
                                }`}
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <div className="text-xs font-serif text-slate-800 italic pl-3 border-l-2 border-slate-400/60 leading-relaxed">
                                    "{annot.studentSnippet}"
                                  </div>
                                  {annot.stampCode && (
                                    <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-slate-900 text-indigo-300 flex-shrink-0 ml-2">
                                      [{annot.stampCode}]
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-start gap-2 text-xs font-medium">
                                  <span className="font-bold text-[11px] uppercase tracking-wider text-slate-900 flex-shrink-0">
                                    Examiner Note:
                                  </span>
                                  <span className="text-slate-700">{annot.examinerNote}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Illustrative High-Band Model Paragraph Upgrade */}
                      {q.upgradedSampleParagraph && (
                        <div className="bg-indigo-900 text-white rounded-xl p-5 space-y-3">
                          <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs uppercase tracking-wider">
                            <Sparkles size={16} />
                            <span>Illustrative High-Band Model Response Paragraph Rewrite</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-100 font-serif leading-relaxed italic bg-indigo-950/60 p-4 rounded-lg border border-indigo-800/80">
                            "{q.upgradedSampleParagraph}"
                          </p>
                          {q.upgradeExplanation && (
                            <p className="text-xs text-indigo-200 font-medium">
                              <strong>Why this gains high marks:</strong> {q.upgradeExplanation}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Transcribed Student Text */}
                      <div className="border-t border-slate-100 pt-4 space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Transcribed Candidate Text (OCR):
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs font-mono text-slate-800 whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed">
                          {q.transcribedAnswer}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}

          {/* Hidden Print Container for PDF Generation */}
          <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
            <div
              ref={printContainerRef}
              className="p-10 bg-white text-slate-900 font-sans space-y-8"
              style={{ width: '800px' }}
            >
              <div className="border-b-2 border-slate-900 pb-4 flex justify-between items-end">
                <div>
                  <h1 className="text-2xl font-black uppercase tracking-wide">
                    Cambridge International AS & A Level
                  </h1>
                  <h2 className="text-base font-bold text-slate-700">
                    Sociology (9699) Candidate Script Diagnostic Report
                  </h2>
                  {(result.candidateName || result.candidateNumber || result.centreNumber || result.syllabusComponent) && (
                    <div className="text-xs text-slate-600 font-medium mt-1">
                      {result.candidateName && <span>Candidate: <strong>{result.candidateName}</strong> </span>}
                      {result.candidateNumber && <span>({result.candidateNumber}) </span>}
                      {result.centreNumber && <span>• Centre: <strong>{result.centreNumber}</strong> </span>}
                      {result.syllabusComponent && <span>• Component: <strong>{result.syllabusComponent}</strong></span>}
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-slate-900">
                    {result.totalMarksAwarded ?? result.totalEstimatedMax} / {result.totalMarksPossible || 60}
                  </div>
                  <div className="text-xs font-bold uppercase text-slate-600">
                    Grade {result.overallGrade} ({result.overallLevel || result.indicativeLevel})
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase text-slate-800">Examiner Guidance & Paper Overview</h3>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-line border-l-2 border-slate-900 pl-3">
                  {result.overallExaminerSummary}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase text-slate-800">Questions Breakdown</h3>
                {result.questions.map((q, idx) => (
                  <div key={idx} className="p-4 border border-slate-300 rounded-lg space-y-2">
                    <div className="flex justify-between font-bold text-xs border-b border-slate-200 pb-1">
                      <span>{q.questionTitle}: "{q.questionText}"</span>
                      <span>{q.marksAwarded ?? q.estimatedMarkMax ?? 0} / {q.marksPossible ?? q.maximumMark ?? 10} Marks (AO1: {q.ao1Score ?? q.ao1EstimatedMax ?? 0}/{q.ao1Max}, AO2: {(q.ao2Score ?? q.ao2EstimatedMax) || 0}/{q.ao2Max || 0}, AO3: {(q.ao3Score ?? q.ao3EstimatedMax) || 0}/{q.ao3Max || 0})</span>
                    </div>
                    <div className="flex gap-2 text-[10px] text-slate-600 font-semibold">
                      {q.tariffStructure && <span>Tariff: {q.tariffStructure}</span>}
                      {q.ecrBenchmarkLevel && <span>• ECR: {q.ecrBenchmarkLevel} Band</span>}
                      {q.awardedLevelBand && <span>• Level: {q.awardedLevelBand}</span>}
                    </div>
                    <p className="text-xs text-slate-700">{q.examinerCommentary}</p>
                    {q.ecrGuidanceNotes && (
                      <p className="text-[11px] text-blue-900 bg-blue-50 p-2 rounded border border-blue-200">
                        <strong>Cambridge Examiner Advice:</strong> {q.ecrGuidanceNotes}
                      </p>
                    )}
                    {q.upgradedSampleParagraph && (
                      <div className="text-[11px] text-slate-800 bg-slate-50 p-2 rounded border border-slate-200">
                        <strong>Illustrative High-Band Model Response:</strong> "{q.upgradedSampleParagraph}"
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
