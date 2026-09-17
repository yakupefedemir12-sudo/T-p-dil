import React, { useState } from 'react';
import { X, Sparkles, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { TopicLesson } from '../types';

interface CustomTopicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLessonCreated: (lesson: TopicLesson) => void;
}

export const CustomTopicModal: React.FC<CustomTopicModalProps> = ({
  isOpen,
  onClose,
  onLessonCreated,
}) => {
  const [topicInput, setTopicInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const sampleSuggestions = [
    'Relative Clause Kısaltmaları (Which vs In which vs Where)',
    'Koşul Bağlaçları: Unless vs Provided that vs In case',
    'Tıbbi Makalelerde Edatlar: In terms of vs With regard to',
    'Teşhis ve Olasılık Modalleri: May, Might, Could, Must have V3',
    'Tıbbi Phrasal Verbler: Stem from, Result in, Attribute to',
    'Cümle Tamamlama Soru Çözüm Taktikleri'
  ];

  const handleSubmit = async (topicToGenerate?: string) => {
    const target = topicToGenerate || topicInput;
    if (!target.trim()) {
      setError('Lütfen bir konu veya bağlaç yazınız.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: target }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Ders oluşturulamadı. Lütfen tekrar deneyiniz.');
      }

      const newLesson: TopicLesson = await response.json();
      onLessonCreated(newLesson);
      onClose();
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Bir hata oluştu. Lütfen bağlantınızı kontrol edip tekrar deneyiniz.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">İstediğin TIPDİL Konusunu Sor</h3>
              <p className="text-xs text-slate-400">Gemini 3.8 ile anında 5 modüllü hekim formatında üretilir</p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={loading}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors disabled:opacity-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Konu Başlığı veya Sınav Yapısı:
            </label>
            <input
              type="text"
              disabled={loading}
              placeholder="Örn: Relative Clauses (Which vs In which) veya Unless vs If not"
              value={topicInput}
              onChange={(e) => {
                setTopicInput(e.target.value);
                if (error) setError(null);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !loading) {
                  handleSubmit();
                }
              }}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 placeholder-slate-400"
            />
          </div>

          {/* Quick Suggestions */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              Hızlı Önerilen Yüksek Frekanslı Konular:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {sampleSuggestions.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  disabled={loading}
                  onClick={() => {
                    setTopicInput(item);
                    handleSubmit(item);
                  }}
                  className="text-xs text-slate-700 bg-slate-100 hover:bg-teal-50 hover:text-teal-800 border border-slate-200 hover:border-teal-300 px-2.5 py-1 rounded-lg transition-colors text-left"
                >
                  + {item}
                </button>
              ))}
            </div>
          </div>

          {/* Loading Indicator */}
          {loading && (
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 flex items-center gap-3 animate-pulse">
              <Loader2 className="w-5 h-5 text-teal-600 animate-spin shrink-0" />
              <div className="text-xs text-teal-900">
                <span className="font-bold block">Hekim Formatında 5 Modül Hazırlanıyor...</span>
                <span className="text-teal-700">Hap formüller, ESP kelimeleri, vaka cümleleri ve 3 check-up sorusu derleniyor.</span>
              </div>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 flex items-center gap-2 text-xs text-rose-800">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg transition-colors disabled:opacity-50"
          >
            İptal
          </button>
          <button
            type="button"
            disabled={loading || !topicInput.trim()}
            onClick={() => handleSubmit()}
            className="flex items-center gap-1.5 px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Hazırlanıyor...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Dersi 5 Modülle Oluştur</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
