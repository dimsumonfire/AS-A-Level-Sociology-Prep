import React from 'react';
import { Info } from 'lucide-react';

interface AIStudyDisclaimerProps {
  className?: string;
  variant?: 'standard' | 'compact' | 'borderless';
}

export const AIStudyDisclaimer: React.FC<AIStudyDisclaimerProps> = ({
  className = '',
  variant = 'standard'
}) => {
  if (variant === 'compact') {
    return (
      <div
        role="note"
        aria-label="AI Study Disclaimer"
        className={`flex items-start gap-2 text-xs text-slate-600 bg-slate-100/90 rounded-lg p-2.5 border border-slate-200 ${className}`}
      >
        <Info size={14} className="text-indigo-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <p className="leading-relaxed">
          <strong>AI Study Guidance:</strong> Marks and performance bands are estimates and may differ from those awarded by a Cambridge examiner. Verify important material against the current Cambridge 9699 syllabus, published mark schemes and approved coursebooks.
        </p>
      </div>
    );
  }

  return (
    <aside
      role="note"
      aria-label="AI Study Guidance Notice"
      className={`rounded-xl p-4 bg-slate-50 border border-slate-200 text-slate-700 shadow-sm ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700 flex-shrink-0 mt-0.5">
          <Info size={16} aria-hidden="true" />
        </div>
        <div className="text-xs space-y-1">
          <div className="font-bold text-slate-900 tracking-tight">AI Study Guidance & Assessment Notice</div>
          <p className="leading-relaxed text-slate-600">
            AI-generated study guidance. Marks and performance bands are estimates and may differ from those awarded by a Cambridge examiner. Verify important material against the current Cambridge 9699 syllabus, published mark schemes and approved coursebooks.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default AIStudyDisclaimer;
