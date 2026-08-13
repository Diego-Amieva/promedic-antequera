"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface ProductCard {
  id: number;
  title: string;
  image: string;
  description: string;
  alt: string;
}

const PRODUCTS: ProductCard[] = [
  {
    id: 1,
    title: "Infusión y Acceso",
    image: "/images/Infusion_acceso.png",
    description:
      "Catéteres, bombas de infusión y accesos vasculares de alta precisión hospitalaria.",
    alt: "Equipos de infusión y acceso vascular de precisión",
  },
  {
    id: 2,
    title: "Cuidado de Heridas",
    image: "/images/Cuidado_de_heridas.png",
    description:
      "Apósitos avanzados, manejo de fracturas e inmovilización ortopédica especializada.",
    alt: "Materiales avanzados para el cuidado de heridas y ortopedia",
  },
  {
    id: 3,
    title: "EPP & Consumibles",
    image: "/images/EPP_consumibles.png",
    description:
      "Guantes especializados, ropa médica descartable y respiradores de alta eficiencia para la máxima bioseguridad del personal.",
    alt: "Equipos de protección personal y consumibles médicos",
  },
  {
    id: 4,
    title: "Diagnóstico Clínico",
    image: "/images/Diagnostico_clinico.png",
    description:
      "Instrumentos de auscultación y herramientas de diagnóstico de alta fidelidad para evaluaciones.",
    alt: "Instrumentos de diagnóstico clínico de alta fidelidad",
  },
];

// ── Card component shared by both layouts ──────────────────────────────────
function ProductCardItem({ product }: { product: ProductCard }) {
  return (
    <article
      className="product-card group"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        background: "linear-gradient(160deg, #167589 0%, #a7d9dd 100%)",
        padding: "36px 32px 28px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 4px 24px rgba(22,117,137,0.12)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        cursor: "default",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: "12px",
          lineHeight: 1.3,
        }}
      >
        {product.title}
      </h3>

      <p
        style={{
          fontSize: "0.9rem",
          color: "rgba(255,255,255,0.88)",
          fontWeight: 400,
          lineHeight: 1.65,
          maxWidth: "320px",
          margin: "0 auto",
        }}
      >
        {product.description}
      </p>

      <div
        className="animate-float-icon md:animate-none md:group-hover:scale-110 md:group-hover:rotate-3 md:transition-transform md:duration-500"
        style={{
          marginTop: "36px",
          width: "160px",
          height: "160px",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="160px"
          className="object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)]"
          loading="lazy"
        />
      </div>
    </article>
  );
}

// ── Mobile slider ──────────────────────────────────────────────────────────
function MobileSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, PRODUCTS.length - 1));
      setActiveIndex(clamped);
      trackRef.current?.scrollTo({ left: clamped * trackRef.current.offsetWidth, behavior: "smooth" });
    },
    []
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      goTo(activeIndex + (delta > 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

  // Sync dots when user scrolls natively
  const handleScroll = () => {
    if (!trackRef.current) return;
    const idx = Math.round(trackRef.current.scrollLeft / trackRef.current.offsetWidth);
    setActiveIndex(idx);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* ── TRACK ── */}
      <div
        ref={trackRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: "hidden",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
        }}
      >
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            style={{
              flex: "0 0 100%",
              scrollSnapAlign: "start",
              padding: "0 4px",
            }}
          >
            <ProductCardItem product={product} />
          </div>
        ))}
      </div>

      {/* ── DOT INDICATORS ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "20px",
        }}
      >
        {PRODUCTS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir a ${PRODUCTS[i].title}`}
            style={{
              width: i === activeIndex ? "24px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              background: i === activeIndex ? "#167589" : "rgba(22,117,137,0.25)",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* ── ARROW BUTTONS ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        <button
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Categoría anterior"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "9999px",
            border: "1.5px solid rgba(22,117,137,0.30)",
            background: activeIndex === 0 ? "rgba(22,117,137,0.06)" : "rgba(22,117,137,0.10)",
            color: activeIndex === 0 ? "rgba(22,117,137,0.30)" : "#167589",
            cursor: activeIndex === 0 ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === PRODUCTS.length - 1}
          aria-label="Siguiente categoría"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "9999px",
            border: "1.5px solid rgba(22,117,137,0.30)",
            background: activeIndex === PRODUCTS.length - 1 ? "rgba(22,117,137,0.06)" : "rgba(22,117,137,0.10)",
            color: activeIndex === PRODUCTS.length - 1 ? "rgba(22,117,137,0.30)" : "#167589",
            cursor: activeIndex === PRODUCTS.length - 1 ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────
export default function ProductsSection() {
  return (
    <section
      id="productos"
      aria-labelledby="productos-heading"
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: "80px", paddingBottom: "96px" }}
    >
      <div
        style={{
          position: "relative", zIndex: 1,
          maxWidth: "880px", margin: "0 auto",
          paddingLeft: "24px", paddingRight: "24px",
        }}
      >
        {/* ── ENCABEZADO ── */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            id="productos-heading"
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "#167589",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            Nuestros <strong style={{ fontWeight: 800 }}>productos</strong>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#666666",
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: "420px",
              margin: "0 auto",
            }}
          >
            Todo lo que tu institución médica necesita en un{" "}
            <strong style={{ color: "#167589", fontWeight: 700 }}>solo lugar</strong>
          </p>
        </div>

        {/* ── MOBILE: SLIDER ── */}
        <div className="block md:hidden">
          <MobileSlider />
        </div>

        {/* ── DESKTOP: GRID 2×2 ── */}
        <div
          className="hidden md:grid products-grid"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "28px",
          }}
        >
          {PRODUCTS.map((product) => (
            <ProductCardItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
