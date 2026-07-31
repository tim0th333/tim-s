import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MessageSquare, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Contact({ lang, showToast }) {
  const { personal } = portfolioData;

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    showToast(lang === 'EN' ? 'Email copied to clipboard!' : 'Email telah disalin ke clipboard!');
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personal.rawPhone);
    showToast(lang === 'EN' ? 'Phone number copied!' : 'Nomor HP telah disalin!');
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto w-full text-left">
      {/* Unique Modified Header Tag */}
      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
        <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
        <span>CONNECT & COLLABORATE</span>
      </div>

      <div className="mb-8 sm:mb-10 max-w-2xl">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
          {lang === 'EN' ? "Let's Build Something Great" : "Mari Membangun Solusi Bersama"}
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base">
          {lang === 'EN'
            ? 'Feel free to reach out for UI/UX design roles, frontend web development projects, or general inquiries.'
            : 'Jangan ragu untuk menghubungi saya untuk posisi desain UI/UX, proyek web frontend, atau diskusi.'}
        </p>
      </div>

      {/* Main Profile Showcase Card with Larger Portrait Photo (Request #2) */}
      <div className="p-6 sm:p-8 rounded-2xl dark-card mb-6 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {/* Timothy's Enlarged Portrait Photo (Proportionally larger: w-36 sm:w-44 h-36 sm:h-44) */}
        <img
          src="/timothy.jpg"
          alt="Timothy Sitanggang"
          className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover object-top border-2 border-cyan-400/40 shadow-2xl shrink-0"
        />

        <div className="flex-1 text-center md:text-left self-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-3">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Singaraja, Bali, Indonesia</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1.5">
            {personal.name}
          </h3>

          <p className="text-sm font-semibold text-slate-300 mb-3">
            Frontend Developer • UI/UX Designer • Information Systems Student
          </p>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
            {lang === 'EN'
              ? 'Open for frontend web engineering, UI/UX prototyping, and technology-driven digital projects.'
              : 'Terbuka untuk rekayasa web frontend, prototipe desain UI/UX, dan proyek solusi digital.'}
          </p>
        </div>
      </div>

      {/* 3 Contact Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Email Card */}
        <div className="p-5 rounded-2xl dark-card flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 mb-3">
              <Mail className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase block mb-1">
              EMAIL ADDRESS
            </span>
            <span className="text-xs sm:text-sm font-bold text-white truncate block">
              {personal.email}
            </span>
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex items-center gap-2">
            <a
              href={`mailto:${personal.email}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-colors"
            >
              <span>Send Mail</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <button
              onClick={copyEmail}
              className="px-3 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-colors"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Phone / WA Card */}
        <div className="p-5 rounded-2xl dark-card flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 mb-3">
              <Phone className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase block mb-1">
              PHONE / WHATSAPP
            </span>
            <span className="text-xs sm:text-sm font-bold text-white block">
              {personal.phone}
            </span>
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex items-center gap-2">
            <a
              href={`https://wa.me/${personal.rawPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-colors"
            >
              <span>WhatsApp</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <button
              onClick={copyPhone}
              className="px-3 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-colors"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Location Card */}
        <div className="p-5 rounded-2xl dark-card flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 mb-3">
              <MapPin className="w-5 h-5 text-indigo-400" />
            </div>
            <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase block mb-1">
              LOCATION
            </span>
            <span className="text-xs sm:text-sm font-bold text-white block">
              Singaraja, Bali, Indonesia
            </span>
          </div>

          <div className="pt-3 border-t border-white/[0.08] text-[11px] text-slate-400 italic">
            {lang === 'EN' ? 'Available for remote & relocate roles' : 'Terbuka untuk posisi remote & relokasi'}
          </div>
        </div>
      </div>
    </section>
  );
}
