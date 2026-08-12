# Church Kit — Journey Digital starter

Reusable **Next.js (App Router) + TypeScript + Tailwind** starter for church websites delivered by [Journey Digital](https://journeydigital.ai).

## Visual direction (canonical)

From `reference/tabernacle-html/` (**navy/gold** homepage v3):

| Token | Value |
| --- | --- |
| Navy | `#14174F` |
| Gold | `#C9A84C` / `#F5D068` |
| Ivory | `#F8F5EE` |
| Fonts | Playfair Display + Inter |

Other HTML palette explorations stay reference-only.

## Sample content

**Generic / fictional** (`Grace Fellowship Church`), labeled placeholder.  
**Not Tabernacle-branded** — no client go-ahead for publishing that congregation as a case study. Client-specific address/copy from the HTML drafts remains in `reference/` only.

## Homepage IA

Mobile-first page aligned with `tbc-home-v3-navy-gold.html` notes:

1. Optional announcement banner  
2. Hero (“church for every neighbor” style) + Plan a Visit / Watch Live  
3. Service times (Sun AM · Sun PM · Wed)  
4. Latest message + recent sermons  
5. Pastor / about  
6. Ministries (“find your place”)  
7. Connect / events (≤3)  
8. Giving partner CTA  
9. Visit / contact  

Nav: Watch Online · Sermons · Connect · Ministries · About · Plan a Visit

## Content config (admin field shape)

Edit **`src/lib/church.ts`** — file-based stand-in for admin dashboard fields:

- announcement `banner`  
- `serviceTimes`  
- `latestSermon` (title, preacher, date, optional YouTube/`mediaUrl`)  
- `events` (up to 3)  
- `pastor`, contact, `social`  
- `ministries`, `give`, `visit`  

Do **not** port insecure client-side password auth from the HTML admin prototype.

## Customize for a client

```bash
cd templates/church-kit
npm install
npm run dev
```

1. Copy this folder to a new project.  
2. Update `src/lib/church.ts` with approved client copy.  
3. Adjust imagery / one-off layout in `src/app/page.tsx` if needed.  
4. Deploy the copied app as its own project (Railway is fine and matches the marketing site’s production host; Vercel is an optional alternate).

## Reference HTML

See `../../reference/tabernacle-html/README.md`. Prefer Michael’s HTML voice/structure when porting a real client after go-ahead. If stripped `.html` variants land later in that folder, keep navy/gold as the kit default.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
