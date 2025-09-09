# Business Context (README)

> **Purpose:** Keep the business context, positioning, and operating principles bundled with the codebase. This document is designed to remain useful until the business model materially changes.

## 1) One‑liner

Neutral, educational dermatology guides (modeled on AAD’s “Diseases & Conditions” structure) that pair plain‑language care overviews with a small set of **dermatologist‑trusted OTC products** and **affiliate links**. Distributed primarily via **QR cards handed out in clinic**.

## 2) Who this repo serves

* **Patients:** Clear, concise after‑visit education and vetted OTC options for common conditions.
* **Clinicians & staff:** A consistent, printable/digital follow‑up resource (QR cards + short URLs) that reduces repeated counseling.
* **Operators/maintainers:** A low‑overhead way to validate engagement (affiliate clicks) and, if desired, expand into practice‑level offerings later.

## 3) Product overview

* **Information architecture:** A directory of conditions → per‑condition pages with:

  1. What the condition is (plain language),
  2. A simple routine (cleanse / treat / moisturize / protect),
  3. “When to see a dermatologist,”
  4. 3–5 OTC product picks (initially CeraVe and La Roche‑Posay).
* **Distribution:** QR cards per condition (and short URLs) used in clinic; links may also be placed in after‑visit summaries, emails, and SMS.
* **Branding:** Neutral, not affiliated with any single practice. Professional, evidence‑informed tone without personal endorsements.

## 4) Positioning (evergreen)

* **Neutral & educational:** Not a substitute for medical care; not tied to a specific clinic.
* **Fewer, better choices:** Small, consistent product sets by condition to reduce overwhelm.
* **Trust & compliance first:** Conservative language, no drug claims, and clear disclosures.

## 5) Editorial standards (evergreen)

* 5th–8th‑grade reading level; short paragraphs, clear headings, bullet lists.
* Avoid medical claims about curing/treating diseases beyond accepted OTC indications; use conservative, evidence‑aligned wording.
* Always include **“When to see a dermatologist.”**
* Show a clear **medical disclaimer** and **FTC affiliate disclosure** where product links appear.
* Respect brand **MAP** policies: do not list prices; link to authorized retailers only.
* Images should be neutral, product‑accurate, and accessible (alt text).

### Reusable disclaimers (copy/paste)

**Medical:** “Educational only. Not medical advice. Always follow your own dermatologist’s guidance.”

**Affiliate:** “Some links are affiliate links. If you buy through them, we may earn a small commission at no extra cost to you.”

**Non‑affiliation:** “This site is independent and not affiliated the AAD, or any specific practice.”

## 6) Monetization model (stable framing)

* **Primary (validation):** Affiliate links (e.g., Amazon Associates, authorized retailers). Measures patient engagement with minimal ops overhead.
* **Optional expansions:**

  * **Practice enablement kit** (branded QR cards, staff script, analytics report) on a fixed monthly fee.
  * **White‑label microsites** per practice (content configuration + analytics) on a subscription.
  * **Practice‑branded e‑commerce** (e.g., Shopify micro‑catalog) if/when authorized supply is in place.
* Keep the site neutral regardless of which expansion path is active.

## 7) Data, privacy, and analytics (evergreen)

* No PHI is collected; analytics are aggregated and anonymous wherever possible.
* Track the minimal funnel needed to improve usefulness: **QR scan → on‑site session → outbound product click**.
* If using web analytics, prefer privacy‑respecting defaults; publish a plain‑English privacy note in the site footer.

## 8) Accessibility & inclusivity

* Target WCAG‑conscious basics: color contrast, keyboard nav, alt text, readable font sizes.
* Avoid jargon; define terms quickly when unavoidable.

## 9) Repo conventions (business‑related)

* **Affiliate tag:** Set via env var: `NEXT_PUBLIC_AFFILIATE_TAG` (auto‑appended to Amazon URLs).
* **Product images:** Stored locally under `/public/products/` for reliability.
* **Content source of truth:** `lib/conditions.js` (titles, intros, routines, product lists). Keep language neutral and evergreen.
* **Adding a condition:** Add a new object in `lib/conditions.js` with a stable `slug`, write copy to the standards above, place product images in `/public/products/`, and add alt text.
* **Link hygiene:** Use authorized retailer links; avoid deep links likely to break.

## 10) KPIs (categories only; no fixed targets)

* Patient engagement with handouts (QR scans).
* On‑site clarity (time on page, navigation to related conditions).
* Outbound interest (product click‑through).
* Qualitative feedback from clinicians and patients.

## 11) Change management

* Treat this file as business truth. If the business model or positioning changes, update this README in the same PR as the code/content changes that depend on it.
* Prefer small, well‑named commits with a brief rationale (e.g., “docs: clarify affiliate disclosure placement”).
