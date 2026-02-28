# 🍦 Product Requirements Document
## ScoopDream — Ice Cream Brand Landing Page

**Version:** 1.0  
**Framework:** Next.js 16.1.6  
**Status:** Draft  
**Date:** February 27, 2026

---

## 1. Executive Summary

ScoopDream is a visually indulgent, conversion-focused landing page for a premium artisan ice cream brand. The experience blends a **retro-luxe aesthetic** — think 1950s soda fountain meets modern editorial design — with smooth dark/light mode switching and rich micro-animations. The page is built entirely in Next.js 16.1.6 using the App Router, Tailwind CSS, and Framer Motion.

---

## 2. Product Goals

| Goal | Description |
|------|-------------|
| **Brand Storytelling** | Communicate premium craftsmanship and indulgence through visual design |
| **Conversion** | Drive users to order online, find a store, or sign up for the loyalty club |
| **Delight** | Create a memorable, shareable experience that reflects the joy of ice cream |
| **Accessibility** | WCAG 2.1 AA compliant across both modes |
| **Performance** | Lighthouse score ≥ 90 on mobile and desktop |

---

## 3. Target Audience

- **Primary:** Adults 25–45 who treat themselves to premium desserts
- **Secondary:** Gift buyers, parents choosing for special occasions
- **Tertiary:** Food bloggers & social media users seeking aesthetic content

---

## 4. Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.1.6 (App Router) |
| Styling | Tailwind CSS v4 + CSS Variables |
| Animations | Framer Motion 11 |
| Theme Switching | `next-themes` |
| Fonts | Google Fonts via `next/font` |
| Icons | Lucide React |
| Images | `next/image` with blur placeholders |
| Linting | ESLint + Prettier |
| Deployment | Vercel |

---

## 5. Design Language

### 5.1 Aesthetic Direction: **Retro-Luxe Editorial**

> *"Like a Vogue cover from 1958, but it smells like waffle cones."*

The design commits to an opinionated, magazine-quality aesthetic:
- Large-scale typography with dramatic weight contrasts
- Pastel-meets-jewel-tone color palette that shifts meaningfully between light and dark modes
- Organic blob shapes, drip motifs, and sprinkle textures as decorative elements
- Asymmetric layouts with overlapping elements that break the grid intentionally
- Hover states that reveal depth and delight

### 5.2 Typography

| Role | Font | Weight |
|------|------|--------|
| Display / Hero | **Playfair Display** | 900 Italic |
| Subheadings | **DM Serif Display** | 400 |
| Body Copy | **Lora** | 400, 500 |
| Labels / UI | **DM Mono** | 400 |
| Accent Numbers | **Playfair Display** | 700 |

### 5.3 Color Palette

#### Light Mode
| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#FFF8F0` | Warm cream page background |
| `--foreground` | `#1A0A00` | Rich espresso text |
| `--primary` | `#E8406B` | Strawberry pink — CTAs, highlights |
| `--secondary` | `#FFB347` | Mango orange — accents |
| `--tertiary` | `#7EC8A4` | Mint green — tags, badges |
| `--surface` | `#FFFFFF` | Cards, modals |
| `--muted` | `#F5E6D3` | Subtle section fills |
| `--border` | `#E8D5C0` | Dividers |

#### Dark Mode
| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#0F0A12` | Deep midnight purple-black |
| `--foreground` | `#F9EDDF` | Warm off-white text |
| `--primary` | `#FF6B9D` | Neon strawberry glow |
| `--secondary` | `#FFCA6B` | Golden caramel glow |
| `--tertiary` | `#5ECFA8` | Luminous mint |
| `--surface` | `#1C1424` | Deep purple card |
| `--muted` | `#211829` | Section fill |
| `--border` | `#3A2A44` | Subtle dividers |

### 5.4 Motion Principles

- **Page load:** Staggered reveal of hero elements (title → subtitle → CTA → image) over 1.2s
- **Scroll-triggered:** Sections animate in using Framer Motion `whileInView` with `once: true`
- **Hover states:** Cards lift with `scale(1.03)` + shadow deepening + color reveal
- **Theme toggle:** Smooth 400ms CSS transition on all color variables with a playful spin animation on the toggle icon
- **Parallax:** Subtle `useScroll` parallax on hero floating scoops (±20px depth)
- **Cursor:** Custom cursor (ice cream cone) visible on desktop

---

## 6. Page Architecture

```
app/
├── layout.tsx              # Root layout with ThemeProvider
├── page.tsx                # Landing page composition
├── globals.css             # CSS variables, fonts, base styles
components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── FeaturedFlavors.tsx
│   ├── HowItsMade.tsx
│   ├── Testimonials.tsx
│   ├── SeasonalMenu.tsx
│   ├── FindAScoop.tsx
│   └── NewsletterCTA.tsx
├── ui/
│   ├── ThemeToggle.tsx
│   ├── FlavorCard.tsx
│   ├── ScoopCounter.tsx
│   └── AnimatedHeading.tsx
```

---

## 7. Sections Specification

### 7.1 Navbar
- **Sticky** with blur backdrop (`backdrop-blur-md`)
- Logo (SVG wordmark) left-aligned
- Nav links: Flavors · Story · Find Us · Seasonal
- Right side: **Theme Toggle** + **Order Now** CTA button
- Mobile: Hamburger → full-screen drawer with staggered link animations
- Scrolled state: subtle border appears, background opacity increases

**Theme Toggle:**
- Sun/Moon icon swap with 360° rotation animation
- Tooltip: "Switch to Dark Mode / Light Mode"
- Uses `next-themes` `useTheme()` hook
- Toggle persists via `localStorage` (handled by `next-themes`)
- System preference respected on first visit (`defaultTheme="system"`)

---

### 7.2 Hero Section
**Layout:** Full-viewport, asymmetric split
- Left (60%): Large display typography, subheadline, dual CTAs ("Order Now" + "See All Flavors")
- Right (40%): Hero ice cream scoop image with floating decorative elements (sprinkles, cherry, waffle cone shards) using absolute positioning + parallax

**Content:**
- Headline: *"Scoops That Make Time Stand Still"*
- Subheadline: *"Handcrafted with local cream, seasonal fruit, and an unreasonable amount of love. 47 flavors. Zero shortcuts."*
- CTAs: Primary (filled) + Secondary (outlined)
- Scroll indicator: animated chevron at bottom

**Animations:**
- Title splits into words, each word fades+slides up with 100ms stagger
- Hero image scales from 0.9 → 1.0 on load
- Floating elements use infinite loop floating keyframes (slow, offset timing)

---

### 7.3 Featured Flavors
**Layout:** Horizontal scroll on mobile, 3-column grid on desktop

**Content:** 6 flavor cards showing:
- Full-bleed flavor color background
- Scoop image
- Flavor name (display font)
- Tasting notes (3 descriptors as tags)
- Price
- "Add to Cart" / "Learn More" on hover

**Flavors to feature:**
1. Tahitian Vanilla Bean — *Classic · Floral · Pure*
2. Salted Caramel Pretzel — *Sweet · Salty · Crunchy*
3. Mango Cardamom — *Tropical · Warm · Exotic*
4. Dark Chocolate Truffle — *Intense · Velvety · Rich*
5. Strawberry Basil Sorbet — *Fresh · Herbaceous · Light*
6. Brown Butter Pecan — *Nutty · Caramel · Warm*

**Card Interaction:** Hover triggers flavor-colored border glow + ingredient reveal overlay sliding up

---

### 7.4 How It's Made (Story Section)
**Layout:** Alternating text/image rows (zig-zag)

**3 Steps:**
1. **Sourced Locally** — Farm partnerships, fresh daily delivery
2. **Crafted Slowly** — 24-hour base, hand-churned batches
3. **Served With Love** — Made-to-order, every single scoop

**Design:** Each step has a large illustrated number (display font, 20vw, low opacity background), icon, paragraph, and image. Light/dark mode transitions shift the number color dramatically for visual impact.

---

### 7.5 Testimonials / Social Proof
**Layout:** Marquee scroll (infinite horizontal loop, CSS animation)

**Content:** 8 customer quotes + star ratings + avatar (initials-based, color-coded)

**Stats bar above marquee:**
- `47` Flavors Available
- `12K+` Happy Customers  
- `3` Locations
- `Since 1987`

Numbers animate counting up when scrolled into view using Framer Motion.

---

### 7.6 Seasonal Menu Spotlight
**Layout:** Full-width editorial banner, offset asymmetric grid

**Content:** Spotlight on 2 limited-time flavors with a countdown timer ("Available for X more days")

**Design:** Bold diagonal divider, large overlapping product photography, "Limited Edition" ribbon badge

---

### 7.7 Find a Scoop (Locations)
**Layout:** 3 location cards side by side

**Each card shows:**
- Neighborhood name (display font)
- Address
- Hours (with open/closed badge based on current time)
- Phone
- Google Maps link
- Small decorative map pin illustration

---

### 7.8 Newsletter CTA
**Layout:** Full-width, centered, high-contrast

**Content:**
- Heading: *"Get First Scoop on New Flavors"*
- Body: Join the loyalty club for exclusive drops, early access, and a free scoop on your birthday
- Email input + Submit button (inline)
- Privacy note below

**Design:** In dark mode this section inverts to the primary color as background. In light mode it uses a warm gradient.

---

### 7.9 Footer
- Logo + tagline
- 4-column link grid: Flavors · Company · Visit · Legal
- Social icons (Instagram, TikTok, Facebook)
- Theme toggle (secondary instance)
- Copyright

---

## 8. Dark/Light Mode Implementation

### Strategy
Use `next-themes` with `ThemeProvider` wrapping the root layout. All color tokens defined as CSS custom properties on `:root` (light) and `[data-theme="dark"]` (dark).

### Implementation Details

```tsx
// app/layout.tsx
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

```tsx
// components/ui/ThemeToggle.tsx
'use client'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? <Sun /> : <Moon />}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}
```

```css
/* globals.css */
:root {
  --background: #FFF8F0;
  --foreground: #1A0A00;
  --primary: #E8406B;
  /* ... all tokens */
  transition: background-color 0.4s ease, color 0.4s ease;
}

[data-theme="dark"] {
  --background: #0F0A12;
  --foreground: #F9EDDF;
  --primary: #FF6B9D;
  /* ... all tokens */
}
```

### Flash Prevention
`suppressHydrationWarning` on `<html>` prevents hydration mismatch. `next-themes` handles FOUC via inline script injection.

---

## 9. Responsive Breakpoints

| Breakpoint | Width | Layout Notes |
|------------|-------|--------------|
| Mobile | < 640px | Single column, horizontal scroll for flavors |
| Tablet | 640–1024px | 2-column grids, condensed hero |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container `1440px`, centered |

---

## 10. Performance Requirements

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| FID/INP | < 200ms |
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Bundle Size (JS) | < 150kb gzipped |

**Optimization strategies:**
- `next/image` for all images with `priority` on hero
- Font subsetting via `next/font`
- Dynamic import for Framer Motion (below-fold sections)
- Server Components for all static sections
- Client Components only where interactivity is needed (Navbar, ThemeToggle, Animations)

---

## 11. Accessibility

- All interactive elements keyboard-navigable
- Focus rings visible in both modes (themed to primary color)
- `prefers-reduced-motion` media query disables animations
- Color contrast ratio ≥ 4.5:1 for all text in both modes
- ARIA labels on icon-only buttons
- Semantic HTML5 landmark elements throughout

---

## 12. File Structure

```
scoopDream/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedFlavors.tsx
│   │   ├── HowItsMade.tsx
│   │   ├── Testimonials.tsx
│   │   ├── SeasonalMenu.tsx
│   │   ├── FindAScoop.tsx
│   │   └── NewsletterCTA.tsx
│   └── ui/
│       ├── ThemeToggle.tsx
│       ├── FlavorCard.tsx
│       ├── AnimatedHeading.tsx
│       └── ScoopCounter.tsx
├── lib/
│   ├── data/
│   │   ├── flavors.ts
│   │   ├── testimonials.ts
│   │   └── locations.ts
│   └── utils.ts
├── public/
│   └── images/
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 13. Dependencies

```json
{
  "dependencies": {
    "next": "16.1.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next-themes": "^0.4.4",
    "framer-motion": "^11.15.0",
    "lucide-react": "^0.475.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "tailwindcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "16.1.6",
    "prettier": "^3.4.2"
  }
}
```

---

## 14. Development Phases

| Phase | Scope | Est. Duration |
|-------|-------|---------------|
| **Phase 1 — Foundation** | Project setup, Tailwind config, theme system, CSS variables, fonts | 1 day |
| **Phase 2 — Layout Shell** | Navbar, Footer, page composition, ThemeToggle | 1 day |
| **Phase 3 — Hero + Flavors** | Hero section, FlavorCard component, FeaturedFlavors grid | 2 days |
| **Phase 4 — Content Sections** | HowItsMade, Testimonials, SeasonalMenu, Locations | 2 days |
| **Phase 5 — Newsletter + Polish** | NewsletterCTA, animations, parallax, hover states | 1 day |
| **Phase 6 — QA + Performance** | Responsive testing, Lighthouse audit, a11y audit | 1 day |

---

## 15. Success Metrics

| Metric | Target |
|--------|--------|
| Bounce Rate | < 45% |
| Time on Page | > 2 min avg |
| CTA Click-through | > 8% |
| Newsletter Sign-up Rate | > 3% |
| Lighthouse Scores | All ≥ 90 |
| Theme Toggle Usage | Track via analytics |

---

## 16. Out of Scope (v1)

- Shopping cart / checkout flow
- User authentication / loyalty account portal
- CMS integration (hardcoded content for v1)
- Blog / editorial section
- Multi-language support
- Online ordering integration

---

*End of PRD — ScoopDream Landing Page v1.0*
