import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Code, Layout, Database, Wrench } from 'lucide-react';

export default function TechStack({ lang }) {
  const { techGroups } = portfolioData;

  const getGroupIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code className="w-4 h-4 text-cyan-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-indigo-400" />;
      case 'Database': return <Database className="w-4 h-4 text-cyan-300" />;
      default: return <Wrench className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="tech-stack" className="relative py-16 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto w-full text-left">
      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
        <span>SKILLS & TOOLKIT</span>
      </div>

      <div className="mb-8 sm:mb-10 max-w-2xl">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
          {lang === 'EN' ? 'Technologies I Work With' : 'Teknologi & Keahlian Saya'}
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base">
          {lang === 'EN'
            ? 'Overview of my technical skills in UI/UX design, frontend frameworks, and database management.'
            : 'Ringkasan keahlian teknis saya dalam desain UI/UX, framework frontend, dan basis data.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techGroups.map((group) => (
          <div
            key={group.id}
            className="p-6 rounded-2xl dark-card hover:border-white/20 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center">
                {getGroupIcon(group.icon)}
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {lang === 'EN' ? group.titleEn : group.titleId}
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  {group.count}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.08]">
              {group.items.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-200 select-none hover:bg-white/[0.08] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
