"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [consentChecked, setConsentChecked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ nombre: "", empresa: "", correo: "", mensaje: "" });
      setConsentChecked(false);
    }, 1500);
  };

  /* ── Shared input field style ── */
  const inputStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    paddingLeft: '48px',
    paddingRight: '16px',
    paddingTop: '14px',
    paddingBottom: '14px',
    background: 'rgba(255,255,255,0.92)',
    border: '1.5px solid rgba(255,255,255,0.6)',
    borderRadius: '16px',
    color: '#1e293b',
    fontSize: '0.9rem',
    fontWeight: 500,
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    fontFamily: 'inherit',
  };

  const iconStyle: React.CSSProperties = {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: '#167589',
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #a7d9dd 35%, #167589 100%)',
        paddingTop: '32px',
        paddingBottom: '96px',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '560px',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          marginTop: '-32px',
        }}
      >
        {/* ── ILLUSTRATION ── */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div
            className="animate-float-icon"
            style={{ position: 'relative', width: '360px', height: '360px' }}
          >
            <Image
              src="/illustrations/Contacto.png"
              alt="Ilustración de asesor médico listo para ayudarte"
              fill
              sizes="360px"
              className="object-contain drop-shadow-[0_20px_35px_rgba(22,117,137,0.22)]"
              priority
            />
          </div>
        </div>

        {/* ── HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2
            id="contacto-heading"
            style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              lineHeight: 1.25,
              textShadow: '0 2px 12px rgba(0,0,0,0.22)',
              marginBottom: '12px',
            }}
          >
            ¡Estamos listos para ayudarte!
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.90)',
              fontWeight: 400,
              lineHeight: 1.6,
              textShadow: '0 1px 6px rgba(0,0,0,0.15)',
            }}
          >
            Un asesor especializado procesará tu solicitud para enviarte una propuesta comercial a la medida.
          </p>
        </div>

        {/* ── FORM ── */}
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          {/* Nombre y Apellido */}
          <div style={{ position: 'relative' }}>
            <label htmlFor="nombre" className="sr-only">Nombre y Apellido</label>
            <span style={iconStyle} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </span>
            <input
              type="text"
              name="nombre"
              id="nombre"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              placeholder="Nombre y Apellido"
              style={inputStyle}
            />
          </div>

          {/* Empresa */}
          <div style={{ position: 'relative' }}>
            <label htmlFor="empresa" className="sr-only">Empresa</label>
            <span style={iconStyle} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M9 8h1m-1 4h1m4-4h1m-1 4h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
              </svg>
            </span>
            <input
              type="text"
              name="empresa"
              id="empresa"
              required
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              placeholder="Empresa"
              style={inputStyle}
            />
          </div>

          {/* Correo Electrónico */}
          <div style={{ position: 'relative' }}>
            <label htmlFor="correo" className="sr-only">Correo electrónico</label>
            <span style={iconStyle} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </span>
            <input
              type="email"
              name="correo"
              id="correo"
              required
              value={formData.correo}
              onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
              placeholder="Correo electrónico"
              style={inputStyle}
            />
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="mensaje" className="sr-only">Mensaje</label>
            <textarea
              name="mensaje"
              id="mensaje"
              rows={4}
              required
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              placeholder="Mensaje..."
              style={{
                ...inputStyle,
                paddingLeft: '16px',
                resize: 'none',
                height: 'auto',
              }}
            />
          </div>

          {/* Consent Checkbox */}
          <label
            htmlFor="home-consent"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              cursor: "pointer",
              marginTop: "4px",
            }}
          >
            <input
              type="checkbox"
              id="home-consent"
              name="consent"
              required
              checked={consentChecked}
              onChange={(e) => setConsentChecked(e.target.checked)}
              style={{
                width: "18px",
                height: "18px",
                marginTop: "2px",
                flexShrink: 0,
                accentColor: "#167589",
                cursor: "pointer",
              }}
            />
            <span
              style={{
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Acepto los{" "}
              <Link
                href="/terminos-y-condiciones"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a7d9dd", textDecoration: "underline", fontWeight: 600 }}
              >
                Términos y Condiciones
              </Link>{" "}
              y el tratamiento de mis datos personales por{" "}
              <strong style={{ color: "#ffffff", fontWeight: 700 }}>PROMEDIC ANTEQUERA</strong>{" "}
              para gestionar mi solicitud, de conformidad con el{" "}
              <Link
                href="/aviso-de-privacidad"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a7d9dd", textDecoration: "underline", fontWeight: 600 }}
              >
                Aviso de Privacidad Simplificado
              </Link>
              .
            </span>
          </label>

          {/* Submit Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
            <button
              type="submit"
              disabled={status === "sending" || !consentChecked}
              className="btn-hero-cta"
              style={{
                backgroundColor: '#a7d9dd',
                color: '#ffffff',
                opacity: status === "sending" || !consentChecked ? 0.55 : 1,
                cursor: !consentChecked ? 'not-allowed' : 'pointer',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              }}
            >
              {status === "sending" ? (
                <>
                  <svg className="animate-spin shrink-0" width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Enviar
                </>
              )}
            </button>
          </div>

          {/* Success Message */}
          {status === "success" && (
            <p className="text-white text-sm font-semibold text-center animate-fade-up" role="alert"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}>
              ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
