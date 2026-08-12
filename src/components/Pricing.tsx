import { Reveal } from "@/components/Reveal";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-[110px]">
      <div className="mx-auto max-w-[1140px] px-6 md:px-8">
        <Reveal className="mx-auto max-w-[680px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            <span className="font-medium text-fog">03</span> Pricing
          </div>
          <div className="font-serif text-[clamp(56px,11vw,120px)] leading-none font-semibold tracking-[-0.04em] text-cream">
            From <em className="font-serif not-italic text-accent">$2,000</em>
          </div>
          <p className="mt-[22px] text-lg text-fog">
            A complete, custom church website. No hidden fees, no padded
            retainers — honest work at a fair price.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
