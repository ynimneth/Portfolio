import { ArrowUpRight, Blocks, BriefcaseBusiness, MessageSquareMore } from "lucide-react";
import SectionReveal from "../SectionReveal";

const pillars = [
  {
    icon: Blocks,
    title: "Frontend With Structure",
    description:
      "I build interfaces with reusable components, clear hierarchy, and attention to responsive behavior.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Product-Minded Delivery",
    description:
      "My projects focus on practical use cases, from management systems to automation tools that solve real problems.",
  },
  {
    icon: MessageSquareMore,
    title: "Strong Collaboration Habits",
    description:
      "I care about readable code, clean handoff, and communicating clearly so projects stay easy to extend.",
  },
];

export default function ValueProposition() {
  return (
    <section id="value" className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">
                What I Bring
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                A portfolio shaped like a developer who cares about quality,
                ownership, and useful outcomes.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-300">
              I am still early in my career, but I approach each build with the
              habits that teams value: thoughtful implementation, clean UI,
              reliable foundations, and a willingness to keep improving.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_20px_60px_rgba(3,7,18,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-3 text-cyan-200">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.1),rgba(255,255,255,0.03))] px-6 py-5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition hover:text-white"
            >
              Explore recent projects
              <ArrowUpRight size={16} />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
