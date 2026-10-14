import type { Metadata } from "next";
import { LaunchWeek } from "@/components/LaunchWeek";
import { PricingCare } from "@/components/PricingCare";
import { Reveal } from "@/components/Reveal";
import { StudioPage } from "@/components/StudioPage";
import { CONTACT_EMAIL, PASTORAL_AI, SITE_URL } from "@/lib/site";

const title = "Custom church websites in Wilson, NC | Journey Digital";
const description =
  "Journey Digital is a small, owner-run church web studio in Wilson, North Carolina — a beachhead for eastern North Carolina. Custom design, mobile-first church websites — service times, sermons, ministries, and a visit page that works on a phone — from about $2,000.";

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

const faqs = [
  {
    q: "Who builds church websites in Wilson, NC?",
    a: "Journey Digital is the church website studio based in Wilson, North Carolina, and we build church websites only. We also build for Christian schools and Kingdom businesses when a clear honest site is part of the same calling. Twenty-eight years building systems businesses depend on — now building digital homes the Church can depend on. The first church site is not live yet; we will show it when that church is ready.",
  },
  {
    q: "How much does a church website cost in Wilson, NC?",
    a: "Custom church websites start from about $2,000, with no hidden fees and no padded retainers. If $2,000 is more than your church can put toward it right now, still write us. We would rather hear from you than have a pastor stay quiet because the number felt too big. We will tell you honestly what we can work out.",
  },
  {
    q: "Is Journey Digital the same as journey-digital.com in Auckland?",
    a: "No. Journey Digital at journeydigital.ai is a church website studio in Wilson, North Carolina. We are not the Journey Digital consultancy at journey-digital.com (Auckland and London). Different company, different country, different work.",
  },
  {
    q: "What does a Wilson church website include?",
    a: "A Wilson church website is custom and mobile-first, built around your service times, sermons, ministries, and a visit page a stranger can use on a phone. We build that visit path first — when you meet, where you are, and whether Sunday will feel possible — then sermons, ministries, and a giving path. The site serves the congregation you already have.",
  },
  {
    q: "Do you use templates?",
    a: "No templates, no clip art. AI accelerates layout and production. A human still owns design judgment, theology-sensitive copy, and the launch — so you are not buying a cheap generic site.",
  },
  {
    q: "Do you work outside Wilson?",
    a: "Eastern North Carolina is the beachhead: Wilson and the congregations around it, along I-95 and out toward the coastal plain. We also build for churches beyond that. The studio is based in Wilson, serving eastern North Carolina and beyond.",
  },
  {
    q: "How do we start?",
    a: "Request a free consultation. Tell us about your church at sales@journeydigital.ai, or use the form above. We reach out within a day.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <StudioPage
        eyebrow="Wilson, NC"
        title={
          <>
            <span className="block">Custom church websites</span>
            <span className="block">in Wilson, NC.</span>
          </>
        }
        currentPath="/wilson-nc-church-websites"
        polished
        afterContact={
          <section
            id="faq"
            className="border-t border-line px-6 py-[72px] md:px-8 md:py-[110px]"
          >
            <div className="mx-auto max-w-[820px]">
              <div className="mb-5 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                Questions
              </div>
              <h2 className="mb-10 font-serif text-[clamp(28px,3.6vw,40px)] leading-[1.1] font-semibold tracking-[-0.02em] text-cream">
                Church websites in Wilson, NC: common questions
              </h2>
              <dl className="divide-y divide-line border-y border-line">
                {faqs.map((f) => (
                  <div key={f.q} className="py-7">
                    <dt className="mb-3 font-serif text-[20px] font-semibold tracking-[-0.01em] text-cream">
                      {f.q}
                    </dt>
                    <dd className="text-[16.5px] leading-[1.75] text-silver">
                      {f.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        }
        lede={
          <>
            Looking for a custom church website in Wilson, NC? If your church
            needs a site built around your congregation — not a
            rented template — Journey Digital is a small, owner-run church web
            studio in Wilson, North Carolina. This is the beachhead: Wilson
            first, then congregations across eastern North Carolina. Custom
            design, mobile-first, from about $2,000. Service times, sermons,
            ministries, and a visit page that works on a phone.
          </>
        }
      >
        <section className="px-6 py-[72px] md:px-8 md:py-[110px]">
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

        <section className="bg-bg px-6 py-[72px] md:px-8 md:py-[110px]">
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <Reveal>
              <div className="mb-5 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                Local, not generic
              </div>
              <h2 className="mb-4 font-serif text-[22px] font-semibold tracking-[-0.01em] text-cream md:text-[24px]">
                Based in Wilson. Built for eastern NC.
              </h2>
              <p className="text-[16px] leading-[1.75] text-fog">
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
              <h2 className="mb-5 font-serif text-[clamp(32px,4.4vw,52px)] leading-[1.08] font-semibold tracking-[-0.02em] text-cream">
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
