"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────
   TYPES
   ───────────────────────────────────────── */
interface MousePos {
  x: number;
  y: number;
}

/* ─────────────────────────────────────────
   CONSTANTS
   ───────────────────────────────────────── */
const PARALLAX_BG_FACTOR   = -12;   // px — background moves opposite to cursor
const PARALLAX_FG_FACTOR   =  18;   // px — content moves with cursor (subtle)
const SPRING_STIFFNESS     = 0.06;  // lerp coefficient — lower = smoother lag

/* ─────────────────────────────────────────
   HOOK: Smooth spring lerp for mouse parallax (desktop only)
   ───────────────────────────────────────── */
function useMouseParallax(containerRef: React.RefObject<HTMLElement | null>) {
  const [bgPos,   setBgPos]   = useState<MousePos>({ x: 0, y: 0 });
  const [fgPos,   setFgPos]   = useState<MousePos>({ x: 0, y: 0 });
  const targetRef = useRef<MousePos>({ x: 0, y: 0 });
  const currentRef = useRef<MousePos>({ x: 0, y: 0 });
  const rafRef    = useRef<number>(0);
  const isTouch   = useRef(false);

  const animate = useCallback(() => {
    const t  = targetRef.current;
    const c  = currentRef.current;

    // Spring lerp
    const newX = c.x + (t.x - c.x) * SPRING_STIFFNESS;
    const newY = c.y + (t.y - c.y) * SPRING_STIFFNESS;
    currentRef.current = { x: newX, y: newY };

    setBgPos({ x: newX * PARALLAX_BG_FACTOR, y: newY * PARALLAX_BG_FACTOR });
    setFgPos({ x: newX * PARALLAX_FG_FACTOR,  y: newY * PARALLAX_FG_FACTOR  });

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Detect coarse pointer (touch) — disable on mobile
    if (typeof window !== "undefined") {
      isTouch.current = window.matchMedia("(pointer: coarse)").matches;
    }
    if (isTouch.current) return;

    rafRef.current = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Normalise to -0.5 → +0.5
      targetRef.current = {
        x: (e.clientX - rect.left)  / rect.width  - 0.5,
        y: (e.clientY - rect.top)   / rect.height - 0.5,
      };
    };

    const el = containerRef.current;
    el?.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      el?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [animate, containerRef]);

  return { bgPos, fgPos };
}

/* ─────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────── */
export default function ProductsHeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { bgPos, fgPos } = useMouseParallax(containerRef);

  return (
    <section
      ref={containerRef}
      id="productos-hero"
      aria-label="Catálogo de insumos médicos y dentales — Promedic Antequera"
      className="relative overflow-hidden"
      style={{ minHeight: "clamp(520px, 85vh, 900px)" }}
    >
      {/* ── PHASE 1: Background Image with Phase 2 Parallax Transform ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate(${bgPos.x}px, ${bgPos.y}px) scale(1.06)`,
          transition: "transform 0ms linear",
        }}
      >
        <Image
          src="/images/Products_Hero.jpg"
          alt="Colección de insumos médicos y dentales de Promedic Antequera"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ── PHASE 1: Teal Gradient Overlay with Glass Texture ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(22,117,137,0.86) 0%, rgba(22,117,137,0.65) 50%, rgba(22,117,137,0.82) 100%)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      />

      {/* ── PHASE 1 + 2: Content Column with Parallax & Idle Float ── */}
      <div
        className="
          relative z-10
          flex flex-col items-center justify-center
          text-center
          w-full
          min-h-[clamp(520px,85vh,900px)]
          px-4 sm:px-6
          pt-32 pb-24
          will-change-transform
          animate-products-idle-float
        "
        style={{
          transform: `translate(${fgPos.x}px, ${fgPos.y}px)`,
          transition: "transform 0ms linear",
        }}
      >
        {/* Sub-headline 1 */}
        <p className="text-lg sm:text-2xl font-medium text-white/90 tracking-wide mb-2 animate-fade-up">
          Explora nuestra variedad en
        </p>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.1] w-full text-center my-3 animate-fade-up-delay-1">
          INSUMOS MÉDICOS<br className="hidden sm:block" />Y DENTALES
        </h1>

        {/* Sub-headline 2 */}
        <p className="mt-8 mb-10 text-sm sm:text-lg text-white/90 max-w-2xl mx-auto font-normal leading-relaxed text-center animate-fade-up-delay-2">
          Conoce la calidad y el respaldo de Promedic Antequera<br className="hidden sm:block" /> a través de nuestros catálogos por marca
        </p>

        {/* CTA Button — matching Home Hero btn-hero-cta exactly */}
        <a
          href="/catalogos_promedic.pdf"
          download
          aria-label="Descargar catálogo general de Promedic Antequera en PDF"
          className="btn-hero-cta animate-fade-up-delay-3"
        >
          {/* Download Icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          DESCARGAR CATÁLOGO GENERAL
        </a>
      </div>

      {/* ── PHASE 1: Bottom Concave SVG Wave ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[50px] sm:h-[80px] lg:h-[110px]"
          aria-hidden="true"
        >
          <path d="M0 110C480 34 960 34 1440 110V110H0V110Z" fill="#f8fafc" />
        </svg>
      </div>

    </section>
  );
}
