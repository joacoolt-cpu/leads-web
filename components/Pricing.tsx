"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Pricing() {
  return (
    <section id="precios" className="py-24 gradient-bg relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Modelo Transparente</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Solo Pagás Por <span className="gradient-text">Resultados Reales</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Sin mensualidades de gestión. Sin compromisos largos. Solo un setup inicial y pagás por cada lead calificado que recibís.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Setup */}
          <AnimatedSection delay={0} direction="up">
            <div className="bg-white/[0.06] backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center h-full flex flex-col">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-3.64m0 0l5.1-3.64m-5.1 3.64h14.58m-14.58 0a9 9 0 1118 0 9 9 0 01-18 0z" /></svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Setup Inicial</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-white">$500</span>
                <span className="text-white/40 ml-2">único</span>
              </div>
              <p className="text-white/40 text-sm mb-6 flex-grow">
                Configuración completa de tu campaña, creativos, formularios, IA de calificación y dashboard.
              </p>
              <ul className="space-y-2.5 text-left text-sm">
                {["Configuración de Meta Ads", "Diseño de creativos en español", "Formularios optimizados", "IA de calificación configurada", "Dashboard en Google Sheets"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/60">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Per Lead — Featured */}
          <AnimatedSection delay={150} direction="up">
            <div className="relative">
              <div className="absolute -inset-[2px] bg-gradient-to-r from-accent to-accent-300 rounded-2xl opacity-60 blur-sm" />
              <div className="relative bg-white/[0.08] backdrop-blur-lg border-2 border-accent/50 rounded-2xl p-8 text-center h-full flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  MODELO PRINCIPAL
                </div>
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-5 mt-2">
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Por Lead Calificado</h3>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-accent">$75–$125</span>
                  <span className="text-white/40 ml-2">/ lead</span>
                </div>
                <p className="text-white/40 text-sm mb-6 flex-grow">
                  Solo pagás por leads que cumplen los 6 criterios de calificación. Si no califica, no pagás.
                </p>
                <ul className="space-y-2.5 text-left text-sm">
                  {["Verificado por IA en español", "6 criterios de calificación", "Ficha completa con score", "Entrega en tiempo real", "Sin mínimo mensual", "Sin contrato a largo plazo"].map((item, i) => (
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
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Ad Spend</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-white">$500</span>
                <span className="text-white/40 ml-2">/ mes mín.</span>
              </div>
              <p className="text-white/40 text-sm mb-6 flex-grow">
                Vos pagás directamente a Meta. Tenés control total de tu presupuesto publicitario. Sin markup.
              </p>
              <ul className="space-y-2.5 text-left text-sm">
                {["Pago directo a Meta", "Control total de tu presupuesto", "Sin markup sobre el ad spend", "Transparencia total de costos", "Escalá cuando quieras"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/60">
                    <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
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
            <h3 className="text-white text-xl font-bold mb-6">La Matemática Que Importa</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-extrabold text-accent">10</div>
                <div className="text-white/40 text-sm mt-1">leads calificados / mes</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-accent">1–2</div>
                <div className="text-white/40 text-sm mt-1">cierres por mes</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-green-400">$7,500–$15,000</div>
                <div className="text-white/40 text-sm mt-1">en comisiones (avg)</div>
              </div>
            </div>
            <p className="text-white/30 text-sm mt-6">
              Inversión total estimada: ~$1,750/mes &rarr; Retorno potencial: 4x – 8x tu inversión
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
