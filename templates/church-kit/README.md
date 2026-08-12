# Church site delivery kit

Starter Next.js (App Router) site for Journey Digital client projects. Content and branding are driven by a single `church.config.ts` so a new church is mostly configuration + copy + images.

## Quick start

```bash
cd templates/church-kit
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Handoff steps for a new client

1. **Copy the kit** into a new project (or repo):
   ```bash
   cp -R templates/church-kit ../client-church-name
   cd ../client-church-name
   npm install
   ```
2. **Edit `church.config.ts`**: church name, address, service times, pastor, colors, logo path, ministries, sermon placeholders, give CTA URL.
3. **Replace `public/church-mark.svg`** (and add photos under `public/` as needed).
4. **Tune page copy** in `src/app/*/page.tsx` where the church needs unique story language beyond config.
5. **Connect giving** by setting `give.ctaHref` to Pushpay / Tithe.ly / Planning Center / etc.
6. **Deploy to Vercel** (Import the client project, set the production domain).
7. **Handoff**: share preview URL, edit instructions (config + content folders), and optional stewardship retainer notes.

## Pages included

| Route | Purpose |
| --- | --- |
| `/` | Home + this-Sunday callout |
| `/about` | Pastor + mission |
| `/sermons` | Placeholder list from config |
| `/ministries` | Ministry overview |
| `/visit` | Service times + directions |
| `/give` | Generosity CTA (external link) |
| `/contact` | Phone / email / address |

## Design notes

- Mobile-first, accessible landmarks, reduced-motion friendly.
- Colors come from `church.config.ts` and are injected as CSS variables in the root layout.
- Distinctive but simple — churches can own the palette without a redesign.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
