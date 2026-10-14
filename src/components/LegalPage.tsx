import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export function LegalPage({
  title,
  lede,
  children,
  related,
}: {
  title: string;
  lede: ReactNode;
  children: ReactNode;
  related: { href: string; label: string }[];
}) {
  return (
    <>
      <Nav />
      <main>
        <header className="border-b border-line px-6 pt-[140px] pb-[60px] md:px-8">
          <div className="mx-auto max-w-[1140px]">
            <div className="mb-5 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Legal
            </div>
            <h1 className="mb-5 font-serif text-[clamp(32px,4.8vw,60px)] leading-[1.08] font-semibold tracking-[-0.03em] text-cream">
              {title}
            </h1>
            <p className="max-w-[62ch] text-lg text-fog">{lede}</p>
          </div>
        </header>
        <section className="px-6 py-[72px] md:px-8 md:py-[110px]">
          <div className="legal mx-auto max-w-[720px] text-[17px] leading-[1.78] text-silver">
            {children}
          </div>
        </section>
        <section className="border-t border-line px-6 py-16 md:px-8">
          <div className="mx-auto max-w-[1140px]">
            <div className="mb-6 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Also on this site
            </div>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-[15px] text-cream underline decoration-line underline-offset-4 transition-colors hover:decoration-fog"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
