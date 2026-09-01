"use client";

/* ─────────────────────────────────────────
   QualityPolicySection
   Política de Calidad Institucional con fondo tinted,
   SVG waves, y 3 pilares en tarjetas.
   ───────────────────────────────────────── */

const PILLARS = [
  {
    id: 1,
    title: "Trazabilidad Total",
    description: "Control integral del recorrido de cada insumo, desde su origen hasta la entrega final en la institución médica.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Marco Legal Sólido",
    description: "Adherencia estricta a los lineamientos de COFEPRIS y la NOM-241-SSA1-2012, asegurando el cumplimiento regulatorio.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Regulación Verificable",
    description: "Auditorías constantes y procesos validados que garantizan la calidad y la seguridad de cada producto distribuido.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function QualityPolicySection() {
  return (
    <section
      id="politica-calidad"
      aria-labelledby="politica-calidad-heading"
      className="relative overflow-hidden"
      style={{ backgroundColor: "rgba(22,117,137,0.12)" }}
    >
      {/* ── Top Concave SVG Wave ── */}
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
          <path d="M0 0C480 62 960 62 1440 0V0H0V0Z" fill="#ffffff" />
        </svg>
      </div>

      {/* ── Bottom Concave SVG Wave ── */}
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
          maxWidth: "960px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2
            id="politica-calidad-heading"
            style={{
              fontSize: "1.875rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "#167589",
              lineHeight: 1.3,
              marginBottom: "16px",
            }}
          >
            Política de Calidad{" "}
            <strong style={{ fontWeight: 800 }}>Institucional</strong>
          </h2>

          {/* Subheading pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 18px",
              borderRadius: "9999px",
              background: "rgba(22,117,137,0.08)",
              border: "1px solid rgba(22,117,137,0.15)",
              marginBottom: "32px",
            }}
          >
            <span style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "#167589",
              letterSpacing: "0.04em",
            }}>
              Cumplimiento normativo y mejora continua en cada entrega
            </span>
          </div>
        </div>

        {/* ── Policy Body Text ── */}
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto 48px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              color: "#475569",
              fontWeight: 400,
              lineHeight: 1.75,
            }}
          >
            En Promedic Antequera, nuestro compromiso es garantizar que cada producto y servicio que ofrecemos 
            cumple rigurosamente con las regulaciones sanitarias vigentes, incluyendo las establecidas por{" "}
            <strong style={{ color: "#167589", fontWeight: 700 }}>COFEPRIS</strong> y la{" "}
            <strong style={{ color: "#167589", fontWeight: 700 }}>NOM-241-SSA1-2012</strong>, 
            para asegurar la calidad, la seguridad y la trazabilidad de los insumos médicos que ponemos al 
            alcance de los profesionales de la salud.
          </p>
        </div>

        {/* ── 3 Pillars Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              style={{
                textAlign: "center",
                padding: "32px 24px",
                borderRadius: "20px",
                background: "#ffffff",
                border: "1.5px solid rgba(22,117,137,0.10)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 36px rgba(22,117,137,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Icon Badge */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #167589 0%, #a7d9dd 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                  boxShadow: "0 4px 16px rgba(22,117,137,0.22)",
                }}
              >
                {pillar.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#167589",
                  marginBottom: "10px",
                  letterSpacing: "-0.01em",
                }}
              >
                {pillar.title}
              </h3>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#475569",
                  fontWeight: 400,
                  lineHeight: 1.65,
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
