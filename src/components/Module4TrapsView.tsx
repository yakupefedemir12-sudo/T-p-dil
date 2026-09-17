import React from 'react';
import { Module4Trap } from '../types';
import { AlertTriangle, ShieldCheck, Radar, Skull, Copy } from 'lucide-react';
import { formatTrapToMarkdown } from '../utils/formatters';

interface Module4TrapsViewProps {
  traps: Module4Trap[];
  onCopy: (text: string) => void;
}

export const Module4TrapsView: React.FC<Module4TrapsViewProps> = ({ traps, onCopy }) => {
  const handleCopyAllTraps = () => {
    let text = `⚠️ ÖSYM & TIPDİL KOMİSYONUNUN ÇELDIRİCİ TUZAKLARI\n\n`;
    traps.forEach((t, i) => {
      text += `--- Tuzak #${i + 1} ---\n${formatTrapToMarkdown(t)}\n`;
    });
    onCopy(text);
  };

  return (
    <section id="module-4-section" className="space-y-6">
      
      {/* Module Title Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-600 flex items-center justify-center font-bold text-sm">
            4
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>⚠️ 4. ÖSYM & TIPDİL KOMİSYONUNUN ÇELDIRİCİ TUZAKLARI</span>
            </h2>
            <p className="text-xs text-slate-500">Soru hazırlayan hocaların hekimleri avlamak için kurduğu en meşhur 2 taktik</p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            id="copy-all-traps-btn"
            onClick={handleCopyAllTraps}
            title="Tüm Komisyon Tuzaklarını Kopyala"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all border bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
          >
            <Copy className="w-3.5 h-3.5 text-rose-600" />
            <span>Tuzakları Kopyala</span>
          </button>

          <span className="text-xs font-semibold px-2.5 py-1.5 bg-rose-50 text-rose-800 border border-rose-200 rounded-lg flex items-center gap-1.5">
            <Skull className="w-3.5 h-3.5 text-rose-600" />
            <span>5-10 Net Kazandıran Fark</span>
          </span>
        </div>
      </div>

      {/* Traps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {traps.map((trap, idx) => (
          <div
            key={idx}
            className="bg-white border-2 border-rose-100 rounded-xl p-5 shadow-sm space-y-4 hover:border-rose-200 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3.5">
              
              {/* Header with Title and Copy */}
              <div className="flex items-start justify-between gap-2.5 border-b border-slate-100 pb-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-rose-600 tracking-wider">Komisyon Tuzağı #{idx + 1}</span>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">{trap.trapName}</h3>
                  </div>
                </div>

                <button
                  onClick={() => onCopy(formatTrapToMarkdown(trap))}
                  title="Bu Tuzağı Kopyala"
                  className="p-1.5 text-slate-400 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors shrink-0"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* How Commission Tricks */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Öğrenciyi Nasıl Kandırırlar?
                </div>
                <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                  {trap.howCommissionTricks}
                </p>
              </div>

              {/* Deceptive Option Example */}
              {trap.deceptiveOptionExample && (
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-rose-700 mb-1">
                    Komisyonun Hileli Şık Düzeni:
                  </div>
                  <div className="p-2.5 bg-rose-50/60 border border-rose-200 rounded-lg font-mono text-xs text-rose-950 font-medium break-words">
                    {trap.deceptiveOptionExample}
                  </div>
                </div>
              )}

              {/* Radar Keywords */}
              <div>
                <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  <Radar className="w-3.5 h-3.5 text-teal-600" />
                  <span>Soru Kökündeki Radar Kelimeler (Görünce Bu Konuya Koş):</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {trap.radarKeywords.map((kw, kIdx) => (
                    <span
                      key={kIdx}
                      className="text-[11px] font-mono font-medium px-2 py-0.5 bg-teal-50 text-teal-900 border border-teal-200 rounded"
                    >
                      🔍 {kw}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Defense Strategy */}
            <div className="mt-4 pt-3 border-t border-slate-100 bg-emerald-50/70 -mx-5 -mb-5 p-4 rounded-b-xl border-t border-emerald-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Klinik Savunma & Eletme Stratejisi:</span>
              </div>
              <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                {trap.defenseStrategy}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
