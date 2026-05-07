"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  BookOpenCheck,
  Code2,
  GraduationCap,
  Layers3,
  PencilRuler,
} from "lucide-react";
import { useRef } from "react";
import SectionReveal from "../SectionReveal";

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

const milestones = [
  {
    year: "2018",
    title: "Completed GCE Ordinary Level at MO/Buduruwagala M.V",
    description:
      "Reached an important school milestone by successfully completing Ordinary Level studies.",
    icon: BookOpenCheck,
  },
  {
    year: "2023",
    title: "Completed GCE Advanced Level at Mo/Malwattawela C.C",
    description:
      "Finished Advanced Level studies in the Physical Science stream and strengthened analytical thinking.",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Joined SLIIT and started IT degree",
    description:
      "Began my higher studies journey at SLIIT and started BSc (Hons) in Information Technology degree program.",
    icon: Layers3,
  },
  {
    year: "2025",
    title: "Focused on web development and UI/UX projects",
    description:
      "Put more attention on frontend craft, responsive interfaces, and cleaner user experience decisions.",
    icon: PencilRuler,
  },
  {
    year: "2026",
    title: "Continuing advanced full-stack projects",
    description:
      "Continuing to grow through more advanced full-stack work with stronger project structure and implementation quality.",
    icon: Code2,
  },
] as const;

export default function Milestones() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 20%"],
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const leftGlowY = useTransform(scrollYProgress, [0, 1], [30, -70]);
  const rightGlowY = useTransform(scrollYProgress, [0, 1], [60, -40]);

  return (
    <section
      ref={sectionRef}
      id="milestones"
      className="relative overflow-hidden px-6 py-24 text-white"
    >
      <motion.div
        style={{ y: leftGlowY }}
        className="pointer-events-none absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <motion.div
        style={{ y: rightGlowY }}
        className="pointer-events-none absolute right-[-7rem] top-48 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">
              Journey
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Milestones that show how my academic path evolved into practical
              product building.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
              This timeline combines education, project growth, and technical
              focus into a more polished story of progression.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-2 left-4 top-2 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
            <motion.div
              style={{ height: beamHeight }}
              className="absolute left-4 top-2 w-px bg-[linear-gradient(180deg,rgba(34,211,238,0),rgba(34,211,238,0.95),rgba(96,165,250,0.7),rgba(34,211,238,0))] shadow-[0_0_20px_rgba(34,211,238,0.55)] md:left-1/2 md:-translate-x-1/2"
            />

            <div className="space-y-6 md:space-y-10">
              {milestones.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -48 : 48,
                    y: 22,
                    filter: "blur(10px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: SMOOTH_EASE,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`relative pl-12 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${
                    index % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <div className="absolute left-[9px] top-10 z-10 h-3.5 w-3.5 rounded-full border border-cyan-200/40 bg-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.8)] md:left-1/2 md:-translate-x-1/2" />

                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.01,
                      transition: { duration: 0.28, ease: "easeOut" },
                    }}
                    className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_70px_rgba(2,8,23,0.28)] backdrop-blur-xl md:p-7"
                  >
                    <motion.div
                      animate={{ x: ["-24%", "24%", "-24%"] }}
                      transition={{
                        duration: 8 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.85),transparent)]"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.12),_transparent_36%)]" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex rounded-full border border-cyan-300/15 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100">
                          {item.year}
                        </div>
                        <h3 className="mt-4 text-xl font-semibold leading-8 text-white md:text-2xl">
                          {item.title}
                        </h3>
                      </div>

                      <motion.div
                        whileHover={{ rotate: 6, scale: 1.06 }}
                        className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-3 text-cyan-100 shadow-lg shadow-cyan-950/30"
                      >
                        <item.icon size={18} />
                      </motion.div>
                    </div>

                    <p className="relative mt-4 max-w-xl leading-7 text-slate-300">
                      {item.description}
                    </p>

                    <div className="relative mt-5 flex items-center gap-3 text-sm text-slate-400">
                      <span className="h-px w-10 bg-gradient-to-r from-cyan-300/60 to-transparent" />
                      {index === milestones.length - 1
                        ? "Current direction"
                        : "Growth milestone"}
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
