"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function PageProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.25,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed left-0 top-0 z-[70] h-[3px] w-full bg-[linear-gradient(90deg,#22d3ee,#60a5fa,#f8fafc)] shadow-[0_0_22px_rgba(34,211,238,0.6)]"
    />
  );
}
