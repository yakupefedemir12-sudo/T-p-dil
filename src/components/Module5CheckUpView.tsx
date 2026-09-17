import React, { useState } from 'react';
import { Module5Question } from '../types';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, Award, RotateCcw, Copy } from 'lucide-react';
import { formatQuestionToMarkdown } from '../utils/formatters';

interface Module5CheckUpViewProps {
  questions: Module5Question[];
  topicId: string;
  answeredQuestions: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>;
  onAnswerQuestion: (questionId: string, choice: 'A' | 'B' | 'C' | 'D' | 'E') => void;
  onResetQuestions: (questionIds: string[]) => void;
  onCopy: (text: string) => void;
}

export const Module5CheckUpView: React.FC<Module5CheckUpViewProps> = ({
  questions,
  topicId,
  answeredQuestions,
  onAnswerQuestion,
  onResetQuestions,
  onCopy,
}) => {
  const [revealedAnalyses, setRevealedAnalyses] = useState<Record<string, boolean>>({});

  const toggleAnalysis = (qId: string) => {
    setRevealedAnalyses((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleResetTopic = () => {
    const qIds = questions.map((q) => q.id);
    onResetQuestions(qIds);
    setRevealedAnalyses({});
  };

  const handleCopyAllQuestions = () => {
    let text = `📝 3 TIPDİL CHECK-UP SORUSU (5 ŞIKLI VE ÇÖZÜMLÜ)\n\n`;
    questions.forEach((q, i) => {
      text += `--- Soru #${i + 1} ---\n${formatQuestionToMarkdown(q)}\n\n`;
    });
    onCopy(text);
  };

  const answeredCount = questions.filter((q) => answeredQuestions[q.id]).length;
  const correctCount = questions.filter(
    (q) => answeredQuestions[q.id] === q.correctAnswer
  ).length;

  return (
    <section id="module-5-section" className="space-y-6">
      
      {/* Module Title Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-600 flex items-center justify-center font-bold text-sm">
            5
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>📝 5. SICAĞI SICAĞINA 3 TIPDİL CHECK-UP SORUSU (5 ŞIKLI)</span>
            </h2>
            <p className="text-xs text-slate-500">
              Kelime/Kalıp, Gramer/Bağlaç ve Cümle Tamamlama formatında tam TIPDİL Sağlık düzeyi
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            id="copy-all-questions-btn"
            onClick={handleCopyAllQuestions}
            title="Tüm 3 Check-Up Sorusunu ve Çözümlerini Kopyala"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all border bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
          >
            <Copy className="w-3.5 h-3.5 text-teal-600" />
            <span>Soruları Kopyala</span>
          </button>

          <div className="px-3 py-1 bg-slate-900 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-teal-400" />
            <span>Skor: {correctCount} / {questions.length} Doğru</span>
          </div>

          {answeredCount > 0 && (
            <button
              onClick={handleResetTopic}
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg text-xs flex items-center gap-1 transition-colors"
              title="Soruları Sıfırla ve Yeniden Çöz"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden sm:inline">Yeniden Çöz</span>
            </button>
          )}
        </div>
      </div>

      {/* Questions Stack */}
      <div className="space-y-6">
        {questions.map((q, qIndex) => {
          const userChoice = answeredQuestions[q.id];
          const isAnswered = !!userChoice;
          const isCorrect = userChoice === q.correctAnswer;
          const showAnalysis = isAnswered || revealedAnalyses[q.id];

          return (
            <div
              key={q.id}
              className={`bg-white border rounded-xl p-5 sm:p-6 shadow-sm transition-all ${
                !isAnswered
                  ? 'border-slate-200'
                  : isCorrect
                  ? 'border-emerald-300 ring-1 ring-emerald-200'
                  : 'border-rose-300 ring-1 ring-rose-200'
              }`}
            >
              {/* Question Header & Type Badge & Copy */}
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                    {qIndex + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    TIPDİL Soru #{qIndex + 1}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 font-mono">
                    {q.type}
                  </span>
                  <button
                    onClick={() => onCopy(formatQuestionToMarkdown(q))}
                    title="Bu Soruyu ve Çözümünü Kopyala"
                    className="p-1 text-slate-400 hover:text-teal-700 hover:bg-slate-100 rounded transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="text-sm sm:text-base font-serif text-slate-900 leading-relaxed mb-5 bg-slate-50 p-4 rounded-xl border border-slate-200/70">
                {q.questionText}
              </div>

              {/* 5 Options (A, B, C, D, E) */}
              <div className="space-y-2.5 mb-5">
                {q.options.map((opt) => {
                  const isSelected = userChoice === opt.key;
                  const isOptionCorrect = opt.key === q.correctAnswer;

                  let optClass = 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800';
                  if (isAnswered) {
                    if (isOptionCorrect) {
                      optClass = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold ring-1 ring-emerald-300';
                    } else if (isSelected) {
                      optClass = 'bg-rose-50 border-rose-400 text-rose-950 font-semibold ring-1 ring-rose-300';
                    } else {
                      optClass = 'bg-slate-50/50 border-slate-200 text-slate-500 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      disabled={isAnswered}
                      onClick={() => onAnswerQuestion(q.id, opt.key)}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm flex items-start gap-3 transition-all ${optClass}`}
                    >
                      <span
                        className={`w-6 h-6 rounded-md font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                          isAnswered && isOptionCorrect
                            ? 'bg-emerald-600 text-white'
                            : isAnswered && isSelected
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <div className="flex-1">
                        <span className="font-mono text-xs sm:text-sm">{opt.text}</span>
                        {isAnswered && opt.whyEliminatedOrCorrect && (
                          <p
                            className={`text-[11px] mt-1 font-sans ${
                              isOptionCorrect ? 'text-emerald-700 font-medium' : 'text-slate-500'
                            }`}
                          >
                            {opt.whyEliminatedOrCorrect}
                          </p>
                        )}
                      </div>
                      {isAnswered && isOptionCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {isAnswered && isSelected && !isOptionCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Status Bar & Analysis Toggle */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <div>
                  {!isAnswered ? (
                    <span className="text-xs text-slate-500 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-slate-400" />
                      <span>Cevabını seç, anında klinik analiz ve çeldirici gerekçesi açılsın.</span>
                    </span>
                  ) : isCorrect ? (
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Tebrikler Meslektaşım! Doğru Seçenek: {q.correctAnswer}</span>
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-rose-700 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>Komisyon Tuzağına Düştün! Doğru Seçenek: {q.correctAnswer}</span>
                    </span>
                  )}
                </div>

                <button
                  onClick={() => toggleAnalysis(q.id)}
                  className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                >
                  <span>{showAnalysis ? 'Detaylı Analizi Gizle' : 'Detaylı Çözümü Göster'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Comprehensive Pedagogical Analysis Box */}
              {showAnalysis && (
                <div className="mt-4 pt-4 border-t border-slate-200 space-y-3 bg-slate-50/80 -mx-5 sm:-mx-6 -mb-5 sm:-mb-6 p-5 sm:p-6 rounded-b-xl">
                  
                  {/* Correct Answer & Translation */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <div className="text-[10px] font-bold uppercase text-slate-500">DOĞRU CEVAP:</div>
                      <div className="text-base font-bold text-emerald-700 font-mono mt-0.5">
                        {q.correctAnswer} Şıkkı
                      </div>
                    </div>

                    <div className="md:col-span-2 bg-white p-3 rounded-lg border border-slate-200">
                      <div className="text-[10px] font-bold uppercase text-slate-500">TÜRKÇE ÇEVİRİSİ (Hekim Dili):</div>
                      <p className="text-xs text-slate-800 font-medium mt-0.5 leading-relaxed">
                        {q.translationTr}
                      </p>
                    </div>
                  </div>

                  {/* Rationale (Doğru Şıkkın Nedeni) */}
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-lg p-3.5">
                    <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>DOĞRU ŞIKKIN NEDENİ (Hangi Formül / İpucu Verdi?):</span>
                    </div>
                    <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                      {q.rationale}
                    </p>
                  </div>

                  {/* Distractor Analysis (Çeldirici Analizi) */}
                  <div className="bg-rose-50/60 border border-rose-200 rounded-lg p-3.5">
                    <div className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>ÇELDİRİCİ ANALİZİ (Diğer 4 Şık Neden Elenir? Komisyon Neden Koydu?):</span>
                    </div>
                    <p className="text-xs text-rose-950 leading-relaxed">
                      {q.distractorAnalysis}
                    </p>
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </section>
  );
};
