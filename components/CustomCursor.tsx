"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-cursor-enabled";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 420, damping: 28, mass: 0.2 });
  const ringY = useSpring(cursorY, { stiffness: 420, damping: 28, mass: 0.2 });
  const dotX = useSpring(cursorX, { stiffness: 900, damping: 45, mass: 0.12 });
  const dotY = useSpring(cursorY, { stiffness: 900, damping: 45, mass: 0.12 });
  const [touchDevice] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(pointer: coarse)").matches
      : false
  );
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const hasTouch = window.matchMedia("(pointer: coarse)").matches;
    return !hasTouch && localStorage.getItem(STORAGE_KEY) !== "false";
  });

  useEffect(() => {
    function handleMove(event: MouseEvent) {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    }

    function handleToggle(event: Event) {
      const detail = (event as CustomEvent<{ enabled: boolean }>).detail;
      setEnabled(detail.enabled && !touchDevice);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("portfolio-cursor-toggle", handleToggle);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("portfolio-cursor-toggle", handleToggle);
    };
  }, [cursorX, cursorY, touchDevice]);

  if (touchDevice || !enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/35 bg-cyan-300/5 shadow-[0_0_35px_rgba(34,211,238,0.22)] mix-blend-screen md:block"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[91] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.85)] md:block"
      />
    </>
  );
}
