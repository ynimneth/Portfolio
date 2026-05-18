import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import PageProgress from "../components/PageProgress";
import BackToTopButton from "../components/BackToTopButton";
import ClientOverlays from "../components/ClientOverlays";
import PageTransition from "../components/PageTransition";
import SectionSkeleton from "../components/SectionSkeleton";
import Hero from "../components/sections/Hero";

const About = dynamic(() => import("../components/sections/About"), {
  loading: () => <SectionSkeleton />,
});
const ValueProposition = dynamic(
  () => import("../components/sections/ValueProposition"),
  {
    loading: () => <SectionSkeleton />,
  }
);
const Education = dynamic(() => import("../components/sections/Education"), {
  loading: () => <SectionSkeleton />,
});
const Skills = dynamic(() => import("../components/sections/Skills"), {
  loading: () => <SectionSkeleton />,
});
const Projects = dynamic(() => import("../components/sections/Projects"), {
  loading: () => <SectionSkeleton />,
});
const Milestones = dynamic(() => import("../components/sections/Milestones"), {
  loading: () => <SectionSkeleton />,
});
const Contact = dynamic(() => import("../components/sections/Contact"), {
  loading: () => <SectionSkeleton />,
});

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <ClientOverlays />
      <PageProgress />
      <PageTransition />
      <Navbar />
      <Hero />
      <About />
      <ValueProposition />
      <Education />
      <Skills />
      <Projects />
      <Milestones />
      <Contact />
      <BackToTopButton />
    </main>
  );
}
