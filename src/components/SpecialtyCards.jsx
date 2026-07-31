import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layout, Code, Smartphone, Sparkles, Layers } from 'lucide-react';

export default function SpecialtyCards({ lang }) {
  const { services } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Figma':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-indigo-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-cyan-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="relative py-8 px-4 sm:px-6 max-w-5xl mx-auto w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {services.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl glass-panel group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {lang === 'EN' ? item.titleEn : item.titleId}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {lang === 'EN' ? item.descEn : item.descId}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1 text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
              <span>{lang === 'EN' ? 'Core Specialty' : 'Spesialisasi Utama'}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
