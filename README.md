# Zeeinx | Serialization Consulting

Corporate website for **Zeeinx**, a UK-based global serialization and compliance consulting firm serving the pharmaceutical and life sciences sector.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 13 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| UI Components | shadcn/ui (Radix UI) |
| Icons | Lucide React |
| Fonts | Inter (Google Fonts) |
| Deployment | Netlify |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Type Checking

```bash
npm run typecheck
```

---

## Folder Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with metadata and Inter font
│   ├── globals.css         # Global styles, CSS variables, custom utilities
│   ├── page.tsx            # Home page
│   └── contact/
│       └── page.tsx        # Contact page
│
├── components/
│   ├── Navbar.tsx          # Sticky navbar with scroll blur effect
│   ├── Footer.tsx          # Dark footer with navigation and contact info
│   ├── Hero.tsx            # Full-height hero section with animations
│   ├── TrustSection.tsx    # "Why Zeeinx" trust signals grid
│   ├── WhatWeDo.tsx        # Core capabilities section
│   ├── Services.tsx        # Services grid (4 cards)
│   ├── Process.tsx         # 4-step delivery process timeline
│   ├── CTASection.tsx      # Call-to-action with contact details
│   ├── ContactInfoCards.tsx # 3-card contact info row
│   ├── ContactForm.tsx     # Validated contact form (mailto — no backend)
│   └── UI/
│       ├── Button.tsx      # Primary / secondary / outline button variants
│       ├── ServiceCard.tsx # Hover-animated service card
│       ├── FormInput.tsx   # Styled input and textarea components
│       └── SectionWrapper.tsx # Consistent section spacing with fade-in
│
├── lib/
│   ├── constants.ts        # All copy, navigation, service data, contact info
│   └── utils.ts            # Tailwind class merge utility (cn)
│
├── tailwind.config.ts      # Extended Tailwind config with brand colors
├── next.config.js
├── tsconfig.json
└── netlify.toml
```

---

## Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `navy-900` | `#0B1F3A` | Primary brand, backgrounds, headings |
| `navy-950` | `#060F1D` | Footer background |
| `cyan-400` | `#0EA5E9` | Accent, CTAs, highlights |
| White | `#FFFFFF` | Secondary, card backgrounds |

### Typography

- **Font**: Inter (Google Fonts)
- **Heading weights**: 700 (Bold)
- **Body weight**: 400 (Regular), 500 (Medium)
- **Line heights**: 110–120% for headings, 150–160% for body

### Spacing

All sections use `py-20 lg:py-28` with a `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container.

---

## Pages

### Home (`/`)
- **Hero** — Full-height section with headline, subheadline, stats, and dual CTAs
- **Trust Section** — 4 icon cards explaining Zeeinx's differentiators
- **What We Do** — 3 core capability blocks with icons
- **Services** — 2×2 grid of service cards with hover animations
- **Process** — 4-step horizontal timeline (vertical on mobile)
- **CTA Section** — Dark Navy section with contact links and consultation CTA

### Contact (`/contact`)
- **Hero Banner** — Page header with dark gradient background
- **Contact Info Cards** — Phone, Email, Office Address (dark Navy cards)
- **Contact Form** — Name, Email, Message fields with validation; on submit opens the visitor’s email client with a prefilled message (`mailto:`)

---

## Deployment

This project is configured for Netlify deployment using `@netlify/plugin-nextjs`.

Push to your connected repository branch to trigger an automatic deploy.

---

## Contact

**Zeeinx Ltd**
Churchill House, 120 Bunns Ln, Mill Hill, London, UK
Phone: +44 203 097 1597
Email: info@zeeinx.com
