"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface Msg {
  sender: "ai" | "lead";
  text: string;
}

const messages: Msg[] = [
  { sender: "ai", text: "¡Hola Roberto! Soy Ana de OLT Spanish Leads. Vimos que estás interesado en comprar propiedad en Orlando. ¿Tenés unos minutos?" },
  { sender: "lead", text: "Sí, estoy buscando casa para mi familia." },
  { sender: "ai", text: "¡Excelente! ¿Cuál es tu presupuesto aproximado?" },
  { sender: "lead", text: "Entre 300 y 400 mil dólares." },
  { sender: "ai", text: "Perfecto. ¿En qué plazo te gustaría cerrar la compra?" },
  { sender: "lead", text: "En los próximos 2 o 3 meses." },
  { sender: "ai", text: "¿Ya estás pre-aprobado con algún lender?" },
  { sender: "lead", text: "Sí, ya tengo mi pre-aprobación." },
  { sender: "ai", text: "¡Genial! Te conecto con un agente especializado en tu zona. Te contactará hoy mismo." },
];

export default function WhatsAppDemo() {
  const [visible, setVisible] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !started) setStarted(true);
  }, [isInView, started]);

  useEffect(() => {
    if (!started || visible >= messages.length) return;
    const delay = visible === 0 ? 600 : 700 + Math.random() * 500;
    const t = setTimeout(() => setVisible((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [started, visible]);

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone */}
          <AnimatedSection direction="right">
            <div className="max-w-sm mx-auto">
              <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-[#ECE5DD] rounded-[2rem] overflow-hidden">
                  <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold">AI</div>
                    <div>
                      <div className="text-white text-sm font-semibold">OLT AI Agent</div>
                      <div className="text-white/60 text-xs">en línea</div>
                    </div>
                  </div>
                  <div className="p-3 space-y-2 min-h-[400px] max-h-[400px] overflow-y-auto">
                    {messages.slice(0, visible).map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${msg.sender === "lead" ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`max-w-[80%] px-3 py-2 rounded-lg text-sm leading-relaxed shadow-sm ${
                          msg.sender === "ai"
                            ? "bg-white text-gray-800 rounded-tl-none"
                            : "bg-[#DCF8C6] text-gray-800 rounded-tr-none"
                        }`}>
                          {msg.text}
                          <div className="text-[10px] text-gray-400 text-right mt-1">
                            {`10:${String(30 + i).padStart(2, "0")}`}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    {visible > 0 && visible < messages.length && messages[visible]?.sender === "ai" && (
                      <div className="flex justify-start">
                        <div className="bg-white px-4 py-3 rounded-lg rounded-tl-none shadow-sm">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="left" delay={200}>
            <span className="inline-block bg-green-50 text-green-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">IA en Acción</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
              Calificación Automática <span className="gradient-text">en Español</span>
            </h2>
            <p className="text-navy/50 text-lg leading-relaxed mb-8">
              Nuestro agente de inteligencia artificial contacta cada lead en menos de 5 minutos. Habla español nativo, califica la intención, verifica los datos, y solo te pasa los que están listos para comprar.
            </p>
            <div className="space-y-5">
              {[
                { title: "Respuesta en < 5 minutos", desc: "El tiempo de respuesta es el factor #1 en conversión de leads." },
                { title: "Conversación natural en español", desc: "No suena robótico. Habla con fluidez y empatía cultural." },
                { title: "6 criterios verificados", desc: "Intención, zona, presupuesto, plazo, contacto válido, y opt-in." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{item.title}</h4>
                    <p className="text-navy/40 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
