import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import {
  Code,
  Layout,
  Terminal,
  Copy,
  ArrowRight,
  Mail,
  Database,
  GraduationCap,
  MapPin
} from 'lucide-react';

export default function Hero({ lang, showToast }) {
  const { personal, services } = portfolioData;

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    showToast(lang === 'EN' ? 'Email copied to clipboard!' : 'Email telah disalin ke clipboard!');
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
      {/* Background Glow Ambient */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[320px] bg-cyan-500/10 blur-[130px] pointer-events-none -z-10" />

      {/* Main Name Heading */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl">
        {lang === 'EN' ? "Hi, I'm " : "Halo, Saya "}
        <span className="text-cyan-gradient">{personal.name}</span>
      </h1>

      {/* 2 Badges Row (Frontend Developer & UI/UX Designer) */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-white/10 text-slate-200 text-xs sm:text-sm font-semibold shadow-sm hover:border-cyan-400/40 transition-colors">
          <Code className="w-4 h-4 text-cyan-400" />
          <span>Frontend Developer</span>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-white/10 text-slate-200 text-xs sm:text-sm font-semibold shadow-sm hover:border-indigo-400/40 transition-colors">
          <Layout className="w-4 h-4 text-indigo-400" />
          <span>UI/UX Designer</span>
        </div>
      </div>

      {/* About Me Card */}
      <div className="mt-10 w-full text-left relative rounded-2xl dark-card p-6 sm:p-8 shadow-[0_16px_48px_rgba(0,0,0,0.6)] overflow-hidden">
        <div className="absolute inset-0 card-dot-pattern opacity-10 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>About Me & Background</span>
            </div>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {lang === 'EN' ? (
                <>
                  I am an Information Systems student passionate about <strong className="text-white font-semibold">UI/UX design</strong> and <strong className="text-white font-semibold">frontend web development</strong>. Experienced in building responsive, functional web interfaces using HTML, CSS, JavaScript, ReactJS, Nuxt 3, and Tailwind CSS.
                </>
              ) : (
                <>
                  Saya adalah mahasiswa Sistem Informasi yang berfokus pada <strong className="text-white font-semibold">desain UI/UX</strong> dan <strong className="text-white font-semibold">pengembangan web frontend</strong>. Berpengalaman dalam membangun antarmuka web yang responsif dan fungsional menggunakan HTML, CSS, JavaScript, ReactJS, Nuxt 3, dan Tailwind CSS.
                </>
              )}
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                {personal.university} (GPA: <strong className="text-white">{personal.gpa}</strong>)
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-400" />
                {personal.location}
              </span>
            </div>
          </div>

          <div className="flex md:flex-col gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-6">
            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-colors"
            >
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>Copy Email</span>
            </button>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3 Core Focus Cards (Only 1 set in page) */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
        {services.map((srv) => (
          <div
            key={srv.id}
            className="p-5 rounded-xl dark-card hover:border-white/20 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 mb-3 group-hover:border-cyan-400/40 group-hover:scale-105 transition-all">
              {srv.icon === 'Layout' && <Layout className="w-5 h-5 text-indigo-400" />}
              {srv.icon === 'Code' && <Code className="w-5 h-5 text-cyan-400" />}
              {srv.icon === 'Database' && <Database className="w-5 h-5 text-cyan-300" />}
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">
              {lang === 'EN' ? srv.titleEn : srv.titleId}
            </h3>
            <p className="text-xs text-slate-400 leading-normal">
              {lang === 'EN' ? srv.descEn : srv.descId}
            </p>
          </div>
        ))}
      </div>

      {/* Main CTA Buttons */}
      <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
        <a
          href="#projects"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-colors shadow-lg group"
        >
          <span>{lang === 'EN' ? 'Explore Projects' : 'Lihat Proyek'}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white/[0.06] border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-colors backdrop-blur-md"
        >
          <Mail className="w-4 h-4 text-slate-400" />
          <span>{lang === 'EN' ? 'Get in Touch' : 'Hubungi Saya'}</span>
        </a>
      </div>
    </section>
  );
}
