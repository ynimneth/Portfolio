"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, ExternalLink, FolderKanban } from "lucide-react";

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
  return (
    <section id="projects" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:scale-[1.02] hover:bg-white/10 transition duration-300"
            >
              <div className="relative h-52 w-full overflow-hidden bg-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
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
        </div>
      </div>
    </section>
  );
}