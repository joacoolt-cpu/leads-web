"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  { q: "What is a 'qualified lead'?", a: "A qualified lead meets 6 criteria verified by our AI: confirmed purchase intent, defined geographic area, clear budget, purchase timeline, valid contact (phone + name), and confirmed opt-in. If they don't meet all criteria, we don't send them to you or charge you." },
  { q: "Who pays for the Meta ads?", a: "You pay Meta directly from your own Business Manager account. We manage the campaigns using Partner Access (no password sharing). We recommend a minimum of $500/month." },
  { q: "Do I need experience with Meta Ads?", a: "No. We handle everything: strategy, creatives, Spanish copy, forms, and optimization. You just need to give us Partner access to your Meta account." },
  { q: "How do I receive the leads?", a: "Each qualified lead is delivered in real-time via email with a complete profile + your Google Sheets dashboard where you can see all your leads with score, data, and status." },
  { q: "How many leads can I expect per month?", a: "With $500 in ad spend, you typically get 8-15 qualified leads per month, depending on your area and competition. You can scale by increasing your budget." },
  { q: "Is there a long-term contract?", a: "No. The $500 setup is one-time and the pay-per-lead model has no minimum contract. If you want to pause or cancel, just pause your ads." },
  { q: "What areas do you cover?", a: "All across the United States, focusing on markets with high Hispanic populations: Florida, Texas, California, Arizona, Nevada, North Carolina, Georgia, and more." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 relative">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block bg-navy/10 text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Frequently Asked Questions</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">Everything You Need To Know</h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 60} direction="up">
              <div className={`bg-white rounded-xl border transition-all duration-300 ${open === i ? "border-accent/30 shadow-lg shadow-accent/5" : "border-gray-100 hover:border-gray-200"}`}>
                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <span className={`font-semibold pr-4 transition-colors ${open === i ? "text-accent" : "text-black"}`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${open === i ? "bg-accent text-white" : "bg-gray-100 text-navy"}`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-navy/50 leading-relaxed">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
