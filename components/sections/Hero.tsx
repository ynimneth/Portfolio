"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, GitBranch, Sparkles } from "lucide-react";

const metrics = [
  { value: "3+", label: "Featured projects shipped" },
  { value: "Next.js", label: "Modern frontend focus" },
  { value: "Open", label: "Internship-ready mindset" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 text-white"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.16),_transparent_26%)]" />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={16} />
            Building modern web experiences with a product mindset
          </motion.div>

          <motion.h1
            className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Yenula Nimneth
          </motion.h1>

          <motion.p
            className="mt-5 max-w-3xl text-xl leading-8 text-slate-200 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            IT undergraduate crafting polished frontends, practical software,
            and portfolio-ready product experiences.
          </motion.p>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Based in Sri Lanka and currently studying at SLIIT, I focus on
            building interfaces that feel clear, fast, and purposeful while
            steadily growing into a stronger full-stack developer.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              View Projects
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-cyan-300/35 hover:bg-white/10"
            >
              Let&apos;s Connect
            </a>

            <a
              href="/cv/Yenula-Nimneth-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-slate-200 transition hover:bg-white hover:text-slate-950"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <a
              href="https://github.com/ynimneth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <GitBranch size={16} />
              GitHub
            </a>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>Open to internships and collaborative builds</span>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_55%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_25px_80px_rgba(2,8,23,0.45)] backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-100/80">
              Snapshot
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Building the foundation for a standout engineering career.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              My current focus is building web applications that combine clean
              implementation, useful UX, and clear storytelling through code.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-slate-950/55 p-4"
                >
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-300/15 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-50">
              I learn fast, care about the final polish, and enjoy turning ideas
              into interfaces that feel intentional.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
