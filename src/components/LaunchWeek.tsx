import { Reveal } from "@/components/Reveal";

const beats = [
  {
    n: "01",
    title: "Phone check",
    body: "Service times and the visit page, used the way a stranger would — on a phone.",
  },
  {
    n: "02",
    title: "Paths live",
    body: "Sermons, ministries, and giving are on the site, not promised for later.",
  },
  {
    n: "03",
    title: "Staff handoff",
    body: "A simple walkthrough so your people can keep the site. We stay through go-live.",
  },
];

export function LaunchWeek() {
  return (
    <div className="bg-bg-2">
      <section id="launch-week" className="relative py-[110px]">
        <div className="mx-auto max-w-[1140px] px-6 md:px-8">
          <Reveal>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Launch week
            </div>
            <h2 className="mb-5 max-w-[16ch] font-serif text-[clamp(30px,4.4vw,52px)] leading-[1.08] font-semibold tracking-[-0.02em] text-cream">
              Short, hands-on, through Sunday.
            </h2>
            <p className="max-w-[54ch] text-[17px] text-fog">
              Launch week is not a padded retainer. We stay with you through
              go-live so the site is ready the first Sunday it is yours.
            </p>
          </Reveal>
          <Reveal className="mt-14">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3">
              {beats.map((beat) => (
                <div
                  key={beat.n}
                  className="bg-bg px-8 py-10 transition-colors hover:bg-panel"
                >
                  <div className="text-[13px] font-semibold tracking-[0.12em] text-accent">
                    {beat.n}
                  </div>
                  <h3 className="mt-[18px] mb-3 font-serif text-[22px] font-semibold tracking-[-0.02em] text-cream">
                    {beat.title}
                  </h3>
                  <p className="text-[15.5px] text-fog">{beat.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
