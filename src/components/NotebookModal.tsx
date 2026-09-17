import React, { useState } from 'react';
import { X, BookmarkCheck, Trash2, Volume2, Copy, Check, FileText } from 'lucide-react';
import { Module2Word } from '../types';
import { playEnglishAudio } from '../utils/speech';

interface NotebookModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedWords: Module2Word[];
  savedFormulas: Array<{ topicTitle: string; formula: string }>;
  onRemoveWord: (verb: string) => void;
  onRemoveFormula: (formula: string) => void;
}

export const NotebookModal: React.FC<NotebookModalProps> = ({
  isOpen,
  onClose,
  savedWords,
  savedFormulas,
  onRemoveWord,
  onRemoveFormula,
}) => {
  const [activeTab, setActiveTab] = useState<'words' | 'formulas'>('words');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyAll = () => {
    let text = '=== TIPDİL & YÖKDİL HEKİM NOT DEFTERİM ===\n\n';
    text += '--- KAYDEDİLEN FORMÜLLER ---\n';
    savedFormulas.forEach((f, i) => {
      text += `${i + 1}. [${f.topicTitle}]\nFormül: ${f.formula}\n\n`;
    });

    text += '\n--- KAYDEDİLEN ESP TIBBİ KELİMELER ---\n';
    savedWords.forEach((w, i) => {
      text += `${i + 1}. ${w.verb} (${w.meaningTr})\nEş Anlamlıları: ${w.synonyms.join(', ')}\nKalıp: ${w.tipdilCollocation}\n\n`;
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <BookmarkCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Hekim Not Defterim</h3>
              <p className="text-xs text-slate-400">
                {savedWords.length} Tıbbi Kelime, {savedFormulas.length} Formül Kayıtlı
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-5 pt-3 gap-3">
          <button
            onClick={() => setActiveTab('words')}
            className={`pb-3 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'words'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Tıbbi Kelimeler ({savedWords.length})
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`pb-3 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'formulas'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Matematiksel Formüller ({savedFormulas.length})
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          
          {activeTab === 'words' && (
            savedWords.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-xs">
                <FileText className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                <p>Henüz kelime kaydetmedin.</p>
                <p className="mt-1 text-slate-500">Derslerin 2. Modülündeki "Kaydet" butonuyla kritik fiilleri buraya toplayabilirsin.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {savedWords.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900 font-mono">{item.verb}</span>
                        <button
                          onClick={() => playEnglishAudio(item.verb)}
                          className="text-slate-400 hover:text-teal-600 p-0.5"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-semibold text-teal-700">({item.meaningTr})</span>
                      </div>
                      <div className="text-xs text-slate-600">
                        <span className="font-semibold text-slate-700">Eş Anlamlılar: </span>
                        {item.synonyms.join(' = ')}
                      </div>
                      <div className="text-xs font-mono text-slate-500">
                        {item.tipdilCollocation}
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveWord(item.verb)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors self-end sm:self-auto"
                      title="Listeden Çıkar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )
          )}

          {activeTab === 'formulas' && (
            savedFormulas.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-xs">
                <FileText className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                <p>Henüz formül kaydetmedin.</p>
                <p className="mt-1 text-slate-500">1. Modüldeki "Hap Formülü Deftere Kaydet" butonuyla formülleri toplayabilirsin.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {savedFormulas.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1.5 flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                        {item.topicTitle}
                      </span>
                      <p className="font-mono text-xs font-bold text-slate-900 break-words mt-1">
                        {item.formula}
                      </p>
                    </div>
                    <button
                      onClick={() => onRemoveFormula(item.formula)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors self-end sm:self-auto"
                      title="Listeden Çıkar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )
          )}

        </div>

        {/* Footer with copy button */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={handleCopyAll}
            disabled={savedWords.length === 0 && savedFormulas.length === 0}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 bg-white hover:bg-slate-50 rounded-lg transition-colors disabled:opacity-50"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Tümü Panoya Kopyalandı!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-600" />
                <span>Tüm Defteri Kopyala</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Kapat
          </button>
        </div>

      </div>
    </div>
  );
};
