"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

/* ──────────────────────────────────────────
   Hook: fade-in on scroll (IntersectionObserver)
   ────────────────────────────────────────── */
function useFadeInOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ──────────────────────────────────────────
   Preguntas frecuentes — FAQ Data
   ────────────────────────────────────────── */
interface FaqItem {
  id: number;
  question: string;
  answer: React.ReactNode;
  icon: string;
  iconAlt: string;
}

const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "Necesito modificar la dirección de envío de mi pedido",
    answer: (
      <div className="space-y-4">
        <p>
          Si necesitas realizar algún ajuste en tu compra, contáctanos a la brevedad para verificar el estatus de tu paquete:
        </p>

        <ul className="space-y-2 pl-5 marker:text-[#167589]" style={{ listStyleType: "disc" }}>
          <li>
            <strong className="text-slate-800">Cambio de dirección:</strong> Podemos actualizar tu domicilio siempre y cuando el pedido no tenga una guía de envío asignada. Si la guía ya fue generada, deberás solicitar la corrección directamente con la empresa de paquetería.
          </li>
          <li>
            <strong className="text-slate-800">Cambio de productos:</strong> Debido a nuestro proceso de surtido inmediato para logística hospitalaria, no es posible agregar, quitar o sustituir artículos una vez confirmada la orden.
          </li>
        </ul>

        <div className="pt-1">
          <p className="font-bold text-[#167589] mb-2">Canales de atención inmediata:</p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 select-none">💬</span>
              <div>
                <span className="font-semibold text-slate-700">WhatsApp / Celular:</span>{" "}
                <a
                  href="https://wa.me/529513008285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#167589] font-bold hover:underline"
                >
                  951 300 8285
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 select-none">📞</span>
              <div>
                <span className="font-semibold text-slate-700">Oficina:</span>{" "}
                <a
                  href="tel:9516887621"
                  className="text-[#167589] font-bold hover:underline"
                >
                  951 688 7621
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 select-none">✉️</span>
              <div>
                <span className="font-semibold text-slate-700">Correo:</span>{" "}
                <a
                  href="mailto:contacto@promedicantequera.com"
                  className="text-[#167589] font-semibold hover:underline"
                >
                  contacto@promedicantequera.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    ),
    icon: "/icons/envio.svg",
    iconAlt: "Ícono de envío",
  },
  {
    id: 2,
    question: "¿Puedo realizar cambios o devoluciones?",
    answer: (
      <div className="space-y-3">
        <p>
          Para garantizar que cada institución médica y profesional de la salud reciba insumos 100% estériles, seguros y sin manipulación previa, no realizamos cambios ni devoluciones en productos una vez entregados, en cumplimiento con las normativas sanitarias vigentes.
        </p>
        <div className="p-3.5 bg-[#167589]/5 border-l-4 border-[#167589] rounded-r-xl">
          <p className="text-xs md:text-sm text-slate-700 italic">
            *<strong>Nota:</strong> Si tu paquete llegó con algún daño de empaque o defecto de fabricación de origen, comunícate de inmediato con nuestro equipo de atención para asistirte.
          </p>
        </div>
      </div>
    ),
    icon: "/icons/devoluciones.svg",
    iconAlt: "Ícono de devoluciones",
  },
  {
    id: 3,
    question: "¿Cómo facturar mi compra?",
    answer: (
      <div className="space-y-4">
        <p>
          Emitimos comprobantes fiscales CFDI para todas tus compras. Para procesar tu factura de manera ágil y sin errores de timbrado, considera los siguientes pasos:
        </p>

        <div>
          <p className="font-bold text-slate-800 mb-2">
            Envía tu información el mismo día de tu compra:
          </p>
          <p className="mb-2.5">
            Escribe a{" "}
            <a
              href="mailto:facturas@promedicantequera.com"
              className="text-[#167589] font-semibold hover:underline"
            >
              facturas@promedicantequera.com
            </a>{" "}
            adjuntando tu Constancia de Situación Fiscal actualizada o enviando los siguientes datos en el cuerpo del mensaje:
          </p>
          <ul className="space-y-1.5 pl-5 marker:text-[#167589]" style={{ listStyleType: "disc" }}>
            <li>Número de pedido o nota de venta</li>
            <li>Razón Social / Nombre completo</li>
            <li>RFC</li>
            <li>Código Postal del domicilio fiscal</li>
            <li>Régimen Fiscal y Uso de CFDI (ej. G03 - Gastos en general)</li>
            <li>Correo electrónico para recepción de XML y PDF</li>
          </ul>
        </div>

        <div className="pt-1">
          <p className="font-bold text-[#167589] mb-2">Políticas de Facturación:</p>
          <ul className="space-y-2.5 pl-1">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 select-none">📅</span>
              <div>
                <strong className="text-slate-800">Cierre de mes:</strong>{" "}
                <span className="text-slate-600">Por disposiciones fiscales del SAT, las facturas deben emitirse dentro del mismo mes en que se realizó la compra. No será posible emitir comprobantes de meses anteriores.</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 select-none">⏱️</span>
              <div>
                <strong className="text-slate-800">Tiempo de entrega:</strong>{" "}
                <span className="text-slate-600">Una vez recibida tu información completa, tu factura será enviada a tu correo en un lapso de 24 a 48 horas hábiles.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    ),
    icon: "/icons/factura.svg",
    iconAlt: "Ícono de factura",
  },
  {
    id: 4,
    question: "¿Cómo solicito una cotización formal para mi clínica u hospital?",
    answer: (
      <div className="space-y-4">
        <p>
          Atendemos solicitudes tanto para compras minoristas como para precios especiales a mayoreo e institucionales. Puedes solicitar tu propuesta comercial a través de cualquiera de nuestros canales:
        </p>

        <ul className="space-y-2.5 pl-1">
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0 select-none">💬</span>
            <div>
              <a
                href="https://wa.me/529513008285"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#167589] font-bold hover:underline"
              >
                WhatsApp Corporativo
              </a>
              <span className="text-slate-600">: Para respuesta y atención comercial inmediata.</span>
            </div>
          </li>

          <li className="flex items-start gap-2">
            <span className="flex-shrink-0 select-none">✉️</span>
            <div>
              <a
                href="mailto:contacto@promedicantequera.com"
                className="text-[#167589] font-bold hover:underline"
              >
                Correo Electrónico
              </a>
              <span className="text-slate-600">: Escríbenos directamente a</span>{" "}
              <a
                href="mailto:contacto@promedicantequera.com"
                className="text-[#167589] font-semibold hover:underline"
              >
                contacto@promedicantequera.com
              </a>{" "}
              <span className="text-slate-600">indicando el listado de insumos y volúmenes requeridos.</span>
            </div>
          </li>

          <li className="flex items-start gap-2">
            <span className="flex-shrink-0 select-none">📝</span>
            <div>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))}
                className="text-[#167589] font-bold hover:underline inline-baseline text-left p-0 bg-transparent border-0 cursor-pointer"
              >
                Formulario
              </button>
              <span className="text-slate-600">: Llena nuestro</span>{" "}
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))}
                className="text-[#167589] font-semibold hover:underline inline-baseline text-left p-0 bg-transparent border-0 cursor-pointer"
              >
                formulario de contacto
              </button>{" "}
              <span className="text-slate-600">indicando los datos de tu institución.</span>
            </div>
          </li>
        </ul>

        <p className="pt-1">
          Uno de nuestros asesores especializados preparará una propuesta a la medida de tus necesidades a la brevedad.
        </p>
      </div>
    ),
    icon: "/icons/cotizacion.svg",
    iconAlt: "Ícono de cotización",
  },
];

/* ──────────────────────────────────────────
   Chevron Icon Component
   ────────────────────────────────────────── */
function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        flexShrink: 0,
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* ──────────────────────────────────────────
   FAQ Accordion Item
   ────────────────────────────────────────── */
function FaqAccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        background: isOpen
          ? "rgba(22, 117, 137, 0.05)"
          : "rgba(255, 255, 255, 0.95)",
        border: `1.5px solid ${isOpen ? "rgba(22, 117, 137, 0.30)" : "rgba(22, 117, 137, 0.12)"}`,
        borderRadius: "18px",
        overflow: "hidden",
        transition: "border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
        boxShadow: isOpen
          ? "0 8px 32px rgba(22, 117, 137, 0.12)"
          : "0 2px 8px rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* Question Button */}
      <button
        type="button"
        id={`faq-trigger-${faq.id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${faq.id}`}
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "20px 24px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "inherit",
        }}
      >
        {/* Icon Badge */}
        <div
          aria-hidden="true"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: isOpen
              ? "linear-gradient(135deg, #167589 0%, #a7d9dd 100%)"
              : "linear-gradient(135deg, rgba(22,117,137,0.10) 0%, rgba(167,217,221,0.20) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.35s ease",
          }}
        >
          <Image
            src={faq.icon}
            alt={faq.iconAlt}
            width={24}
            height={24}
            style={{
              filter: isOpen
                ? "brightness(0) invert(1)"
                : "brightness(0) saturate(100%) invert(34%) sepia(91%) saturate(740%) hue-rotate(141deg) brightness(92%) contrast(94%)",
              transition: "filter 0.35s ease",
            }}
          />
        </div>

        {/* Question text */}
        <span
          style={{
            flex: 1,
            fontSize: "0.975rem",
            fontWeight: isOpen ? 700 : 600,
            color: isOpen ? "#167589" : "#334155",
            lineHeight: 1.45,
            transition: "color 0.3s ease",
          }}
        >
          {faq.question}
        </span>

        {/* Chevron */}
        <span
          style={{
            color: isOpen ? "#167589" : "#94a3b8",
            transition: "color 0.3s ease",
          }}
        >
          <ChevronIcon isOpen={isOpen} />
        </span>
      </button>

      {/* Answer Panel */}
      <div
        id={`faq-panel-${faq.id}`}
        role="region"
        aria-labelledby={`faq-trigger-${faq.id}`}
        style={{
          maxHeight: isOpen ? "2500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
            style={{
              padding: "20px 32px 36px 32px",
              borderTop: "1px solid rgba(226, 232, 240, 0.8)",
              color: "#475569",
              fontSize: "0.925rem",
              lineHeight: 1.7,
            }}
          >
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   Main FAQ Section Component
   ────────────────────────────────────────── */
export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const illustrationRef = useFadeInOnScroll<HTMLDivElement>();

  const toggle = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section id="preguntas-frecuentes" aria-labelledby="faq-heading">

      {/* ════════════════════════════════════════
          HERO — Video background + Illustration
          ════════════════════════════════════════ */}
      <div
        className="relative overflow-hidden"
        style={{ minHeight: "520px", display: "flex", alignItems: "flex-end" }}
      >
        {/* Video Background */}
        <video
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <source src="/videos/Faq-background.mov" type="video/quicktime" />
          <source src="/videos/Faq-background.mov" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(22,117,137,0.55) 0%, rgba(22,117,137,0.35) 40%, rgba(22,117,137,0.15) 100%)",
          }}
        />

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "64px",
            paddingTop: "120px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          {/* Illustration */}
          <div
            className="animate-cta-float-up"
            style={{
              position: "relative",
              width: "clamp(220px, 35vw, 340px)",
              height: "clamp(220px, 35vw, 340px)",
              marginBottom: "16px",
            }}
          >
            <Image
              src="/illustrations/Preguntas_frecuentes.png"
              alt="Doctor con signo de interrogación — Preguntas frecuentes"
              fill
              sizes="(max-width: 640px) 220px, (max-width: 1024px) 35vw, 340px"
              className="object-contain drop-shadow-[0_20px_40px_rgba(22,117,137,0.35)]"
              priority
            />
          </div>

          {/* H2 Title — same weight/size pattern as other sections */}
          <h2
            id="faq-heading"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#ffffff",
              lineHeight: 1.1,
              textAlign: "center",
              textShadow: "0 4px 20px rgba(0,0,0,0.25)",
              margin: 0,
            }}
          >
            PREGUNTAS<br />FRECUENTES
          </h2>

          {/* Subtitle */}
          <p
            style={{
              marginTop: "16px",
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              color: "rgba(255,255,255,0.88)",
              fontWeight: 400,
              lineHeight: 1.65,
              textAlign: "center",
              maxWidth: "520px",
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
          >
            Encuentra aquí las respuestas a las dudas más comunes sobre nuestros envíos, políticas de cambios y servicios de facturación.
          </p>
        </div>

        {/* Bottom Wave — transition to white */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            lineHeight: 0,
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "clamp(48px, 5vw, 80px)", display: "block" }}
          >
            <path d="M0 80C480 20 960 20 1440 80V80H0V80Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* ════════════════════════════════════════
          FAQ ACCORDION LIST
          ════════════════════════════════════════ */}
      <div style={{ backgroundColor: "#ffffff" }}>
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "16px",
            paddingBottom: "72px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {FAQS.map((faq) => (
            <FaqAccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openFaq === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>

        {/* ════════════════════════════════════════
            CTA BANNER — WhatsApp + Déjanos tus datos
            ════════════════════════════════════════ */}
        <div
          style={{
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingBottom: "80px",
          }}
        >
          <div
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              background: "linear-gradient(135deg, #167589 0%, #1a8fa8 50%, #a7d9dd 100%)",
              borderRadius: "28px",
              position: "relative",
              overflow: "visible",
              boxShadow: "0 20px 56px rgba(22, 117, 137, 0.32)",
            }}
          >
            {/* ── Inner wrapper — clips decorative circles ── */}
            <div style={{ borderRadius: "28px", overflow: "hidden", position: "relative" }}>
              <div aria-hidden="true" style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
              <div aria-hidden="true" style={{ position: "absolute", bottom: "-60px", left: "35%", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

              {/* MOBILE: ilustración arriba del título */}
              <div className="flex flex-col items-center sm:hidden" style={{ padding: "32px 28px 36px" }}>
                <div className="animate-cta-float-up" style={{ position: "relative", width: "180px", height: "180px", marginBottom: "20px", flexShrink: 0 }} aria-hidden="true">
                  <Image src="/illustrations/Whatsapp.png" alt="Doctor con burbuja de WhatsApp" fill sizes="180px" className="object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.22)]" loading="lazy" />
                </div>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.3, marginBottom: "10px", letterSpacing: "-0.01em", textAlign: "center" }}>
                  ¿No encontraste la respuesta que buscabas?
                </h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.65, marginBottom: "24px", fontWeight: 400, textAlign: "center" }}>
                  Nuestro equipo de asesores comerciales está listo para ayudarte con tus requerimientos específicos.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
                  <a href="https://wa.me/529513008285" target="_blank" rel="noopener noreferrer" id="faq-cta-whatsapp-mobile" aria-label="Enviar mensaje por WhatsApp" className="btn-cta-whatsapp" style={{ height: "48px", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ fill: "#167589", flexShrink: 0 }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.528 5.865L0 24l6.335-1.482A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.882 9.882 0 0 1-5.031-1.375l-.36-.214-3.742.876.934-3.634-.235-.374A9.842 9.842 0 0 1 2.118 12C2.118 6.543 6.543 2.118 12 2.118c5.457 0 9.882 4.425 9.882 9.882 0 5.457-4.425 9.882-9.882 9.882z" />
                    </svg>
                    Enviar WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent("open-contact-modal"));
                    }}
                    id="faq-cta-contacto-mobile"
                    aria-label="Déjanos tus datos"
                    className="btn-outline-cta"
                    style={{ height: "48px", justifyContent: "center", width: "100%", cursor: "pointer" }}
                  >
                    <Image src="/icons/contact-book.svg" alt="" width={18} height={18} aria-hidden="true" style={{ filter: "brightness(0) invert(1)", flexShrink: 0 }} />
                    Déjanos tus datos
                  </button>
                </div>
              </div>

              {/* DESKTOP: texto izquierda, ilustración derecha grande (bottom-anchored) */}
              <div className="hidden sm:flex" style={{ alignItems: "flex-end", padding: "40px 0 0 36px", minHeight: "240px" }}>
                <div style={{ flex: 1, position: "relative", zIndex: 1, paddingRight: "24px", paddingBottom: "40px" }}>
                  <h3 style={{ fontSize: "clamp(1.15rem, 2.4vw, 1.55rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.3, marginBottom: "10px", letterSpacing: "-0.01em" }}>
                    ¿No encontraste la respuesta que buscabas?
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.65, marginBottom: "24px", fontWeight: 400 }}>
                    Nuestro equipo de asesores comerciales está listo para ayudarte con tus requerimientos específicos.
                  </p>
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <a href="https://wa.me/529513008285" target="_blank" rel="noopener noreferrer" id="faq-cta-whatsapp" aria-label="Enviar mensaje por WhatsApp a Promedic Antequera" className="btn-cta-whatsapp" style={{ height: "48px", paddingLeft: "22px", paddingRight: "22px" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ fill: "#167589", flexShrink: 0 }}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.528 5.865L0 24l6.335-1.482A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.882 9.882 0 0 1-5.031-1.375l-.36-.214-3.742.876.934-3.634-.235-.374A9.842 9.842 0 0 1 2.118 12C2.118 6.543 6.543 2.118 12 2.118c5.457 0 9.882 4.425 9.882 9.882 0 5.457-4.425 9.882-9.882 9.882z" />
                      </svg>
                      Enviar WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent("open-contact-modal"));
                      }}
                      id="faq-cta-contacto"
                      aria-label="Ir al formulario de contacto — Déjanos tus datos"
                      className="btn-outline-cta"
                      style={{ height: "48px", cursor: "pointer" }}
                    >
                      <Image src="/icons/contact-book.svg" alt="" width={18} height={18} aria-hidden="true" style={{ filter: "brightness(0) invert(1)", flexShrink: 0 }} />
                      Déjanos tus datos
                    </button>
                  </div>
                </div>

                {/* Ilustración desktop — centrada verticalmente, fade-in on scroll */}
                <div
                  ref={illustrationRef}
                  style={{
                    position: "relative",
                    alignSelf: "center",
                    width: "clamp(200px, 28vw, 280px)",
                    height: "clamp(200px, 28vw, 280px)",
                    flexShrink: 0,
                    zIndex: 1,
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  aria-hidden="true"
                >
                  <Image
                    src="/illustrations/Whatsapp.png"
                    alt="Doctor con burbuja de WhatsApp"
                    fill
                    sizes="(max-width: 1024px) 28vw, 280px"
                    className="object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
