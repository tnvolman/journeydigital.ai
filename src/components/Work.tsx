import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function Work() {
  return (
    <div className="bg-bg-2">
      <section id="work" className="relative py-[110px]">
        <div className="mx-auto max-w-[1140px] px-6 md:px-8">
          <Reveal>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              <span className="font-medium text-fog">02</span> Selected work
            </div>
            <h2 className="font-serif text-[clamp(30px,4.4vw,52px)] leading-[1.08] font-semibold tracking-[-0.02em] text-cream max-w-[18ch]">
              Where the journey starts.
            </h2>
          </Reveal>

          <Reveal className="mt-[54px]">
            <div className="grid grid-cols-1 items-center gap-9 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
              <div className="relative overflow-hidden rounded-lg border border-line bg-[linear-gradient(160deg,#1e1e1e,#161616)] p-12 before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-accent">
                <div className="text-[11.5px] tracking-[0.2em] text-accent uppercase">
                  Wilson, NC
                </div>
                <h3 className="mt-3.5 mb-[18px] font-serif text-[30px] font-semibold tracking-[-0.02em] text-cream">
                  Built for the churches we serve next
                </h3>
                <p className="mb-6 text-[15.5px] text-fog">
                  Service times, sermons, ministries, and a visit page a
                  stranger can use on a phone. We&apos;ll show the first site
                  when the church is ready.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex gap-2 border-b border-accent pb-1 text-[15px] font-semibold text-cream transition-[gap] hover:gap-3.5"
                >
                  Start a project →
                </Link>
              </div>

              <div>
                <h2 className="mb-[18px] font-serif text-[clamp(28px,3.6vw,40px)] font-semibold tracking-[-0.02em] text-cream">
                  Real churches. Real craft.
                </h2>
                <p className="text-[17px] text-fog">
                  Every relationship starts the same way — listening. We learn
                  how your church serves, then build a site that helps a visitor
                  take the next step, whether that&apos;s finding a service time
                  or walking through the door on Sunday.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
