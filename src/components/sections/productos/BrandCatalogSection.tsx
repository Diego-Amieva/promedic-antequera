"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

/* ─────────────────────────────────────────
   Lottie — client-only, no SSR
   ───────────────────────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Lottie = dynamic(() => import("lottie-react"), { ssr: false }) as any;

/* ─────────────────────────────────────────
   BRAND DATA
   Logos:     /public/brands/<file>.svg        (ya existentes)
   Fotos:     /public/brands/photos/<name>.jpg  (coloca aquí tus imágenes)
   Animacnes: /public/brands/animations/<name>.json (coloca aquí tus Lottie)
   ───────────────────────────────────────── */
interface Brand {
  id: string;
  name: string;
  logo: string;
  logoWidth: number;
  photo: string;        // /brands/photos/3m.jpg  etc.
  animation: string;   // /brands/animations/3m.json  etc.
  description: string;
  catalog: string;
}

const BRANDS: Brand[] = [
  {
    id: "3m",
    name: "3M",
    logo: "/brands/3M.svg",
    logoWidth: 72,
    photo: "/brands/photos/3m.jpg",
    animation: "/brands/animations/3m.json",
    description:
      "Soluciones avanzadas en cuidado de heridas, diagnóstico con estetoscopios Littmann y protección respiratoria profesional.",
    catalog: "/catalogos/3m.pdf",
  },
  {
    id: "bsn",
    name: "BSN Medical",
    logo: "/brands/Bsn-medical.svg",
    logoWidth: 130,
    photo: "/brands/photos/Bsn.jpg",
    animation: "/brands/animations/Bsn.json",
    description:
      "Especialistas en ortopedia, manejo de fracturas y cuidado de heridas.",
    catalog: "/catalogos/bsn.pdf",
  },
  {
    id: "cutimed",
    name: "Cutimed",
    logo: "/brands/cutimed_active.svg",
    logoWidth: 130,
    photo: "/brands/photos/Cutimed.jpg",
    animation: "/brands/animations/Cutimed.json",
    description:
      "Soluciones avanzadas para el manejo de heridas crónicas y complejas.",
    catalog: "/catalogos/cutimed.pdf",
  },
  {
    id: "braun",
    name: "B. Braun",
    logo: "/brands/Bbraun.svg",
    logoWidth: 130,
    photo: "/brands/photos/Braun.jpg",
    animation: "/brands/animations/Braun.json",
    description:
      "Equipos de infusión, suturas y soluciones para anestesia regional de calidad alemana superior.",
    catalog: "/catalogos/braun.pdf",
  },
  {
    id: "ambiderm",
    name: "Ambiderm",
    logo: "/brands/Ambiderm.svg",
    logoWidth: 130,
    photo: "/brands/photos/Ambiderm.jpg",
    animation: "/brands/animations/Ambiderm.json",
    description:
      "Especialistas en guantes de exploración y cirugía, ropa médica desechable y material clínico de alta protección.",
    catalog: "/catalogos/ambiderm.pdf",
  },
  {
    id: "ipm",
    name: "IPM",
    logo: "/brands/IPM.svg",
    logoWidth: 80,
    photo: "/brands/photos/Ipm.jpg",
    animation: "/brands/animations/Ipm.json",
    description:
      "Soluciones y consumibles plásticos de grado médico para aspiración, drenaje, recolección y manejo seguro de fluidos hospitalarios.",
    catalog: "/catalogos/ipm.pdf",
  },
];

/* ─────────────────────────────────────────
   ANIMATED ICON CIRCLE
   Gradient #167589 → #a7d9dd  |  icon white 50% opacity
   Falls back to a generic medical icon until the JSON is placed.
   ───────────────────────────────────────── */
function AnimatedIconCircle({ src }: { src: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [animData, setAnimData] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    fetch(src)
      .then((r) => {
        if (!r.ok) throw new Error("missing");
        return r.json();
      })
      .then(setAnimData)
      .catch(() => setAnimData(null));
  }, [src]);

  return (
    <div
      aria-hidden="true"
      style={{
        width: 72,
        height: 72,
        borderRadius: "50%",
        background:
          "linear-gradient(135deg, #167589 0%, #a7d9dd 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 28px rgba(22,117,137,0.32)",
        flexShrink: 0,
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.5,
          filter: "brightness(0) invert(1)",
        }}
      >
        {animData ? (
          /* Lottie animation — white icons rendered at 50% opacity */
          <Lottie animationData={animData} loop autoplay style={{ width: "100%", height: "100%" }} />
        ) : (
          /* Placeholder — rendered pure white at 50% opacity */
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   BRAND CARD — Uniform height via flex-1
   ───────────────────────────────────────── */
function BrandCard({ brand }: { brand: Brand }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      aria-label={`Catálogo de productos ${brand.name}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      {/* Animated icon circle — floats above card */}
      <AnimatedIconCircle src={brand.animation} />

      {/* Card body — flex-1 stretches to full height of row */}
      <div
        style={{
          width: "100%",
          flex: 1,
          backgroundColor: "#ffffff",
          borderRadius: 20,
          boxShadow:
            "0 4px 24px rgba(22,117,137,0.09), 0 1px 4px rgba(0,0,0,0.06)",
          border: "1px solid rgba(22,117,137,0.08)",
          marginTop: -36, // floats the circle above the card
          paddingTop: 52,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "box-shadow 0.25s ease, transform 0.25s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 12px 40px rgba(22,117,137,0.18), 0 2px 8px rgba(0,0,0,0.08)";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 4px 24px rgba(22,117,137,0.09), 0 1px 4px rgba(0,0,0,0.06)";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        }}
      >
        {/* ── Logo + Description (flex-1 & justifyContent: center for vertical balance) ── */}
        <div style={{ padding: "0 24px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {/* Logo */}
          <div
            style={{
              height: 52,
              display: "flex",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={brand.logoWidth}
              height={44}
              style={{ maxHeight: 44, width: "auto", objectFit: "contain" }}
              loading="lazy"
            />
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "0.875rem",
              color: "#475569",
              lineHeight: 1.7,
              fontWeight: 400,
              margin: 0,
            }}
          >
            {brand.description}
          </p>
        </div>

        {/* ── Photo + Download overlay (fixed 200px height across all cards) ── */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 200,
            flexShrink: 0,
            backgroundColor: "#a7d9dd",
          }}
        >
          {!imgError && (
            <Image
              src={brand.photo}
              alt={`Productos ${brand.name}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}

          {/* Gradient scrim — always visible */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(22,117,137,0.75) 0%, transparent 55%)",
            }}
          />

          {/* Download CTA */}
          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a
              href={brand.catalog}
              download
              aria-label={`Descargar catálogo de ${brand.name}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                paddingLeft: 22,
                paddingRight: 22,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "rgba(22,117,137,0.82)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                borderRadius: 9999,
                boxShadow: "0 4px 16px rgba(0,0,0,0.22)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                border: "1px solid rgba(255,255,255,0.22)",
                transition: "background-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "rgba(22,117,137,0.97)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "rgba(22,117,137,0.82)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Descargar
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────
   SECTION EXPORT
   ───────────────────────────────────────── */
export default function BrandCatalogSection() {
  return (
    <section
      id="marcas-catalogo"
      aria-labelledby="marcas-catalogo-heading"
      style={{
        backgroundColor: "#f8fafc",
        paddingTop: 80,
        paddingBottom: 96,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            id="marcas-catalogo-heading"
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              fontWeight: 700,
              color: "#167589",
              lineHeight: 1.3,
              marginBottom: 16,
              marginTop: 0,
            }}
          >
            Explora las líneas de nuestras{" "}
            <strong style={{ fontWeight: 800 }}>marcas aliadas</strong>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#475569",
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Te invitamos a revisar nuestros catálogos individuales para conocer
            a detalle la variedad de soluciones e insumos que tenemos listos
            para ti.
          </p>
        </div>

        {/* ── Brand Grid 3×2 ── */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
            items-stretch
          "
          style={{ paddingTop: 36 }} // room for floating circles
        >
          {BRANDS.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
