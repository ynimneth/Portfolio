import SectionReveal from "../SectionReveal";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend & Logic",
    skills: ["Java", "Python", "MySQL"],
  },
  {
    title: "Workflow",
    skills: ["Git", "GitHub", "Responsive UI", "Component Design"],
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
        </SectionReveal>
      </div>
    </section>
  );
}
