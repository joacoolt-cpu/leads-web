"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="OLT" width={32} height={32} className="rounded" />
            <span className="text-white font-bold text-sm">OLT <span className="text-sky-400">Spanish Leads</span></span>
          </div>

          <div className="flex items-center gap-6 text-white/30 text-sm">
            <a href="#how-it-works" className="hover:text-sky-400 transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-sky-400 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-sky-400 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          </div>

          <div className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} OLT Spanish Leads. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
