import Image from "next/image";
import Link from "next/link";
import churchConfig, { formatAddress } from "../../church.config";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sermons", label: "Sermons" },
  { href: "/ministries", label: "Ministries" },
  { href: "/visit", label: "Visit" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <Image
            src={churchConfig.logoPath}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 shrink-0"
            priority
          />
          <span className="truncate font-display text-lg tracking-tight text-ink md:text-xl">
            {churchConfig.shortName}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 text-sm text-muted lg:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/visit"
          className="shrink-0 rounded-md bg-accent px-3.5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Plan a visit
        </Link>
      </div>

      <nav
        aria-label="Mobile"
        className="shell flex gap-4 overflow-x-auto border-t border-line py-2.5 text-sm text-muted lg:hidden"
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap transition-colors hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <div className="shell grid gap-8 py-12 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="font-display text-2xl text-ink">{churchConfig.name}</p>
          <p className="mt-3 max-w-md text-muted">{churchConfig.tagline}</p>
          <p className="mt-4 text-sm text-muted">{formatAddress()}</p>
          <p className="mt-1 text-sm text-muted">
            <a href={`tel:${churchConfig.contact.phone}`} className="hover:text-ink">
              {churchConfig.contact.phone}
            </a>
            {" · "}
            <a
              href={`mailto:${churchConfig.contact.email}`}
              className="hover:text-ink"
            >
              {churchConfig.contact.email}
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-muted">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="shell flex flex-wrap justify-between gap-2 py-4 text-xs text-muted">
          <span>
            © {new Date().getFullYear()} {churchConfig.name}
          </span>
          <span>Built with Journey Digital church-kit</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="shell rise-in pt-12 pb-8 md:pt-16 md:pb-10">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-[16ch] text-[clamp(2.2rem,5vw,3.6rem)] text-ink">
        {title}
      </h1>
      {lead ? <p className="mt-4 max-w-2xl text-lg text-muted">{lead}</p> : null}
    </section>
  );
}
