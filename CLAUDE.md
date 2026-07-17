# Apex Plumbing Co. — Demo Website

## Project Purpose
This is a demo website for a fictional US plumbing business. It will be used as a portfolio piece and proof of work during cold outreach to real plumbing businesses without websites. It must look like a real, live business website — not a template.

---

## Business Details (Fictional)
- **Name:** Apex Plumbing Co.
- **Location:** Austin, TX
- **Phone:** (512) 555-0192
- **Email:** info@apexplumbingco.com (cosmetic only)
- **Tagline:** Fast, Reliable Plumbing — Available 24/7
- **Established:** 2009

---

## Tech Stack
- React + Vite + TypeScript
- Tailwind CSS (utility-first, no component libraries)
- Single-page application — all sections on one page with anchor links
- No backend, no CMS, no database
- Contact form via **Formspree** (use a placeholder action URL: `https://formspree.io/f/demo`)
- Deploy target: Cloudflare Pages

---

## Design System

### Colors
```
Navy (primary bg):     #0f2137
Navy light (cards):    #162840
Orange (accent):       #f97316
Orange hover:          #ea6c0a
White:                 #ffffff
Gray text:             #94a3b8
Light bg (sections):   #f8fafc
```

### Typography
- **Headings:** `DM Sans` (700 weight) — import from Google Fonts
- **Body:** `Inter` (400, 500 weight) — import from Google Fonts
- Type scale: follow Tailwind defaults (text-sm, text-base, text-lg, text-xl, text-2xl, text-4xl, text-5xl)

### Feel
- Masculine, trustworthy, professional trades
- Clean and fast — no heavy animations
- Subtle hover transitions (150ms) only
- Mobile-first — most users search for plumbers on mobile

---

## Page Sections (in order)

### 1. Navbar
- Left: Logo icon (wrench SVG) + "Apex Plumbing Co." text in white
- Right (desktop): anchor nav links — Services, Why Us, Reviews, Contact
- Right: CTA button "Call Now" in orange → `tel:+15125550192`
- Mobile: hamburger menu with drawer
- Sticky on scroll, navy background

### 2. Hero
- Full-width, dark navy background
- Badge above headline: "⭐ Austin's #1 Rated Plumber"
- Headline: "Your Plumbing Emergency Ends Here"
- Subtext: "Licensed & insured plumbers serving Austin, TX. Same-day service, upfront pricing, no surprises."
- Two CTA buttons:
  - Primary (orange): "Call (512) 555-0192" → `tel:+15125550192`
  - Secondary (outlined white): "Get Free Quote" → scroll to contact
- Trust bar below buttons: 3 stats inline — "500+ Jobs Completed", "15+ Years Experience", "4.9★ Average Rating"
- Background: dark navy with subtle diagonal texture or grid pattern (CSS only, no images)

### 3. Services
- Section heading: "What We Fix"
- Light gray background (`#f8fafc`)
- 6 service cards in 2x3 grid (mobile: 1 col, tablet: 2 col, desktop: 3 col)
- Each card: icon (SVG), title, one-line description
- Services:
  1. **Drain Cleaning** — Clogged drains cleared fast, same day
  2. **Water Heater Repair** — All brands, repair or full replacement
  3. **Leak Detection & Repair** — Find and fix leaks before they cost more
  4. **Emergency Plumbing** — 24/7 rapid response across Austin
  5. **Pipe Installation** — New installs and full repipes done right
  6. **Bathroom Remodeling** — Fixture upgrades and full remodels

### 4. Why Choose Us
- Navy dark background
- Heading: "Why Austin Homeowners Trust Apex"
- 4 trust points in 2x2 grid (mobile: 1 col):
  1. **Licensed & Fully Insured** — Work done to code, every time
  2. **Same-Day Service** — We show up when you need us, not next week
  3. **Upfront Pricing** — You get the full quote before we start
  4. **15+ Years in Austin** — Local experts who know Austin homes

### 5. Testimonials
- Light background
- Heading: "What Our Customers Say"
- 3 review cards side by side (mobile: stacked)
- Each card: star rating (5 stars), quote text, customer name, neighborhood
- Reviews:
  1. "Called at 7am for a burst pipe — they were here by 9am. Absolute lifesavers. Will never use another plumber." — **James R.**, South Austin
  2. "Honest pricing, no upselling, clean work. Fixed our water heater in under 2 hours. Highly recommend." — **Maria T.**, Round Rock
  3. "Been using Apex for 3 years now. They're the only plumbers I trust to give me straight answers." — **David K.**, Cedar Park

### 6. Contact / CTA
- Navy background
- Two-column layout (mobile: stacked)
- Left column:
  - Heading: "Get Your Free Quote"
  - Subtext: "Fill out the form or call us directly. We respond within the hour."
  - Phone number large: (512) 555-0192 with phone icon
  - Hours: Mon–Sat 7am–8pm | Emergency: 24/7
- Right column: Contact form
  - Fields: Full Name, Phone Number, Message (textarea)
  - Submit button (orange): "Send Message"
  - Form action: `https://formspree.io/f/demo` (method POST)
  - On submit: show inline success message "Thanks! We'll call you within the hour."

### 7. Footer
- Simple, dark navy
- Left: Logo + name + "© 2025 Apex Plumbing Co. All rights reserved."
- Right: Phone number + "Licensed & Insured | Austin, TX"
- No social media links needed

---

## Mobile Requirements
- All text readable without zooming
- CTA buttons minimum 44px height
- Phone number always clickable (tel: link)
- Hamburger nav works smoothly
- Cards stack to single column on mobile
- Hero headline max 2 lines on mobile

---

## Performance Requirements
- No image files — use CSS backgrounds, SVG icons, and CSS patterns only
- Icons: use inline SVG or Heroicons (import from `@heroicons/react`)
- Fonts loaded via Google Fonts `<link>` in index.html
- Lighthouse mobile score target: 90+

---

## File Structure
```
apex-plumbing/
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── WhyUs.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.ts
```

---

## Global Skills Available
The following Claude Code skills are available globally and must be used where relevant:

**Code Quality**
- `ponytail:ponytail` — core plugin, apply throughout to avoid overengineering and unnecessary code
- `ponytail:ponytail-review` — review code for bloat and redundancy after each component is built
- `ponytail:ponytail-audit` — audit the full codebase before final delivery
- `ponytail:ponytail-debt` — flag any technical debt introduced during build
- `ponytail:ponytail-gain` — identify gains from simplification

**UI & Design**
- `ui-ux-pro-max` — apply for UI quality, polish, and interaction detail
- `design-taste-frontend` — apply for visual design decisions and aesthetic choices

**Utilities**
- `cavecrew` — use for multi-agent task coordination if needed
- `caveman` — core workflow skill
- `caveman-review` — review work before marking a task done
- `context7-mcp` — look up library docs when unsure about API or usage

---

## Execution Notes
- Build components one at a time, starting from Navbar → Hero → Services → WhyUs → Testimonials → Contact → Footer
- Each component must be complete and responsive before moving to the next
- Use Tailwind utility classes only — no custom CSS unless strictly necessary
- All colors must come from the design system above — no Tailwind default colors
- Tailwind config must extend the theme with the custom color tokens
- Do not use any UI component library (no shadcn, no MUI, no Chakra)
- Keep the code clean and typed — no `any` types in TypeScript
- After each component, run `ponytail:ponytail-review` to catch bloat before moving on
- Before final delivery, run `ponytail:ponytail-audit` on the full codebase
- If a simpler solution exists, always prefer it — do not over-engineer