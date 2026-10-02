# SmileNation React rebuild plan

## Outcome
Replace the legacy multi-page static site with a polished React single-page experience that preserves SmileNation’s supplied identity, content, contact details, social links, donation information, volunteer path, logo, and photography while improving hierarchy, accessibility, responsive behavior, and supporter conversion.

## Architecture
- Vite + React + TypeScript for a lightweight static frontend.
- Single route `/` with hash sections for About, Programs, Impact, and Contact; `/donate` is a dedicated client-side route with a focused giving/volunteer layout.
- `src/App.tsx` owns route-aware composition and accessible mobile navigation.
- `src/components/` contains reusable Header, Footer, SectionHeading, ProgramCard, and Button primitives.
- `src/data/content.ts` contains preserved organization copy, program descriptions, contact details, and external supporter links.
- `src/styles.css` contains the responsive design system and reduced-motion states.
- `public/images/` contains copied legacy photography and logo assets.
- `public/manus-routes.json` declares `/` and `/donate`.

## Serving and deployment
This is a public, content-first site with no user accounts, database, or server API. Use static build output: `pnpm build` writes `dist/`, and publication serves static assets with long-lived caching for hashed bundles while HTML remains revalidated. Client-side `/donate` navigation uses SPA fallback. The preview runs on port 3000.

## SEO
Provide meaningful content in the initial React document, descriptive title/description, Open Graph/Twitter metadata, and canonical tags only when a real public origin is configured. Add `public/robots.txt` and `public/sitemap.xml` for `/` and `/donate`, plus the required route manifest.

## Verification
Use TypeScript/Vite build checks, inspect the served route manifest over HTTP, and request `/` and `/donate` to confirm successful static serving and route fallback. Review source for semantic landmarks, keyboard-visible focus, external-link safety, and reduced-motion handling.
