import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductsHeroSection from "@/components/sections/productos/ProductsHeroSection";
import BrandCatalogSection from "@/components/sections/productos/BrandCatalogSection";

/* ─────────────────────────────────────────
   SEO Metadata — /productos
   ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Catálogo de Productos | Promedic Antequera",
  description:
    "Explora nuestro catálogo completo de insumos médicos y dentales: infusión, cuidado de heridas, EPP, diagnóstico clínico y más. Calidad certificada con las marcas líderes del sector salud.",
  openGraph: {
    title: "Catálogo de Productos | Promedic Antequera",
    description:
      "Insumos médicos y dentales certificados para instituciones de salud en México. Descarga el catálogo general de Promedic Antequera.",
    url: "https://www.promedicantequera.com/productos",
  },
};

/* ─────────────────────────────────────────
   /productos Page — Orchestrator
   ───────────────────────────────────────── */
export default function ProductosPage() {
  return (
    <>
      {/* Fixed navigation — shared with root layout */}
      <Header />

      <main id="main-content" role="main">
        {/* Hero Section — Full bleed with parallax & wave */}
        <ProductsHeroSection />

        {/* Brand Catalog Grid — 3×2 cards with animated icons */}
        <BrandCatalogSection />
      </main>

      <Footer />
    </>
  );
}
