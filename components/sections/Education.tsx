"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import SectionReveal from "../SectionReveal";

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Education</h2>

          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: SMOOTH_EASE }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-md"
          >
            <motion.div
              animate={{ x: ["-30%", "30%", "-30%"] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.95),transparent)]"
            />
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-3 text-cyan-100">
                <GraduationCap size={20} />
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-sm text-slate-300">
                <MapPin size={14} />
                Malabe Campus, Sri Lanka
              </div>
            </div>
            <h3 className="text-2xl font-semibold">
              BSc (Hons) in Information Technology
            </h3>
            <p className="text-gray-300 mt-3">
              Sri Lanka Institute of Information Technology (SLIIT)
            </p>
            <p className="text-gray-400 mt-2">2nd Year | 2nd Semester</p>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}
