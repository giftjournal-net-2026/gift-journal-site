# GiftJournal — Clean MVP

A lightweight Next.js editorial/affiliate foundation for giftjournal.net.

## Current architecture
- Next.js 16.3 + React 19 + TypeScript.
- Static/local editorial content first; no Payload CMS or database.
- 21 existing landing-page hero images preserved under `public/images/`.
- Data-driven landing-page template for all 21 gift guides.
- SEO metadata, canonical URLs, Open Graph images, sitemap and robots.
- Affiliate-ready shopping-note/disclosure areas without fabricated products, prices, ratings, merchants or affiliate URLs.

## Landing-page structure
Each guide now follows:
1. Breadcrumbs
2. Hero image and title
3. Intro
4. On-page navigation
5. Recipient/occasion-specific editorial sections
6. Shopping verification note
7. FAQ
8. Affiliate disclosure
9. Related gift guides

## Start
```bash
npm install
npm run dev
```

Production check:
```bash
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

## Next phase
Add verified product recommendation data and reusable product cards. Do not add affiliate links until the merchant, destination URL and commercial details have been verified.

## Step 3 — Affiliate-ready product layer

The project now includes a small, data-driven affiliate product layer:

- `data/products.ts` defines the verified-product fields used by the site.
- `components/affiliate/ProductCard.tsx` renders a compliant outbound product card.
- `components/affiliate/ProductRecommendations.tsx` renders a recommendations section only when verified products exist.
- Guide pages are wired to the product layer without inventing products, prices, ratings, availability, or affiliate URLs.

Products are intentionally empty until verified products and approved affiliate destinations are supplied. This keeps the production site trustworthy while making the later affiliate integration a data change rather than a redesign.
