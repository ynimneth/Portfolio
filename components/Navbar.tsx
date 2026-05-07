"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const CursorToggle = dynamic(() => import("./CursorToggle"), { ssr: false });
const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#value", label: "Value" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#milestones", label: "Journey" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 text-white">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight">
              Yenula Nimneth
            </span>
            <span className="text-xs uppercase tracking-[0.22em] text-slate-400">
              Developer Portfolio
            </span>
          </a>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-2 text-sm backdrop-blur-xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <CursorToggle />
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-cyan-100 transition hover:bg-cyan-400/20"
            >
              Contact
              <ArrowUpRight size={14} />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -12, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="mt-4 rounded-[28px] border border-white/10 bg-slate-900/80 p-4 text-sm backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-wrap gap-3">
                <CursorToggle />
                <ThemeToggle />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-slate-200 transition hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#education"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-slate-200 transition hover:bg-white/5"
                >
                  Education
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-cyan-300/15 bg-cyan-400/10 px-4 py-3 text-cyan-100 transition hover:bg-cyan-400/15"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
