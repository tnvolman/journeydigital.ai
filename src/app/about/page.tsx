import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { StudioPage } from "@/components/StudioPage";
import { SITE_URL } from "@/lib/site";

const title = "Journey Digital | Church web studio in Wilson, NC";
const description =
  "Journey Digital is a church web studio in Wilson, North Carolina. Custom church websites — service times, sermons, ministries, and a visit page a stranger can use on a phone — from about $2,000. Powered by The Forge.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

const whatWeDo = [
  {
    n: "Design",
    title: "Made for your church",
    body: "Custom design around your congregation — no templates, no clip art.",
  },
  {
    n: "Build",
    title: "AI-assisted",
    body: "An AI-assisted build: faster than a traditional shop, still custom work.",
  },
  {
    n: "Mobile",
    title: "Built to be used",
    body: "Mobile-first, with sermon archives, online giving paths, and ministry pages.",
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Journey Digital",
    description,
    url: SITE_URL,
    image: `${SITE_URL}/brand/journeydigital_mark.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wilson",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: "Eastern North Carolina",
    priceRange: "From $2,000",
    slogan: "A website worth the welcome you give on Sunday.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StudioPage
        eyebrow="About"
        title="Who is Journey Digital?"
        currentPath="/about"
        lede={
          <>
            Journey Digital is a church web studio in Wilson, North Carolina. We
            design and build custom church websites — service times, sermons,
            ministries, and a visit page a stranger can use on a phone — from
            about $2,000. We are believers building for the Church. We are
            powered by The Forge.
          </>
        }
      >
        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-[1140px]">
            <Reveal>
              <div className="rounded-md border border-line bg-bg-2 px-8 py-10 md:px-11">
                <div className="mb-4 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                  Not the other Journey Digital
                </div>
                <p className="max-w-[68ch] text-[17px] leading-[1.78] text-silver">
                  We are not Journey Digital in Auckland / London (
                  <a
                    href="https://journey-digital.com"
                    rel="nofollow noopener noreferrer"
                    className="text-cream underline decoration-line underline-offset-2 transition-colors hover:decoration-accent"
                  >
                    journey-digital.com
                  </a>
                  ), the digital consultancy. Different company, different
                  country, different work. If you searched &ldquo;is Journey
                  Digital any good&rdquo; and landed on software-agency reviews,
                  that is not us.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-bg-2 px-6 py-20 md:px-8">
          <div className="mx-auto max-w-[1140px]">
            <Reveal>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                What we do
              </div>
              <h2 className="mb-12 max-w-[18ch] font-serif text-[clamp(30px,4.4vw,52px)] leading-[1.08] font-semibold tracking-[-0.02em] text-cream">
                A website worth the welcome you give on Sunday.
              </h2>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3">
                {whatWeDo.map((cell) => (
                  <div
                    key={cell.n}
                    className="bg-bg px-8 py-10 transition-colors hover:bg-panel"
                  >
                    <div className="text-[13px] font-semibold tracking-[0.12em] text-accent">
                      {cell.n}
                    </div>
                    <h3 className="mt-[18px] mb-3 font-serif text-[22px] font-semibold tracking-[-0.02em] text-cream">
                      {cell.title}
                    </h3>
                    <p className="text-[15.5px] text-fog">{cell.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-[1140px]">
            <Reveal>
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
                <div className="bg-bg px-8 py-10 md:px-11">
                  <div className="mb-4 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                    Who it&apos;s for
                  </div>
                  <p className="text-[17px] leading-[1.78] text-silver">
                    Churches that want more than a DIY template and less than a
                    big agency retainer — especially eastern North Carolina.
                  </p>
                </div>
                <div className="bg-bg px-8 py-10 md:px-11">
                  <div className="mb-4 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                    Who it&apos;s not for
                  </div>
                  <p className="text-[17px] leading-[1.78] text-silver">
                    SaaS stock-theme shoppers; secular product-design
                    consultancies; anyone looking for the NZ Journey Digital
                    firm.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-bg-2 px-6 py-20 md:px-8">
          <div className="mx-auto max-w-[680px] text-center">
            <Reveal>
              <div className="mb-5 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                Plain pricing
              </div>
              <div className="font-serif text-[clamp(48px,9vw,96px)] leading-none font-semibold tracking-[-0.04em] text-cream">
                From <em className="font-serif not-italic text-accent">$2,000</em>
              </div>
              <p className="mt-[22px] text-lg text-fog">
                A complete custom church website. No hidden fees, no padded
                retainers.
              </p>
            </Reveal>
          </div>
        </section>
      </StudioPage>
    </>
  );
}
