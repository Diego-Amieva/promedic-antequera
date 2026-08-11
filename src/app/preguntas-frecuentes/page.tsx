import type { Metadata } from "next";
import Header    from "@/components/layout/Header";
import Footer    from "@/components/layout/Footer";
import FaqSection from "@/components/sections/FaqSection";

/* ─────────────────────────────────────────
   SEO Metadata — /preguntas-frecuentes
   ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Promedic Antequera",
  description:
    "Resuelve tus dudas sobre envíos, devoluciones, facturación y cotizaciones formales para tu clínica u hospital. Atención especializada Promedic Antequera.",
  openGraph: {
    title: "Preguntas Frecuentes | Promedic Antequera",
    description:
      "Encuentra respuestas rápidas sobre nuestros envíos, políticas de devolución, facturación y cómo solicitar una cotización formal para tu institución médica.",
    url: "https://www.promedicantequera.com/preguntas-frecuentes",
  },
};

/* ─────────────────────────────────────────
   /preguntas-frecuentes Page — Orchestrator
   ───────────────────────────────────────── */
export default function PreguntasFrecuentesPage() {
  return (
    <>
      {/* Fixed navigation — shared with root layout */}
      <Header />

      <main id="main-content" role="main">
        {/* FAQ Hero + Accordion + CTA Banner */}
        <FaqSection />
      </main>

      <Footer />
    </>
  );
}
