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

## Notes

- No email, business address, or working hours are published — the business only takes phone/WhatsApp contact for now. Add them back to `src/data/site.js` (and the Footer/Contact/Book pages that reference `SITE`) if that changes.
- `src/pages/Contact.jsx` keeps a Google Maps placeholder for once an address is available.
- The booking form has no backend; on submit it shows a confirmation and offers a WhatsApp handoff with the filled-in details.
