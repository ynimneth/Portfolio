import SectionReveal from "../SectionReveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
            <p className="text-gray-300 leading-8">
              I am Yenula Nimneth, an IT undergraduate at SLIIT. I am interested in
              web development, software engineering, UI design, and AI technologies.
              I enjoy building projects that solve real-world problems and help me
              grow as a developer.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}