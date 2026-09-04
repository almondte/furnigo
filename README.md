# FurniGo MVP

Responsive Next.js + TypeScript prototype for FurniGo, a rental service for furniture and household electronics for students living in kos/apartments.

## What was built

- Landing page with Indonesian customer-facing copy, value proposition, trust cues, featured categories, and responsive navigation.
- Catalogue with search, category filters, availability labels, and price sorting.
- Product detail with specs, gallery treatment, rental duration selector, deposit summary, and Jakarta Barat delivery messaging.
- Booking request flow with form validation, customer/address fields, delivery date, deposit summary, and confirmation state.
- Demo customer dashboard with active rentals, status labels, returns, deposit summary, and issue-report CTA.
- Issue-report form with category selector, description, photo-upload placeholder, 24-hour review promise, and submitted state.
- Production / operations flow covering procurement, quality inspection, warehouse, preparation, delivery, maintenance, pickup inspection, and re-rental/repair/disposal.
- Demo admin / inventory dashboard with utilization, mock inventory status, maintenance state, and recent bookings.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

To check the production build:

```bash
npm run build
```

## Deploy to Vercel

Import this repository into Vercel or run `npx vercel` from the project directory. The default Next.js build settings work without additional configuration.

## Environment variables

None are required for the demo. Product data and state are local to the browser session.

## Mocked vs production-ready

The UI and main interaction flows are working, but authentication, persistent database storage, live inventory, payments, WhatsApp messaging, delivery tracking, and image upload are intentionally mocked. The booking CTA includes a WhatsApp-style handoff placeholder using a demo number; replace it before launch.

The prices use the proposal assumptions: an indicative weighted monthly basket of Rp199.000 and a first rental-cycle assumption of Rp169.150 after a 15% discount. Individual product prices and inventory are realistic prototype data, not live commercial pricing.

## Recommended next steps

1. Add Supabase tables for products, units, rentals, deposits, issue reports, and audit events.
2. Add Supabase Auth or WhatsApp OTP for customer and operator roles.
3. Connect a payment provider with deposit authorization/refund handling.
4. Replace the placeholder WhatsApp handoff with a verified WhatsApp Business integration.
5. Add delivery slot management, courier assignment, and status webhooks.
6. Move product media to Supabase Storage or a CDN and add signed upload URLs.
7. Add automated condition-inspection checklists and a role-based admin console.
