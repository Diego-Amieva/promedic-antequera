"use client";

import Image from "next/image";

/* ─────────────────────────────────────────
   MissionVisionSection
   Dos cards glassmorphism side-by-side para
   Misión y Visión empresarial.
   ───────────────────────────────────────── */

const CARDS = [
  {
    id: "mision",
    title: "Nuestra Misión",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    text: "Facilitar la provisión de productos médicos y hospitalarios certificados, equipando a las instituciones de salud del Estado de Oaxaca con soluciones de primer nivel que aseguren la seguridad del paciente y la continuación del servicio de la más alta calidad.",
  },
  {
    id: "vision",
    title: "Visión 2030",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    text: "Para el año 2030 ser la distribuidora comercial líder en el mercado de insumos médicos y hospitalarios en el Estado de Oaxaca, reconocidos como referentes de confianza y excelencia integral en el sector salud.",
  },
];

export default function MissionVisionSection() {
  return (
    <section
      id="mision-vision"
      aria-labelledby="mision-vision-heading"
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: "80px", paddingBottom: "40px" }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1000px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* ── Heading (visually hidden, for a11y) ── */}
        <h2 id="mision-vision-heading" className="sr-only">
          Nuestra Misión y Visión
        </h2>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CARDS.map((card) => (
            <article
              key={card.id}
              className="group"
              style={{
                borderRadius: "20px",
                padding: "36px 32px",
                background: "#ffffff",
                border: "1.5px solid rgba(22,117,137,0.12)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 16px 48px rgba(22,117,137,0.14)";
                el.style.borderColor = "rgba(22,117,137,0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 24px rgba(22,117,137,0.06)";
                el.style.borderColor = "rgba(22,117,137,0.12)";
              }}
            >
              {/* Icon Badge */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #167589 0%, #a7d9dd 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  boxShadow: "0 6px 20px rgba(22,117,137,0.25)",
                }}
              >
                {card.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#167589",
                  marginBottom: "14px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#475569",
                  fontWeight: 400,
                  lineHeight: 1.7,
                }}
              >
                {card.text}
              </p>
            </article>
          ))}
        </div>

        {/* ── Lab Image ── */}
        <div
          style={{
            marginTop: "56px",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 12px 48px rgba(22,117,137,0.12)",
            position: "relative",
            aspectRatio: "16 / 9",
          }}
        >
          <Image
            src="/images/about_lab.jpg"
            alt="Laboratorio de tecnología médica moderna con equipos certificados"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover"
            priority
          />
          {/* Subtle brand overlay */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, transparent 50%, rgba(22,117,137,0.08) 100%)",
            }}
          />
        </div>

        {/* ── Descriptor badges below image ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            marginTop: "28px",
          }}
        >
          {[
            { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Certificaciones COFEPRIS" },
            { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", label: "Buenas prácticas · NOM-241" },
            { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Cobertura estatal · Oaxaca" },
          ].map((badge, i) => (
            <div
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "9999px",
                background: "rgba(22,117,137,0.06)",
                border: "1px solid rgba(22,117,137,0.12)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#167589"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={badge.icon} />
              </svg>
              <span style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#167589",
                letterSpacing: "0.02em",
              }}>
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
