import Image from "next/image";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

const marquee = [
  "Custom design",
  "Mobile-first",
  "Built with AI",
  "Sermon archives",
  "Online giving",
  "Ministry pages",
];

export default function HomePage() {
  return (
    <>
      <SiteNav />

      <header
        id="top"
        className="relative flex min-h-screen items-center bg-[radial-gradient(900px_600px_at_78%_20%,rgba(255,255,255,0.10),transparent_60%),radial-gradient(700px_500px_at_10%_90%,rgba(255,255,255,0.04),transparent_55%),var(--bg)] pt-[120px] pb-20"
      >
        <div className="wrap grid w-full items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-[60px]">
          <div className="text-center md:text-left">
            <p className="mb-7 inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.24em] text-accent uppercase before:block before:h-px before:w-7 before:bg-accent">
              Journey Digital
            </p>
            <h1 className="font-display text-[clamp(44px,6.4vw,82px)] tracking-[-0.03em]">
              Digital presence.
              <em className="mt-1 block font-normal not-italic text-accent">
                Kingdom purpose.
              </em>
            </h1>
            <p className="mx-auto mt-7 mb-10 max-w-[46ch] text-[clamp(17px,1.9vw,20px)] text-fog md:mx-0">
              We design and build digital homes for the Church — sleek, fast,
              and made to be found. Agency-grade craft, built with AI, priced to
              serve ministry.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center bg-accent px-[30px] py-4 text-[15px] font-semibold text-[#141414] transition hover:-translate-y-0.5 hover:bg-accent-soft"
              >
                Request a consultation
              </a>
              <a
                href="#work"
                className="inline-flex items-center border border-line px-[30px] py-4 text-[15px] font-semibold text-ink transition hover:-translate-y-0.5 hover:border-fog"
              >
                View our work
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div
              aria-hidden
              className="absolute h-[78%] w-[78%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_68%)] blur-[18px]"
            />
            <Image
              src="/journeydigital_logo_grey.svg"
              alt="Journey Digital — church website design studio"
              width={380}
              height={380}
              priority
              className="animate-rise relative h-auto w-[min(380px,80%)] drop-shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </header>

      <div className="overflow-hidden border-y border-line bg-bg-2 py-5">
        <div className="marquee-track flex w-max gap-[60px] text-[13px] tracking-[0.18em] text-fog uppercase">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`} className="inline-flex items-center gap-3.5">
              {item}
              <span aria-hidden className="text-[8px] text-accent">
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>

      <section id="services" className="py-[110px]">
        <div className="wrap">
          <Reveal>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              <span className="font-medium text-fog">01</span> What we do
            </div>
            <h2 className="font-display mb-4 max-w-[18ch] text-[clamp(30px,4.4vw,52px)]">
              A website worth the welcome you give on Sunday.
            </h2>
          </Reveal>

          <Reveal className="mt-14 grid overflow-hidden rounded-md border border-line bg-line md:grid-cols-3">
            <ServiceCell
              n="Design"
              title="Made for your church"
              body="No templates, no clip art. Every site is designed around your congregation, your ministries, and the people you're trying to reach."
            />
            <ServiceCell
              n="Build"
              title="Powered by AI"
              body="We build faster and sharper than a traditional shop — agency-grade work, delivered without agency-grade timelines or invoices."
            />
            <ServiceCell
              n="Steward"
              title="Priced to serve"
              body="We're believers building for the Church. We price to serve, not to squeeze — and we'll tell you honestly what you need and what you don't."
            />
          </Reveal>
        </div>
      </section>

      <div className="bg-bg-2">
        <section id="work" className="py-[110px]">
          <div className="wrap">
            <Reveal>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                <span className="font-medium text-fog">02</span> Selected work
              </div>
              <h2 className="font-display max-w-[18ch] text-[clamp(30px,4.4vw,52px)]">
                Where the journey starts.
              </h2>
            </Reveal>

            <Reveal className="mt-14 grid items-center gap-9 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
              <article className="relative overflow-hidden rounded-lg border border-line bg-[linear-gradient(160deg,#1e1e1e,#161616)] p-12 before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-accent">
                <p className="text-[11.5px] tracking-[0.2em] text-accent uppercase">
                  First client · Wilson, NC
                </p>
                <h3 className="font-display mt-3.5 mb-4 text-[30px]">
                  Tabernacle Baptist Church
                </h3>
                <p className="mb-6 text-[15.5px] text-fog">
                  A complete digital home for a historic congregation — service
                  times, sermons, and ministries, all effortless to find on any
                  phone.
                </p>
                <a
                  href="#contact"
                  className="inline-flex gap-2 border-b border-accent pb-1 text-[15px] font-semibold text-ink transition-[gap] hover:gap-3.5"
                >
                  Ask to see the preview →
                </a>
              </article>

              <div>
                <h3 className="font-display mb-4 text-[clamp(28px,3.6vw,40px)]">
                  Real churches. Real craft.
                </h3>
                <p className="text-[17px] text-fog">
                  Every relationship starts the same way — listening. We learn
                  how your church serves, then build a site that helps a visitor
                  take the next step, whether that&apos;s finding a service time
                  or walking through the door on Sunday.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      <section id="pricing" className="py-[110px]">
        <Reveal className="wrap mx-auto max-w-[680px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            <span className="font-medium text-fog">03</span> Pricing
          </div>
          <p className="font-display text-[clamp(56px,11vw,120px)] leading-none font-medium tracking-[-0.04em] text-ink">
            From <em className="not-italic text-accent">$2,000</em>
          </p>
          <p className="mt-5 text-lg text-fog">
            A complete, custom church website. No hidden fees, no padded
            retainers — honest work at a fair price.
          </p>
        </Reveal>
      </section>

      <div className="bg-bg-2">
        <section id="about" className="py-[110px]">
          <div className="wrap grid items-center gap-9 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                <span className="font-medium text-fog">04</span> About
              </div>
              <p className="font-display text-[clamp(24px,3.2vw,34px)] leading-[1.35] font-medium tracking-[-0.01em] text-ink">
                Twenty-eight years building systems businesses depend on —{" "}
                <em className="not-italic text-accent">
                  now building digital homes the Church can depend on.
                </em>
              </p>
            </Reveal>
            <Reveal className="text-[15.5px] text-fog">
              <strong className="mb-2 block font-semibold tracking-[0.04em] text-silver">
                Journey Digital
              </strong>
              Wilson, North Carolina
              <br />
              A church web studio, powered by The Forge.
              <br />
              <br />
              We exist to make sure the Church is never left behind in the
              digital age — leading these moments, not lagging them. Believers
              building for the Church — honest, not agency-slick.
            </Reveal>
          </div>
        </section>
      </div>

      <section id="contact" className="py-[110px]">
        <div className="wrap grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-[60px]">
          <Reveal>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              <span className="font-medium text-fog">05</span> Start a project
            </div>
            <h2 className="font-display mb-5 text-[clamp(30px,4.4vw,48px)]">
              Let&apos;s build something that lasts.
            </h2>
            <p className="max-w-[40ch] text-[17px] text-fog">
              Tell us about your church and what you&apos;re hoping for. We&apos;ll
              reach out within a day — no pressure, no sales pitch.
            </p>
          </Reveal>
          <Reveal>
            <ConsultationForm />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

function ServiceCell({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-bg px-[34px] py-10 transition-colors hover:bg-panel">
      <div className="text-[13px] font-semibold tracking-[0.12em] text-accent">
        {n}
      </div>
      <h3 className="font-display mt-[18px] mb-3 text-[22px]">{title}</h3>
      <p className="text-[15.5px] text-fog">{body}</p>
    </div>
  );
}
