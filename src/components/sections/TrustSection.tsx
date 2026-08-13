"use client";

import { useState } from "react";
import Image from "next/image";

interface TrustPillar {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  containerClass?: string;
}

const PILLARS: TrustPillar[] = [
  {
    id: 1,
    title: "Calidad certificada",
    description: "Adquirimos y comercializamos insumos médicos que cumplen con las más altas normas regulatorias y sanitarias nacionales e internacionales.",
    image: "/illustrations/Calidad_certificada.png",
    alt: "Doctor con tablero de verificación de calidad certificada",
  },
  {
    id: 2,
    title: "Stock garantizado",
    description: "Logística eficiente diseñada para cubrir las demandas críticas de hospitales, clínicas y centros de salud.",
    image: "/illustrations/Stock_garantizado.png",
    alt: "Doctor con laptop gestionando el stock garantizado y logística",
  },
  {
    id: 3,
    title: "Atención Humana Especializada",
    description: "Una experiencia de venta personalizada y adaptada a las necesidades específicas de tu institución médica.",
    image: "/illustrations/Atencion_humana_especializada.png",
    alt: "Mascota de Salud Total representando atención humana especializada",
    containerClass: "max-h-[320px] md:max-h-[380px]",
  },
];

export default function TrustSection() {
  const [activePillar, setActivePillar] = useState<number>(1);

  return (
    <section
      id="confianza"
      aria-labelledby="confianza-heading"
      className="relative overflow-hidden"
      style={{ backgroundColor: "rgba(22,117,137,0.12)" }}
    >
      {/* ── Top Concave SVG Wave (white → tinted bg) ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 md:h-24 lg:h-28"
          aria-hidden="true"
        >
          {/* Flipped: white arch curves DOWN into the tinted section */}
          <path d="M0 0C480 62 960 62 1440 0V0H0V0Z" fill="#ffffff" />
        </svg>
      </div>

      {/* ── Bottom Concave SVG Wave (tinted bg → white) ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 md:h-24 lg:h-28"
          aria-hidden="true"
        >
          <path d="M0 90C480 28 960 28 1440 90V90H0V90Z" fill="#ffffff" />
        </svg>
      </div>

      {/* ── Section Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "880px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            id="confianza-heading"
            style={{
              fontSize: "1.875rem",   /* ~25% más grande que 1.5rem de otras secciones */
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "#167589",
              lineHeight: 1.3,
            }}
          >
            El <strong style={{ fontWeight: 800 }}>estándar</strong> de confianza que tu institución exige
          </h2>
        </div>

        {/* ── SPLIT 50/50 LAYOUT ── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">

          {/* Columna Izquierda: Acordeón Interactivo */}
          <div className="lg:col-span-6 flex flex-col gap-6" role="tablist" aria-label="Pilares de confianza">
            {PILLARS.map((pillar) => {
              const isActive = activePillar === pillar.id;
              return (
                <div
                  key={pillar.id}
                  className={`border-b pb-6 transition-all duration-300`}
                  style={{ borderColor: "rgba(22,117,137,0.25)" }}
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-pillar-${pillar.id}`}
                    id={`tab-pillar-${pillar.id}`}
                    onClick={() => setActivePillar(pillar.id)}
                    className="w-full text-left flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#167589] rounded-lg p-2"
                  >
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? "#167589" : "#64748b",
                        transition: "all 0.3s",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <span
                      className={`ml-4 flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 ${
                        isActive ? "rotate-90" : ""
                      }`}
                      style={{ color: isActive ? "#167589" : "#94a3b8" }}
                      aria-hidden="true"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  </button>

                  {/* Accordion Content Panel */}
                  <div
                    id={`panel-pillar-${pillar.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-pillar-${pillar.id}`}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? "max-h-40 opacity-100 mt-3 pl-2" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Columna Derecha: Ilustraciones con Transición Cruzada */}
          <div className="lg:col-span-6 flex justify-center items-center relative h-[350px] md:h-[450px] w-full">
            {PILLARS.map((pillar) => {
              const isActive = activePillar === pillar.id;
              return (
                <div
                  key={pillar.id}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                    isActive
                      ? "opacity-100 scale-100 z-10 pointer-events-auto"
                      : "opacity-0 scale-95 z-0 pointer-events-none"
                  }`}
                  aria-hidden={!isActive}
                >
                  <div className={`relative w-full h-full max-w-[400px] max-h-[400px] ${pillar.containerClass || ""}`}>
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      fill
                      sizes="(max-width: 768px) 300px, 400px"
                      className="object-contain drop-shadow-[0_20px_35px_rgba(22,117,137,0.12)]"
                      priority={pillar.id === 1}
                      loading={pillar.id === 1 ? undefined : "lazy"}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
