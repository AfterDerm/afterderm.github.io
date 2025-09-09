# AfterDerm.com (Next.js minimal)

A tiny Next.js site that mirrors the AAD-style "Diseases & Conditions" layout and lists OTC products (CeraVe / La Roche‑Posay) with affiliate-ready Amazon links.

> **Not medical advice.** Not affiliated with any clinic or the AAD.

## Quick start
```bash
# 1) Install deps
npm i

# 2) (Optional) Affiliate tag
# Create .env.local with your Amazon Associates tag:
echo "NEXT_PUBLIC_AFFILIATE_TAG=yourtag-20" > .env.local

# 3) Run
npm run dev
# visit http://localhost:3000
```

## How it’s structured
- `app/` – App Router pages
  - `/` – overview
  - `/conditions/[slug]` – dynamic condition pages
- `lib/conditions.js` – all the content + product links (edit me)
- `components/` – sidebar + product cards
- `app/globals.css` – simple, clean styling

## Editing content
Open `lib/conditions.js`. Each condition has:
- `title`, `intro`, `routine[]`, `whenToSeeDerm`
- `products[]` with `{ brand, name, category, amazonUrl, image, note }`

Amazon links accept an affiliate tag automatically if you set `NEXT_PUBLIC_AFFILIATE_TAG`.

## Images
For a minimal, one‑file deploy, product images are loaded from brand sites (CeraVe / La Roche‑Posay). You can swap to your own hosted images by placing files in `public/` and pointing `image` to `/yourfile.jpg`. If you later switch to `next/image`, update `next.config.js` remote patterns and replace `<img>` with `Image`.

## Deployment
Deploy to Vercel (recommended):
- Create a new project from this folder.
- Add `NEXT_PUBLIC_AFFILIATE_TAG` in Project → Settings → Environment Variables.
- Ship it; your QR codes can point to `/conditions/acne`, etc.

## Compliance & disclaimers
- Use unambiguous educational wording and avoid drug claims.
- Respect brand MAP policies; don’t list prices directly—link out.
- Include a clear affiliate disclosure (already present on the homepage).

---

Made for quick patient handouts via QR: hand a card, send them straight to the right condition page.
