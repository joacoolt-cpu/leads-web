"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-6">Get Started Today</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
            Ready To Receive<br />
            <span className="gradient-text">Qualified Hispanic Leads?</span>
          </h2>
          <p className="text-navy/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Book a 15-minute strategy call. We&apos;ll explain the process, analyze your area, and show you exactly how we&apos;ll generate leads for your business.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <motion.a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-white px-10 py-4 rounded-full text-lg font-bold transition-colors duration-300 shadow-xl shadow-accent/30 shimmer"
          >
            Book My Free Call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </motion.a>
        </AnimatedSection>

        <AnimatedSection delay={400} className="mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-navy/40 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              15 min, no commitment
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              No risk, pay-per-lead
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              Results in 7 days
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
