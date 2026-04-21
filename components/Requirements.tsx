"use client";

import AnimatedSection from "./AnimatedSection";

const reqs = [
  { icon: "📱", title: "Cuenta de Meta Business Manager", desc: "Si no tenés una, te ayudamos a crearla en la llamada de onboarding.", color: "bg-blue-50 border-blue-100" },
  { icon: "💳", title: "Presupuesto mínimo de $500/mes para ads", desc: "Pagás directamente a Meta. Tenés control total de tu inversión.", color: "bg-green-50 border-green-100" },
  { icon: "📧", title: "Email y teléfono para recibir leads", desc: "Te configuramos alertas automáticas + dashboard de Google Sheets.", color: "bg-orange-50 border-orange-100" },
  { icon: "🏠", title: "Zonas y criterios de tu cliente ideal", desc: "Nos decís en qué áreas operás, rango de precio, y tipo de propiedad.", color: "bg-purple-50 border-purple-100" },
];

export default function Requirements() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <span className="inline-block bg-navy/10 text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Requisitos</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
              Lo Que Necesitás Para <span className="gradient-text">Empezar</span>
            </h2>
            <p className="text-navy/50 text-lg leading-relaxed">
              No necesitás ser experto en marketing digital. Nosotros manejamos toda la parte técnica. Solo necesitás estos elementos básicos.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {reqs.map((r, i) => (
              <AnimatedSection key={i} delay={i * 120} direction="left">
                <div className={`${r.color} border rounded-xl p-5 flex gap-4 items-start hover:shadow-md transition-shadow duration-300`}>
                  <div className="text-2xl flex-shrink-0">{r.icon}</div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">{r.title}</h4>
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
