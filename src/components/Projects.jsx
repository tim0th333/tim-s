import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, FigmaIcon } from './Icons';
import { FolderGit2, ExternalLink, Barcode, Calendar, ShieldAlert, RefreshCw } from 'lucide-react';

export default function Projects({ lang }) {
  const { projects } = portfolioData;

  const renderLogoGraphic = (id) => {
    switch (id) {
      case 'scanbar':
        return (
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <Barcode className="w-7 h-7" />
            </div>
            <span className="font-mono text-xs text-white font-bold tracking-wider uppercase">SCANBAR</span>
          </div>
        );
      case 'harmony-event':
        return (
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
              <Calendar className="w-7 h-7" />
            </div>
            <span className="font-mono text-xs text-white font-bold tracking-wider uppercase">HARMONY EVENT</span>
          </div>
        );
      case 'siagakontak':
        return (
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-400/30 flex items-center justify-center text-rose-400">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <span className="font-mono text-xs text-white font-bold tracking-wider uppercase">SIAGA KONTAK</span>
          </div>
        );
      case 'tukarjasa':
        return (
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <RefreshCw className="w-7 h-7" />
            </div>
            <span className="font-mono text-xs text-white font-bold tracking-wider uppercase">TUKAR JASA</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-16 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto w-full text-left">
      {/* Modified Unique Tag Header */}
      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
        <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
        <span>HIGHLIGHTED PORTFOLIO PROJECTS</span>
      </div>

      <div className="mb-8 sm:mb-10 max-w-2xl">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
          {lang === 'EN' ? 'Crafted Solutions & Work' : 'Karya & Proyek Terpilih'}
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base">
          {lang === 'EN'
            ? 'A showcase of my recent frontend web engineering, UI/UX design prototypes, and cloud integrations.'
            : 'Menampilkan proyek rekayasa web frontend, prototipe desain UI/UX, dan integrasi cloud.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl dark-card hover:border-white/20 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden group"
          >
            <div className="h-36 sm:h-40 w-full bg-[#121216]/90 border-b border-white/[0.08] relative flex items-center justify-center p-6 group-hover:bg-[#16161c] transition-colors duration-300 overflow-hidden">
              <div className="absolute inset-0 card-dot-pattern opacity-20 pointer-events-none" />
              {renderLogoGraphic(project.id)}
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono tracking-wide uppercase">
                    {lang === 'EN' ? project.categoryNameEn : project.categoryNameId}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {lang === 'EN' ? project.summaryEn : project.summaryId}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[12px] font-medium text-slate-300 select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Link Bar */}
            <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300 mt-auto z-10">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>GitHub</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-cyan-300 text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{lang === 'EN' ? 'Live Project' : 'Lihat Proyek'}</span>
                </a>
              )}

              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-purple-300 text-purple-400 transition-colors"
                >
                  <FigmaIcon className="w-3.5 h-3.5 text-purple-400" />
                  <span>Figma Prototype</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
