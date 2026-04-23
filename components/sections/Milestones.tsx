"use client";

import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";

const milestones = [
  {
    year: "2024",
    title: "Started building full-stack academic projects",
    description: "Worked on practical university projects and improved problem-solving skills."
  },
  {
    year: "2025",
    title: "Focused on web development and UI improvement",
    description: "Started learning React, project structuring, and modern frontend development."
  },
  {
    year: "2026",
    title: "Building a professional portfolio",
    description: "Creating a personal brand and showcasing projects, skills, and achievements."
  },
];

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Milestones</h2>

          <div className="relative space-y-6 before:absolute before:bottom-0 before:left-4 before:top-1 before:w-px before:bg-white/10 before:content-[''] md:before:left-6">
            {milestones.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ x: 4 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-[9px] top-7 h-3.5 w-3.5 rounded-full border border-cyan-200/40 bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.75)] md:left-[17px]" />
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <p className="text-sm text-gray-400">{item.year}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
