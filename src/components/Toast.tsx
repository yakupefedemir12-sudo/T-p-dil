import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
  isVisible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  if (!isVisible || !message) return null;

  return (
    <div
      id="clipboard-toast"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-slate-900/95 text-white px-4 py-3 rounded-xl shadow-2xl border border-emerald-500/40 backdrop-blur-md transition-all animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100">
        {message}
      </span>
    </div>
  );
};
