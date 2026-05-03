# Technical Handoff Report: Math Habits Web Dashboard

This document provides the necessary blueprint for porting the "Study Habits" Remotion video project into an interactive, mobile-first web dashboard using React/Next.js and CSS/Framer Motion.

## 1. Design Tokens

The project utilizes a strict "telemetry/hacker" color palette and typography system to ensure a premium, data-driven aesthetic.

### Colors
*   **Background (Deep Space):** `#020202` (Main CSS), `#0a0a0a` (Data Config)
*   **Primary Gold (Accents & Highlights):** `#FFD700`
*   **Gold Glow (Shadows & Halos):** `rgba(255, 215, 0, 0.5)`
*   **Primary Blue (Base UI & Data):** `#4A90E2`
*   **Blue Glow:** `rgba(74, 144, 226, 0.5)`
*   **Glass Elements:** `rgba(255, 255, 255, 0.02)`
*   **Borders/Dividers:** `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.1)`

### Typography
*   **Primary Font (Headings & Values):** `'Outfit', sans-serif`
*   **Telemetry & Glitch Font (System Labels & Data Output):** `'JetBrains Mono', monospace`
*   *(Note: 'Inter' is also imported as a secondary body font if needed).*

---

## 2. Raw Data Object

Below is the complete, JSON-formatted summary of all data points used throughout the project (from the 24-student sample).

```json
{
  "totalStudents": 24,
  "averageStudyHours": 1.91,
  "homeworkSentiment": {
    "notFairCount": 19,
    "fairCount": 5,
    "notFairPercentage": 79.17,
    "fairPercentage": 20.83,
    "label": "Feel the homework load is unfair"
  },
  "competitions": {
    "competitionCount": 14,
    "studyHoursCount": 5,
    "totalWeighting": 19,
    "competitionPercentage": 73.68,
    "studyHoursPercentage": 26.32
  },
  "classEnjoyment": {
    "boring": 4,
    "neutral": 12,
    "fun": 8
  },
  "accountability": {
    "ownFaultCount": 14,
    "teacherFaultCount": 10,
    "ownFaultPercentage": 58.33,
    "teacherFaultPercentage": 41.67,
    "label": "Take Ownership"
  },
  "studyData": [
    { "hours": "0h", "count": 1 },
    { "hours": "0.25h", "count": 1 },
    { "hours": "0.5h", "count": 1 },
    { "hours": "1h", "count": 6 },
    { "hours": "2h", "count": 11, "isMode": true },
    { "hours": "3h", "count": 1 },
    { "hours": "4h", "count": 2 },
    { "hours": "6h", "count": 1 }
  ]
}
```

---

## 3. Animation Logic

To replicate the cinematic feel on the web, use Framer Motion or pure CSS with the following logic:

### Typewriter Effect
*   **Timing:** Interpolate the string length over a set duration (e.g., 0 to full length over 150 frames / ~2.5 seconds).
*   **Cursor:** A blinking block cursor attached to the end of the text. The blink rate in the video uses a sine wave (`Math.sin(frame * 0.5) > 0`). In CSS, this can be achieved with a simple `@keyframes` opacity toggle (0% to 100%) running every `500ms`.

### Glitch Effect
*   **Core Logic:** The main container uses a 3s infinite animation that shifts its position (`translate`) and rotates its hue (`filter: hue-rotate`).
*   **Chromatic Aberration (The Tearing):** Uses `::before` and `::after` pseudo-elements containing the exact same text via `attr(data-text)`. 
    *   `::before` is colored `#ff00c1` (magenta) and animated with a `clip-path: inset()` that alters the visible horizontal slice continuously.
    *   `::after` is colored `#00fff9` (cyan) and animates a different `clip-path: inset()` slice in the opposite direction.
    *   These animations run `linear alternate-reverse` over 2s and 3s respectively.

### Glass Card Shimmer
*   A `::before` pseudo-element creates a vertical light beam (`linear-gradient`) that sweeps across the card horizontally from `-100%` to `100%` every 4 seconds.

---

## 4. Asset Export (Custom Icons & Visuals)

*Important Note for Web Dev:* The video project was built predominantly without external SVGs to maintain the raw programmatic aesthetic. 

*   **Weight Scale:** The accountability scale is constructed purely from CSS geometry. The pivot point is an invisible `0x0` div with thick, transparent side borders and a solid bottom border. The scale arm is a rounded `div` rotated dynamically via React state. 
*   **Student Blocks:** Data points (like the "student" icons falling on the scale) are rendered as CSS blocks with linear gradients (`linear-gradient(135deg, #FFD700, #FF8C00)`) and glowing box-shadows.
*   **HUD Borders (Exported):** The only true SVG paths are the animated HUD corners. You can copy/paste these directly into your React component:

```tsx
<svg width="100%" height="100%" style={{ position: 'absolute' }}>
  {/* Top Left */}
  <path d="M 40 100 L 40 40 L 100 40" fill="none" stroke="#4A90E2" strokeWidth="2" />
  {/* Top Right */}
  <path d="M 1820 100 L 1820 40 L 1760 40" fill="none" stroke="#4A90E2" strokeWidth="2" />
  {/* Bottom Left */}
  <path d="M 40 980 L 40 1040 L 100 1040" fill="none" stroke="#4A90E2" strokeWidth="2" />
  {/* Bottom Right */}
  <path d="M 1820 980 L 1820 1040 L 1760 1040" fill="none" stroke="#4A90E2" strokeWidth="2" />
</svg>
```

---

## 5. Component Mapping

Since Remotion is essentially a React wrapper, much of the math and rendering logic can be lifted directly into your Next.js project.

*   **`TypewriterOverlay.tsx`** &rarr; Easily ported to a reusable `<Typewriter />` component. Replace `useCurrentFrame()` with standard `useEffect` intervals or a library like `framer-motion` (using the `staggerChildren` property).
*   **`ResponsibilityScale.tsx`** &rarr; The tilt calculation logic can be copied. `weightDiff = leftWeight - rightWeight` dynamically updates the `transform: rotate()` value of the main bar. The "falling blocks" map well to Framer Motion's `<motion.div>` with `initial={{ y: -600 }}` and `animate={{ y: 0 }}`.
*   **`TelemetryOverlay.tsx`** &rarr; The scrolling hex codes and HUD timers can be moved to a global layout wrapper. The continuous frame counts should be swapped to `Date.now()` differences for actual web performance.
*   **`Summary.tsx`** (Data Cards) &rarr; Standard React functional components mapping the JSON data above. The 3D CSS perspective (`transformStyle: preserve-3d` and `translateZ`) can be kept to maintain the volumetric depth of the dashboard.
