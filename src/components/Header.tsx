import React from 'react';
import { Stethoscope, BookOpen, BookmarkCheck, Award, Sparkles } from 'lucide-react';
import { UserQuizProgress } from '../types';

interface HeaderProps {
  progress: UserQuizProgress;
  onOpenCheatSheet: () => void;
  onOpenNotebook: () => void;
  onOpenCustomTopic: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  progress,
  onOpenCheatSheet,
  onOpenNotebook,
  onOpenCustomTopic,
}) => {
  const totalAnswered = Object.keys(progress.answeredQuestions).length;
  const targetThreshold = 40; // 40 correct out of 80 needed for 50 threshold

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0 shadow-inner">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white">TIPDİL & YÖKDİL SAĞLIK</span>
                <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded-full bg-teal-400/10 text-teal-300 border border-teal-400/30">
                  Tıp 3. Sınıf & Hekim Rehberi
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Gereksiz gramer jargonundan uzak, matematiksel hap formüllerle 50 Barajı (40 Doğru) Koçu
              </p>
            </div>
          </div>

          {/* Target 50 Widget & Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            
            {/* 50 Barajı Hedef Rozeti */}
            <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs">
              <Award className="w-4 h-4 text-amber-400" />
              <div>
                <span className="text-slate-400">TUS Baraj Hedefi: </span>
                <span className="font-semibold text-emerald-400">
                  {totalAnswered} / {targetThreshold} Soru Çözüldü
                </span>
              </div>
            </div>

            {/* Quick action buttons */}
            <button
              id="header-cheatsheet-btn"
              onClick={onOpenCheatSheet}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-teal-400" />
              <span>Hap Formüller</span>
            </button>

            <button
              id="header-notebook-btn"
              onClick={onOpenNotebook}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Hekim Not Defterim ({progress.bookmarkedWords.length + progress.savedFormulas.length})</span>
            </button>

            <button
              id="header-custom-topic-btn"
              onClick={onOpenCustomTopic}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-sm transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-900" />
              <span>Yeni Konu Sor</span>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};
