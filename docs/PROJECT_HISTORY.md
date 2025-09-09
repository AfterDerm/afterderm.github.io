# AfterDerm Project Development History

## Project Overview
White-label dermatology patient education site using Next.js + Tailwind CSS, deployed as static site on GitHub Pages at `https://afterderm.github.io`.

## Architecture Implemented
- **Frontend**: Next.js 14+ with App Router, static export
- **Styling**: Tailwind CSS v3.4.17
- **Deployment**: GitHub Pages via GitHub Actions
- **Structure**: Runtime tenant detection, JSON-driven configuration

## Key Development Steps Completed

### 1. Architecture Planning
- Created comprehensive `ARCHITECTURE.md` with system design
- Planned multi-tenant white-label approach
- Designed JSON-driven configuration system for scalability

### 2. Tailwind CSS Integration
- Installed Tailwind CSS v3.4.17 with PostCSS and Autoprefixer
- Migrated all custom CSS to Tailwind utility classes
- Preserved exact original styling and responsive behavior

### 3. UI Component Migration
**Layout (`app/layout.js`):**
- Container: `max-w-[1200px]` with `px-6` padding
- Header with brand color `#0e3a75` and proper spacing
- System font stack with proper styling

**Grid System:**
- 2-column layout: `grid-cols-[260px_1fr]` with `gap-5`
- Responsive: `max-[920px]:grid-cols-1` (matches original 920px breakpoint)
- Mobile reordering: main content first, sidebar second

**Cards:**
- Background: `bg-white` with `border-gray-200`
- Shadow: `shadow-[0_6px_24px_rgba(3,15,40,0.07)]` (exact original)
- Border radius: `rounded-2xl` (16px)
- Padding: `p-[18px]` (exact original)

**Components Updated:**
- `Sidebar.jsx`: Navigation with active states, proper spacing
- `ProductCard.jsx`: Flex layout, exact image heights `h-[200px]`
- All pages: Proper badge styling, typography, spacing

### 4. GitHub Pages Configuration
**`next.config.js` configured for static export:**
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
};
```

**GitHub Actions workflow (`.github/workflows/deploy.yml`):**
- Builds on push to main branch
- Uploads to GitHub Pages automatically
- Uses Node.js 18 and latest GitHub Pages actions

### 5. Build & Deployment
- ✅ Static build generates 8 pages successfully
- ✅ All condition pages pre-rendered
- ✅ Product images and assets included
- ✅ Ready for `afterderm.github.io` deployment

## Current Project Structure
```
/
├── app/
│   ├── conditions/[slug]/page.js    # Dynamic condition pages
│   ├── globals.css                  # Tailwind directives only
│   ├── layout.js                    # Root layout with header/footer
│   └── page.js                      # Homepage
├── components/
│   ├── ProductCard.jsx              # Product display cards
│   └── Sidebar.jsx                  # Navigation sidebar
├── .github/workflows/deploy.yml     # Auto-deployment
├── ARCHITECTURE.md                  # Detailed system design
├── next.config.js                   # Static export config
├── tailwind.config.js               # Tailwind configuration
└── postcss.config.js               # PostCSS with Tailwind
```

## Key Styling Details Preserved
- **Brand Color**: `#0e3a75` (exact original)
- **Responsive Breakpoint**: 920px (not standard Tailwind `lg:`)
- **Card Shadow**: Custom shadow matching original design
- **Spacing**: Exact pixel values maintained throughout
- **Typography**: Proper heading hierarchy and text colors
- **Interactive States**: Hover effects and active navigation states

## Deployment Instructions
1. Push to GitHub: `git push origin main`
2. Enable GitHub Pages in repo settings (Source: GitHub Actions)
3. Site available at: `https://afterderm.github.io`

## Technical Decisions Made
- **Tailwind v3 over v4**: Avoided v4 LightningCSS dependency issues
- **Static Export**: Full compatibility with GitHub Pages
- **Exact Pixel Values**: Used arbitrary values `[18px]` to match original design precisely
- **Custom Shadow**: Preserved exact original shadow instead of Tailwind preset
- **Responsive Strategy**: Custom breakpoint to maintain original mobile behavior

## Next Steps
- Monitor GitHub Pages deployment
- Test site functionality at live URL
- Consider adding more conditions or tenant configurations
- Implement analytics if needed

---
*Generated: $(date)*
*Project moved from: `/Users/timpile/Desktop/derm-conditions-next-local-images`*
*Current location: `/Users/timpile/Dropbox/projects/afterderm.github.io`*