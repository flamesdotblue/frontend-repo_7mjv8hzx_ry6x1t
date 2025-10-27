import React from 'react';
import { Cpu, Globe, ShieldCheck, Zap, Code } from 'lucide-react';

const Pill = ({ children }) => (
  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
    {children}
  </span>
);

const About = () => {
  return (
    <section id="about" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">About Me</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            I’m an aspiring IT engineer passionate about blending hardware and software to solve real-world
            problems. I’ve worked on Arduino and Bluetooth projects, learned basic robotics, and am now exploring
            web development and freelancing. My goal is to become a skilled IT professional contributing to Nepal’s
            growing tech community while preparing to collaborate globally.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Key Interests</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill><Cpu size={14} className="mr-1 inline"/> IoT</Pill>
              <Pill><Zap size={14} className="mr-1 inline"/> Robotics</Pill>
              <Pill><Globe size={14} className="mr-1 inline"/> Web Development</Pill>
              <Pill><ShieldCheck size={14} className="mr-1 inline"/> Cybersecurity</Pill>
              <Pill><Code size={14} className="mr-1 inline"/> Tech Innovation</Pill>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Skills Snapshot</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-700">
              <div>
                <p className="font-medium text-slate-900">Programming</p>
                <p className="mt-1">C, C++, JavaScript, HTML, CSS, PHP (beginner)</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">Tools</p>
                <p className="mt-1">Arduino IDE, GitHub, VS Code</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">Interests</p>
                <p className="mt-1">Web Dev, IoT, Freelancing, Automation</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">Education</p>
                <p className="mt-1">+2 Science; starting BEIT soon</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-500 p-6 text-white">
          <h3 className="text-lg font-semibold">Freelancing & Goals</h3>
          <p className="mt-2 text-sky-50">
            I’m learning freelancing as a Virtual Assistant and Web Developer. My focus is to build technical and
            soft skills while pursuing my BEIT journey. Available for internships, collaborations, and projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
