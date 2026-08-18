import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  BookOpen, 
  FlaskConical, 
  Cpu, 
  Scale, 
  Link2, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles,
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';

interface PEELClarityGuideProps {
  defaultOpen?: boolean;
  className?: string;
}

export default function PEELClarityGuide({ defaultOpen = false, className = '' }: PEELClarityGuideProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [activeTab, setActiveTab] = useState<'matrix' | 'worked-example' | 'common-pitfalls'>('matrix');

  return (
    <div className={`bg-gradient-to-br from-indigo-50/90 via-slate-50 to-purple-50/60 border border-indigo-200/80 rounded-2xl p-5 sm:p-6 shadow-sm ${className}`}>
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
            <BookOpen size={20} />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span>PEEL Masterclass: Evidence vs. Explanation</span>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
                Cambridge 9699 Core
              </span>
            </h4>
            <p className="text-xs text-slate-600">
              How Cambridge examiners strictly distinguish empirical evidence from theoretical mechanisms.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-3.5 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer"
        >
          {isOpen ? (
            <>
              <span>Hide Guide</span>
              <ChevronUp size={14} />
            </>
          ) : (
            <>
              <span>Explore Guide</span>
              <ChevronDown size={14} />
            </>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-5 space-y-5"
          >
            {/* Tab Selector */}
            <div className="flex flex-wrap items-center gap-2 border-b border-indigo-100 pb-3">
              <button
                onClick={() => setActiveTab('matrix')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'matrix'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 border border-slate-200'
                }`}
              >
                <Layers size={13} />
                <span>The Core Distinction Matrix</span>
              </button>

              <button
                onClick={() => setActiveTab('worked-example')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'worked-example'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 border border-slate-200'
                }`}
              >
                <Sparkles size={13} />
                <span>Worked Cambridge Example (Family / Education)</span>
              </button>

              <button
                onClick={() => setActiveTab('common-pitfalls')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'common-pitfalls'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 border border-slate-200'
                }`}
              >
                <AlertTriangle size={13} />
                <span>Examiner Traps & Common Conflations</span>
              </button>
            </div>

            {/* Tab 1: Distinction Matrix */}
            {activeTab === 'matrix' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Evidence Card */}
                <div className="bg-white rounded-xl p-4 border border-purple-200 shadow-2xs space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-purple-100 text-purple-700">
                      <FlaskConical size={16} />
                    </span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 block">
                        EVIDENCE (Empirical)
                      </span>
                      <h5 className="text-xs font-bold text-slate-900">What is Evidence?</h5>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The <strong>factual and empirical material</strong> that anchors the claim to real sociological reality.
                  </p>
                  <div className="bg-purple-50/60 rounded-lg p-2.5 text-[11px] text-purple-950 space-y-1">
                    <p className="font-bold">Must Include:</p>
                    <ul className="list-disc list-inside space-y-0.5">
                      <li>Named sociologists with publication dates (e.g. <strong>Sue Sharpe (1976, 1994)</strong>)</li>
                      <li>Landmark empirical research & sample methods</li>
                      <li>Statistical datasets (e.g. UK ONS divorce rates, DfE attainment gaps)</li>
                    </ul>
                  </div>
                  <div className="text-[11px] font-semibold text-purple-800 italic">
                    Answers: "WHO found it? WHAT specific data or study proves it?"
                  </div>
                </div>

                {/* Explanation Card */}
                <div className="bg-white rounded-xl p-4 border border-amber-200 shadow-2xs space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-amber-100 text-amber-700">
                      <Cpu size={16} />
                    </span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 block">
                        EXPLANATION (Theoretical)
                      </span>
                      <h5 className="text-xs font-bold text-slate-900">What is Explanation?</h5>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The <strong>theoretical mechanism and analysis</strong> demonstrating <em>how</em> and <em>why</em> the evidence supports the point.
                  </p>
                  <div className="bg-amber-50/60 rounded-lg p-2.5 text-[11px] text-amber-950 space-y-1">
                    <p className="font-bold">Must Include:</p>
                    <ul className="list-disc list-inside space-y-0.5">
                      <li>Unpacking core sociological concepts (e.g. <strong>pure relationship</strong>, <strong>habitus</strong>)</li>
                      <li>Structural forces (capitalism, patriarchy, functional fit)</li>
                      <li>Interactionist processes (labelling, self-fulfilling prophecy)</li>
                    </ul>
                  </div>
                  <div className="text-[11px] font-semibold text-amber-800 italic">
                    Answers: "HOW and WHY does this empirical shift occur? What is the theoretical logic?"
                  </div>
                </div>

                {/* Evaluation Card */}
                <div className="bg-white rounded-xl p-4 border border-rose-200 shadow-2xs space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-rose-100 text-rose-700">
                      <Scale size={16} />
                    </span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 block">
                        EVALUATION (AO3)
                      </span>
                      <h5 className="text-xs font-bold text-slate-900">Critical Appraisal</h5>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Testing the limitations of the evidence and theory against competing paradigms.
                  </p>
                  <div className="bg-rose-50/60 rounded-lg p-2.5 text-[11px] text-rose-950 space-y-1">
                    <p className="font-bold">Must Include:</p>
                    <ul className="list-disc list-inside space-y-0.5">
                      <li>Methodological critiques (validity, sample size, researcher bias)</li>
                      <li>Temporal/historical validity shifts</li>
                      <li>Contrasting perspectives (Marxist vs Functionalist, Feminist, Postmodernist)</li>
                    </ul>
                  </div>
                  <div className="text-[11px] font-semibold text-rose-800 italic">
                    Answers: "However, what are the methodological flaws or rival interpretations?"
                  </div>
                </div>

                {/* Link Card */}
                <div className="bg-white rounded-xl p-4 border border-emerald-200 shadow-2xs space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                      <Link2 size={16} />
                    </span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">
                        LINK (Synthesis)
                      </span>
                      <h5 className="text-xs font-bold text-slate-900">Exam Question Focus</h5>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Synthesizing the analysis directly back to the exact wording of the question.
                  </p>
                  <div className="bg-emerald-50/60 rounded-lg p-2.5 text-[11px] text-emerald-950 space-y-1">
                    <p className="font-bold">Must Include:</p>
                    <ul className="list-disc list-inside space-y-0.5">
                      <li>Direct recycling of question terminology</li>
                      <li>Nuanced mini-judgement weighing significance</li>
                      <li>Clear signpost connecting back to the thesis</li>
                    </ul>
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-800 italic">
                    Answers: "Therefore, why does this directly answer the examination question?"
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Worked Cambridge Example */}
            {activeTab === 'worked-example' && (
              <div className="bg-white rounded-xl p-5 border border-indigo-100 shadow-2xs space-y-4">
                <div className="pb-3 border-b border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    Exam Prompt: Evaluate the view that changing gender roles is the primary cause of declining marriage rates. [26 Marks]
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Point */}
                  <div className="p-3.5 rounded-xl bg-blue-50/50 border-l-4 border-blue-500 text-slate-800 text-xs leading-relaxed space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-600 text-white inline-block">
                      POINT
                    </span>
                    <p>
                      One significant factor driving the decline in marriage rates is the increasing economic independence of women, which has transformed female priorities and reduced the financial necessity of formal matrimony.
                    </p>
                  </div>

                  {/* Evidence */}
                  <div className="p-3.5 rounded-xl bg-purple-50/50 border-l-4 border-purple-500 text-slate-800 text-xs leading-relaxed space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-purple-600 text-white inline-block">
                        EVIDENCE (Empirical Material)
                      </span>
                      <span className="text-[10px] font-semibold text-purple-700">Landmark Longitudinal Study</span>
                    </div>
                    <p>
                      For instance, <strong>Sue Sharpe (1976, 1994)</strong> conducted comparative qualitative research on working-class adolescent girls in London. In the 1970s, girls prioritized <em>"love, marriage, husbands, and children"</em>, whereas by the 1990s, their priorities had shifted decisively to <em>"job, career, and being able to support themselves"</em>. This empirical trend is corroborated by UK ONS data demonstrating that women now enter marriage significantly later (average age 35+ compared to 22 in 1970).
                    </p>
                  </div>

                  {/* Explanation */}
                  <div className="p-3.5 rounded-xl bg-amber-50/50 border-l-4 border-amber-500 text-slate-800 text-xs leading-relaxed space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-600 text-white inline-block">
                        EXPLANATION (Theoretical Mechanism)
                      </span>
                      <span className="text-[10px] font-semibold text-amber-700">Sociological Unpacking</span>
                    </div>
                    <p>
                      This empirical shift explains the decline in marriage because higher educational attainment and career entry liberate women from what Functionalist <strong>Talcott Parsons (1955)</strong> termed the subordinate <strong>expressive role</strong>. Sociologically, this illustrates <strong>Anthony Giddens' (1992)</strong> concept of the <strong>pure relationship</strong> and <strong>Ulrich Beck's (1992) individualisation thesis</strong>: modern intimate unions exist solely for mutual emotional fulfilment rather than economic survival. Consequently, women refuse to enter traditional marriages that risk compromising their career progression and personal autonomy.
                    </p>
                  </div>

                  {/* Evaluation */}
                  <div className="p-3.5 rounded-xl bg-rose-50/50 border-l-4 border-rose-500 text-slate-800 text-xs leading-relaxed space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-rose-600 text-white inline-block">
                        EVALUATION (AO3 Counter-Critique)
                      </span>
                      <span className="text-[10px] font-semibold text-rose-700">Radical Feminist Appraisal</span>
                    </div>
                    <p>
                      However, Radical Feminists such as <strong>Germaine Greer (2000)</strong> and <strong>Delphy and Leonard (1992)</strong> evaluate this argument critically, maintaining that society remains fundamentally patriarchal. They argue that declining marriage reflects women actively avoiding the patriarchal exploitation of the <strong>dual burden</strong> and <strong>triple shift</strong> in marriage, rather than simply enjoying gender equality.
                    </p>
                  </div>

                  {/* Link */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/50 border-l-4 border-emerald-500 text-slate-800 text-xs leading-relaxed space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-600 text-white inline-block">
                      LINK
                    </span>
                    <p>
                      Therefore, female educational and economic empowerment provides women with structural alternatives to domestic dependence, directly explaining the sustained decline in formal marriage rates.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Common Pitfalls */}
            {activeTab === 'common-pitfalls' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-red-200 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-xs">
                    <AlertTriangle size={16} />
                    <span>Conflation Trap 1: "Abstract Theorist Drop" (No Empirical Evidence)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>The Mistake:</strong> Mentioning a theorist in passing (e.g. <em>"Marxists say society is unequal"</em>) without citing specific concepts, studies, sample methodology, or dates.
                  </p>
                  <div className="bg-red-50 p-2.5 rounded-lg text-[11px] text-red-900">
                    <strong>Examiner Penalty:</strong> Capped at Band 2 / Level 2 for vague generalisation ([TV] / [GEN] stamp).
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-amber-200 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
                    <AlertTriangle size={16} />
                    <span>Conflation Trap 2: "Evidence Without Explanation" (Data Dumping)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>The Mistake:</strong> Stating a statistic or study (e.g. <em>"Bowles and Gintis found schools reproduce inequality"</em>) but failing to explain <em>how and why</em> the theoretical mechanism works (e.g. the <strong>correspondence principle</strong> and <strong>hidden curriculum</strong>).
                  </p>
                  <div className="bg-amber-50 p-2.5 rounded-lg text-[11px] text-amber-900">
                    <strong>Examiner Penalty:</strong> Misses AO2 (Application) and AO3 (Analysis) marks because the causal link is unstated.
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-purple-200 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-600 font-bold text-xs">
                    <AlertTriangle size={16} />
                    <span>Conflation Trap 3: "Juxtaposition without Evaluation"</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>The Mistake:</strong> Writing a Functionalist paragraph, followed by a Marxist paragraph, without explicitly contrasting them or assessing which provides a more valid explanation in contemporary society.
                  </p>
                  <div className="bg-purple-50 p-2.5 rounded-lg text-[11px] text-purple-900">
                    <strong>Examiner Penalty:</strong> Penalized under Cambridge AO3 rules as mere descriptive juxtaposition rather than evaluative synthesis.
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-blue-200 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs">
                    <CheckCircle2 size={16} />
                    <span>The Golden Cambridge Standard</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every paragraph must exhibit <strong>symmetrical pairing</strong>: An empirical fact (theorist/study/data) immediately paired with a conceptual mechanism explaining the causal process, followed by an AO3 critical check.
                  </p>
                  <div className="bg-blue-50 p-2.5 rounded-lg text-[11px] text-blue-900">
                    <strong>Result:</strong> Consistently secures Upper Band Level 4 / Level 5 marks.
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
