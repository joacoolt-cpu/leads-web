"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    num: "01", title: "Lead Capture", color: "from-accent to-accent-600",
    desc: "We create 100% Spanish Meta Ads campaigns targeting Hispanic buyers in your area. The lead fills out an optimized form on Facebook/Instagram.",
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  },
  {
    num: "02", title: "AI Qualification", color: "from-sky-400 to-sky-500",
    desc: "Our AI agent contacts the lead in Spanish in less than 5 minutes. It verifies intent, budget, area, timeline, and valid contact info.",
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A18.022 18.022 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632" /></svg>,
  },
  {
    num: "03", title: "Lead Scored", color: "from-green-500 to-emerald-600",
    desc: "Each lead receives a score from 0-100. We only send you leads that pass all 6 qualification criteria with a complete profile.",
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
  },
  {
    num: "04", title: "Instant Delivery", color: "from-navy to-navy-600",
    desc: "You receive the lead in real-time via email and your Google Sheets dashboard. Name, phone, budget — everything ready for your call.",
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-navy/50 mt-4 max-w-2xl mx-auto text-lg">
            From ad to qualified lead in less than 5 minutes. You only talk to people who really want to buy.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 150} direction="up">
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-100 h-full"
              >
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg group-hover:bg-accent transition-colors duration-300">
                  {step.num}
                </div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{step.title}</h3>
                <p className="text-navy/50 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
