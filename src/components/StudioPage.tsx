import type { ReactNode } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { studioPages } from "@/lib/site";
import Link from "next/link";

export function StudioPage({
  eyebrow,
  title,
  lede,
  children,
  currentPath,
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  children: ReactNode;
  currentPath: string;
}) {
  return (
    <>
      <Nav />
      <main>
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
          </div>
        </header>

        {children}

        <RelatedStudioPages currentPath={currentPath} />
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
