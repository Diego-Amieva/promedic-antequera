"use client";

import { useState, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────
   Types & constants
   ───────────────────────────────────────── */
const STORAGE_KEY = "promedic_cookie_consent";

interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean, marketing: boolean) {
  const state: ConsentState = {
    necessary: true,
    analytics,
    marketing,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/* ─────────────────────────────────────────
   Toggle Switch (pure CSS, accessible)
   ───────────────────────────────────────── */
interface ToggleProps {
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}
function Toggle({ id, checked, disabled = false, onChange }: ToggleProps) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={() => !disabled && onChange?.(!checked)}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        width: "44px",
        height: "24px",
        borderRadius: "12px",
        border: "none",
        padding: 0,
        cursor: disabled ? "not-allowed" : "pointer",
        backgroundColor: checked ? "#167589" : "#cbd5e1",
        transition: "background-color 0.25s ease",
        flexShrink: 0,
        outline: "none",
      }}
      onFocus={(e) => {
        if (!disabled)
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 0 0 3px rgba(22,117,137,0.3)";
      }}
      onBlur={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
      }}
    >
      <span
        style={{
          position: "absolute",
          left: checked ? "22px" : "2px",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          transition: "left 0.25s ease",
        }}
      />
    </button>
  );
}

/* ─────────────────────────────────────────
   Cookie Option Row
   ───────────────────────────────────────── */
interface OptionRowProps {
  toggleId: string;
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  badge?: string;
  onChange?: (v: boolean) => void;
}
function OptionRow({
  toggleId,
  title,
  description,
  checked,
  disabled,
  badge,
  onChange,
}: OptionRowProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "16px",
        borderRadius: "14px",
        backgroundColor: "#f8fafc",
        border: "1px solid #e2e8f0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          <label
            htmlFor={toggleId}
            style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "#0f172a",
              cursor: disabled ? "default" : "pointer",
            }}
          >
            {title}
          </label>
          {badge && (
            <span
              style={{
                backgroundColor: "rgba(22,117,137,0.1)",
                color: "#167589",
                fontWeight: 600,
                fontSize: "0.68rem",
                padding: "3px 10px",
                borderRadius: "999px",
                whiteSpace: "nowrap",
                letterSpacing: "0.02em",
              }}
            >
              {badge}
            </span>
          )}
        </div>
        <Toggle
          id={toggleId}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
      <p
        style={{
          margin: 0,
          fontSize: "0.8rem",
          color: "#64748b",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   Cookie Preferences Modal
   ───────────────────────────────────────── */
interface ModalProps {
  isOpen: boolean;
  analytics: boolean;
  marketing: boolean;
  onAnalyticsChange: (v: boolean) => void;
  onMarketingChange: (v: boolean) => void;
  onReject: () => void;
  onSave: () => void;
  onClose: () => void;
}
function CookieModal({
  isOpen,
  analytics,
  marketing,
  onAnalyticsChange,
  onMarketingChange,
  onReject,
  onSave,
  onClose,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes cookie-modal-in {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes cookie-backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(15,23,42,0.6)",
          backdropFilter: "blur(4px)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          animation: "cookie-backdrop-in 0.2s ease forwards",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          style={{
            backgroundColor: "#ffffff",
            maxWidth: "576px",
            width: "100%",
            borderRadius: "24px",
            padding: "clamp(24px, 4vw, 32px)",
            boxShadow:
              "0 25px 50px -12px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            animation: "cookie-modal-in 0.25s cubic-bezier(0.16,1,0.3,1) forwards",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <div>
              <h2
                id="cookie-modal-title"
                style={{
                  margin: "0 0 8px",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#0f172a",
                }}
              >
                Preferencias de cookies
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.8rem",
                  color: "#64748b",
                  lineHeight: 1.6,
                }}
              >
                De acuerdo con la legislación de privacidad aplicable, puedes
                configurar qué tipo de cookies permites en este sitio. Las
                cookies estrictamente necesarias son obligatorias.
              </p>
            </div>
            <button
              id="cookie-modal-close"
              aria-label="Cerrar preferencias de cookies"
              onClick={onClose}
              style={{
                border: "none",
                background: "#f1f5f9",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                minWidth: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
                color: "#475569",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#e2e8f0")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#f1f5f9")
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <OptionRow
              toggleId="cookie-toggle-necessary"
              title="Estrictamente necesarias"
              description="Indispensables para la navegación básica, seguridad del sitio, funcionamiento del formulario de contacto y para guardar tus preferencias de privacidad."
              checked={true}
              disabled={true}
              badge="SIEMPRE ACTIVAS"
            />
            <OptionRow
              toggleId="cookie-toggle-analytics"
              title="Cookies de análisis y rendimiento"
              description="Nos permiten medir de forma agregada cómo interactúan los usuarios con nuestras páginas de productos, detectar errores y optimizar el rendimiento del sitio."
              checked={analytics}
              onChange={onAnalyticsChange}
            />
            <OptionRow
              toggleId="cookie-toggle-marketing"
              title="Cookies de marketing y publicidad"
              description="Se utilizan para medir la efectividad de campañas comerciales de insumos médicos sin realizar perfiles individuales invasivos."
              checked={marketing}
              onChange={onMarketingChange}
            />
          </div>

          {/* Footer actions */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "flex-end",
              flexWrap: "wrap",
            }}
          >
            <button
              id="cookie-modal-reject"
              onClick={onReject}
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                border: "1.5px solid #cbd5e1",
                backgroundColor: "transparent",
                color: "#475569",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "border-color 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.borderColor = "#167589";
                b.style.color = "#167589";
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.borderColor = "#cbd5e1";
                b.style.color = "#475569";
              }}
            >
              Rechazar opcionales
            </button>
            <button
              id="cookie-modal-save"
              onClick={onSave}
              style={{
                padding: "10px 24px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#167589",
                color: "#ffffff",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "background-color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0f5260")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#167589")
              }
            >
              Guardar configuración
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────
   Cookie Consent Banner (first-visit)
   ───────────────────────────────────────── */
interface BannerProps {
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onConfigure: () => void;
}
function CookieBanner({ onAcceptAll, onRejectAll, onConfigure }: BannerProps) {
  return (
    <>
      <style>{`
        @keyframes cookie-banner-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div
        role="region"
        aria-label="Aviso de cookies"
        style={{
          position: "fixed",
          bottom: "16px",
          left: "16px",
          right: "16px",
          zIndex: 9998,
          animation: "cookie-banner-in 0.35s cubic-bezier(0.16,1,0.3,1) forwards",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "20px 24px",
            boxShadow:
              "0 20px 40px -8px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.06)",
            border: "1px solid #e2e8f0",
            maxWidth: "448px",
            marginLeft: "auto",
            marginRight: 0,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            pointerEvents: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "1.4rem" }} aria-hidden="true">🍪</span>
            <h3
              style={{
                margin: 0,
                fontSize: "0.975rem",
                fontWeight: 800,
                color: "#0f172a",
              }}
            >
              Aviso de Cookies
            </h3>
          </div>

          <p
            style={{
              margin: 0,
              fontSize: "0.8rem",
              color: "#475569",
              lineHeight: 1.65,
            }}
          >
            Utilizamos cookies propias y de terceros para optimizar tu
            experiencia y analizar el uso de nuestro catálogo médico.{" "}
            <a
              href="/politica-de-cookies"
              style={{
                color: "#167589",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Más información
            </a>
            .
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <button
              id="cookie-banner-accept"
              onClick={onAcceptAll}
              style={{
                width: "100%",
                padding: "11px 16px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#167589",
                color: "#ffffff",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "background-color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0f5260")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#167589")
              }
            >
              Aceptar todas
            </button>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                id="cookie-banner-reject"
                onClick={onRejectAll}
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: "1.5px solid #e2e8f0",
                  backgroundColor: "transparent",
                  color: "#64748b",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "border-color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.borderColor = "#94a3b8")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.borderColor = "#e2e8f0")
                }
              >
                Rechazar opcionales
              </button>
              <button
                id="cookie-banner-configure"
                onClick={onConfigure}
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: "1.5px solid #167589",
                  backgroundColor: "transparent",
                  color: "#167589",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "background-color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "rgba(22,117,137,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "transparent";
                }}
              >
                Configurar →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────
   Main exported component
   ───────────────────────────────────────── */
export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const stored = readConsent();
    if (!stored) {
      setShowBanner(true);
    } else {
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
    }
  }, []);

  // Listen for open-cookie-modal event (triggered from Footer)
  useEffect(() => {
    const openModal = () => {
      const stored = readConsent();
      if (stored) {
        setAnalytics(stored.analytics);
        setMarketing(stored.marketing);
      }
      setShowModal(true);
    };
    window.addEventListener("open-cookie-modal", openModal);
    return () => window.removeEventListener("open-cookie-modal", openModal);
  }, []);

  const handleAcceptAll = useCallback(() => {
    setAnalytics(true);
    setMarketing(true);
    saveConsent(true, true);
    setShowBanner(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    setAnalytics(false);
    setMarketing(false);
    saveConsent(false, false);
    setShowBanner(false);
    setShowModal(false);
  }, []);

  const handleSave = useCallback(() => {
    saveConsent(analytics, marketing);
    setShowBanner(false);
    setShowModal(false);
  }, [analytics, marketing]);

  const handleOpenModal = useCallback(() => {
    setShowBanner(false);
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {showModal && (
        <CookieModal
          isOpen={showModal}
          analytics={analytics}
          marketing={marketing}
          onAnalyticsChange={setAnalytics}
          onMarketingChange={setMarketing}
          onReject={handleRejectAll}
          onSave={handleSave}
          onClose={handleCloseModal}
        />
      )}
      {showBanner && !showModal && (
        <CookieBanner
          onAcceptAll={handleAcceptAll}
          onRejectAll={handleRejectAll}
          onConfigure={handleOpenModal}
        />
      )}
    </>
  );
}
