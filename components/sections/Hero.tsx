"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-white">
      <motion.h1
        className="text-5xl md:text-7xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Yenula Nimneth
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl mt-4 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        IT Undergraduate | Web Developer | AI Enthusiast
      </motion.p>

      <motion.p
        className="mt-6 max-w-2xl text-gray-400 leading-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        I am a 2nd year 2nd semester IT student at SLIIT, Sri Lanka.
        I enjoy building modern web applications, learning new technologies,
        and creating practical software solutions.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href="#projects"
          className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
        >
          Contact Me
        </a>

        <a
          href="/cv/Yenula-Nimneth-CV.pdf"
          download
          className="border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
        >
          Download CV
        </a>
      </motion.div>

      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          LinkedIn
        </a>
        <a href="https://wa.me/94xxxxxxxxx" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          WhatsApp
        </a>
        <a href="mailto:your-email@gmail.com" className="hover:text-white">
          Gmail
        </a>
      </motion.div>
    </section>
  );
}