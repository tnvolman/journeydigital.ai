import { SiteHeader } from "@/components/SiteHeader";
import { church } from "@/lib/church";

export default function ChurchHomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="relative overflow-hidden border-b border-line bg-[radial-gradient(900px_420px_at_80%_0%,rgba(154,107,63,0.18),transparent_55%),linear-gradient(180deg,var(--cream),var(--cream-deep))]">
          <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
            <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
              Placeholder sample content
            </p>
            <h1 className="mt-4 max-w-[16ch] font-serif text-[clamp(2.4rem,6vw,3.8rem)] leading-[1.1] font-bold text-ink">
              {church.name}
            </h1>
            <p className="mt-5 max-w-[40ch] text-lg text-ink-soft">
              {church.tagline} Replace this hero copy, times, and contact details
              for each client church.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="bg-ink px-5 py-3 text-sm font-bold text-cream"
              >
                Plan your visit
              </a>
              <a
                href="#sermons"
                className="border border-line bg-white/70 px-5 py-3 text-sm font-bold text-ink"
              >
                Recent sermons
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-line bg-white">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 className="font-serif text-3xl font-bold text-ink">
              Service times
            </h2>
            <p className="mt-2 max-w-[48ch] text-ink-soft">
              Placeholder schedule — update in{" "}
              <code className="text-ink">src/lib/church.ts</code>.
            </p>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {church.serviceTimes.map((item) => (
                <li key={item.label} className="border border-line bg-cream p-5">
                  <p className="text-sm font-bold tracking-[0.08em] text-accent uppercase">
                    {item.label}
                  </p>
                  <p className="mt-2 font-serif text-2xl text-ink">{item.time}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="sermons" className="border-b border-line bg-cream">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 className="font-serif text-3xl font-bold text-ink">
              Sermon archives
            </h2>
            <p className="mt-2 max-w-[48ch] text-ink-soft">
              Placeholder archive list. Wire to YouTube, podcast feeds, or a CMS
              later.
            </p>
            <ul className="mt-8 divide-y divide-line border border-line bg-white">
              {church.sermons.map((sermon) => (
                <li key={sermon.title} className="px-5 py-4 md:flex md:justify-between md:gap-6">
                  <div>
                    <p className="font-semibold text-ink">{sermon.title}</p>
                    <p className="text-sm text-ink-soft">
                      {sermon.speaker} · {sermon.series}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-ink-soft md:mt-0">{sermon.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="ministries" className="border-b border-line bg-white">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 className="font-serif text-3xl font-bold text-ink">Ministries</h2>
            <p className="mt-2 max-w-[48ch] text-ink-soft">
              Generic ministry cards — rename, rewrite, or replace with client
              content.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {church.ministries.map((ministry) => (
                <article
                  key={ministry.name}
                  className="border border-line bg-cream p-5"
                >
                  <h3 className="font-serif text-xl font-bold text-ink">
                    {ministry.name}
                  </h3>
                  <p className="mt-2 text-ink-soft">{ministry.blurb}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="give"
          className="border-b border-line bg-[linear-gradient(135deg,var(--ink),#2a3a52)] text-cream"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-5 px-5 py-16 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold">Give online</h2>
              <p className="mt-2 max-w-[42ch] text-cream/80">
                Placeholder giving CTA. Point this button at the church&apos;s
                secure giving platform when ready.
              </p>
            </div>
            <a
              href={church.givingUrl}
              className="inline-flex bg-cream px-5 py-3 text-sm font-bold text-ink"
            >
              Give now (placeholder)
            </a>
          </div>
        </section>

        <section id="visit" className="bg-cream-deep">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 className="font-serif text-3xl font-bold text-ink">
              Visit & contact
            </h2>
            <p className="mt-2 max-w-[48ch] text-ink-soft">
              Placeholder visit info for a fictional sample church.
            </p>
            <div className="mt-8 grid gap-6 border border-line bg-white p-6 md:grid-cols-2">
              <div>
                <p className="font-semibold text-ink">{church.name}</p>
                <p className="mt-2 text-ink-soft">
                  {church.addressLine}
                  <br />
                  {church.city}, {church.state}
                </p>
                <p className="mt-4 text-ink-soft">
                  {church.phone}
                  <br />
                  {church.email}
                </p>
              </div>
              <div className="border border-dashed border-line bg-cream p-5 text-sm text-ink-soft">
                Map / directions placeholder
                <br />
                {church.mapNote}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white px-5 py-8 text-sm text-ink-soft">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-3">
          <p>
            © {new Date().getFullYear()} {church.name} (sample placeholder)
          </p>
          <p>Starter kit by Journey Digital</p>
        </div>
      </footer>
    </>
  );
}
