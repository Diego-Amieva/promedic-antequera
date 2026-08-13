import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso y Venta",
  description:
    "Términos y Condiciones de Uso y Venta de Promedic Antequera. Condiciones de comercialización B2B de tecnología y suministros médicos.",
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
            Términos y Condiciones de Uso y Venta
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
              Los presentes Términos y Condiciones rigen el acceso, uso del sitio web promedicantequera.com (en adelante, &quot;el Sitio&quot;) y las transacciones comerciales de insumos médicos y dentales celebradas entre PROMEDIC ANTEQUERA y el usuario o cliente institucional (en adelante, &quot;el Cliente&quot;).
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
                Identidad de la Empresa
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  El Sitio es operado por PROMEDIC ANTEQUERA (Proveedora Médica de Antequera), comercializadora de insumos médicos, quirúrgicos, dentales y hospitalarios con domicilio en el estado de Oaxaca, México. Correo de contacto:{" "}
                  <a href="mailto:contacto@promedicantequera.com" style={{ color: "#167589", textDecoration: "underline", fontWeight: 600 }}>
                    contacto@promedicantequera.com
                  </a>{" "}
                  | Teléfono:{" "}
                  <a href="tel:9513008285" style={{ color: "#167589", textDecoration: "underline", fontWeight: 600 }}>
                    951 300 8285
                  </a>.
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
                Aceptación de los Términos
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  Al acceder, navegar o realizar cotizaciones y compras a través del Sitio o cualquiera de nuestros canales de atención, el Cliente declara haber leído, entendido y aceptado el presente documento en su totalidad. Si no está de acuerdo con alguna de las disposiciones, deberá abstenerse de utilizar el Sitio y realizar pedidos.
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
                Uso del Sitio Web y Catálogos B2B
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  El contenido publicado en el Sitio, incluyendo imágenes, fichas técnicas, catálogos digitales por marca y descripciones de productos, tiene un carácter exclusivamente informativo y de referencia comercial B2B (empresa a empresa). PROMEDIC ANTEQUERA realiza esfuerzos continuos por mantener la información actualizada; no obstante, las especificaciones técnicas pueden variar según las actualizaciones del fabricante de origen.
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
                Precios, Cotizaciones y Disponibilidad
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>
                    <strong>Precios y Cambios:</strong> Los precios mostrados en el Sitio o catálogos, en caso de figurar, están expresados en pesos mexicanos (MXN), no incluyen IVA salvo que se indique explícitamente, y están sujetos a cambios sin previo aviso debido a fluctuaciones de mercado o disponibilidad de inventario.
                  </li>
                  <li>
                    <strong>Cotizaciones Formales:</strong> Toda cotización emitida por nuestro equipo de ventas tendrá una vigencia delimitada en el documento correspondiente. La disponibilidad de inventario se confirma al momento de formalizar el pago.
                  </li>
                </ul>
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
                Procesamiento de Pedidos, Pagos y Facturación CFDI
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>
                    <strong>Confirmación de Pedido:</strong> Las órdenes se considerarán confirmadas una vez que el pago haya sido validado y acreditado por nuestro departamento contable.
                  </li>
                  <li>
                    <strong>Facturación Fiscal:</strong> Emitimos comprobante fiscal CFDI por todas las compras. El Cliente es responsable de proporcionar sus datos fiscales correctos (RFC, Razón Social, Código Postal y Régimen Fiscal o Constancia de Situación Fiscal) el mismo día de su compra. Por disposiciones fiscales del SAT, no se emitirán facturas de compras correspondientes a meses calendarios anteriores.
                  </li>
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
                Políticas de Envío y Logística
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>
                    <strong>Tiempos de Entrega:</strong> Los tiempos de entrega comunicados son estimados y dependen de la cobertura de las empresas de paquetería y logística de terceros.
                  </li>
                  <li>
                    <strong>Riesgo de Transporte:</strong> PROMEDIC ANTEQUERA no se hace responsable por retrasos extraordinarios, extravíos o daños causados por terceros transportistas o eventos de fuerza mayor. Se proporcionará al Cliente el número de guía correspondiente para el rastreo del paquete.
                  </li>
                  <li>
                    <strong>Modificación de Dirección:</strong> Solo podrán realizarse cambios en el domicilio de entrega si la guía de envío aún no ha sido generada.
                  </li>
                </ul>
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
                Políticas de Devoluciones, Cancelaciones y Garantías (Normativa Sanitaria)
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>
                    <strong>Insumos Médicos y Sanitarios:</strong> En estricto cumplimiento con las normativas sanitarias vigentes y por razones de higiene pública y bioseguridad, NO se aceptan cambios ni devoluciones en productos, medicamentos o insumos de uso médico una vez entregados.
                  </li>
                  <li>
                    <strong>Defectos de Fabricación o Empaque Dañado:</strong> Si el paquete presenta daños severos en su empaque al momento de la entrega por parte de la paquetería, el Cliente deberá notificarlo de inmediato en un lapso no mayor a 24 horas a{" "}
                    <a href="mailto:contacto@promedicantequera.com" style={{ color: "#167589", textDecoration: "underline", fontWeight: 600 }}>
                      contacto@promedicantequera.com
                    </a>{" "}
                    adjuntando evidencias fotográficas para gestionar la reclamación correspondiente con el fabricante o transportista.
                  </li>
                </ul>
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
                Responsabilidad sobre el Uso de Insumos Médicos
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  Los productos comercializados por PROMEDIC ANTEQUERA están destinados exclusivamente para su uso y manipulación por parte de profesionales de la salud capacitados o instituciones médicas autorizadas. PROMEDIC ANTEQUERA no asume responsabilidad alguna por daños, lesiones o complicaciones derivadas del uso inadecuado, imprudente o negligente de los insumos adquiridos.
                </p>
              </div>
            </section>

            {/* Section 9 */}
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
                  9
                </span>
                Propiedad Intelectual
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  Todos los elementos gráficos, logotipos, marcas, fotografías, textos y código fuente del Sitio son propiedad exclusiva de PROMEDIC ANTEQUERA o de sus respectivos fabricantes y proveedores (3M, B. Braun, Nipro, Ambiderm, BSN Medical, Cutimed, IPM, entre otros). Queda estrictamente prohibida su reproducción, distribución o uso comercial sin autorización previa y por escrito.
                </p>
              </div>
            </section>

            {/* Section 10 */}
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
                  10
                </span>
                Modificaciones a los Términos y Condiciones
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  PROMEDIC ANTEQUERA se reserva el derecho de actualizar o modificar los presentes Términos y Condiciones en cualquier momento. Dichas modificaciones surtirán efecto a partir de su publicación en el Sitio.
                </p>
              </div>
            </section>

            {/* Section 11 */}
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
                  11
                </span>
                Legislación Aplicable y Jurisdicción
              </h2>
              <div style={{ paddingLeft: "38px", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  Para la interpretación, cumplimiento y solución de cualquier controversia derivada de los presentes Términos y Condiciones, las partes se someten a las leyes mercantiles aplicables de los Estados Unidos Mexicanos y a la jurisdicción de los tribunales competentes de la Ciudad de Oaxaca de Juárez, Oaxaca, renunciando expresamente a cualquier otro fuero que por razón de sus domicilios presentes o futuros pudiera corresponderles.
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
                href="/aviso-de-privacidad"
                style={{
                  fontSize: "0.85rem",
                  color: "#167589",
                  textDecoration: "underline",
                  fontWeight: 600,
                }}
              >
                Ver Aviso de Privacidad →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
