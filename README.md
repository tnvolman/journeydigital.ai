# Journey Digital

Church website studio in **Wilson, NC** — Michael McClanahan. Custom AI-built church sites from about **$2,000**.

> A website worth the welcome you give on Sunday.

This repository is the **source of truth** for [journeydigital.ai](https://journeydigital.ai): the marketing site (repo root) and the **church-kit** starter used to deliver client sites. Prefer **Vercel** for deploy (no Railway required).

**Positioning:** Believers building for the Church — honest, not agency-slick. Powered by The Forge.

## What’s in the repo

| Path | Purpose |
| --- | --- |
| `/` (Next.js 15 App Router) | Marketing site for Journey Digital |
| `templates/church-kit/` | Config-driven church site starter |
| `docs/OPERATING.md` | Intake → build → deploy → handoff playbook |

## Marketing site — local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | For production email | [Resend](https://resend.com) API key |
| `CONSULTATION_FROM_EMAIL` | Recommended | Verified sender, e.g. `Journey Digital <hello@journeydigital.ai>` |
| `CONSULTATION_TO_EMAIL` | Recommended | Inbox for leads (default `hello@journeydigital.ai`) |
| `NEXT_PUBLIC_SITE_URL` | Recommended | `https://journeydigital.ai` |

**Consultation form:** `POST /api/consultation` with `name`, `churchName`, `email`, `phone?`, `message`.

- If `RESEND_API_KEY` is set → email the lead via Resend.
- If unset (typical local/dev) → append to `data/leads.json` and return success with a `delivery: "local"` note. That file is gitignored.

Footer shows `hello@journeydigital.ai` as display contact; real delivery depends on the Resend env setup above.

### Deploy marketing site to Vercel

1. Import this GitHub repo in [Vercel](https://vercel.com).
2. Framework preset: **Next.js**. Root directory: `.` (default).
3. Add env vars from `.env.example` (at least `RESEND_API_KEY` + from/to emails for production leads).
4. Deploy. Point `journeydigital.ai` DNS to Vercel (A/CNAME per Vercel domain UI). Cloudflare proxy optional.

```bash
npm run build   # verify locally before ship
```

## Church-kit — how client sites are built

Starter lives at [`templates/church-kit/`](./templates/church-kit/). See its [README](./templates/church-kit/README.md) for handoff steps.

Short version:

1. Copy the kit into a new client project.
2. Edit `church.config.ts` (name, address, times, pastor, colors, logo, ministries, sermons, give URL).
3. Adjust page copy/images as needed.
4. Deploy that project to Vercel on the church’s domain.

Operating detail: [`docs/OPERATING.md`](./docs/OPERATING.md).

## Scripts (marketing root)

- `npm run dev` — develop
- `npm run build` — production build
- `npm run start` — serve build
- `npm run lint` — ESLint

## First client

**Tabernacle Baptist Church** (Wilson, NC) — featured on the marketing site selected-work section.

## License

Private / all rights reserved unless otherwise noted.
