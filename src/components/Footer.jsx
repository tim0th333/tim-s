import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ArrowUp, Mail } from 'lucide-react';

export default function Footer({ lang }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-[#07090e]/80 backdrop-blur-md py-10 px-4 sm:px-6 mt-16 text-slate-400 text-xs">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-white">Timothy Sitanggang</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono">
              Portfolio 2026
            </span>
          </div>
          <p className="text-slate-400 text-center sm:text-left text-[11px]">
            {lang === 'EN'
              ? 'UI/UX Designer & Frontend Developer • Universitas Pendidikan Ganesha'
              : 'Desainer UI/UX & Pengembang Frontend • Universitas Pendidikan Ganesha'}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-2 rounded-full bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-slate-300 text-xs transition-colors"
        >
          <span>{lang === 'EN' ? 'Back to top' : 'Ke Atas'}</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>

      <div className="mt-8 text-center text-[11px] text-slate-400 border-t border-white/5 pt-4">
        © {new Date().getFullYear()} Timothy Sitanggang. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}
