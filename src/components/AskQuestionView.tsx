import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, Type } from '../lib/ai';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  Sparkles, 
  HelpCircle, 
  BookOpen, 
  Award, 
  Download, 
  Copy, 
  Check, 
  Loader2, 
  AlertCircle, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Database, 
  ChevronDown, 
  ChevronUp, 
  RefreshCw,
  Send,
  Zap,
  Bookmark,
  FileText
} from 'lucide-react';
import { searchSociologyRAGByQuestion, getSociologyRAGContent, TextbookRAGEntry } from '../sociologyRAG';
import { sanitizeSociologyMarkdown, parsePEELParagraphs, cleanPEELForProse } from '../markdownUtils';
import { exportElementToPdf } from '../pdfUtils';
import AIStudyDisclaimer from './AIStudyDisclaimer';
import SourcesPanel from './SourcesPanel';
import PEELClarityGuide from './PEELClarityGuide';
import { validateCitations } from '../utils/citationValidator';
import { ACADEMIC_EVIDENCE_LIBRARY } from '../evidenceData';
import { CitationItem, UnsupportedClaimItem } from '../types';

export type MarkType = 4 | 6 | 8 | 10 | 16 | 26 | 35;

interface PresetQuestion {
  questionText: string;
  marks: MarkType;
  paper: string;
  topic: string;
  description: string;
}

const PRESET_QUESTIONS: PresetQuestion[] = [
  {
    marks: 4,
    paper: 'Paper 1',
    topic: 'Socialisation & Identity',
    questionText: 'Describe two features of primary socialisation.',
    description: '4-mark AO1 short answer detailing family and early language/values transmission.'
  },
  {
    marks: 6,
    paper: 'Paper 1',
    topic: 'Methods of Research',
    questionText: 'Explain two limitations of using field experiments in sociological research.',
    description: '6-mark Q2b methodology question using the 3-step rubric (identify, explain why method has it, explain consequence).'
  },
  {
    marks: 8,
    paper: 'Paper 1',
    topic: 'Methods of Research',
    questionText: 'Explain two reasons why positivists favour the use of closed-ended questionnaires.',
    description: '8-mark AO1+AO2 response detailing replication, objectivity, and quantifiable operationalisation.'
  },
  {
    marks: 10,
    paper: 'Paper 2',
    topic: 'The Family',
    questionText: 'Explain two arguments supporting the view that the nuclear family is no longer the dominant family type in modern societies.',
    description: '10-mark AO1+AO2 analysis of family diversity (Rapoport & Rapoport, Chester, Stacey).'
  },
  {
    marks: 16,
    paper: 'Paper 2',
    topic: 'The Family',
    questionText: '(a) Explain two arguments supporting the view that the extent of family diversity has been exaggerated [10]. (b) Explain one argument against this view [6].',
    description: '10+6 Marks (16m total): Complete Cambridge Section A Question 3 paired set (Support 10m + Counter 6m).'
  },
  {
    marks: 26,
    paper: 'Paper 1',
    topic: 'Socialisation & Identity',
    questionText: 'Evaluate the view that social class is no longer the most significant factor in shaping identity in contemporary society.',
    description: '26-mark Section B essay debating Postmodern fragmentation versus Marxist structural inequality.'
  },
  {
    marks: 35,
    paper: 'Paper 4',
    topic: 'Globalisation & Religion',
    questionText: 'Evaluate the view that religion is no longer socially significant in modern industrial societies.',
    description: '35-mark Paper 4 essay debating secularisation (Bruce, Weber) vs de-secularisation and believing without belonging (Davie, Berger).'
  }
];

const MARK_CONFIGS: Record<MarkType, {
  label: string;
  badgeLabel: string;
  timeEstimate: string;
  badgeColor: string;
  description: string;
  structureNotes: string;
  aoFocus: string;
}> = {
  4: {
    label: '4 Marks (Short Answer)',
    badgeLabel: '4 Marks',
    timeEstimate: '5-7 mins',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    description: 'Describe two points/features/reasons. Strictly AO1 Knowledge & Understanding without evaluation.',
    structureNotes: '2 concise paragraphs with distinct sociological terms and empirical examples.',
    aoFocus: 'AO1 (4 Marks)'
  },
  6: {
    label: '6 Marks (Limitations / Counter)',
    badgeLabel: '6 Marks',
    timeEstimate: '8-10 mins',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
    description: 'Explain two limitations/strengths (Q2b) OR one unpacked counterargument (Q3b).',
    structureNotes: '3-step rubric: Identify + Why method/theory has it + Why it is a limitation/strength.',
    aoFocus: 'AO1 (3 Marks) + AO2 (3 Marks)'
  },
  8: {
    label: '8 Marks (Structured Explanation)',
    badgeLabel: '8 Marks',
    timeEstimate: '10-12 mins',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    description: 'Explain two factors/reasons with depth. AO1 Knowledge + AO2 Application using sociological concepts and named thinkers.',
    structureNotes: '2 richly developed PEEL paragraphs explaining underlying sociological mechanisms.',
    aoFocus: 'AO1 (4 Marks) + AO2 (4 Marks)'
  },
  10: {
    label: '10 Marks (Deep Analytical Response)',
    badgeLabel: '10 Marks',
    timeEstimate: '15-18 mins',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    description: 'Explain two arguments supporting a major theoretical perspective with empirical studies and methodological depth.',
    structureNotes: '2 extensive 5-mark PEEL paragraphs citing landmark studies and structural/action mechanisms.',
    aoFocus: 'AO1 (4 Marks) + AO2 (6 Marks)'
  },
  16: {
    label: '10+6 Marks (Paired Set: Q3a + Q3b)',
    badgeLabel: '10+6 Marks',
    timeEstimate: '22-25 mins',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    description: 'Full Section A Q3 Question Pair: 3(a) Explain two supporting arguments [10] + 3(b) Explain one counterargument [6].',
    structureNotes: 'Part (a): 2 extensive 5m PEELs in support. Part (b): 1 fully unpacked 6m counter-perspective.',
    aoFocus: 'Part (a) [10m] + Part (b) [6m] = 16 Marks'
  },
  26: {
    label: '26 Marks (Section B Essay)',
    badgeLabel: '26 Marks',
    timeEstimate: '40-45 mins',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    description: 'Full evaluative essay debating theoretical perspectives, empirical evidence, and critical evaluation.',
    structureNotes: 'Introduction + 2-3 Supporting PEELs + 2-3 Counter Evaluative PEELs ("However...") + Nuanced Conclusion.',
    aoFocus: 'AO1 (8 Marks) + AO2 (8 Marks) + AO3 (10 Marks)'
  },
  35: {
    label: '35 Marks (Paper 4 Synoptic Essay)',
    badgeLabel: '35 Marks',
    timeEstimate: '50-60 mins',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    description: 'Comprehensive A Level Paper 4 essay covering Globalisation, Media, Religion, or Inequality with multi-paradigm evaluation.',
    structureNotes: 'In-depth Introduction + 3-4 Detailed Supporting PEELs + 3-4 Evaluative Counter PEELs + Non-moralising Conclusion.',
    aoFocus: 'AO1 (9 Marks) + AO2 (11 Marks) + AO3 (15 Marks)'
  }
};

interface GeneratedAnswer {
  questionText: string;
  marks: MarkType;
  paper: string;
  content: string;
  analysis: string;
  ao1Breakdown: string;
  ao2Breakdown: string;
  ao3Breakdown: string;
  keyTheoristsUsed: string[];
  keyTermsUsed: string[];
  wordCount: number;
  ragContextUsed?: string;
  citations?: Array<CitationItem & { evidence?: import('../types').AcademicEvidence }>;
  unsupportedClaims?: UnsupportedClaimItem[];
}

function safeJsonParse(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[1]);
      } catch {}
    }
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start !== -1 && end !== -1 && end > start) {
      try {
        return JSON.parse(text.substring(start, end + 1));
      } catch {}
    }
    return null;
  }
}

export default function AskQuestionView() {
  const [questionInput, setQuestionInput] = useState('');
  const [selectedMarks, setSelectedMarks] = useState<MarkType>(26);
  const [selectedPaper, setSelectedPaper] = useState<string>('Auto');
  const [answerFormat, setAnswerFormat] = useState<'standard' | 'peel'>('standard');
  const [displayMode, setDisplayMode] = useState<'peel' | 'prose'>('peel');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedAnswer, setGeneratedAnswer] = useState<GeneratedAnswer | null>(null);
  const [showRAGContext, setShowRAGContext] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isExportingPdf, setIsExportingPdf] = useState(false);

  const printContainerRef = useRef<HTMLDivElement>(null);

  const handleSelectPreset = (preset: PresetQuestion) => {
    setQuestionInput(preset.questionText);
    setSelectedMarks(preset.marks);
    setSelectedPaper(preset.paper);
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!questionInput.trim()) {
      setError('Please enter a question prompt.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI();

      // 1. Retrieve RAG Database Context
      const targetPaper = selectedPaper === 'Auto' ? 'Paper 1' : selectedPaper;
      const retrievedContext = searchSociologyRAGByQuestion(targetPaper, questionInput);

      // 2. Build High-Precision Prompt aligned with Cambridge 9699 Mark Schemes
      const prompt = `You are an expert Cambridge Sociology educator and assessment specialist for Cambridge International AS & A Level Sociology (9699).
You have authoritative mastery of both:
1. "Collins Cambridge International AS & A Level Sociology" (Haralambos & Holborn et al.)
2. "Cambridge University Press Coursebook" (Livesey & Blundell)

Provide an illustrative high-band model response aligned with Cambridge 9699 assessment criteria for the following Cambridge Sociology question:

QUESTION: "${questionInput.trim()}"
MARK TARIFF: [${selectedMarks} MARKS]
TARGET PAPER: ${selectedPaper === 'Auto' ? 'Auto-detected (Cambridge 9699 Syllabus)' : selectedPaper}

${retrievedContext ? `TEXTBOOK REPOSITORY CONTEXT:
${retrievedContext}
` : ''}

CRITICAL DISTINCTION: EVIDENCE vs. EXPLANATION IN PEEL/PEEEL STRUCTURE:
You must strictly separate Empirical Evidence from Theoretical Explanation:
- **POINT**: The central sociological argument / thesis assertion directly answering the question prompt (AO1).
- **EVIDENCE**: EMPIRICAL MATERIAL & CONCRETE FACTS ONLY. Cite specific named sociologists/theorists with publication years (e.g. Talcott Parsons (1951), Sue Sharpe (1976, 1994), Paul Willis (1977), Ann Oakley (1974)), landmark empirical research studies, sample methodologies, statistical datasets (e.g. UK ONS divorce rates, DfE attainment gaps), or concrete historical/contemporary case studies. This answers: "WHO found it? WHAT empirical study or dataset proves it?" DO NOT put abstract theoretical reasoning here.
- **EXPLANATION**: THEORETICAL MECHANISM & SOCIOLOGICAL ANALYSIS ONLY. Unpack the HOW and WHY. Explain the sociological concepts, structural forces (e.g. capitalism, patriarchy, functional fit), or interactionist processes (e.g. labelling, looking-glass self, self-fulfilling prophecy). Connect the evidence directly back to why it proves the point. This answers: "HOW and WHY does this mechanism work theoretically?"
- **EVALUATION** (for essays AO3): CRITICAL APPRAISAL ONLY. Methodological weaknesses (sample size, validity, interviewer bias, temporal relevance) or rival theoretical paradigms (Marxism vs Functionalism, Feminism, Postmodernism).
- **LINK**: Direct synthesis tying the analytical argument back to the specific words of the exam question prompt.

MARK TARIFF STRUCTURAL DIRECTIVES:
${selectedMarks === 4 ? `
[4 MARKS SHORT ANSWER (Q1)]:
- DO NOT USE PEEL OR EVALUATION.
- Output exactly TWO distinct, clear paragraphs:
  **Point 1: [Sociological Feature/Reason/Concept]** - [Clear identification + description in specific question context].
  **Point 2: [Sociological Feature/Reason/Concept]** - [Clear identification + description in specific question context].
` : selectedMarks === 6 ? `
[6 MARKS METHODOLOGICAL / THEORETICAL LIMITATIONS (Q2b) OR SINGLE COUNTERARGUMENT (Q3b)]:
- If addressing a Q2b (Limitations/Strengths): Provide exactly TWO points following the Cambridge 3-step rubric:
  * Step 1: Identify the limitation/strength.
  * Step 2: Explain what it is about the method/theory that creates this feature.
  * Step 3: Explain the consequence (impact on validity, reliability, ethics, or theoretical scope).
- If addressing a Q3b (Counterargument): Provide ONE deeply unpacked, sophisticated counter-perspective with named theorists and empirical evidence.
` : selectedMarks === 8 ? `
[8 MARKS STRUCTURED QUESTION (Q2a)]:
- Provide exactly TWO richly developed 4-mark PEEL paragraphs explaining the two requested factors/reasons.
- For each point: (1) Identify reason, (2) Cite empirical evidence / theorist with year, (3) Explain theoretical mechanism (how & why), (4) Apply directly to question prompt.
` : selectedMarks === 10 ? `
[10 MARKS DEEP ANALYTICAL QUESTION (Q3a)]:
- Provide exactly TWO extensive 5-mark PEEL paragraphs thoroughly exploring the requested theoretical perspective or empirical debate.
- Cite landmark studies, empirical methodologies (sample size, qualitative/quantitative methods), and theoretical mechanisms.
` : selectedMarks === 16 ? `
[10+6 MARKS COMPLETE SECTION A QUESTION 3 PAIR (16 MARKS TOTAL)]:
Structure the model answer with clear subheadings for both parts:
### Question 3(a) [10 Marks]
Explain two arguments supporting the view in the prompt:
- Provide TWO fully developed 5-mark PEEL paragraphs.
- Cite landmark theorists (with dates), empirical evidence, and theoretical mechanisms.
- Focus strictly on answering the support side without evaluation.

### Question 3(b) [6 Marks]
Explain one argument against the view in the prompt:
- Provide ONE fully unpacked, sophisticated 6-mark counterargument paragraph.
- Deploy an alternative theoretical perspective or empirical critique challenging 3(a).
- Explicitly explain why this counter-factor challenges or outweighs the supporting argument.
` : selectedMarks === 35 ? `
[35 MARKS PAPER 4 SYNOPTIC ESSAY]:
- Full continuous A* Masterclass essay for Cambridge Paper 4 (AO1=9, AO2=11, AO3=15):
  1. **Introduction**: Conceptual precision, theoretical mapping across Globalisation, Media, Religion, or Inequality, and clear framing.
  2. **3-4 Detailed Supporting PEEL Paragraphs**: In-depth theoretical unpacking (e.g. Dependency theory, Frankfurt School, Cultural imperialism, Secularisation), empirical studies, and institutional dynamics.
  3. **3-4 Evaluating Counter PEEL Paragraphs**: Embedded evaluation ("Conversely...", "However..."), contrasting paradigms (e.g. Modernisation, Neo-Marxism, Postmodern fluidity, Fundamentalist revival), and methodological critiques.
  4. **Nuanced Conclusion**: Non-moralising, evaluative assessment weighing the most persuasive sociological explanations.
` : `
[26 MARKS SECTION B ESSAY]:
- Full continuous A* Masterclass essay containing (AO1=8, AO2=8, AO3=10):
  1. **Introduction**: Precise definition of core concepts, establishing the central theoretical dialectic (e.g. Structuralism vs Interactionism, Consensus vs Conflict, Modernity vs Postmodernity).
  2. **2-3 Supporting PEEL Paragraphs**: Thoroughly explaining key arguments, named theorists with years, and empirical research supporting the prompt.
  3. **2-3 Evaluating/Counter PEEL Paragraphs**: Starting with evaluative signposts ("However, ...", "Conversely, ..."), deploying alternative theoretical paradigms, methodological critiques, and contemporary research.
  4. **Nuanced Conclusion**: Formulating a qualified, holistic evaluative judgement directly answering the question prompt.
`}

${answerFormat === 'peel' ? `
FORMATTING DIRECTIVE (STRUCTURED PEEL MODE):
For analytical paragraphs (8m, 10m, 26m, 35m), explicitly partition each paragraph using these distinct bold tags:
**POINT** - [Insert debating claim here]
**EVIDENCE** - [Insert empirical facts: named theorist(s) with publication year, landmark empirical study, sample methods, or statistics]
**EXPLANATION** - [Explain the theoretical mechanism, sociological concepts, and analytical logic of HOW and WHY the evidence proves the claim]
**EVALUATION** - [Weave AO3 critique: methodological limitations, temporal validity, or rival theoretical paradigm (for essay questions)]
**LINK** - [Explicit link and mini-judgement tying back directly to the question wording]
` : `
FORMATTING DIRECTIVE (STANDARD PROSE MODE):
Write in continuous, flowing, highly sophisticated academic prose with natural paragraph transitions without uppercase PEEL labels.
`}

CRITICAL KEYWORD & FORMATTING DIRECTIVES:
- BOLD ALL KEYWORDS: Systematically BOLD (using **bold** markdown tags) all key sociological concepts, named theorists with dates, empirical studies, methodologies, and core evaluative terms (e.g. **Talcott Parsons (1951)**, **ideological state apparatus**, **Louis Althusser (1971)**, **Stuart Hall (1992)**, **ecological validity**, **triangulation**, **value consensus**).
- FORMATTING SYNTAX: Format bold strictly as **keyword** with standard spaces before and after. Never escape asterisks with backslashes.
- Double line breaks between all paragraphs.
- Output MUST be a valid JSON object matching the requested schema.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: prompt,
        config: {
          maxOutputTokens: 8192,
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              content: { type: Type.STRING, description: 'The complete model answer in markdown format' },
              analysis: { type: Type.STRING, description: 'Overall assessment commentary informed by published examiner guidance on why this answer reflects high-band performance' },
              ao1Breakdown: { type: Type.STRING, description: 'AO1 Knowledge & Understanding specific assessment notes' },
              ao2Breakdown: { type: Type.STRING, description: 'AO2 Application & Evidence specific assessment notes' },
              ao3Breakdown: { type: Type.STRING, description: 'AO3 Analysis & Evaluation specific assessment notes' },
              keyTheoristsUsed: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: 'List of named sociological thinkers and theorists included in the answer'
              },
              keyTermsUsed: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'List of primary sociological concepts and terms included in the answer'
              },
              wordCount: { type: Type.NUMBER, description: 'Estimated total word count of the answer' }
            },
            required: ['content', 'analysis', 'ao1Breakdown', 'ao2Breakdown', 'ao3Breakdown', 'keyTheoristsUsed', 'keyTermsUsed', 'wordCount']
          }
        }
      });

      const data = safeJsonParse(response.text || '{}');
      if (!data || !data.content) {
        throw new Error('The AI returned an invalid response. Please try again.');
      }

      const validation = validateCitations(data.content, ACADEMIC_EVIDENCE_LIBRARY);

      setGeneratedAnswer({
        questionText: questionInput.trim(),
        marks: selectedMarks,
        paper: selectedPaper === 'Auto' ? 'Cambridge 9699 Assessment' : selectedPaper,
        content: data.content,
        analysis: data.analysis,
        ao1Breakdown: data.ao1Breakdown,
        ao2Breakdown: data.ao2Breakdown,
        ao3Breakdown: data.ao3Breakdown,
        keyTheoristsUsed: data.keyTheoristsUsed || [],
        keyTermsUsed: data.keyTermsUsed || [],
        wordCount: data.wordCount || data.content.split(/\s+/).length,
        ragContextUsed: retrievedContext,
        citations: validation.citations,
        unsupportedClaims: validation.unsupportedClaims
      });

    } catch (err: any) {
      console.error('Answer Generation Error:', err);
      setError(err?.message || 'Failed to generate model answer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!generatedAnswer) return;
    navigator.clipboard.writeText(
      `QUESTION: ${generatedAnswer.questionText} [${generatedAnswer.marks} MARKS]\n\n${generatedAnswer.content}\n\nEXAMINER COMMENTARY:\n${generatedAnswer.analysis}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportPdf = async () => {
    if (!generatedAnswer || !printContainerRef.current) return;
    setIsExportingPdf(true);
    try {
      const cleanQ = generatedAnswer.questionText.slice(0, 30).replace(/[^a-zA-Z0-9]/g, '_');
      const filename = `Cambridge_Sociology_${generatedAnswer.marks}m_${cleanQ}_ModelAnswer.pdf`;
      await exportElementToPdf(printContainerRef.current, filename);
    } catch (err) {
      console.error('PDF Export Error:', err);
      setError('Failed to export PDF. Please try again.');
    } finally {
      setIsExportingPdf(false);
    }
  };

  const config = MARK_CONFIGS[selectedMarks];

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
            <HelpCircle size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Ask a Question</h2>
            <p className="text-slate-600 text-sm">
              Input any custom essay or exam question. Select the mark tariff (4, 6, 8, 10, 10+6, 26, or 35 marks) to generate an illustrative high-band model response aligned with Cambridge 9699 assessment criteria.
            </p>
          </div>
        </div>
      </header>

      {/* Interactive Evidence vs. Explanation Clarity Guide */}
      <PEELClarityGuide defaultOpen={false} />

      {/* Preset Starters Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
            <Zap size={15} className="text-amber-500" />
            <span>Try Sample Exam Prompts:</span>
          </div>
          <span className="text-xs text-slate-400">Click any prompt to load</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {PRESET_QUESTIONS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectPreset(preset)}
              className="text-left p-3 bg-white hover:bg-indigo-50/70 border border-slate-200 hover:border-indigo-300 rounded-xl transition-all group flex flex-col justify-between shadow-2xs"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${MARK_CONFIGS[preset.marks].badgeColor}`}>
                  {preset.marks} Marks
                </span>
                <span className="text-[10px] text-slate-500 font-medium">{preset.paper}</span>
              </div>
              <p className="text-xs font-medium text-slate-800 line-clamp-2 group-hover:text-indigo-900 transition-colors">
                "{preset.questionText}"
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Question Form */}
      <form onSubmit={handleGenerate} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        {/* Question Text Area */}
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2">
            Your Question Prompt <span className="text-red-500">*</span>
          </label>
          <textarea
            value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}
            placeholder="e.g. Evaluate the view that social class remains the primary determinant of educational achievement in contemporary society..."
            rows={4}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm leading-relaxed transition-all resize-y"
          />
        </div>

        {/* Mark Tariff Selector (4, 6, 8, 10, 10+6, 26, 35 marks) */}
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2.5">
            Select Question Type & Mark Tariff <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {([4, 6, 8, 10, 16, 26, 35] as MarkType[]).map((marks) => {
              const markConf = MARK_CONFIGS[marks];
              const isSelected = selectedMarks === marks;
              return (
                <button
                  type="button"
                  key={marks}
                  onClick={() => setSelectedMarks(marks)}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-indigo-50/80 border-indigo-600 ring-2 ring-indigo-500/20 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-extrabold text-slate-900">
                      {markConf.badgeLabel}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${markConf.badgeColor}`}>
                      {markConf.timeEstimate}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-2 font-medium">
                    {markConf.description}
                  </p>
                  <div className="text-[11px] font-bold text-indigo-700 pt-2 border-t border-slate-200/80">
                    {markConf.aoFocus}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Extra Options Row: Paper Context & Format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Syllabus Paper Focus
            </label>
            <select
              value={selectedPaper}
              onChange={(e) => setSelectedPaper(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Auto">Auto-Detect from Question</option>
              <option value="Paper 1">Paper 1: Socialisation, Identity & Methods</option>
              <option value="Paper 2">Paper 2: Family, Media & Religion</option>
              <option value="Paper 3">Paper 3: Education & Global Development</option>
              <option value="Paper 4">Paper 4: Globalisation & Social Inequality</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Answer Structure Style
            </label>
            <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setAnswerFormat('standard')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                  answerFormat === 'standard'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Continuous Prose
              </button>
              <button
                type="button"
                onClick={() => setAnswerFormat('peel')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  answerFormat === 'peel'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers size={13} />
                <span>PEEL Paragraphs</span>
              </button>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm flex items-start gap-3">
            <AlertCircle size={18} className="flex-shrink-0 mt-0.5 text-red-500" />
            <div>
              <p className="font-bold">Generation Error</p>
              <p>{error}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <BookOpen size={14} className="text-indigo-500" />
            <span>Cross-references Collins & Cambridge University Press coursebooks</span>
          </div>

          <button
            type="submit"
            disabled={loading || !questionInput.trim()}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-indigo-600/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Synthesizing Model Answer...</span>
              </>
            ) : (
              <>
                <Sparkles size={16} />
                <span>Generate A* Model Answer ({MARK_CONFIGS[selectedMarks].badgeLabel})</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Answer Output View */}
      {generatedAnswer && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Main Answer Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            {/* Action Bar & Metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${MARK_CONFIGS[generatedAnswer.marks]?.badgeColor}`}>
                    {MARK_CONFIGS[generatedAnswer.marks]?.badgeLabel || `${generatedAnswer.marks} Marks`}
                  </span>
                  <span className="text-xs font-semibold text-slate-600">
                    {generatedAnswer.paper}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  "{generatedAnswer.questionText}"
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded-full font-bold shadow-xs whitespace-nowrap">
                  ⚡ {generatedAnswer.wordCount} Words
                </span>
                
                <button
                  onClick={handleCopy}
                  className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                  title="Copy model answer"
                >
                  {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  onClick={handleExportPdf}
                  disabled={isExportingPdf}
                  className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95 disabled:opacity-50 cursor-pointer"
                  title="Export to Cambridge format PDF"
                >
                  {isExportingPdf ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Generating PDF...</span>
                    </>
                  ) : (
                    <>
                      <Download size={14} />
                      <span>Export PDF</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Key Theorists and Concepts Badges */}
            {(generatedAnswer.keyTheoristsUsed.length > 0 || generatedAnswer.keyTermsUsed.length > 0) && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                  Key References:
                </span>
                {generatedAnswer.keyTheoristsUsed.map((theorist, idx) => (
                  <span key={idx} className="bg-purple-50 text-purple-700 border border-purple-200 text-xs px-2.5 py-0.5 rounded-md font-semibold">
                    👤 {theorist}
                  </span>
                ))}
                {generatedAnswer.keyTermsUsed.map((term, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-800 border border-slate-200 text-xs px-2.5 py-0.5 rounded-md font-medium">
                    📖 {term}
                  </span>
                ))}
              </div>
            )}

            {/* PEEL / Prose View Mode Toggle Bar (If Answer contains PEEL structure) */}
            {(() => {
              const hasPEEL = /POINT/i.test(generatedAnswer.content) && /EVIDENCE/i.test(generatedAnswer.content);
              const parsedParagraphs = hasPEEL ? parsePEELParagraphs(generatedAnswer.content) : [];

              return (
                <div className="space-y-4 pt-2">
                  {hasPEEL && (
                    <div className="flex flex-wrap items-center justify-between gap-3 p-2 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <Layers size={15} className="text-indigo-600" />
                        <span>Interactive Structure View:</span>
                      </div>

                      <div className="flex items-center gap-1 bg-slate-200/70 p-0.5 rounded-lg">
                        <button
                          type="button"
                          onClick={() => setDisplayMode('peel')}
                          className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                            displayMode === 'peel'
                              ? 'bg-white text-indigo-700 shadow-2xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <Zap size={13} />
                          <span>Structured PEEL Cards</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setDisplayMode('prose')}
                          className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                            displayMode === 'prose'
                              ? 'bg-white text-indigo-700 shadow-2xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <FileText size={13} />
                          <span>Continuous Prose</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Render Answer */}
                  {hasPEEL && displayMode === 'peel' ? (
                    <div className="space-y-4">
                      {parsedParagraphs.map((para, pIdx) => {
                        if (para.isPEEL && para.blocks) {
                          return (
                            <div key={pIdx} className="space-y-3 bg-slate-50/60 p-5 rounded-2xl border border-slate-200 shadow-2xs">
                              {para.blocks.map((block, bIdx) => {
                                const styles = {
                                  POINT: { 
                                    bg: 'bg-blue-50/60 border-l-4 border-blue-500 text-blue-950', 
                                    label: 'POINT (AO1 Claim)', 
                                    desc: 'Direct thesis assertion answering question prompt',
                                    badge: 'bg-blue-600 text-white' 
                                  },
                                  EVIDENCE: { 
                                    bg: 'bg-purple-50/60 border-l-4 border-purple-500 text-purple-950', 
                                    label: 'EVIDENCE (Empirical & Theorists)', 
                                    desc: 'Named sociologists with dates, landmark empirical studies, statistics & facts',
                                    badge: 'bg-purple-600 text-white' 
                                  },
                                  EXPLANATION: { 
                                    bg: 'bg-amber-50/60 border-l-4 border-amber-500 text-amber-950', 
                                    label: 'EXPLANATION (Theoretical Mechanism)', 
                                    desc: 'How & why it works: conceptual analysis, structural & action processes',
                                    badge: 'bg-amber-600 text-white' 
                                  },
                                  EVALUATION: { 
                                    bg: 'bg-rose-50/60 border-l-4 border-rose-500 text-rose-950', 
                                    label: 'EVALUATION (AO3 Critical Appraisal)', 
                                    desc: 'Methodological limitations, temporal shifts & rival theoretical paradigms',
                                    badge: 'bg-rose-600 text-white' 
                                  },
                                  LINK: { 
                                    bg: 'bg-emerald-50/60 border-l-4 border-emerald-500 text-emerald-950', 
                                    label: 'LINK (Synthesis & Focus)', 
                                    desc: 'Explicit synthesis and qualified mini-judgement back to question wording',
                                    badge: 'bg-emerald-600 text-white' 
                                  },
                                  TEXT: { 
                                    bg: 'bg-slate-50 border-l-4 border-slate-400 text-slate-900', 
                                    label: 'DETAIL', 
                                    desc: 'Contextual sociological analysis',
                                    badge: 'bg-slate-500 text-white' 
                                  }
                                }[block.type] || { 
                                  bg: 'bg-slate-50 border-l-4 border-slate-400 text-slate-900', 
                                  label: 'DETAIL', 
                                  desc: 'Contextual sociological analysis',
                                  badge: 'bg-slate-500 text-white' 
                                };

                                return (
                                  <div key={bIdx} className={`p-4 rounded-xl border border-slate-200/80 ${styles.bg} space-y-2`}>
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                      <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full inline-block ${styles.badge}`}>
                                        {styles.label}
                                      </span>
                                      <span className="text-[10px] text-slate-500 font-medium italic">
                                        {styles.desc}
                                      </span>
                                    </div>
                                    <div className="text-sm font-medium leading-relaxed text-slate-800 markdown-body prose max-w-none">
                                      <Markdown remarkPlugins={[remarkGfm]}>{sanitizeSociologyMarkdown(block.text)}</Markdown>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }
                        return (
                          <div key={pIdx} className="bg-white p-5 rounded-2xl border border-slate-200 text-sm font-medium leading-relaxed text-slate-800 markdown-body prose max-w-none shadow-2xs">
                            <Markdown remarkPlugins={[remarkGfm]}>{sanitizeSociologyMarkdown(para.text || '')}</Markdown>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="markdown-body prose prose-slate max-w-none pt-1">
                      <Markdown remarkPlugins={[remarkGfm]}>
                        {sanitizeSociologyMarkdown(hasPEEL && displayMode === 'prose' ? cleanPEELForProse(generatedAnswer.content) : generatedAnswer.content)}
                      </Markdown>
                    </div>
                  )}
                </div>
              );
            })()}

            <AIStudyDisclaimer className="mt-4" />

            <SourcesPanel
              citations={generatedAnswer.citations}
              unsupportedClaims={generatedAnswer.unsupportedClaims}
              hasUnverifiedWarning={(generatedAnswer.unsupportedClaims?.length || 0) > 0}
              className="mt-6"
            />

            {/* Examiner AO Marks Commentary & Report (Placed After the Answer) */}
            <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-5 space-y-3 break-inside-avoid">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                <Award size={18} className="text-indigo-600" />
                <span>Assessment Commentary & AO Breakdown Report (Informed by Cambridge Guidance)</span>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {generatedAnswer.analysis}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/80 border border-indigo-100/80 rounded-lg p-3">
                  <span className="text-[11px] font-bold text-indigo-900 block mb-1">AO1 Knowledge</span>
                  <p className="text-xs text-slate-600">{generatedAnswer.ao1Breakdown}</p>
                </div>
                <div className="bg-white/80 border border-indigo-100/80 rounded-lg p-3">
                  <span className="text-[11px] font-bold text-emerald-900 block mb-1">AO2 Application</span>
                  <p className="text-xs text-slate-600">{generatedAnswer.ao2Breakdown}</p>
                </div>
                <div className="bg-white/80 border border-indigo-100/80 rounded-lg p-3">
                  <span className="text-[11px] font-bold text-purple-900 block mb-1">AO3 Evaluation</span>
                  <p className="text-xs text-slate-600">{generatedAnswer.ao3Breakdown}</p>
                </div>
              </div>
            </div>

            {/* RAG Context Drawer Toggle */}
            {generatedAnswer.ragContextUsed && (
              <div className="border-t border-slate-100 pt-4">
                <button
                  onClick={() => setShowRAGContext(!showRAGContext)}
                  className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  <Database size={14} />
                  <span>{showRAGContext ? 'Hide Textbook Database Evidence' : 'Show Textbook Database Evidence Used'}</span>
                  {showRAGContext ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {showRAGContext && (
                  <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-mono whitespace-pre-wrap max-h-80 overflow-y-auto leading-relaxed">
                    {generatedAnswer.ragContextUsed}
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Hidden Printable Template for PDF Export */}
      {generatedAnswer && (
        <div className="absolute top-0 left-[-9999px] z-[-50] w-[210mm]">
          <div
            ref={printContainerRef}
            className="p-10 bg-white text-black font-sans printable-content"
            style={{ width: '210mm', minHeight: '297mm', margin: '0 auto', boxSizing: 'border-box' }}
          >
            {/* Minimalist Black & White Academic Header */}
            <div className="border-b-2 border-black pb-4 mb-6 break-inside-avoid">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-neutral-800 uppercase">
                    CAMBRIDGE INTERNATIONAL AS & A LEVEL SOCIOLOGY (9699)
                  </div>
                  <h1 className="text-2xl font-bold tracking-tight text-black mt-1">
                    Illustrative Model Response Specification
                  </h1>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-black uppercase">
                    {generatedAnswer.marks} Marks
                  </div>
                  <div className="text-[11px] text-neutral-600">
                    {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-neutral-300 grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-neutral-900">
                <div className="col-span-2">
                  <span className="font-semibold text-black">Question Prompt:</span> "{generatedAnswer.questionText}"
                </div>
                <div>
                  <span className="font-semibold text-black">Assessment Target:</span> {generatedAnswer.paper}
                </div>
                <div>
                  <span className="font-semibold text-black">Answer Word Count:</span> {generatedAnswer.wordCount} words
                </div>
                <div>
                  <span className="font-semibold text-black">Textbook Standard:</span> Collins & Cambridge University Press Aligned
                </div>
                <div>
                  <span className="font-semibold text-black">Target Band:</span> Level 4 / Level 5 (High-Band Model Response)
                </div>
              </div>
            </div>

            {/* Model Answer Body */}
            <div className="markdown-body prose prose-slate max-w-none text-black text-sm leading-relaxed mb-6">
              <Markdown remarkPlugins={[remarkGfm]}>
                {sanitizeSociologyMarkdown(generatedAnswer.content)}
              </Markdown>
            </div>

            {/* Examiner AO Commentary & Report in Print (After Model Answer) */}
            <div className="border border-neutral-300 p-4 rounded-md mb-6 break-inside-avoid text-xs text-neutral-800 bg-neutral-50/50">
              <div className="font-bold text-black uppercase text-[11px] mb-1">
                Assessment Commentary & AO Breakdown Report (Informed by Cambridge Guidance):
              </div>
              <p className="mb-2 leading-relaxed">{generatedAnswer.analysis}</p>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-200 text-[11px]">
                <div><span className="font-bold text-black">AO1 Knowledge:</span> {generatedAnswer.ao1Breakdown}</div>
                <div><span className="font-bold text-black">AO2 Application:</span> {generatedAnswer.ao2Breakdown}</div>
                <div><span className="font-bold text-black">AO3 Evaluation:</span> {generatedAnswer.ao3Breakdown}</div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-4 border-t border-black flex justify-between items-center text-[11px] text-neutral-600 break-inside-avoid">
              <div>
                <p className="font-bold text-black">Cambridge International AS & A Level Sociology (9699)</p>
                <p className="text-[10px]">SocioPrep Masterclass Academic Answer Series</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-black">{generatedAnswer.marks} Marks Model Answer</p>
                <p className="text-[10px]">Collins & CUP Synthesis • High-Yield Revision</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
