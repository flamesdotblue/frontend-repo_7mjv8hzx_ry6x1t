import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello Ocean — from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:ocean@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Get In Touch</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Available for internships, collaborations, and projects. Let’s build something meaningful.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-sky-400 focus:ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-sky-400 focus:ring"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-sky-400 focus:ring"
                  placeholder="Write your message..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2 font-medium text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                Send Message <Send size={18} />
              </button>
            </div>
          </form>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Connect</h3>
              <p className="mt-2 text-slate-600">Find me on social platforms and say hello.</p>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <a
                  href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-100"
                >
                  <Linkedin size={18}/> LinkedIn
                </a>
                <a
                  href="https://github.com/" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-100"
                >
                  <Github size={18}/> GitHub
                </a>
                <a
                  href="https://instagram.com/" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-100"
                >
                  <Instagram size={18}/> Instagram
                </a>
                <a
                  href="mailto:ocean@example.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-100"
                >
                  <Mail size={18}/> Email
                </a>
              </div>
            </div>

            <footer className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
              <p>© 2025 Ocean Chalise — Built with passion and curiosity.</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
