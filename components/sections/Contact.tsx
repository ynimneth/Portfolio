import SectionReveal from "../SectionReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-300">
              <p><span className="font-semibold text-white">Email:</span> your-email@gmail.com</p>
              <p><span className="font-semibold text-white">GitHub:</span> github.com/yourusername</p>
              <p><span className="font-semibold text-white">LinkedIn:</span> linkedin.com/in/yourusername</p>
              <p><span className="font-semibold text-white">WhatsApp:</span> +94 xx xxx xxxx</p>
              <p><span className="font-semibold text-white">Location:</span> Sri Lanka</p>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}