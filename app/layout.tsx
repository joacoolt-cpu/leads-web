import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OLT Spanish Leads | Leads Hispanos Calificados para Real Estate",
  description:
    "Generamos leads hispanos calificados para agentes de bienes raíces en EE.UU. Solo pagas por leads verificados con intención real de compra.",
  keywords:
    "leads hispanos, real estate leads, leads en español, bienes raíces, agente inmobiliario, leads calificados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
