import React from 'react';
import { X, BookOpen, Zap, AlertTriangle } from 'lucide-react';

interface CheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const formulas = [
    {
      name: '1. ZITLIK FORMÜLÜ',
      formula: '[Despite / In spite of + İsim / V-ing] VS [Although / Even though + SVO (Özne+Yüklem)]',
      tip: '"Despite of" diye bir kalıp YOKTUR. Boşluktan sonra çekimli fiil yoksa isim grubuna git.',
      badge: 'En Çok Çıkan'
    },
    {
      name: '2. SEBEP-SONUÇ FORMÜLÜ',
      formula: '[Because of / Due to / Owing to + İsim] VS [Because / Since / As + SVO]',
      tip: '"Since" ve "As" sınavda %80 "çünkü" anlamında test edilir. Boşluğun arkasında sebep olan isim mi yoksa eylem mi var?',
      badge: 'En Çok Çıkan'
    },
    {
      name: '3. İKİLİ BAĞLAÇ ÇİFTLERİ',
      formula: 'Not only... BUT ALSO | Either... OR | Neither... NOR | Both... AND',
      tip: 'Çaprazlama eşleşmelere kanma! (Neither ile OR, Either ile NOR birleşmez).',
      badge: 'Garantili Net'
    },
    {
      name: '4. SINCE & BY THE TIME TENSE MATEMATİĞİ',
      formula: 'Since + V2 (Past) -> have/has V3 (Present Perfect) | By the time + V2 -> had V3',
      tip: '"Since"in hemen yanındaki boşluk V2, dışındaki ana cümle have/has V3 olur. "By the time" içine will/would girmez.',
      badge: 'Tense Omurgası'
    },
    {
      name: '5. PARTİCİPLE KISALTMALARI (V3 vs V-ing)',
      formula: 'V-ing + Nesne (Aktif - Yapan) VS V3 + by/in (Pasif - Yapılan)',
      tip: 'Boşluktan sonra "by / in / with" varsa veya özne eyleme maruz kalıyorsa %95 V3 (Characterized by, Isolated from).',
      badge: 'Abstract Kuralı'
    },
    {
      name: '6. KOŞUL & ŞART: UNLESS',
      formula: 'Unless + Olumlu Cümle = If ... not (-medikçe / -mezse)',
      tip: 'Unless kendi içinde olumsuzluk taşır; bağlandığı cümleye bir daha "not" almaz.',
      badge: 'Sık Çıkan'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">TIPDİL & YÖKDİL Altın Hap Formüller Tablosu</h3>
              <p className="text-xs text-slate-400">Vizit ve nöbet öncesi hızlı hafıza kartı</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {formulas.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-teal-300 transition-all">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-teal-600" />
                  <span>{item.name}</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                  {item.badge}
                </span>
              </div>
              <div className="p-2.5 bg-white border border-slate-200 rounded-lg font-mono text-xs text-slate-900 font-semibold mb-2">
                {item.formula}
              </div>
              <div className="text-xs text-slate-600 flex items-start gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>{item.tip}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Anladım, Kapat
          </button>
        </div>

      </div>
    </div>
  );
};
