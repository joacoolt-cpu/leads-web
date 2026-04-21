"use client";

import AnimatedSection from "./AnimatedSection";

const reqs = [
  { icon: <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>, title: "Meta Business Manager Account", desc: "If you don't have one, we'll help you set it up during onboarding.", color: "bg-accent/10 border-accent/20" },
  { icon: <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>, title: "Minimum $500/month ad budget", desc: "You pay Meta directly. You have full control of your investment.", color: "bg-green-50 border-green-100" },
  { icon: <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>, title: "Email and phone to receive leads", desc: "We set up automatic alerts + Google Sheets dashboard for you.", color: "bg-sky-50 border-sky-100" },
  { icon: <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>, title: "Areas and ideal client criteria", desc: "Tell us where you operate, price range, and property type.", color: "bg-navy/10 border-navy/20" },
];

export default function Requirements() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <span className="inline-block bg-navy/10 text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Requirements</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              What You Need To <span className="gradient-text">Get Started</span>
            </h2>
            <p className="text-navy/50 text-lg leading-relaxed">
              You don&apos;t need to be a digital marketing expert. We handle all the technical stuff. You just need these basic elements.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {reqs.map((r, i) => (
              <AnimatedSection key={i} delay={i * 120} direction="left">
                <div className={`${r.color} border rounded-xl p-5 flex gap-4 items-start hover:shadow-md transition-shadow duration-300`}>
                  <div className="flex-shrink-0">{r.icon}</div>
                  <div>
                    <h4 className="font-bold text-black mb-1">{r.title}</h4>
                    <p className="text-navy/40 text-sm">{r.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
