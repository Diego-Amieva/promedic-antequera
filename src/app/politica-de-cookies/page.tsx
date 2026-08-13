import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Política de Cookies y Tecnologías de Rastreo Web | Promedic Antequera",
  description:
    "Política de Cookies y Tecnologías de Rastreo Web de Promedic Antequera en cumplimiento con la LFPDPPP y los lineamientos del INAI.",
  openGraph: {
    title: "Política de Cookies | Promedic Antequera",
    description:
      "Información transparente sobre el uso, tipo y finalidad de las cookies empleadas en promedicantequera.com.",
    url: "https://www.promedicantequera.com/politica-de-cookies",
  },
};

export default function PoliticaCookiesPage() {
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
            PROMEDIC ANTEQUERA · PROVEEDORA MÉDICA DE ANTEQUERA
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
            Política de Cookies y Tecnologías de Rastreo Web
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
              padding: "48px 52px",
            }}
          >
            {/* Update date */}
            <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#167589", margin: "0 0 24px" }}>
              Fecha de última actualización: Agosto de 2026.
            </p>

            {/* Intro */}
            <p style={{ margin: "0 0 16px", fontSize: "0.925rem", color: "#475569", lineHeight: 1.8 }}>
              En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y los Lineamientos del Aviso de Privacidad dictados por el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI), PROMEDIC ANTEQUERA pone a disposición de sus usuarios la presente Política de Cookies.
            </p>

            <p style={{ margin: "0 0 36px", fontSize: "0.925rem", color: "#475569", lineHeight: 1.8 }}>
              El objetivo de este documento es informar de manera transparente sobre el uso, tipo y finalidad de las cookies y tecnologías de rastreo empleadas en el sitio web <strong style={{ color: "#0f172a" }}>promedicantequera.com</strong>{" "}(en adelante, &quot;el Sitio&quot;).
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
                ¿Qué son las Cookies y Tecnologías de Rastreo?
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: "0 0 12px" }}>
                  Las cookies son pequeños archivos de texto, fragmentos de código o píxeles de seguimiento que los sitios web descargan y almacenan en el navegador, computadora o dispositivo móvil del usuario al navegar por sus páginas.
                </p>
                <p style={{ margin: 0 }}>
                  Estas tecnologías permiten a los servidores web recordar información sobre su visita, como sus preferencias de idioma, artículos consultados en el catálogo, dirección IP o configuraciones de sesión, para facilitar su navegación posterior y optimizar la experiencia de uso.
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
                Tipos de Cookies Utilizadas en Este Sitio Web
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: "0 0 16px" }}>
                  PROMEDIC ANTEQUERA utiliza únicamente las siguientes categorías de cookies en su plataforma digital:
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ padding: "16px 20px", background: "#f8fafc", borderRadius: "12px", border: "1px solid rgba(22, 117, 137, 0.08)" }}>
                    <p style={{ margin: "0 0 6px", fontWeight: 700, color: "#167589" }}>
                      A) Cookies Estrictamente Necesarias y Técnicas (Esenciales):
                    </p>
                    <p style={{ margin: 0 }}>
                      Son indispensables para el correcto funcionamiento del Sitio, permitiendo la navegación segura, el acceso a secciones restringidas, la carga eficiente de componentes gráficos y el envío de formularios de contacto o cotización. Al ser esenciales para la operación de la plataforma, no requieren del consentimiento previo del usuario.
                    </p>
                  </div>

                  <div style={{ padding: "16px 20px", background: "#f8fafc", borderRadius: "12px", border: "1px solid rgba(22, 117, 137, 0.08)" }}>
                    <p style={{ margin: "0 0 6px", fontWeight: 700, color: "#167589" }}>
                      B) Cookies Analíticas y de Rendimiento (Medición):
                    </p>
                    <p style={{ margin: 0 }}>
                      Nos permiten cuantificar el número de visitantes, medir fuentes de tráfico y analizar qué páginas o productos del catálogo médico y dental son los más consultados. Esta información se procesa de forma agregada y anónima, y nos ayuda a mejorar continuamente la velocidad, arquitectura y contenido del Sitio.
                    </p>
                  </div>

                  <div style={{ padding: "16px 20px", background: "#f8fafc", borderRadius: "12px", border: "1px solid rgba(22, 117, 137, 0.08)" }}>
                    <p style={{ margin: "0 0 6px", fontWeight: 700, color: "#167589" }}>
                      C) Cookies de Funcionalidad:
                    </p>
                    <p style={{ margin: 0 }}>
                      Permiten al Sitio recordar las opciones o selecciones elegidas por el usuario (como preferencias de búsqueda o estado de sesión) para ofrecer una experiencia B2B personalizada y consistente durante su navegación.
                    </p>
                  </div>
                </div>
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
                Datos Personales Recopilados por las Cookies
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: "0 0 12px" }}>
                  A través de la activación de cookies y scripts de medición en nuestro Sitio, podemos recabar automáticamente los siguientes datos técnicos de navegación:
                </p>

                <ul style={{ margin: "0 0 16px", paddingLeft: "20px", listStyleType: "disc" }}>
                  <li style={{ marginBottom: "6px" }}>Dirección IP pública y ubicación geográfica aproximada.</li>
                  <li style={{ marginBottom: "6px" }}>Tipo, versión e idioma del navegador web utilizado.</li>
                  <li style={{ marginBottom: "6px" }}>Sistema operativo y tipo de dispositivo (móvil, tablet o escritorio).</li>
                  <li style={{ marginBottom: "6px" }}>Páginas consultadas dentro del catálogo, tiempo de permanencia y enlaces seleccionados.</li>
                  <li style={{ marginBottom: "6px" }}>URL de procedencia (sitio desde el cual el usuario llegó a nuestra plataforma).</li>
                </ul>

                <p style={{ margin: 0 }}>
                  Hacemos de su conocimiento que la información recopilada mediante cookies analíticas <strong style={{ color: "#0f172a" }}>NO</strong> se asocia directamente con la identidad del titular ni se utiliza para elaborar perfiles individuales sin su consentimiento.
                </p>
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
                Cookies de Terceros
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: "0 0 12px" }}>
                  En nuestro Sitio podemos utilizar herramientas y servicios de proveedores analíticos e infraestructura tecnológica de terceros (tales como Google Analytics, Vercel o proveedores de mensajería). Dichos terceros pueden colocar sus propias cookies en su dispositivo para llevar a cabo sus tareas de soporte técnico o análisis estadístico.
                </p>
                <p style={{ margin: 0 }}>
                  PROMEDIC ANTEQUERA no controla las cookies instaladas por dichos terceros fuera de nuestras instrucciones de servicio, por lo que le sugerimos consultar las políticas de privacidad de cada uno de esos proveedores para conocer más sobre sus prácticas de protección de datos.
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
                ¿Cómo Administrar o Desactivar las Cookies en su Navegador?
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: "0 0 12px" }}>
                  El usuario tiene el derecho y la facultad de permitir, bloquear o eliminar las cookies instaladas en su dispositivo en cualquier momento ajustando las opciones de configuración de su navegador de internet:
                </p>

                <ul style={{ margin: "0 0 16px", paddingLeft: "20px", listStyleType: "disc" }}>
                  <li style={{ marginBottom: "6px" }}>
                    <strong style={{ color: "#0f172a" }}>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.
                  </li>
                  <li style={{ marginBottom: "6px" }}>
                    <strong style={{ color: "#0f172a" }}>Microsoft Edge:</strong> Configuración &gt; Permisos del sitio &gt; Cookies y datos del sitio.
                  </li>
                  <li style={{ marginBottom: "6px" }}>
                    <strong style={{ color: "#0f172a" }}>Mozilla Firefox:</strong> Ajustes &gt; Privacidad &amp; Seguridad &gt; Cookies y datos del sitio.
                  </li>
                  <li style={{ marginBottom: "6px" }}>
                    <strong style={{ color: "#0f172a" }}>Safari (macOS/iOS):</strong> Preferencias &gt; Privacidad &gt; Bloquear todas las cookies.
                  </li>
                </ul>

                <p style={{ margin: 0 }}>
                  Tenga en cuenta que, si decide deshabilitar o bloquear todas las cookies (incluyendo las técnicas o esenciales), es posible que algunas funciones del Sitio, la carga interactiva del catálogo o el envío de formularios de contacto no funcionen de manera óptima o queden inhabilitadas.
                </p>
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
                Relación con el Aviso de Privacidad Integral
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  El tratamiento de los datos personales recopilados a través de las cookies descritas en la presente política se rige por lo dispuesto en nuestro Aviso de Privacidad Integral. Para conocer más sobre sus Derechos ARCO (Acceso, Rectificación, Cancelación u Oposición) o el tratamiento de sus datos de contacto, le invitamos a consultar la página{" "}
                  <Link
                    href="/aviso-de-privacidad"
                    style={{ color: "#167589", textDecoration: "underline", fontWeight: 600 }}
                  >
                    promedicantequera.com/aviso-de-privacidad
                  </Link>
                  .
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
                Actualizaciones de la Política de Cookies
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  PROMEDIC ANTEQUERA se reserva el derecho de modificar o actualizar esta Política de Cookies para adaptarla a novedades legislativas, jurisprudenciales o modificaciones tecnológicas en la plataforma. Cualquier cambio será publicado de inmediato en esta misma dirección web indicando la fecha de última actualización.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section style={{ marginBottom: 0 }}>
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
                Contacto
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  Si tiene dudas o comentarios sobre el uso de cookies en nuestro Sitio, puede comunicarse con nuestro Departamento de Privacidad a través del correo electrónico:{" "}
                  <a
                    href="mailto:contacto@promedicantequera.com"
                    style={{ color: "#167589", textDecoration: "underline", fontWeight: 600 }}
                  >
                    contacto@promedicantequera.com
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
