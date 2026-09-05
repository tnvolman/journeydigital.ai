import type { Metadata } from "next";
import { LaunchWeek } from "@/components/LaunchWeek";
import { PricingCare } from "@/components/PricingCare";
import { Reveal } from "@/components/Reveal";
import { StudioPage } from "@/components/StudioPage";
import { CONTACT_EMAIL, PASTORAL_AI, SITE_URL } from "@/lib/site";

const title = "Custom church websites in Wilson, NC | Journey Digital";
const description =
  "Journey Digital is an independent church web studio in Wilson, North Carolina — a beachhead for eastern North Carolina. Custom design, mobile-first church websites — service times, sermons, ministries, and a visit page that works on a phone — from about $2,000.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/wilson-nc-church-websites" },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/wilson-nc-church-websites`,
    type: "website",
  },
};

const whatYouGet = [
  {
    n: "Design",
    title: "Made for your church",
    body: "No templates, no clip art. Built around your congregation — the ministries you already have, and the guest who will open the site on a phone.",
  },
  {
    n: "Build",
    title: "Built with care",
    body: PASTORAL_AI,
  },
  {
    n: "Steward",
    title: "Priced to serve",
    body: "We are believers building for the Church. Honest work at a fair price — no hidden fees, no padded retainers.",
  },
];

export default function WilsonChurchWebsitesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Journey Digital",
    description,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wilson",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Wilson",
        containedInPlace: {
          "@type": "State",
          name: "North Carolina",
        },
      },
      {
        "@type": "AdministrativeArea",
        name: "Eastern North Carolina",
      },
    ],
    priceRange: "From $2,000",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StudioPage
        eyebrow="Wilson, NC"
        title="Looking for a custom church website in Wilson, NC?"
        currentPath="/wilson-nc-church-websites"
        lede={
          <>
            If your church needs a site built around your congregation — not a
            rented template — Journey Digital is an independent church web
            studio in Wilson, North Carolina. This is the beachhead: Wilson
            first, then congregations across eastern North Carolina. Custom
            design, mobile-first, from about $2,000. Service times, sermons,
            ministries, and a visit page that works on a phone.
          </>
        }
      >
        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-[1140px]">
            <Reveal>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                What you get
              </div>
              <h2 className="mb-12 max-w-[18ch] font-serif text-[clamp(30px,4.4vw,52px)] leading-[1.08] font-semibold tracking-[-0.02em] text-cream">
                A website worth the welcome you give on Sunday.
              </h2>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3">
                {whatYouGet.map((cell) => (
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

        <LaunchWeek />

        <section className="bg-bg px-6 py-20 md:px-8">
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="mb-5 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                Local, not generic
              </div>
              <h2 className="mb-5 font-serif text-[clamp(28px,3.6vw,40px)] font-semibold tracking-[-0.02em] text-cream">
                Based in Wilson. Built for eastern NC.
              </h2>
              <p className="text-[17px] leading-[1.78] text-silver">
                We are based in Wilson, NC. We build for churches who want a
                digital home the Church can depend on — leading these moments,
                not lagging them. Wilson is home. Eastern North Carolina is the
                beachhead.
              </p>
            </Reveal>
            <Reveal>
              <div className="mb-5 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                Next step
              </div>
              <h2 className="mb-5 font-serif text-[clamp(28px,3.6vw,40px)] font-semibold tracking-[-0.02em] text-cream">
                Request a free consultation.
              </h2>
              <p className="text-[17px] leading-[1.78] text-silver">
                Tell us about your church, or email {CONTACT_EMAIL}. We reach
                out within a day.
              </p>
              <PricingCare className="mt-5 text-[16px] leading-[1.78] text-fog" />
            </Reveal>
          </div>
        </section>
      </StudioPage>
    </>
  );
}
