# Church Kit — Journey Digital starter

Reusable **Next.js (App Router) + TypeScript + Tailwind** starter for church websites delivered by [Journey Digital](https://journeydigital.ai).

Copy this folder for each new client. Sample content is **generic / fictional** (`Grace Fellowship Church`) and clearly marked as placeholder — not a real congregation and not Tabernacle-branded.

## What’s included

- Mobile-first layout
- Service times
- Sermons archive placeholder
- Ministries section
- Online giving CTA
- Visit / contact placeholders

## Customize for a client

1. Copy `templates/church-kit` to a new project folder (or repo).
2. Edit **`src/lib/church.ts`** — name, times, ministries, sermons, contact, giving URL.
3. Swap colors/fonts in `src/app/globals.css` and `src/app/layout.tsx` to match the church brand.
4. Replace hero copy and imagery on `src/app/page.tsx` as needed.
5. Run locally:

```bash
cd templates/church-kit   # or your copied folder
npm install
npm run dev
```

6. Deploy the copied app as its own project (Railway is fine and matches the marketing site’s production host; Vercel is an optional alternate).

## Incoming HTML from Michael

If you have existing HTML for a church (or the marketing site), drop files under the repo’s `content/incoming-html/` and port section-by-section into this kit. Prefer the provided HTML voice and structure over inventing new copy.

Suggested mapping:

| HTML region        | Kit target                                      |
| ------------------ | ----------------------------------------------- |
| Hero / welcome     | `src/app/page.tsx` hero                         |
| Service times      | `church.serviceTimes` + `#services`             |
| Sermons            | `church.sermons` + `#sermons`                   |
| Ministries         | `church.ministries` + `#ministries`             |
| Giving             | `#give` + `church.givingUrl`                    |
| Visit / contact    | `#visit` + address/phone/email fields           |

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run lint` — ESLint

## Notes

- Keep placeholder labels until real client content is approved.
- Do not publish a congregation’s name as a finished case study without go-ahead.
