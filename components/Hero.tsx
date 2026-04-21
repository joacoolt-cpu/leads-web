"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section className="relative min-h-screen gradient-bg overflow-hidden flex items-center">
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" style={{ animation: "float 6s ease-in-out infinite" }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl" style={{ animation: "float 8s ease-in-out infinite 2s" }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/5 rounded-full blur-3xl" style={{ animation: "float 7s ease-in-out infinite 4s" }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/90 text-sm font-medium">Leads en Español para Real Estate</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Leads Hispanos<br />
              <span className="gradient-text">Calificados</span><br />
              Para Tu Negocio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-white/60 mb-8 max-w-xl leading-relaxed"
            >
              Solo pagas por leads verificados con intención real de compra. Sin mensualidades. Sin riesgo. Cada lead llega calificado por IA y listo para agendar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a href="#contacto" className="group bg-accent hover:bg-accent-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-accent/40 text-center shimmer">
                Agendar Llamada Gratis
              </a>
              <a href="#como-funciona" className="group flex items-center justify-center gap-2 text-white/70 hover:text-white px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                Ver Cómo Funciona
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { value: 70, suffix: "%", label: "de hispanos prefieren español" },
                { value: 85, suffix: "%", label: "tasa de contacto exitoso" },
                { value: 5, prefix: "<", suffix: " min", label: "respuesta con IA" },
              ].map((s, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-accent">
                    <CountUp end={s.value} suffix={s.suffix} prefix={s.prefix} />
                  </div>
                  <div className="text-white/40 text-xs md:text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Floating Lead Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl animate-pulse" />
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-semibold">Lead Calificado — Ahora</span>
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center text-accent font-bold text-lg">RF</div>
                  <div>
                    <div className="text-white font-semibold">Roberto Fernández</div>
                    <div className="text-white/40 text-sm">Orlando, FL</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    { label: "Presupuesto", value: "$300K–400K" },
                    { label: "Plazo", value: "2–3 meses" },
                    { label: "Tipo", value: "Primera vivienda" },
                    { label: "Score", value: "92/100" },
                  ].map((f, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-2.5 border border-white/10">
                      <div className="text-white/30 text-xs">{f.label}</div>
                      <div className="text-white font-semibold text-sm">{f.value}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30">Pre-aprobado</span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium border border-accent/30">Listo para agendar</span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2"
              >
                <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <div className="text-navy text-xs font-semibold">Lead Verificado</div>
                  <div className="text-navy/40 text-[10px]">hace 2 min</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -top-4 -right-4 bg-accent rounded-xl shadow-xl p-3"
              >
                <div className="text-white text-xs font-bold">Score: 92</div>
                <div className="text-white/60 text-[10px]">Alta intención</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,60 C360,100 720,0 1080,40 C1260,60 1380,80 1440,60 L1440,80 L0,80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
