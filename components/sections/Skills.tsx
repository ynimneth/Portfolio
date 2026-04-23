import SectionReveal from "../SectionReveal";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Java",
  "Python",
  "MySQL",
  "Git",
  "GitHub",
  "Tailwind CSS",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-200 hover:bg-white hover:text-black transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}