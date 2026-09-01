import { SiteHeader } from "@/components/SiteHeader";
import { church, formatAddress } from "@/lib/church";

/**
 * Homepage IA from reference/tabernacle-html (navy/gold v3):
 * hero → service times → latest message → pastor/about → ministries/connect
 * → giving partner CTA → visit.
 * Content is fictional/generic — not Tabernacle-branded.
 */
export default function ChurchHomePage() {
  const featured = church.latestSermon;
  const sundayAm = church.serviceTimes[0];

  return (
    <>
      <SiteHeader />
      <main id="top">
        {church.banner.enabled ? (
          <div className="bg-navy text-center text-sm text-ivory">
            <a
              href={church.banner.href ?? "#services"}
              className="shell block py-2.5 tracking-wide text-gold-bright transition hover:text-gold"
            >
              {church.banner.text}
            </a>
          </div>
        ) : null}

        <section className="relative overflow-hidden border-b border-line bg-[radial-gradient(900px_480px_at_85%_-10%,rgba(201,168,76,0.22),transparent_55%),linear-gradient(165deg,var(--navy)_0%,var(--navy-deep)_55%,#1a2058_100%)] text-ivory">
          <div className="shell grid gap-10 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-end md:py-24">
            <div className="rise-in">
              <p className="text-xs font-bold tracking-[0.22em] text-gold uppercase">
                Placeholder sample church
              </p>
              <h1 className="mt-4 max-w-[16ch] font-serif text-[clamp(2.5rem,7vw,4.4rem)] leading-[1.08] font-semibold text-ivory">
                {church.tagline}
              </h1>
              <p className="mt-5 max-w-[44ch] text-lg text-ivory/80">
                {church.mission}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#visit"
                  className="bg-gold px-5 py-3 text-sm font-bold text-navy transition hover:bg-gold-bright"
                >
                  Plan a Visit
                </a>
                <a
                  href={church.watchOnlineUrl}
                  className="border border-ivory/30 px-5 py-3 text-sm font-bold text-ivory transition hover:border-gold hover:text-gold-bright"
                >
                  Watch Live
                </a>
              </div>
            </div>

            <aside className="rise-in border border-ivory/15 bg-white/5 p-6 backdrop-blur-sm md:p-8">
              <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">
                This Sunday
              </p>
              <p className="mt-3 font-serif text-2xl text-ivory">
                {sundayAm?.label ?? "Sunday Morning Worship"}
              </p>
              <p className="mt-2 text-gold-bright">{sundayAm?.time}</p>
              {sundayAm?.note ? (
                <p className="mt-2 text-sm text-ivory/70">{sundayAm.note}</p>
              ) : null}
              <p className="mt-4 text-sm text-ivory/70">{formatAddress()}</p>
              <a
                href="#services"
                className="mt-5 inline-flex text-sm font-semibold text-gold underline-offset-4 hover:underline"
              >
                All service times →
              </a>
            </aside>
          </div>
        </section>

        <section id="services" className="border-b border-line bg-ivory">
          <div className="shell py-16 md:py-20">
            <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">
              Gather with us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-navy md:text-4xl">
              Service times
            </h2>
            <p className="mt-3 max-w-[48ch] text-muted">
              Sun AM · Sun PM · Wed — edit in{" "}
              <code className="text-navy">src/lib/church.ts</code>.
            </p>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {church.serviceTimes.map((item) => (
                <li
                  key={item.label}
                  className="border border-line bg-white p-5 shadow-[0_10px_30px_rgba(20,23,79,0.04)]"
                >
                  <p className="text-xs font-bold tracking-[0.12em] text-gold uppercase">
                    {item.label}
                  </p>
                  <p className="mt-2 font-serif text-2xl text-navy">{item.time}</p>
                  {item.note ? (
                    <p className="mt-2 text-sm text-muted">{item.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="sermons" className="border-b border-line bg-white">
          <div className="shell py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">
                  Latest message
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-navy md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-muted">
                  {featured.speaker}
                  {featured.passage ? ` · ${featured.passage}` : ""}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {featured.date}
                  {featured.series ? ` · ${featured.series}` : ""}
                </p>
                <a
                  href={featured.mediaUrl || church.watchOnlineUrl}
                  className="mt-6 inline-flex bg-navy px-5 py-3 text-sm font-bold text-ivory transition hover:bg-navy-deep"
                >
                  Watch / listen (placeholder)
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-navy">
                  Recent sermons
                </h3>
                <ul className="mt-4 divide-y divide-line border border-line">
                  {church.sermons.map((sermon) => (
                    <li key={sermon.title} className="px-4 py-3">
                      <p className="font-semibold text-ink">{sermon.title}</p>
                      <p className="text-sm text-muted">
                        {sermon.speaker} · {sermon.date}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-line bg-ivory">
          <div className="shell grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-20">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">
                About
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-navy md:text-4xl">
                Meet our pastor
              </h2>
              <p className="mt-4 text-lg text-ink">
                {church.pastor.name}
                <span className="text-muted"> · {church.pastor.title}</span>
              </p>
              <p className="mt-3 text-muted">{church.pastor.bio}</p>
            </div>
            <div className="border border-line bg-white p-6 md:p-8">
              <p className="font-serif text-2xl font-semibold text-navy">
                {church.name}
              </p>
              <p className="mt-3 text-muted">{church.description}</p>
              <p className="mt-5 text-sm text-muted">
                Building for the future — a people learning to worship, connect,
                and serve together. Replace this copy with the church’s story.
              </p>
            </div>
          </div>
        </section>

        <section id="ministries" className="border-b border-line bg-ivory-deep">
          <div className="shell py-16 md:py-20">
            <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">
              Find your place
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-navy md:text-4xl">
              Ministries
            </h2>
            <p className="mt-3 max-w-[48ch] text-muted">
              Generic ministry cards — rename for each client church.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {church.ministries.map((ministry) => (
                <article
                  key={ministry.name}
                  className="border border-line bg-white p-5"
                >
                  <div className="mb-3 h-1 w-10 bg-gold" aria-hidden />
                  <h3 className="font-serif text-xl font-semibold text-navy">
                    {ministry.name}
                  </h3>
                  <p className="mt-2 text-muted">{ministry.blurb}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" className="border-b border-line bg-white">
          <div className="shell py-16 md:py-20">
            <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">
              Connect
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-navy md:text-4xl">
              What’s ahead
            </h2>
            <p className="mt-3 max-w-[48ch] text-muted">
              Up to three homepage events — modeled on the admin dashboard
              fields.
            </p>
            <ul className="mt-8 grid gap-3 md:grid-cols-3">
              {church.events.slice(0, 3).map((event) => (
                <li
                  key={event.title}
                  className="border border-line bg-ivory px-5 py-4"
                >
                  <p className="text-xs font-bold tracking-[0.1em] text-gold uppercase">
                    {event.date}
                    {event.time ? ` · ${event.time}` : ""}
                  </p>
                  <p className="mt-1 font-semibold text-ink">{event.title}</p>
                  <p className="mt-1 text-sm text-muted">{event.blurb}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="give" className="border-b border-line bg-navy text-ivory">
          <div className="shell flex flex-col gap-6 py-16 md:flex-row md:items-end md:justify-between md:py-20">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">
                Giving partner
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
                {church.give.headline}
              </h2>
              <p className="mt-3 text-ivory/75">{church.give.body}</p>
            </div>
            <a
              href={church.give.ctaHref}
              className="inline-flex bg-gold px-5 py-3 text-sm font-bold text-navy transition hover:bg-gold-bright"
            >
              {church.give.ctaLabel}
            </a>
          </div>
        </section>

        <section id="visit" className="bg-ivory">
          <div className="shell py-16 md:py-20">
            <div className="grid gap-8 border border-line bg-white p-6 md:grid-cols-2 md:p-10">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">
                  Visit
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-navy">
                  {church.visit.headline}
                </h2>
                <p className="mt-3 text-muted">{church.visit.body}</p>
                <a
                  href={church.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex bg-navy px-5 py-3 text-sm font-bold text-ivory transition hover:bg-navy-deep"
                >
                  {church.visit.ctaLabel}
                </a>
              </div>
              <div className="text-muted">
                <p className="font-serif text-xl font-semibold text-navy">
                  {church.name}
                </p>
                <p className="mt-3">{formatAddress()}</p>
                <p className="mt-4">
                  {church.phone}
                  <br />
                  {church.email}
                </p>
                <p className="mt-6 border border-dashed border-line bg-ivory p-4 text-sm">
                  Map / directions placeholder — replace with embed or provider
                  link. Client street addresses from HTML drafts stay in
                  reference only until go-ahead.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-navy-deep px-5 py-8 text-sm text-ivory/65">
        <div className="shell flex flex-wrap justify-between gap-3">
          <p>
            © {new Date().getFullYear()} {church.name}{" "}
            <span className="text-ivory/40">(sample placeholder)</span>
          </p>
          <p>
            Starter kit by Journey Digital ·{" "}
            <span className="text-gold">navy / gold</span>
          </p>
        </div>
      </footer>
    </>
  );
}
