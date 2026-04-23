"use client";

import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";
import { ArrowUpRight, Bot, Download, GitBranch } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">
              Contact
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Interested in working together or following the journey?
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
            >
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                I am open to internship opportunities, collaborative student
                projects, and conversations with teams that value thoughtful
                product work and clean execution.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    Location
                  </p>
                  <p className="mt-3 text-lg text-white">Sri Lanka</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    Availability
                  </p>
                  <p className="mt-3 text-lg text-white">Open to internships</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://github.com/ynimneth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/30 hover:bg-cyan-400/10"
                >
                  <GitBranch size={16} />
                  View GitHub
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="/cv/Yenula-Nimneth-CV.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white hover:text-slate-950"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.12 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="rounded-[32px] border border-cyan-300/15 bg-[linear-gradient(160deg,rgba(34,211,238,0.12),rgba(255,255,255,0.03))] p-8"
            >
              <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-3 text-cyan-100">
                <Bot size={20} />
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                Quick way to explore the portfolio
              </h3>
              <p className="mt-4 leading-8 text-slate-200">
                The AI assistant in the bottom corner can answer questions about
                projects, skills, and background instantly, which makes the site
                feel more interactive for recruiters and visitors.
              </p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/45 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Suggested prompts
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <p>What projects has Yenula built?</p>
                  <p>Which technologies does Yenula use most?</p>
                  <p>What kind of opportunities is Yenula looking for?</p>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
