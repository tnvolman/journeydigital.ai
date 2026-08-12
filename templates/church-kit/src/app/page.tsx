import Link from "next/link";
import churchConfig, { formatAddress } from "../../church.config";

export default function HomePage() {
  const nextService = churchConfig.serviceTimes[0];

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-[radial-gradient(900px_420px_at_80%_0%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_60%),var(--background)]">
        <div className="shell grid min-h-[72vh] items-end gap-10 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-24">
          <div className="rise-in">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              {churchConfig.name}
            </p>
            <h1 className="max-w-[14ch] text-[clamp(2.6rem,7vw,4.6rem)] text-ink">
              {churchConfig.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              {churchConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/visit"
                className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Plan your visit
              </Link>
              <Link
                href="/sermons"
                className="rounded-md border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent"
              >
                Recent sermons
              </Link>
            </div>
          </div>

          <aside className="rise-in rounded-xl border border-line bg-surface p-6 shadow-[0_18px_40px_rgba(31,42,36,0.06)] md:p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              This Sunday
            </p>
            <p className="mt-3 font-display text-2xl text-ink">
              {nextService?.label ?? "Sunday Worship"}
            </p>
            <p className="mt-2 text-muted">{nextService?.time}</p>
            {nextService?.note ? (
              <p className="mt-2 text-sm text-muted">{nextService.note}</p>
            ) : null}
            <p className="mt-5 text-sm text-muted">{formatAddress()}</p>
            <Link
              href={churchConfig.address.mapsUrl}
              className="mt-4 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </Link>
          </aside>
        </div>
      </section>

      <section className="shell py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl text-ink md:text-4xl">Welcome home</h2>
          <p className="mt-4 text-lg text-muted">
            Whether you&apos;re new to church or looking for a place to put down
            roots, you&apos;ll find clear next steps here — times, ministries, and
            ways to connect.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              href: "/about",
              title: "Our story",
              body: "Meet our pastor and learn what we believe.",
            },
            {
              href: "/ministries",
              title: "Ministries",
              body: "Kids, students, groups, and care for the city.",
            },
            {
              href: "/give",
              title: "Give",
              body: "Partner with the mission through generosity.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-line bg-surface p-6 transition hover:border-accent"
            >
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
