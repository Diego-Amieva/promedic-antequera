"use client";

export default function LocationSection() {
  return (
    <section
      id="ubicacion"
      aria-labelledby="ubicacion-heading"
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: '80px', paddingBottom: '96px' }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '880px',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        {/* ── HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            id="ubicacion-heading"
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              color: '#167589',
              lineHeight: 1.3,
              marginBottom: '12px',
            }}
          >
            ¡Ven y <strong style={{ fontWeight: 800 }}>conócenos!</strong>
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#666666',
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            Visita nuestras oficinas corporativas o coordina una entrega directa en los almacenes de tu institución.
          </p>
        </div>

        {/* ── MAP CONTAINER ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '420px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 12px 40px rgba(22, 117, 137, 0.12)',
            border: '1px solid rgba(22, 117, 137, 0.15)',
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=17.0807208,-96.7200027+(Promedic+Antequera)&t=&z=17&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación de Promedic Antequera en Oaxaca"
          />
        </div>

        {/* ── CALL TO ACTION ── */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <a
            href="https://maps.app.goo.gl/bf9XhZpkoWynWo1L7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver la ubicación de Promedic Antequera en Google Maps (se abre en una pestaña nueva)"
            className="btn-hero-cta"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 shrink-0"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Obtener ubicación
          </a>
        </div>
      </div>
    </section>
  );
}
