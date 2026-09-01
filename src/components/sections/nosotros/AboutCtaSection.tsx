"use client";

import Image from "next/image";

/* ─────────────────────────────────────────
   AboutCtaSection
   CTA Banner al pie de /nosotros.
   Reutiliza el patrón de ProductsCtaSection:
   ilustración flotante + bloque gradiente + botones.
   ───────────────────────────────────────── */
export default function AboutCtaSection() {
  const ILLUSTRATION_H = 300;
  const ABOVE_GRADIENT = Math.round(ILLUSTRATION_H * 0.27);

  return (
    <section
      id="nosotros-cta"
      aria-labelledby="nosotros-cta-heading"
      style={{
        backgroundColor: "#ffffff",
        paddingBottom: 0,
        overflow: "hidden",
      }}
    >
      {/* ── Positioning container ── */}
      <div style={{ position: "relative" }}>

        {/* Floating illustration */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
            marginBottom: -(ILLUSTRATION_H - ABOVE_GRADIENT),
            pointerEvents: "none",
          }}
        >
          <div
            className="animate-cta-float-up"
            style={{
              position: "relative",
              width: "340px",
              height: `${ILLUSTRATION_H}px`,
            }}
          >
            <Image
              src="/illustrations/Contacto_Secciones.png"
              alt="Ilustración 3D de médico con hospital y suministros médicos"
              fill
              sizes="(max-width: 640px) 260px, 340px"
              className="object-contain drop-shadow-[0_24px_48px_rgba(22,117,137,0.28)]"
              loading="lazy"
            />
          </div>
        </div>

        {/* ── Gradient Block ── */}
        <div
          style={{
            background: "linear-gradient(160deg, #167589 0%, #a7d9dd 100%)",
            borderRadius: "40px 40px 0 0",
            paddingTop: "185px",
            paddingBottom: "40px",
            paddingLeft: "24px",
            paddingRight: "24px",
            textAlign: "center",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.20)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>

          {/* Heading */}
          <h2
            id="nosotros-cta-heading"
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.625rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.35,
              letterSpacing: "-0.01em",
              textShadow: "0 2px 12px rgba(0,0,0,0.18)",
              maxWidth: "520px",
              margin: "0 auto 24px",
            }}
          >
            ¿Listo para equipar tu institución médica con insumos certificados?
          </h2>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* WhatsApp CTA */}
            <a
              id="nosotros-cta-whatsapp"
              href="https://wa.me/529513008285"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="btn-cta-whatsapp"
              style={{
                height: "48px",
                paddingLeft: "28px",
                paddingRight: "28px",
                gap: "10px",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{ fill: "#167589", flexShrink: 0 }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.528 5.865L0 24l6.335-1.482A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.882 9.882 0 0 1-5.031-1.375l-.36-.214-3.742.876.934-3.634-.235-.374A9.842 9.842 0 0 1 2.118 12C2.118 6.543 6.543 2.118 12 2.118c5.457 0 9.882 4.425 9.882 9.882 0 5.457-4.425 9.882-9.882 9.882z" />
              </svg>
              ¡Contáctanos!
            </a>

            {/* Catalog download / contact outline CTA */}
            <button
              type="button"
              id="nosotros-cta-catalogo"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-contact-modal"));
              }}
              aria-label="Descarga nuestro catálogo general"
              className="btn-outline-cta"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descarga nuestro catálogo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
