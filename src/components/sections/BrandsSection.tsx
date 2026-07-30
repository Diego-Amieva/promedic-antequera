"use client";

import Image from "next/image";

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

        {/* ── MOBILE VIEW: Infinite Scroll Marquee ── */}
        <div className="relative w-full overflow-hidden py-4 md:hidden" aria-hidden="true">
          {/* Gradient shadows left & right for transition depth */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Double list of logos for infinite seamless loop */}
          <div className="flex w-[200%] gap-12 items-center animate-marquee">
            {[...ALL_BRANDS_MARQUEE, ...ALL_BRANDS_MARQUEE].map((brand, idx) => (
              <div key={idx} className="relative flex-shrink-0 w-28 h-10 opacity-60">
                <Image
                  src={brand.activePath}
                  alt={brand.name}
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

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
