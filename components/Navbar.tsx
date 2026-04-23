"use client";

import { useEffect, useState } from "react";

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
        scrolled ? "bg-black/80 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 text-white">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">Yenula Nimneth</h1>

          <div className="hidden md:flex gap-6 text-sm items-center">
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#education" className="hover:text-gray-300">Education</a>
            <a href="#skills" className="hover:text-gray-300">Skills</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
            <a href="#milestones" className="hover:text-gray-300">Milestones</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden border border-white/20 px-3 py-1 rounded-lg"
          >
            Menu
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 text-sm bg-white/5 border border-white/10 rounded-xl p-4">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#milestones" onClick={() => setMenuOpen(false)}>Milestones</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}