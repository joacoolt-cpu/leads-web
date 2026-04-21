"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "4x–8x", label: "Average client ROI" },
  { value: "< 5 min", label: "AI response time" },
  { value: "92%", label: "Successful contact rate" },
  { value: "$75–125", label: "Cost per qualified lead" },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Real Numbers</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Results That <span className="gradient-text">Speak</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 100} direction="up">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-accent mb-2">{s.value}</div>
                <div className="text-navy/40 text-sm">{s.label}</div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
