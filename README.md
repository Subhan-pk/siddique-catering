# Siddique Sons Catering Services

Marketing website for Siddique Sons Catering Services — built with React, React Router, Tailwind CSS v4, and Framer Motion.

## Stack

- Vite + React 18
- React Router (client-side routing)
- Tailwind CSS v4
- Framer Motion (animations)
- React Hook Form (booking form validation)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

The site is a standard Vite app served from the root of its domain — no extra
config needed. In the Vercel dashboard: **Add New → Project → import this
GitHub repo**. Vercel auto-detects Vite (`npm run build`, output `dist`).
`vercel.json` adds the SPA rewrite so client-side routes (e.g. `/about`,
`/services/wedding-catering`) work on direct load and refresh.

## Notes

- No email or working hours are published — the business only takes phone/WhatsApp contact for now. Add them back to `src/data/site.js` (and the Footer/Contact/Book pages that reference `SITE`) if that changes.
- The booking form has no backend; on submit it opens WhatsApp with the filled-in details pre-filled and shows a confirmation with a fallback WhatsApp link.
