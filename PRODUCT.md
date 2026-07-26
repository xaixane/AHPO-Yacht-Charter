# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are self-directed HNW (high-net-worth) individuals and families researching and booking a superyacht charter themselves — not brokers acting on their behalf. They are comparing vessels, destinations, and dates, and expect to submit an enquiry or reservation hold directly without needing an intermediary to interface with the site.

## Product Purpose

AHPO Yachts lets a prospective charter client browse a curated superyacht fleet, compare vessels and specs, check availability by destination and date, and submit a charter enquiry or reservation hold. Success is a completed, well-qualified enquiry (or booking hold) that converts into a live charter conversation with AHPO's concierge team.

## Positioning

AHPO's differentiator is a small, hand-vetted flagship fleet rather than a large aggregated marketplace — the pitch is quality and curation over breadth of selection, distinct from large brokerages/marketplaces (Burgess, Fraser, MYBA-standard listing sites) that list broad inventory.

## Operating Context

Core workflows: browsing the fleet overview, filtering/sorting by category, guests, and price; opening an individual yacht detail page with specs, deck plans, and gallery; comparing up to 3–4 yachts side by side; searching availability by destination/date/guests; completing a 3-step enquiry wizard (vessel/dates/guests → preferences → contact details); reviewing a reservation-hold financial summary (weekly rate, ~30% APA estimate, VAT notes, MYBA 48-hour hold terms); and reaching confirmation with a reference code and stated response SLA.

## Capabilities and Constraints

Current implemented routes: home, fleet listing (`/yachts`), yacht detail (`/yachts/[slug]`), compare (`/yachts/compare`), availability (`/yachts/availability`), enquiry wizard (`/enquire`), booking summary (`/booking`), thank-you (`/thank-you`), about, contact, and legal pages (privacy, terms, cookies, accessibility). SITEMAP.md additionally lists Destinations, Experiences, Charter Planning, Journal, and expanded Company sections (our-story, our-team, partners, careers) that are not yet built — treat these as a planned IA, not shipped surfaces, until confirmed otherwise.

## Brand Commitments

Brand name: VELANTIS Yachts. Stated HQ: Monaco, with secondary offices referenced in Miami and Singapore. Tone is discreet, editorial, maritime-luxury (see DESIGN.md for the full visual system: obsidian/cream/champagne-gold palette, Cormorant Garamond display serif + Plus Jakarta Sans body). Tagline: "Set sail beyond the map."

## Evidence on Hand

This is a demo/portfolio project: there is no real operating fleet, no real bookings, and no real contact channels. All vessel names, specs, prices, testimonials, office addresses, and phone numbers (e.g. the Monaco `+377 99 90 90 90` line) currently in the codebase are placeholder content built to demonstrate design and engineering craft, not verified facts. Future work must not treat this content as authoritative or extend it as if it were real business data without the user re-confirming it.

## Product Principles

1. Curation over catalog breadth — every surface should reinforce a small, deliberately chosen fleet rather than marketplace-style exhaustive listing.
2. Self-directed clarity — a self-directed HNW visitor must be able to go from browsing to a qualified enquiry without needing a broker intermediary to interpret the site for them.
3. Discretion as a feature — confidentiality/NDA framing and concierge-grade language are part of the product, not just copy decoration.
4. Placeholder content stays labeled — since this is a demo project, don't let fabricated specifics (contacts, testimonials, pricing) get treated as ground truth in later design or content decisions.
