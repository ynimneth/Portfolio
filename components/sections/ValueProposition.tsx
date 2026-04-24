"use client";

import { motion, type Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: ["easeOut"],
    },
  }),
};

export default function ValueProposition() {
  const items = [
    "Modern Web Development",
    "Responsive UI Design",
    "AI-based Features",
  ];

  return (
    <section className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Value Proposition
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((title, index) => (
            <motion.div
              key={title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-300 mt-3">
                This section explains the value I bring through design,
                development, and practical project building.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
