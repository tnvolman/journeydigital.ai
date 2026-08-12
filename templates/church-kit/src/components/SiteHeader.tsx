import { church } from "@/lib/church";

const links = [
  { href: "#services", label: "Services" },
  { href: "#sermons", label: "Sermons" },
  { href: "#ministries", label: "Ministries" },
  { href: "#give", label: "Give" },
  { href: "#visit", label: "Visit" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="font-serif text-lg font-bold text-ink">
          {church.name}
        </a>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-ink-soft">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
