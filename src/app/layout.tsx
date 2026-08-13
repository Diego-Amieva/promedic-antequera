import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ContactBubble from "@/components/layout/ContactBubble";
import CookieConsent from "@/components/layout/CookieConsent";

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
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
      <body className="antialiased">
        {children}
        <ContactBubble />
        <CookieConsent />
      </body>
    </html>
  );
}
