# Promedic Antequera — Codebase Analysis & Design System Overview

**Repository Target**: `promedic-antequera` (`file:///Users/diegoamieva/Documents/GitHub/promedic-antequera`)  
**Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Montserrat Google Font

---

## 🎯 1. Codebase Purpose & Strategic Goals

**Promedic Antequera** is a B2B landing application for a premier medical technology and supplies distributor based in **Oaxaca, Mexico**. 

* **Core Purpose**: Serve as the primary commercial portal for healthcare institutions (hospitals, clinics, surgical centers, and private practices) to discover certified medical supplies, access official brand catalogs, locate corporate facilities, and initiate direct B2B quote requests.
* **Key Goals**:
  1. Establish maximum corporate trust through certified global brand partnerships (**3M, B. Braun, Cutimed, Nipro, BSN Medical, IPM, Ambiderm**).
  2. Streamline product inquiry workflows via high-conversion WhatsApp integration and custom B2B inquiry forms.
  3. Deliver high performance with zero layout shift, liquid glass navigation, video hero backgrounds, and smooth interactive section transitions.

---

## 📁 2. Critical Files & Component Architecture

| File Path | Role & Functionality |
| :--- | :--- |
| [`src/app/globals.css`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/app/globals.css) | Central Design System tokens, custom animations (`float-icon`, `sway-icon`, `marquee`, `fade-up`), liquid glass capsule utilities, and card hover effects. |
| [`src/app/layout.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/app/layout.tsx) | Root layout injecting `Montserrat` via `next/font/google` and complete OpenGraph/SEO metadata (`https://www.promedicantequera.com`). |
| [`src/app/page.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/app/page.tsx) | Master orchestrator connecting fixed header, hero video, catalog grid, brand marquee, trust accordion, Google Maps embed, contact form, and corporate footer. |
| [`Header.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/layout/Header.tsx) | Liquid Glass floating header (`nav-capsule`) with dynamic scroll listener (switches SVG filter and text colors on scroll) + mobile overlay drawer. |
| [`HeroSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/HeroSection.tsx) | Prominent entry feature with background MP4/WebM video, translucent teal gradient overlay, 3-line uppercase typography, and concave SVG wave curve. |
| [`ProductsSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/ProductsSection.tsx) | Product showcase featuring 4 core lines in gradient cards (`#167589` → `#a7d9dd`), mobile touch slider with dot indicators, and desktop 2×2 grid. |
| [`BrandsSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/BrandsSection.tsx) | Medical brand grid with interactive logo color-swap filters, mobile infinite marquee, and official PDF catalog download trigger. |
| [`TrustSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/TrustSection.tsx) | Interactive 3-pillar accordion tablist with 50/50 illustration cross-fade animations sandwiched between double SVG concave waves. |
| [`LocationSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/LocationSection.tsx) | Embedded interactive Google Map widget for Oaxaca headquarters (Lat 17.0807208, Long -96.7200027) with direct navigation links. |
| [`ContactSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/ContactSection.tsx) | B2B proposal form with custom teal input styling, floating advisor artwork, and simulated submission feedback state. |
| [`Footer.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/layout/Footer.tsx) | 3-column corporate footer with contact information (`contacto@promedicantequera.com`, `951-688-76-21`), operating hours, and legal navigation links. |

---

## 🎨 3. Visual Identity & Design System Tokens

### Color Palette
* **Brand Primary**: `#167589` *(Deep Ocean Teal)*
* **Brand Secondary**: `#a7d9dd` *(Soft Medical Aqua / Mint)*
* **Neutral Base**: `#ffffff` *(Pure White)*
* **Neutral Light**: `#f8fafc` *(Slate 50)*
* **Text Muted**: `#475569` *(Slate 600)*
* **Text Dark**: `#020617` *(Slate 950)*

### Typography Scale & Font
* **Font Family**: Montserrat Google Font (`var(--font-montserrat)`)
* **Weights**: `300` (Light), `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold), `800` (ExtraBold)
* **Hero Title**: `4xl` (mobile) → `5xl` (tablet) → `7xl` (desktop), uppercase, tracking-tight, line-height `1.15`

### Component Patterns & Geometry
* **Pill Radius**: `9999px` (buttons, nav capsules, active tab pills)
* **Card Radius**: `20px` (product cards) / `24px` (map & contact container)
* **Glassmorphism**: `backdrop-filter: blur(12px)`, `rgba(255, 255, 255, 0.10)` fill, `1px solid rgba(255, 255, 255, 0.20)` border
* **Section Dividers**: Concave SVG Wave paths (`<path d="M0 90C480 28 960 28 1440 90V90H0V90Z" fill="#ffffff" />`)

---

## 🏷️ 4. Real Content & Native Data Structures

### Core Product Categories
1. **Infusión y Acceso**: Catéteres, bombas de infusión y accesos vasculares de alta precisión hospitalaria.
2. **Cuidado de Heridas**: Apósitos avanzados, manejo de fracturas e inmovilización ortopédica especializada.
3. **EPP & Consumibles**: Guantes especializados, ropa médica descartable y respiradores de alta eficiencia para la máxima bioseguridad del personal.
4. **Diagnóstico Clínico**: Instrumentos de auscultación y herramientas de diagnóstico de alta fidelidad para evaluaciones.

### Value Pillars
1. **Calidad certificada**: Insumos médicos que cumplen con las más altas normas regulatorias y sanitarias nacionales e internacionales.
2. **Stock garantizado**: Logística eficiente diseñada para cubrir las demandas críticas de hospitales, clínicas y centros de salud.
3. **Atención Humana Especializada**: Experiencia de venta personalizada y adaptada a las necesidades específicas de tu institución médica.

### Partner Brands
`3M` • `B. Braun` • `BSN Medical` • `Cutimed` • `Ambiderm` • `Nipro` • `IPM`

---

## ⚡ 5. Dominant Feature & Native Page Flow

The **Hero Section** leads the page hierarchy with high-impact hospital video backdrop and clear headline weight ("**TECNOLOGÍA Y SUMINISTROS MÉDICOS**"). The content flows logically along a B2B decision funnel:

$$\text{Hero (Identity)} \longrightarrow \text{Products (Catalog)} \longrightarrow \text{Brands (Authority)} \longrightarrow \text{Trust (Certification)} \longrightarrow \text{Location (Physical Presence)} \longrightarrow \text{Contact (Acquisition)}$$

All terminology, assets, color codes, and component patterns documented above are extracted directly from the primary source codebase.
