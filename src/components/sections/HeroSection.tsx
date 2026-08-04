"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Sección principal — Tu aliado en tecnología y suministros médicos"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* ── Video Background ── */}
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/hero_poster.webp"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/videos/Hero_Background.webm" type="video/webm" />
        <source src="/videos/Hero_Background.mp4"  type="video/mp4" />
      </video>

      {/* ── Translucent Teal Overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(22,117,137,0.68) 0%, rgba(22,117,137,0.42) 60%, rgba(22,117,137,0.22) 100%)",
        }}
      />

      {/* ── Hero Content — Radically Centered ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full min-h-screen px-4 md:px-8">

        {/* Eyebrow text */}
        <p className="text-xl md:text-2xl font-medium text-white text-center w-full mb-2">
          Tu aliado estratégico en
        </p>

        {/* ── H1: 3-line imposing title ── */}
        <h1 className="font-black text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-[1.15] text-center mx-auto w-full max-w-5xl uppercase">
          TECNOLOGÍA Y<br />
          SUMINISTROS<br />
          MÉDICOS
        </h1>

        {/* Descriptive paragraph */}
        <p className="mt-8 mb-10 text-base md:text-lg text-white/90 max-w-2xl font-medium leading-relaxed text-center mx-auto">
          Suministros de calidad global con el respaldo y la inmediatez que tu práctica médica exige.
        </p>

        {/* Single CTA Button */}
        <Link
          href="/productos"
          aria-label="Conoce nuestro catálogo de productos médicos"
          className="btn-hero-cta"
        >
          CONOCE NUESTROS PRODUCTOS
        </Link>

      </div>

      {/* ── Bottom Concave SVG Wave (#ffffff) ── */}
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
