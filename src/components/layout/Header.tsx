"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Inicio",               href: "/",                    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { name: "Nosotros",             href: "/nosotros",            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { name: "Productos",            href: "/productos",           icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { name: "Preguntas frecuentes", href: "/preguntas-frecuentes", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

// Pages with white backgrounds where the navbar needs to adapt
const LEGAL_PAGES = ["/terminos-y-condiciones", "/aviso-de-privacidad", "/politica-de-cookies"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isLegalPage = LEGAL_PAGES.includes(pathname ?? "");

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Logo filter logic:
   * - Legal pages (white bg) → no filter → default 2-color SVG
   * - Regular pages, not scrolled (hero gradient bg) → white (invert)
   * - Regular pages, scrolled (white/light bg) → no filter → default 2-color SVG
   */
  const logoFilter = isLegalPage
    ? "none"                                    // Legal pages: always default
    : isScrolled
    ? "none"                                    // Scrolled on white bg: default
    : "brightness(0) invert(1)";               // On dark hero gradient: white

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 w-full flex justify-center bg-transparent transition-all duration-300 ${isScrolled ? "is-scrolled" : ""} ${isLegalPage ? "legal-page" : ""}`}
        style={{
          paddingTop: "28px",
          paddingBottom: "16px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* ── HEADER CONTAINER ── */}
        <div
          className="w-full max-w-7xl flex items-center justify-between md:grid"
          style={{
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            height: "72px",
          }}
        >
          {/* COL 1 — LOGO: izquierda */}
          <div className="flex items-center">
            <Link className="transition-opacity hover:opacity-90 block" href="/">
              <Image
                alt="Promedic Antequera"
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-300"
                height={48}
                priority
                src="/images/Promedic.svg"
                width={160}
                style={{ filter: logoFilter }}
              />
            </Link>
          </div>

          {/* COL 2 — CÁPSULA CENTRAL (DESKTOP) con efecto Liquid Glass intacto */}
          <nav className="nav-capsule hidden md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = isLegalPage
                ? false
                : link.href.startsWith("/#")
                ? false
                : link.href === "/"
                ? pathname === "/"
                : (pathname ?? "").startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`whitespace-nowrap text-sm tracking-wide ${
                    isActive
                      ? "active-nav-link bg-[#167589] text-white font-bold shadow-sm"
                      : `font-medium ${
                          isLegalPage || isScrolled ? "text-[#167589]" : "text-white/90"
                        }`
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* COL 3 — ACCIONES (WHATSAPP + MENÚ HAMBURGUESA MOBILE) */}
          <div className="flex items-center justify-end gap-2.5 sm:gap-3">
            {/* Botón WhatsApp */}
            <a
              href="https://wa.me/529513008285"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-whatsapp"
              aria-label="Contactar por WhatsApp"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink-0"
                style={{ fill: "#167589" }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.528 5.865L0 24l6.335-1.482A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.882 9.882 0 0 1-5.031-1.375l-.36-.214-3.742.876.934-3.634-.235-.374A9.842 9.842 0 0 1 2.118 12C2.118 6.543 6.543 2.118 12 2.118c5.457 0 9.882 4.425 9.882 9.882 0 5.457-4.425 9.882-9.882 9.882z" />
              </svg>
              <span className="hidden sm:inline">¡Contáctanos!</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Botón Hamburguesa Mobile */}
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white/25 transition-all shadow-md focus:outline-none"
              style={{
                color: isLegalPage || isScrolled ? "#167589" : "#ffffff",
              }}
              aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu-drawer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: "transform 0.3s cubic-bezier(.22,1,.36,1)",
                  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                {isOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════
          MOBILE DRAWER — BACKDROP
      ══════════════════════════════════════ */}
      <div
        className="md:hidden"
        onClick={() => setIsOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 998,
          background: "rgba(0, 18, 24, 0.55)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════
          MOBILE DRAWER — PANEL
      ══════════════════════════════════════ */}
      <aside
        id="mobile-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          width: "min(320px, 88vw)",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(160deg, #0d5f72 0%, #167589 45%, #1a8a9e 100%)",
          boxShadow: "-12px 0 48px rgba(0,0,0,0.35)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(.22,1,.36,1)",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(167,217,221,0.10)",
            pointerEvents: "none",
          }}
        />

        {/* ── DRAWER HEADER ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 20px 20px 28px",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              alt="Promedic Antequera"
              src="/images/Promedic.svg"
              width={130}
              height={36}
              style={{
                filter: "brightness(0) invert(1)",
                height: "36px",
                width: "auto",
              }}
            />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── NAV ITEMS ── */}
        <nav
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "24px 20px 16px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              marginBottom: "8px",
              paddingLeft: "4px",
            }}
          >
            Navegación
          </p>

          {NAV_LINKS.map((link) => {
            const isActive = isLegalPage
              ? false
              : link.href.startsWith("/#")
              ? false
              : link.href === "/"
              ? pathname === "/"
              : (pathname ?? "").startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "13px 14px 13px 14px",
                  borderRadius: "16px",
                  textDecoration: "none",
                  background: isActive
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0.08)",
                  border: isActive
                    ? "1.5px solid rgba(255,255,255,0.9)"
                    : "1.5px solid rgba(255,255,255,0.12)",
                  color: isActive ? "#167589" : "#ffffff",
                  fontSize: "0.95rem",
                  fontWeight: isActive ? 700 : 500,
                  boxShadow: isActive ? "0 4px 20px rgba(0,0,0,0.18)" : "none",
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                {/* Icon badge */}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: isActive
                      ? "linear-gradient(135deg, #167589, #a7d9dd)"
                      : "rgba(255,255,255,0.12)",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isActive ? "#ffffff" : "rgba(255,255,255,0.85)"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={link.icon} />
                  </svg>
                </span>

                {/* Label */}
                <span style={{ flex: 1, lineHeight: 1.3 }}>{link.name}</span>

                {/* Chevron */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isActive ? "#167589" : "rgba(255,255,255,0.35)"}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            );
          })}
        </nav>

        {/* ── DRAWER FOOTER ── */}
        <div
          style={{
            padding: "20px 20px 36px 28px",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/529513008285?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "14px 20px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.95)",
              color: "#167589",
              fontSize: "0.9rem",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: "#167589", flexShrink: 0 }}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.528 5.865L0 24l6.335-1.482A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.882 9.882 0 0 1-5.031-1.375l-.36-.214-3.742.876.934-3.634-.235-.374A9.842 9.842 0 0 1 2.118 12C2.118 6.543 6.543 2.118 12 2.118c5.457 0 9.882 4.425 9.882 9.882 0 5.457-4.425 9.882-9.882 9.882z" />
            </svg>
            Escríbenos por WhatsApp
          </a>

          {/* Brand tagline */}
          <p
            style={{
              textAlign: "center",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.40)",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            Promedic Antequera — Oaxaca, México
          </p>
        </div>
      </aside>
    </>
  );
}
