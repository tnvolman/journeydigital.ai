import Image from "next/image";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Start a project" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line pt-14 pb-11">
      <div className="wrap">
        <div className="flex flex-wrap items-start justify-between gap-9">
          <div>
            <div className="mb-4 flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.18em] text-ink uppercase">
              <Image
                src="/journeydigital_mark.png"
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
            <p className="mt-4 text-[14.5px] text-fog">
              Wilson, NC ·{" "}
              <a
                href="mailto:hello@journeydigital.ai"
                className="text-silver transition-colors hover:text-ink"
              >
                hello@journeydigital.ai
              </a>
            </p>
            <p className="mt-1 text-[12.5px] text-[#6b6864]">
              Display contact — wire real delivery via Resend env vars (see
              README).
            </p>
          </div>

          <div className="flex flex-col gap-2.5 text-sm text-fog">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-line pt-6 text-[12.5px] tracking-[0.04em] text-[#6b6864]">
          <span>© {new Date().getFullYear()} Journey Digital</span>
          <span>Digital presence. Kingdom purpose.</span>
        </div>
      </div>
    </footer>
  );
}
