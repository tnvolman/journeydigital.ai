# Journey Digital

Independent church website studio in **Wilson, North Carolina** (eastern NC beachhead). Believers building for the Church — honest pricing, no template-farm vibe.

- **Live marketing site:** https://journeydigital.ai  
- **Tagline vibe:** “A website worth the welcome you give on Sunday.”  
- **Public email:** hello@journeydigital.ai (email only — no studio phone)  
- **The Forge** is a quiet footer credit only on the public face

This repository is the source of truth for the marketing site (Next.js) plus a reusable church site starter.

## What’s in the repo

| Path | Purpose |
| --- | --- |
| `src/` | Marketing site (App Router + TypeScript + Tailwind) |
| `templates/church-kit/` | Copyable Next.js starter — **navy/gold** (`#14174F` / `#C9A84C` / ivory), Playfair + Inter, generic placeholders |
| `reference/tabernacle-html/` | Michael’s HTML drafts (canonical: navy/gold v3 + admin fields). Explorations stay here. |
| `content/blog/` | Journal posts (markdown). Add a file to publish at `/blog/<slug>` |
| `content/incoming-html/` | Drop zone for existing HTML to port into Next.js |
| `.env.example` | Consultation form / Resend env vars |

Pricing on the marketing site starts around **$2,000**. Selected work stays honestly empty — no Tabernacle, no invented case studies. Show a church when that church is ready.

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

See `.env.example`. The same variables apply in local `.env.local` and on **Railway** (production):

| Variable | Required to email | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | From Resend dashboard |
| `CONTACT_TO_EMAIL` | yes | Inbox that should receive leads (set with Michael — do not invent addresses in code) |
| `CONTACT_FROM_EMAIL` | no | Defaults to Resend test sender until a verified domain is ready |

**Mail note:** The public studio inbox is `hello@journeydigital.ai` (mailto on the site). Zoho on `journeydigital.ai` is the planned long-term mail path. Form delivery still uses Resend + `CONTACT_TO_EMAIL` — do not invent a phone number.

## Production deploy (Railway + Cloudflare)

**Current production host is Railway.** The live site is https://journeydigital.ai with DNS on Cloudflare. Keep production on Railway unless Michael explicitly asks to cut over elsewhere.

1. Connect this GitHub repo to the existing Railway project (or redeploy from the linked service).  
2. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and optionally `CONTACT_FROM_EMAIL` as Railway service variables (same names as `.env.example`).  
3. Build/start with the usual Next.js scripts (`npm run build` / `npm start`); Railway’s Node defaults are fine.  
4. Keep the custom domain on Cloudflare pointed at Railway’s target (CNAME/proxy as already configured for `journeydigital.ai`).

JSONL file persistence may not survive across ephemeral containers — submissions are still accepted and logged; configure Resend so leads land in email.

### Optional: Vercel

Vercel is an **optional alternate** deploy path, not the primary recommendation. Do not push a Vercel cutover unless Michael asks. If you use it for a preview or experiment: import the repo, set the same Resend/consultation env vars, and leave production DNS on Railway/Cloudflare.

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

Solid first incremental PR: marketing structure + consultation wiring + church kit. Client case studies wait on go-ahead — do not invent them. The Journal lives at `/blog` (markdown in `content/blog/`).
