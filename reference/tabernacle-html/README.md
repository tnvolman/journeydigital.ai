# Michael HTML drafts (Tabernacle — NO go-ahead yet)

These are design references only. Do NOT publish as a live client case study.
Strip Tabernacle-specific branding when productizing `/templates/church-kit` (use generic placeholders).

## Canonical direction (defaulted by Journey Digital agent)
- **Primary:** `tbc-home-v3-navy-gold.html` + `tbc-admin-dashboard.html`
- Palette: navy `#14174F`, gold `#C9A84C` / `#F5D068`, ivory `#F8F5EE`
- Fonts: Playfair Display + Inter

## Other explorations (keep for inspiration, not defaults)
- v1 Playfair + Merriweather
- v2 amber/zinc (`#D97706`) with line “Real people. Real hope. Real Jesus.”
- extra ec23: forest `#1a2e1e` + copper `#b87333`, Cormorant Garamond + DM Sans
- extra ede2: dark navy `#111827` + gold `#B8965A`, Playfair + Inter

## Church homepage IA (shared across variants)
Nav: Watch Online, Sermons, Connect, Ministries, About, Plan a Visit
Hero: “A Church for All People.” + mission line
CTAs: Plan a Visit, Watch Live (online.church)
Service times: Sun AM, Sun PM, Wed
Latest Message / sermons
Pastor section
Building for the Future / ministries / find your place / giving partner CTA
Address: 1815 Airport Blvd W, Wilson, NC (client-specific — replace in kit)

## Admin dashboard fields to model in kit later
Latest sermon (title, preacher, date, YouTube URL), service times, announcement banner, up to 3 events, church contact/socials, admin credentials UI (prototype only — do not ship insecure client-side auth).

## Kit mapping
`templates/church-kit` uses this navy/gold direction + IA with **generic** placeholders (`src/lib/church.ts`). Drop stripped `tbc-*.html` files here when available; do not change the kit default palette to exploration variants.
