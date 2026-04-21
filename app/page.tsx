import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import LeadCard from "@/components/LeadCard";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Requirements from "@/components/Requirements";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <WhatsAppDemo />
      <LeadCard />
      <Testimonials />
      <Pricing />
      <Requirements />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
