# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**AfterDerm** is a white-label, frontend-only dermatology patient education site built with Next.js 14+ and Tailwind CSS. It provides AAD-style condition guides with vetted OTC product recommendations and affiliate links, primarily distributed via QR cards handed out in clinic.

**Tech Stack:** Next.js App Router, Tailwind CSS, static export for GitHub Pages deployment

## Commands

### Development
```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build + static export to out/
npm start        # Start production server (not used for static deployment)
```

### Deployment
Push to `main` branch triggers GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages at `https://afterderm.github.io`.

## Architecture

### Static Export Configuration
- **Output:** Static HTML/CSS/JS (`output: 'export'` in `next.config.js`)
- **Images:** Unoptimized for static hosting (`images: { unoptimized: true }`)
- **Routing:** Trailing slashes enabled for GitHub Pages compatibility

### Data Model
All content lives in `lib/conditions.js` as a JavaScript array of condition objects. Each condition includes:
- Basic info: `slug`, `title`, `intro`, `routine[]`, `whenToSeeDerm`
- Products: `products[]` array with brand, name, category, amazonUrl, image path, note

**No database. No server APIs. All content is bundled at build time.**

### Page Structure
- `/` - Homepage with overview and condition links
- `/conditions/[slug]` - Dynamic condition pages (statically generated via `generateStaticParams()`)
- Future: `/q/[slug]` - QR landing pages (minimal mobile design)

### Components
- **Sidebar** (`components/Sidebar.jsx`): Navigation with active state detection via pathname
- **ProductCard** (`components/ProductCard.jsx`): Displays product info with Amazon affiliate link
- **Layout** (`app/layout.js`): Root layout with header, footer, medical disclaimer, affiliate disclosure

### Styling System (Tailwind CSS)
- **Brand color:** `#0e3a75` (used in header/logo)
- **Responsive breakpoint:** 920px (custom, not standard Tailwind `lg:`)
  - Use `max-[920px]:` prefix for mobile styles
- **Grid layout:** `grid-cols-[260px_1fr]` desktop, `grid-cols-1` mobile
- **Card design:**
  - Shadow: `shadow-[0_6px_24px_rgba(3,15,40,0.07)]` (exact original)
  - Border radius: `rounded-2xl` (16px)
  - Padding: `p-[18px]` (exact original)
- **Typography:** Clean, accessible hierarchy with proper spacing

### White-Label Architecture (Future)
The codebase is designed for multi-tenant expansion via JSON-driven configuration:
- Runtime tenant detection via `window.location.host`
- Tenant configs stored as `/tenants/<domain>/config.json` (branding, affiliate tags)
- Product catalog at `/tenants/<domain>/catalog.json`
- **Current state:** Single tenant (hardcoded "AfterDerm"), but structure supports future multi-tenancy

## Content Management

### Adding a New Condition
1. Edit `lib/conditions.js`
2. Add new condition object with required fields
3. Add product images to `public/products/` using naming pattern: `{brand}-{product-type}-{variant}.{ext}`
4. Include alt text in product objects
5. Rebuild static site: `npm run build`

### Affiliate Links
Affiliate tag managed via environment variable:
```bash
echo "NEXT_PUBLIC_AFFILIATE_TAG=yourtag-20" > .env.local
```
The tag is automatically appended to Amazon URLs via helper function (if implemented).

### Product Images
- **Location:** `public/products/` (served as static assets)
- **Benefits:** No hotlinking, consistent caching, reliable delivery
- **Format:** JPG preferred for photos

## Compliance & Editorial Standards

### Medical Disclaimers
- Present on all pages via layout footer
- Language: "Educational only. Not medical advice. Always follow your own dermatologist's guidance."

### Affiliate Disclosure
- Required wherever product links appear
- Language: "Some links are affiliate links. We may earn a small commission at no extra cost to you."

### Content Guidelines
- 5th-8th grade reading level
- Conservative, evidence-aligned wording (no drug claims beyond OTC indications)
- Always include "When to see a dermatologist" section
- Respect brand MAP policies: **no prices**, authorized retailers only

## Key Files

- **`lib/conditions.js`** - Single source of truth for all condition content and products
- **`next.config.js`** - Static export configuration
- **`tailwind.config.js`** - Tailwind configuration with custom color tokens
- **`jsconfig.json`** - Path alias `@/*` for cleaner imports
- **`.github/workflows/deploy.yml`** - Auto-deployment to GitHub Pages

## Important Constraints

- **No server-side code** - Static export only, no API routes
- **No secrets in client** - All config must be safe for public consumption
- **Exact styling preservation** - Use arbitrary values `[18px]` to match original design
- **Accessible design** - WCAG basics (contrast, keyboard nav, alt text)
- **Mobile-first** - Responsive design with custom 920px breakpoint

## Caching Strategy (Future: GCP/CDN Deployment)

When deployed to Google Cloud Storage + Cloud CDN:
- **HTML:** `Cache-Control: public, max-age=60, s-maxage=60, must-revalidate`
- **Tenant JSON:** `public, max-age=300, s-maxage=86400, stale-while-revalidate=60`
- **Static assets (images, CSS, JS):** `public, max-age=31536000, immutable`

## Development Notes

- **TypeScript:** Optional (currently using plain JavaScript)
- **ESLint/Prettier:** Not configured (add if needed)
- **Testing:** No test suite currently (consider adding for product link validation)
- **Analytics:** Not implemented (placeholder for future QR scan tracking)
