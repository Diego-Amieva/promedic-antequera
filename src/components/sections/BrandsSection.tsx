"use client";

import Image from "next/image";
import { useRef, useEffect, useCallback } from "react";

interface BrandLogo {
  name: string;
  inactivePath: string;
  activePath: string;
  isCutimed?: boolean;
}

// Row 1: 3M, BSN Medical, Cutimed, Ambiderm
const BRANDS_ROW1: BrandLogo[] = [
  { name: "3M", inactivePath: "/brands/3M.svg", activePath: "/brands/3M.svg" },
  { name: "BSN medical", inactivePath: "/brands/Bsn-medical.svg", activePath: "/brands/Bsn-medical.svg" },
  {
    name: "Cutimed",
    inactivePath: "/brands/cutimed_inactive.svg",
    activePath: "/brands/cutimed_active.svg",
    isCutimed: true,
  },
  { name: "AMBIDERM", inactivePath: "/brands/Ambiderm.svg", activePath: "/brands/Ambiderm.svg" },
];

// Row 2: B.Braun, Nipro, IPM
const BRANDS_ROW2: BrandLogo[] = [
  { name: "B. Braun", inactivePath: "/brands/Bbraun.svg", activePath: "/brands/Bbraun.svg" },
  { name: "Nipro", inactivePath: "/brands/nipro.svg", activePath: "/brands/nipro.svg" },
  { name: "IPM", inactivePath: "/brands/IPM.svg", activePath: "/brands/IPM.svg" },
];

const ALL_BRANDS_MARQUEE = [...BRANDS_ROW1, ...BRANDS_ROW2];

// ── Mobile Marquee with pause-on-touch ─────────────────────────────────────
function MobileMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  // Current fractional scroll position driven by rAF
  const posRef = useRef(0);
  // Speed in px per frame (~60fps target)
  const SPEED = 0.55;
  const rafRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  // Resume timeout id after pointer-up
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const animate = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    if (!isPausedRef.current) {
      const halfWidth = track.scrollWidth / 2;
      posRef.current += SPEED;
      // Seamless loop: once we've scrolled one half, reset to 0
      if (posRef.current >= halfWidth) {
        posRef.current = 0;
      }
      track.scrollLeft = posRef.current;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Sync posRef with current scrollLeft on mount so we start where we left off
    if (trackRef.current) {
      posRef.current = trackRef.current.scrollLeft;
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (resumeTimerRef.current !== null) clearTimeout(resumeTimerRef.current);
    };
  }, [animate]);

  // Pause auto-scroll while user is interacting
  const pauseScroll = () => {
    isPausedRef.current = true;
    if (resumeTimerRef.current !== null) clearTimeout(resumeTimerRef.current);
  };

  // Resume auto-scroll 800ms after last touch/pointer-up
  const resumeScroll = () => {
    if (resumeTimerRef.current !== null) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      // Sync posRef with actual scrollLeft so animation picks up from where the user left off
      if (trackRef.current) {
        posRef.current = trackRef.current.scrollLeft;
      }
      isPausedRef.current = false;
    }, 800);
  };

  return (
    <div className="relative w-full py-4 md:hidden" aria-hidden="true">
      {/* Gradient edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrollable track — overflow-x-auto allows free manual drag */}
      <div
        ref={trackRef}
        onTouchStart={pauseScroll}
        onTouchEnd={resumeScroll}
        onPointerDown={pauseScroll}
        onPointerUp={resumeScroll}
        onPointerCancel={resumeScroll}
        style={{
          display: "flex",
          gap: "48px",
          alignItems: "center",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",        /* Firefox */
          msOverflowStyle: "none",       /* IE/Edge */
          cursor: "grab",
          userSelect: "none",
        }}
        // Hide WebKit scrollbar via inline style (CSS class alternative below)
        className="brands-mobile-track"
      >
        {/* Quadruple the brands so there's always content ahead while looping */}
        {[
          ...ALL_BRANDS_MARQUEE,
          ...ALL_BRANDS_MARQUEE,
          ...ALL_BRANDS_MARQUEE,
          ...ALL_BRANDS_MARQUEE,
        ].map((brand, idx) => (
          <div
            key={idx}
            style={{
              position: "relative",
              flexShrink: 0,
              width: "104px",
              height: "40px",
              opacity: 0.6,
            }}
          >
            <Image
              src={brand.activePath}
              alt={brand.name}
              fill
              sizes="104px"
              className="object-contain"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function BrandsSection() {
  return (
    <section
      id="marcas"
      aria-labelledby="marcas-heading"
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: '64px', paddingBottom: '80px' }}
    >
      <div
        style={{
          position: 'relative', zIndex: 1,
          maxWidth: '880px', margin: '0 auto',
          paddingLeft: '24px', paddingRight: '24px',
        }}
      >
        {/* ── HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            id="marcas-heading"
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              color: '#167589',
              lineHeight: 1.3,
            }}
          >
            Distribuidores de las <strong style={{ fontWeight: 800 }}>marcas líderes</strong> en el sector salud
          </h2>
        </div>

        {/* ── MOBILE VIEW: Auto-scroll marquee + free drag ── */}
        <MobileMarquee />

        {/* ── DESKTOP VIEW: 2 rows of logos ── */}
        <div className="hidden md:flex flex-col gap-10 mb-16">
          {/* Row 1: 4 logos — 3M, BSN Medical, Cutimed, Ambiderm */}
          <div className="grid grid-cols-4 gap-8 items-center justify-items-center">
            {BRANDS_ROW1.map((brand) => (
              <div key={brand.name} className="group relative w-36 h-16 flex items-center justify-center">
                {brand.isCutimed ? (
                  /* Cutimed Exception: dynamic image swap to protect native gradients */
                  <>
                    <Image
                      src={brand.inactivePath}
                      alt={brand.name}
                      fill
                      sizes="144px"
                      className="object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                      loading="lazy"
                    />
                    <Image
                      src={brand.activePath}
                      alt={brand.name}
                      fill
                      sizes="144px"
                      className="object-contain absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      loading="lazy"
                    />
                  </>
                ) : (
                  /* Regular Logos: Grayscale filters to original color */
                  <Image
                    src={brand.activePath}
                    alt={brand.name}
                    fill
                    sizes="144px"
                    className="object-contain filter grayscale brightness-125 contrast-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-300"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Row 2: 3 logos — B.Braun, Nipro, IPM (centered) */}
          <div className="flex justify-center gap-16 items-center">
            {BRANDS_ROW2.map((brand) => (
              <div key={brand.name} className="group relative w-36 h-16 flex items-center justify-center">
                <Image
                  src={brand.activePath}
                  alt={brand.name}
                  fill
                  sizes="144px"
                  className="object-contain filter grayscale brightness-125 contrast-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── DOWNLOAD CATALOGS BUTTON ── */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px', marginBottom: '16px' }}>
          <a
            href="/catalogos_promedic.pdf"
            download
            aria-label="Descargar catálogos completos de Promedic Antequera en formato PDF"
            className="btn-hero-cta"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 shrink-0"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Descargar catálogos
          </a>
        </div>
      </div>
    </section>
  );
}
