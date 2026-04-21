"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Cómo Funciona", href: "#como-funciona" },
    { label: "Ejemplo", href: "#lead-card" },
    { label: "Precios", href: "#precios" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-xl shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo.png" alt="OLT Spanish Leads" width={40} height={40} className="rounded" />
          <span className="text-white font-bold text-lg tracking-tight hidden sm:block">
            OLT <span className="text-accent">Spanish Leads</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-accent transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-accent hover:bg-accent-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 shimmer"
          >
            Agendar Llamada
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-navy/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block text-white/70 hover:text-accent py-2 text-sm font-medium">
                  {link.label}
                </a>
              ))}
              <a href="#contacto" onClick={() => setMenuOpen(false)} className="block bg-accent text-white text-center px-6 py-2.5 rounded-full text-sm font-semibold mt-3">
                Agendar Llamada
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
