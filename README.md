# Journey Digital

Church website studio in **Wilson, North Carolina**. Believers building for the Church — honest pricing, no template-farm vibe.

- **Live marketing site:** https://journeydigital.ai  
- **Tagline vibe:** “A website worth the welcome you give on Sunday.”  
- **Powered by** The Forge  

This repository is the source of truth for the marketing site (Next.js) plus a reusable church site starter.

## What’s in the repo

| Path | Purpose |
| --- | --- |
| `src/` | Marketing site (App Router + TypeScript + Tailwind) |
| `templates/church-kit/` | Copyable Next.js starter for church client sites (generic placeholders) |
| `content/incoming-html/` | Drop zone for existing HTML to port into Next.js |
| `.env.example` | Consultation form / Resend env vars |

Pricing on the marketing site starts around **$2,000**. Selected-work framing for Tabernacle Baptist Church is **preview in progress / first project underway** — not a finished case study (go-ahead pending).

## Local development

```bash
npm install
cp .env.example .env.local   # optional — form works without email env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

- `npm run dev` — Next.js dev server  
- `npm run build` — production build  
- `npm run lint` — ESLint  
- `npm start` — serve production build  

## Consultation form

The “Request a free consultation” form uses a **Next.js Server Action** (`src/app/actions/consultation.ts`).

Behavior:

1. Validates name, church, email (phone optional).
2. **Always persists** the submission (JSONL under `.data/consultations/` locally; logs if the filesystem is read-only or ephemeral).
3. If `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are set, emails via [Resend](https://resend.com).
4. If email env is missing, the visitor still gets a warm success message; server logs note that email was not configured.

### Environment variables

See `.env.example`. The same variable names apply in local `.env.local` and on whatever host serves production:

| Variable | Required to email | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | From Resend dashboard |
| `CONTACT_TO_EMAIL` | yes | Inbox that should receive leads (set with Michael — do not invent addresses in code) |
| `CONTACT_FROM_EMAIL` | no | Defaults to Resend test sender until a verified domain is ready |

**Mail note:** Zoho on `journeydigital.ai` is the planned long-term mail path. Contact address TBD with Michael. Until then, use Resend + env vars only — no hardcoded recipient addresses in source.

## Hosting status (Aug 2026 hold)

**Live today:** https://journeydigital.ai stays on the **shared Railway `web` service** (the-forge / Sanctuary piggyback), with DNS on Cloudflare. Journey Digital is **not** a dedicated Railway service for this repo — do **not** reconnect that shared `web` service to `tnvolman/journeydigital.ai`.

**Future cutover:** Vercel is the intended production host **only when Michael explicitly approves**. Do not present Vercel as current production, and do not drive a cutover while the Vercel connector OAuth is broken. When approved: import `tnvolman/journeydigital.ai` on Vercel, set the Resend/consultation env vars above, then point Cloudflare DNS for `journeydigital.ai` at Vercel.

JSONL file persistence may not survive on ephemeral filesystems — submissions are still accepted and logged; configure Resend so leads land in email.

## Church kit

```bash
cd templates/church-kit
npm install
npm run dev
```

See `templates/church-kit/README.md` for customization. Sample church name is fictional (`Grace Fellowship Church`).

## Porting existing HTML

Michael may provide HTML already built for the marketing site or a church. Drop files in `content/incoming-html/` and port into `src/` (marketing) or `templates/church-kit/` (client sites). Prefer that HTML’s voice and section structure over inventing new marketing copy when they conflict.

## Scope of this scaffold

Solid first incremental PR: marketing structure + consultation wiring + church kit. Full Tabernacle case study, proposal/SOW, and blog can follow once content and go-aheads are clear.
