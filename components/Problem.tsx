"use client";

import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>,
    title: "Leads en inglés = Leads perdidos",
    desc: "El 70% de hispanos prefiere hacer negocios en español. Si tu marketing es solo en inglés, estás perdiendo la mayoría del mercado.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Respuesta lenta = Lead frío",
    desc: "Si tardás más de 5 minutos en responder, la probabilidad de conversión cae un 80%. Cada segundo cuenta.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Pagás por clics, no por resultados",
    desc: "Las agencias cobran mensualidades sin garantizar leads reales. Pagás igual si convertís o no.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block bg-red-50 text-red-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">El Problema</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            El mercado hispano está <span className="text-red-500">desatendido</span>
          </h2>
          <p className="text-navy/50 mt-4 max-w-2xl mx-auto text-lg">
            La mayoría de agentes ignoran al comprador hispano. Eso es una oportunidad enorme para vos.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <AnimatedSection key={i} delay={i * 150} direction="up">
              <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-50/0 to-accent-50/0 group-hover:from-red-50 group-hover:to-orange-50/50 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">{p.title}</h3>
                  <p className="text-navy/50 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
