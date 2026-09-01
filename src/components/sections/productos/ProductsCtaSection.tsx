"use client";

import Image from "next/image";

/* ─────────────────────────────────────────
   ProductsCtaSection
   Segmento CTA al pie de la sección /productos,
   justo encima del Footer.

   Layout:
   · La ilustración Contact_Products.png se posiciona
     centrada; solo el 20-30% superior rebasa el fondo
     (el resto queda dentro del bloque gradiente).
   · Fondo: gradiente brand-primary → brand-secondary
     con esquinas superiores redondeadas.
   · Texto e botones centrados.
   ───────────────────────────────────────── */
export default function ProductsCtaSection() {
  /* 
   * CÁLCULO DEL OVERLAP:
   * La imagen tiene height: ILLUSTRATION_H px.
   * El bloque gradiente arranca paddingTop: OVERLAP px desde el borde superior del wrapper.
   * La ilustración se posiciona con marginBottom negativo para "hundirla" dentro del bloque.
   *
   * Con ILLUSTRATION_H = 300 y OVERLAP = 210:
   *   — 90px (~30%) quedan por encima del gradiente  ← contraste con fondo blanco
   *   — 210px (~70%) quedan dentro del gradiente
   */
  const ILLUSTRATION_H = 300;
  const ABOVE_GRADIENT = Math.round(ILLUSTRATION_H * 0.27); // ~80px visibles sobre el gradiente

  return (
    <section
      id="productos-cta"
      aria-labelledby="productos-cta-heading"
      style={{
        /* Fondo blanco puro #ffffff */
        backgroundColor: "#ffffff",
        /* Sin padding propio — dejamos que el gradiente llene hasta el fondo */
        paddingBottom: 0,
        overflow: "hidden",
      }}
    >
      {/* ── Contenedor de posicionamiento ── */}
      <div style={{ position: "relative" }}>

        {/* Ilustración — centrada, colgando sobre el bloque gradiente */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
            /* Empujamos hacia abajo para que solo ABOVE_GRADIENT px queden en el fondo gris */
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
              priority
            />
          </div>
        </div>

        {/* ── Bloque gradiente ── */}
        <div
          style={{
            background: "linear-gradient(160deg, #167589 0%, #a7d9dd 100%)",
            borderRadius: "40px 40px 0 0",
            /* paddingTop a 185px para dar espacio limpio entre la ilustración y el texto */
            paddingTop: "185px",
            paddingBottom: "40px",
            paddingLeft: "24px",
            paddingRight: "24px",
            textAlign: "center",
          }}
        >
          {/* Heading */}
          <h2
            id="productos-cta-heading"
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.625rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.35,
              letterSpacing: "-0.01em",
              textShadow: "0 2px 12px rgba(0,0,0,0.18)",
              maxWidth: "480px",
              margin: "0 auto 24px",
            }}
          >
            ¿Buscas un producto en específico o necesitas orientación?
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
            {/* WhatsApp — pill relleno oscuro con hover */}
            <a
              id="productos-cta-whatsapp"
              href="https://wa.me/529513008285"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar cotización por WhatsApp"
              className="btn-hero-cta"
              style={{
                marginTop: 0,
                height: "48px",
                paddingLeft: "28px",
                paddingRight: "28px",
                gap: "10px",
              }}
            >
              <Image
                src="/icons/whatsapp.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
                style={{ flexShrink: 0, filter: "brightness(0) invert(1)" }}
              />
              Solicitar cotización por WhatsApp
            </a>

            {/* Déjanos tus datos — pill outlined blanco con hover que abre el modal de contacto */}
            <button
              type="button"
              id="productos-cta-contacto"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-contact-modal"));
              }}
              aria-label="Abrir formulario de contacto"
              className="btn-outline-cta"
            >
              <Image
                src="/icons/contact-book.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              Déjanos tus datos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
