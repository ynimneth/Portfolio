"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

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

          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="text-slate-300 transition hover:text-white">
              About
            </a>
            <a href="#value" className="text-slate-300 transition hover:text-white">
              Value
            </a>
            <a href="#skills" className="text-slate-300 transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="text-slate-300 transition hover:text-white">
              Projects
            </a>
            <a href="#milestones" className="text-slate-300 transition hover:text-white">
              Journey
            </a>
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
            className="rounded-lg border border-white/20 px-3 py-1 md:hidden"
          >
            Menu
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm md:hidden">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#value" onClick={() => setMenuOpen(false)}>
              Value
            </a>
            <a href="#education" onClick={() => setMenuOpen(false)}>
              Education
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#milestones" onClick={() => setMenuOpen(false)}>
              Journey
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
