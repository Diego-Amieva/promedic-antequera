"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/productos" },
  { name: "Preguntas frecuentes", href: "/#confianza" },
  { name: "Facturación", href: "/#contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  // Filter to convert white SVG logo to Brand Primary (#167589) on white background sections
  const brandLogoFilter =
    "brightness(0) saturate(100%) invert(34%) sepia(91%) saturate(740%) hue-rotate(141deg) brightness(92%) contrast(94%)";

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full flex justify-center pt-6 md:pt-10 pb-4 px-4 sm:px-6 md:px-12 lg:px-16 bg-transparent">
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
              style={{
                filter: isScrolled ? brandLogoFilter : "none",
              }}
            />
          </Link>
        </div>

        {/* COL 2 — CÁPSULA CENTRAL (DESKTOP) con efecto Liquid Glass intacto */}
        <nav className="nav-capsule hidden md:flex">
          {NAV_LINKS.map((link) => {
            // Anchor-only links (/#section) are never a "current page" — only real routes match
            const isActive = link.href.startsWith("/#")
              ? false
              : link.href === "/"
              ? pathname === "/"
              : (pathname ?? "").startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-[#167589] text-white rounded-full font-bold text-sm tracking-wide shadow-md flex items-center justify-center"
                    : "font-medium text-sm transition-colors tracking-wide px-3 py-2 block hover:opacity-80"
                }`}
                style={
                  isActive
                    ? {
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        paddingTop: "7px",
                        paddingBottom: "7px",
                        color: "#ffffff",
                      }
                    : {
                        color: isScrolled ? "#167589" : "rgba(255, 255, 255, 0.90)",
                        fontWeight: isScrolled ? 700 : 500,
                      }
                }
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
            href="https://wa.me/529516887621"
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
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white/25 transition-all shadow-md focus:outline-none"
            style={{
              color: isScrolled ? "#167589" : "#ffffff",
            }}
            aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU OVERLAY ── */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[72px] z-40 bg-[#167589]/95 backdrop-blur-xl md:hidden flex flex-col p-6 animate-fade-down shadow-2xl"
          style={{ height: "calc(100vh - 72px)" }}
        >
          <div className="flex flex-col gap-3 mt-2">
            {NAV_LINKS.map((link) => {
              const isActive = link.href.startsWith("/#")
                ? false
                : link.href === "/"
                ? pathname === "/"
                : (pathname ?? "").startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold py-3.5 px-6 rounded-2xl transition-all flex items-center justify-between ${
                    isActive ? "bg-white text-[#167589] shadow-lg" : "text-white bg-white/10 hover:bg-white/20"
                  }`}
                >
                  <span>{link.name}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={isActive ? "text-[#167589]" : "text-white/60"}>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-6 border-t border-white/20 text-center text-white/80 text-xs font-medium">
            <p>Promedic Antequera — Oaxaca, México</p>
          </div>
        </div>
      )}
    </header>
  );
}
