# Spring of Life Trust

A responsive nonprofit website built with Next.js App Router, TypeScript, Tailwind CSS and reusable React components.

## Run locally

```bash
npm install
npm run dev
```

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Before launch

- Replace all `[Add …]` and `[ … TO BE PROVIDED]` copy with verified SOLT information.
- Homepage photos in `public/images/` are illustrative Unsplash stock imagery, not SOLT activities. Replace them with approved, properly consented SOLT photography when available.
- Add the official 30-Day Healthy Lifestyle Eating Plan PDF URL to `healthyLifestylePlanPdfUrl` in `src/lib/content.ts` when SOLT provides it.
- Confirm the production domain and set `NEXT_PUBLIC_SITE_URL` to its origin (for example, `https://www.example.org`) to enable absolute sitemap URLs and the sitemap declaration in `robots.txt`.
- Connect and review the contact, volunteer and donation flows before making them active.
- Add approved privacy, terms and nonprofit registration information.

## Structure

- `src/app/` contains the home page and About, Our Work, Impact, Resources, Stories, Get Involved and Contact routes.
- `src/components/` contains shared navigation, footer, page shell and UI components.
- `src/lib/content.ts` contains editable navigation, focus area, story, impact and resource data.
- `src/app/globals.css` defines the color, typography, spacing and responsive design system.
