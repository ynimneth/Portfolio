import SectionReveal from "../SectionReveal";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Education</h2>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
            <h3 className="text-2xl font-semibold">
              BSc (Hons) in Information Technology
            </h3>
            <p className="text-gray-300 mt-3">
              Sri Lanka Institute of Information Technology (SLIIT)
            </p>
            <p className="text-gray-400 mt-2">2nd Year | 2nd Semester</p>
            <p className="text-gray-400 mt-2">Malabe Campus, Sri Lanka</p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}