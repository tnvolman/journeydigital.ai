import type { Metadata } from "next";
import Link from "next/link";
import { PricingCare } from "@/components/PricingCare";
import { Reveal } from "@/components/Reveal";
import { StudioPage } from "@/components/StudioPage";
import { SITE_URL } from "@/lib/site";

const title =
  "Affordable church website under $3,000 — from $2,000 | Journey Digital";
const description =
  "Looking for an affordable church website under 3000? Journey Digital is a custom church website studio from $2,000 — under $3,000. Not a monthly SaaS like REACHRIGHT.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/church-website-under-3000" },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/church-website-under-3000`,
    type: "website",
  },
};

const lanes = [
  {
    n: "DIY / template",
    title: "A theme you rent or rearrange.",
    body: "Faithlife Sites, Subsplash, Tithely, ChurchSpring, and REACHRIGHT are still a template or a platform. You log in, pick a look, and assemble the blocks yourself — or pay a monthly fee for the software.",
  },
  {
    n: "Custom studio",
    title: "From $2,000. Under $3,000.",
    body: "Journey Digital designs and builds a custom church website — no templates, no clip art. Service times, sermons, ministries, and a visit page a stranger can use on a phone. From $2,000. You own the work.",
  },
];

const linkClass =
  "text-cream underline decoration-line underline-offset-2 transition-colors hover:decoration-accent";

export default function ChurchWebsiteUnder3000Page() {
  return (
    <StudioPage
      eyebrow="From $2,000 · under $3,000"
      title="Affordable church website under $3,000"
      currentPath="/church-website-under-3000"
      lede={
        <>
          If you searched for an affordable church website under 3000 — or
          under $3,000 — Journey Digital is a custom studio path from $2,000.
          That is not a monthly SaaS like REACHRIGHT. DIY builders rent you a
          theme. Agencies start much higher. From $2,000 is custom studio work,
          not a cautioned freelancer band. You own the work.
        </>
      }
    >
      <section
        id="church-website-under-3000"
        className="px-6 py-[72px] md:px-8 md:py-[110px]"
      >
        <div className="mx-auto max-w-[1140px]">
          <Reveal>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
              {lanes.map((lane) => (
                <div key={lane.n} className="bg-bg px-8 py-10 md:px-11">
                  <div className="mb-4 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                    {lane.n}
                  </div>
                  <h2 className="mb-4 font-serif text-[clamp(24px,3vw,32px)] font-semibold tracking-[-0.02em] text-cream">
                    {lane.title}
                  </h2>
                  <p className="text-[17px] leading-[1.78] text-silver">
                    {lane.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-2 px-6 py-[72px] md:px-8 md:py-[110px]">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <div className="mb-5 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              The honest three-lane frame
            </div>
            <h2 className="mb-5 font-serif text-[clamp(28px,3.6vw,40px)] leading-[1.1] font-semibold tracking-[-0.02em] text-cream">
              A church website under $3,000 does not have to be SaaS.
            </h2>
            <p className="mb-5 text-[17px] leading-[1.78] text-silver">
              A church website under $3000 does not have to be a monthly SaaS
              like REACHRIGHT. DIY builders rent you a theme. Agencies start
              much higher. Journey Digital is the custom studio lane: from
              $2,000, we design and build a site around your congregation — not
              a cautioned freelancer band.
            </p>
            <p className="mb-5 text-[17px] leading-[1.78] text-silver">
              The longer cost breakdown is in the Journal:{" "}
              <Link
                href="/blog/how-much-does-a-church-website-cost"
                className={linkClass}
              >
                how much a church website costs
              </Link>
              . Prefer a custom path over a builder? Read{" "}
              <Link href="/church-website-not-a-template" className={linkClass}>
                Faithlife Sites alternative
              </Link>
              .
            </p>
            <PricingCare className="text-[16px] leading-[1.78] text-fog" />
          </Reveal>
        </div>
      </section>
    </StudioPage>
  );
}
