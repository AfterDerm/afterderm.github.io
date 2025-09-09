# Prompt: Build a white-label dermatology guides site (Option A on Google Cloud) with Tailwind

You are a senior full-stack engineer. Implement a **frontend-only**, white-labelable site for dermatology patient education using **Next.js + Tailwind**, deployed as a **static site** on **Google Cloud** (GCS + Cloud CDN). This iteration is **Option A**: static app that fetches **per-tenant JSON** from a CDN at runtime. Start with a **single tenant (Hannah)** but keep the structure white-label ready.

## Goals (non-negotiable)

* **Frontend:** Next.js App Router, **static export** (`output: 'export'`), **Tailwind** for styling.
* **Hosting:** Google Cloud Storage (GCS) bucket + **Cloud CDN** via HTTPS load balancer and **Google-managed TLS**. Custom domain support.
* **Data model:** At runtime, the app reads `window.location.host` and fetches tenant JSON from the same origin path (e.g., `/tenants/<host>/config.json` and `/tenants/<host>/catalog.json`). No secrets in the client.
* **White-label:** All tenant branding, affiliate tags, enabled conditions, and product assignments come from JSON. No hardcoding per tenant.
* **Images:** Served from `/public/products/*` (local to the site) to avoid hotlinking; cache long-lived.
* **Compliance:** Clear medical & affiliate disclosures; no prices (respect MAP).
* **SEO:** Per-page meta (title/description), canonical tags per domain, sitemap & robots per tenant.

## Deliverables

1. **Codebase scaffold** (TypeScript optional; JS is fine):

   * `next.config.js` with `output: 'export'`. If using `next/image`, set `images: { unoptimized: true }`, else use plain `<img>`.
   * Tailwind setup: `tailwindcss`, `postcss`, `autoprefixer`, `tailwind.config.js`, and `globals.css` imported in `app/layout.tsx|js`.
   * Reusable components with Tailwind classes: `Sidebar`, `ProductCard`, `ConditionPageShell`, `TenantProvider`.
   * Pages:

     * `/` (Overview)
     * `/conditions/[slug]` (static shell that hydrates with tenant data)
     * `/q/[slug]` (minimal mobile landing for QR scans; links through to `/conditions/[slug]` with UTM params)
   * Runtime data loader: `loadTenantData(host)` that fetches `/tenants/${host}/config.json` and `/tenants/${host}/catalog.json`.
   * Affiliate helper `withAffiliate(url, tag)` to append `tag` if missing.
   * **Evergreen content placeholders** (copy, disclaimers), but product data and assignments come from JSON.

2. **Tenant JSON schema** (and example files for Hannah):

   * `tenants/hannah.example.com/config.json`:

     ```json
     {
       "tenant": "hannah",
       "domain": "hannah.example.com",
       "site_name": "Skin Guides",
       "logo": "/assets/logo-placeholder.svg",
       "brand": { "primary": "#1C5ADF" },
       "affiliate": { "amazon_tag": "hannah-20" },
       "disclosures": {
         "medical": "Educational only. Not medical advice.",
         "affiliate": "Some links are affiliate links. We may earn a small commission at no cost to you."
       },
       "enabled_conditions": ["acne","eczema","psoriasis","rosacea"]
     }
     ```
   * `tenants/hannah.example.com/catalog.json`:

     ```json
     {
       "conditions": {
         "acne": ["prod_cerave_sa_cleanser","prod_cerave_bp_cleanser","prod_lrp_effaclar_sa","prod_lrp_toleriane_cleanser"],
         "eczema": ["prod_cerave_creamy_oil","prod_lrp_lipikar_apm","prod_lrp_eczema_cream"],
         "psoriasis": ["prod_cerave_psoriasis_cream","prod_cerave_psoriasis_cleanser","prod_lrp_cicaplast_b5"],
         "rosacea": ["prod_lrp_toleriane_cleanser","prod_lrp_double_repair","prod_lrp_anthelios_50","prod_cerave_mineral_50"]
       },
       "products": {
         "prod_cerave_sa_cleanser": {
           "brand":"CeraVe",
           "name":"Acne Control Cleanser (2% SA)",
           "category":"Cleanser",
           "image":"/products/cerave-acne-control-cleanser.png",
           "amazon":"https://www.amazon.com/.../dp/B0C7JJG6BB"
         }
         // ...add the rest
       }
     }
     ```

3. **Tailwind design system**

   * Define color tokens for background, surface, text, muted, primary; use responsive grid for layout (sidebar + main).
   * Product card with image, name, brand, short note, and “Buy on Amazon” button.
   * Accessible headings, alt text, focus states; readable line length; mobile-first.

4. **Build & export**

   * `npm run build` → static output under `out/`.
   * Ensure client runtime fetch works from static export (no server dependencies).

5. **Google Cloud deployment (script + docs)**

   * **Create bucket** (Uniform access). Example placeholders: `PROJECT_ID`, `REGION`, `DOMAIN`.
   * **Upload** `out/**` to `gs://<bucket>`, preserving directory structure.
   * Set **Cache-Control**:

     * `index.html` & HTML: `Cache-Control: public, max-age=60, s-maxage=60, must-revalidate`
     * Tenant JSON (`config.json`, `catalog.json`): `public, max-age=300, s-maxage=86400, stale-while-revalidate=60`
     * Images (`/products/**`, CSS/JS): `public, max-age=31536000, immutable`
   * **Cloud CDN via HTTPS Load Balancer**:

     * Backend bucket → the GCS bucket; **enable Cloud CDN**.
     * URL map default → backend bucket.
     * Managed certificate for `DOMAIN`.
     * A/AAAA DNS records to the LB IP.
   * Provide **gcloud** CLI snippets for:

     * Bucket creation and public read via LB.
     * Upload & metadata setting (e.g., `gcloud storage cp`, `gcloud storage objects update --add-metadata "Cache-Control=..."`).
     * Creating load balancer + cert (high-level steps acceptable if full CLI is too long).

6. **QR support**

   * `/q/[slug]` page: minimal text, one CTA button to `/conditions/[slug]?utm_source=qr&utm_medium=card&utm_campaign=tenant`.
   * Generate sample QR (optional): provide a node script or just document the URL format.

7. **SEO basics**

   * Per page `<title>` and `<meta name="description">` derived from tenant config and condition slug.
   * `<link rel="canonical">` pointing to the current domain’s canonical path.
   * `robots.txt` and `sitemap.xml` generated **per tenant** (simple static templates that include only enabled conditions).

8. **DX & configuration**

   * `jsconfig.json` path alias `@/*`.
   * `.env.local` used only for local dev toggles; **no secrets**.
   * `NEXT_PUBLIC_DEFAULT_HOST` (optional) for local preview; at runtime prefer `window.location.host`.

9. **Acceptance criteria**

   * App loads on `https://DOMAIN/` with styles (Tailwind) and renders **tenant Hannah** using JSON from `/tenants/DOMAIN/*.json`.
   * Navigating to a condition renders product cards with local images.
   * “Buy on Amazon” links append the tenant’s affiliate tag.
   * Lighthouse: no major a11y errors; assets cached per policy above.
   * If tenant JSON is missing/unreachable, the app shows a friendly fallback and still renders the shell.

10. **Nice-to-have (if time permits)**

* Simple **skeleton loaders** while JSON fetch is in flight.
* `stale-while-revalidate` behavior explained in docs.
* Minimal 404 page themed by tenant brand.

## Implementation notes & constraints

* Keep everything **static export friendly**; avoid server APIs.
* Use **plain `<img>`** (preferred) or `next/image` with `unoptimized: true`.
* Don’t hardcode Hannah in code—only in JSON under `/tenants/<host>/`.
* Avoid CORS entirely by fetching JSON from the **same domain** (`/tenants/...` in the same bucket/CDN).
* Add evergreen disclaimers in layo
