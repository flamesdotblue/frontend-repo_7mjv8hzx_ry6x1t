import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    // enable smooth scrolling for hash links
    if ('scrollBehavior' in document.documentElement.style) return;
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.pageYOffset - 12;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-white font-inter text-slate-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold text-slate-900">Ocean Chalise</a>
          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#about" className="hover:text-sky-700">About</a>
            <a href="#projects" className="hover:text-sky-700">Projects</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
