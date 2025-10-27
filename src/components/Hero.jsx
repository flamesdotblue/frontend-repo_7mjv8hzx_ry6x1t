import React from 'react';
import Spline from '@splinetool/react-spline';
import { Linkedin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-white to-sky-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle top gradient for text readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 md:py-32">
        <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-inset ring-sky-200">
          Ocean Chalise • Nepal
        </span>
        <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
          Hi, I’m Ocean Chalise 👋 —
          <br />
          <span className="text-sky-700">Aspiring IT Engineer & Tech Enthusiast.</span>
        </h1>
        <p className="max-w-2xl text-base text-slate-600 md:text-lg">
          Exploring the world of technology, innovation, and freelancing.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            View My Projects <ArrowRight size={18} />
          </a>
          <a
            href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            <Linkedin size={18} /> Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
