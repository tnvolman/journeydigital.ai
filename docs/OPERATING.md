# Journey Digital — how we deliver a job

Operating playbook from first conversation to handoff. Prefer **Vercel** for hosting. Do not require Railway.

## 1. Intake

1. Capture lead via the marketing site consultation form (`/api/consultation`) or direct email (`hello@journeydigital.ai`).
2. Confirm within one day. Clarify:
   - Church name / location
   - Goals (visitor clarity, sermons, give, events)
   - Timeline and who supplies photos/copy
   - Budget (custom sites from ~$2,000)
3. Schedule a listening call. Take notes on ministries, service times, tone, and must-have pages.
4. Send a simple proposal: scope, price, milestones, what the church provides.

## 2. Kickoff → kit fork/copy

1. Copy `templates/church-kit/` into a new client project/repo (do not edit the kit in place for client-specific work).
2. Rename package, set git remote, create a Vercel project pointed at the client repo.
3. Fill `church.config.ts` with known facts from intake (name, address, times, pastor, colors).
4. Drop logo into `public/` and set `logoPath`.

## 3. Content

1. Write or refine homepage welcome, about story, and ministry blurbs with the church.
2. Populate sermon placeholders (or connect a feed later).
3. Wire giving `ctaHref` to the church’s platform when credentials/links arrive.
4. Add real photography; keep pages fast (compressed images, limited hero weight).
5. Accessibility pass: headings, link labels, contrast, keyboard nav, mobile tap targets.

## 4. Deploy

1. Push to GitHub; Vercel builds on `main` (or the agreed production branch).
2. Attach the client domain (DNS at registrar / Cloudflare as needed). Journey Digital marketing site stays on `journeydigital.ai`.
3. Set any env vars the client site needs (analytics, form providers). Marketing site uses `RESEND_API_KEY` + consultation email vars — see root README.
4. Smoke-test: Home, Visit times, Contact links, Give CTA, mobile layout.

## 5. Handoff

1. Walk the church through how to request content changes (Journey stewarded) or edit config if they have a technical contact.
2. Deliver:
   - Live URL
   - Admin / giving dashboard ownership notes (church owns accounts)
   - Optional stewardship plan (small monthly for updates, sermon posts, seasonal pages)
3. Archive proposal + config snapshot for future work.
4. Ask for a testimonial once they have lived with the site.

## Roles & principles

- **Believers building for the Church** — honest scope, no agency-slick oversell.
- **Church-kit first** — customize from the starter; avoid greenfield unless the brief demands it.
- **Powered by The Forge** — AI-accelerated build, human judgment on theology-adjacent copy and pastoral tone.
- **Source of truth** — this repo owns the marketing site + kit; client repos own live church sites after copy-out.
