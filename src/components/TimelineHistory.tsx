"use client";

import React, { useState } from "react";

/* ─────────────────────────────────────────────────────────
   TimelineHistory — Promedic Antequera
   Patrón de container: inline styles (igual que MissionVisionSection
   y QualityPolicySection) para garantizar centrado correcto.
   ───────────────────────────────────────────────────────── */

const milestones = [
  {
    id: 1,
    step: "01 · 2009",
    year: "2009",
    phase: "FUNDACIÓN",
    title: "El Origen",
    badge: "Comercialización Inicial",
    desc: "Nace la iniciativa comercializando suministros médicos esenciales como persona física con un enfoque de servicio humano y compromiso con los médicos locales.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    active: false,
    present: false,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={16} height={16}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    step: "02 · EVOLUCIÓN",
    year: "Evolución",
    phase: "EXPANSIÓN",
    title: "Figura SAS",
    badge: "Formalización Corporativa",
    desc: "La creciente demanda de insumos impulsa la formalización corporativa como Sociedad por Acciones Simplificada (SAS), estructurando una red logística regional.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    active: false,
    present: false,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={16} height={16}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: 3,
    step: "03 · 2018",
    year: "2018",
    phase: "FORMALIZACIÓN",
    title: "S.A. de C.V.",
    badge: "Consolidación Jurídica",
    desc: "Al superar los límites de ingresos, se constituye formalmente Proveedora Médica de Antequera S.A. de C.V. en Oaxaca, expandiendo alianzas hospitalarias estratégicas.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    active: false,
    present: false,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={16} height={16}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 4,
    step: "04 · HOY",
    year: "Hoy",
    phase: "LIDERAZGO",
    title: "Líder Multicanal",
    badge: "ISO 9001:2015 & Retail",
    desc: "Empresa líder con presencia consolidada en B2B Hospitalario, Punto de Venta Retail y Centro de Vacunación certificado, con logística automatizada y cadena de frío.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    active: true,
    present: true,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={16} height={16}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

export default function TimelineHistory() {
  const [activeId, setActiveId] = useState<number>(4);

  return (
    <section
      id="nuestra-historia"
      aria-labelledby="historia-title"
      style={{
        backgroundColor: "#f8fafc",
        borderTop: "1px solid #e2e8f0",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      {/* ━━━━ Contenedor centrado — mismo patrón que QualityPolicySection ━━━━ */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >

        {/* ════════════════════════════════
            ENCABEZADO CENTRADO
        ════════════════════════════════ */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          {/* Badge pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(22,117,137,0.08)",
              border: "1px solid rgba(22,117,137,0.18)",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#167589",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "#167589",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              TRAYECTORIA DE EXCELENCIA · PROMEDIC ONBOARDING
            </span>
          </div>

          {/* Título principal */}
          <h2
            id="historia-title"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              maxWidth: "820px",
              margin: "0 auto 20px",
            }}
          >
            Nuestra Historia: Un Camino de Crecimiento y Consolidación
          </h2>

          {/* Subtítulo */}
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748b",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Desde nuestros orígenes hasta consolidarnos como un referente multicanal en salud y distribución médica especializada en el sur-sureste del país.
          </p>
        </div>

        {/* ════════════════════════════════
            STEPPER HORIZONTAL
            Nodo: 48×48px → centro a 24px
            Línea: top = 36px (8px reserva badge) + 24px (centro nodo) = padding-top del wrapper
        ════════════════════════════════ */}
        <div style={{ position: "relative", marginBottom: "48px" }}>
          {/* Zona superior reservada para badge "PRESENTE" (36px) + nodo (48px) */}
          <div style={{ paddingTop: "44px", position: "relative" }}>
            {/* Línea horizontal: translateY(23px) la centra exactamente en el nodo de 48px */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "44px",
                left: "calc(12.5% + 0px)",
                right: "calc(12.5% + 0px)",
                height: "2px",
                background: "linear-gradient(90deg, #167589 0%, #2a9aaf 50%, #7bc3cf 100%)",
                borderRadius: "2px",
                transform: "translateY(23px)",
                zIndex: 0,
              }}
            />

            {/* 4 columnas del stepper */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "24px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {milestones.map((m) => {
                const isActive = activeId === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveId(m.id)}
                    aria-pressed={isActive}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    {/* Badge "PRESENTE" flotante — ocupa los 36px superiores reservados */}
                    <div style={{ height: "36px", display: "flex", alignItems: "flex-end", justifyContent: "center", marginBottom: "8px" }}>
                      {m.present && (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            padding: "3px 10px",
                            borderRadius: "9999px",
                            backgroundColor: "#167589",
                            color: "#fff",
                            fontSize: "0.6rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            boxShadow: "0 2px 8px rgba(22,117,137,0.35)",
                          }}
                        >
                          <span
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              backgroundColor: "#a7d9dd",
                              display: "inline-block",
                            }}
                          />
                          Presente
                        </span>
                      )}
                    </div>

                    {/* Nodo circular 48×48 */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: isActive
                          ? "3.5px solid #167589"
                          : "3px solid rgba(22,117,137,0.55)",
                        boxShadow: isActive
                          ? "0 0 0 5px rgba(22,117,137,0.15), 0 4px 16px rgba(22,117,137,0.2)"
                          : "0 2px 8px rgba(0,0,0,0.06)",
                        transform: isActive ? "scale(1.12)" : "scale(1)",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <span
                        style={{
                          width: isActive ? "16px" : "11px",
                          height: isActive ? "16px" : "11px",
                          borderRadius: "50%",
                          backgroundColor: "#167589",
                          opacity: isActive ? 1 : 0.7,
                          transition: "all 0.25s ease",
                          display: "block",
                        }}
                      />
                    </div>

                    {/* Etiquetas */}
                    <div style={{ marginTop: "14px" }}>
                      <span
                        style={{
                          display: "block",
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: isActive ? "#167589" : "#1e293b",
                          letterSpacing: "-0.01em",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {m.year}
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          color: "#94a3b8",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginTop: "4px",
                        }}
                      >
                        {m.phase}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════
            GRID DE 4 TARJETAS
        ════════════════════════════════ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
          className="grid-cols-timeline"
        >
          {milestones.map((m) => {
            const isActive = activeId === m.id;
            return (
              <article
                key={m.id}
                onClick={() => setActiveId(m.id)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  border: isActive
                    ? "2px solid #167589"
                    : "1.5px solid #e2e8f0",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: isActive
                    ? "0 8px 32px rgba(22,117,137,0.16)"
                    : "0 2px 12px rgba(0,0,0,0.05)",
                  transform: isActive ? "translateY(-4px)" : "translateY(0)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                  }
                }}
              >
                {/* ── Imagen 16:10 ── */}
                <div style={{ position: "relative", paddingTop: "62.5%", overflow: "hidden", backgroundColor: "#f1f5f9" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.image}
                    alt={m.title}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                  />

                  {/* Gradiente overlay */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.1) 45%, transparent 100%)",
                    }}
                  />

                  {/* Badge ACTUAL (esquina superior derecha) */}
                  {m.active && (
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        backgroundColor: "#167589",
                        color: "#fff",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        boxShadow: "0 2px 8px rgba(22,117,137,0.4)",
                      }}
                    >
                      ACTUAL
                    </span>
                  )}

                  {/* Badge de categoría (esquina inferior izquierda) */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "12px",
                      backgroundColor: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(8px)",
                      color: "#334155",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                  >
                    {m.badge}
                  </span>
                </div>

                {/* ── Contenido de la tarjeta ── */}
                <div
                  style={{
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    gap: "10px",
                  }}
                >
                  {/* Step label + ícono */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: "#167589",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {m.step}
                    </span>
                    <span style={{ color: isActive ? "#167589" : "#cbd5e1", transition: "color 0.2s" }}>
                      {m.icon}
                    </span>
                  </div>

                  {/* Título */}
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {m.title}
                  </h3>

                  {/* Separador */}
                  <div
                    style={{
                      height: "2px",
                      width: isActive ? "40px" : "24px",
                      backgroundColor: "#167589",
                      borderRadius: "2px",
                      transition: "width 0.3s ease",
                      opacity: isActive ? 1 : 0.3,
                    }}
                  />

                  {/* Descripción */}
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#64748b",
                      lineHeight: 1.7,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* ── Responsive: colapsar a 2 columnas en tablet ── */}
        <style>{`
          @media (max-width: 1024px) {
            .grid-cols-timeline {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .grid-cols-timeline {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

      </div>
    </section>
  );
}
