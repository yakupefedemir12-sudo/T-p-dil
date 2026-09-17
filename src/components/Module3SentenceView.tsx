import React, { useState } from 'react';
import { Module3Sentence } from '../types';
import { Microscope, Volume2, Sparkles, Stethoscope, Copy } from 'lucide-react';
import { playEnglishAudio } from '../utils/speech';
import { formatSentenceToMarkdown } from '../utils/formatters';

interface Module3SentenceViewProps {
  sentences: Module3Sentence[];
  onCopy: (text: string) => void;
}

export const Module3SentenceView: React.FC<Module3SentenceViewProps> = ({ sentences, onCopy }) => {
  const [highlightPart, setHighlightPart] = useState<string | null>(null);

  const handlePlay = (text: string) => {
    playEnglishAudio(text);
  };

  const handleCopyAllSentences = () => {
    let text = `🔬 TIBBİ VAKA & MAKALE CÜMLELERİ (SENTENCE BREAKDOWN)\n\n`;
    sentences.forEach((s, idx) => {
      text += `--- Cümle #${idx + 1} ---\n${formatSentenceToMarkdown(s)}\n`;
    });
    onCopy(text);
  };

  return (
    <section id="module-3-section" className="space-y-6">
      
      {/* Module Title Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-600 flex items-center justify-center font-bold text-sm">
            3
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>🔬 3. TIBBİ VAKA & MAKALE ÖRNEK CÜMLELERİ (SENTENCE BREAKDOWN)</span>
            </h2>
            <p className="text-xs text-slate-500">Klinik literatürden gerçekçi cümle iskeleti analizi ve hekimce çevirisi</p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            id="copy-all-sentences-btn"
            onClick={handleCopyAllSentences}
            title="Tüm Örnek Cümleleri Kopyala"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all border bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
          >
            <Copy className="w-3.5 h-3.5 text-teal-600" />
            <span>Cümleleri Kopyala</span>
          </button>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>İskelet Parçalarına Tıkla & İncele</span>
          </div>
        </div>
      </div>

      {/* Sentences List */}
      <div className="space-y-6">
        {sentences.map((sent, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:border-slate-300 transition-all"
          >
            {/* Header / Case Indicator with Play & Copy */}
            <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
                <Microscope className="w-4 h-4 text-teal-400" />
                <span>Klinik Vaka / Makale Cümlesi #{idx + 1}</span>
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onCopy(formatSentenceToMarkdown(sent))}
                  className="flex items-center gap-1 text-xs text-slate-300 hover:text-teal-300 transition-colors"
                  title="Bu Cümleyi ve İskeletini Kopyala"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Kopyala</span>
                </button>
                <button
                  onClick={() => handlePlay(sent.originalEn)}
                  className="flex items-center gap-1 text-xs text-slate-300 hover:text-teal-300 transition-colors"
                  title="Cümleyi Dinle"
                >
                  <Volume2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Telaffuz</span>
                </button>
              </div>
            </div>

            {/* Original Sentence Display */}
            <div className="p-5 space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="text-[11px] font-bold uppercase text-slate-500 tracking-wider mb-1.5">
                  Orijinal İngilizce Cümle:
                </div>
                <p className="text-base sm:text-lg font-serif italic text-slate-900 leading-relaxed">
                  "{sent.originalEn}"
                </p>
              </div>

              {/* Skeleton Breakdown Interactive Chips */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Cümle İskeleti Analizi (Klinik Ayrıştırma):
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  
                  {/* Subject */}
                  <div
                    onClick={() => setHighlightPart(highlightPart === 'subject' ? null : 'subject')}
                    className={`cursor-pointer p-3 rounded-lg border text-xs transition-all ${
                      highlightPart === 'subject'
                        ? 'bg-blue-50 border-blue-400 text-blue-900 ring-2 ring-blue-300'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <div className="font-bold text-blue-700 flex items-center justify-between mb-1">
                      <span>[Özne] Kim / Ne?</span>
                      <span className="text-[10px] px-1.5 py-0.2 bg-blue-100 rounded text-blue-800">Subject</span>
                    </div>
                    <p className="font-mono text-xs break-words">{sent.breakdown.subject}</p>
                  </div>

                  {/* Main Verb */}
                  <div
                    onClick={() => setHighlightPart(highlightPart === 'verb' ? null : 'verb')}
                    className={`cursor-pointer p-3 rounded-lg border text-xs transition-all ${
                      highlightPart === 'verb'
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-900 ring-2 ring-emerald-300'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <div className="font-bold text-emerald-700 flex items-center justify-between mb-1">
                      <span>[Ana Yüklem] Hangisi?</span>
                      <span className="text-[10px] px-1.5 py-0.2 bg-emerald-100 rounded text-emerald-800">Main Verb</span>
                    </div>
                    <p className="font-mono text-xs font-bold break-words">{sent.breakdown.mainVerb}</p>
                  </div>

                  {/* Conjunction Clause */}
                  <div
                    onClick={() => setHighlightPart(highlightPart === 'clause' ? null : 'clause')}
                    className={`cursor-pointer p-3 rounded-lg border text-xs transition-all ${
                      highlightPart === 'clause'
                        ? 'bg-amber-50 border-amber-400 text-amber-900 ring-2 ring-amber-300'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <div className="font-bold text-amber-700 flex items-center justify-between mb-1">
                      <span>[Bağlaç / Yan Cümle]</span>
                      <span className="text-[10px] px-1.5 py-0.2 bg-amber-100 rounded text-amber-800">Clause</span>
                    </div>
                    <p className="font-mono text-xs break-words">{sent.breakdown.conjunctionClause}</p>
                  </div>

                  {/* Object / Complement */}
                  <div
                    onClick={() => setHighlightPart(highlightPart === 'complement' ? null : 'complement')}
                    className={`cursor-pointer p-3 rounded-lg border text-xs transition-all ${
                      highlightPart === 'complement'
                        ? 'bg-purple-50 border-purple-400 text-purple-900 ring-2 ring-purple-300'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <div className="font-bold text-purple-700 flex items-center justify-between mb-1">
                      <span>[Nesne / Tümleç]</span>
                      <span className="text-[10px] px-1.5 py-0.2 bg-purple-100 rounded text-purple-800">Object</span>
                    </div>
                    <p className="font-mono text-xs break-words">{sent.breakdown.objectOrComplement}</p>
                  </div>

                </div>
              </div>

              {/* Natural Clinical Translation */}
              <div className="bg-teal-50/70 border border-teal-200 rounded-xl p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-teal-800 mb-1">
                  Akıcı Türkçe Klinik Çevirisi (Hekim Diline Uygun):
                </div>
                <p className="text-sm font-medium text-slate-900 leading-relaxed">
                  {sent.translationTr}
                </p>
              </div>

              {/* Clinical Insight */}
              {sent.clinicalInsight && (
                <div className="flex items-start gap-2.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <Stethoscope className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-medium">{sent.clinicalInsight}</p>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
