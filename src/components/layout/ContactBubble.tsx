"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ContactBubble() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const pathname = usePathname();

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Handle click on the liquid glass bubble
  const handleBubbleClick = () => {
    if (pathname === "/") {
      const contactSection = document.getElementById("contacto");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = "#contacto";
      }
    } else {
      setIsModalOpen(true);
    }
  };

  // Handle form submission inside the modal
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ nombre: "", empresa: "", correo: "", mensaje: "" });
      // Auto-close modal after 2.5 seconds on success
      setTimeout(() => {
        setIsModalOpen(false);
        setStatus("idle");
      }, 2500);
    }, 1500);
  };

  // Shared input style matching the ContactSection design
  const inputStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    paddingLeft: "46px",
    paddingRight: "16px",
    paddingTop: "12px",
    paddingBottom: "12px",
    background: "rgba(248, 250, 252, 0.95)",
    border: "1.5px solid rgba(203, 213, 225, 0.8)",
    borderRadius: "14px",
    color: "#0f172a",
    fontSize: "0.875rem",
    fontWeight: 500,
    outline: "none",
    transition: "all 0.2s ease",
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

  return (
    <>
      {/* ── LIQUID GLASS FLOATING BUBBLE ── */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={handleBubbleClick}
          aria-label={
            pathname === "/"
              ? "Ir al formulario de contacto"
              : "Abrir formulario de contacto"
          }
          className="group relative flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
          style={{
            width: "60px",
            height: "60px",
            background:
              "linear-gradient(135deg, rgba(22, 117, 137, 0.88) 0%, rgba(26, 143, 168, 0.95) 100%)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1.5px solid rgba(255, 255, 255, 0.45)",
            boxShadow:
              "0 12px 32px rgba(22, 117, 137, 0.40), inset 0 1px 1px rgba(255, 255, 255, 0.6)",
          }}
        >
          {/* Subtle glowing ring background */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[#167589]/20 animate-ping opacity-75 pointer-events-none"
            style={{ animationDuration: "3s" }}
          />

          {/* Message Icon */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            aria-hidden="true"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            <path d="M8 12h.01" />
            <path d="M12 12h.01" />
            <path d="M16 12h.01" />
          </svg>

          {/* Tooltip on Desktop Hover */}
          <span
            className="pointer-events-none absolute right-full mr-3 hidden sm:block whitespace-nowrap rounded-full bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2"
          >
            {pathname === "/" ? "Ir a contacto" : "Mensaje de contacto"}
          </span>
        </button>
      </div>

      {/* ── MODAL (OTHER SECTIONS) ── */}
      {isModalOpen && pathname !== "/" && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-contact-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-lg bg-white/95 backdrop-blur-xl border border-white/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden transition-all transform scale-100"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: "0 24px 64px rgba(22, 117, 137, 0.25)",
            }}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Cerrar ventana de contacto"
              className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-slate-100/80 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors focus:outline-none"
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
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#167589]/10 text-[#167589] mb-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h2
                id="modal-contact-title"
                className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
              >
                ¡Estamos listos para ayudarte!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Un asesor especializado procesará tu solicitud para enviarte una propuesta comercial a la medida.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Nombre */}
              <div className="relative">
                <label htmlFor="modal-nombre" className="sr-only">
                  Nombre y Apellido
                </label>
                <span style={iconStyle} aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="nombre"
                  id="modal-nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  placeholder="Nombre y Apellido"
                  style={inputStyle}
                  className="focus:border-[#167589] focus:ring-2 focus:ring-[#167589]/20"
                />
              </div>

              {/* Empresa */}
              <div className="relative">
                <label htmlFor="modal-empresa" className="sr-only">
                  Empresa
                </label>
                <span style={iconStyle} aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18M9 8h1m-1 4h1m4-4h1m-1 4h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="empresa"
                  id="modal-empresa"
                  required
                  value={formData.empresa}
                  onChange={(e) =>
                    setFormData({ ...formData, empresa: e.target.value })
                  }
                  placeholder="Empresa"
                  style={inputStyle}
                  className="focus:border-[#167589] focus:ring-2 focus:ring-[#167589]/20"
                />
              </div>

              {/* Correo */}
              <div className="relative">
                <label htmlFor="modal-correo" className="sr-only">
                  Correo electrónico
                </label>
                <span style={iconStyle} aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="correo"
                  id="modal-correo"
                  required
                  value={formData.correo}
                  onChange={(e) =>
                    setFormData({ ...formData, correo: e.target.value })
                  }
                  placeholder="Correo electrónico"
                  style={inputStyle}
                  className="focus:border-[#167589] focus:ring-2 focus:ring-[#167589]/20"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="modal-mensaje" className="sr-only">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  id="modal-mensaje"
                  rows={3}
                  required
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  placeholder="Mensaje..."
                  style={{
                    ...inputStyle,
                    paddingLeft: "16px",
                    resize: "none",
                  }}
                  className="focus:border-[#167589] focus:ring-2 focus:ring-[#167589]/20"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto h-11 px-8 rounded-full font-bold text-xs tracking-wider uppercase text-white bg-[#167589] hover:bg-[#125d6d] shadow-lg shadow-[#167589]/25 transition-all flex items-center justify-center gap-2 disabled:opacity-75 focus:outline-none"
                >
                  {status === "sending" ? (
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
                      Enviando...
                    </>
                  ) : (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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

              {/* Status Message */}
              {status === "success" && (
                <p
                  className="text-emerald-600 text-xs font-semibold text-center mt-2 animate-fade-up"
                  role="alert"
                >
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
