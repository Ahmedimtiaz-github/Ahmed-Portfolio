# Muhammad Ahmed Imtiaz — Portfolio

Personal portfolio of Muhammad Ahmed Imtiaz, AI/ML Engineer. Built with [Next.js](https://nextjs.org) (App Router) and [Tailwind CSS v4](https://tailwindcss.com), deployed on [Vercel](https://vercel.com).

## Sections

Hero · About · Skills · Experience · Projects · Education & Certifications · Contact

All content lives in a single typed data file — [`src/data/profile.ts`](src/data/profile.ts) — so updating the site never requires touching components.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   ├── page.tsx          # Single-page composition of all sections
│   └── globals.css       # Tailwind v4 theme tokens (dark navy palette)
├── components/           # One component per section + shared primitives
└── data/
    └── profile.ts        # All portfolio content (typed)
public/                   # Profile photo, resume & CV PDFs
```

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Updating content

Edit `src/data/profile.ts` — projects, experience, skills, education and contact details are plain typed arrays/objects. Replace the PDFs in `public/` to update the resume/CV downloads.
