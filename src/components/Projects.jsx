import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Arduino Bluetooth Car',
    desc: 'A DIY car controlled via smartphone using the HC-05 Bluetooth module. Built to learn embedded control and real-time communication.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Wireless Chat System (HC-05)',
    desc: 'Two Arduino boards communicate wirelessly using Bluetooth, enabling a simple console-based chat.',
    img: 'https://images.unsplash.com/photo-1555617981-dac3880fdd3f?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Personal Study Dashboard',
    desc: 'A web-based dashboard to plan study sessions, track tasks, and visualize progress. Frontend-first prototype.',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-sky-50/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-600">Hands-on builds that blend hardware, software, and problem-solving.</p>
          </div>
          <a
            href="https://github.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
          >
            <Github size={16}/> View GitHub
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative h-44 w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-4">
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-3 py-2 text-sm text-white transition hover:bg-sky-700"
                  >
                    Learn More <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
