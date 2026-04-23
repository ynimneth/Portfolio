import SectionReveal from "../SectionReveal";

const milestones = [
  {
    year: "2024",
    title: "Started building full-stack academic projects",
    description: "Worked on practical university projects and improved problem-solving skills."
  },
  {
    year: "2025",
    title: "Focused on web development and UI improvement",
    description: "Started learning React, project structuring, and modern frontend development."
  },
  {
    year: "2026",
    title: "Building a professional portfolio",
    description: "Creating a personal brand and showcasing projects, skills, and achievements."
  },
];

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Milestones</h2>

          <div className="space-y-6">
            {milestones.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
              >
                <p className="text-sm text-gray-400">{item.year}</p>
                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-300 mt-3 leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}