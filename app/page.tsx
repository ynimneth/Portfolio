import Navbar from "../components/Navbar";
import PageProgress from "../components/PageProgress";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Education from "../components/sections/Education";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Milestones from "../components/sections/Milestones";
import Contact from "../components/sections/Contact";
import ValueProposition from "../components/sections/ValueProposition";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <PageProgress />
      <Navbar />
      <Hero />
      <About />
      <ValueProposition />
      <Education />
      <Skills />
      <Projects />
      <Milestones />
      <Contact />
    </main>
  );
}
