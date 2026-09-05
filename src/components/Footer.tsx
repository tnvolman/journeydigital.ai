import Image from "next/image";
import Link from "next/link";
import { studioPages } from "@/lib/site";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/blog", label: "Journal" },
  { href: "/#contact", label: "Start a project" },
];

export function Footer() {
  return (
    <footer className="border-t border-line px-6 pt-[60px] pb-11 md:px-8">
      <div className="mx-auto max-w-[1140px]">
        <div className="flex flex-wrap items-start justify-between gap-9">
          <div>
            <div className="mb-4 flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.18em] text-cream uppercase">
              <Image
                src="/brand/journeydigital_mark.png"
                alt=""
                width={30}
                height={30}
                className="h-[30px] w-auto"
              />
              Journey Digital
            </div>
            <p className="max-w-[38ch] text-[15px] text-fog italic">
              &ldquo;Except the LORD build the house, they labour in vain that
              build it.&rdquo; — Psalm 127:1
            </p>
            <p className="mt-4 text-[14px] text-fog">
              Wilson, North Carolina · Powered by The Forge
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div className="flex flex-col gap-2.5 text-sm text-fog">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2.5 text-sm text-fog">
              {studioPages.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-line pt-6 text-[12.5px] tracking-[0.04em] text-muted">
          <span>© {new Date().getFullYear()} Journey Digital</span>
          <span>Digital presence. Kingdom purpose.</span>
        </div>
      </div>
    </footer>
  );
}
