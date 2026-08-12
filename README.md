# Maa Baglamukhi Havan Service — Remix

A React + Vite + Tailwind web app for booking Baglamukhi Havan, Anushthan, and related spiritual services. This is a remix of the original project, so inherited branding, contact details, and analytics should be reviewed before publishing.

## What this project includes

- **Landing page** with hero video, service highlights, and call-to-action
- **Havan & Anushthan pages** with service details and SEO content
- **Booking form** that saves inquiries to the backend and opens WhatsApp
- **Blog** with spiritual/educational posts
- **Admin dashboard** (hidden at `/admin-login`) for managing bookings
- **Floating WhatsApp + Instagram buttons** and bottom navigation
- **SEO schemas** (LocalBusiness, Service, FAQ, Breadcrumb) in `index.html`

## Inherited assets to customize after remix

Review these before going live:

- [ ] `index.html` — title, description, canonical URL, Google Analytics ID (`G-KWFEQ20SER`), JSON-LD business details
- [ ] `src/assets/logo-baglamukhi.webp` — replace with your own logo
- [ ] `src/components/Navbar.tsx` — brand name and phone number
- [ ] `src/lib/contact.ts` — WhatsApp number, phone, email, Instagram URL
- [ ] `src/components/WhatsAppButton.tsx` — WhatsApp / Instagram links
- [ ] `src/integrations/supabase/client.ts` — auto-generated; do not edit directly
- [ ] `src/data/havans.ts` and `src/data/anushthans.ts` — service names, prices, descriptions
- [ ] `src/content/blog/*` — posts copied from the original
- [ ] Admin credentials in `src/pages/AdminLoginPage.tsx` — change if you keep the admin panel

## Tech stack

- React 18, TypeScript 5, Vite 5, Tailwind CSS v3
- shadcn/ui components
- TanStack Query
- Lovable Cloud (Supabase backend) for auth, database, and storage

## Run locally

```bash
bun install
bun run dev
```

## Deploy

Use the **Publish** button in Lovable. Frontend changes require clicking **Update** in the publish dialog; backend changes deploy automatically.
