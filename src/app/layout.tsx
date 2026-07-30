import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

/* ─────────────────────────────────────────
   Font: Montserrat via next/font/google
   Loaded natively — no layout shift, optimised subset
   ───────────────────────────────────────── */
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

/* ─────────────────────────────────────────
   Global SEO Metadata
   ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Promedic Antequera | Tecnología y Suministros Médicos B2B",
    template: "%s | Promedic Antequera",
  },
  description:
    "Distribuidor líder en tecnología y suministros médicos para instituciones de salud en México. Catálogos, marcas certificadas y atención especializada.",
  keywords: [
    "suministros médicos",
    "distribuidores médicos México",
    "equipos hospitalarios",
    "EPP médico",
    "catéter hospitalario",
    "B. Braun",
    "3M salud",
    "Promedic Antequera",
    "Oaxaca",
  ],
  metadataBase: new URL("https://www.promedicantequera.com"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Promedic Antequera",
    title: "Promedic Antequera | Tecnología y Suministros Médicos B2B",
    description:
      "Distribuidor líder en tecnología y suministros médicos para instituciones de salud en México.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
