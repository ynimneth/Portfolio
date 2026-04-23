"use client";

import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">
                About Me
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                I am developing into the kind of engineer who values clarity,
                consistency, and useful software.
              </h2>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
                <p className="text-slate-300 leading-8">
                  I am Yenula Nimneth, an IT undergraduate at SLIIT with a strong
                  interest in web development, software engineering, and AI-driven
                  experiences. I enjoy building projects that solve real problems,
                  improve my technical depth, and sharpen the way I think about
                  product quality.
                </p>
                <p className="mt-5 text-slate-400 leading-8">
                  My goal is not just to make things work, but to make them feel
                  thoughtful, maintainable, and ready for real users. That balance
                  between engineering and user experience is what keeps me excited
                  about building.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <motion.div
                initial={{ opacity: 0, x: 26, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, delay: 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ x: -4 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Focus Areas
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  Frontend engineering, component-driven UI, full-stack academic
                  projects, and practical automation concepts.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 26, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, delay: 0.16 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ x: -4 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Working Style
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  I like structured code, clean interfaces, strong iteration, and
                  learning by building projects end-to-end.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 26, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, delay: 0.24 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ x: -4 }}
                className="rounded-[28px] border border-cyan-300/15 bg-cyan-400/10 p-6"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-100/80">
                  Current Goal
                </p>
                <p className="mt-4 text-lg leading-8 text-cyan-50">
                  Grow through internships, deeper full-stack work, and projects
                  that raise the quality bar every time.
                </p>
              </motion.div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
