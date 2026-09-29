# BhoomiDrishti Production Design Specification & Engineering Implementation Guide
**Department of Land Resources (DoLR), Ministry of Rural Development, Government of India**
*Decision-Support & Delay Prediction Engine under RFCTLARR Act, 2013*

---

## 1. Core Visual Elements & Refined Component Specifications

### 1.1 Refined BhoomiDrishti Logo & Brand Identity
- **Geometry & Geometry Rules**:
  - Almond eye silhouette with precise parabolic bezier curves `M 4 24 C 11 12, 37 12, 44 24 C 37 36, 11 36, 4 24 Z`.
  - Five concentric topographic elevation contour rings nested in the iris representing geospatial cadastral elevation levels.
  - Uniform 1.5px stroke weight; stroke opacity progression (0.35, 0.55, 0.75, 0.90, solid pupil dot).
  - Scalability: Vector-optimized for 24px condensed sidebar icon (`w-6 h-6`) up to 96px splash/hero lockup with absolute geometric clarity and zero subpixel blur.
- **Bilingual Typographic Pairing**:
  - Primary Wordmark: **BhoomiDrishti** (Space Grotesk, 600 weight, letter-spacing -0.02em).
  - Statutory Devanagari Script: **भूमिदृष्टि** (Noto Sans Devanagari, 500 weight, saffron-tinted or muted slate `#8B95A8`).
  - Act Subtitle: `RFCTLARR ACT 2013 DECISION SUPPORT` (JetBrains Mono, 10px uppercase, tracking 0.12em).

---

### 1.2 Striking Risk Gauge Architecture (Ring Gauge)
- **Ring Parameters**:
  - Total diameter: 120px to 140px (Hero gauge) or 64px to 80px (Card gauge).
  - Ring stroke thickness: Exactly **14px** (elevated from 8-10px for high visual authority).
  - Stroke caps: `stroke-linecap="round"` on both track background and active risk fill.
  - Track background: Deep card tone `rgba(255, 255, 255, 0.05)` or `#0A101D`.
- **Dynamic Mid-Animation Glow State**:
  - `stroke-dasharray="283"` and `stroke-dashoffset="70"` (demonstrating dynamic in-flight calibration).
  - Colored outer glow filter matching the exact statutory risk classification:
    - **Critical (>85)**: `#EF4444` with `drop-shadow(0 0 16px rgba(239, 68, 68, 0.45))`
    - **High (65–85)**: `#F97316` with `drop-shadow(0 0 14px rgba(249, 115, 22, 0.40))`
    - **Medium (40–65)**: `#FBBF24` with `drop-shadow(0 0 12px rgba(251, 191, 36, 0.35))`
    - **Low (<40)**: `#34D399` with `drop-shadow(0 0 12px rgba(52, 211, 153, 0.35))`
  - Center numeral readout: 32px–40px JetBrains Mono bold score with mini secondary label `P(LAPSE)`.

---

### 1.3 De-Noising & Visual Restraint System
- **Single Accent Moment Rule**:
  - Strictly **one accent moment per card container**. If a card features an active risk gauge or risk badge, all surrounding interactive elements (borders, icons, secondary pills) remain neutral dark slate (`#8B95A8`, `border-white/5`).
- **Reduced Border Hierarchy**:
  - Replace multiple nested borders with elevation changes, background contrast (`#070B14` base vs `#0F1626` card vs `#141E34` hover), and subtle backdrop blur (`backdrop-blur-md`).
  - Section dividers rely on generous 32px–40px whitespace rhythm rather than heavy horizontal rules.
- **Topographic Background Control**:
  - Faint contour vectors maintained strictly at 3% opacity to prevent interference with tabular data readability.

---

### 1.4 Scannable High-Density Cadastral Data Table
- **Row Geometry & Rhythm**:
  - Exact **40px row height** (`h-10`) for optimal information density without cramped legibility.
  - Sticky table header (`sticky top-0 z-20 bg-[#0A101D]/95 backdrop-blur-md`) with 1px border-b `rgba(255, 255, 255, 0.08)`.
  - Row hover highlight: `hover:bg-white/[0.035]` with smooth 120ms CSS transition and electric teal left border pip (`border-l-2 border-[#2DD4BF]`).
- **Typography & Alignment**:
  - All quantitative numbers, statutory scores, cadastral Khasra IDs, and solatium currency figures right-aligned in **JetBrains Mono** with tabular lining figures (`font-variant-numeric: tabular-nums`).
  - Text project titles and district jurisdictions left-aligned in Inter/Space Grotesk.

---

### 1.5 Cartographic Shell & Navigation Continuity
- **Persistent Chrome**:
  - Collapsible left sidebar (64px collapsed, 240px expanded) with refined 24px eye emblem.
  - Top administrative bar with sovereign 2px Indian Tricolour ribbon (`#FF9933` Saffron, `#FFFFFF` White, `#138808` India Green).
  - Search command input (`Ctrl+K`), role badge, notification beacon, and authorized officer profile avatar.
  - Content area is modular, preserving the established sovereign dark intelligence aesthetic.

---

## 2. Comprehensive Photographic Asset Curation & Treatment Guide

All photographic assets must undergo sovereign cartographic grading:
1. **Exposure & Brightness**: Down-sampled to ~30% brightness.
2. **Color Cast**: Graded with cool blue/slate shadow tint (`#070B14`) and subtle warm highlight preservation.
3. **Ink Gradient Integration**: Bottom and side edge falloffs using linear gradients `linear-gradient(to bottom, rgba(7,11,20,0.4), #070B14 100%)`.

| Screen / Role | Curated Search Term | Recommended Composition & Subject |
|---|---|---|
| **Login Screen** | `aerial farmland India sunset` | Geometric agricultural fields at dusk with irrigation canal reflecting low sun. Red and ochre soil parcels. |
| **State Policymaker Dashboard** | `highway interchange construction aerial` | Multi-level grade separator or greenfield expressway cutting through rural land with heavy earthmoving machinery. |
| **District Officer (CALA) Dashboard** | `irrigation canal aerial India` | Excavated canal alignment with concrete lining, earthen bunds, and surrounding cadastre tracts. |
| **Project Detail (Krishna Canal)** | `canal excavation aerial drone` | Close high-angle drone survey perspective along canal bend with visible chainage markers and survey stakes. |
| **National GIS Risk Map / Corridors** | `railway line through fields aerial` / `transmission towers dusk` | Linear infrastructure easement corridor cutting across undulating topography and state borders. |

---

## 3. Motion & Micro-Interaction Technical Specification

| UI Element | Target Interaction | Production Animation Specification | Recommended Library |
|---|---|---|---|
| **Login Contours** | Ambient Topographic Drift | SVG vector paths drifting via CSS `transform: translate3d(x, y, 0) rotate(deg)` across 60s–90s infinite loop, `ease-in-out` | Pure CSS / SVGApollo |
| **Risk Gauge** | Mid-Animation Ring Fill | `stroke-dashoffset` animating from `283` to target score over 1.2s (`cubic-bezier(0.16, 1, 0.3, 1)`), followed by 300ms delayed outer glow bloom | Framer Motion / SVG |
| **KPI Metrics** | Numerical Count-Up | Eased count-up from 0 to final integer/currency over 900ms upon viewport entrance | Framer Motion / CountUp.js |
| **Risk Progress Bars** | Staggered Horizontal Fill | Width expansion over 700ms, staggered by 60ms per row with lighter leading edge highlight | Tailwind CSS / Framer Motion |
| **Critical Map Markers** | Statutory Hazard Radar | Infinite 2s radial ripple `scale(1.0 -> 2.4)` with opacity decay `0.8 -> 0.0` | MapLibre GL JS / CSS Keyframes |
| **Cadastral Cards** | Staggered Entrance & Hover | Staggered translateY reveal (+12px to 0px, 50ms interval); hover inner glow `box-shadow: inset 0 0 20px rgba(45, 212, 191, 0.08)` over 150ms | Framer Motion |
| **Kanban Pipeline** | Casework Drag & Drop | Smooth physics-based dragging with layout re-ordering animations and snap-to-column constraints | Framer Motion (Reorder / layoutId) |
