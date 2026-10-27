# Workplace Legal — Astro redesign

A modern, conversion-focused rebuild of [workplacelegal.ca](https://www.workplacelegal.ca), keeping the brand (logo palette, Montserrat) and all existing pages and URLs.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Structure

```
src/
  styles/tokens.css     Design tokens: primitives (--wpl-*) → semantics (--color-*, --space-*, …)
  styles/global.css     Reset, fonts, .prose for long-form
  components/
    atoms/              Button, Icon, Heading, Text, Eyebrow, Badge, Input, Logo, Container, Section
    molecules/          SectionHeader, FormField, IconCard, ServiceCard, PostCard, ProcessStep,
                        FaqItem, ContactMethod, VideoCard, CheckList
    organisms/          SiteHeader, SiteFooter, MobileCtaBar, PageHero, TrustBar, LeadForm,
                        CtaBanner, ProcessSteps, FaqList, Pagination
  layouts/BaseLayout    SEO meta, OG, LegalService JSON-LD, CTA click tracking
  data/                 site.ts (contact, nav, FAQ, process), services.ts, media.ts
  content/posts/        37 blog posts migrated from Webflow (markdown)
  lib/track.ts          dataLayer helpers (cta_click, form_start, generate_lead)
```

Components consume semantic tokens only — re-skin by editing primitives in `tokens.css`.

## Pages (legacy URL parity)

| Old | New |
| --- | --- |
| `/` `/services` `/about` `/contact` `/media` `/terms-of-use` | same |
| `/blog` (Webflow `?page=`) | `/blog`, `/blog/2` … |
| `/post/:slug` | same slugs |
| `/workin-progress` | redirects → `/podcast` |
| — | `/thank-you` (conversion page, noindex), `404` |

## Conversion features

- Persistent "Free consultation" CTA in header + phone in utility bar
- Mobile thumb-zone bar (Call / Book) on every page
- Problem-aware "When to call" section, 4-step process, FAQ (with FAQPage schema)
- Lead form with qualifying fields (service, role, urgency, language), pre-selected from `/contact?service=…`
- Inline CTA in every blog post + related posts + CTA band
- Every CTA has `data-cta` → pushes `cta_click` to `window.dataLayer`; form emits `form_start` / `generate_lead`

## TODO before launch

- Set `PUBLIC_FORM_ENDPOINT`
- Confirm office address (old footer text says Sheppard Ave; its map link pointed at 330 Bay St)
- Post publish dates (Webflow didn't expose them; `order` preserves listing order)
- Real testimonials / case outcomes if the firm can share them
- Post images are hot-linked from Webflow CDN — download before decommissioning Webflow
