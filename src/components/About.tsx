import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <div className="bg-bg-2">
      <section id="about" className="relative py-[110px]">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-9 px-6 md:grid-cols-2 md:gap-14 md:px-8">
          <Reveal>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              <span className="font-medium text-fog">04</span> About
            </div>
            <p className="font-serif text-[clamp(24px,3.2vw,34px)] leading-[1.35] font-medium tracking-[-0.01em] text-cream">
              Twenty-eight years building systems businesses depend on —{" "}
              <em className="font-serif not-italic text-accent">
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
            We exist to make sure the Church is never left behind in the digital
            age — leading these moments, not lagging them.
          </Reveal>
        </div>
      </section>
    </div>
  );
}
