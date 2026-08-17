import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, Type } from '@google/genai';
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
import { sanitizeSociologyMarkdown } from '../markdownUtils';
import { exportElementToPdf } from '../pdfUtils';

export type MarkType = 4 | 8 | 10 | 26;

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
    marks: 8,
    paper: 'Paper 1',
    topic: 'Methods of Research',
    questionText: 'Explain two reasons why sociologists might choose to use semi-structured interviews instead of questionnaires.',
    description: '8-mark AO1+AO2 response comparing interpretivist qualitative validity with positivist instruments.'
  },
  {
    marks: 10,
    paper: 'Paper 2',
    topic: 'The Family',
    questionText: 'Explain two arguments supporting the view that the nuclear family is no longer the dominant family type in modern societies.',
    description: '10-mark AO1+AO2 analysis of family diversity (Rapoport & Rapoport, Chester, Stacey).'
  },
  {
    marks: 26,
    paper: 'Paper 1',
    topic: 'Socialisation & Identity',
    questionText: 'Evaluate the view that social class is no longer the most significant factor in shaping identity in contemporary society.',
    description: '26-mark Section B essay debating Postmodern fragmentation versus Marxist structural inequality.'
  },
  {
    marks: 26,
    paper: 'Paper 2',
    topic: 'Religion',
    questionText: 'Evaluate the view that religious institutions continue to function as a conservative force in modern society.',
    description: '26-mark Section B essay debating Functionalism/Marxism (conservative force) vs. Neo-Marxism/Weber (social change).'
  },
  {
    marks: 4,
    paper: 'Paper 2',
    topic: 'The Media',
    questionText: 'Describe two ways in which the media construct moral panics.',
    description: '4-mark AO1 short answer covering deviance amplification and folk devils (Stan Cohen).'
  }
];

const MARK_CONFIGS: Record<MarkType, {
  label: string;
  timeEstimate: string;
  badgeColor: string;
  description: string;
  structureNotes: string;
  aoFocus: string;
}> = {
  4: {
    label: '4 Marks (Short Answer)',
    timeEstimate: '5-7 mins',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    description: 'Describe two points/features/reasons. Strictly AO1 Knowledge & Understanding without evaluation.',
    structureNotes: '2 concise paragraphs with distinct sociological terms and empirical examples.',
    aoFocus: 'AO1 (4 Marks)'
  },
  8: {
    label: '8 Marks (Structured Explanation)',
    timeEstimate: '10-12 mins',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    description: 'Explain two factors/reasons with depth. AO1 Knowledge + AO2 Application using sociological concepts and named thinkers.',
    structureNotes: '2 richly developed PEEL paragraphs explaining underlying sociological mechanisms.',
    aoFocus: 'AO1 (4 Marks) + AO2 (4 Marks)'
  },
  10: {
    label: '10 Marks (Deep Analytical Response)',
    timeEstimate: '15-18 mins',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    description: 'Explain two arguments supporting a major theoretical perspective with empirical studies and methodological depth.',
    structureNotes: '2 extensive 5-mark PEEL paragraphs citing landmark studies and structural/action mechanisms.',
    aoFocus: 'AO1 (4 Marks) + AO2 (6 Marks)'
  },
  26: {
    label: '26 Marks (Section B Essay)',
    timeEstimate: '40-45 mins',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    description: 'Full evaluative essay debating theoretical perspectives, empirical evidence, and critical evaluation.',
    structureNotes: 'Introduction + 2-3 Supporting PEELs + 2-3 Counter Evaluative PEELs ("However...") + Nuanced Conclusion.',
    aoFocus: 'AO1 (8 Marks) + AO2 (8 Marks) + AO3 (10 Marks)'
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

      // 1. Retrieve RAG Database Context
      const targetPaper = selectedPaper === 'Auto' ? 'Paper 1' : selectedPaper;
      const retrievedContext = searchSociologyRAGByQuestion(targetPaper, questionInput);

      // 2. Build High-Precision Prompt aligned with Cambridge 9699 Mark Schemes
      const prompt = `You are the Chief Examiner for Cambridge International AS & A Level Sociology (9699).
You have authoritative mastery of both:
1. "Collins Cambridge International AS & A Level Sociology" (Haralambos & Holborn et al.)
2. "Cambridge University Press Coursebook" (Livesey & Blundell)

Provide a guaranteed full-marks A* Model Answer for the following Cambridge Sociology question:

QUESTION: "${questionInput.trim()}"
MARK TARIFF: [${selectedMarks} MARKS]
TARGET PAPER: ${selectedPaper === 'Auto' ? 'Auto-detected (Cambridge 9699 Syllabus)' : selectedPaper}

${retrievedContext ? `TEXTBOOK REPOSITORY CONTEXT:
${retrievedContext}
` : ''}

MARK TARIFF STRUCTURAL DIRECTIVES:
${selectedMarks === 4 ? `
[4 MARKS SHORT ANSWER]:
- DO NOT USE PEEL OR EVALUATION.
- Output exactly TWO distinct, clear paragraphs:
  **Point 1: [Sociological Feature/Reason/Concept]** - [Clear explanation with named theorist, study, or sociological mechanism].
  **Point 2: [Sociological Feature/Reason/Concept]** - [Clear explanation with named theorist, study, or sociological mechanism].
` : selectedMarks === 8 ? `
[8 MARKS STRUCTURED QUESTION]:
- Provide exactly TWO richly developed 4-mark PEEL paragraphs explaining the two requested factors/reasons.
- Integrate named sociologists (with publication years), precise concepts, and theoretical mechanisms.
` : selectedMarks === 10 ? `
[10 MARKS DEEP ANALYTICAL QUESTION]:
- Provide exactly TWO extensive 5-mark PEEL paragraphs thoroughly exploring the requested theoretical perspective or empirical debate.
- Cite landmark studies, empirical methodologies (sample size, qualitative/quantitative methods), and theoretical mechanisms.
` : `
[26 MARKS SECTION B ESSAY]:
- Full continuous A* Masterclass essay containing:
  1. **Introduction**: Precise definition of core concepts, establishing the central theoretical dialectic (e.g. Structuralism vs Interactionism, Consensus vs Conflict, Modernity vs Postmodernity).
  2. **2-3 Supporting PEEL Paragraphs**: Thoroughly explaining key arguments, named theorists with years, and empirical research supporting the prompt.
  3. **2-3 Evaluating/Counter PEEL Paragraphs**: Starting with evaluative signposts ("However, ...", "Conversely, ..."), deploying alternative theoretical paradigms, methodological critiques, and contemporary research.
  4. **Nuanced Conclusion**: Formulating a qualified, holistic evaluative judgement directly answering the question prompt.
`}

${answerFormat === 'peel' ? `
FORMATTING DIRECTIVE (STRUCTURED PEEL MODE):
For analytical paragraphs (8m, 10m, 26m), explicitly label the sections:
**POINT** - [Insert debating claim here]
**EVIDENCE** - [Insert concepts, perspective, thinker, or study here]
**EXPLANATION + EVALUATION** - [Explain theoretical mechanism and weave AO3 evaluation directly here]
**LINK** - [Explicit link and mini-judgement back to question wording]
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
              analysis: { type: Type.STRING, description: 'Overall Chief Examiner commentary on why this answer achieves top band marks' },
              ao1Breakdown: { type: Type.STRING, description: 'AO1 Knowledge & Understanding specific examiner notes' },
              ao2Breakdown: { type: Type.STRING, description: 'AO2 Application & Evidence specific examiner notes' },
              ao3Breakdown: { type: Type.STRING, description: 'AO3 Analysis & Evaluation specific examiner notes' },
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
        ragContextUsed: retrievedContext
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
              Input any custom essay or exam question. Select the mark tariff (4, 8, 10, or 26 marks) to generate an A* Cambridge model answer powered by the Collins & Cambridge textbook database.
            </p>
          </div>
        </div>
      </header>

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

        {/* Mark Tariff Selector (4, 8, 10, 26 marks) */}
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2.5">
            Select Question Type & Mark Tariff <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {([4, 8, 10, 26] as MarkType[]).map((marks) => {
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
                      {marks} Marks
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
                <span>Generate A* Model Answer ({selectedMarks}m)</span>
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
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${MARK_CONFIGS[generatedAnswer.marks].badgeColor}`}>
                    {generatedAnswer.marks} Marks
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

            {/* Formatted Markdown Model Answer */}
            <div className="markdown-body prose prose-slate max-w-none pt-2">
              <Markdown remarkPlugins={[remarkGfm]}>
                {sanitizeSociologyMarkdown(generatedAnswer.content)}
              </Markdown>
            </div>

            {/* Examiner AO Marks Commentary & Report (Placed After the Answer) */}
            <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-5 space-y-3 break-inside-avoid">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                <Award size={18} className="text-indigo-600" />
                <span>Chief Examiner Assessment & AO Breakdown Report</span>
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
                    A* Model Answer Specification
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
                  <span className="font-semibold text-black">Target Band:</span> Level 4 / Level 5 (Guaranteed Full Marks)
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
                Chief Examiner Assessment & AO Breakdown Report:
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
