import React, { useState } from 'react';
import { Module1Formula } from '../types';
import { Target, Zap, AlertTriangle, BookmarkPlus, Check, Lightbulb, Copy } from 'lucide-react';
import { formatFormulaCardToMarkdown } from '../utils/formatters';

interface Module1FormulaViewProps {
  formula: Module1Formula;
  topicTitle: string;
  onSaveFormula: (topicTitle: string, formula: string) => void;
  isSaved: boolean;
  onCopy: (text: string) => void;
}

export const Module1FormulaView: React.FC<Module1FormulaViewProps> = ({
  formula,
  topicTitle,
  onSaveFormula,
  isSaved,
  onCopy,
}) => {
  const [justSaved, setJustSaved] = useState(false);
  const [copiedFormula, setCopiedFormula] = useState(false);

  const handleSave = () => {
    onSaveFormula(topicTitle, formula.primaryFormula);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  const handleCopyPrimary = () => {
    onCopy(`[${topicTitle} - Altın Formül]\n${formula.primaryFormula}\n\nMantık: ${formula.coreLogic}`);
    setCopiedFormula(true);
    setTimeout(() => setCopiedFormula(false), 2000);
  };

  const handleCopyModule = () => {
    let text = `🎯 1. İŞİN ÖZÜ & MATEMATİKSEL HAP FORMÜL: ${topicTitle}\n\n`;
    text += `Mantık: ${formula.coreLogic}\n\n`;
    text += `Formül: ${formula.primaryFormula}\n\n`;
    formula.formulaCards.forEach((c, i) => {
      text += `${i + 1}. ${c.title} (${c.pattern})\n`;
      c.rules.forEach((r) => (text += `• ${r}\n`));
      text += `Örnek: "${c.clinicalExample}"\nÇeviri: ${c.exampleTr}\n\n`;
    });
    if (formula.punctuationTips?.length) {
      text += `Noktalama Kuralları:\n`;
      formula.punctuationTips.forEach((tip) => (text += `✔ ${tip}\n`));
    }
    onCopy(text);
  };

  return (
    <section id="module-1-section" className="space-y-6">
      
      {/* Module Title Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-600 flex items-center justify-center font-bold text-sm">
            1
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>🎯 1. İŞİN ÖZÜ & MATEMATİKSEL HAP FORMÜL</span>
            </h2>
            <p className="text-xs text-slate-500">Soru kökünde saniyeler içinde doğru şıkkı bulduran klinik kural</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="copy-module1-btn"
            onClick={handleCopyModule}
            title="Tüm Formül Modülünü Kopyala"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all border bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
          >
            <Copy className="w-3.5 h-3.5 text-teal-600" />
            <span>Modülü Kopyala</span>
          </button>

          <button
            onClick={handleSave}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all border ${
              isSaved || justSaved
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            {isSaved || justSaved ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Formül Deftere Eklendi</span>
              </>
            ) : (
              <>
                <BookmarkPlus className="w-3.5 h-3.5 text-teal-600" />
                <span>Hap Formülü Deftere Kaydet</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Core Logic Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Hekim Mantığıyla İşin Özü</h3>
            <p className="text-sm font-medium text-slate-800 leading-relaxed">
              {formula.coreLogic}
            </p>
          </div>
        </div>
      </div>

      {/* Primary Mathematical Formula Banner with Copy Button */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-xl p-5 sm:p-6 shadow-md border border-slate-700 relative">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            <span>Saniyeler İçinde Çözdüren Altın Formül</span>
          </div>

          <button
            id="copy-primary-formula-btn"
            onClick={handleCopyPrimary}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-slate-300 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-600 transition-colors"
            title="Formülü Kopyala"
          >
            {copiedFormula ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Kopyalandı</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-teal-400" />
                <span>Formülü Kopyala</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-slate-950/70 border border-slate-700/80 rounded-lg p-3.5 sm:p-4 text-center">
          <code className="text-base sm:text-lg font-mono font-bold text-amber-300 tracking-wide break-words">
            {formula.primaryFormula}
          </code>
        </div>
      </div>

      {/* Formula Cards Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {formula.formulaCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-teal-300 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                <h4 className="font-bold text-sm text-slate-900">{card.title}</h4>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                    Kalıp {idx + 1}
                  </span>
                  <button
                    onClick={() => onCopy(formatFormulaCardToMarkdown(card))}
                    title="Bu Kalıbı Kopyala"
                    className="p-1 text-slate-400 hover:text-teal-600 hover:bg-slate-100 rounded transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="p-2.5 bg-teal-50/50 rounded-lg border border-teal-100 font-mono text-xs font-semibold text-teal-900">
                {card.pattern}
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                {card.rules.map((rule, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold shrink-0">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinical Example in Card */}
            <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 -mx-5 -mb-5 p-4 rounded-b-xl">
              <div className="text-[11px] font-bold uppercase text-slate-500 mb-1">Klinik Literatür Örneği:</div>
              <p className="text-xs font-serif italic text-slate-900 mb-1.5 leading-relaxed">
                "{card.clinicalExample}"
              </p>
              <p className="text-xs text-slate-600 font-medium">
                → {card.exampleTr}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Punctuation Tips Banner */}
      {formula.punctuationTips && formula.punctuationTips.length > 0 && (
        <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 sm:p-5">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Noktalama İşareti İpuçları (Soru Çözen Virgül Kuralları)</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-amber-950">
            {formula.punctuationTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-lg border border-amber-200/60">
                <span className="text-amber-700 font-bold shrink-0">✔</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

    </section>
  );
};
