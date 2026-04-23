import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Education from "../components/sections/Education";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Milestones from "../components/sections/Milestones";
import Contact from "../components/sections/Contact";
import SmoothAIChatbot from "../components/sections/SmoothAIChatbot";
import ValueProposition from "../components/sections/ValueProposition";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <ValueProposition />
      <Education />
      <Skills />
      <Projects />
      <Milestones />
      <Contact />
      <SmoothAIChatbot />
    </main>
  );
}
