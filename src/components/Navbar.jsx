import React, { useState, useEffect } from 'react';
import { Sparkles, Globe, Sun, Menu, X, Check, Laptop, Palette, Terminal, Shield, Moon } from 'lucide-react';

export default function Navbar({ lang, setLang, theme, setTheme, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themes = [
    { id: 'obsidian', label: 'Obsidian Cyan', color: '#38bdf8' },
    { id: 'cyber', label: 'Cyber Emerald', color: '#2dd4bf' },
    { id: 'violet', label: 'Neon Violet', color: '#c084fc' },
    { id: 'classic', label: 'Pitch Dark', color: '#ffffff' },
  ];

  const navLinks = [
    { id: 'home', labelEn: 'Home', labelId: 'Beranda' },
    { id: 'projects', labelEn: 'Projects', labelId: 'Proyek' },
    { id: 'tech-stack', labelEn: 'Tech Stack', labelId: 'Keahlian' },
    { id: 'certifications', labelEn: 'Certifications', labelId: 'Sertifikasi' },
    { id: 'contact', labelEn: 'Contact', labelId: 'Kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-5 px-3 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto relative flex items-center justify-between gap-2 sm:gap-4 p-1.5 sm:p-2 rounded-full border transition-all duration-300 max-w-5xl w-full ${
          scrolled
            ? 'bg-[#0b0f19]/85 backdrop-blur-xl border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
            : 'bg-[#0b0f19]/60 backdrop-blur-md border-white/10'
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand/Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors group"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-slate-950 font-bold text-xs sm:text-sm shadow-md group-hover:scale-105 transition-transform">
            TS
          </div>
          <span className="font-bold text-sm sm:text-base text-white tracking-tight hidden xs:inline-block">
            Timothy<span className="text-cyan-400">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 select-none ${
                  isActive
                    ? 'text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white/10 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" />
                )}
                <span className="relative z-10">
                  {lang === 'EN' ? link.labelEn : link.labelId}
                </span>
              </a>
            );
          })}
        </div>

        {/* Right Actions: Theme Selector + Lang Switcher */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Theme Dropdown Toggle */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 text-xs font-medium transition-colors"
              title="Change Color Theme"
            >
              <Palette className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline-block text-[11px] capitalize">{theme}</span>
            </button>

            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-[#0e1320] border border-white/15 backdrop-blur-2xl p-1.5 shadow-2xl z-50 animate-fade-in pointer-events-auto">
                <div className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-white/10 mb-1">
                  Theme Preset
                </div>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs text-left transition-colors ${
                      theme === t.id ? 'bg-white/10 text-white font-medium' : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: t.color }} />
                      <span>{t.label}</span>
                    </div>
                    {theme === t.id && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-white/[0.05] border border-white/10 p-0.5 rounded-full">
            <button
              onClick={() => setLang('EN')}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-full transition-all ${
                lang === 'EN'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('ID')}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-full transition-all ${
                lang === 'ID'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ID
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 p-3 rounded-3xl bg-[#0b0f19]/95 border border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col gap-1 md:hidden pointer-events-auto animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {lang === 'EN' ? link.labelEn : link.labelId}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
