"use client";

/* ─────────────────────────────────────────
   ValuesSection
   Grid de 6 valores corporativos con cards
   interactivas y badges con iconos SVG.
   ───────────────────────────────────────── */

const VALUES = [
  {
    id: 1,
    title: "Integridad y Cumplimiento Sanitario",
    description: "Operamos con total apego a las regulaciones sanitarias vigentes, garantizando transparencia en cada operación.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Seguridad y Trazabilidad",
    description: "Nos comprometemos a que cada producto cuente con rastreo completo desde su origen hasta la entrega final.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Calidad y Orientación al Cliente",
    description: "Todo lo que hacemos gira en torno a satisfacer las necesidades de nuestros clientes con productos certificados.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Excelencia Operativa",
    description: "Perfeccionamos continuamente nuestros procesos para ofrecer distribución eficiente, sin márgenes de error.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Trabajo en Equipo",
    description: "Valoramos la colaboración entre departamentos y con nuestros socios comerciales para lograr objetivos comunes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Mejora Continua e Innovación",
    description: "Buscamos activamente nuevas soluciones y tecnologías para elevar el estándar del sector salud en nuestra región.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function ValuesSection() {
  return (
    <section
      id="valores"
      aria-labelledby="valores-heading"
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: "80px", paddingBottom: "96px" }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1060px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          {/* Eyebrow Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 18px",
              borderRadius: "9999px",
              background: "rgba(22,117,137,0.06)",
              border: "1px solid rgba(22,117,137,0.12)",
              marginBottom: "20px",
            }}
          >
            <span style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#167589",
            }}>
              ✦ Lo que nos define
            </span>
          </div>

          <h2
            id="valores-heading"
            style={{
              fontSize: "1.875rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "#167589",
              lineHeight: 1.3,
            }}
          >
            Valores que nos{" "}
            <strong style={{ fontWeight: 800 }}>definen</strong>
          </h2>
        </div>

        {/* ── Values Grid 3×2 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value) => (
            <article
              key={value.id}
              style={{
                padding: "32px 28px",
                borderRadius: "20px",
                background: "#ffffff",
                border: "1.5px solid rgba(22,117,137,0.10)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 36px rgba(22,117,137,0.14)";
                el.style.borderColor = "rgba(22,117,137,0.22)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "rgba(22,117,137,0.10)";
              }}
            >
              {/* Icon Badge */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #167589 0%, #a7d9dd 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  boxShadow: "0 4px 16px rgba(22,117,137,0.22)",
                }}
              >
                {value.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#020617",
                  marginBottom: "10px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.35,
                }}
              >
                {value.title}
              </h3>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#475569",
                  fontWeight: 400,
                  lineHeight: 1.65,
                }}
              >
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
