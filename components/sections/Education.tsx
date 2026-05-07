"use client";

import { motion } from "framer-motion";
import {
  Atom,
  BadgeCheck,
  Beaker,
  BookOpenCheck,
  Calculator,
  GraduationCap,
  Landmark,
  Sparkles,
} from "lucide-react";
import SectionReveal from "../SectionReveal";

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

const educationMilestones = [
  {
    title: "Grade 5 Scholarship Examination",
    subtitle: "Academic Milestone",
    result: "Passed",
    description:
      "Successfully passed the Grade 5 Scholarship Examination.",
    icon: Sparkles,
    accent:
      "border-emerald-300/20 bg-emerald-400/10 text-emerald-100 shadow-emerald-500/10",
  },
  {
    title: "GCE Ordinary Level (O/L)",
    subtitle: "General Certificate of Education",
    result: "Passed",
    description: "Completed Ordinary Level studies successfully.",
    icon: BookOpenCheck,
    accent:
      "border-sky-300/20 bg-sky-400/10 text-sky-100 shadow-sky-500/10",
  },
  {
    title: "GCE Advanced Level (A/L)",
    subtitle: "Physical Science Stream",
    result: "Completed",
    description:
      "Focused on analytical and science-based subjects in the Physical Science stream.",
    icon: Atom,
    accent:
      "border-violet-300/20 bg-violet-400/10 text-violet-100 shadow-violet-500/10",
    subjects: [
      {
        name: "Combined Mathematics",
        grade: "C",
        icon: Calculator,
      },
      {
        name: "Physics",
        grade: "C",
        icon: Atom,
      },
      {
        name: "Chemistry",
        grade: "S",
        icon: Beaker,
      },
    ],
  },
] as const;

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">
              Education
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              A steady academic path built on discipline, science, and growing
              technical depth.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
              From early academic achievements to my current IT degree, each
              stage reflects progress in both fundamentals and specialized
              learning.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: SMOOTH_EASE }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-[32px] border border-cyan-300/15 bg-white/[0.05] p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl"
            >
              <motion.div
                animate={{ x: ["-30%", "30%", "-30%"] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.95),transparent)]"
              />
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-3 text-cyan-100">
                    <GraduationCap size={22} />
                  </div>
                  <p className="mt-5 text-sm uppercase tracking-[0.22em] text-cyan-200/80">
                    Current Studies
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                    BSc Honours in Information Technology
                  </h3>
                  <p className="mt-3 text-lg text-slate-200">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-sm text-slate-300">
                  <Landmark size={15} />
                  Undergraduate
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-slate-300 leading-8">
                Currently following a Bachelor of Science Honours in Information
                Technology, building a stronger foundation in software
                development, systems thinking, and practical project work.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-950/35 p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                    Status
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    Currently Studying
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/35 p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                    Institute
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">SLIIT</p>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <div className="absolute left-6 top-6 bottom-6 hidden w-px bg-gradient-to-b from-cyan-300/50 via-white/15 to-transparent md:block" />
              <div className="grid gap-5">
                {educationMilestones.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, x: 28, filter: "blur(8px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.65,
                        delay: index * 0.1,
                        ease: SMOOTH_EASE,
                      }}
                      viewport={{ once: true, amount: 0.25 }}
                      whileHover={{ x: -4, y: -2 }}
                      className="relative rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                    >
                      <div className="flex flex-col gap-5 md:flex-row md:items-start">
                        <div className="relative md:pl-10">
                          <div
                            className={`inline-flex rounded-2xl border p-3 shadow-lg ${item.accent}`}
                          >
                            <Icon size={18} />
                          </div>
                          <div className="mt-4 flex items-center gap-3">
                            <h3 className="text-xl font-semibold text-white">
                              {item.title}
                            </h3>
                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
                              {item.result}
                            </span>
                          </div>
                          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
                            {item.subtitle}
                          </p>
                          <p className="mt-4 leading-7 text-slate-300">
                            {item.description}
                          </p>

                          {"subjects" in item ? (
                            <div className="mt-5 grid gap-3 sm:grid-cols-3">
                              {item.subjects.map((subject) => {
                                const SubjectIcon = subject.icon;

                                return (
                                  <div
                                    key={subject.name}
                                    className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-cyan-400/10"
                                  >
                                    <div className="flex items-center justify-between gap-3">
                                      <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2 text-cyan-100">
                                        <SubjectIcon size={16} />
                                      </div>
                                      <span className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-100">
                                        {subject.grade}
                                      </span>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-slate-200">
                                      {subject.name}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
            <BadgeCheck size={16} className="text-cyan-200" />
            Qualifications are presented from foundational milestones to current higher studies.
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
