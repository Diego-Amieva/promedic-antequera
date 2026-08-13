import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Aviso de Privacidad Integral",
  description:
    "Aviso de Privacidad Integral de Promedic Antequera en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
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
            CUMPLIMIENTO CON LA LFPDPPP
          </p>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#167589",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Aviso de Privacidad Integral
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
          {/* Content Card */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              border: "1px solid rgba(203, 213, 225, 0.5)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              padding: "clamp(24px, 5vw, 48px) clamp(20px, 5vw, 52px)",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            {/* Update date */}
            <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#167589", margin: "0 0 24px" }}>
              Fecha de última actualización: Agosto de 2026.
            </p>

            {/* Intro */}
            <p style={{ margin: "0 0 36px", fontSize: "0.925rem", color: "#475569", lineHeight: 1.8 }}>
              En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y los Lineamientos del Aviso de Privacidad emitidos por el INAI, PROMEDIC ANTEQUERA pone a disposición del titular el presente Aviso de Privacidad Integral.
            </p>

            {/* Section 1 */}
            <section style={{ marginBottom: "36px" }}>
              <h2
                style={{
                  fontSize: "1.1rem",
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
                  1
                </span>
                Identidad y Domicilio del Responsable
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: "0 0 12px" }}>
                  PROMEDIC ANTEQUERA (Proveedora Médica de Antequera), es el responsable del tratamiento y protección de sus datos personales. Nuestro domicilio físico para oír y recibir notificaciones se ubica en: [Calle, Número Exterior e Interior, Colonia, Código Postal, Municipio o Ciudad, Oaxaca, México].
                </p>
                <p style={{ margin: 0 }}>
                  Para cualquier asunto relacionado con el tratamiento de sus datos personales, puede contactar a nuestro Departamento de Privacidad a través del correo electrónico:{" "}
                  <a href="mailto:contacto@promedicantequera.com" style={{ color: "#167589", textDecoration: "underline", fontWeight: 600 }}>
                    contacto@promedicantequera.com
                  </a>{" "}
                  <a href="tel:9513008285" style={{ color: "#167589", textDecoration: "underline", fontWeight: 600 }}>
                    951 300 8285
                  </a>
                  , en días hábiles de 09:00 a 17:00 horas.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section style={{ marginBottom: "36px" }}>
              <h2
                style={{
                  fontSize: "1.1rem",
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
                  2
                </span>
                Datos Personales Recabados
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: "0 0 12px" }}>
                  Para llevar a cabo las finalidades descritas en el presente aviso, recabamos las siguientes categorías de datos personales mediante nuestros formularios web, comunicaciones electrónicas e interacción comercial B2B:
                </p>
                <ul style={{ margin: "0 0 12px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <li><strong>Datos de identificación:</strong> Nombre completo, cargo o puesto.</li>
                  <li><strong>Datos de contacto:</strong> Correo electrónico corporativo, número de teléfono fijo o celular, ciudad y estado.</li>
                  <li><strong>Datos patrimoniales o financieros:</strong> Razón social, RFC y domicilio fiscal (exclusivamente para procesos de facturación CFDI y cotizaciones formales).</li>
                </ul>
                <p style={{ margin: 0, fontWeight: 600, color: "#0f172a" }}>
                  Hacemos de su conocimiento que PROMEDIC ANTEQUERA NO recaba ni trata datos personales sensibles a través de su sitio web.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section style={{ marginBottom: "36px" }}>
              <h2
                style={{
                  fontSize: "1.1rem",
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
                  3
                </span>
                Finalidades del Tratamiento de los Datos Personales
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: "0 0 12px" }}>
                  Sus datos personales serán utilizados para las siguientes finalidades:
                </p>
                <p style={{ margin: "0 0 6px", fontWeight: 700, color: "#0f172a" }}>
                  A) Finalidades Primarias (necesarias para la relación comercial y prestación del servicio):
                </p>
                <ul style={{ margin: "0 0 16px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <li>Procesar e identificar solicitudes de cotización de insumos médicos y dentales.</li>
                  <li>Gestión, surtido, facturación y logística de entrega de pedidos institucionales.</li>
                  <li>Atención al cliente, seguimiento de compras y soporte postventa.</li>
                  <li>Cumplimiento de obligaciones legales, fiscales y normativas sanitarias aplicables.</li>
                </ul>

                <p style={{ margin: "0 0 6px", fontWeight: 700, color: "#0f172a" }}>
                  B) Finalidades Secundarias (no necesarias para el servicio contratado, pero que nos permiten brindarle una mejor atención):
                </p>
                <ul style={{ margin: "0 0 16px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <li>Envío de información comercial, actualizaciones de catálogos por marca y ofertas especiales.</li>
                  <li>Evaluaciones de calidad en el servicio e encuestas de satisfacción.</li>
                </ul>

                <div
                  style={{
                    background: "rgba(22, 117, 137, 0.05)",
                    borderLeft: "3px solid #167589",
                    borderRadius: "0 12px 12px 0",
                    padding: "14px 18px",
                  }}
                >
                  <p style={{ margin: "0 0 6px", fontWeight: 700, color: "#167589", fontSize: "0.85rem" }}>
                    Mecanismo para manifestar la negativa para Finalidades Secundarias:
                  </p>
                  <p style={{ margin: 0, fontSize: "0.85rem", lineHeight: 1.65 }}>
                    Si no desea que sus datos personales sean tratados para las finalidades secundarias indicadas, puede enviar desde este momento un correo electrónico a{" "}
                    <a href="mailto:contacto@promedicantequera.com" style={{ color: "#167589", textDecoration: "underline", fontWeight: 600 }}>
                      contacto@promedicantequera.com
                    </a>{" "}
                    manifestando su negativa. La negativa para el uso de sus datos personales para estas finalidades no será motivo para negarle los servicios o productos que solicita o contrata con nosotros.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section style={{ marginBottom: "36px" }}>
              <h2
                style={{
                  fontSize: "1.1rem",
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
                  4
                </span>
                Uso de Cookies y Tecnologías de Rastreo
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: "0 0 12px" }}>
                  Le informamos que en nuestro sitio web utilizamos cookies y otras tecnologías a través de las cuales es posible monitorear su comportamiento como usuario de internet, para brindarle un mejor servicio y experiencia al navegar en nuestra página.
                </p>
                <p style={{ margin: 0 }}>
                  Los datos personales que obtenemos de estas tecnologías de rastreo incluyen: dirección IP, tipo de navegador, sistema operativo, páginas web visitadas e historial de búsqueda en nuestro catálogo. Estas tecnologías pueden ser deshabilitadas directamente en la configuración de seguridad de su navegador web.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section style={{ marginBottom: "36px" }}>
              <h2
                style={{
                  fontSize: "1.1rem",
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
                  5
                </span>
                Transferencia de Datos Personales
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: "0 0 12px" }}>
                  PROMEDIC ANTEQUERA no transferirá sus datos personales a terceros ajenos a la empresa sin su consentimiento previo, salvo las excepciones previstas en el Artículo 37 de la LFPDPPP, tales como:
                </p>
                <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <li>Empresas de mensajería, paquetería y logística contratadas para hacer entrega de los insumos en su domicilio o institución médica.</li>
                  <li>Requerimientos de autoridades competentes en cumplimiento de mandatos legales o fiscales.</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section style={{ marginBottom: "36px" }}>
              <h2
                style={{
                  fontSize: "1.1rem",
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
                  6
                </span>
                Ejercicio de Derechos ARCO y Revocación del Consentimiento
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: "0 0 12px" }}>
                  Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO) al tratamiento de sus datos personales, así como a revocar el consentimiento prestado. Para el ejercicio de cualquiera de estos derechos, deberá enviar una solicitud por escrito al correo{" "}
                  <a href="mailto:contacto@promedicantequera.com" style={{ color: "#167589", textDecoration: "underline", fontWeight: 600 }}>
                    contacto@promedicantequera.com
                  </a>{" "}
                  conteniendo:
                </p>
                <ul style={{ margin: "0 0 12px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <li>Nombre completo del titular y correo electrónico para comunicarle la respuesta.</li>
                  <li>Documento oficial que acredite su identidad (INE o Pasaporte vigente).</li>
                  <li>Descripción clara y precisa de los datos personales respecto de los cuales busca ejercer alguno de los derechos ARCO.</li>
                </ul>
                <p style={{ margin: 0 }}>
                  El plazo para responder a su solicitud será de un máximo de 20 (veinte) días hábiles contados desde la fecha de recepción.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section style={{ marginBottom: "36px" }}>
              <h2
                style={{
                  fontSize: "1.1rem",
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
                  7
                </span>
                Opciones y Medios para Limitar el Uso o Divulgación de sus Datos
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  Además del ejercicio de los Derechos ARCO, usted puede limitar el uso o divulgación de sus datos personales solicitando su registro en nuestra Lista de Exclusión Interna de Promoción enviando un correo a{" "}
                  <a href="mailto:contacto@promedicantequera.com" style={{ color: "#167589", textDecoration: "underline", fontWeight: 600 }}>
                    contacto@promedicantequera.com
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section style={{ marginBottom: "36px" }}>
              <h2
                style={{
                  fontSize: "1.1rem",
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
                  8
                </span>
                Modificaciones al Aviso de Privacidad
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  El presente Aviso de Privacidad Integral puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales o de nuestras propias necesidades operativas. Cualquier modificación le será notificada mediante la publicación de la versión actualizada directamente en este sitio web (
                  <Link href="/aviso-de-privacidad" style={{ color: "#167589", textDecoration: "underline", fontWeight: 600 }}>
                    promedicantequera.com/aviso-de-privacidad
                  </Link>
                  ).
                </p>
              </div>
            </section>

            {/* Bottom Links */}
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
                  fontSize: "0.85rem",
                  color: "#167589",
                  textDecoration: "underline",
                  fontWeight: 600,
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
