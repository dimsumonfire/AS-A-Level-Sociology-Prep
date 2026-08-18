import React from 'react';
import { BookOpen, ExternalLink, AlertTriangle, CheckCircle, HelpCircle, FileText } from 'lucide-react';
import { AcademicEvidence, CitationItem, UnsupportedClaimItem, VerificationStatus } from '../types';

interface SourcesPanelProps {
  citations?: Array<CitationItem & { evidence?: AcademicEvidence }>;
  unsupportedClaims?: UnsupportedClaimItem[];
  evidenceList?: AcademicEvidence[];
  hasUnverifiedWarning?: boolean;
  className?: string;
}

export const SourcesPanel: React.FC<SourcesPanelProps> = ({
  citations = [],
  unsupportedClaims = [],
  evidenceList,
  hasUnverifiedWarning = false,
  className = ''
}) => {
  // Collect all unique evidence items
  const displayEvidence: AcademicEvidence[] = [];
  const seenIds = new Set<string>();

  if (citations.length > 0) {
    citations.forEach((c) => {
      if (c.evidence && !seenIds.has(c.evidence.id)) {
        seenIds.add(c.evidence.id);
        displayEvidence.push(c.evidence);
      }
    });
  }

  if (evidenceList && evidenceList.length > 0) {
    evidenceList.forEach((e) => {
      if (!seenIds.has(e.id)) {
        seenIds.add(e.id);
        displayEvidence.push(e);
      }
    });
  }

  const getStatusBadge = (status: VerificationStatus) => {
    switch (status) {
      case 'verified':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
            <CheckCircle size={11} aria-hidden="true" />
            Verified source
          </span>
        );
      case 'coursebook-summary':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
            <BookOpen size={11} aria-hidden="true" />
            Coursebook summary
          </span>
        );
      case 'ai-synthesis':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
            <FileText size={11} aria-hidden="true" />
            AI synthesis
          </span>
        );
      case 'citation-needed':
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
            <HelpCircle size={11} aria-hidden="true" />
            Citation needed
          </span>
        );
    }
  };

  const showWarning = hasUnverifiedWarning || unsupportedClaims.length > 0;

  if (displayEvidence.length === 0 && unsupportedClaims.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Academic Evidence and Sources Panel"
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4 ${className}`}
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <BookOpen size={18} className="text-indigo-600" aria-hidden="true" />
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Academic Evidence & Reference Sources
          </h4>
        </div>
        <span className="text-xs text-slate-500 font-medium">
          {displayEvidence.length} source{displayEvidence.length === 1 ? '' : 's'} referenced
        </span>
      </div>

      {showWarning && (
        <div
          role="alert"
          className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs"
        >
          <AlertTriangle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="leading-relaxed">
            Some generated claims could not be verified against the app’s source library. Treat them as revision suggestions rather than established evidence.
          </p>
        </div>
      )}

      {displayEvidence.length > 0 && (
        <div className="space-y-3">
          {displayEvidence.map((source) => (
            <div
              key={source.id}
              id={`evidence-${source.id}`}
              className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 hover:border-slate-300 transition-colors space-y-1.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-black px-2 py-0.5 rounded bg-indigo-900 text-indigo-200 border border-indigo-700">
                    [{source.id}]
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    {source.author ? `${source.author} ` : ''}
                    {source.year ? `(${source.year})` : ''}
                  </span>
                </div>
                {getStatusBadge(source.verificationStatus)}
              </div>

              <div className="text-xs font-medium text-slate-800 italic">
                "{source.title}"
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Claim/Finding:</strong> {source.claim}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
                {source.publisher && (
                  <span>
                    <strong>Publisher:</strong> {source.publisher}
                  </span>
                )}
                {source.page && (
                  <span>
                    <strong>Page(s):</strong> {source.page}
                  </span>
                )}
                {source.geography && (
                  <span>
                    <strong>Context:</strong> {source.geography}
                  </span>
                )}
                {source.population && (
                  <span>
                    <strong>Sample:</strong> {source.population}
                  </span>
                )}
                {source.url && (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-600 hover:underline"
                  >
                    <span>View Record</span>
                    <ExternalLink size={10} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {unsupportedClaims.length > 0 && (
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <HelpCircle size={14} className="text-amber-500" aria-hidden="true" />
            <span>Unverified Claims / Citation Needed</span>
          </div>
          <div className="space-y-1.5">
            {unsupportedClaims.map((unsupported, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-amber-50/50 border border-amber-200/80 text-xs text-amber-900 space-y-0.5">
                <div className="font-semibold">"{unsupported.claim}"</div>
                <div className="text-[11px] text-amber-700">Reason: {unsupported.reason}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SourcesPanel;
