# Self-hosted marketing fonts

Latin variable fonts used by `src/app/layout.tsx` via `next/font/local`.

These replace `next/font/google` so production builds do not fetch CSS from
Google Fonts at build time. Next.js 16.x Turbopack can fail with
`Can't resolve '@vercel/turbopack-next/internal/font/google/font'` and
`next/font/google queries have exactly one entry` when Google returns an
extensionless `/l/font?kit=…` URL (vercel/next.js#99114).

The binaries are the exact latin `wght` variable cuts `next/font/google`
emitted in the production build of `main` at
`72a41152ab29ee84b9c23e531b5899d83385649b`. That is what the live Google
CSS served for this app. The official `google/fonts` `opsz`+`wght` TTFs
(`ofl/dmsans/DMSans[opsz,wght].ttf` and
`ofl/sourceserif4/SourceSerif4[opsz,wght].ttf`) do not interpolate to the
same glyph advances, and using them shifts line breaks at 320px / 390px.

| Path | Family | Notes | License |
| --- | --- | --- | --- |
| `dmsans/DMSans-latin-wght.woff2` | DM Sans 9pt (wght 100–1000, latin) | Same bytes Google served on main | SIL OFL 1.1 — `dmsans/OFL.txt` (official `google/fonts` `ofl/dmsans/OFL.txt`) |
| `sourceserif4/SourceSerif4-latin-wght.woff2` | Source Serif 4 (wght 200–900, latin) | Same bytes Google served on main | SIL OFL 1.1 with Reserved Font Name “Source” — `sourceserif4/OFL.txt` (official Adobe license text) |
