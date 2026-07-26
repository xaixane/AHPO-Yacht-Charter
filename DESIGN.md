# AHPO Yachts — Design System (`DESIGN.md`)

> **Brand Identity:** Restrained editorial luxury — curation over aggregation, discretion over spectacle.
> **Design Philosophy:** Monochrome ink-on-paper composition, generous whitespace, hairline dividers, bold grotesk headlines paired with a quiet serif for secondary voice. No color accent, no glassmorphism, no dark sections.

---

## 1. Design Token Architecture

All tokens are defined in [`app/globals.css`](file:///home/xaixane/yacht_charter/app/globals.css) and configured with Tailwind CSS v4.

### 1.1 Color Tokens

| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| `--color-ink` | `#0F0F0E` | Primary text, headline color, filled button backgrounds |
| `--color-ink-muted` | `#6B6B65` | Secondary/body copy, labels, muted metadata |
| `--color-paper` | `#FFFFFF` | Primary page background |
| `--color-paper-warm` | `#F7F6F3` | Alternating section background (Destinations, image placeholders, Contact page) |
| `--color-hairline` | `#E4E2DC` | All borders and dividers — the only structural line weight in the system |

Color strategy: **Restrained** — no saturated accent color anywhere. Every emphasis is done through weight, scale, or a filled ink button, never through hue.

### 1.2 Typography System

* **Sans (`var(--font-sans)`)**: `'Helvetica Neue', Helvetica, Arial, system-ui, sans-serif` — a pinned system font stack, no web-font download.
  - Carries every role except the rare serif accent below: page H1s, nav, buttons, vessel names, eyebrow labels, uppercase tracked micro-copy, and body text.
  - Hierarchy is built entirely from weight, size, tracking, and case (never a second sans family): H1 is 700 weight, tight-tracked, uppercase, `text-4xl`–`text-8xl` leading ~0.95 depending on page role; nav/buttons/labels are 500–600 weight, uppercase, wide-tracked, small; body copy is 400 weight, sentence case.
* **Serif (`var(--font-serif)`)**: `Georgia, 'Times New Roman', serif` — also a system stack, used rarely and only for secondary voice.
  - Usage strictly secondary/inline, never the page's primary H1: section sub-headings ("Yachts defined by design and crafted for freedom.", "Timeless places. Tailored experiences.", "Stories from the sea."), wizard step titles ("Charter Parameters"), About pillar titles ("Uncompromised Discretion"), h2/h3 subsection titles on the yacht detail page, and stat/price numerals.
* No monospace or tracked-mono "technical" affectation anywhere in the system. No web-font loading at all — both families resolve from the system stack, so there's no FOUT/FOIT risk.

### 1.3 Structural Language

* **Borders, not shadows.** Every card, image frame, input, and button uses a 1px `--color-hairline` border. No `box-shadow`, no blur, no glass panels.
* **Rectangles, not pills.** Buttons and tabs are square-cornered (0–2px radius) borders with an arrow; filled state is solid ink with white text, inverting on hover.
* **Numbered indices** ("01", "02") in small gray type mark sequence (fleet spotlight rows, destination features, experience cards).

---

## 2. Component Composition Patterns

### 2.1 Navigation Bar (`Navbar.tsx`)
* Fixed white bar, transparent until scroll then a hairline bottom border appears.
* Wordmark "AHPO" (bold tracked caps) + "Yachts & Charters" subtitle divided by a hairline.
* Nav links plain uppercase tracked text; active state is an underline, not a color change.
* Right action: bordered "ENQUIRE →" rectangle, fills ink on hover.

### 2.2 Footer (`Footer.tsx`)
* Simple 3-group layout: Brand (+ address/phone/email), The Fleet, Company & Contact — deliberately not the richer Destinations/social variant, since those routes aren't built yet.
* White background, hairline top border, hairline-divided legal bar.

### 2.3 Page Header (`PageHeader.tsx`)
* One light style (the old obsidian/cream theme toggle is gone): breadcrumb, small gray eyebrow, bold grotesk H1, muted description.
* Enquire and About pages use a bespoke split hero (headline left, full-bleed image right) instead of this generic banner, matching their mockups.

### 2.4 Global CTA Banner (`GlobalCTABanner.tsx`)
* Full-width band, hairline top border, "Bespoke Concierge" eyebrow, bold headline, filled-ink primary button + bordered secondary button pair.

### 2.5 Yacht Card (`YachtCard.tsx`)
* Bare image (no card shell/shadow) + caption block below: category label, name, builder/year/location, specs row. Entire card is a single link.

---

## 3. Page-by-Page Layout

### 3.1 Homepage (`/`)
Hero (split: headline+CTA left, image right) → Fleet Spotlight (intro column + two alternating image/text rows for Azure One and Luna Sea) → Destinations (single static Mediterranean feature, 3-column: intro / photo / detail) → Experiences (3-column, bare image + caption) → Journal (intro column + one feature article + one secondary article) → Footer.

Dropped from the prior build (confirmed with user, matches mockup exactly): search/availability bar, company-stats bar, testimonials section.

### 3.2 Fleet Overview (`/yachts`)
Breadcrumb + PageHeader → underline category tabs + search input + filter/sort row → 3-column bare-image `YachtCard` grid → hairline-divided 4-stat bar (100% MYBA Certified / 90M Flagship Tonnage / 24/7 Onboard Crew / 15+ Charter Ports) → GlobalCTABanner.

### 3.3 Enquire (`/enquire`)
Bespoke split section: breadcrumb + eyebrow + headline + copy on the left, full-bleed yacht image on the right (absolute-positioned, `hidden md:block`). White bordered wizard card sits below/over the split, with underline step tabs (01/02/03), serif step titles, bordered inputs, filled-ink submit button. GlobalCTABanner ("Prefer Direct Phone Consultation?") below.

### 3.4 About (`/about`)
Same split-hero pattern as Enquire. "The AHPO Legacy" intro block, then `CompanyPillars` as a 2×2 grid with circular line-icon, serif pillar titles, hairline cross-dividers (no card backgrounds). GlobalCTABanner.

### 3.5 Contact (`/contact`)
Warm-paper background (`#F7F6F3`). PageHeader → `GlobalOfficesGrid` (bare image + text, "HEADQUARTERS" badge on Monaco) → `ConciergeContactForm` (underline-style inputs, two-column) → GlobalCTABanner ("Urgent Charter Request?").

### 3.6 Pages without a mockup
Yacht detail (`/yachts/[slug]`), Compare, Availability, Booking, Thank-you, and the legal pages (privacy/terms/cookies/accessibility) keep their existing structure and copy. They received a mechanical token restyle only: dark obsidian/gold/glass classes replaced with the light palette and bordered-rectangle component language above — no new layout invention.

---

## 4. Image Assets

All 8 fleet vessels now carry real, distinct yacht photography sourced from the client's own `assets/` folder (copied into `public/` as `yacht-1.webp`…`yacht-4.webp`, `moonrise.webp`, `riviera-dusk.webp`), resolving the earlier stock-photo mismatches (Ocean Pearl/Tokyo street, Solaris V & Monaco Star/Cinque Terre, Aegean Crest/Pacific lagoon, Arctic Voyager/scuba diver, Caribbean Breeze/beach). Each vessel's `image` and single-item `gallery` now point to the same real photo — galleries were simplified to one photo per vessel rather than padding them with other yachts' images. The four `background-*.jpg` aerial coastal photos replace stock imagery in the homepage Destinations feature and the three Contact office cards. About and Enquire's bleeding side images were diversified (`section-2.png`, `section-3.png`) instead of both reusing the Hero photo.

**Known Gaps (not introduced by this redesign, no client asset available yet):**
* Homepage "Culinary Journeys" experience card image is a coffee-shop interior, not a plated dish — no food photography was supplied to fix this.
* `/thank-you`'s secondary CTA was repointed from a dead `/destinations` link to `/contact` (that route doesn't exist yet per `PRODUCT.md`), a small in-scope fix made while touching that file.

---

## 5. Accessibility & Responsiveness

* Ink-on-white and ink-on-warm-paper both exceed WCAG AA contrast at body-text scale.
* Breakpoints: single-column mobile (`<768px`, filter/roster elements collapse or scroll), 2-column tablet, full multi-column desktop (`1440px+`).
* Focus/hover states rely on border-color and fill inversion, not color-only cues.
