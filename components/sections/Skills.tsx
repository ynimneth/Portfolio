import { Award, ExternalLink } from "lucide-react";
import SectionReveal from "../SectionReveal";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS"
    ],
  },
  {
    title: "Backend & Logic",
    skills: [
      "Java",
      "Python",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "Workflow & Design",
    skills: [
      "Git",
      "GitHub",
      "UI/UX",
      "Component Design",
      "Responsive UI",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">
              Skills
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              A growing stack built around modern frontend development and
              practical software delivery.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
              >
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                  {group.title}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-cyan-300/20 bg-cyan-400/10 p-7 backdrop-blur-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-slate-950/40 p-3 text-cyan-100">
                  <Award size={20} />
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-cyan-200/80">
                  Certificate
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  UI/UX Competition Certificate
                </h3>
                <p className="mt-3 text-slate-200/90">
                  Recognition for participating in a UI/UX competition, reflecting
                  my interest in thoughtful interface design and user experience.
                </p>
              </div>

              <a
                href="/certificates/ui-ux-competition-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-100"
              >
                View Certificate
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
