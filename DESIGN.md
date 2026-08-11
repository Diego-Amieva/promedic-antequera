# Promedic Antequera — Codebase Analysis & Design System Overview

**Repository Target**: `promedic-antequera` (`file:///Users/diegoamieva/Documents/GitHub/promedic-antequera`)  
**Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Montserrat Google Font, Lottie-React

---

## 🎯 1. Codebase Purpose & Strategic Goals

**Promedic Antequera** is a B2B landing application for a premier medical technology and supplies distributor based in **Oaxaca, Mexico**. 

* **Core Purpose**: Serve as the primary commercial portal for healthcare institutions (hospitals, clinics, surgical centers, and private practices) to discover certified medical supplies, access official brand catalogs, locate corporate facilities, and initiate direct B2B quote requests.
* **Key Goals**:
  1. Establish maximum corporate trust through certified global brand partnerships (**3M, B. Braun, Cutimed, Nipro, BSN Medical, IPM, Ambiderm**).
  2. Streamline product inquiry workflows via high-conversion WhatsApp integration and custom B2B inquiry forms.
  3. Deliver high performance with zero layout shift, liquid glass navigation, video hero backgrounds, interactive mouse-follow parallax, and smooth section transitions across multi-page views (`/` and `/productos`).

---

## 📁 2. Critical Files & Component Architecture

| File Path | Role & Functionality |
| :--- | :--- |
| [`src/app/globals.css`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/app/globals.css) | Central Design System tokens, custom keyframe animations (`float-icon`, `cta-float-up`, `sway-icon`, `marquee`, `fade-up`, `products-idle-float`), liquid glass capsule utilities (`.nav-capsule`), button classes (`.btn-cta-whatsapp`, `.btn-hero-cta`, `.btn-outline-cta`, `.btn-pill`), and hover elevation states. |
| [`src/app/layout.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/app/layout.tsx) | Root layout injecting `Montserrat` via `next/font/google` and complete OpenGraph/SEO metadata (`https://www.promedicantequera.com`). |
| [`src/app/page.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/app/page.tsx) | Home page orchestrator connecting fixed header, hero video, catalog grid, brand marquee, trust accordion, Google Maps embed, contact form, and corporate footer. |
| [`src/app/productos/page.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/app/productos/page.tsx) | Dedicated Brand Catalog page (`/productos`) connecting interactive hero section with parallax physics, 3×2 brand catalog grid, and floating CTA banner. |
| [`Header.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/layout/Header.tsx) | Liquid Glass floating header (`nav-capsule`) with `usePathname` for dynamic route highlighting (`/`, `/productos`, anchor links) and responsive drawer. |
| [`Footer.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/layout/Footer.tsx) | 3-column corporate footer with contact info, operating hours, responsive legal links grid (iPhone optimized), and root navigation. |
| [`HeroSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/HeroSection.tsx) | Home entry hero with background MP4/WebM video, translucent teal gradient overlay, 3-line uppercase typography, and concave SVG wave curve. |
| [`ProductsHeroSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/productos/ProductsHeroSection.tsx) | Products page hero featuring interactive mouse-follow parallax (`useMouseParallax` hook with lerp spring physics on desktop), idle float animation on mobile, dark glass teal overlay, and PDF download CTA. |
| [`ProductsSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/ProductsSection.tsx) | Product showcase featuring 4 core lines in gradient cards (`#167589` → `#a7d9dd`), desktop 2×2 grid, and mobile touch slider with swipe gestures, dot indicators, and nav arrows. |
| [`BrandsSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/BrandsSection.tsx) | Medical brand logo grid with interactive color-swap filters, mobile infinite marquee, and official catalog PDF download trigger. |
| [`BrandCatalogSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/productos/BrandCatalogSection.tsx) | 3×2 brand grid with floating Lottie-animated icon badges (50% white opacity over teal-aqua gradient circles), product cards with 200px photo headers, gradient scrims, and individual catalog PDF download actions. |
| [`ProductsCtaSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/productos/ProductsCtaSection.tsx) | Page-bottom CTA banner featuring floating 3D artwork (`Contact_Products.png`) with 27% top overlap, rounded gradient container (`#167589` → `#a7d9dd`, 40px top radius), and dual WhatsApp + Contact CTA buttons. |
| [`TrustSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/TrustSection.tsx) | Interactive 3-pillar accordion tablist with 50/50 illustration cross-fade animations sandwiched between double SVG concave waves. |
| [`LocationSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/LocationSection.tsx) | Embedded interactive Google Map widget for Oaxaca headquarters (Lat 17.0807208, Long -96.7200027) with direct navigation links. |
| [`ContactSection.tsx`](file:///Users/diegoamieva/Documents/GitHub/promedic-antequera/src/components/sections/ContactSection.tsx) | B2B proposal form with custom teal input styling, floating advisor artwork, and simulated submission feedback state. |

---

## 🎨 3. Visual Identity & Design System Tokens

### Color Palette
* **Brand Primary**: `#167589` *(Deep Ocean Teal)* — `--color-brand-primary`
* **Brand Secondary**: `#a7d9dd` *(Soft Medical Aqua / Mint)* — `--color-brand-secondary`
* **Neutral Base**: `#ffffff` *(Pure White)* — `--color-neutral-white`
* **Neutral Light**: `#f8fafc` *(Slate 50)* — `--color-neutral-50`
* **Text Muted**: `#475569` *(Slate 600)* — `--color-neutral-600`
* **Text Dark**: `#020617` *(Slate 950)* — `--color-neutral-950`

### Typography Scale & Font
* **Font Family**: Montserrat Google Font (`var(--font-montserrat)`)
* **Weights**: `300` (Light), `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold), `800` (ExtraBold)
* **Hero Title**: `3xl` / `4xl` (mobile) → `5xl` (tablet) → `6xl` / `7xl` (desktop), uppercase, tracking-tight, line-height `1.1` to `1.15`
* **Section Headings**: `clamp(1.25rem, 2.5vw, 1.625rem)`, `font-bold` (700 / 800 weight)

### Component Patterns, Geometry & Glassmorphism
* **Pill Radius**: `9999px` (buttons, nav capsules, active tab pills)
* **Card Radius**: `20px` (product & brand catalog cards) / `24px` (map & contact containers) / `40px 40px 0 0` (CTA top boundary)
* **Icon Badges**: `72px × 72px` circular badges (`borderRadius: 50%`) with `135deg` linear gradient (`#167589` → `#a7d9dd`), `8px` drop shadow, containing Lottie vector animations or vector icons rendered at 50% opacity in white (`brightness(0) invert(1)`).
* **Glassmorphism**: 
  * Header Capsule: `backdrop-filter: blur(12px)`, `rgba(255, 255, 255, 0.10)` fill, `1px solid rgba(255, 255, 255, 0.20)` border.
  * Card Download CTAs: `backdrop-filter: blur(10px)`, `rgba(22, 117, 137, 0.82)` fill, `1px solid rgba(255, 255, 255, 0.22)` border.
* **Section Dividers**: Concave SVG Wave paths (`<path d="M0 110C480 34 960 34 1440 110V110H0V110Z" fill="#f8fafc" />`).

### Button Hierarchy & Utility Tokens
* **`.btn-hero-cta`**: Solid Ocean Teal (`#167589`) pill button with 8px/32px shadow, uppercase Montserrat, hover scale (`translateY(-2px)`) and opacity shift.
* **`.btn-cta-whatsapp`**: White fill pill button with Teal text (`#167589`), ideal for primary conversion actions over dark/teal backgrounds.
* **`.btn-outline-cta`**: Transparent fill pill button with `2px solid rgba(255, 255, 255, 0.85)` border, white uppercase text, hover blend (`rgba(255, 255, 255, 0.15)`).
* **`.btn-pill`**: Foundation base for pill actions with focus ring indicator.

### Animations & Motion Design
* **`float-icon`**: 3s infinite vertical float (`translateY(-8px)`).
* **`cta-float-up`**: 4s infinite vertical float for 3D illustrations (`translateY(-14px)`).
* **`sway-icon`**: 0.5s rotation sway on hover (`rotate(-4deg)` → `rotate(4deg)`).
* **`marquee`**: 28s infinite smooth horizontal loop for brand logo marquee on mobile screens.
* **`fade-up` / `fade-up-delay-1..3`**: Staggered 0.8s entry animations for hero headings and calls to action.
* **`products-idle-float`**: 5s subtle rotational/vertical gravity drift for hero text on mobile devices (automatically disabled on desktop with fine pointers in favor of JS spring parallax).
* **`useMouseParallax`**: Custom React hook implementing smooth spring lerp physics (`SPRING_STIFFNESS = 0.06`) for background (`-12px` factor) and foreground (`+18px` factor) cursor interaction.

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

### Partner Brands & Catalog Infrastructure
| Brand | Logo Asset | Photo Asset | Animation Asset | Target Catalog PDF | Category Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **3M** | `/brands/3M.svg` | `/brands/photos/3m.jpg` | `/brands/animations/3m.json` | `/catalogos/3m.pdf` | Cuidado de heridas, estetoscopios Littmann, protección respiratoria |
| **BSN Medical** | `/brands/Bsn-medical.svg` | `/brands/photos/Bsn.jpg` | `/brands/animations/Bsn.json` | `/catalogos/bsn.pdf` | Ortopedia, manejo de fracturas, cuidado de heridas |
| **Cutimed** | `/brands/cutimed_active.svg` | `/brands/photos/Cutimed.jpg` | `/brands/animations/Cutimed.json` | `/catalogos/cutimed.pdf` | Heridas crónicas y complejas |
| **B. Braun** | `/brands/Bbraun.svg` | `/brands/photos/Braun.jpg` | `/brands/animations/Braun.json` | `/catalogos/braun.pdf` | Equipos de infusión, suturas, anestesia regional |
| **Ambiderm** | `/brands/Ambiderm.svg` | `/brands/photos/Ambiderm.jpg` | `/brands/animations/Ambiderm.json` | `/catalogos/ambiderm.pdf` | Guantes quirúrgicos/exploración, ropa desechable |
| **IPM** | `/brands/IPM.svg` | `/brands/photos/Ipm.jpg` | `/brands/animations/Ipm.json` | `/catalogos/ipm.pdf` | Consumibles plásticos de aspiración, drenaje y fluidos |

---

## ⚡ 5. Dominant Feature & Native Page Flow

The application features a 2-route architecture (Home Page `/` and Brand Catalog Page `/productos`) designed around a clear B2B decision funnel:

### 1. Home Page Flow (`/`)
$$\text{Hero (Identity \& Video)} \longrightarrow \text{Products (4 Lines Grid/Slider)} \longrightarrow \text{Brands (Marquee \& Download)} \longrightarrow \text{Trust (3 Pillars Accordion)} \longrightarrow \text{Location (Oaxaca HQ Map)} \longrightarrow \text{Contact (Acquisition)}$$

### 2. Catalog Page Flow (`/productos`)
$$\text{Products Hero (Parallax \& PDF Download)} \longrightarrow \text{Brand Catalog (3×2 Grid with Lottie Badges)} \longrightarrow \text{Products CTA (Overlap Banner \& WhatsApp/Contact)}$$

All terminology, assets, color codes, animation specs, and component patterns documented above are extracted directly from the primary source codebase.
