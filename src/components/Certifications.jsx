import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Certifications({ lang }) {
  const { achievements } = portfolioData;

  return (
    <section id="certifications" className="relative py-16 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto w-full text-left">
      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
        <Award className="w-3.5 h-3.5 text-slate-400" />
        <span>Verified Certifications</span>
      </div>

      <div className="mb-8 sm:mb-10 max-w-2xl">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
          {lang === 'EN' ? 'Certifications & Achievements' : 'Sertifikasi & Penghargaan'}
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base">
          {lang === 'EN'
            ? 'Official credentials verified by HackerRank and Skilvul in programming and web development.'
            : 'Sertifikat resmi terverifikasi dari HackerRank dan Skilvul dalam pemrograman dan web.'}
        </p>
      </div>

      {/* Grid of Half-Banner Certificate Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {achievements.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl dark-card group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg border border-white/10 hover:border-cyan-400/40"
          >
            {/* Certificate Top Half Visual Banner */}
            <div className={`h-32 w-full bg-gradient-to-br ${item.color} border-b border-white/10 p-3.5 relative flex flex-col justify-between overflow-hidden`}>
              {/* Certificate Decorative Guilloche Lines */}
              <div className="absolute inset-0 opacity-15 card-dot-pattern pointer-events-none" />
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full border border-white/20 bg-white/5 blur-sm" />

              {/* Top Row: Issuer Seal */}
              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase font-bold bg-slate-950/80 px-2 py-0.5 rounded-md border border-white/10">
                  {item.issuer}
                </span>
                <span className="text-[10px] font-mono text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded-md border border-white/10">
                  {item.year}
                </span>
              </div>

              {/* Center Certificate Preview Title */}
              <div className="z-10 text-center my-auto">
                <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase block">
                  CERTIFICATE OF COMPLETION
                </span>
                <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-wide truncate">
                  {item.title}
                </h4>
                <span className="text-[9px] font-mono text-cyan-400 block mt-0.5">
                  Issued to: Timothy Sitanggang
                </span>
              </div>
            </div>

            {/* Bottom Half Details */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400">
                  Verified by <strong className="text-slate-200">{item.issuer}</strong>
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-cyan-400 font-semibold">
                <span className="text-[11px] font-mono">{item.code}</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
