import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OLT Spanish Leads | Qualified Hispanic Leads for Real Estate",
  description:
    "We generate qualified Hispanic leads for real estate agents in the U.S. Only pay for verified leads with real purchase intent.",
  keywords:
    "Hispanic leads, real estate leads, Spanish leads, real estate, real estate agent, qualified leads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-white">
      <body className="antialiased">{children}</body>
    </html>
  );
}
