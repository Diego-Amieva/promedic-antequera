import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso del sitio web y catálogos de Promedic Antequera, distribuidor de tecnología y suministros médicos B2B en México.",
};

export default function TerminosPage() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        role="main"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #f0f9fb 0%, #ffffff 40%)",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        {/* Page Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
            padding: "0 24px",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#167589",
              marginBottom: "10px",
            }}
          >
            PROMEDIC ANTEQUERA · Proveedora Médica de Antequera
          </p>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Términos y Condiciones
          </h1>
        </div>

        {/* Card Container */}
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Draft Notice Banner */}
          <div
            role="note"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              background: "rgba(22, 117, 137, 0.07)",
              border: "1.5px solid rgba(22, 117, 137, 0.2)",
              borderRadius: "16px",
              padding: "16px 20px",
              marginBottom: "32px",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#167589"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0, marginTop: "1px" }}
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p style={{ margin: 0, fontSize: "0.875rem", color: "#167589", fontWeight: 500, lineHeight: 1.6 }}>
              <strong>Documento en actualización legal.</strong> La versión definitiva será publicada
              próximamente una vez concluida la revisión por nuestro equipo jurídico.
            </p>
          </div>

          {/* Content Card */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              border: "1px solid rgba(203, 213, 225, 0.5)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              padding: "48px 52px",
            }}
          >
            {/* Update date */}
            <p style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: "40px", margin: "0 0 40px" }}>
              Última actualización: En proceso de elaboración
            </p>

            {[
              {
                num: "1",
                title: "Aceptación del Usuario",
                body: "Al acceder y navegar por el sitio web de PROMEDIC ANTEQUERA (en adelante, \u201cel Sitio\u201d), el usuario declara haber leído, entendido y aceptado los presentes Términos y Condiciones en su totalidad. Si el usuario no está de acuerdo con alguna de las disposiciones aquí establecidas, deberá abstenerse de utilizar el Sitio. El uso continuado del Sitio constituirá aceptación de cualquier modificación futura a estos Términos.",
              },
              {
                num: "2",
                title: "Uso del Sitio Web y Catálogos",
                body: "El contenido publicado en este Sitio, incluyendo catálogos de productos, fichas técnicas, imágenes y descripciones, tiene un carácter exclusivamente informativo y de referencia comercial B2B (empresa a empresa). El usuario se compromete a utilizar el Sitio de manera lícita y conforme a la normativa aplicable, absteniéndose de realizar acciones que puedan dañar, inutilizar, sobrecargar o deteriorar los servidores o redes conectadas al mismo.",
              },
              {
                num: "3",
                title: "Precios, Cotizaciones y Disponibilidad de Insumos",
                body: "Los precios indicados, en caso de mostrarse, son de carácter referencial y están sujetos a cambios sin previo aviso, conforme a las condiciones del mercado de insumos médicos, fluctuaciones cambiarias y disponibilidad de inventario. Toda cotización formal deberá ser solicitada directamente a nuestro equipo de ventas y tendrá una vigencia indicada en el documento correspondiente. PROMEDIC ANTEQUERA se reserva el derecho de modificar precios y condiciones comerciales en cualquier momento.",
              },
              {
                num: "4",
                title: "Políticas de Pedidos y Envíos",
                body: "Los pedidos formalizados a través de nuestros canales de atención están sujetos a disponibilidad de stock, confirmación de pago y validación por parte de nuestro equipo de logística. Los tiempos de entrega son estimados y pueden variar en función de la ubicación del cliente, el volumen del pedido y las condiciones de la cadena de suministro. PROMEDIC ANTEQUERA no se hace responsable por retrasos ocasionados por terceros transportistas o causas de fuerza mayor.",
              },
              {
                num: "5",
                title: "Propiedad Intelectual",
                body: "Todos los contenidos del Sitio, incluyendo, de manera enunciativa mas no limitativa, textos, gráficos, logotipos, íconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, son propiedad de PROMEDIC ANTEQUERA o de sus proveedores de contenido y están protegidos por las leyes mexicanas e internacionales en materia de propiedad intelectual. Queda expresamente prohibida su reproducción total o parcial sin consentimiento escrito previo de PROMEDIC ANTEQUERA.",
              },
            ].map((section) => (
              <section key={section.num} style={{ marginBottom: "36px" }}>
                <h2
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#167589",
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      borderRadius: "8px",
                      background: "rgba(22, 117, 137, 0.10)",
                      fontSize: "0.8rem",
                      fontWeight: 800,
                      color: "#167589",
                      flexShrink: 0,
                    }}
                  >
                    {section.num}
                  </span>
                  {section.title}
                </h2>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.9rem",
                    color: "#475569",
                    lineHeight: 1.75,
                    paddingLeft: "38px",
                  }}
                >
                  {section.body}
                </p>
              </section>
            ))}

            {/* Back to site */}
            <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "32px", marginTop: "8px", display: "flex", justifyContent: "center" }}>
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#167589",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
