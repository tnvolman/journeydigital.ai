import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { StudioPage } from "@/components/StudioPage";
import { SITE_URL } from "@/lib/site";

const title = "Church website without another template builder | Journey Digital";
const description =
  "Most Faithlife Sites alternatives are still a template or a platform. Journey Digital is a custom church web studio — no templates, no clip art — from about $2,000.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/church-website-not-a-template" },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/church-website-not-a-template`,
    type: "website",
  },
};

const included = [
  {
    n: "Mobile",
    title: "Mobile-first",
    body: "A site a stranger can use on a phone — times, a visit page, and the next step without pinch-zooming.",
  },
  {
    n: "Sermons",
    title: "Sermon archives",
    body: "A place last week’s message lives, without scrolling a Facebook wall.",
  },
  {
    n: "Give",
    title: "Giving path",
    body: "A clear path to give online — not a scavenger hunt for the right button.",
  },
  {
    n: "Ministries",
    title: "Ministry pages",
    body: "Pages for the work your church actually does, written around your congregation.",
  },
  {
    n: "Visit",
    title: "Visit and service times",
    body: "When you meet, where you are, and what a first Sunday feels like — in plain language.",
  },
];

export default function ChurchWebsiteNotATemplatePage() {
  return (
    <StudioPage
      eyebrow="Custom, not a builder"
      title="Need a Faithlife Sites alternative that isn’t another DIY builder?"
      currentPath="/church-website-not-a-template"
      lede={
        <>
          Most alternatives lists point to Subsplash, Tithely, ChurchSpring, or
          REACHRIGHT — still template/platform. Journey Digital is a custom
          church web studio. No templates, no clip art. From about $2,000.
        </>
      }
    >
      <section className="px-6 py-20 md:px-8">
        <div className="mx-auto max-w-[1140px]">
          <Reveal>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
              <div className="bg-bg px-8 py-10 md:px-11">
                <div className="mb-4 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                  DIY builder
                </div>
                <h2 className="mb-4 font-serif text-[clamp(24px,3vw,32px)] font-semibold tracking-[-0.02em] text-cream">
                  A theme you rearrange.
                </h2>
                <p className="text-[17px] leading-[1.78] text-silver">
                  Faithlife Sites, Subsplash, Tithely, ChurchSpring, and
                  REACHRIGHT are still a template or a platform. You log in, pick
                  a look, and assemble the blocks yourself. That is the right
                  tool if you want to keep building the site every week.
                </p>
              </div>
              <div className="bg-bg px-8 py-10 md:px-11">
                <div className="mb-4 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                  Custom studio
                </div>
                <h2 className="mb-4 font-serif text-[clamp(24px,3vw,32px)] font-semibold tracking-[-0.02em] text-cream">
                  A site designed around your church.
                </h2>
                <p className="text-[17px] leading-[1.78] text-silver">
                  Journey Digital designs and builds a custom church website —
                  no templates, no clip art. Service times, sermons, ministries,
                  and a visit page a stranger can use on a phone. Priced to
                  serve, not to squeeze. From about $2,000.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-2 px-6 py-20 md:px-8">
        <div className="mx-auto max-w-[1140px]">
          <Reveal>
            <div className="mb-5 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              What&apos;s included
            </div>
            <h2 className="mb-12 max-w-[18ch] font-serif text-[clamp(30px,4.4vw,52px)] leading-[1.08] font-semibold tracking-[-0.02em] text-cream">
              The welcome you already give on Sunday.
            </h2>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
              {included.map((cell) => (
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
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <div className="mb-5 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Who should stay on a builder
            </div>
            <h2 className="mb-5 font-serif text-[clamp(28px,3.6vw,40px)] font-semibold tracking-[-0.02em] text-cream">
              Keep the platform if you want the platform.
            </h2>
            <p className="text-[17px] leading-[1.78] text-silver">
              Stay on a builder if you want to drag blocks yourself, live inside
              a stock theme, or pay a monthly platform fee for the software more
              than for a site designed around your congregation. Journey Digital
              is not another DIY builder. We are a custom church web studio in
              Wilson, North Carolina — believers building for the Church,
              powered by The Forge.
            </p>
          </Reveal>
        </div>
      </section>
    </StudioPage>
  );
}
