"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function LeadCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="lead-card" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <AnimatedSection direction="right">
            <span className="inline-block bg-green-50 text-green-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Real Example</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              This Is What A <span className="gradient-text">Qualified Lead</span> Looks Like
            </h2>
            <p className="text-navy/50 text-lg leading-relaxed mb-8">
              Every lead you receive comes with all the information you need to close the sale. AI-verified, scored, and ready for your first contact.
            </p>
            <div className="space-y-3">
              {[
                "Verified name and phone",
                "Area of interest and budget",
                "Purchase timeline (urgency)",
                "Property type sought",
                "Qualification score (0-100)",
                "Confirmed opt-in",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-navy/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-navy/30 text-sm mt-6">Click on the card to see the back</p>
          </AnimatedSection>

          {/* Flippable Card */}
          <AnimatedSection direction="left" delay={200}>
            <div
              className="relative cursor-pointer mx-auto max-w-sm"
              style={{ perspective: "1200px" }}
              onClick={() => setFlipped(!flipped)}
            >
              <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative"
              >
                {/* Front */}
                <div className="bg-gradient-to-br from-navy via-navy-500 to-navy-600 rounded-2xl p-6 shadow-2xl" style={{ backfaceVisibility: "hidden" }}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-400 text-sm font-medium">Qualified Lead</span>
                    </div>
                    <span className="bg-accent/20 text-sky-400 px-3 py-1 rounded-full text-xs font-bold">Score: 92</span>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center text-sky-400 font-bold text-xl">RF</div>
                    <div>
                      <div className="text-white font-bold text-lg">Roberto Fernandez</div>
                      <div className="text-white/40 text-sm">Orlando, FL</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { l: "Budget", v: "$300K – $400K" },
                      { l: "Timeline", v: "2 – 3 months" },
                      { l: "Type", v: "First home" },
                      { l: "Language", v: "Spanish" },
                    ].map((f, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3">
                        <div className="text-white/30 text-xs mb-1">{f.l}</div>
                        <div className="text-white font-semibold text-sm">{f.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30">Pre-approved</span>
                    <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-medium border border-sky-500/30">Opt-in OK</span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-center">
                    <span className="text-white/20 text-xs">Tap to see more</span>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-500 to-accent-600 rounded-2xl p-6 shadow-2xl" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                  <div className="text-white">
                    <h4 className="font-bold text-lg mb-4">AI Notes</h4>
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      &quot;Roberto expressed strong interest in 3-bedroom properties in Kissimmee. Already has pre-approval. Actively searching and wants to schedule viewings this weekend.&quot;
                    </p>
                    <div className="border-t border-white/20 pt-3">
                      <p className="font-semibold text-sm mb-2">Verified Criteria:</p>
                      <div className="grid grid-cols-2 gap-1.5 text-xs text-white/80">
                        {["Purchase intent", "Defined area", "Clear budget", "Defined timeline", "Valid contact", "Confirmed opt-in"].map((c, i) => (
                          <span key={i}>&#10003; {c}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/20 text-center">
                      <span className="text-white/50 text-xs">Tap to go back</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
