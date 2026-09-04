"use client";

/* ─────────────────────────────────────────
   AboutHeroSection
   Hero con fondo de burbujas animadas en colores de marca,
   texto central imposing, y 3 contadores estadísticos.
   ───────────────────────────────────────── */

interface Bubble {
  id: number;
  size: number;
  left: string;
  top: string;
  color: string;
  animation: string;
  delay: string;
  duration: string;
}

const BUBBLES: Bubble[] = [
  { id: 1,  size: 180, left: "5%",   top: "10%",  color: "rgba(167,217,221,0.18)", animation: "bubble-float",  delay: "0s",    duration: "18s" },
  { id: 2,  size: 120, left: "80%",  top: "15%",  color: "rgba(22,117,137,0.15)",  animation: "bubble-pulse",  delay: "2s",    duration: "12s" },
  { id: 3,  size: 60,  left: "15%",  top: "60%",  color: "rgba(167,217,221,0.22)", animation: "bubble-drift",  delay: "1s",    duration: "20s" },
  { id: 4,  size: 200, left: "70%",  top: "55%",  color: "rgba(22,117,137,0.12)",  animation: "bubble-float",  delay: "4s",    duration: "22s" },
  { id: 5,  size: 40,  left: "40%",  top: "20%",  color: "rgba(167,217,221,0.25)", animation: "bubble-pulse",  delay: "0.5s",  duration: "8s"  },
  { id: 6,  size: 90,  left: "92%",  top: "40%",  color: "rgba(22,117,137,0.18)",  animation: "bubble-drift",  delay: "3s",    duration: "16s" },
  { id: 7,  size: 150, left: "25%",  top: "75%",  color: "rgba(167,217,221,0.14)", animation: "bubble-float",  delay: "5s",    duration: "25s" },
  { id: 8,  size: 70,  left: "55%",  top: "80%",  color: "rgba(22,117,137,0.20)",  animation: "bubble-pulse",  delay: "1.5s",  duration: "10s" },
  { id: 9,  size: 35,  left: "88%",  top: "75%",  color: "rgba(167,217,221,0.28)", animation: "bubble-drift",  delay: "2.5s",  duration: "14s" },
  { id: 10, size: 110, left: "3%",   top: "35%",  color: "rgba(22,117,137,0.16)",  animation: "bubble-float",  delay: "6s",    duration: "19s" },
  { id: 11, size: 55,  left: "48%",  top: "5%",   color: "rgba(167,217,221,0.20)", animation: "bubble-pulse",  delay: "3.5s",  duration: "11s" },
  { id: 12, size: 85,  left: "65%",  top: "30%",  color: "rgba(22,117,137,0.14)",  animation: "bubble-drift",  delay: "0s",    duration: "23s" },
  { id: 13, size: 45,  left: "35%",  top: "45%",  color: "rgba(167,217,221,0.24)", animation: "bubble-float",  delay: "7s",    duration: "15s" },
  { id: 14, size: 130, left: "50%",  top: "65%",  color: "rgba(22,117,137,0.10)",  animation: "bubble-pulse",  delay: "4.5s",  duration: "20s" },
  { id: 15, size: 25,  left: "78%",  top: "8%",   color: "rgba(167,217,221,0.30)", animation: "bubble-drift",  delay: "1s",    duration: "9s"  },
];

const STATS = [
  { value: "+17",  label: "Años de experiencia", delayClass: "animate-counter-enter" },
  { value: "6",    label: "Marcas certificadas",  delayClass: "animate-counter-enter-delay-1" },
  { value: "500+", label: "Instituciones atendidas", delayClass: "animate-counter-enter-delay-2" },
];

export default function AboutHeroSection() {
  return (
    <section
      id="about-hero"
      aria-label="Sección principal — Conócenos"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* ── Gradient Background ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #0a3f4d 0%, #167589 40%, #1a8a9e 80%, #0d5f72 100%)",
        }}
      />

      {/* ── Animated Bubbles Layer ── */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {BUBBLES.map((bubble) => (
          <div
            key={bubble.id}
            style={{
              position: "absolute",
              left: bubble.left,
              top: bubble.top,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              borderRadius: "50%",
              background: `radial-gradient(circle at 30% 30%, ${bubble.color}, transparent 70%)`,
              animation: `${bubble.animation} ${bubble.duration} ease-in-out ${bubble.delay} infinite`,
              pointerEvents: "none",
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* ── Subtle radial glow overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(167,217,221,0.08) 0%, transparent 60%)",
        }}
      />

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full min-h-screen px-6 md:px-8">
        {/* Eyebrow Pill */}
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)",
            marginBottom: "28px",
          }}
        >
          <span style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.85)",
          }}>
            ✦ Conócenos · Nuestra historia
          </span>
        </div>

        {/* H1 */}
        <h1
          className="animate-fade-up-delay-1 font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] mx-auto w-full max-w-4xl"
        >
          Comprometidos con la{" "}
          <span style={{ color: "#a7d9dd" }}>salud</span> y el{" "}
          <span style={{ color: "#a7d9dd" }}>bienestar</span> de tu institución médica
        </h1>

        {/* Description */}
        <p
          className="animate-fade-up-delay-2"
          style={{
            marginTop: "28px",
            marginBottom: "48px",
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.85)",
            fontWeight: 400,
            lineHeight: 1.7,
            maxWidth: "600px",
          }}
        >
          Somos distribuidores líderes de tecnología y suministros médicos certificados
          en el Estado de Oaxaca, con el respaldo de las marcas más reconocidas del sector salud.
        </p>

        {/* ── Stat Counters ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={stat.delayClass}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px 28px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.12)",
                minWidth: "140px",
              }}
            >
              <span style={{
                fontSize: "2rem",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}>
                {stat.value}
              </span>
              <span style={{
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.70)",
                marginTop: "4px",
                letterSpacing: "0.02em",
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Concave SVG Wave ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none"
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
    </section>
  );
}
