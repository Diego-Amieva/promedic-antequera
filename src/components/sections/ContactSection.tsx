"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type Status = "idle" | "sending" | "success" | "error";

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
}

const EMPTY_FORM: FormData = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  mensaje: "",
};

const WHATSAPP_URL =
  "https://wa.me/529513008285?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20servicios.";


/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [consentChecked, setConsentChecked] = useState(false);

  /* ── Submit handler ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentChecked) return;

    setStatus("sending");

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          empresa: formData.empresa,
          email: formData.email,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
          acepto_terminos: true,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData(EMPTY_FORM);
        setConsentChecked(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  /* ── Shared styles ── */
  const inputStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    paddingLeft: "48px",
    paddingRight: "16px",
    paddingTop: "14px",
    paddingBottom: "14px",
    background: "rgba(255,255,255,0.92)",
    border: "1.5px solid rgba(255,255,255,0.6)",
    borderRadius: "16px",
    color: "#1e293b",
    fontSize: "0.9rem",
    fontWeight: 500,
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    fontFamily: "inherit",
  };

  const iconStyle: React.CSSProperties = {
    position: "absolute",
    left: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    color: "#167589",
  };

  const isBusy = status === "sending";
  const isDisabled = isBusy || !consentChecked;

  return (
    <>
      {/* ══════════════════════════════════════
          SUCCESS MODAL OVERLAY
      ══════════════════════════════════════ */}
      {status === "success" && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            animation: "fadeIn 0.25s ease",
          }}
          onClick={() => setStatus("idle")}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f0fafc 100%)",
              borderRadius: "24px",
              padding: "40px 32px",
              maxWidth: "400px",
              width: "100%",
              textAlign: "center",
              boxShadow: "0 24px 60px rgba(22,117,137,0.25)",
              animation: "slideUp 0.3s cubic-bezier(.22,1,.36,1)",
            }}
          >
            {/* Checkmark icon */}
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #167589 0%, #a7d9dd 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                boxShadow: "0 8px 24px rgba(22,117,137,0.35)",
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h3
              id="success-modal-title"
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: "#167589",
                marginBottom: "10px",
                letterSpacing: "-0.02em",
              }}
            >
              ¡Solicitud Enviada!
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#475569",
                lineHeight: 1.6,
                marginBottom: "28px",
              }}
            >
              Un asesor atenderá tu mensaje a la brevedad.
            </p>
            <button
              id="success-modal-close"
              onClick={() => setStatus("idle")}
              style={{
                background: "linear-gradient(135deg, #167589 0%, #a7d9dd 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "14px",
                padding: "12px 32px",
                fontSize: "0.95rem",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                boxShadow: "0 4px 16px rgba(22,117,137,0.3)",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(22,117,137,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(22,117,137,0.3)";
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════
          SECTION
      ══════════════════════════════════════ */}
      <section
        id="contacto"
        aria-labelledby="contacto-heading"
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #a7d9dd 35%, #167589 100%)",
          paddingTop: "32px",
          paddingBottom: "96px",
        }}
      >
        {/* Keyframe styles injected once */}
        <style>{`
          @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
          @keyframes slideUp { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
        `}</style>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "560px",
            margin: "0 auto",
            paddingLeft: "24px",
            paddingRight: "24px",
            marginTop: "-32px",
          }}
        >
          {/* ── ILLUSTRATION ── */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
            <div
              className="animate-float-icon"
              style={{ position: "relative", width: "360px", height: "360px" }}
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
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2
              id="contacto-heading"
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                lineHeight: 1.25,
                textShadow: "0 2px 12px rgba(0,0,0,0.22)",
                marginBottom: "12px",
              }}
            >
              ¡Estamos listos para ayudarte!
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.90)",
                fontWeight: 400,
                lineHeight: 1.6,
                textShadow: "0 1px 6px rgba(0,0,0,0.15)",
              }}
            >
              Un asesor especializado procesará tu solicitud para enviarte una propuesta
              comercial a la medida.
            </p>
          </div>

          {/* ── FORM ── */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Nombre y Apellido */}
            <div style={{ position: "relative" }}>
              <label htmlFor="nombre" className="sr-only">
                Nombre y Apellido
              </label>
              <span style={iconStyle} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <input
                type="text"
                name="nombre"
                id="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre y Apellido"
                style={inputStyle}
              />
            </div>

            {/* Empresa */}
            <div style={{ position: "relative" }}>
              <label htmlFor="empresa" className="sr-only">
                Empresa
              </label>
              <span style={iconStyle} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M9 8h1m-1 4h1m4-4h1m-1 4h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                </svg>
              </span>
              <input
                type="text"
                name="empresa"
                id="empresa"
                required
                value={formData.empresa}
                onChange={handleChange}
                placeholder="Empresa"
                style={inputStyle}
              />
            </div>

            {/* Correo Electrónico */}
            <div style={{ position: "relative" }}>
              <label htmlFor="email" className="sr-only">
                Correo electrónico
              </label>
              <span style={iconStyle} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                style={inputStyle}
              />
            </div>

            {/* Teléfono */}
            <div style={{ position: "relative" }}>
              <label htmlFor="telefono" className="sr-only">
                Teléfono
              </label>
              <span style={iconStyle} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12 19.79 19.79 0 0 1 1.65 3.42 2 2 0 0 1 3.62 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.17 6.17l.97-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.92 16.92z" />
                </svg>
              </span>
              <input
                type="tel"
                name="telefono"
                id="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono (opcional)"
                style={inputStyle}
              />
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="mensaje" className="sr-only">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                id="mensaje"
                rows={4}
                required
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Mensaje..."
                style={{
                  ...inputStyle,
                  paddingLeft: "16px",
                  resize: "none",
                  height: "auto",
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
                <strong style={{ color: "#ffffff", fontWeight: 700 }}>
                  PROMEDIC ANTEQUERA
                </strong>{" "}
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

            {/* ERROR ALERT */}
            {status === "error" && (
              <div
                role="alert"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1.5px solid rgba(255,255,255,0.5)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  color: "#ffffff",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  textAlign: "center",
                }}
              >
                <strong style={{ display: "block", marginBottom: "6px", fontSize: "0.95rem" }}>
                  ⚠️ Algo salió mal al enviar tu solicitud.
                </strong>
                Por favor intenta de nuevo o escríbenos directamente por{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#a7d9dd",
                    fontWeight: 700,
                    textDecoration: "underline",
                  }}
                >
                  WhatsApp
                </a>
                .
                <br />
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: "10px",
                    background: "rgba(255,255,255,0.25)",
                    border: "1px solid rgba(255,255,255,0.5)",
                    borderRadius: "10px",
                    color: "#ffffff",
                    padding: "6px 18px",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  Reintentar
                </button>
              </div>
            )}

            {/* Submit Button */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "8px" }}>
              <button
                id="contact-submit-btn"
                type="submit"
                disabled={isDisabled}
                className="btn-hero-cta"
                style={{
                  backgroundColor: "#a7d9dd",
                  color: "#ffffff",
                  opacity: isDisabled ? 0.55 : 1,
                  cursor: !consentChecked ? "not-allowed" : "pointer",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  transition: "opacity 0.2s",
                }}
              >
                {isBusy ? (
                  <>
                    <svg
                      className="animate-spin shrink-0"
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Enviando solicitud...
                  </>
                ) : (
                  <>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                      aria-hidden="true"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Enviar mensaje
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
