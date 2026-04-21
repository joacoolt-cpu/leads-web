"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 gradient-bg relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block bg-accent/20 text-sky-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Transparent Model</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Only Pay For <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            No management fees. No long-term commitments. Just a one-time setup and pay per qualified lead you receive.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Setup */}
          <AnimatedSection delay={0} direction="up">
            <div className="bg-white/[0.06] backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center h-full flex flex-col">
              <div className="w-14 h-14 bg-sky-500/20 rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-3.64m0 0l5.1-3.64m-5.1 3.64h14.58m-14.58 0a9 9 0 1118 0 9 9 0 01-18 0z" /></svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Initial Setup</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-white">$500</span>
                <span className="text-white/40 ml-2">one-time</span>
              </div>
              <p className="text-white/40 text-sm mb-6 flex-grow">
                Complete setup of your campaign, creatives, forms, AI qualification, and dashboard.
              </p>
              <ul className="space-y-2.5 text-left text-sm">
                {["Meta Ads configuration", "Spanish creative design", "Optimized forms", "AI qualification setup", "Google Sheets dashboard"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/60">
                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Per Lead — Featured */}
          <AnimatedSection delay={150} direction="up">
            <div className="relative">
              <div className="absolute -inset-[2px] bg-gradient-to-r from-accent to-sky-400 rounded-2xl opacity-60 blur-sm" />
              <div className="relative bg-white/[0.08] backdrop-blur-lg border-2 border-accent/50 rounded-2xl p-8 text-center h-full flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  MAIN MODEL
                </div>
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-5 mt-2">
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Per Qualified Lead</h3>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-accent">$75–$125</span>
                  <span className="text-white/40 ml-2">/ lead</span>
                </div>
                <p className="text-white/40 text-sm mb-6 flex-grow">
                  Only pay for leads that meet all 6 qualification criteria. If they don&apos;t qualify, you don&apos;t pay.
                </p>
                <ul className="space-y-2.5 text-left text-sm">
                  {["AI-verified in Spanish", "6 qualification criteria", "Complete profile with score", "Real-time delivery", "No monthly minimum", "No long-term contract"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/60">
                      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Ad Spend */}
          <AnimatedSection delay={300} direction="up">
            <div className="bg-white/[0.06] backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center h-full flex flex-col">
              <div className="w-14 h-14 bg-sky-500/20 rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Ad Spend</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-white">$500</span>
                <span className="text-white/40 ml-2">/ month min.</span>
              </div>
              <p className="text-white/40 text-sm mb-6 flex-grow">
                You pay Meta directly. Full control of your advertising budget. No markup.
              </p>
              <ul className="space-y-2.5 text-left text-sm">
                {["Direct payment to Meta", "Full budget control", "No markup on ad spend", "Total cost transparency", "Scale when you want"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/60">
                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* ROI Box */}
        <AnimatedSection className="mt-16 max-w-3xl mx-auto" delay={400}>
          <div className="bg-white/[0.06] backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-white text-xl font-bold mb-6">The Math That Matters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-extrabold text-accent">10</div>
                <div className="text-white/40 text-sm mt-1">qualified leads / month</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-accent">1–2</div>
                <div className="text-white/40 text-sm mt-1">closings per month</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-green-400">$7,500–$15,000</div>
                <div className="text-white/40 text-sm mt-1">in commissions (avg)</div>
              </div>
            </div>
            <p className="text-white/30 text-sm mt-6">
              Estimated total investment: ~$1,750/month &rarr; Potential return: 4x – 8x your investment
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
