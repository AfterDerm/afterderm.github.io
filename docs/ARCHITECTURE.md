# Architectural Plan: White-Label Dermatology Guides Site

## Overview

This document outlines the architecture for a white-label, frontend-only dermatology patient education site using Next.js + Tailwind, deployed as a static site on Google Cloud Platform.

## System Architecture

### High-Level Design

```
┌─────────────────────────────────────────────────────────────────┐
│                     Google Cloud CDN                            │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │   Static HTML   │  │  Tenant JSON    │  │ Product Images  │ │
│  │   CSS/JS        │  │   Config        │  │    Assets       │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Client Browser                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │              Next.js Static App                             ││
│  │  • Runtime tenant detection (window.location.host)         ││
│  │  • Dynamic JSON loading from CDN                           ││
│  │  • White-label UI rendering                                ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

## Core Components

### 1. Frontend Application (Next.js)

**Framework:** Next.js 14+ with App Router
**Styling:** Tailwind CSS
**Output:** Static export (`output: 'export'`)

#### Key Pages
- `/` - Overview/homepage
- `/conditions/[slug]` - Individual condition pages
- `/q/[slug]` - QR landing pages (mobile-optimized)

#### Core Components
- `TenantProvider` - Context for tenant configuration
- `ConditionPageShell` - Reusable page layout
- `ProductCard` - Product display component
- `Sidebar` - Navigation component

### 2. Data Architecture

#### Tenant Configuration Structure
```
/tenants/<domain>/
  ├── config.json     (branding, settings, enabled conditions)
  └── catalog.json    (products, condition mappings)
```

#### Runtime Data Flow
1. Client detects domain via `window.location.host`
2. Fetches `/tenants/${host}/config.json` and `/tenants/${host}/catalog.json`
3. Renders UI with tenant-specific branding and products
4. Handles fallback gracefully if JSON unavailable

### 3. Content Management

#### Static Content (Evergreen)
- Medical disclaimers
- Educational content structure
- UI components and layouts

#### Dynamic Content (Per-Tenant)
- Product selections per condition
- Branding (colors, logo, site name)
- Affiliate tags
- Enabled conditions

### 4. Product & Image Management

**Storage:** Local images under `/public/products/`
**Benefits:** 
- No hotlinking issues
- Consistent caching
- Reliable delivery

**Naming Convention:** `{brand}-{product-type}-{variant}.{ext}`

### 5. SEO & Performance

#### Per-Page SEO
- Dynamic `<title>` and `<meta description>`
- Canonical tags per domain
- Tenant-specific sitemaps and robots.txt

#### Caching Strategy
- **HTML:** Short cache (60s) with revalidation
- **Tenant JSON:** Medium cache (5min origin, 24h CDN) with stale-while-revalidate
- **Static Assets:** Long cache (1 year) with immutable flag

## Infrastructure (Google Cloud)

### Components

1. **Google Cloud Storage Bucket**
   - Hosts static site files
   - Uniform bucket-level access
   - Public read via load balancer

2. **Cloud CDN + HTTPS Load Balancer**
   - Global content distribution
   - Google-managed TLS certificates
   - Custom domain support

3. **DNS Configuration**
   - A/AAAA records pointing to LB IP
   - Support for multiple tenant domains

### Deployment Pipeline

```
Development → Build (npm run build) → Static Export (out/) → 
GCS Upload → Cache Headers → CDN Invalidation
```

## White-Label Implementation

### Multi-Tenancy Strategy
- **No hardcoded tenant data in code**
- **Runtime tenant detection**
- **JSON-driven configuration**
- **Shared codebase, tenant-specific data**

### Tenant Onboarding Process
1. Create tenant directory: `/tenants/<domain>/`
2. Configure `config.json` with branding and settings
3. Configure `catalog.json` with product mappings
4. Add DNS records for custom domain
5. Deploy updated static files

## Compliance & Legal

### Built-in Safeguards
- Medical disclaimer on all pages
- Affiliate link disclosure
- No price display (MAP compliance)
- Conservative, educational language
- Clear "when to see a dermatologist" guidance

### Privacy & Analytics
- No PHI collection
- Anonymous, aggregated analytics
- Privacy-respecting defaults
- Minimal tracking (QR scan → session → product click)

## Development Workflow

### Local Development
```bash
npm run dev          # Development server
npm run build        # Production build
npm run export       # Static export to out/
```

### Configuration Management
- `jsconfig.json` with path aliases (@/*)
- `.env.local` for dev toggles only (no secrets)
- `NEXT_PUBLIC_DEFAULT_HOST` for local tenant preview

### Quality Assurance
- TypeScript support (optional)
- Accessible design (WCAG basics)
- Mobile-first responsive design
- Lighthouse performance optimization

## Scalability Considerations

### Horizontal Scaling
- **Tenant Addition:** Add new JSON files, no code changes
- **Geographic Expansion:** CDN handles global distribution
- **Traffic Spikes:** Static sites auto-scale via CDN

### Vertical Scaling
- **Content Expansion:** Add conditions via JSON configuration
- **Feature Addition:** Modify shared components, all tenants benefit
- **Product Catalog Growth:** JSON-based, no schema migrations needed

## Security Model

### Attack Surface Minimization
- **No server-side code** (static export)
- **No secrets in client**
- **No database** (JSON configuration)
- **HTTPS-only** (enforced via load balancer)

### Data Protection
- **No sensitive data collection**
- **Affiliate tags in configuration, not hardcoded**
- **Medical disclaimers prevent liability**

## Future Extensibility

### Planned Extensions (Business Model)
- Practice enablement kits
- White-label microsites
- Practice-branded e-commerce integration

### Technical Extensibility
- **API Integration Points:** Easy to add backend services later
- **Analytics Enhancement:** Event tracking can be extended
- **Content Management:** Could migrate to headless CMS while keeping JSON structure
- **Internationalization:** Tenant JSON structure supports multiple languages

## Success Metrics

### Technical KPIs
- **Page Load Speed:** <2s initial load, <500ms navigation
- **Availability:** >99.9% uptime via CDN
- **Cache Hit Rate:** >90% for static assets

### Business KPIs (as defined in README_BUSINESS.md)
- QR scan engagement rates
- Time on page / session quality
- Product click-through rates
- Qualitative feedback from clinicians

## Risk Mitigation

### Technical Risks
- **CDN Outages:** Multi-region deployment
- **JSON Loading Failures:** Graceful fallback UI
- **Domain Management:** Clear DNS documentation

### Business Risks
- **Affiliate Link Breaks:** Regular link validation
- **MAP Policy Changes:** No price display policy
- **Medical Compliance:** Conservative content strategy

## Implementation Phases

### Phase 1: Core MVP
- Next.js static site with Tailwind
- Single tenant (Hannah) JSON configuration
- Basic condition pages with product cards
- GCP deployment with CDN

### Phase 2: Multi-Tenant
- Runtime tenant detection
- Multiple tenant configurations
- QR code landing pages
- SEO optimization

### Phase 3: Enhancement
- Analytics integration
- Performance optimization
- Advanced caching strategies
- Monitoring and alerting

This architecture provides a solid foundation for a scalable, compliant, and maintainable white-label dermatology education platform that aligns with both technical requirements and business objectives.