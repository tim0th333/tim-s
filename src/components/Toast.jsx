import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in pointer-events-none">
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#0e1422]/95 border border-cyan-500/40 text-white text-xs font-semibold shadow-2xl backdrop-blur-xl">
        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
        <span>{message}</span>
      </div>
    </div>
  );
}
