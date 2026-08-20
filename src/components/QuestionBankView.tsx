import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, Type } from '../lib/ai';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  Database, 
  Search, 
  Filter, 
  Sparkles, 
  Loader2, 
  CheckCircle2, 
  BookOpen, 
  Copy, 
  ChevronDown, 
  ChevronUp, 
  Award,
  Clock,
  Layers,
  Check,
  AlertCircle,
  Zap,
  FileText
} from 'lucide-react';
import { questionBankData, BankQuestion } from '../dataQuestionBank';
import { searchSociologyRAGByQuestion } from '../sociologyRAG';
import { sanitizeSociologyMarkdown, cleanPEELForProse, parsePEELParagraphs } from '../markdownUtils';
import AIStudyDisclaimer from './AIStudyDisclaimer';
import SourcesPanel from './SourcesPanel';
import PEELClarityGuide from './PEELClarityGuide';
import { validateCitations } from '../utils/citationValidator';
import { ACADEMIC_EVIDENCE_LIBRARY } from '../evidenceData';
import { CitationItem, UnsupportedClaimItem, AcademicEvidence } from '../types';

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

interface ModelAnswerState {
  questionId: string;
  content: string;
  analysis: string;
  wordCount: number;
  citations?: Array<CitationItem & { evidence?: AcademicEvidence }>;
  unsupportedClaims?: UnsupportedClaimItem[];
}

export default function QuestionBankView() {
  const [selectedPaper, setSelectedPaper] = useState<'All' | 'Paper 1' | 'Paper 2'>('All');
  const [selectedSection, setSelectedSection] = useState<string>('All');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [answerFormat, setAnswerFormat] = useState<'standard' | 'peel'>('standard');
  const [generatingId, setGeneratingId] = useState<string | null>(null);
  const [modelAnswers, setModelAnswers] = useState<Record<string, ModelAnswerState>>({});
  const [expandedAnswers, setExpandedAnswers] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Available topics based on selected paper
  const availableTopics = useMemo(() => {
    const questions = selectedPaper === 'All' 
      ? questionBankData 
      : questionBankData.filter(q => q.paper === selectedPaper);
    const topics = Array.from(new Set(questions.map(q => q.topic)));
    return ['All', ...topics];
  }, [selectedPaper]);

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return questionBankData.filter(q => {
      if (selectedPaper !== 'All' && q.paper !== selectedPaper) return false;
      if (selectedSection !== 'All') {
        if (selectedSection === '4m' && q.marks !== 4) return false;
        if (selectedSection === '14m' && q.marks !== 14) return false;
        if (selectedSection === '16m' && q.marks !== 16) return false;
        if (selectedSection === '26m' && q.marks !== 26) return false;
      }
      if (selectedTopic !== 'All' && q.topic !== selectedTopic) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesText = q.questionText.toLowerCase().includes(query);
        const matchesTopic = q.topic.toLowerCase().includes(query);
        const matchesSubTopic = q.subTopic?.toLowerCase().includes(query);
        const matchesNum = q.questionNumber.toLowerCase().includes(query);
        if (!matchesText && !matchesTopic && !matchesSubTopic && !matchesNum) return false;
      }
      return true;
    });
  }, [selectedPaper, selectedSection, selectedTopic, searchQuery]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleGenerateAnswer = async (q: BankQuestion) => {
    setGeneratingId(q.id);
    setError(null);

    const ragContext = searchSociologyRAGByQuestion(q.paperTitle, q.questionText);

    try {
      const ai = new GoogleGenAI();

      const prompt = `You are an expert Cambridge Sociology educator and assessment specialist for Cambridge International AS & A Level Sociology (9699).
Synthesize deep academic knowledge from the "Collins Cambridge International AS & A Level Sociology" (Haralambos & Holborn) and "Cambridge University Press Coursebook" (Livesey & Blundell).

${ragContext ? `TEXTBOOK REPOSITORY CONTEXT:
${ragContext}
` : ""}

Generate an illustrative high-band model response for the following question from ${q.paperTitle}:

Question Number: ${q.questionNumber} [Total: ${q.marks} Marks]
Question: "${q.questionText}"
Primary Topic: ${q.topic} ${q.subTopic ? `(${q.subTopic})` : ''}

MARK TARIFF & STRUCTURAL RULES:
1. [4 MARKS] Questions (e.g. "Describe two..."):
   - DO NOT USE PEEL OR EVALUATION.
   - Format strictly as two concise, clear paragraphs:
     **Point 1: [Concept/Characteristic]** - [Clear explanation with sociological example/researcher].
     **Point 2: [Concept/Characteristic]** - [Clear explanation with sociological example/researcher].

2. [8 + 6 = 14 MARKS] Question 2(a) & 2(b):
   - **Part (a) [8 Marks]**: Provide exactly TWO structured 4-mark PEEL paragraphs explaining the two requested reasons/factors/features with specific thinkers and conceptual terms.
   - **Part (b) [6 Marks]**: Provide TWO concise, distinct 3-mark analytical paragraphs (or one strength and one limitation as requested) detailing methodological/theoretical implications.

3. [10 + 6 = 16 MARKS] Question 3(a) & 3(b):
   - **Part (a) [10 Marks]**: Provide TWO richly developed 5-mark PEEL paragraphs thoroughly explaining the supporting theoretical view (Functionalism, Marxism, Feminism, Interactionism, Postmodernism) with empirical evidence.
   - **Part (b) [6 Marks]**: Provide ONE robust 6-mark counter-argument PEEL paragraph using sociological material to challenge the view.

4. [26 MARKS] Section B Essays:
   - Full A* Continuous Essay containing:
     • **Introduction**: Clear definition of core concepts, identifying the theoretical dialectic/debate and syllabus significance.
     • **2-3 Supporting PEEL Paragraphs**: Exploring key theories, empirical landmark studies, and sociological mechanisms.
     • **2-3 Evaluating/Counter PEEL Paragraphs**: Starting with evaluative signposts ("However, ...", "Conversely, ..."), assessing theoretical blind spots, methodological limitations, or rival paradigms.
     • **Nuanced Conclusion**: Formulating a qualified, holistic evaluative judgement answering the prompt directly.

${answerFormat === 'peel' ? `
FORMATTING DIRECTIVE (PEEL MODE ENABLED):
For all analytical body paragraphs (in 6m, 8m, 10m, and 26m questions), explicitly partition each paragraph using these distinct bold tags:
**POINT** - [Insert debating claim / thesis directly addressing question prompt (AO1)]
**EVIDENCE** - [Insert empirical facts only: named sociologists/theorists with publication dates, landmark research studies, methods/samples, or statistical datasets]
**EXPLANATION** - [Explain theoretical mechanisms, concepts, and sociological processes answering HOW and WHY the evidence proves the point]
**EVALUATION** - [Weave AO3 critique: methodological limitations, temporal shifts, or rival theoretical perspectives (for essay questions)]
**LINK** - [Explicit link and mini-judgement tying back directly to the question wording]
` : `
FORMATTING DIRECTIVE (STANDARD PROSE MODE):
Write in flowing, sophisticated continuous academic prose with natural paragraph transitions without uppercase PEEL tags.
`}

CRITICAL KEYWORD BOLDING & EXAM RULES:
- NATURAL SPACING & WORD SEPARATION: Always ensure standard spaces between words, before/after parentheses, after punctuation (commas, colons, semicolons), and around bold tags (e.g. write "social identity (the external..." and "and **personal identity** or 'self-concept'..." and "theory: **structuralism versus social action**, **consensus versus conflict**, and **positivism versus interpretivism**"). Never fuse words together without spaces.
- BOLD ALL KEYWORDS: You MUST systematically and comprehensively BOLD (using **bold** markdown tags) all key sociological concepts, terms, theoretical perspectives, named sociologists/theorists (with publication dates), landmark research studies, research methodologies, and core evaluative terms throughout the entire answer (e.g. **Talcott Parsons (1951)**, **warm bath theory**, **functional fit**, **structural differentiation**, **ideological state apparatus**, **Louis Althusser (1971)**, **triangulation**, **ecological validity**, **Hawthorne effect**, **March of Progress**, **dual burden**, **triple shift**, **interpretivism**, **positivism**).
- FORMATTING SYNTAX: Format bold keywords strictly as **keyword** with normal spaces before the opening ** and after the closing **. Never escape asterisks with backslashes.
- Ensure that across every paragraph, 4 to 8 vital sociological keywords, theorist names, and conceptual terms are highlighted in **bold** markdown tags so key curriculum terms and analytical vocabulary stand out clearly.
- Use precise, authoritative academic vocabulary.
- Output MUST be a valid JSON object matching the requested schema.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          maxOutputTokens: 8192,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              content: { type: Type.STRING, description: "The complete model answer in markdown format" },
              analysis: { type: Type.STRING, description: "Examiner commentary on why this answer earns full marks (AO1, AO2, AO3)" },
              wordCount: { type: Type.NUMBER, description: "Approximate total word count of the answer" }
            },
            required: ["content", "analysis", "wordCount"]
          }
        }
      });

      const data = safeJsonParse(response.text || '{}');
      if (!data || !data.content) {
        throw new Error("The AI returned an invalid response. Please try again.");
      }

      const validation = validateCitations(data.content, ACADEMIC_EVIDENCE_LIBRARY);

      setModelAnswers(prev => ({
        ...prev,
        [q.id]: {
          questionId: q.id,
          content: data.content,
          analysis: data.analysis || "Demonstrates comprehensive theoretical understanding (AO1), precise empirical application (AO2), and balanced evaluative judgement (AO3).",
          wordCount: data.wordCount || data.content.split(/\s+/).length,
          citations: validation.citations,
          unsupportedClaims: validation.unsupportedClaims
        }
      }));

      // Automatically expand the newly generated answer
      setExpandedAnswers(prev => ({
        ...prev,
        [q.id]: true
      }));

    } catch (err: any) {
      console.error("Error generating question bank model answer:", err);
      setError(err?.message || "Failed to generate model answer. Please check your connection and try again.");
    } finally {
      setGeneratingId(null);
    }
  };

  const getMarksBadge = (marks: number, qNum: string) => {
    if (marks === 4) return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">4 Marks (Q1)</span>;
    if (marks === 14) return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">8+6 Marks (Q2)</span>;
    if (marks === 16) return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">10+6 Marks (Q3)</span>;
    return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">26 Marks (Essay)</span>;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-5xl mx-auto space-y-8 pb-24"
    >
      {/* Header */}
      <header className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-indigo-100 text-indigo-700 rounded-xl">
                <Database size={24} />
              </span>
              <h2 className="text-3xl font-bold text-slate-900">Cambridge Question Bank</h2>
            </div>
            <p className="text-slate-600 text-base">
              Cambridge 9699-aligned practice question bank for AS Level (2026–2028). Filter by paper, question type, and topic with illustrative high-band model responses.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm text-xs font-semibold">
            <span className="text-slate-500 pl-2">Answer Format:</span>
            <button
              onClick={() => setAnswerFormat('standard')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                answerFormat === 'standard' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Academic Prose
            </button>
            <button
              onClick={() => setAnswerFormat('peel')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                answerFormat === 'peel' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              PEEL Tags
            </button>
          </div>
        </div>

        {/* Global Summary Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500">Total Questions</p>
              <p className="text-xl font-extrabold text-slate-900">{questionBankData.length}</p>
            </div>
            <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Layers size={18} /></span>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500">Paper 1 Questions</p>
              <p className="text-xl font-extrabold text-indigo-600">
                {questionBankData.filter(q => q.paper === 'Paper 1').length}
              </p>
            </div>
            <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><BookOpen size={18} /></span>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500">Paper 2 Questions</p>
              <p className="text-xl font-extrabold text-purple-600">
                {questionBankData.filter(q => q.paper === 'Paper 2').length}
              </p>
            </div>
            <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><BookOpen size={18} /></span>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500">Section B Essays</p>
              <p className="text-xl font-extrabold text-amber-600">
                {questionBankData.filter(q => q.marks === 26).length}
              </p>
            </div>
            <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Award size={18} /></span>
          </div>
        </div>
      </header>

      {/* Interactive Evidence vs. Explanation Clarity Guide */}
      <PEELClarityGuide defaultOpen={false} />

      {/* Control Panel: Filters and Search */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        {/* Paper Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Paper:</span>
          {(['All', 'Paper 1', 'Paper 2'] as const).map(p => (
            <button
              key={p}
              onClick={() => {
                setSelectedPaper(p);
                setSelectedTopic('All');
              }}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                selectedPaper === p
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              {p === 'All' ? 'All Papers' : p === 'Paper 1' ? 'Paper 1: Socialisation & Methods' : 'Paper 2: The Family'}
            </button>
          ))}
        </div>

        {/* Section / Mark Type Filter */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Type:</span>
          {[
            { id: 'All', label: 'All Question Types' },
            { id: '4m', label: 'Section A: Q1 (4m)' },
            { id: '14m', label: 'Section A: Q2 (8+6m)' },
            { id: '16m', label: 'Section A: Q3 (10+6m)' },
            { id: '26m', label: 'Section B: Essays (26m)' },
          ].map(s => (
            <button
              key={s.id}
              onClick={() => setSelectedSection(s.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSection === s.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Search and Topic Selector */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
          <div className="md:col-span-7 relative">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords, thinkers, methods, or question phrase..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          <div className="md:col-span-5 flex items-center gap-2">
            <Filter size={18} className="text-slate-400 flex-shrink-0" />
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
            >
              <option value="All">All Topics ({availableTopics.length - 1})</option>
              {availableTopics.filter(t => t !== 'All').map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-sm text-slate-600 px-1">
        <span>
          Showing <strong className="text-slate-900 font-bold">{filteredQuestions.length}</strong> matching questions
        </span>
        {(selectedPaper !== 'All' || selectedSection !== 'All' || selectedTopic !== 'All' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedPaper('All');
              setSelectedSection('All');
              setSelectedTopic('All');
              setSearchQuery('');
            }}
            className="text-xs text-indigo-600 hover:underline font-semibold"
          >
            Reset all filters
          </button>
        )}
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm">
          <AlertCircle size={20} className="flex-shrink-0 text-red-500" />
          <p>{error}</p>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
            <Database size={36} className="mx-auto text-slate-300" />
            <h3 className="text-lg font-bold text-slate-700">No questions match your current filters</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Try adjusting your search terms, changing the paper selection, or clearing the topic filter.
            </p>
            <button
              onClick={() => {
                setSelectedPaper('All');
                setSelectedSection('All');
                setSelectedTopic('All');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredQuestions.map((q, idx) => {
            const hasAnswer = Boolean(modelAnswers[q.id]);
            const isExpanded = Boolean(expandedAnswers[q.id]);
            const isGeneratingThis = generatingId === q.id;

            return (
              <div 
                key={q.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:border-slate-300"
              >
                {/* Question Header Card */}
                <div className="p-5 md:p-6 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-slate-100 text-slate-700 border border-slate-200">
                        {q.paper}
                      </span>
                      {getMarksBadge(q.marks, q.questionNumber)}
                      <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                        {q.topic}
                      </span>
                      {q.subTopic && (
                        <span className="text-xs text-slate-400 hidden sm:inline">
                          &bull; {q.subTopic}
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-bold text-slate-400">
                      #{idx + 1}
                    </span>
                  </div>

                  {/* Question Text */}
                  <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed whitespace-pre-wrap">
                    {q.questionText}
                  </div>

                  {/* Action Controls */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      {!hasAnswer ? (
                        <button
                          onClick={() => handleGenerateAnswer(q)}
                          disabled={Boolean(generatingId)}
                          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                        >
                          {isGeneratingThis ? (
                            <>
                              <Loader2 size={16} className="animate-spin" />
                              <span>Synthesizing Model Answer...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles size={16} />
                              <span>Generate Model Answer</span>
                            </>
                          )}
                        </button>
                      ) : (
                        <button
                          onClick={() => toggleExpand(q.id)}
                          className={`px-4 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${
                            isExpanded 
                              ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' 
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          }`}
                        >
                          <CheckCircle2 size={16} />
                          <span>{isExpanded ? 'Hide Model Answer' : 'View Model Answer (A*)'}</span>
                          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>
                      )}

                      {hasAnswer && (
                        <button
                          onClick={() => handleGenerateAnswer(q)}
                          disabled={Boolean(generatingId)}
                          className="px-3 py-2 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-xl text-xs font-semibold transition-all disabled:opacity-50 flex items-center gap-1.5"
                          title="Regenerate another model response"
                        >
                          <Sparkles size={14} />
                          <span>Regenerate</span>
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {q.marks === 4 ? '5 mins' : q.marks === 14 ? '20 mins' : q.marks === 16 ? '25 mins' : '45 mins'}
                      </span>
                      <span>&bull;</span>
                      <span>Target: {q.marks} Marks</span>
                    </div>
                  </div>
                </div>

                {/* Model Answer Drawer */}
                <AnimatePresence>
                  {hasAnswer && isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-indigo-50/40 border-t border-indigo-100 p-6 space-y-6"
                    >
                      {/* Answer Banner */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-indigo-100">
                        <div className="flex items-center gap-2">
                          <span className="p-1.5 bg-indigo-600 text-white rounded-lg">
                            <Award size={18} />
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-indigo-950">
                              AI-Generated High-Band Example
                            </h4>
                            <p className="text-xs text-indigo-700">
                              Synthesized from Collins & CUP Coursebooks &bull; {modelAnswers[q.id].wordCount} words
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => handleCopy(q.id, modelAnswers[q.id].content)}
                          className="px-3 py-1.5 bg-white hover:bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
                        >
                          {copiedId === q.id ? (
                            <>
                              <Check size={14} className="text-emerald-600" />
                              <span className="text-emerald-600">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>Copy Answer</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Examiner Commentary */}
                      {modelAnswers[q.id].analysis && (
                        <div className="bg-white/80 p-4 rounded-xl border border-indigo-100 text-xs space-y-1.5">
                          <span className="font-bold text-indigo-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                            <Sparkles size={14} className="text-indigo-600" />
                            Examiner Assessment & Marking Grid Alignment:
                          </span>
                          <p className="text-slate-700 leading-relaxed">
                            {modelAnswers[q.id].analysis}
                          </p>
                        </div>
                      )}

                      {/* Answer Content */}
                      {(() => {
                        const content = modelAnswers[q.id].content;
                        const hasPEEL = /POINT/i.test(content) && /EVIDENCE/i.test(content);
                        const parsedParagraphs = hasPEEL ? parsePEELParagraphs(content) : [];

                        if (hasPEEL && parsedParagraphs.length > 0) {
                          return (
                            <div className="space-y-4">
                              {parsedParagraphs.map((para, pIdx) => {
                                if (para.isPEEL && para.blocks) {
                                  return (
                                    <div key={pIdx} className="space-y-3 bg-white p-5 rounded-xl border border-indigo-100 shadow-sm">
                                      {para.blocks.map((block, bIdx) => {
                                        const styles = {
                                          POINT: { bg: 'bg-blue-50/60 border-l-4 border-blue-500 text-blue-950', label: 'POINT (AO1 Claim)', desc: 'Direct debating claim', badge: 'bg-blue-600 text-white' },
                                          EVIDENCE: { bg: 'bg-purple-50/60 border-l-4 border-purple-500 text-purple-950', label: 'EVIDENCE (Empirical & Theorists)', desc: 'Empirical studies, named sociologists with dates, facts & data', badge: 'bg-purple-600 text-white' },
                                          EXPLANATION: { bg: 'bg-amber-50/60 border-l-4 border-amber-500 text-amber-950', label: 'EXPLANATION (Theoretical Mechanism)', desc: 'How & why it works: conceptual mechanism', badge: 'bg-amber-600 text-white' },
                                          EVALUATION: { bg: 'bg-rose-50/60 border-l-4 border-rose-500 text-rose-950', label: 'EVALUATION (AO3 Critical Appraisal)', desc: 'Methodological limitations & rival paradigms', badge: 'bg-rose-600 text-white' },
                                          LINK: { bg: 'bg-emerald-50/60 border-l-4 border-emerald-500 text-emerald-950', label: 'LINK (Synthesis)', desc: 'Ties back directly to question wording', badge: 'bg-emerald-600 text-white' },
                                          TEXT: { bg: 'bg-slate-50 border-l-4 border-slate-400 text-slate-900', label: 'DETAIL', desc: 'Contextual analysis', badge: 'bg-slate-500 text-white' }
                                        }[block.type] || { bg: 'bg-slate-50 border-l-4 border-slate-400 text-slate-900', label: 'DETAIL', desc: 'Contextual analysis', badge: 'bg-slate-500 text-white' };

                                        return (
                                          <div key={bIdx} className={`p-4 rounded-xl border border-slate-200 ${styles.bg} space-y-2`}>
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
                                  <div key={pIdx} className="bg-white p-5 rounded-xl border border-indigo-100 shadow-sm text-sm font-medium leading-relaxed text-slate-800 markdown-body prose max-w-none">
                                    <Markdown remarkPlugins={[remarkGfm]}>{sanitizeSociologyMarkdown(para.text || '')}</Markdown>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }

                        return (
                          <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm">
                            <div className="text-sm font-medium leading-relaxed text-slate-800 markdown-body prose max-w-none">
                              <Markdown remarkPlugins={[remarkGfm]}>
                                {cleanPEELForProse(content)}
                              </Markdown>
                            </div>
                          </div>
                        );
                      })()}

                      <AIStudyDisclaimer className="mt-4" />

                      <SourcesPanel
                        citations={modelAnswers[q.id].citations}
                        unsupportedClaims={modelAnswers[q.id].unsupportedClaims}
                        hasUnverifiedWarning={(modelAnswers[q.id].unsupportedClaims?.length || 0) > 0}
                        className="mt-4"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>
    </motion.div>
  );
}
