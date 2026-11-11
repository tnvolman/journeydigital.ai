# Self-hosted marketing fonts

Latin variable fonts used by `src/app/layout.tsx` via `next/font/local`.

These replace `next/font/google` so production builds do not fetch CSS from
Google Fonts at build time. Next.js 16.x Turbopack can fail with
`Can't resolve '@vercel/turbopack-next/internal/font/google/font'` and
`next/font/google queries have exactly one entry` when Google returns an
extensionless `/l/font?kit=…` URL (vercel/next.js#99114). That is what
broke the Vercel production build of commit
`72a41152ab29ee84b9c23e531b5899d83385649b` on 2026-11-10.

| File | Family | License |
| --- | --- | --- |
| `dm-sans-latin-wght-normal.woff2` | DM Sans (latin, variable weight) | SIL OFL 1.1 — see `DMSans-OFL.txt` |
| `source-serif-4-latin-wght-normal.woff2` | Source Serif 4 (latin, variable weight) | SIL OFL 1.1 — see `SourceSerif4-OFL.txt` |

Sources: Fontsource latin variable cuts of the official OFL families
(DM Sans Project Authors; Source Serif 4 Project Authors / Adobe).
