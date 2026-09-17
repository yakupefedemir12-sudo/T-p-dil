import React, { useState } from 'react';
import { Module2Word } from '../types';
import { Key, Volume2, BookmarkPlus, Check, ArrowRight, Tag, Copy } from 'lucide-react';
import { playEnglishAudio } from '../utils/speech';
import { formatWordToMarkdown } from '../utils/formatters';

interface Module2VocabViewProps {
  words: Module2Word[];
  onSaveWord: (word: Module2Word) => void;
  savedWordsList: Module2Word[];
  onCopy: (text: string) => void;
}

export const Module2VocabView: React.FC<Module2VocabViewProps> = ({
  words,
  onSaveWord,
  savedWordsList,
  onCopy,
}) => {
  const [playingWord, setPlayingWord] = useState<string | null>(null);

  const handlePlayAudio = (text: string) => {
    setPlayingWord(text);
    playEnglishAudio(text);
    setTimeout(() => setPlayingWord(null), 1500);
  };

  const isWordSaved = (verb: string) => {
    return savedWordsList.some((w) => w.verb.toLowerCase() === verb.toLowerCase());
  };

  const handleCopyAllWords = () => {
    let text = `🔑 SINAV KAZANDIRAN TIBBİ KELİMELER & EŞ ANLAMLILARI (ESP)\n\n`;
    words.forEach((w, i) => {
      text += `${i + 1}. ${formatWordToMarkdown(w)}\n`;
    });
    onCopy(text);
  };

  return (
    <section id="module-2-section" className="space-y-6">
      
      {/* Module Title Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-600 flex items-center justify-center font-bold text-sm">
            2
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>🔑 2. SINAV KAZANDIRAN TIBBİ KELİMELER & EŞ ANLAMLILARI (ESP)</span>
            </h2>
            <p className="text-xs text-slate-500">Bu konuyla TIPDİL'de en sık yan yana gelen 4 kritik tıbbi kelime</p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            id="copy-all-vocab-btn"
            onClick={handleCopyAllWords}
            title="Tüm 4 Tıbbi Kelimeyi Kopyala"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all border bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
          >
            <Copy className="w-3.5 h-3.5 text-teal-600" />
            <span>Kelimeleri Kopyala</span>
          </button>

          <span className="text-xs font-semibold px-2.5 py-1.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg">
            4 Yüksek Frekanslı Fiil
          </span>
        </div>
      </div>

      {/* Vocabulary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {words.map((item, idx) => {
          const saved = isWordSaved(item.verb);

          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                
                {/* Header with Verb, Audio, Copy and Save */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900 font-mono tracking-tight">
                        {item.verb}
                      </h3>
                      <button
                        title="Telaffuz Dinle"
                        onClick={() => handlePlayAudio(item.verb)}
                        className={`p-1 rounded-md transition-colors ${
                          playingWord === item.verb ? 'bg-teal-100 text-teal-700' : 'text-slate-400 hover:text-teal-600 hover:bg-slate-100'
                        }`}
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs font-semibold text-teal-700 mt-0.5">
                      {item.meaningTr}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onCopy(formatWordToMarkdown(item))}
                      title="Bu Kelimeyi Kopyala"
                      className="p-1.5 text-slate-400 hover:text-teal-700 hover:bg-slate-100 rounded-lg border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onSaveWord(item)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                        saved
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {saved ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Kaydedildi</span>
                        </>
                      ) : (
                        <>
                          <BookmarkPlus className="w-3 h-3 text-slate-500" />
                          <span>Kaydet</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Synonyms (Sınav Eş Anlamlıları) */}
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    <Tag className="w-3 h-3" />
                    <span>Sınavda Çıkan Eş Anlamlıları (Synonyms):</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.synonyms.map((syn, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-mono font-medium px-2 py-0.5 bg-white text-slate-700 border border-slate-200 rounded"
                      >
                        = {syn}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TIPDIL Collocation */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    TIPDİL'de Tipik Kullanım Kalıbı:
                  </div>
                  <div className="p-2 bg-teal-50/70 border border-teal-100 rounded-md font-mono text-xs text-teal-900 font-medium">
                    {item.tipdilCollocation}
                  </div>
                </div>

                {/* Clinical Context */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                    Klinik Bağlam (Hangi Sorularda Çıkar?):
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.clinicalContext}
                  </p>
                </div>

              </div>

              {/* Example sentence with listen option */}
              <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50/60 -mx-5 -mb-5 p-4 rounded-b-xl">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-bold uppercase text-slate-500">Cümle İçi Kullanımı:</span>
                  <button
                    onClick={() => handlePlayAudio(item.exampleSentence)}
                    className="text-[11px] text-teal-600 hover:text-teal-700 flex items-center gap-1 font-medium"
                  >
                    <Volume2 className="w-3 h-3" />
                    <span>Dinle</span>
                  </button>
                </div>
                <p className="text-xs font-serif italic text-slate-800 leading-relaxed">
                  "{item.exampleSentence}"
                </p>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
