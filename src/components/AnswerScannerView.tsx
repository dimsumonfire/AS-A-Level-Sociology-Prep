import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, Type } from '@google/genai';
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
  School
} from 'lucide-react';
import { sanitizeSociologyMarkdown } from '../markdownUtils';
import { exportElementToPdf } from '../pdfUtils';

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
  marksPossible: number;
  marksAwarded: number;
  awardedLevelBand: string;
  ecrBenchmarkLevel?: 'High' | 'Middle' | 'Low';
  commonPitfallsDetected?: string[];
  ecrGuidanceNotes?: string;
  ao1Score: number;
  ao1Max: number;
  ao1Commentary?: string;
  ao2Score: number;
  ao2Max: number;
  ao2Commentary?: string;
  ao3Score: number;
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
}

export interface MultiQuestionExamResult {
  paperTitle: string;
  candidateName?: string;
  candidateNumber?: string;
  centreNumber?: string;
  syllabusComponent?: string;
  isAccessArrangementTranscript?: boolean;
  totalMarksAwarded: number;
  totalMarksPossible: number;
  overallGrade: string;
  overallLevel: string;
  ecrBenchmarkLevel?: 'High' | 'Middle' | 'Low';
  markingRigorMode?: string;
  overallExaminerSummary: string;
  globalStrengths: string[];
  globalImprovements: string[];
  totalQuestionsDetected: number;
  totalMarksLost: number;
  topPenaltiesAcrossScript: string[];
  scriptExaminerStamps?: ExaminerStamp[];
  scriptCommonPitfalls?: string[];
  questions: EvaluatedQuestion[];
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
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('Gemini API Key is missing. Please check your environment configuration.');
      }

      const ai = new GoogleGenAI({ 
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const parts: any[] = [];

      files.forEach((f) => {
        parts.push({
          inlineData: {
            mimeType: f.mimeType,
            data: f.base64
          }
        });
      });

      const prompt = `You are the Senior Chief Examiner for Cambridge International AS & A Level Sociology (9699).
You evaluate student exam answer scripts uploaded as multi-page PDF documents or scanned/photographed image pages containing ONE OR MULTIPLE QUESTIONS across Paper 1 (Socialisation, Identity & Methods), Paper 2 (The Family), Paper 3 (Education), or Paper 4 (Globalisation, Media & Religion).

EXAM SUBMISSION PARAMETERS:
- TARGET PAPER: ${selectedPaper}
- MARKING RIGOR STANDARD: ${markingRigor === 'strict' ? 'OFFICIAL CAMBRIDGE STRICT STANDARD (ZERO MARK INFLATION - Authentic Chief Examiner Rigour)' : markingRigor === 'standard' ? 'STANDARD EXAM RIGOUR' : 'FORMATIVE DIAGNOSTIC'}
- OPTIONAL GUIDANCE / STUDENT TEXT: "${optionalQuestionGuidance.trim() || 'Auto-detect all questions directly from the uploaded PDF/images answer script.'}"

================================================================================
OFFICIAL CAMBRIDGE 2024 EXAMPLE CANDIDATE RESPONSES (ECR) MARKING BENCHMARKS:
================================================================================

1. QUESTION 1 (4 MARKS SHORT ANSWER - P1, P2, P3):
   - STRUCTURE: 2 distinct points (2 marks each). Total = 4 marks (AO1).
   - PART-MARK BREAKDOWN:
     * Point 1: 1 mark for clear identification of a valid feature/way + 1 mark for description/development in context.
     * Point 2: 1 mark for identification of second distinct way + 1 mark for description/development in context.
   - EXAMINER CRITERIA & PITFALLS:
     * No marks for introductions or generic definitions.
     * Identification without description receives only 1 mark (e.g. saying "child protection agencies" without explaining how it makes families child-centred).
     * Overlapping/repeated points receive 0 for the second point (e.g. "don't contribute" and "burdens" in elderly questions).
     * Must describe the specific context requested (e.g., in the family, in the school), not society in general.

2. QUESTION 2(a) / 8-MARK STRUCTURED QUESTIONS (P1 Q2a, P2 Q2a, P3 Q2):
   - STRUCTURE: 2 distinct reasons/ways (4 marks each). Total = 8 marks (AO1=4, AO2=4).
   - 4-PART BREAKDOWN PER POINT:
     * 1 mark: Identification of valid reason/way
     * 1 mark: Explanation of the reason/way
     * 1 mark: Selection of relevant sociological material/evidence (theorist with year, study, or key concept)
     * 1 mark: Explicit application of that material to answer the specific question prompt
   - EXAMINER CRITERIA & PITFALLS:
     * Selecting a term (e.g. "Likert scale", "reliable") without using it to explain the point docks the 4th mark.
     * General lay assertions without sociological concepts cap the point at 2/4.
     * Answers must directly answer the target group/method (e.g. reasons *positivists* use questionnaires, or ways *men* benefit more than women).

3. QUESTION 2(b) / 6-MARK METHODOLOGICAL & THEORETICAL LIMITATIONS (P1 Q2b, P2 Q2b):
   - STRUCTURE: 2 distinct limitations or strengths (3 marks each). Total = 6 marks (AO1=3, AO2=3).
   - STRICT 3-STEP RUBRIC PER POINT:
     * Step 1 (1 mark): Identify limitation or strength.
     * Step 2 (1 mark): Explain what it is about the method or theoretical approach that leads to this limitation/strength.
     * Step 3 (1 mark): Explain why this is a limitation/strength (impact on validity, reliability, ethics, representativeness, or theoretical blindspots).
   - EXAMINER CRITERIA & PITFALLS:
     * Practical issues (e.g. "funding/time") are NOT credited unless made specific to the method.
     * Stating an ethical violation (e.g. lack of consent) without explaining the sociological consequence (e.g. psychological harm or invalidity) docks the 3rd mark.

4. QUESTION 3(a) (10 MARKS in P1/P2) & QUESTION 3 (12 MARKS in P3):
   - STRUCTURE: 2 fully developed points (5 marks each in P1/P2; 6 marks each in P3).
   - EXAMINER CRITERIA & PITFALLS:
     * Must engage named sociological theories (e.g. Bourdieu, Sugarman, Murray, Chester, Sewell, McRobbie, Becker) and unpack how the mechanism produces the outcome (e.g. how cultural capital leads to teacher labelling or streaming; how feminisation of education/bedroom culture advantages girls).
     * Descriptive or underdeveloped points without named empirical studies are capped at Level 2 (4-6/10 or 5-8/12).

5. QUESTION 3(b) / 6-MARK SINGLE COUNTERARGUMENT (P1 Q3b, P2 Q3b):
   - STRUCTURE: Exactly ONE well-developed counterargument (up to 6 marks: AO1=3, AO2=3 or AO3=6).
   - EXAMINER CRITERIA & PITFALLS:
     * Only ONE argument can be rewarded. Candidates giving multiple rushed points are marked on the best single point.
     * Must explicitly counter the view in 3(a) and explain why the counter-factor is more significant (e.g. biological factors vs cultural deprivation; individualized family diversity vs nuclear dominance).

6. SECTION B 26-MARK EXTENDED ESSAYS (P1 Q4/5, P2 Q4/5, P3 Q4):
   - TARIFF:
     * Paper 1 & 2: AO1=8, AO2=8, AO3=10. Total = 26 Marks.
     * Paper 3 (Education): AO1=10, AO2=6, AO3=10. Total = 26 Marks.
   - EXAMINER CRITERIA & PITFALLS:
     * JUXTAPOSITION PENALTY: Merely presenting alternative theories side-by-side without direct critique ("Functionalists say X, on the other hand Marxists say Y") caps AO3 at Level 2 (3-5/10).
     * EXPLICIT EVALUATION: Continuous evaluation within paragraphs ("However, this view ignores...", "Conversely, empirical evidence from X shows...") and an evaluative, non-moralising conclusion weighs up arguments to reach Level 3 (6-8/10) or Level 4 (9-10/10).

7. PAPER 4 ESSAYS (35 MARKS EACH - Globalisation, Media & Religion):
   - TARIFF: AO1=9, AO2=11, AO3=15. Total = 35 Marks per essay.
   - EXAMINER CRITERIA & PITFALLS:
     * DO NOT CONFLATE TNCs with all Transnational Organisations (must consider IGOs like IMF/World Bank and NGOs like Oxfam).
     * DO NOT CONFLATE the ruling class with the state/government.
     * DO NOT CONFLATE decline in church attendance with decline in the social significance of religion (consider privatised religion, Davie 'believing without belonging', fundamentalism, NRMs).
     * Postmodernism does not have an explicit theory of power; do not confuse simulacra/hyperreality with deliberate ruling-class manipulation.
     * Moralising conclusions ("TNCs ought to behave better") receive 0 marks for evaluation; conclusions must critically judge which perspective is most persuasive.

================================================================================
AUTHENTIC CAMBRIDGE ON-SCREEN EXAMINER STAMPS (CRITICAL):
================================================================================
Apply these standardized on-screen marking annotations across the script:
- [BOD] Benefit of Doubt: Used when a point is borderline or awkwardly expressed but given credit.
- [EXP] Explanation / Development: Crediting sociological explanation linking concept to question.
- [DEV] Development: Showing logical progression in an argument or paragraph.
- [EVAL] Evaluation: Used in AO3 to credit critical analysis, counterarguments, or synthesis.
- [TV] Too Vague: Used when an assertion is imprecise, colloquial, or lacks sociological rigor.
- [NAQ] Not Answering Question: Point is sociologically true but fails to address the specific question prompt.
- [GEN] Generalised: Broad assertions without specific sociology, empirical data, or theorists.
- [M] Marginal / Minor credit: Fragmented point with limited depth.
- [SEEN] Blank / Ruled page checked and not skipped.
- [TICK] Valid sociological point credited.
- [CROSS] Incorrect or sociologically invalid assertion.

OUTPUT REQUIREMENTS:
- Calculate total marks awarded and total marks lost across all detected questions.
- Identify all examiner stamps applied.
- Classify script and questions into ECR Benchmark Levels ('High', 'Middle', 'Low').
- Identify specific common pitfalls detected.
- Provide tailored Senior Examiner Guidance notes bridging candidate's current performance to High Band.
- For each question: transcribe candidate text (OCR), assess AO1, AO2, AO3 scores with commentaries, state the specific awarded Cambridge Level Band, detail all mark deductions, list examiner stamps applied, provide strengths, areas for improvement, annotated script snippets with stamp codes, and a high-band model upgrade paragraph.

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
              candidateName: { type: Type.STRING, description: 'Candidate name if detected on cover sheet (e.g. Maya Rose Chopra)' },
              candidateNumber: { type: Type.STRING, description: 'Candidate number (e.g. 1015)' },
              centreNumber: { type: Type.STRING, description: 'Centre number (e.g. IA229)' },
              syllabusComponent: { type: Type.STRING, description: 'Syllabus and component code (e.g. 9699/12)' },
              totalMarksAwarded: { type: Type.NUMBER, description: 'Sum of all marks awarded across all detected questions' },
              totalMarksPossible: { type: Type.NUMBER, description: 'Sum of all maximum possible marks across all detected questions' },
              totalMarksLost: { type: Type.NUMBER, description: 'Total marks lost across the entire paper' },
              overallGrade: { type: Type.STRING, description: 'Overall grade equivalent: A*, A, B, C, D, E, or U' },
              overallLevel: { type: Type.STRING, description: 'Overall performance band (e.g. Level 3 / Intermediate Band)' },
              ecrBenchmarkLevel: { type: Type.STRING, enum: ['High', 'Middle', 'Low'], description: 'Overall Cambridge ECR Benchmark level' },
              markingRigorMode: { type: Type.STRING, description: 'Marking standard applied' },
              overallExaminerSummary: { type: Type.STRING, description: 'Chief examiner comprehensive overview of the whole candidate paper' },
              globalStrengths: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: '3-4 macro strengths across the entire exam paper'
              },
              globalImprovements: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: '3-4 key examiner recommendations for the candidate across the paper'
              },
              topPenaltiesAcrossScript: {
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: 'Summary of the most significant reasons marks were lost across the script'
              },
              scriptCommonPitfalls: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'List of specific Cambridge examiner pitfalls detected across the script'
              },
              isAccessArrangementTranscript: {
                type: Type.BOOLEAN,
                description: 'Whether this script is a word-processor transcript with Form 4 access arrangements'
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
              totalQuestionsDetected: { type: Type.NUMBER, description: 'Total count of separate questions detected in the upload' },
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    questionId: { type: Type.STRING, description: 'Identifier e.g. Q1, Q2a, Q2b, Q3a, Q3b, Q4, Q5' },
                    questionTitle: { type: Type.STRING, description: 'Question title e.g. Question 1, Question 2(a), Question 4' },
                    questionText: { type: Type.STRING, description: 'Prompt text of the question' },
                    tariffStructure: { type: Type.STRING, description: 'Description of mark scheme structure e.g. 2 x 2 Marks (Identify + Describe in Context)' },
                    marksPossible: { type: Type.NUMBER, description: 'Max marks possible for this question (e.g. 4, 6, 8, 10, 12, 26, 35)' },
                    marksAwarded: { type: Type.NUMBER, description: 'Marks awarded for this specific question' },
                    awardedLevelBand: { type: Type.STRING, description: 'Cambridge Level Band awarded e.g. Level 3 (Band 3: 13-17 / 26 Marks)' },
                    ecrBenchmarkLevel: { type: Type.STRING, enum: ['High', 'Middle', 'Low'], description: 'ECR benchmark level for this question' },
                    commonPitfallsDetected: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: 'List of specific pitfalls detected in this question answer'
                    },
                    ecrGuidanceNotes: { type: Type.STRING, description: 'Official Cambridge examiner advice on how to upgrade this answer to High Band' },
                    ao1Score: { type: Type.NUMBER, description: 'AO1 mark awarded' },
                    ao1Max: { type: Type.NUMBER, description: 'AO1 max mark' },
                    ao1Commentary: { type: Type.STRING, description: 'AO1 specific examiner note' },
                    ao2Score: { type: Type.NUMBER, description: 'AO2 mark awarded' },
                    ao2Max: { type: Type.NUMBER, description: 'AO2 max mark' },
                    ao2Commentary: { type: Type.STRING, description: 'AO2 specific examiner note' },
                    ao3Score: { type: Type.NUMBER, description: 'AO3 mark awarded' },
                    ao3Max: { type: Type.NUMBER, description: 'AO3 max mark' },
                    ao3Commentary: { type: Type.STRING, description: 'AO3 specific examiner note' },
                    examinerCommentary: { type: Type.STRING, description: 'Chief examiner qualitative assessment on this question' },
                    transcribedAnswer: { type: Type.STRING, description: 'Verbatim OCR transcription of student answer for this question' },
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
                    upgradedSampleParagraph: { type: Type.STRING, description: 'Level 5 rewritten model paragraph' },
                    upgradeExplanation: { type: Type.STRING, description: 'Explanation of why the upgraded paragraph achieves full marks' }
                  },
                  required: [
                    'questionId',
                    'questionTitle',
                    'questionText',
                    'marksPossible',
                    'marksAwarded',
                    'awardedLevelBand',
                    'ao1Score',
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
              'totalMarksAwarded',
              'totalMarksPossible',
              'totalMarksLost',
              'overallGrade',
              'overallLevel',
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

      if (!parsed || !parsed.questions || parsed.questions.length === 0) {
        throw new Error('Could not parse exam questions from the uploaded document. Please check the document clarity and try again.');
      }

      setResult(parsed);
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
OFFICIAL CANDIDATE SCRIPT ASSESSMENT REPORT (STRICT CALIBRATION)
`;
    if (result.candidateName || result.candidateNumber || result.centreNumber || result.syllabusComponent) {
      text += `Candidate: ${result.candidateName || 'N/A'} (No: ${result.candidateNumber || 'N/A'}) | Centre: ${result.centreNumber || 'N/A'} | Syllabus: ${result.syllabusComponent || '9699'}\n`;
    }
    text += `Component: ${result.paperTitle}
Total Score: ${result.totalMarksAwarded} / ${result.totalMarksPossible} (${Math.round((result.totalMarksAwarded / (result.totalMarksPossible || 1)) * 100)}%) - Grade ${result.overallGrade} [${result.overallLevel}]
Total Marks Lost: -${result.totalMarksLost ?? (result.totalMarksPossible - result.totalMarksAwarded)} Marks
Total Questions Detected: ${result.totalQuestionsDetected}

CHIEF EXAMINER OVERVIEW:
${result.overallExaminerSummary}

KEY GLOBAL STRENGTHS:
${result.globalStrengths.map(s => `• ${s}`).join('\n')}

PRIORITY RECOMMENDATIONS (BAND PROGRESSION):
${result.globalImprovements.map(i => `• ${i}`).join('\n')}
`;

    if (result.topPenaltiesAcrossScript && result.topPenaltiesAcrossScript.length > 0) {
      text += `\nSYSTEMIC MARK DEDUCTIONS & PENALTIES ACROSS SCRIPT:\n${result.topPenaltiesAcrossScript.map(p => `• ${p}`).join('\n')}\n`;
    }

    text += `
==================================================
INDIVIDUAL QUESTION BREAKDOWN
==================================================
`;

    result.questions.forEach((q) => {
      text += `
[${q.questionTitle}: ${q.questionText}]
Score: ${q.marksAwarded} / ${q.marksPossible} Marks (${q.marksPossible - q.marksAwarded} marks lost)
Awarded Band: ${q.awardedLevelBand || 'Standard'}
AO Breakdown: AO1: ${q.ao1Score}/${q.ao1Max} | AO2: ${q.ao2Score || 0}/${q.ao2Max || 0} | AO3: ${q.ao3Score || 0}/${q.ao3Max || 0}
Examiner Commentary: ${q.examinerCommentary}
`;

      if (q.markDeductions && q.markDeductions.length > 0) {
        text += `\nMark Deductions:\n${q.markDeductions.map(d => `• [${d.category}] -${d.marksLost}m: ${d.reason}`).join('\n')}\n`;
      }

      if (q.upgradedSampleParagraph) {
        text += `\nModel Level 5 Upgrade:\n"${q.upgradedSampleParagraph}"\n`;
      }

      text += `
Transcribed Candidate Text:
${q.transcribedAnswer}

---
`;
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportPdf = async () => {
    if (!result || !printContainerRef.current) return;
    setIsExportingPdf(true);
    try {
      const filename = `Cambridge_9699_Exam_Report_${result.totalMarksAwarded}of${result.totalMarksPossible}_${result.overallGrade}.pdf`;
      await exportElementToPdf(printContainerRef.current, filename);
    } catch (err) {
      console.error('PDF Export Error:', err);
      setError('Failed to export examiner report PDF. Please try again.');
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
            <h2 className="text-3xl font-bold text-slate-900">Scan & Grade Exam Paper</h2>
            <p className="text-slate-600 text-sm">
              Upload PDF exam booklets or photographed handwritten scripts. Gemini Vision automatically reads multi-page PDFs and images, segments questions (e.g. Q1, Q2a, Q2b, Q5), and applies CAIE 9699 examiner mark schemes.
            </p>
          </div>
        </div>
      </header>

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
          Upload <strong>PDF files</strong> (scanned exam booklets, exported GoodNotes/Notability scripts, typed past papers) or <strong>camera photos</strong>. The vision system reads all pages sequentially, extracts each question, and calculates total component marks and grade boundaries.
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
                    Official CAIE Strict
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
                    Official Cambridge Assessment Multi-Question Report
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800">
                    {result.totalQuestionsDetected} Question{result.totalQuestionsDetected > 1 ? 's' : ''} Detected
                  </span>
                  <span className="text-xs font-bold text-amber-300 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/80">
                    Strict Rigour (Zero Inflation)
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
                    {result.totalMarksAwarded}
                    <span className="text-lg text-slate-400 font-bold">/{result.totalMarksPossible}</span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-0.5">
                    Awarded ({Math.round((result.totalMarksAwarded / (result.totalMarksPossible || 1)) * 100)}%)
                  </div>
                </div>

                <div className="h-10 w-px bg-slate-700 hidden sm:block" />

                <div className="text-center min-w-[80px]">
                  <div className="text-3xl sm:text-4xl font-black text-rose-400">
                    -{result.totalMarksLost ?? (result.totalMarksPossible - result.totalMarksAwarded)}
                  </div>
                  <div className="text-[10px] font-bold text-rose-300 uppercase tracking-wider mt-0.5">
                    Marks Lost
                  </div>
                </div>

                <div className="h-10 w-px bg-slate-700 hidden sm:block" />

                <div className="text-center min-w-[90px]">
                  <div className="text-3xl sm:text-4xl font-black text-indigo-300">
                    {result.overallGrade}
                  </div>
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-0.5">
                    {result.overallLevel}
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
                  const percentage = Math.round((q.marksAwarded / (q.marksPossible || 1)) * 100);
                  const isSelected = activeQuestionTab === idx;
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
                        {q.marksAwarded}/{q.marksPossible}m
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Rigorous evaluation calibrated against Cambridge International AS & A Level candidate mark schemes and Chief Examiner standards.
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
                      Total Lost: -{result.totalMarksLost ?? (result.totalMarksPossible - result.totalMarksAwarded)} Marks
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
                      <span>Official Cambridge On-Screen Examiner Stamps Applied</span>
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
                    const percentage = Math.round((q.marksAwarded / (q.marksPossible || 1)) * 100);
                    const lost = q.marksPossible - q.marksAwarded;
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
                              [{q.marksPossible} Marks Tariff]
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
                              {q.marksAwarded} / {q.marksPossible}
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
                  <span>Chief Examiner Overview & Report</span>
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
                const percentage = Math.round((q.marksAwarded / (q.marksPossible || 1)) * 100);
                const lostMarks = q.marksPossible - q.marksAwarded;

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
                              {q.marksPossible} Marks Available
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
                              {q.marksAwarded} <span className="text-sm text-slate-500">/{q.marksPossible}</span>
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
                            <span className="text-xs font-black text-indigo-700">{q.ao1Score}/{q.ao1Max}</span>
                          </div>
                          <p className="text-[11px] text-slate-600 leading-snug">{q.ao1Commentary || 'Evaluates understanding of sociological concepts and theories.'}</p>
                        </div>

                        {q.ao2Max > 0 && (
                          <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3.5 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-emerald-900">AO2 Application</span>
                              <span className="text-xs font-black text-emerald-700">{q.ao2Score}/{q.ao2Max}</span>
                            </div>
                            <p className="text-[11px] text-slate-600 leading-snug">{q.ao2Commentary || 'Evaluates application of evidence directly to question prompt.'}</p>
                          </div>
                        )}

                        {q.ao3Max > 0 && (
                          <div className="bg-purple-50/60 border border-purple-100 rounded-xl p-3.5 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-purple-900">AO3 Evaluation</span>
                              <span className="text-xs font-black text-purple-700">{q.ao3Score}/{q.ao3Max}</span>
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

                      {/* Level 5 Model Paragraph Upgrade */}
                      {q.upgradedSampleParagraph && (
                        <div className="bg-indigo-900 text-white rounded-xl p-5 space-y-3">
                          <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs uppercase tracking-wider">
                            <Sparkles size={16} />
                            <span>Level 5 (A*) Model Paragraph Rewrite</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-100 font-serif leading-relaxed italic bg-indigo-950/60 p-4 rounded-lg border border-indigo-800/80">
                            "{q.upgradedSampleParagraph}"
                          </p>
                          {q.upgradeExplanation && (
                            <p className="text-xs text-indigo-200 font-medium">
                              <strong>Why this gains full marks:</strong> {q.upgradeExplanation}
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

          {/* Hidden Print Container for Official PDF Generation */}
          <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
            <div
              ref={printContainerRef}
              className="p-10 bg-white text-slate-900 font-sans space-y-8"
              style={{ width: '800px' }}
            >
              <div className="border-b-2 border-slate-900 pb-4 flex justify-between items-end">
                <div>
                  <h1 className="text-2xl font-black uppercase tracking-wide">
                    Cambridge Assessment International Education
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
                    {result.totalMarksAwarded} / {result.totalMarksPossible}
                  </div>
                  <div className="text-xs font-bold uppercase text-slate-600">
                    Grade {result.overallGrade} ({result.overallLevel})
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase text-slate-800">Chief Examiner Paper Overview</h3>
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
                      <span>{q.marksAwarded} / {q.marksPossible} Marks (AO1: {q.ao1Score}/{q.ao1Max}, AO2: {q.ao2Score || 0}/{q.ao2Max || 0}, AO3: {q.ao3Score || 0}/{q.ao3Max || 0})</span>
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
                        <strong>Model Level 5 Rewrite:</strong> "{q.upgradedSampleParagraph}"
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
