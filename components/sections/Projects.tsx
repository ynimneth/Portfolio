"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Code2, ExternalLink, FolderKanban } from "lucide-react";

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    title: "Blood Bank Management System",
    description:
      "A full-stack system for managing donors, blood requests, appointments, and admin operations.",
    tech: "React, Spring Boot, MySQL",
    github: "https://github.com/ynimneth/Centralized-Blood-Donation-Management-System",
    demo: "",
    image: "/projects/blood-bank.png",
  },
  {
    title: "Music Store Web Application",
    description:
      "A web application for customers, artists, and admins to manage music, orders, and payments.",
    tech: "Java, JSP, Servlets, MySQL",
    github: "https://github.com/ynimneth/Music-Store-Web-Application",
    demo: "",
    image: "/projects/music-store.png",
  },
  {
    title: "Greenhouse Automation System",
    description:
      "An IoT-based system to monitor temperature, humidity, soil moisture, and automate greenhouse devices.",
    tech: "ESP8266, Sensors, Blynk",
    github: "https://github.com/ynimneth/Greenhouse-Automation-System",
    demo: "",
    image: "/projects/greenhouse.png",
  },
];

export default function Projects() {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: SMOOTH_EASE },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={item}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:border-cyan-300/25 hover:bg-white/10"
            >
              <div className="relative h-52 w-full overflow-hidden bg-white/5">
                <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent,rgba(2,8,23,0.55))]" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <motion.div
                  animate={{ x: ["-100%", "160%"] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                  className="absolute inset-y-0 z-20 w-20 rotate-12 bg-white/10 blur-xl"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-300 mb-3">
                  <FolderKanban size={18} />
                  <span className="text-sm">Featured Project</span>
                </div>

                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <p className="text-gray-300 mt-4 leading-7">
                  {project.description}
                </p>

                <p className="text-gray-400 mt-4 text-sm">{project.tech}</p>

                <div className="mt-6 flex gap-3 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
                  >
                    <Code2 size={16} />
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm hover:opacity-90 transition"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
