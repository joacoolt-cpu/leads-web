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
            <span className="inline-block bg-green-50 text-green-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Ejemplo Real</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
              Así Se Ve Un <span className="gradient-text">Lead Calificado</span>
            </h2>
            <p className="text-navy/50 text-lg leading-relaxed mb-8">
              Cada lead que recibís llega con toda la información que necesitás para cerrar la venta. Verificado por IA, con puntaje, y listo para tu primer contacto.
            </p>
            <div className="space-y-3">
              {[
                "Nombre y teléfono verificado",
                "Zona de interés y presupuesto",
                "Plazo de compra (urgencia)",
                "Tipo de propiedad buscada",
                "Score de calificación (0-100)",
                "Opt-in confirmado",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-navy/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-navy/30 text-sm mt-6">Hacé clic en la tarjeta para ver el reverso</p>
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
                      <span className="text-green-400 text-sm font-medium">Lead Calificado</span>
                    </div>
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold">Score: 92</span>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center text-accent font-bold text-xl">RF</div>
                    <div>
                      <div className="text-white font-bold text-lg">Roberto Fernández</div>
                      <div className="text-white/40 text-sm">Orlando, FL</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { l: "Presupuesto", v: "$300K – $400K" },
                      { l: "Plazo", v: "2 – 3 meses" },
                      { l: "Tipo", v: "Primera vivienda" },
                      { l: "Idioma", v: "Español" },
                    ].map((f, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3">
                        <div className="text-white/30 text-xs mb-1">{f.l}</div>
                        <div className="text-white font-semibold text-sm">{f.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30">Pre-aprobado</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/30">Opt-in OK</span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-center">
                    <span className="text-white/20 text-xs">Toca para ver más</span>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-500 to-accent-600 rounded-2xl p-6 shadow-2xl" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                  <div className="text-white">
                    <h4 className="font-bold text-lg mb-4">Notas de IA</h4>
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      &quot;Roberto expresó fuerte interés en propiedades de 3 habitaciones en Kissimmee. Ya tiene pre-aprobación. Busca activamente y quiere agendar visitas este fin de semana.&quot;
                    </p>
                    <div className="border-t border-white/20 pt-3">
                      <p className="font-semibold text-sm mb-2">Criterios Verificados:</p>
                      <div className="grid grid-cols-2 gap-1.5 text-xs text-white/80">
                        {["Intención de compra", "Área definida", "Presupuesto claro", "Plazo definido", "Contacto válido", "Opt-in confirmado"].map((c, i) => (
                          <span key={i}>&#10003; {c}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/20 text-center">
                      <span className="text-white/50 text-xs">Toca para volver</span>
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
