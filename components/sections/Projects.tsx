"use client";

import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  Code2,
  ExternalLink,
  FolderKanban,
  Sparkles,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import GitHubActivity from "../GitHubActivity";

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    title: "Blood Bank Management System",
    description:
      "A full-stack system for managing donors, blood requests, appointments, and admin operations.",
    tech: "React, Spring Boot, MySQL",
    github:
      "https://github.com/ynimneth/Centralized-Blood-Donation-Management-System",
    demo: "",
    image: "/projects/blood-bank.png",
  },
  {
    title: "BURGIFY",
    description:
      "A mobile UI/UX concept for a burger ordering app with playful branding, product discovery, and a streamlined order flow.",
    tech: "Figma, UI/UX Design, Mobile App Design, Prototyping",
    github: "",
    demo: "https://figma.com/proto/xgjf5GtEhbVucaIUkfqq9f/Untitled?node-id=0-1&p=f&t=UgdmvjR8qxnS4MeC-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    image: "/projects/burgify.png",
  },
  {
    title: "Lifeline-Mobile-App",
    description:
      "A mobile application for managing fitness routines, workouts, and user progress.",
    tech: "ReactNative, Node.js, Express.js, MongoDB",
    github: "https://github.com/ynimneth/Lifeline-Mobile-App.git",
    demo: "",
    image: "/projects/greenhouse.svg",
  },
  {
    title: "Save the Sea",
    description:
      "A mobile UI/UX concept focused on ocean awareness, eco habits, and action-driven storytelling to inspire marine conservation.",
    tech: "Figma, UI/UX Design, Mobile App Design, Awareness Product Design",
    github: "",
    demo: "https://www.figma.com/proto/B3XJqq1MelAWTmumphE2Nh/Save_the_sea?node-id=5-3&p=f&t=f1SCVywexd8JZMPg-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A3&show-proto-sidebar=1",
    image: "/projects/safesea.png",
  },
  {
    title: "Shoe App UI/UX Concept",
    description:
      "A mobile shopping UI/UX concept for a sneaker app, combining bold product presentation, category browsing, and a focused purchase flow.",
    tech: "Figma, UI/UX Design, Mobile Commerce Design, Prototyping",
    github: "",
    demo: "https://www.figma.com/proto/ImpCS7GTOaFHtEPWEQhaCd/Untitled?t=TfeFPK4AJmAS6aep-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2",
    image: "/projects/shoe-app.svg",
  },
  {
    title: "Web-Based Music Store",
    description:
      "A web application for customers, artists, and admins to manage music, orders, and payments.",
    tech: "Java, JSP, Servlets, MySQL",
    github: "https://github.com/ynimneth/Web_Based_Music_Store.git",
    demo: "",
    image: "/projects/music-store.svg",
  },
  {
    title: "Fitness_Management_System",
    description:
      "A web application for managing fitness routines, workouts, and user progress.",
    tech: "Java,tailwindcss,HTML,MySQL",
    github: "https://github.com/ynimneth/Fitness_Management_System.git",
    demo: "",
    image: "/projects/greenhouse.svg",
  },
] as const;

function getProjectTags(project: (typeof projects)[number]) {
  return project.tech.split(",").map((tag) => tag.trim());
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: (typeof projects)[number];
  index: number;
  onOpen: () => void;
}) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  function handleMove(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const rotateY = ((offsetX / rect.width) - 0.5) * 12;
    const rotateX = (0.5 - offsetY / rect.height) * 10;

    setRotate({ x: rotateX, y: rotateY });
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: SMOOTH_EASE }}
      viewport={{ once: true, amount: 0.15 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      whileHover={{ y: -10 }}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:border-cyan-300/25 hover:bg-white/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_35%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative h-52 w-full overflow-hidden bg-white/5">
        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent,rgba(2,8,23,0.58))]" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

      <div className="relative p-6">
        <div className="mb-3 flex items-center gap-2 text-slate-300">
          <FolderKanban size={18} />
          <span className="text-sm">Featured Project</span>
        </div>

        <h3 className="text-2xl font-semibold">{project.title}</h3>

        <p className="mt-4 line-clamp-3 text-slate-300 leading-7">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {getProjectTags(project)
            .slice(0, 3)
            .map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300"
              >
                {tag}
              </span>
            ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
          >
            <Sparkles size={16} />
            View Details
          </button>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
            >
              <Code2 size={16} />
              GitHub
            </a>
          ) : null}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm text-black transition hover:opacity-90"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const filters = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      getProjectTags(project).forEach((tag) => tags.add(tag));
    });

    return ["All", ...Array.from(tags).slice(0, 7)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") {
      return projects;
    }

    return projects.filter((project) =>
      getProjectTags(project).includes(selectedFilter)
    );
  }, [selectedFilter]);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  return (
    <section id="projects" className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">
              Projects
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              A more interactive showcase for the products and concepts I have
              built so far.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  selectedFilter === filter
                    ? "border-cyan-300/30 bg-cyan-400/15 text-cyan-100"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/20 hover:bg-white/10 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        <GitHubActivity />
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-[#07111f]/95 shadow-[0_30px_100px_rgba(2,8,23,0.45)]"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-slate-200 transition hover:bg-white/10 hover:text-white"
                aria-label="Close project details"
              >
                <X size={18} />
              </button>

              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-72">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(2,8,23,0.7))]" />
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/80">
                    Project Detail
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-4 leading-8 text-slate-300">
                    {selectedProject.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {getProjectTags(selectedProject).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {selectedProject.github ? (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/30 hover:bg-cyan-400/10"
                      >
                        <Code2 size={16} />
                        View GitHub
                      </a>
                    ) : null}

                    {selectedProject.demo ? (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:opacity-90"
                      >
                        <ExternalLink size={16} />
                        Open Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
