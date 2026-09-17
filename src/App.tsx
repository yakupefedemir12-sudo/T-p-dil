import React, { useState, useEffect, useRef } from 'react';
import { DEFAULT_TOPICS } from './data/defaultTopics';
import { TopicLesson, UserQuizProgress, Module2Word } from './types';
import { Header } from './components/Header';
import { TopicSelector } from './components/TopicSelector';
import { Module1FormulaView } from './components/Module1FormulaView';
import { Module2VocabView } from './components/Module2VocabView';
import { Module3SentenceView } from './components/Module3SentenceView';
import { Module4TrapsView } from './components/Module4TrapsView';
import { Module5CheckUpView } from './components/Module5CheckUpView';
import { CheatSheetModal } from './components/CheatSheetModal';
import { NotebookModal } from './components/NotebookModal';
import { CustomTopicModal } from './components/CustomTopicModal';
import { Toast } from './components/Toast';
import { formatLessonToMarkdown } from './utils/formatters';
import { Stethoscope, CheckCircle2, Award, BookOpen, Target, Key, Microscope, AlertTriangle, ArrowRight, ArrowLeft, Copy } from 'lucide-react';

const STORAGE_KEY = 'tipdil_yokdil_student_progress_v1';

export default function App() {
  const [topics, setTopics] = useState<TopicLesson[]>(DEFAULT_TOPICS);
  const [activeTopicId, setActiveTopicId] = useState<string>(DEFAULT_TOPICS[0].id);
  const [activeModuleTab, setActiveModuleTab] = useState<'m1' | 'm2' | 'm3' | 'm4' | 'm5'>('m1');

  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);
  const [isCustomTopicOpen, setIsCustomTopicOpen] = useState(false);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = (text: string, customMessage = '✅ Panoya kopyalandı! Notlarına yapıştırabilirsin.') => {
    try {
      navigator.clipboard.writeText(text);
    } catch (err) {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setToastMessage(customMessage);
    setIsToastVisible(true);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setIsToastVisible(false);
    }, 2000);
  };

  // Load user progress from localStorage or default
  const [progress, setProgress] = useState<UserQuizProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved progress', e);
    }
    return {
      answeredQuestions: {},
      completedTopics: [],
      bookmarkedWords: [],
      savedFormulas: [],
    };
  });

  // Save progress changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to persist progress', e);
    }
  }, [progress]);

  const activeTopic = topics.find((t) => t.id === activeTopicId) || topics[0];

  const handleAnswerQuestion = (questionId: string, choice: 'A' | 'B' | 'C' | 'D' | 'E') => {
    setProgress((prev) => {
      const newAnswered = { ...prev.answeredQuestions, [questionId]: choice };

      // Check if all questions of the current topic are answered
      const currentTopicQuestionIds = activeTopic.module5.map((q) => q.id);
      const allCurrentAnswered = currentTopicQuestionIds.every((id) => newAnswered[id]);

      let newCompleted = [...prev.completedTopics];
      if (allCurrentAnswered && !newCompleted.includes(activeTopic.id)) {
        newCompleted.push(activeTopic.id);
      }

      return {
        ...prev,
        answeredQuestions: newAnswered,
        completedTopics: newCompleted,
      };
    });
  };

  const handleResetQuestions = (questionIds: string[]) => {
    setProgress((prev) => {
      const newAnswered = { ...prev.answeredQuestions };
      questionIds.forEach((id) => delete newAnswered[id]);
      return {
        ...prev,
        answeredQuestions: newAnswered,
        completedTopics: prev.completedTopics.filter((id) => id !== activeTopic.id),
      };
    });
  };

  const handleSaveWord = (word: Module2Word) => {
    setProgress((prev) => {
      const exists = prev.bookmarkedWords.some((w) => w.verb.toLowerCase() === word.verb.toLowerCase());
      if (exists) return prev;
      return {
        ...prev,
        bookmarkedWords: [...prev.bookmarkedWords, word],
      };
    });
  };

  const handleRemoveWord = (verb: string) => {
    setProgress((prev) => ({
      ...prev,
      bookmarkedWords: prev.bookmarkedWords.filter((w) => w.verb.toLowerCase() !== verb.toLowerCase()),
    }));
  };

  const handleSaveFormula = (topicTitle: string, formula: string) => {
    setProgress((prev) => {
      const exists = prev.savedFormulas.some((f) => f.formula === formula);
      if (exists) return prev;
      return {
        ...prev,
        savedFormulas: [...prev.savedFormulas, { topicTitle, formula }],
      };
    });
  };

  const handleRemoveFormula = (formula: string) => {
    setProgress((prev) => ({
      ...prev,
      savedFormulas: prev.savedFormulas.filter((f) => f.formula !== formula),
    }));
  };

  const handleLessonCreated = (newLesson: TopicLesson) => {
    setTopics((prev) => [newLesson, ...prev]);
    setActiveTopicId(newLesson.id);
    setActiveModuleTab('m1');
  };

  const isFormulaSaved = progress.savedFormulas.some(
    (f) => f.formula === activeTopic.module1.primaryFormula
  );

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans">
      
      {/* Sticky Top Header */}
      <Header
        progress={progress}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onOpenNotebook={() => setIsNotebookOpen(true)}
        onOpenCustomTopic={() => setIsCustomTopicOpen(true)}
      />

      {/* Topic Switcher Bar */}
      <TopicSelector
        topics={topics}
        activeTopicId={activeTopic.id}
        onSelectTopic={(id) => {
          setActiveTopicId(id);
          setActiveModuleTab('m1');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCustomTopic={() => setIsCustomTopicOpen(true)}
        completedTopicIds={progress.completedTopics}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        
        {/* Active Topic Header Card with Friendly Medical Mentor Note */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900 text-white font-mono">
                  {activeTopic.category}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                  {activeTopic.frequencyRank}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                  {activeTopic.badge}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                {activeTopic.title}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                id="copy-full-lesson-btn"
                onClick={() => handleCopy(formatLessonToMarkdown(activeTopic))}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 rounded-xl shadow-sm border border-slate-700 transition-all cursor-pointer"
                title="Tüm Dersi Markdown formatında kopyala"
              >
                <Copy className="w-4 h-4 text-teal-400" />
                <span>📋 Tüm Dersi Kopyala</span>
              </button>

              {progress.completedTopics.includes(activeTopic.id) ? (
                <div className="flex items-center gap-1.5 px-3 py-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Check-Up Tamamlandı</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl text-xs">
                  <Award className="w-4 h-4 text-slate-400" />
                  <span>3 Check-Up Sorusu Bekliyor</span>
                </div>
              )}
            </div>
          </div>

          {/* Hekim Dayanışması & Giriş Notu */}
          <div className="mt-4 flex items-start gap-3 bg-teal-50/50 border border-teal-100/80 rounded-xl p-4">
            <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                Eğitmen Hekimden Mesaj:
              </span>
              <p className="text-sm text-slate-800 font-medium mt-0.5 leading-relaxed">
                {activeTopic.introNote}
              </p>
            </div>
          </div>

          {/* Interactive Module Tabs */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Ders Modülleri:
              </span>
              <span className="text-[11px] text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                İstediğin modüle tıkla; sayfa uzamadan sadece o içerik görüntülenir
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {[
                { id: 'm1' as const, num: '1', title: 'İşin Özü & Formül', badge: 'Hap Kural', icon: Target },
                { id: 'm2' as const, num: '2', title: 'ESP Kelimeler', badge: '4 Fiil', icon: Key },
                { id: 'm3' as const, num: '3', title: 'Cümle İskeleti', badge: 'Vaka Analizi', icon: Microscope },
                { id: 'm4' as const, num: '4', title: 'Komisyon Tuzakları', badge: '2 Tuzak', icon: AlertTriangle },
                { id: 'm5' as const, num: '5', title: 'Check-Up Soruları', badge: '3 Soru', icon: CheckCircle2 },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeModuleTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    id={`module-tab-${tab.id}`}
                    onClick={() => setActiveModuleTab(tab.id)}
                    className={`flex flex-col text-left p-3 rounded-xl border transition-all relative ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm ring-2 ring-teal-400/50'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/90'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold font-mono ${
                          isActive ? 'bg-teal-400 text-slate-950' : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {tab.num}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-1.5 py-0.2 rounded ${
                          isActive ? 'bg-slate-800 text-teal-300' : 'bg-white text-slate-500 border border-slate-200'
                        }`}
                      >
                        {tab.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-teal-400' : 'text-slate-400'}`} />
                      <span className="text-xs font-bold leading-tight line-clamp-1">{tab.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modules Single Content View Container */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          
          {activeModuleTab === 'm1' && (
            <Module1FormulaView
              formula={activeTopic.module1}
              topicTitle={activeTopic.title}
              onSaveFormula={handleSaveFormula}
              isSaved={isFormulaSaved}
              onCopy={handleCopy}
            />
          )}

          {activeModuleTab === 'm2' && (
            <Module2VocabView
              words={activeTopic.module2}
              onSaveWord={handleSaveWord}
              savedWordsList={progress.bookmarkedWords}
              onCopy={handleCopy}
            />
          )}

          {activeModuleTab === 'm3' && (
            <Module3SentenceView
              sentences={activeTopic.module3}
              onCopy={handleCopy}
            />
          )}

          {activeModuleTab === 'm4' && (
            <Module4TrapsView
              traps={activeTopic.module4}
              onCopy={handleCopy}
            />
          )}

          {activeModuleTab === 'm5' && (
            <Module5CheckUpView
              questions={activeTopic.module5}
              topicId={activeTopic.id}
              answeredQuestions={progress.answeredQuestions}
              onAnswerQuestion={handleAnswerQuestion}
              onResetQuestions={handleResetQuestions}
              onCopy={handleCopy}
            />
          )}

          {/* Module Bottom Stepper Bar */}
          <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
            {activeModuleTab !== 'm1' ? (
              <button
                id="prev-module-btn"
                onClick={() => {
                  const order = ['m1', 'm2', 'm3', 'm4', 'm5'] as const;
                  const idx = order.indexOf(activeModuleTab);
                  if (idx > 0) {
                    setActiveModuleTab(order[idx - 1]);
                    window.scrollTo({ top: 320, behavior: 'smooth' });
                  }
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Önceki Modüle Dön</span>
              </button>
            ) : (
              <div />
            )}

            {activeModuleTab !== 'm5' ? (
              <button
                id="next-module-btn"
                onClick={() => {
                  const order = ['m1', 'm2', 'm3', 'm4', 'm5'] as const;
                  const idx = order.indexOf(activeModuleTab);
                  if (idx < order.length - 1) {
                    setActiveModuleTab(order[idx + 1]);
                    window.scrollTo({ top: 320, behavior: 'smooth' });
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors"
              >
                <span>Sonraki Modüle Geç</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>
            ) : (
              <button
                id="view-cheatsheet-bottom-btn"
                onClick={() => setIsCheatSheetOpen(true)}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-sm transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Hap Formüller Tablosunu Aç</span>
              </button>
            )}
          </div>

        </div>

        {/* Motivation Banner for TUS Aspirants */}
        <div className="bg-gradient-to-r from-slate-900 to-teal-950 text-white rounded-2xl p-6 shadow-md border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-base text-teal-300">TUS Hedefine Giden Yolda TIPDİL Barajını Aş!</h4>
            <p className="text-xs text-slate-300 max-w-2xl">
              80 sorudan 40 doğru (50 Puan) almak için İngilizce edebiyatçısı olmana gerek yok. Matematiksel hap formülleri ve klinik refleksleri cebine koy, sınavda saniyeler içinde doğru şıkkı işaretle.
            </p>
          </div>
          <button
            onClick={() => setIsCheatSheetOpen(true)}
            className="shrink-0 flex items-center gap-2 px-4 py-2 bg-teal-400 hover:bg-teal-300 text-slate-950 text-xs font-bold rounded-xl transition-colors shadow-sm"
          >
            <BookOpen className="w-4 h-4" />
            <span>Formül Tablosunu Aç</span>
          </button>
        </div>

      </main>

      {/* Modals */}
      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />

      <NotebookModal
        isOpen={isNotebookOpen}
        onClose={() => setIsNotebookOpen(false)}
        savedWords={progress.bookmarkedWords}
        savedFormulas={progress.savedFormulas}
        onRemoveWord={handleRemoveWord}
        onRemoveFormula={handleRemoveFormula}
      />

      <CustomTopicModal
        isOpen={isCustomTopicOpen}
        onClose={() => setIsCustomTopicOpen(false)}
        onLessonCreated={handleLessonCreated}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} isVisible={isToastVisible} />

    </div>
  );
}
