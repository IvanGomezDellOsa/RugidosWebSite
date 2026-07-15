[English](README.en.md) | [Español](README.md)

# RugidosWebSite — Commercial Website

Complete redesign of the web platform for **Rugidos Fiestas Tandil**. The direct successor to the ([See previous version](https://github.com/IvanGomezDellOsa/RugidosWebSite-2023-Legacy)), built from scratch with a modern stack focused on performance and visual experience.

🌐 **Production deploy:** [rugidosfiestas.com.ar](https://rugidosfiestas.com.ar)

---

## 🛠 Tech Stack

| Layer | Technology |
|------|------------|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Smooth Scroll** | Lenis |
| **UI Components** | shadcn/ui + Radix UI primitives |
| **Icons** | Lucide React |
| **Analytics** | Vercel Analytics |
| **Deploy** | Vercel |

---

## 🎯 Sections and Features

**Hero**
- Background video with gradient overlay and animated orbs
- Logo with an animated conic glow effect
- Main WhatsApp CTA with shine effect
- Animated scroll indicator

**Why choose us?**
- Animated counters with easeOutExpo easing (18 years, +7500 events)
- Cards with an interactive 3D tilt effect + dynamic glare
- Long paragraph with word-by-word reveal on scroll

**Included services and important notes**
- Featured cards with animated gradient and parallax background
- Services grid with staggered animations
- Decorative infinite marquee in the section footer

**Our space**
- Gallery with a carousel of 18 images (3 per slide on desktop)
- Full lightbox with keyboard navigation and thumbnails
- Bento-style grid of 16 features of the venue

**Additional services (Extras)**
- 3 large featured cards (Rugibot, Fiesta Flúor, Espejo Mágico)
- Grid of 8 regular extras with an animated accordion
- RugiTattoo Point with collapsible options

**Star Academy**
- Interactive hover reveal on desktop: a Framer Motion radial mask that follows the cursor and reveals the "superstar" look underneath the casual one
- "Before/after" comparison slider on mobile with drag, keyboard-operable (`role="slider"`, arrow keys, Home/End) and live `aria-valuenow`
- Idle micro-animation (breathing + orbit of the focus point) to invite interaction, with sparkles dynamically generated around the cursor
- Real hover-capability detection (`hover: hover` + `pointer: fine`) instead of a width breakpoint, so the experience doesn't break on touch tablets

**Reviews**
- Google Reviews summary (4.9/5, +192 reviews)
- Bidirectional double infinite marquee with pause on-hover
- Manual pause/resume button
- 12 real hardcoded reviews (no external widget)

**Contact**
- WhatsApp card with a magnetic effect
- Mini Instagram feed (6 local posts/reels)
- Embedded Google Maps map
- Links to Instagram and Facebook

**Navbar and global UX**
- Navbar with glassmorphism on scroll
- Mobile menu with slide animation from the right
- Smooth scroll with Lenis
- Page transition with Framer Motion
- Floating WhatsApp button appearing on scroll

---

## 🧩 Custom Components

- `TiltCard` — 3D tilt with dynamic glare based on cursor position
- `MagneticButton` — magnetic effect on the cursor with spring physics
- `AnimatedCounter` — counter with easeOutCubic easing triggered by IntersectionObserver
- `RevealText` — reveal of individual words on entering the viewport
- `InfiniteMarquee` — configurable infinite marquee with direction, speed and pause
- `FloatingShapes` — decorative particles and shapes with continuous animation
- `Parallax` — parallax wrapper with useScroll from Framer Motion; **disabled on mobile** to preserve performance
- `SmoothScroll` — global Lenis wrapper; active only on desktop
- `Hero` — conditional rendering that removes entry animations on mobile to minimize LCP
- `Instagram Feed` — fallback system that serves optimized static WebP on mobile instead of video, reducing the initial load
- `useHasHover` — hook that detects real fine-pointer hover capability (mouse/trackpad), unlike a width breakpoint that mistakes touch tablets for desktop

---

## ⚡ Performance & Asset Optimization

### Adaptive Rendering (Mobile-First)
All heavy effects (Framer Motion hooks, parallax, glassmorphism, 3D tilt) are conditionally disabled on mobile via `matchMedia`, keeping a real 60fps during scroll.

### LCP Optimization
- **Logo**: Converted from PNG (127KB) to WebP (7KB) — a 94% reduction
- `fetchpriority="high"` on the critical Hero asset
- Entry animations removed on mobile, bringing the perceptible render time down from ~2.6s to almost immediate

### GPU Bottleneck Mitigation
`backdrop-filter` disabled on mobile via a global media query, avoiding framerate drops on mid-range iOS/Android.

### Asset Pipeline
- **Images**: Processed in batch with Node.js + Sharp: from ~16MB to less than 1.5MB (~90% reduction)
- **Videos**: Processed with FFmpeg: compression, cropping and conversion to `.webp`
- **Widgets**: Instagram feed and Google reviews replaced with local content to eliminate external dependencies and CLS

---

## 📝 Development Notes

**Methodology:** Development assisted by LLMs to speed up layout in Next.js, component generation, writing animations and polishing TypeScript syntax. The product decisions that truly define the result — component architecture, mobile-first performance strategy, replacement of heavy widgets with local feeds to eliminate CLS, selection of animation libraries, design of the overall visual experience — were orchestrated and defined by me throughout the whole development cycle.

---

## 👤 Author

**Iván Gómez Dell'Osa**

- Email: [ivangomezdellosa@gmail.com](mailto:ivangomezdellosa@gmail.com)
- LinkedIn: [linkedin.com/in/ivangomezdellosa](https://www.linkedin.com/in/ivangomezdellosa/)
- GitHub: [IvanGomezDellOsa](https://github.com/IvanGomezDellOsa)
