"use client";

import Image from "next/image";

interface ProductCard {
  id: number;
  title: string;
  image: string;
  description: string;
  alt: string;
}

const PRODUCTS: ProductCard[] = [
  {
    id: 1,
    title: "Infusión y Acceso",
    image: "/images/Infusion_acceso.png",
    description:
      "Catéteres, bombas de infusión y accesos vasculares de alta precisión hospitalaria.",
    alt: "Equipos de infusión y acceso vascular de precisión",
  },
  {
    id: 2,
    title: "Cuidado de Heridas",
    image: "/images/Cuidado_de_heridas.png",
    description:
      "Apósitos avanzados, manejo de fracturas e inmovilización ortopédica especializada.",
    alt: "Materiales avanzados para el cuidado de heridas y ortopedia",
  },
  {
    id: 3,
    title: "EPP & Consumibles",
    image: "/images/EPP_consumibles.png",
    description:
      "Guantes especializados, ropa médica descartable y respiradores de alta eficiencia para la máxima bioseguridad del personal.",
    alt: "Equipos de protección personal y consumibles médicos",
  },
  {
    id: 4,
    title: "Diagnóstico Clínico",
    image: "/images/Diagnostico_clinico.png",
    description:
      "Instrumentos de auscultación y herramientas de diagnóstico de alta fidelidad para evaluaciones.",
    alt: "Instrumentos de diagnóstico clínico de alta fidelidad",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="productos"
      aria-labelledby="productos-heading"
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: '80px', paddingBottom: '96px' }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, right: 0, zIndex: 0,
          width: '320px', height: '320px', borderRadius: '9999px',
          background: 'rgba(167,217,221,0.12)', filter: 'blur(80px)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: 0, left: 0, zIndex: 0,
          width: '400px', height: '400px', borderRadius: '9999px',
          background: 'rgba(22,117,137,0.06)', filter: 'blur(80px)',
        }}
      />

      <div
        style={{
          position: 'relative', zIndex: 1,
          maxWidth: '880px', margin: '0 auto',
          paddingLeft: '24px', paddingRight: '24px',
        }}
      >
        {/* ── ENCABEZADO ── */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            id="productos-heading"
            style={{
              fontSize: '1.5rem',          /* 24px — más pequeño que la versión anterior */
              fontWeight: 700,
              letterSpacing: '-0.01em',
              color: '#167589',            /* Brand Primary */
              marginBottom: '16px',
              lineHeight: 1.3,
            }}
          >
            Nuestros <strong style={{ fontWeight: 800 }}>productos</strong>
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#666666',
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: '420px',
              margin: '0 auto',
            }}
          >
            Todo lo que tu institución médica necesita en un{' '}
            <strong style={{ color: '#167589', fontWeight: 700 }}>solo lugar</strong>
          </p>
        </div>

        {/* ── GRID 2×2 DESKTOP / 1 col mobile ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '28px',
          }}
          /* 1 col on mobile via inline media query not supported — use className fallback */
          className="products-grid"
        >
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="product-card group"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'linear-gradient(160deg, #167589 0%, #a7d9dd 100%)',
                padding: '36px 32px 28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 4px 24px rgba(22,117,137,0.12)',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                cursor: 'default',
              }}
            >
              {/* Title */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}
              >
                {product.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.88)',
                  fontWeight: 400,
                  lineHeight: 1.65,
                  maxWidth: '320px',
                  margin: '0 auto',
                }}
              >
                {product.description}
              </p>

              {/* Icon */}
              <div
                className="animate-float-icon md:animate-none md:group-hover:scale-110 md:group-hover:rotate-3 md:transition-transform md:duration-500"
                style={{
                  marginTop: '36px',
                  width: '160px',
                  height: '160px',
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="160px"
                  className="object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)]"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
