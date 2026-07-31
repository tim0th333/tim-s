import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [lang, setLang] = useState('EN'); // 'EN' or 'ID'
  const [theme, setTheme] = useState('obsidian'); // 'obsidian', 'cyber', 'violet', 'classic'
  const [toastMessage, setToastMessage] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'tech-stack', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background ambient noise grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Main Glass Floating Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        activeSection={activeSection}
      />

      {/* Page Content */}
      <main className="flex-1 z-10 flex flex-col items-center w-full">
        <Hero lang={lang} showToast={showToast} />
        <Projects lang={lang} showToast={showToast} />
        <TechStack lang={lang} />
        <Certifications lang={lang} />
        <Contact lang={lang} showToast={showToast} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
