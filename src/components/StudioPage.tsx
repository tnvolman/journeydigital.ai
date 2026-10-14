import type { ReactNode } from "react";
import { ContactForm } from "@/components/ContactForm";
import { EmailLink } from "@/components/EmailLink";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { CONTACT_EMAIL, studioPages } from "@/lib/site";
import Link from "next/link";

export function StudioPage({
  eyebrow,
  title,
  lede,
  children,
  currentPath,
  polished = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
  currentPath: string;
  polished?: boolean;
}) {
  return (
    <>
      <Nav />
      <main>
        {polished ? (
          <header className="border-b border-line px-6 pt-[140px] pb-[80px] md:px-8 md:pt-[180px] md:pb-[110px]">
            <div className="mx-auto max-w-[1140px]">
              <div className="mb-6 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                {eyebrow}
              </div>
              <h1 className="mb-7 max-w-[24ch] font-serif text-[clamp(36px,5.6vw,72px)] leading-[1.05] font-semibold tracking-[-0.03em] text-balance text-cream">
                {title}
              </h1>
              {lede ? (
                <div className="max-w-[60ch] text-lg leading-[1.7] text-fog">{lede}</div>
              ) : null}
              <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center bg-accent px-7 py-4 text-[15px] font-semibold text-[#141414] transition hover:-translate-y-0.5 hover:bg-cream"
                >
                  Request a free consultation
                </Link>
                <EmailLink className="text-[15px] text-silver underline decoration-line underline-offset-4 transition-colors hover:text-cream hover:decoration-fog">
                  {CONTACT_EMAIL}
                </EmailLink>
              </div>
            </div>
          </header>
        ) : (
        <header className="border-b border-line px-6 pt-[140px] pb-[60px] md:px-8">
          <div className="mx-auto max-w-[1140px]">
            <div className="mb-5 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              {eyebrow}
            </div>
            <h1 className="mb-5 max-w-[22ch] font-serif text-[clamp(32px,4.8vw,60px)] leading-[1.08] font-semibold tracking-[-0.03em] text-cream">
              {title}
            </h1>
            {lede ? (
              <div className="max-w-[62ch] text-lg text-fog">{lede}</div>
            ) : null}
            <p className="mt-6 max-w-[62ch] text-[16px] text-silver">
              Email{" "}
              <EmailLink className="text-cream underline decoration-line underline-offset-2 transition-colors hover:decoration-accent">
                {CONTACT_EMAIL}
              </EmailLink>
              {" · "}
              <Link
                href="#contact"
                className="text-cream underline decoration-line underline-offset-2 transition-colors hover:decoration-accent"
              >
                Or request a consultation
              </Link>
              .
            </p>
          </div>
        </header>
        )}

        {children}

        {polished ? (
          <RelatedStudioCards currentPath={currentPath} />
        ) : (
          <RelatedStudioPages currentPath={currentPath} />
        )}
        <ContactForm
          numbered={false}
          note="If budget is a concern, still reach out. We would rather hear from you."
        />
      </main>
      <Footer />
    </>
  );
}

function RelatedStudioPages({ currentPath }: { currentPath: string }) {
  const others = studioPages.filter((page) => page.href !== currentPath);

  return (
    <section className="border-t border-line px-6 py-16 md:px-8">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-6 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
          More from the studio
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {others.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="inline-flex gap-2 border-b border-accent pb-1 text-[15px] font-semibold text-cream transition-[gap] hover:gap-3.5"
            >
              {page.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const studioBlurbs: Record<string, string> = {
  "/about": "Who we are and how the studio works.",
  "/wilson-nc-church-websites": "Custom church websites, based in Wilson, NC.",
  "/church-website-not-a-template": "Why we build custom instead of templates.",
  "/contact": "Email us or request a free consultation.",
};

function RelatedStudioCards({ currentPath }: { currentPath: string }) {
  const others = studioPages.filter((page) => page.href !== currentPath);

  return (
    <section className="border-t border-line px-6 py-[72px] md:px-8 md:py-[110px]">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-8 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
          More from the studio
        </div>
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3">
          {others.map((page) => (
            <li key={page.href} className="bg-bg">
              <Link
                href={page.href}
                className="group block h-full px-7 py-8 transition-colors hover:bg-panel"
              >
                <span className="block font-serif text-[20px] font-semibold tracking-[-0.01em] text-cream">
                  {page.label}
                </span>
                <span className="mt-2 block text-[15px] text-fog">
                  {studioBlurbs[page.href]}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-5 inline-block text-[14px] text-silver transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
