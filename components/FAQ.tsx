"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  { q: "¿Qué es un 'lead calificado'?", a: "Un lead calificado cumple 6 criterios verificados por nuestra IA: intención de compra confirmada, área geográfica definida, presupuesto claro, plazo de compra, contacto válido (teléfono + nombre), y opt-in confirmado. Si no cumple todos, no te lo enviamos ni te lo cobramos." },
  { q: "¿Quién paga los anuncios de Meta?", a: "Vos pagás directamente a Meta desde tu propia cuenta de Business Manager. Nosotros gestionamos las campañas usando Partner Access (sin compartir contraseñas). Recomendamos un mínimo de $500/mes." },
  { q: "¿Necesito experiencia con Meta Ads?", a: "No. Nosotros manejamos todo: estrategia, creativos, copy en español, formularios y optimización. Solo necesitás darnos acceso como Partners a tu cuenta de Meta." },
  { q: "¿Cómo recibo los leads?", a: "Cada lead calificado se entrega en tiempo real por email con ficha completa + tu dashboard de Google Sheets donde podés ver todos tus leads con score, datos y estado." },
  { q: "¿Cuántos leads puedo esperar por mes?", a: "Con $500 de ad spend, típicamente se generan entre 8-15 leads calificados al mes, dependiendo de tu zona y competencia. Podés escalar aumentando tu presupuesto." },
  { q: "¿Hay contrato a largo plazo?", a: "No. El setup de $500 es único y el modelo pay-per-lead no tiene contrato mínimo. Si querés pausar o cancelar, simplemente pausás tus anuncios." },
  { q: "¿En qué zonas operan?", a: "En todo Estados Unidos, enfocándonos en mercados con alta población hispana: Florida, Texas, California, Arizona, Nevada, Carolina del Norte, Georgia, y más." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 relative">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block bg-navy/10 text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Preguntas Frecuentes</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Todo Lo Que Necesitás Saber</h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 60} direction="up">
              <div className={`bg-white rounded-xl border transition-all duration-300 ${open === i ? "border-accent/30 shadow-lg shadow-accent/5" : "border-gray-100 hover:border-gray-200"}`}>
                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <span className={`font-semibold pr-4 transition-colors ${open === i ? "text-accent" : "text-navy"}`}>
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
