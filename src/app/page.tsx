/**
 * page.tsx — Orquestador principal de la Landing Page
 * Promedic Antequera
 *
 * MÓDULOS COMPLETADOS:
 *   ✅ Header          — Navbar Liquid Glass
 *   ✅ HeroSection     — Video BG + Overlay + Wave
 *   ✅ ProductsSection — Grid 4 tarjetas
 *   ✅ BrandsSection   — Logos + Marquee
 *   ✅ TrustSection    — Acordeón + imágenes
 *   ✅ LocationSection — Google Maps
 *   ✅ ContactSection  — Formulario B2B
 *
 * MÓDULOS PENDIENTES (se agregarán iterativamente):
 *   ✅ Footer          — Cierre corporativo
 */

import Header          from "@/components/layout/Header";
import HeroSection     from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import BrandsSection   from "@/components/sections/BrandsSection";
import TrustSection    from "@/components/sections/TrustSection";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection  from "@/components/sections/ContactSection";
import Footer          from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      {/* Fixed navigation — outside <main> since it overlaps all sections */}
      <Header />

      {/* Primary content landmark */}
      <main id="main-content" role="main">
        <HeroSection />

        <ProductsSection />

        <BrandsSection />

        <TrustSection />

        <LocationSection />

        <ContactSection />
      </main>

      {/* Footer corporativo */}
      <Footer />
    </>
  );
}
