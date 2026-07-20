import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  FileText, 
  LayoutDashboard, 
  GraduationCap, 
  ChevronDown, 
  CheckCircle2,
  Globe,
  BrainCircuit,
  Award,
  Sparkles,
  Loader2,
  AlertCircle,
  RefreshCw,
  Layout,
  Zap,
  Printer,
  Download,
  Users,
  Scale,
  ShieldAlert,
  TrendingUp,
  Clock,
  Target
} from 'lucide-react';
import { GoogleGenAI, Type } from '@google/genai';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import html2pdf from 'html2pdf.js';
import { syllabus, practiceQuestions, paperTopics, pastPapers, paperSubTopics } from './data';
import { getSociologyRAGContent, searchSociologyRAGByQuestion } from './sociologyRAG';

const safeJsonParse = (text: string) => {
  try {
    const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleaned);
  } catch (e) {
    console.error('JSON Parse Error:', e, 'Raw Text:', text);
    
    // Attempt to extract the JSON object if there's surrounding text
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    
    if (start !== -1 && end !== -1 && end > start) {
      try {
        return JSON.parse(text.substring(start, end + 1));
      } catch (e2) {
        // If it still fails, it might be truncated. Try to close it.
        try {
          let attempt = text.substring(start).trim();
          if (!attempt.endsWith('}')) {
            // If it looks like it's inside a string, try to close it
            if (attempt.split('"').length % 2 === 0) {
              attempt += '"';
            }
            attempt += '}';
            return JSON.parse(attempt);
          }
        } catch (e3) {
          // Fall through
        }
      }
    }
    
    // Last resort: return null if all parsing attempts fail
    return null;
  }
};

type Tab = 'dashboard' | 'syllabus' | 'practice' | 'generate' | 'explain';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex-shrink-0">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3 text-indigo-600 mb-1">
            <GraduationCap size={28} strokeWidth={2.5} />
            <h1 className="text-xl font-bold tracking-tight">SocioPrep</h1>
          </div>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Cambridge 9699 AS & A Level</p>
        </div>
        
        <nav className="p-4 space-y-2">
          <TabButton 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')} 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
          />
          <TabButton 
            active={activeTab === 'explain'} 
            onClick={() => setActiveTab('explain')} 
            icon={<BrainCircuit size={20} />} 
            label="Explain Topics" 
          />
          <TabButton 
            active={activeTab === 'syllabus'} 
            onClick={() => setActiveTab('syllabus')} 
            icon={<BookOpen size={20} />} 
            label="Syllabus Guide" 
          />
          <TabButton 
            active={activeTab === 'practice'} 
            onClick={() => setActiveTab('practice')} 
            icon={<FileText size={20} />} 
            label="Practice Papers" 
          />
          <TabButton 
            active={activeTab === 'generate'} 
            onClick={() => setActiveTab('generate')} 
            icon={<Sparkles size={20} />} 
            label="AI Paper Generator" 
          />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto p-6 md:p-10">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && <DashboardView onNavigate={setActiveTab} />}
          {activeTab === 'explain' && <ExplainView />}
          {activeTab === 'syllabus' && <SyllabusView />}
          {activeTab === 'practice' && <PracticeView />}
          {activeTab === 'generate' && <GenerateView />}
        </AnimatePresence>
      </main>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-semibold ${
        active 
          ? 'bg-indigo-50 text-indigo-700' 
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function DashboardView({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-5xl mx-auto space-y-8"
    >
      <header>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome to Sociology Prep</h2>
        <p className="text-slate-600 text-lg">Your comprehensive guide to mastering the AS & A Level Sociology curriculum.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
            <BrainCircuit size={24} />
          </div>
          <h3 className="text-lg font-bold mb-2">Explain Topics</h3>
          <p className="text-slate-600 text-sm mb-4">Get detailed, textbook-style explanations for any syllabus topic.</p>
          <button onClick={() => onNavigate('explain')} className="text-indigo-600 font-semibold text-sm hover:underline">Learn More &rarr;</button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
            <BookOpen size={24} />
          </div>
          <h3 className="text-lg font-bold mb-2">4 Core Papers</h3>
          <p className="text-slate-600 text-sm mb-4">Covering Socialisation, Family, Education, Globalisation, Media, and Religion.</p>
          <button onClick={() => onNavigate('syllabus')} className="text-blue-600 font-semibold text-sm hover:underline">Explore Syllabus &rarr;</button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
            <FileText size={24} />
          </div>
          <h3 className="text-lg font-bold mb-2">Exam Practice</h3>
          <p className="text-slate-600 text-sm mb-4">Real past paper questions with detailed mark schemes and examiner guidance.</p>
          <button onClick={() => onNavigate('practice')} className="text-emerald-600 font-semibold text-sm hover:underline">Start Practicing &rarr;</button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
            <Award size={24} />
          </div>
          <h3 className="text-lg font-bold mb-2">Assessment Objectives</h3>
          <ul className="text-slate-600 text-sm space-y-2">
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-500" /> AO1: Knowledge</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-500" /> AO2: Interpretation</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-500" /> AO3: Evaluation</li>
          </ul>
        </div>
      </div>

      <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 md:w-2/3">
          <h3 className="text-2xl font-bold mb-3">Ready to test your knowledge?</h3>
          <p className="text-indigo-100 mb-6">Jump into our curated practice questions to see how well you understand the key sociological debates.</p>
          <button 
            onClick={() => onNavigate('practice')}
            className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold shadow-sm hover:bg-indigo-50 transition-colors"
          >
            View Practice Papers
          </button>
        </div>
        <Globe className="absolute -right-10 -bottom-10 text-indigo-500 opacity-50 w-64 h-64" />
      </div>
    </motion.div>
  );
}

function ExplainView() {
  const [selectedPaper, setSelectedPaper] = useState<number>(1);
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [selectedSubTopic, setSelectedSubTopic] = useState<string>('');
  const [explanation, setExplanation] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);

  const papers = [1, 2, 3, 4];
  const topicsForPaper = paperTopics[`Paper ${selectedPaper}` as keyof typeof paperTopics] || [];
  const subTopicsForTopic = (paperSubTopics[`Paper ${selectedPaper}`] && selectedTopic) 
    ? ['Introduction', ...(paperSubTopics[`Paper ${selectedPaper}`][selectedTopic] || [])] 
    : [];

  const handleExplain = async () => {
    if (!selectedTopic) return;
    
    setLoading(true);
    setIsStreaming(false);
    setError(null);
    setExplanation('');

    // If no sub-topic is selected, default to 'Introduction' for the query logic
    const currentSubTopic = selectedSubTopic || 'Introduction';
    const topicQuery = currentSubTopic === 'Introduction' ? selectedTopic : `${selectedTopic} - ${currentSubTopic}`;
    const isIntroduction = currentSubTopic === 'Introduction';
    const ragContext = getSociologyRAGContent(`Paper ${selectedPaper}`, selectedTopic, currentSubTopic);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('Gemini API Key is missing. Please configure it in the settings.');
      }

      const ai = new GoogleGenAI({ 
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
      const responseStream = await ai.models.generateContentStream({
        model: "gemini-3.5-flash",
        contents: `You are an outstanding, highly supportive, and engaging Cambridge Sociology textbook author and chief educator. Your mission is to provide an exceptionally comprehensive, detailed, and exhaustive explanation of the topic "${topicQuery}" that is EXACTLY or EXCEEDING 2000 words.

        Keep the language accessible, clear, engaging, and highly student-friendly for AS & A-Level high school students (typically 16-18 years old). Avoid overly dry, postgraduate-level academic jargon or dense corporate prose, but do NOT sacrifice an ounce of depth or analytical quality. When introducing complex sociological terms, explain them immediately in simple, clear language with relatable examples!

        Provide an in-depth, student-friendly but exhaustive masterclass-style guide on the following topic: "${topicQuery}".
        
        ${isIntroduction 
          ? `This is an INTRODUCTION. Provide an expansive, sweeping overview of the main topic "${selectedTopic}", establishing its core concepts, key debates, and its fundamental significance in the Paper ${selectedPaper} curriculum. Introduce the big schools of thought (e.g., Structuralism vs. Action, Positivism vs. Interpretivism) in a way that is clear and easy to grasp while being rich in detail.`
          : `This is a highly specialized SUB-TOPIC: "${currentSubTopic}". Focus strictly and deeply on this area. DO NOT waste paragraphs repeating general, entry-level definitions of the main topic "${selectedTopic}" (e.g., if selectedTopic is Socialisation, don't write generic paragraphs defining what socialisation is). Dive straight into the specific complex mechanics, case studies, specific theorists, and evaluative conflicts, using clear and understandable language.`
        }

        ${ragContext ? `Below is highly detailed context retrieved from both the official Collins and Cambridge University Press (Livesey & Blundell) coursebooks for this sub-topic. You MUST base your explanation heavily on these specific details, theorists, definitions, and evaluation points:
        ${ragContext}
        ` : ""}

        ### STUDENT-FRIENDLY AND STRUCTURAL DIRECTIVES FOR MAXIMUM DEPTH (~2000 WORDS):
        1. **Clear, Accessible & Engaging A-Level Voice**: Keep the language clear, friendly, and structured. Break down complex, abstract ideas into digestible concepts. Use simple analogies where helpful (e.g., how structures in society act like the rules of a game), but remain focused purely on the core textbook materials.
        2. **Exhaustive Explanation of Theories and Studies**: Do not summarize or gloss over crucial sociological theories. Provide grand, paragraph-by-paragraph deep-dives of the essential debates. For each major theorist mentioned, explain their background, how they conducted their study in plain English, what key findings they gathered, and why they matter for A Level.
        3. **Complete Textbook Synthesis**: Explicitly compare and synthesize insights, research focuses, and theoretical emphases from BOTH the Collins Student's Book (Haralambos & Holborn et al.) and the Cambridge University Press Coursebook (Livesey & Blundell).
        4. **Highly Structured & Legible Layout**: Organize the explanation of 2000+ words into these exact distinct educational sections:
           - **### I. Introduction and Key Ideas (AO1)** (Clear definitions of core concepts, placing them in their theoretical context with simple, real-world illustrations. If **Key Statistics & Trend Data** is present in the textbook RAG context below, you MUST seamlessly integrate at least one relevant statistic here to illustrate trends.)
           - **### II. Who Is Who? Key Theorists & Empirical Studies (AO2)** (Vivid and clear breakdowns of the key studies, methodologies, and contributions of specified theorists, explained in plain language. If **Direct Theorist Quotes** is present in the textbook RAG context below, you MUST weave in at least one theorist quote here to add authentic academic voice.)
           - **### III. The Big Debates & Theoretical Perspectives** (Explaining how different sociological perspectives see this issue—e.g., how Marxists, Functionalists, Feminists, Interactionists, and Postmodernists view the topic. If **Core Essay Debates** is present in the textbook RAG context below, you MUST use the provided 'For' and 'Against' arguments to structure the debate in this section, referencing them explicitly.)
           - **### IV. Syllabus Connections, Correlations & Synoptic Links (How It Connects)** (Explain deeply how this specific subtopic is correlated and connected with other topics in the syllabus. For instance, link this subtopic directly to socialisation, social control, identity, research methods, or theoretical debates. If **Synoptic Links** are present in the textbook RAG context below, you MUST weave them into your explanation to show how these concepts interconnect and can be cross-referenced to construct high-scoring synoptic essay arguments!)
           - **### V. Evaluating the Arguments: Strengths and Weaknesses (AO3)** (A highly detailed but easy-to-follow critique of each perspective, pointing out what they do well and what they overlook or get wrong. If **Key Statistics & Trend Data** is present in the textbook RAG context below, you MUST use the statistics here as evidence to critique, support, or challenge these perspectives.)
           - **### VI. Comparison: Collins vs. CUP Textbook Insights** (Direct, simple comparison of how the two primary textbooks cover this topic, highlighting any terms or perspectives unique to either book)
           - **### VII. Student Glossary: Key Terms Made Simple** (Clear, direct, definitions of all key terms as they appear in the textbooks, phrased in an easy-to-understand way).
        5. **Strict Formatting & Student Readability**: Use Markdown formatting. Always use double line breaks (empty lines) between paragraphs to keep the text breathable and easy on the eyes. Use bullet points or numbered lists generously to break down complex arguments. Use **bold** for key concepts and theorist names.
        6. **No Syllabus Meta-talk**: Avoid referencing the syllabus code "9699" or the phrases "Cambridge syllabus", "AQA", etc. explicitly. Focus completely on the rich sociological content itself, but ensure all contents align perfectly with Paper ${selectedPaper} expectations.

        Textbook Context Reference:
        - Paper 1: Socialisation, Identity, and Methods (Mead, Cooley, Goffman, Binet, Positivism vs Interpretivism).
        - Paper 2: The Family (Murdock, Parsons, Zaretsky, Oakley, Willmott & Young, Finch, Silva).
        - Paper 3: Education (Durkheim, Parsons, Bowles & Gintis, Althusser, Willis, Bourdieu, Reay).
        - Paper 4: Globalisation, Media, and Religion (Wallerstein, Castells, Baudrillard, Galtung & Ruge, Weber, Bruce, Heelas & Woodhead).

        Ensure it is incredibly detailed, highly comprehensive, structurally beautiful, and easy for an A-Level student to read, process, and use in their exams. Only output the generated markdown content without any meta-text, introductory conversational preambles, or final comments.`,
        config: {
          maxOutputTokens: 8192
        }
      });

      let gotFirstChunk = false;
      for await (const chunk of responseStream) {
        const text = chunk.text || '';
        if (text) {
          if (!gotFirstChunk) {
            gotFirstChunk = true;
            setLoading(false);
            setIsStreaming(true);
          }
          setExplanation(prev => prev + text);
        }
      }
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Failed to generate explanation. Please try again.');
    } finally {
      setLoading(false);
      setIsStreaming(false);
    }
  };

  const handleContinue = async () => {
    if (!selectedTopic || !explanation) return;
    
    setLoading(true);
    setIsStreaming(false);
    setError(null);

    const currentSubTopic = selectedSubTopic || 'Introduction';
    const topicQuery = currentSubTopic === 'Introduction' ? selectedTopic : `${selectedTopic} - ${currentSubTopic}`;

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('Gemini API Key is missing. Please configure it in the settings.');
      }

      const ai = new GoogleGenAI({ 
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const responseStream = await ai.models.generateContentStream({
        model: "gemini-3.5-flash",
        contents: `You are continuing a highly detailed, textbook-style Cambridge Sociology explanation that was cut off due to character/token limits.
        
        The overall topic is: "${topicQuery}".
        The target was to output an exceptionally comprehensive, detailed, and exhaustive explanation.

        Here is the text that has been written so far (which was cut off):
        ---
        ${explanation}
        ---

        YOUR TASK: Resume the explanation SEAMLESSLY.
        - Start writing EXACTLY where the text was cut off, matching the tone, style, and structure.
        - Do not repeat anything that was already written.
        - Make sure to cover the remaining sections or details specified in the original directives (such as: theories, studies, evaluations, textbook comparisons, or key term glossary) if they were not fully completed.
        - Ensure double line breaks between paragraphs for maximum student readability.
        - Do not include any introductory meta-text (e.g., "Sure, continuing now..."), concluding remarks, or markdown wrappers other than the resumed text itself. Just output the text to be appended.`,
        config: {
          maxOutputTokens: 8192
        }
      });

      let gotFirstChunk = false;
      for await (const chunk of responseStream) {
        const text = chunk.text || '';
        if (text) {
          if (!gotFirstChunk) {
            gotFirstChunk = true;
            setLoading(false);
            setIsStreaming(true);
          }
          setExplanation(prev => prev + text);
        }
      }
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Failed to continue explanation. Please try again.');
    } finally {
      setLoading(false);
      setIsStreaming(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Topic Explainer</h2>
          <p className="text-slate-600">Get detailed textbook-style explanations for any syllabus topic.</p>
        </div>
        <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 text-sm font-bold">
          <BookOpen size={18} />
          <span>Textbook Mode Active</span>
        </div>
      </header>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">1. Select Paper</label>
            <div className="grid grid-cols-2 gap-2">
              {papers.map(p => (
                <button
                  key={p}
                  onClick={() => {
                    setSelectedPaper(p);
                    setSelectedTopic('');
                    setSelectedSubTopic('');
                    setExplanation('');
                  }}
                  className={`py-2 rounded-lg font-bold transition-all text-sm ${
                    selectedPaper === p 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Paper {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">2. Select Main Topic</label>
            <select 
              value={selectedTopic}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedTopic(val);
                setSelectedSubTopic(val ? 'Introduction' : '');
                setExplanation('');
              }}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            >
              <option value="">-- Choose a Topic --</option>
              {topicsForPaper.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">3. Select Sub-Topic</label>
            <select 
              value={selectedSubTopic}
              onChange={(e) => {
                setSelectedSubTopic(e.target.value);
                setExplanation('');
              }}
              disabled={!selectedTopic}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium focus:ring-2 focus:ring-indigo-500 outline-none disabled:opacity-50 transition-all"
            >
              <option value="">-- Choose a Sub-Topic --</option>
              {subTopicsForTopic.map(sub => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleExplain}
          disabled={!selectedTopic || loading || isStreaming}
          className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
        >
          {(loading || isStreaming) ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
          {loading ? 'Consulting Textbooks...' : isStreaming ? 'Streaming Explanation...' : 'Generate Textbook Explanation'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-center gap-3">
          <AlertCircle size={20} />
          <p className="font-medium">{error}</p>
          <button onClick={handleExplain} className="ml-auto text-red-800 hover:underline flex items-center gap-1">
            <RefreshCw size={14} /> Retry
          </button>
        </div>
      )}

      {explanation && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <BookOpen size={16} />
              <span>Collins & Cambridge Coursebook Synthesis</span>
            </div>
            <div className="flex items-center gap-3">
              {isStreaming && (
                <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full font-bold shadow-sm whitespace-nowrap flex items-center gap-1.5 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
                  Writing...
                </span>
              )}
              <span className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full font-bold shadow-sm whitespace-nowrap">
                📚 Comprehensive Academic Synthesis
              </span>
              <span className="bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded-full font-bold shadow-sm whitespace-nowrap">
                ⚡ {explanation.split(/\s+/).filter(Boolean).length} Words Included
              </span>
            </div>
          </div>
          <div className="markdown-body prose prose-slate max-w-none">
            <Markdown remarkPlugins={[remarkGfm]}>{explanation}</Markdown>
          </div>

          {!isStreaming && !loading && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100 mt-6">
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <Sparkles size={14} className="text-indigo-500" />
                <span>Was the explanation cut off? You can seamlessly request the AI to continue writing exactly from where it stopped.</span>
              </div>
              <button
                onClick={handleContinue}
                disabled={loading || isStreaming}
                className="px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm whitespace-nowrap"
              >
                <Sparkles size={16} />
                Continue Writing
              </button>
            </div>
          )}
        </motion.div>
      )}

      {!explanation && !loading && !error && (
        <div className="text-center py-20 bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-3xl">
          <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen size={32} />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">No Topic Selected</h3>
          <p className="text-slate-500">Select a paper and topic above to see a detailed explanation.</p>
        </div>
      )}
    </motion.div>
  );
}

function SyllabusView() {
  const [activeConcept, setActiveConcept] = useState<number | null>(0);
  const [activePaper, setActivePaper] = useState<number>(0);

  const concepts = [
    { 
      id: 0,
      title: "The Individual & Society", 
      subtitle: "Socialisation, Culture & Identity",
      icon: <Users size={24} className="text-blue-500" />,
      color: "bg-blue-50 border-blue-200",
      desc: "This forms the foundational narrative of sociology: how are we shaped by the world around us? It explores the debate between structuralism (society shapes us) and social action (we shape society).",
      keyTerms: ["Primary/Secondary Socialisation", "Norms & Values", "Social Construction", "Agency"],
      theorists: "Mead, Cooley, Goffman, Oakley"
    },
    { 
      id: 1,
      title: "The Structure of Society", 
      subtitle: "Inequality & Opportunity",
      icon: <Scale size={24} className="text-purple-500" />,
      color: "bg-purple-50 border-purple-200",
      desc: "Moving beyond the individual, we examine how society is divided. This concept explores the unequal distribution of wealth, power, and status across class, gender, ethnicity, and age.",
      keyTerms: ["Social Stratification", "Meritocracy", "Patriarchy", "Social Mobility"],
      theorists: "Marx, Weber, Davis & Moore, Walby"
    },
    { 
      id: 2,
      title: "The Dynamics of Power", 
      subtitle: "Power, Control & Resistance",
      icon: <ShieldAlert size={24} className="text-red-500" />,
      color: "bg-red-50 border-red-200",
      desc: "Who holds the power, and how is order maintained? This explores formal and informal social control, ideological state apparatuses, and how individuals or groups resist domination.",
      keyTerms: ["Ideology", "Hegemony", "Social Control", "Deviance"],
      theorists: "Foucault, Gramsci, Althusser, Willis"
    },
    { 
      id: 3,
      title: "The Evolution of Society", 
      subtitle: "Social Change & Development",
      icon: <TrendingUp size={24} className="text-emerald-500" />,
      color: "bg-emerald-50 border-emerald-200",
      desc: "Societies are not static. This concept traces the transition from traditional, pre-industrial societies to modern and post-modern eras, examining the drivers of social change.",
      keyTerms: ["Modernity", "Post-modernity", "Secularisation", "Industrialisation"],
      theorists: "Durkheim, Lyotard, Baudrillard, Parsons"
    },
    { 
      id: 4,
      title: "The Global Context", 
      subtitle: "Globalisation",
      icon: <Globe size={24} className="text-indigo-500" />,
      color: "bg-indigo-50 border-indigo-200",
      desc: "The ultimate macro perspective. How are local societies impacted by global interconnectedness? This covers cultural imperialism, global media, and transnational networks.",
      keyTerms: ["Cultural Homogenisation", "Glocalisation", "Digital Optimism/Pessimism"],
      theorists: "Giddens, McLuhan, Ritzer, Castells"
    }
  ];

  const papers = [
    {
      id: 0,
      title: "Paper 1",
      subtitle: "Socialisation, identity and methods of research",
      level: "AS Level",
      time: "1 hour 30 minutes",
      marks: 60,
      weight: "30% of A Level",
      color: "from-blue-500 to-indigo-600",
      sections: [
        { name: "Section A", marks: 34, desc: "Compulsory short-answer and structured questions (e.g., 2, 4, 8, 10 marks). Tests AO1 (Knowledge) and AO2 (Application)." },
        { name: "Section B", marks: 26, desc: "One essay from a choice of two. Requires deep evaluation (AO3) and synthesis of sociological theories." }
      ]
    },
    {
      id: 1,
      title: "Paper 2",
      subtitle: "The Family",
      level: "AS Level",
      time: "1 hour 30 minutes",
      marks: 60,
      weight: "30% of A Level",
      color: "from-indigo-500 to-purple-600",
      sections: [
        { name: "Section A", marks: 34, desc: "Compulsory short-answer and structured questions. Often includes data response or stimulus material." },
        { name: "Section B", marks: 26, desc: "One essay from a choice of two. Focuses on debates like family diversity or the dark side of the family." }
      ]
    },
    {
      id: 2,
      title: "Paper 3",
      subtitle: "Education",
      level: "A Level",
      time: "1 hour 15 minutes",
      marks: 50,
      weight: "20% of A Level",
      color: "from-emerald-500 to-teal-600",
      sections: [
        { name: "Section A", marks: 24, desc: "Compulsory structured questions (e.g., 2, 4, 8, 10 marks). Tests core knowledge of educational policies and achievement." },
        { name: "Section B", marks: 26, desc: "One essay from a choice of two. High emphasis on evaluating sociological perspectives on education." }
      ]
    },
    {
      id: 3,
      title: "Paper 4",
      subtitle: "Globalisation, Media and Religion",
      level: "A Level",
      time: "1 hour 45 minutes",
      marks: 70,
      weight: "20% of A Level",
      color: "from-orange-500 to-red-600",
      sections: [
        { name: "Section A & B", marks: 70, desc: "Two 35-mark essays chosen from a selection of questions across the three topics. This paper demands the highest level of AO3 (Evaluation) and synoptic thinking." }
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-5xl mx-auto space-y-16 pb-20"
    >
      <header className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Syllabus Guide (9699)</h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          A comprehensive, interactive breakdown of the Cambridge International AS & A Level Sociology curriculum. Understand the narrative, master the structure, and ace the assessment objectives.
        </p>
      </header>

      {/* The Narrative of Sociology (Key Concepts) */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-indigo-600 border-b border-slate-200 pb-4">
          <BrainCircuit size={28} />
          <h3 className="text-2xl font-bold">The Narrative of Sociology</h3>
        </div>
        <p className="text-slate-600 text-lg">
          The syllabus isn't just a list of topics; it's a logical progression of ideas explaining how human societies function.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-3">
            {concepts.map((concept) => (
              <button
                key={concept.id}
                onClick={() => setActiveConcept(concept.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center gap-4 ${
                  activeConcept === concept.id 
                    ? 'bg-indigo-600 text-white shadow-md scale-[1.02]' 
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <div className={`p-2 rounded-lg ${activeConcept === concept.id ? 'bg-white/20' : 'bg-slate-100'}`}>
                  {React.cloneElement(concept.icon as React.ReactElement<any>, { 
                    className: activeConcept === concept.id ? 'text-white' : '' 
                  })}
                </div>
                <div>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${activeConcept === concept.id ? 'text-indigo-200' : 'text-slate-500'}`}>
                    Concept {concept.id + 1}
                  </div>
                  <div className="font-bold">{concept.title}</div>
                </div>
              </button>
            ))}
          </div>
          
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {activeConcept !== null && (
                <motion.div
                  key={activeConcept}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className={`h-full p-8 rounded-2xl border ${concepts[activeConcept].color} flex flex-col justify-center`}
                >
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">{concepts[activeConcept].title}</h4>
                    <h5 className="text-lg font-medium text-slate-600">{concepts[activeConcept].subtitle}</h5>
                  </div>
                  
                  <p className="text-slate-700 text-lg leading-relaxed mb-8">
                    {concepts[activeConcept].desc}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mt-auto">
                    <div className="bg-white/60 p-4 rounded-xl">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Key Terms</div>
                      <div className="flex flex-wrap gap-2">
                        {concepts[activeConcept].keyTerms.map((term, i) => (
                          <span key={i} className="px-2 py-1 bg-white rounded-md text-sm font-medium text-slate-700 shadow-sm border border-slate-100">
                            {term}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/60 p-4 rounded-xl">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Key Theorists</div>
                      <p className="font-medium text-slate-800">{concepts[activeConcept].theorists}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Paper Structure Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-blue-600 border-b border-slate-200 pb-4">
          <Layout size={28} />
          <h3 className="text-2xl font-bold">Comprehensive Paper Breakdown</h3>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {papers.map((paper) => (
            <button
              key={paper.id}
              onClick={() => setActivePaper(paper.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activePaper === paper.id
                  ? `bg-gradient-to-r ${paper.color} text-white shadow-lg scale-105`
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {paper.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePaper}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
          >
            <div className={`bg-gradient-to-r ${papers[activePaper].color} p-8 text-white`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-bold tracking-wider uppercase mb-3">
                    {papers[activePaper].level}
                  </div>
                  <h4 className="text-3xl font-extrabold mb-2">{papers[activePaper].title}: {papers[activePaper].subtitle}</h4>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-black">{papers[activePaper].marks}</div>
                  <div className="text-white/80 font-medium uppercase tracking-wider text-sm mt-1">Total Marks</div>
                </div>
              </div>
              
              <div className="flex gap-6 mt-8">
                <div className="flex items-center gap-2 bg-black/10 px-4 py-2 rounded-lg">
                  <span className="font-medium">{papers[activePaper].time}</span>
                </div>
                <div className="flex items-center gap-2 bg-black/10 px-4 py-2 rounded-lg">
                  <span className="font-medium">{papers[activePaper].weight}</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h5 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText size={20} className="text-slate-400" />
                Paper Structure
              </h5>
              <div className="space-y-6">
                {papers[activePaper].sections.map((section, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="text-3xl font-black text-slate-800">{section.marks}</div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Marks</div>
                    </div>
                    <div>
                      <h6 className="text-xl font-bold text-slate-900 mb-2">{section.name}</h6>
                      <p className="text-slate-600 leading-relaxed">{section.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Assessment Objectives Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-emerald-600 border-b border-slate-200 pb-4">
          <Award size={28} />
          <h3 className="text-2xl font-bold">Assessment Objectives (AOs)</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              id: "AO1", 
              name: "Knowledge & Understanding", 
              desc: "Recall sociological theories, concepts, evidence, and methods.", 
              as: "40%", 
              al: "35%",
              color: "bg-blue-50 border-blue-200 text-blue-700",
              bar: "bg-blue-500"
            },
            { 
              id: "AO2", 
              name: "Interpretation & Application", 
              desc: "Apply sociological material to specific issues and contexts.", 
              as: "30%", 
              al: "30%",
              color: "bg-emerald-50 border-emerald-200 text-emerald-700",
              bar: "bg-emerald-500"
            },
            { 
              id: "AO3", 
              name: "Analysis & Evaluation", 
              desc: "Assess sociological theories, arguments, and evidence.", 
              as: "30%", 
              al: "35%",
              color: "bg-purple-50 border-purple-200 text-purple-700",
              bar: "bg-purple-500"
            }
          ].map((ao) => (
            <div key={ao.id} className={`p-6 rounded-2xl border ${ao.color} flex flex-col h-full`}>
              <div className="text-2xl font-black mb-2">{ao.id}</div>
              <h4 className="font-bold mb-3">{ao.name}</h4>
              <p className="text-sm opacity-80 mb-8 flex-grow">{ao.desc}</p>
              
              <div className="space-y-4 mt-auto">
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1">
                    <span>AS Level</span>
                    <span>{ao.as}</span>
                  </div>
                  <div className="h-2 w-full bg-white/50 rounded-full overflow-hidden">
                    <div className={`h-full ${ao.bar}`} style={{ width: ao.as }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1">
                    <span>A Level</span>
                    <span>{ao.al}</span>
                  </div>
                  <div className="h-2 w-full bg-white/50 rounded-full overflow-hidden">
                    <div className={`h-full ${ao.bar}`} style={{ width: ao.al }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Command Words Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 text-purple-600 border-b border-slate-200 pb-4">
          <Sparkles size={28} />
          <h3 className="text-2xl font-bold">Command Words & Success Criteria</h3>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-6">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-bold text-slate-900">Command Word</th>
                <th className="px-6 py-4 font-bold text-slate-900">What it means</th>
                <th className="px-6 py-4 font-bold text-slate-900">Key Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { word: "Describe", mean: "State the main points of a topic.", focus: "AO1 (Knowledge)" },
                { word: "Explain", mean: "Set out purposes or reasons; make relationships clear.", focus: "AO1 & AO2 (Application)" },
                { word: "Assess", mean: "Make an informed judgement.", focus: "AO3 (Evaluation)" },
                { word: "Evaluate", mean: "Judge or determine the significance/value of something.", focus: "AO3 (Analysis/Evaluation)" },
                { word: "To what extent", mean: "Judge the importance or success of a strategy/view.", focus: "AO3 (Balanced Debate)" }
              ].map((cmd, i) => (
                <tr key={i}>
                  <td className="px-6 py-4 font-bold text-slate-900">{cmd.word}</td>
                  <td className="px-6 py-4 text-slate-600">{cmd.mean}</td>
                  <td className="px-6 py-4 font-medium text-purple-600">{cmd.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
            <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
              <CheckCircle2 size={20} />
              Success Criteria (Level 4/5)
            </h4>
            <ul className="space-y-3 text-sm text-emerald-800">
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>Conceptual Precision:</strong> Using specific terms like 'Habitus', 'Hegemony', or 'Verstehen' accurately.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>Named Theorists:</strong> Moving beyond general views to specific studies (e.g., Bowles & Gintis, not just 'Marxists').</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>Evaluative Balance:</strong> Providing 'On the other hand' points that directly challenge the main argument.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>Contemporary Evidence:</strong> Linking theories to modern examples (e.g., Cyber-bullying, Gig Economy).</span>
              </li>
            </ul>
          </div>
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
              <AlertCircle size={20} />
              Common Pitfalls
            </h4>
            <ul className="space-y-3 text-sm text-amber-800">
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>Common Sense:</strong> Writing from personal opinion rather than sociological evidence.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>List-making:</strong> Describing many points briefly rather than explaining a few in depth.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>One-sidedness:</strong> Failing to evaluate or provide a counter-argument in essay questions.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>Misunderstanding AOs:</strong> Spending too much time on AO1 (Knowledge) in a 26-mark essay.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Revision Strategy Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 text-orange-600 border-b border-slate-200 pb-4">
          <Zap size={28} />
          <h3 className="text-2xl font-bold">Revision Strategy</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { 
              step: "1. Concept Mapping", 
              desc: "Don't just read. Create mind maps linking theorists to specific sub-topics. (e.g., Link Parsons to both 'Socialisation' and 'Family')." 
            },
            { 
              step: "2. PEEL Practice", 
              desc: "Practice writing paragraphs using Point, Evidence, Explanation, Link. This ensures you hit AO1 and AO2 consistently." 
            },
            { 
              step: "3. Evaluative Chains", 
              desc: "For every theory, learn one 'Chain of Evaluation'. (e.g., Functionalism -> Marxist Critique -> Postmodernist Synthesis)." 
            }
          ].map((item, i) => (
            <div key={i} className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
              <h4 className="font-bold text-orange-900 mb-2">{item.step}</h4>
              <p className="text-sm text-orange-800 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

function PracticeView() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'past' | 'curated'>('past');
  const [modelAnswers, setModelAnswers] = useState<Record<string, ModelAnswer>>({});
  const [isGeneratingAnswer, setIsGeneratingAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [selectedPaperTab, setSelectedPaperTab] = useState<'all' | 'paper1' | 'paper2' | 'paper3' | 'paper4'>('all');

  const filteredPapers = pastPapers.filter((paper) => {
    if (selectedPaperTab === 'all') return true;
    if (selectedPaperTab === 'paper1') return paper.title.toLowerCase().startsWith('paper 1');
    if (selectedPaperTab === 'paper2') return paper.title.toLowerCase().startsWith('paper 2');
    if (selectedPaperTab === 'paper3') return paper.title.toLowerCase().startsWith('paper 3');
    if (selectedPaperTab === 'paper4') return paper.title.toLowerCase().startsWith('paper 4');
    return true;
  });

  const filteredCurated = practiceQuestions.filter((q) => {
    if (selectedPaperTab === 'all') return true;
    if (selectedPaperTab === 'paper1') return q.paper === 'Paper 1';
    if (selectedPaperTab === 'paper2') return q.paper === 'Paper 2';
    if (selectedPaperTab === 'paper3') return q.paper === 'Paper 3';
    if (selectedPaperTab === 'paper4') return q.paper === 'Paper 4';
    return true;
  });

  const generateAnswer = async (questionId: string, questionText: string, marks: number, paperTitle: string) => {
    setIsGeneratingAnswer(questionId);
    setError(null);

    const ragContext = searchSociologyRAGByQuestion(paperTitle, questionText);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('Gemini API Key is missing. Please configure it in the settings.');
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `You are a top-tier Sociology Examiner and Subject Expert specializing in the Cambridge International June/Nov AS & A Level Exam (9699).
      Synthesize knowledge from the "Collins Cambridge International AS & A Level Sociology" and "Cambridge University Press Coursebook by Livesey and Blundell" textbooks.
      
      ${ragContext ? `Below is highly detailed context retrieved from both the official Collins and Cambridge University Press (Livesey & Blundell) coursebooks for this question. You MUST ground your answer heavily in these key theorists, definitions, and evaluation points:
      ${ragContext}
      ` : ""}
      
      Generate a highly realistic Model Answer (guaranteed Level 4/5 full marks) for the following question from ${paperTitle}:
      
      Question: "${questionText}" [${marks} marks]
      
      You MUST tailor your answer's length, structure, and approach STRICTLY according to the number of marks, mirroring actual Cambridge candidates' high-scoring scripts. Follow these strict, mark-specific grading rubrics:

      === [2 MARKS / 4 MARKS] Questions (e.g., "Describe two...") ===
      - DO NOT write an introduction or conclusion. Start directly.
      - Identify exactly TWO points separated by double empty lines.
      - Format each as: 
        **Point 1: [Name/Identity of factor]** - [Brief elaboration and a highly specific, concrete example or sociological study to secure development marks].
      - Keep the overall length concise (60-120 words total). Avoid long narrative fluff.

      === [6 MARKS] Questions (e.g., "Explain two limitations...") ===
      - Provide exactly TWO points. Each point is worth 3 marks and must follow this 3-step sequence:
        1. Identify the factor/limitation/reason clearly.
        2. Explain *why* the method/context suffers from this factor (incorporating concepts like observer effect, hawthorne effect, control of variables, etc.).
        3. Explain the *direct consequence/impact* of this limitation on the research quality (e.g., how it reduces validity, compromises reliability, or violates ethical standards).
      - Separated by double line breaks. Keep it concise (120-180 words total).

      === [8 MARKS] Questions (e.g., "Explain two reasons...") ===
      - Provide exactly TWO points (4 marks each) using a strict PEEL (Point, Evidence, Explanation, Link) paragraph model:
        1. POINT: Clearly state the factor or reason.
        2. EVIDENCE: Introduce specific named theorists, sociological research studies, or methodologies (e.g., Bourdieu's habitus, Willis's "the lads", etc.).
        3. EXPLANATION: Deeply explain the exact connection, using professional, dense academic terminology. Don't just list buzzwords; prove *why* and *how* it answers the question.
        4. LINK: Tie the explanation back to the question statement.
      - Separate the two points with a double line break. Approx 200-300 words total.

      === [10 MARKS] Questions (e.g., "Explain this view...") ===
      - Write exactly a 2-paragraph highly structured response (around 300 words total):
        - Paragraph 1: State the first core argument for the view. Define key terms immediately. Ground the argument in specific sociological perspectives (Feminist, Functionalist, Marxist, Postmodernist) and specific named theorists or structural agents. Provide a detailed concrete example to support it.
        - Paragraph 2: State the second core argument for the view. Ground it in another alternative theorist/theory. Explain the sociological mechanism and provide a detailed study/example.

      === [6 MARKS (Counter-Argument, e.g., "Using sociological material, give one argument against...")] ===
      - Write exactly ONE highly developed counter-argument paragraph (approx 100-150 words):
        1. POINT: Clearly identify the opposing argument (e.g., biological determinants, or radical feminist continued patriarchy).
        2. EVIDENCE: Cite and describe relevant sociology/theorists (e.g., Lombroso's crime traits, Walby/Oakley's continued domestic oppression).
        3. APPLICATION: Deeply explain their arguments/evidence.
        4. LINK: Construct an explicit and strong final analytical link that connects this counter-theory back to show *why and how* it directly undermines the original target view.

      === [26 MARKS / 35 MARKS] Essay Questions (e.g., "Evaluate the view...") ===
      - Write a highly academic, comprehensive, and critical essay (700-1000 words). MUST follow this modular paragraph-by-paragraph structure:
        1. **Introduction**: Define terms, identify the key theoretical tension (e.g., Positivism vs Interpretivism, Peers vs Media/Family/Education).
        2. **Supporting Argument 1**: Draft a rich supporting PEEL paragraph. Ground it in specific named theorists/empirical studies and primary key concepts.
        3. **Ongoing Evaluation of Supporting Argument 1**: Immediately follow with a critical evaluation paragraph starting with "However...". Directly challenge argument 1's methodology, validity, or theoretical bias.
        4. **Supporting Argument 2**: Add a second supportive PEEL paragraph covering a different dimension (e.g., alternative study or dynamic).
        5. **Ongoing Evaluation of Supporting Argument 2**: Immediately evaluate it critically.
        6. **Alternative/Counter-Perspective 1 (Opposing Side)**: Construct a powerful paragraph arguing for the alternative perspective or agent (e.g., if peers, argue why Media or Education is actually more key, using theorists like Neil Postman, Bowles & Gintis, Jock Young, etc.).
        7. **Alternative/Counter-Perspective 2 (Opposing Side)**: Introduce secondary alternative perspective/agent with studies.
        8. **Conclusion**: End with a nuanced synoptic synthesis. Avoid repeating what was said; instead, form a final evaluative judgement weighing both sides.

      CRITICAL DIRECTIVES:
      - NEVER mention the syllabus code "9699" or the phrase "Cambridge syllabus" in the text.
      - Use dense, precise sociological terms from the Collins/Livesey Coursebook.
      - Use double line breaks between paragraphs. Use markdown **bold** to highlight key theorist names and terms.
      - Output MUST be a valid JSON object. Escape quotes and newlines accurately inside string properties.
      
      Also provide a brief analysis of why it scores well (AO1/AO2/AO3).`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          maxOutputTokens: 8192,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              content: { type: Type.STRING },
              analysis: { type: Type.STRING },
              wordCount: { type: Type.NUMBER }
            },
            required: ["content", "analysis", "wordCount"]
          }
        }
      });

      const data = safeJsonParse(response.text || '{}');
      if (!data || !data.content) {
        throw new Error("The AI returned an incomplete response. Please try again.");
      }

      setModelAnswers(prev => ({
        ...prev,
        [questionId]: {
          questionId,
          ...data
        }
      }));
    } catch (err) {
      console.error(err);
      setError(`Failed to generate answer for this question.`);
    } finally {
      setIsGeneratingAnswer(null);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-4xl mx-auto space-y-8 pb-20"
    >
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Exam Practice</h2>
          <p className="text-slate-600 text-lg">Master the exam with past papers and curated practice questions.</p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button 
            onClick={() => setViewMode('past')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'past' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Past Papers
          </button>
          <button 
            onClick={() => setViewMode('curated')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'curated' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Curated Questions
          </button>
        </div>
      </header>

      {/* Paper Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        <button
          onClick={() => setSelectedPaperTab('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
            selectedPaperTab === 'all'
              ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          All Papers
        </button>
        <button
          onClick={() => setSelectedPaperTab('paper1')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
            selectedPaperTab === 'paper1'
              ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          Paper 1 (AS)
        </button>
        <button
          onClick={() => setSelectedPaperTab('paper2')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
            selectedPaperTab === 'paper2'
              ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          Paper 2 (AS)
        </button>
        <button
          onClick={() => setSelectedPaperTab('paper3')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
            selectedPaperTab === 'paper3'
              ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          Paper 3 (A2)
        </button>
        <button
          onClick={() => setSelectedPaperTab('paper4')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
            selectedPaperTab === 'paper4'
              ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          Paper 4 (A2)
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl flex items-center gap-3">
          <AlertCircle size={20} />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      <div className="space-y-6">
        {viewMode === 'past' ? (
          filteredPapers.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center text-slate-500 font-medium space-y-2">
              <FileText size={40} className="text-slate-300 mx-auto" />
              <p className="text-lg font-bold text-slate-700">No Past Papers Found</p>
              <p className="text-sm text-slate-500">There are no past papers loaded matching this specific exam paper tab.</p>
            </div>
          ) : (
            filteredPapers.map((paper) => {
            const isExpanded = expandedId === paper.id;
            return (
              <div key={paper.id} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm transition-all duration-200">
                <button 
                  onClick={() => setExpandedId(isExpanded ? null : paper.id)}
                  className="w-full text-left p-8 flex items-start justify-between gap-4 hover:bg-slate-50"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black uppercase tracking-widest bg-indigo-600 text-white px-3 py-1 rounded-lg">{paper.series}</span>
                      <span className="text-xs font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-lg">{paper.paperNumber}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight">{paper.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <RefreshCw size={14} className="text-indigo-400" />
                        {paper.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Award size={14} className="text-emerald-400" />
                        {paper.totalMarks} Marks
                      </div>
                    </div>
                  </div>
                  <div className={`mt-2 p-3 rounded-2xl bg-slate-100 text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-indigo-50 text-indigo-600' : ''}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 border-t border-slate-100 bg-slate-50/30">
                        <div className="space-y-10 mt-8">
                          {paper.sections.map((section, sIdx) => (
                            <div key={sIdx} className="space-y-6">
                              <div className="flex items-center gap-4">
                                <h4 className="text-lg font-black text-slate-900 uppercase tracking-widest">{section.name}</h4>
                                <div className="h-px flex-1 bg-slate-200" />
                              </div>
                              {section.instruction && (
                                <p className="text-sm font-bold text-indigo-600 italic bg-indigo-50 px-4 py-2 rounded-xl inline-block">
                                  {section.instruction}
                                </p>
                              )}
                              <div className="space-y-6">
                                {section.questions.map((q, qIdx) => {
                                  const answer = modelAnswers[`${paper.id}_${q.id}`];
                                  const isGenerating = isGeneratingAnswer === `${paper.id}_${q.id}`;
                                  
                                  return (
                                    <div key={qIdx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                                      <div className="p-6 space-y-4">
                                        <div className="flex justify-between items-start gap-4">
                                          <div className="flex gap-4">
                                            <span className="font-black text-slate-400 text-xl">{q.id}</span>
                                            <div className="space-y-4">
                                              <p className="text-lg text-slate-800 font-medium leading-relaxed">{q.text}</p>
                                              {q.subQuestions && (
                                                <div className="space-y-4 pl-4 border-l-2 border-slate-100">
                                                  {q.subQuestions.map((sub, subIdx) => {
                                                    const subId = `${paper.id}_${q.id}_${subIdx}`;
                                                    const subAnswer = modelAnswers[subId];
                                                    const isSubGenerating = isGeneratingAnswer === subId;

                                                    return (
                                                      <div key={subIdx} className="space-y-4">
                                                        <div className="flex justify-between items-start gap-4">
                                                          <div className="flex gap-3">
                                                            <span className="font-bold text-slate-400">({String.fromCharCode(97 + subIdx)})</span>
                                                            <p className="text-slate-700 leading-relaxed">{sub.text}</p>
                                                          </div>
                                                          <span className="text-sm font-bold text-slate-400 whitespace-nowrap">[{sub.marks}]</span>
                                                        </div>
                                                        
                                                        {subAnswer ? (
                                                          <div className="bg-blue-50 rounded-xl p-4 space-y-4">
                                                            <div className="markdown-body prose prose-sm max-w-none">
                                                              <Markdown remarkPlugins={[remarkGfm]}>{subAnswer.content}</Markdown>
                                                            </div>
                                                          </div>
                                                        ) : (
                                                          <button 
                                                            onClick={() => generateAnswer(subId, q.text ? `${q.text} ${sub.text}` : sub.text, sub.marks, paper.title)}
                                                            disabled={!!isGeneratingAnswer}
                                                            className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5 disabled:opacity-50"
                                                          >
                                                            {isSubGenerating ? <Loader2 className="animate-spin" size={12} /> : <Sparkles size={12} />}
                                                            {isSubGenerating ? 'Generating...' : 'Generate Model Answer'}
                                                          </button>
                                                        )}
                                                      </div>
                                                    );
                                                  })}
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                          {!q.subQuestions && (
                                            <div className="flex flex-col items-end gap-2">
                                              <span className="text-sm font-bold text-slate-400 whitespace-nowrap">[{q.marks}]</span>
                                              {!answer && (
                                                <button 
                                                  onClick={() => generateAnswer(`${paper.id}_${q.id}`, q.text, q.marks, paper.title)}
                                                  disabled={!!isGeneratingAnswer}
                                                  className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-indigo-700 transition-all disabled:opacity-50"
                                                >
                                                  {isGenerating ? '...' : 'Model Answer'}
                                                </button>
                                              )}
                                            </div>
                                          )}
                                        </div>

                                        {answer && (
                                          <div className="mt-4 bg-blue-50 rounded-xl p-6 space-y-6">
                                            <div className="flex justify-between items-center">
                                              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Model Answer</span>
                                              <span className="text-[10px] font-bold text-blue-400">{answer.wordCount} Words</span>
                                            </div>
                                            <div className="markdown-body prose prose-slate max-w-none">
                                              <Markdown remarkPlugins={[remarkGfm]}>{answer.content}</Markdown>
                                            </div>
                                            <div className="bg-slate-900 rounded-xl p-4 text-white text-xs">
                                              <p className="font-bold text-indigo-400 mb-2 uppercase tracking-wider">Examiner Analysis</p>
                                              <p className="opacity-80 leading-relaxed">{answer.analysis}</p>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-10 p-6 bg-slate-900 rounded-3xl text-white flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                              <FileText size={24} className="text-indigo-400" />
                            </div>
                            <div>
                              <h5 className="font-bold">Official Mark Scheme</h5>
                              <p className="text-slate-400 text-sm">Model answers are generated using AI based on the official curriculum.</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => setShowGuidelines(true)}
                            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-xl font-bold transition-colors"
                          >
                            View Guidelines
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
          )
        ) : (
          filteredCurated.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center text-slate-500 font-medium space-y-2">
              <FileText size={40} className="text-slate-300 mx-auto" />
              <p className="text-lg font-bold text-slate-700">No Curated Questions Found</p>
              <p className="text-sm text-slate-500">There are no curated practice questions matching this specific exam paper tab.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredCurated.map((q) => {
                const answer = modelAnswers[`curated_${q.id}`];
                const isGenerating = isGeneratingAnswer === `curated_${q.id}`;

                return (
                  <div key={q.id} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">{q.paper}</span>
                        <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded">{q.topic}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 leading-relaxed">{q.question}</h3>
                    </div>
                    {!answer && (
                      <button 
                        onClick={() => generateAnswer(`curated_${q.id}`, q.question, 26, q.paper)}
                        disabled={!!isGeneratingAnswer}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all shadow-sm flex items-center gap-2 disabled:opacity-50"
                      >
                        {isGenerating ? <Loader2 className="animate-spin" size={14} /> : <Sparkles size={14} />}
                        {isGenerating ? 'Generating...' : 'Model Answer'}
                      </button>
                    )}
                  </div>

                  {answer ? (
                    <div className="bg-blue-50 rounded-2xl p-6 space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Model Answer</span>
                        <span className="text-[10px] font-bold text-blue-400">{answer.wordCount} Words</span>
                      </div>
                      <div className="markdown-body prose prose-slate max-w-none">
                        <Markdown remarkPlugins={[remarkGfm]}>{answer.content}</Markdown>
                      </div>
                      <div className="bg-slate-900 rounded-xl p-4 text-white text-xs">
                        <p className="font-bold text-indigo-400 mb-2 uppercase tracking-wider">Examiner Analysis</p>
                        <p className="opacity-80 leading-relaxed">{answer.analysis}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Indicative Content</p>
                        <ul className="space-y-2">
                          {q.markScheme.map((point, idx) => (
                            <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                        <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">Examiner Guidance</p>
                        <p className="text-xs text-emerald-800 leading-relaxed">{q.guidance}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          )
        )}
      </div>

      {/* Exam Guidelines Modal */}
      <AnimatePresence>
        {showGuidelines && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGuidelines(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            {/* Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 z-10 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Cambridge 9699 Grading Guidelines</h3>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">How to Secure Level 4/5 Full Marks</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowGuidelines(false)}
                  className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-8 select-none text-slate-750">
                {/* Assessment Objective Overview */}
                <section className="space-y-4">
                  <h4 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-3 bg-indigo-600 rounded"></span>
                    Assessment Objectives Weighting
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
                      <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">AO1 (Knowledge)</span>
                      <p className="text-xs text-slate-700 font-semibold">Define terms with precision and cite correct textbook theories/concepts.</p>
                    </div>
                    <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100">
                      <span className="text-xs font-black text-emerald-600 uppercase tracking-widest block mb-1">AO2 (Interpretation)</span>
                      <p className="text-xs text-slate-700 font-semibold">Apply relevant sociological materials directly to focus issues and contexts.</p>
                    </div>
                    <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100">
                      <span className="text-xs font-black text-purple-600 uppercase tracking-widest block mb-1">AO3 (Evaluation)</span>
                      <p className="text-xs text-slate-700 font-semibold">Crucially critique theoretical biases, methodologies, or temporal weaknesses.</p>
                    </div>
                  </div>
                </section>

                {/* Mark-by-Mark Structural Breakdown */}
                <section className="space-y-4">
                  <h4 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-3 bg-indigo-600 rounded"></span>
                    Structuring Answers by Mark Count
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-black text-slate-800 text-sm">2 & 4 Mark Questions</span>
                        <span className="text-[10px] font-bold text-slate-400">"Describe..."</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Start directly with no introductions. Identify exactly <strong>two points</strong>. Each point must state the factor followed by a precise sociological definition or study to secure the development mark. (Total: 60-120 words)
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-black text-slate-800 text-sm">6 Mark Questions</span>
                        <span className="text-[10px] font-bold text-slate-400">"Explain two limitations of..."</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Provide exactly <strong>two points</strong>. Follow a 3-step sequence per point: (1) Identify the factor, (2) Explain why the research context suffers from this factor, and (3) Explain the direct consequence on validity or reliability. (Total: 120-180 words)
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-black text-slate-800 text-sm">8 & 10 Mark Questions</span>
                        <span className="text-[10px] font-bold text-slate-400">"Explain two reasons..."</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Use the strict <strong>PEEL method</strong> (Point, Evidence/Theorist, Explanation, Link back to the question) in robust, well-defined paragraphs. Ground the analysis in specified named theorists from the Collins and CUP textbooks. (Total: 200-300 words)
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-black text-slate-800 text-sm">26 & 35 Mark Essays</span>
                        <span className="text-[10px] font-bold text-slate-400">"Evaluate the view..."</span>
                      </div>
                      <div className="text-xs text-slate-600 leading-relaxed space-y-1">
                        <p>Must be a highly critical, multi-perspective essay (700-1000 words) using a modular structure:</p>
                        <ul className="list-disc pl-5 space-y-0.5">
                          <li><strong>Introduction:</strong> Define terms and state the central core debate.</li>
                          <li><strong>Pro-arguments:</strong> Two robust PEEL paragraphs promoting the target view, each followed immediately by a critique ("However...").</li>
                          <li><strong>Counter-arguments:</strong> Two analytical paragraphs introducing the alternative perspective or alternative agents of control.</li>
                          <li><strong>Nuanced Conclusion:</strong> SYNOPTIC synthesis that weighs the strengths and weaknesses to deliver a clear final judgement.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Pitfalls to Avoid */}
                <section className="p-5 bg-amber-50 rounded-2xl border border-amber-100 space-y-2">
                  <h4 className="font-bold text-amber-900 text-sm flex items-center gap-2">
                    <AlertCircle size={18} />
                    Core Examiner Pitfalls
                  </h4>
                  <ul className="text-xs text-amber-805 space-y-1.5 list-disc pl-5 leading-relaxed">
                    <li><strong>Common Sense vs Sociological Craft:</strong> Never write purely personal opinions or anecdotal observations. Base arguments strictly on named theorists and empirically verified concepts.</li>
                    <li><strong>List-Making:</strong> Avoid describing many shallow points. It is always better to evaluate 2-3 sociological arguments with extensive academic depth.</li>
                    <li><strong>Missing the AO3 Evaluation:</strong> On top essay questions, you cannot score in the highest bracket without providing a continuous, balanced counter-critique. Always challenge your research views.</li>
                  </ul>
                </section>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-100 flex justify-end bg-slate-50 sticky bottom-0 z-10">
                <button 
                  onClick={() => setShowGuidelines(false)}
                  className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-md"
                >
                  I Understand the Rubric
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface GeneratedQuestion {
  id: string;
  text: string;
  marks: number;
  subQuestions?: { text: string; marks: number }[];
}

interface ModelAnswer {
  questionId: string;
  content: string;
  analysis: string;
  wordCount: number;
}

interface GeneratedPaper {
  title: string;
  duration: string;
  totalMarks: number;
  series: string;
  paperCode: string;
  sections: {
    name: string;
    instruction: string;
    questions: GeneratedQuestion[];
  }[];
  markingScheme: {
    questionId: string;
    indicativeContent: string[];
    guidance: string;
  }[];
}

// --- Printable Component for PDF Export ---
const PrintablePaper = React.forwardRef<HTMLDivElement, { result: GeneratedPaper }>(({ result }, ref) => {
  return (
    <div className="absolute top-0 left-[-9999px] z-[-50] w-[210mm]">
      <div ref={ref} className="p-16 bg-white text-black font-serif" style={{ width: '210mm', minHeight: '297mm', margin: '0 auto' }}>
        {/* Official Cambridge Look Header */}
        <div className="flex justify-between items-start border-b-2 border-black pb-6 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 border-2 border-black flex items-center justify-center">
              <div className="text-[10px] font-bold text-center leading-tight">
                CAMBRIDGE<br/>ASSESSMENT
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Cambridge Assessment</h1>
              <h2 className="text-xl font-bold tracking-tight">International Education</h2>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Cambridge International AS & A Level</h1>
        </div>

        <div className="h-px bg-black w-full mb-6" />

        <div className="grid grid-cols-2 gap-y-3 mb-12 text-xl font-bold">
          <div className="uppercase">SOCIOLOGY</div>
          <div className="text-right">{result.paperCode || '9699/11'}</div>
          <div>{result.title}</div>
          <div className="text-right">{result.series || 'May/June 2024'}</div>
          <div className="col-span-2 text-right">{result.duration}</div>
        </div>

        <div className="h-px bg-black w-full mb-8" />

        <div className="mb-10">
          <p className="mb-4">You must answer on the enclosed answer booklet.</p>
          <p className="mb-4">You will need: Answer booklet (enclosed)</p>
        </div>

        <div className="h-px bg-black w-full mb-8" />

        <div className="mb-10">
          <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">INSTRUCTIONS</h3>
          <ul className="space-y-3 text-base">
            <li className="flex gap-4">
              <span className="font-bold">•</span>
              <span>Answer <b>four</b> questions in total:</span>
            </li>
            <li className="flex gap-4 ml-8">
              <span>Section A: answer <b>all</b> questions.</span>
            </li>
            <li className="flex gap-4 ml-8">
              <span>Section B: answer <b>either</b> Question 4 <b>or</b> Question 5.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold">•</span>
              <span>Follow the instructions on the front cover of the answer booklet. If you need additional answer paper, ask the invigilator for a continuation booklet.</span>
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">INFORMATION</h3>
          <ul className="space-y-3 text-base">
            <li className="flex gap-4">
              <span className="font-bold">•</span>
              <span>The total mark for this paper is {result.totalMarks}.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold">•</span>
              <span>The number of marks for each question or part question is shown in brackets [ ].</span>
            </li>
          </ul>
        </div>

        <div className="h-px bg-black w-full mb-12" />

        {/* Questions Section */}
        {result.sections.map((section, sIdx) => (
          <div key={sIdx} className="mb-16 break-inside-avoid">
            <h2 className="text-center text-2xl font-bold mb-6 uppercase tracking-widest">{section.name}</h2>
            <p className="text-center mb-10 text-lg">Answer <b>all</b> questions in this section.</p>
            
            <div className="space-y-12">
              {section.questions.map((q, qIdx) => (
                <div key={qIdx} className="flex gap-10 break-inside-avoid text-lg">
                  <span className="font-bold w-10 text-xl">{q.id}</span>
                  <div className="flex-1">
                    <p className="mb-4 leading-relaxed">{q.text}</p>
                    <p className="text-right font-bold text-xl">[{q.marks}]</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="mt-auto pt-10 flex justify-between text-sm font-bold border-t border-black">
          <div>© SocioPrep 2026</div>
          <div>{result.paperCode || '9699/11'}</div>
        </div>
      </div>
    </div>
  );
});

function GenerateView() {
  const [selectedPaper, setSelectedPaper] = useState<string>("Paper 1");
  const [generationMode, setGenerationMode] = useState<'single' | 'full'>('single');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingAnswer, setIsGeneratingAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GeneratedPaper | null>(null);
  const [modelAnswers, setModelAnswers] = useState<Record<string, ModelAnswer>>({});

  const componentRef = useRef<HTMLDivElement>(null);
  
  const handlePrint = async () => {
    if (!componentRef.current) return;
    
    try {
      const element = componentRef.current;
      
      // Temporarily bring it into view for html2canvas to capture it properly
      // html2canvas sometimes struggles with elements completely off-screen
      const parent = element.parentElement;
      if (parent) {
        parent.style.position = 'absolute';
        parent.style.left = '0';
        parent.style.top = '0';
        parent.style.zIndex = '-50';
        parent.style.opacity = '1';
      }

      const opt = {
        margin:       0,
        filename:     `Sociology_${selectedPaper}_Exam.pdf`,
        image:        { type: 'jpeg' as const, quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false, windowWidth: 1024 },
        jsPDF:        { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const }
      };

      await html2pdf().set(opt).from(element).save();

      // Restore original styles
      if (parent) {
        parent.style.position = 'absolute';
        parent.style.left = '-9999px';
        parent.style.top = '0';
        parent.style.zIndex = '-50';
      }
    } catch (err) {
      console.error("PDF Generation Error:", err);
      setError("Failed to generate PDF. Please try again.");
    }
  };

  const generatePaper = async () => {
    setIsGenerating(true);
    setError(null);
    setResult(null);
    setModelAnswers({});

    try {
      const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
      if (!apiKey) {
        throw new Error('Gemini API Key is missing. Please configure it in the settings.');
      }

      const ai = new GoogleGenAI({ apiKey });
      const randomSeed = Math.floor(Math.random() * 1000000);
      
      const paperTopicGuidance = {
        "Paper 1": "Socialisation, Identity, Methods, and Theory (Mead, Cooley, Goffman, Positivism vs Interpretivism)",
        "Paper 2": "The Family (Murdock, Parsons, Zaretsky, Oakley, Family Diversity, Childhood, Demography)",
        "Paper 3": "Education (Durkheim, Parsons, Bowles & Gintis, Althusser, Achievement, Policy, Hidden Curriculum)",
        "Paper 4": "Globalisation, Media, and Religion (Wallerstein, Baudrillard, Galtung & Ruge, Weber, Secularisation)"
      };

      const prompt = generationMode === 'full' 
        ? `Generate a UNIQUE, ORIGINAL, and highly realistic A Level Sociology ${selectedPaper} exam paper. 
           Random Seed: ${randomSeed}. Ensure questions are different from previous generations.
           
           TOPIC GUIDANCE: This paper MUST focus ONLY on: ${paperTopicGuidance[selectedPaper as keyof typeof paperTopicGuidance]}.
           DO NOT include topics from other papers (e.g., if Paper 1 is selected, do not include Education or Family).
           
           CRITICAL REQUIREMENTS:
           - NEVER repeat the same question or highly similar questions within the paper.
           - Ensure questions cover a WIDE VARIETY of sub-topics from the topic guidance above. Do not focus on just one sub-topic.
           
           Provide:
           1. The full paper structure (Title, Duration, Total Marks, Series e.g. "May/June 2024", Paper Code e.g. "9699/11").
           2. A detailed marking scheme for ALL questions including indicative content and examiner guidance.
           
           CRITICAL: Ensure the output is a valid JSON object. Escape all double quotes and newlines within string values correctly.`
        : `Generate a UNIQUE and original 26-mark essay question for A Level Sociology ${selectedPaper}.
           Random Seed: ${randomSeed}.
           
           TOPIC GUIDANCE: This question MUST focus ONLY on: ${paperTopicGuidance[selectedPaper as keyof typeof paperTopicGuidance]}.
           DO NOT include topics from other papers.
           
           Provide:
           1. The question (Title, Duration, Total Marks, Series e.g. "May/June 2024", Paper Code e.g. "9699/11").
           2. A detailed marking scheme including indicative content and examiner guidance.
           
           CRITICAL: Ensure the output is a valid JSON object. Escape all double quotes and newlines within string values correctly.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          maxOutputTokens: 8192,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              duration: { type: Type.STRING },
              totalMarks: { type: Type.NUMBER },
              series: { type: Type.STRING },
              paperCode: { type: Type.STRING },
              sections: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    instruction: { type: Type.STRING },
                    questions: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          text: { type: Type.STRING },
                          marks: { type: Type.NUMBER }
                        },
                        required: ["id", "text", "marks"]
                      }
                    }
                  },
                  required: ["name", "instruction", "questions"]
                }
              },
              markingScheme: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    questionId: { type: Type.STRING },
                    indicativeContent: { type: Type.ARRAY, items: { type: Type.STRING } },
                    guidance: { type: Type.STRING }
                  },
                  required: ["questionId", "indicativeContent", "guidance"]
                }
              }
            },
            required: ["title", "duration", "totalMarks", "sections", "markingScheme"]
          }
        }
      });

      const data = safeJsonParse(response.text || '{}');
      if (!data || !data.sections || !Array.isArray(data.sections)) {
        throw new Error("The AI returned an invalid paper format. Please try again.");
      }
      setResult(data);
    } catch (err) {
      console.error("Generate Paper Error:", err);
      if (err instanceof Error) {
        setError(`Failed to generate paper: ${err.message}`);
      } else {
        setError("Failed to generate paper. Please try again.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const generateAnswer = async (questionId: string, questionText: string, marks: number) => {
    setIsGeneratingAnswer(questionId);
    setError(null);

    const ragContext = searchSociologyRAGByQuestion(`Paper ${selectedPaper}`, questionText);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('Gemini API Key is missing. Please configure it in the settings.');
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `You are a top-tier Sociology Examiner and Subject Expert specializing in the Cambridge International June/Nov AS & A Level Exam (9699).
      Synthesize knowledge from the "Collins Cambridge International AS & A Level Sociology" and "Cambridge University Press Coursebook by Livesey and Blundell" textbooks.
      
      ${ragContext ? `Below is highly detailed context retrieved from both the official Collins and Cambridge University Press (Livesey & Blundell) coursebooks for this question. You MUST ground your answer heavily in these key theorists, definitions, and evaluation points:
      ${ragContext}
      ` : ""}
      
      Generate a highly realistic Model Answer (guaranteed Level 4/5 full marks) for the following question from Paper ${selectedPaper}:
      
      Question ${questionId} [${marks} marks]: "${questionText}"
      
      You MUST tailor your answer's length, structure, and approach STRICTLY according to the number of marks, mirroring actual Cambridge candidates' high-scoring scripts. Follow these strict, mark-specific grading rubrics:

      === [2 MARKS / 4 MARKS] Questions (e.g., "Describe two...") ===
      - DO NOT write an introduction or conclusion. Start directly.
      - Identify exactly TWO points separated by double empty lines.
      - Format each as: 
        **Point 1: [Name/Identity of factor]** - [Brief elaboration and a highly specific, concrete example or sociological study to secure development marks].
      - Keep the overall length concise (60-120 words total). Avoid long narrative fluff.

      === [6 MARKS] Questions (e.g., "Explain two limitations...") ===
      - Provide exactly TWO points. Each point is worth 3 marks and must follow this 3-step sequence:
        1. Identify the factor/limitation/reason clearly.
        2. Explain *why* the method/context suffers from this factor (incorporating concepts like observer effect, hawthorne effect, control of variables, etc.).
        3. Explain the *direct consequence/impact* of this limitation on the research quality (e.g., how it reduces validity, compromises reliability, or violates ethical standards).
      - Separated by double line breaks. Keep it concise (120-180 words total).

      === [8 MARKS] Questions (e.g., "Explain two reasons...") ===
      - Provide exactly TWO points (4 marks each) using a strict PEEL (Point, Evidence, Explanation, Link) paragraph model:
        1. POINT: Clearly state the factor or reason.
        2. EVIDENCE: Introduce specific named theorists, sociological research studies, or methodologies (e.g., Bourdieu's habitus, Willis's "the lads", etc.).
        3. EXPLANATION: Deeply explain the exact connection, using professional, dense academic terminology. Don't just list buzzwords; prove *why* and *how* it answers the question.
        4. LINK: Tie the explanation back to the question statement.
      - Separate the two points with a double line break. Approx 200-300 words total.

      === [10 MARKS] Questions (e.g., "Explain this view...") ===
      - Write exactly a 2-paragraph highly structured response (around 300 words total):
        - Paragraph 1: State the first core argument for the view. Define key terms immediately. Ground the argument in specific sociological perspectives (Feminist, Functionalist, Marxist, Postmodernist) and specific named theorists or structural agents. Provide a detailed concrete example to support it.
        - Paragraph 2: State the second core argument for the view. Ground it in another alternative theorist/theory. Explain the sociological mechanism and provide a detailed study/example.

      === [6 MARKS (Counter-Argument, e.g., "Using sociological material, give one argument against...")] ===
      - Write exactly ONE highly developed counter-argument paragraph (approx 100-150 words):
        1. POINT: Clearly identify the opposing argument (e.g., biological determinants, or radical feminist continued patriarchy).
        2. EVIDENCE: Cite and describe relevant sociology/theorists (e.g., Lombroso's crime traits, Walby/Oakley's continued domestic oppression).
        3. APPLICATION: Deeply explain their arguments/evidence.
        4. LINK: Construct an explicit and strong final analytical link that connects this counter-theory back to show *why and how* it directly undermines the original target view.

      === [26 MARKS / 35 MARKS] Essay Questions (e.g., "Evaluate the view...") ===
      - Write a highly academic, comprehensive, and critical essay (700-1000 words). MUST follow this modular paragraph-by-paragraph structure:
        1. **Introduction**: Define terms, identify the key theoretical tension (e.g., Positivism vs Interpretivism, Peers vs Media/Family/Education).
        2. **Supporting Argument 1**: Draft a rich supporting PEEL paragraph. Ground it in specific named theorists/empirical studies and primary key concepts.
        3. **Ongoing Evaluation of Supporting Argument 1**: Immediately follow with a critical evaluation paragraph starting with "However...". Directly challenge argument 1's methodology, validity, or theoretical bias.
        4. **Supporting Argument 2**: Add a second supportive PEEL paragraph covering a different dimension (e.g., alternative study or dynamic).
        5. **Ongoing Evaluation of Supporting Argument 2**: Immediately evaluate it critically.
        6. **Alternative/Counter-Perspective 1 (Opposing Side)**: Construct a powerful paragraph arguing for the alternative perspective or agent (e.g., if peers, argue why Media or Education is actually more key, using theorists like Neil Postman, Bowles & Gintis, Jock Young, etc.).
        7. **Alternative/Counter-Perspective 2 (Opposing Side)**: Introduce secondary alternative perspective/agent with studies.
        8. **Conclusion**: End with a nuanced synoptic synthesis. Avoid repeating what was said; instead, form a final evaluative judgement weighing both sides.

      CRITICAL DIRECTIVES:
      - NEVER mention the syllabus code "9699" or the phrase "Cambridge syllabus" in the text.
      - Use dense, precise sociological terms from the Collins/Livesey Coursebook.
      - Use double line breaks between paragraphs. Use markdown **bold** to highlight key theorist names and terms.
      - Output MUST be a valid JSON object. Escape quotes and newlines accurately inside string properties.
      
      Also provide a brief analysis of why it scores well (AO1/AO2/AO3).`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          maxOutputTokens: 8192,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              content: { type: Type.STRING },
              analysis: { type: Type.STRING },
              wordCount: { type: Type.NUMBER }
            },
            required: ["content", "analysis", "wordCount"]
          }
        }
      });

      const data = safeJsonParse(response.text || '{}');
      if (!data || !data.content) {
        throw new Error("The AI returned an incomplete response. Please try again.");
      }

      setModelAnswers(prev => ({
        ...prev,
        [questionId]: {
          questionId,
          ...data
        }
      }));
    } catch (err) {
      console.error(err);
      setError(`Failed to generate answer for Question ${questionId}.`);
    } finally {
      setIsGeneratingAnswer(null);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-5xl mx-auto space-y-8 pb-20"
    >
      <header>
        <div className="flex items-center gap-3 text-purple-600 mb-2">
          <Sparkles size={24} />
          <h2 className="text-3xl font-bold text-slate-900">AI Paper Generator</h2>
        </div>
        <p className="text-slate-600 text-lg">Generate authentic Cambridge-style papers, marking schemes, and model answers.</p>
      </header>

      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Select Paper</label>
            <select 
              value={selectedPaper}
              onChange={(e) => setSelectedPaper(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
            >
              <option value="Paper 1">Paper 1: Socialisation & Methods</option>
              <option value="Paper 2">Paper 2: Family</option>
              <option value="Paper 3">Paper 3: Education</option>
              <option value="Paper 4">Paper 4: Globalisation & Media</option>
            </select>
          </div>
          
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Generation Mode</label>
            <div className="flex p-1 bg-slate-100 rounded-xl">
              <button 
                onClick={() => setGenerationMode('single')}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${generationMode === 'single' ? 'bg-white text-purple-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Single Essay Question
              </button>
              <button 
                onClick={() => setGenerationMode('full')}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${generationMode === 'full' ? 'bg-white text-purple-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Full Exam Paper
              </button>
            </div>
          </div>
        </div>

        <button 
          onClick={generatePaper}
          disabled={isGenerating}
          className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
        >
          {isGenerating ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Generating {generationMode === 'full' ? 'Full Paper' : 'Question'}...
            </>
          ) : (
            <>
              <RefreshCw size={20} />
              Generate {generationMode === 'full' ? 'Full Paper' : 'New Question'}
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-700 p-4 rounded-2xl flex items-center gap-3">
          <AlertCircle size={20} />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {result && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          {/* Question Paper Section */}
          <section className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg">
            <div className="p-8 bg-slate-900 text-white">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{result.title}</h3>
                  <p className="text-slate-400 font-mono text-sm uppercase tracking-widest">Cambridge International AS & A Level</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <div className="text-right">
                    <p className="text-xl font-bold">{result.duration}</p>
                    <p className="text-slate-400 text-sm">Total Marks: {result.totalMarks}</p>
                  </div>
                  <button 
                    onClick={() => handlePrint()}
                    className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-lg"
                  >
                    <Printer size={16} /> Export PDF
                  </button>
                </div>
              </div>
              <div className="h-px bg-slate-700 w-full mb-6" />
              <p className="text-sm text-slate-300 italic">Instructions: Answer all questions in Section A. Answer one question in Section B.</p>
            </div>

            <div className="p-8 space-y-10">
              {/* Hidden Printable Component */}
              <PrintablePaper ref={componentRef} result={result} />
              {result.sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <h4 className="text-lg font-black uppercase tracking-tighter text-slate-900">{section.name}</h4>
                    <div className="h-px bg-slate-200 flex-1" />
                  </div>
                  <p className="text-sm font-semibold text-slate-500 italic">{section.instruction}</p>
                  <div className="space-y-8">
                    {section.questions.map((q, qIdx) => (
                      <div key={qIdx} className="flex gap-6">
                        <span className="font-bold text-slate-900 w-6">{q.id}</span>
                        <div className="flex-1 space-y-2">
                          <p className="text-slate-800 leading-relaxed">{q.text}</p>
                          <p className="text-right font-bold text-slate-400 text-sm">[{q.marks}]</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Marking Scheme Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Marking Scheme (Indicative Content)</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {result.markingScheme.map((scheme, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-sm">Question {scheme.questionId}</span>
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {scheme.indicativeContent.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                    <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">Examiner Guidance</p>
                    <p className="text-xs text-emerald-900 leading-relaxed">{scheme.guidance}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Model Answers Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Model Answers</h3>
            </div>

            <div className="space-y-8">
              {result.sections.flatMap(s => s.questions).map((q, idx) => {
                const answer = modelAnswers[q.id];
                const isGenerating = isGeneratingAnswer === q.id;

                return (
                  <div key={idx} className={`bg-white border-2 ${answer ? 'border-blue-100' : 'border-slate-100 border-dashed'} rounded-3xl overflow-hidden shadow-sm transition-all`}>
                    <div className={`p-6 ${answer ? 'bg-blue-50' : 'bg-slate-50'} border-b flex justify-between items-center`}>
                      <div className="flex items-center gap-4">
                        <h4 className="font-bold text-slate-900">Question {q.id}</h4>
                        {answer && (
                          <span className="bg-blue-200 text-blue-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                            {answer.wordCount} Words
                          </span>
                        )}
                      </div>
                      {!answer && !isGenerating && (
                        <button 
                          onClick={() => generateAnswer(q.id, q.text, q.marks)}
                          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-700 transition-all shadow-sm"
                        >
                          <Sparkles size={14} /> Generate Model Answer
                        </button>
                      )}
                      {isGenerating && (
                        <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold">
                          <Loader2 className="animate-spin" size={14} /> Consulting Textbooks...
                        </div>
                      )}
                    </div>

                    {answer && (
                      <div className="p-8 space-y-8">
                        <div className="markdown-body prose prose-slate max-w-none">
                          <div className="font-serif text-lg">
                            <Markdown remarkPlugins={[remarkGfm]}>{answer.content}</Markdown>
                          </div>
                        </div>
                        
                        <div className="bg-slate-900 rounded-2xl p-6 text-white">
                          <h5 className="text-sm font-bold uppercase tracking-widest mb-3 text-blue-400 flex items-center gap-2">
                            <BrainCircuit size={16} /> Examiner Analysis
                          </h5>
                          <p className="text-slate-300 leading-relaxed italic">{answer.analysis}</p>
                        </div>
                      </div>
                    )}

                    {!answer && !isGenerating && (
                      <div className="p-12 text-center">
                        <p className="text-slate-400 text-sm italic">Click the button above to generate a Level 4/5 model answer for this question.</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </motion.div>
      )}
    </motion.div>
  );
}
