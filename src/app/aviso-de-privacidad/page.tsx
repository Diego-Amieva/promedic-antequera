import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Aviso de Privacidad Simplificado de Promedic Antequera. Cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
};

export default function AvisoPrivacidadPage() {
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
            Cumplimiento con la LFPDPPP
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
            Aviso de Privacidad
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
            {/* Intro */}
            <p style={{ margin: "0 0 40px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
              En cumplimiento con lo dispuesto por la{" "}
              <strong style={{ color: "#0f172a" }}>
                Ley Federal de Protección de Datos Personales en Posesión de los Particulares
              </strong>{" "}
              (LFPDPPP) y su Reglamento, PROMEDIC ANTEQUERA pone a disposición del titular el
              presente Aviso de Privacidad Simplificado.
            </p>

            {[
              {
                num: "1",
                title: "Identidad y Domicilio del Responsable",
                body: "PROMEDIC ANTEQUERA, Proveedora Médica de Antequera, es la empresa responsable del tratamiento de sus datos personales. Nuestras oficinas se encuentran en el estado de Oaxaca, México. Para cualquier consulta relacionada con el tratamiento de sus datos personales, puede contactarnos a través de: contacto@promedicantequera.com o al teléfono 951-688-76-21, en días hábiles de 09:00 a 17:00 horas.",
              },
              {
                num: "2",
                title: "Datos Personales Recabados",
                body: "Para llevar a cabo las finalidades descritas en el presente aviso, recabamos los siguientes datos personales: nombre completo, razón social o nombre de empresa, correo electrónico corporativo, número de teléfono de contacto, cargo o puesto, y ciudad o estado. No recabamos datos personales sensibles en ninguno de nuestros formularios de contacto.",
              },
              {
                num: "3",
                title: "Finalidades del Tratamiento de Datos",
                body: "Sus datos personales serán utilizados para las siguientes finalidades: (a) Atención de solicitudes comerciales B2B y envío de cotizaciones personalizadas; (b) Gestión del proceso de pedidos, facturación y logística de envíos; (c) Comunicación de información relevante sobre nuestros productos, actualizaciones de catálogo y promociones comerciales; (d) Cumplimiento de obligaciones contractuales y legales aplicables; (e) Mejora de nuestros servicios y atención al cliente institucional.",
              },
              {
                num: "4",
                title: "Derechos ARCO",
                body: "Usted tiene derecho a Acceder, Rectificar, Cancelar y Oponerse (derechos ARCO) al tratamiento de sus datos personales, conforme a lo establecido en la LFPDPPP. Para ejercer dichos derechos, deberá presentar su solicitud por escrito al correo electrónico contacto@promedicantequera.com, indicando: nombre completo, datos de contacto, descripción clara del derecho que desea ejercer y documentos de identidad que acrediten su titularidad. El plazo de respuesta será de veinte días hábiles a partir de la recepción de su solicitud.",
              },
              {
                num: "5",
                title: "Transferencia de Datos",
                body: "PROMEDIC ANTEQUERA no realizará transferencias de sus datos personales a terceros ajenos a la empresa, salvo que ello sea requerido por disposición legal, mandato judicial o autoridad competente, o bien sea necesario para la correcta prestación de los servicios contratados (e.g., empresas de mensajería y paquetería para la gestión de envíos). En estos últimos casos, nos aseguraremos de que dichos terceros mantengan medidas de seguridad adecuadas.",
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

            {/* Link to Terms */}
            <div
              style={{
                borderTop: "1px solid #e2e8f0",
                paddingTop: "28px",
                marginTop: "8px",
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
              <Link
                href="/terminos-y-condiciones"
                style={{
                  fontSize: "0.8rem",
                  color: "#94a3b8",
                  textDecoration: "underline",
                  fontWeight: 500,
                }}
              >
                Ver Términos y Condiciones →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
