"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Pie de página corporativo de Promedic Antequera"
      style={{ backgroundColor: '#a7d9dd', color: '#ffffff', width: '100%', overflowX: 'hidden' }}
    >

      {/* ── UPPER SECTION ── */}
      <div
        style={{
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '48px',
          alignItems: 'start',
          maxWidth: '100%',
          padding: '56px 80px 48px',
          boxSizing: 'border-box',
        }}
        className="hidden md:grid"
      >
        {/* Col 1 — Logo + Tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <Link
            href="/"
            aria-label="Promedic Antequera — Volver al inicio"
            style={{ display: 'inline-flex', alignSelf: 'flex-start' }}
          >
            <Image
              src="/images/Promedic.svg"
              alt="Promedic Antequera"
              width={180}
              height={48}
              style={{ height: '48px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              loading="lazy"
            />
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '0.85rem', fontWeight: 400, lineHeight: 1.65 }}>
            Tecnología y suministros médicos de alta precisión hospitalaria y bioseguridad.
          </p>
        </div>

        {/* Col 2 — Contacto */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#167589', margin: 0 }}>Contacto</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>
              <a
                href="mailto:contacto@promedicantequera.com"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                contacto@promedicantequera.com
              </a>
            </li>
            <li>
              <a
                href="tel:9516887621"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 5.29 5.29l.95-.96a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7a2 2 0 0 1 1.72 2.04z"/>
                </svg>
                951-688-76-21
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3 — Horario de atención */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#167589', margin: 0 }}>Horario de atención</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: '0.85rem', color: '#ffffff' }}>Lunes a Viernes:</p>
                <p style={{ margin: 0, fontWeight: 400, fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)' }}>09:00 am a 5:00 pm</p>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0, opacity: 0 }}/>
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: '0.85rem', color: '#ffffff' }}>Sábados:</p>
                <p style={{ margin: 0, fontWeight: 400, fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)' }}>09:00 am a 3:00 pm</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ── MOBILE UPPER SECTION ── */}
      <div
        className="flex md:hidden flex-col gap-8"
        style={{ padding: '48px 24px 36px' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link href="#hero" aria-label="Promedic Antequera — Volver al inicio" style={{ display: 'inline-flex', alignSelf: 'flex-start' }}>
            <Image src="/images/Promedic.svg" alt="Promedic Antequera" width={160} height={42} style={{ height: '42px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} loading="lazy" />
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '0.85rem', fontWeight: 400, lineHeight: 1.65, margin: 0 }}>
            Tecnología y suministros médicos de alta precisión hospitalaria y bioseguridad.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#167589', margin: 0 }}>Contacto</h3>
          <a href="mailto:contacto@promedicantequera.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            contacto@promedicantequera.com
          </a>
          <a href="tel:9516887621" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 5.29 5.29l.95-.96a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7a2 2 0 0 1 1.72 2.04z"/>
            </svg>
            951-688-76-21
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#167589', margin: 0 }}>Horario de atención</h3>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: '0.85rem', color: '#ffffff' }}>Lunes a Viernes:</p>
              <p style={{ margin: 0, fontWeight: 400, fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)' }}>09:00 am a 5:00 pm</p>
              <p style={{ margin: '8px 0 0', fontWeight: 700, fontSize: '0.85rem', color: '#ffffff' }}>Sábados:</p>
              <p style={{ margin: 0, fontWeight: 400, fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)' }}>09:00 am a 3:00 pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div style={{ padding: '0 80px' }} className="hidden md:block">
        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.35)', margin: 0 }} />
      </div>
      <div style={{ padding: '0 24px' }} className="block md:hidden">
        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.35)', margin: 0 }} />
      </div>

      {/* ── LOWER BASELINE — Desktop ── */}
      <div
        className="hidden md:flex"
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 80px 28px',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <nav aria-label="Enlaces legales y de privacidad" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <Link
            href="/aviso-de-privacidad"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#167589', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            Aviso de Privacidad
          </Link>
          <Link
            href="/terminos-y-condiciones"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#167589', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            Términos y Condiciones
          </Link>
          <a href="#" style={{ color: '#167589', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>Política de Cookies</a>
          <a href="#" style={{ color: '#167589', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>Preferencia de Cookies</a>
        </nav>
        <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '0.75rem', fontWeight: 400, margin: 0, whiteSpace: 'nowrap' }}>
          Copyright © {currentYear} Promedic Antequera - Todos los derechos reservados.
        </p>
      </div>

      {/* ── LOWER BASELINE — Mobile ── */}
      <div className="flex md:hidden flex-col gap-3" style={{ padding: '16px 24px 32px' }}>
        <nav
          aria-label="Enlaces legales y de privacidad"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, auto)',
            justifyContent: 'start',
            gap: '6px 16px',
            width: '100%',
          }}
        >
          <Link
            href="/aviso-de-privacidad"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#167589', fontSize: '0.62rem', fontWeight: 600, textDecoration: 'none' }}
          >
            Aviso de Privacidad
          </Link>
          <Link
            href="/terminos-y-condiciones"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#167589', fontSize: '0.62rem', fontWeight: 600, textDecoration: 'none' }}
          >
            Términos y Condiciones
          </Link>
          <a href="#" style={{ color: '#167589', fontSize: '0.62rem', fontWeight: 600, textDecoration: 'none' }}>Política de Cookies</a>
          <a href="#" style={{ color: '#167589', fontSize: '0.62rem', fontWeight: 600, textDecoration: 'none' }}>Preferencia de Cookies</a>
        </nav>
        <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '0.68rem', fontWeight: 400, margin: 0 }}>
          Copyright © {currentYear} Promedic Antequera - Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
}
