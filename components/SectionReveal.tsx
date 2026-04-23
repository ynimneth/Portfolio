"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function SectionReveal({
  children,
  className,
  delay = 0,
}: SectionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 48, filter: "blur(10px)", scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 0.8, delay, ease: SMOOTH_EASE }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
