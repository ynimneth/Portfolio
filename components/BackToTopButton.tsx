"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 22,
    mass: 0.3,
  });
  const opacity = useTransform(progress, [0, 0.12], [0, 1]);
  const scale = useTransform(progress, [0, 0.12], [0.9, 1]);

  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ opacity, scale }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 left-5 z-[65] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-950/75 text-slate-100 shadow-[0_20px_40px_rgba(2,8,23,0.35)] backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-cyan-400/15 hover:text-cyan-100"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </motion.button>
  );
}
