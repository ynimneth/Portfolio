"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Blood Bank Management System",
    description:
      "A full-stack system for managing donors, blood requests, appointments, and admin operations.",
    tech: "React, Spring Boot, MySQL",
    github: "https://github.com/yourusername/blood-bank-project",
    demo: "#",
  },
  {
    title: "Music Store Web Application",
    description:
      "A web application for customers, artists, and admins to manage music, orders, and payments.",
    tech: "Java, JSP, Servlets, MySQL",
    github: "https://github.com/yourusername/music-store-project",
    demo: "#",
  },
  {
    title: "Greenhouse Automation System",
    description:
      "An IoT-based system to monitor temperature, humidity, soil moisture, and automate greenhouse devices.",
    tech: "ESP8266, Sensors, Blynk",
    github: "https://github.com/yourusername/greenhouse-project",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-black text-white">
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
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:scale-105 hover:bg-white/10 transition duration-300"
            >
              <div className="mb-4 h-40 rounded-xl bg-white/10 flex items-center justify-center text-gray-400 text-sm">
                Project Preview
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
                  className="border border-white/20 px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:opacity-90 transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}