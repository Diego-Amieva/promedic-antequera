import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHeroSection from "@/components/sections/nosotros/AboutHeroSection";
import MissionVisionSection from "@/components/sections/nosotros/MissionVisionSection";
import TimelineHistory from "@/components/TimelineHistory";
import QualityPolicySection from "@/components/sections/nosotros/QualityPolicySection";
import ValuesSection from "@/components/sections/nosotros/ValuesSection";
import AboutCtaSection from "@/components/sections/nosotros/AboutCtaSection";

/* ─────────────────────────────────────────
   SEO Metadata — /nosotros
   ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Nosotros | Promedic Antequera",
  description:
    "Conoce a Promedic Antequera: misión, visión, política de calidad y valores. Distribuidores líderes de tecnología y suministros médicos certificados en Oaxaca, México.",
  openGraph: {
    title: "Nosotros | Promedic Antequera",
    description:
      "Distribuidores líderes de tecnología y suministros médicos certificados en Oaxaca. Conoce nuestra misión, visión y valores corporativos.",
    url: "https://www.promedicantequera.com/nosotros",
  },
};

/* ─────────────────────────────────────────
   /nosotros Page — Orchestrator
   ───────────────────────────────────────── */
export default function NosotrosPage() {
  return (
    <>
      {/* Fixed navigation — shared across all pages */}
      <Header />

      <main id="main-content" role="main">
        {/* Hero Section — Animated bubbles background */}
        <AboutHeroSection />

        {/* Mission & Vision — Dual glassmorphism cards + lab image */}
        <MissionVisionSection />

        {/* Interactive History Timeline — Stepper & Milestones */}
        <TimelineHistory />

        {/* Quality Policy — Tinted background + 3 pillars */}
        <QualityPolicySection />

        {/* Values — 6-value grid */}
        <ValuesSection />

        {/* CTA Banner — Floating illustration + gradient */}
        <AboutCtaSection />
      </main>

      <Footer />
    </>
  );
}
