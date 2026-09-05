import { Reveal } from "@/components/Reveal";

const items = [
  {
    n: "Times",
    title: "Service times",
    body: "When you meet, written so a stranger can find it on a phone.",
  },
  {
    n: "Visit",
    title: "A visit page",
    body: "Where you are, what a first Sunday feels like, and the next step — without pinch-zooming.",
  },
  {
    n: "Sermons",
    title: "Sermon archives",
    body: "A home for last week’s message, off the Facebook wall.",
  },
  {
    n: "Ministries",
    title: "Ministry pages",
    body: "Pages for the work your church actually does — not a generic template block.",
  },
  {
    n: "Give",
    title: "Giving path",
    body: "A clear way to give online — not a scavenger hunt for the right button.",
  },
];

export function Deliverables({
  numbered = false,
}: {
  numbered?: boolean;
}) {
  return (
    <section id="deliverables" className="relative py-[110px]">
      <div className="mx-auto max-w-[1140px] px-6 md:px-8">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            {numbered ? <span className="font-medium text-fog">02</span> : null}
            What you get
          </div>
          <h2 className="mb-5 max-w-[20ch] font-serif text-[clamp(30px,4.4vw,52px)] leading-[1.08] font-semibold tracking-[-0.02em] text-cream">
            Concrete deliverables. No invented portfolio.
          </h2>
          <p className="max-w-[54ch] text-[17px] text-fog">
            A custom church website from Journey Digital includes the pages a
            guest actually needs. We show finished work when a church is ready
            — not before.
          </p>
        </Reveal>
        <Reveal className="mt-14">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {items.map((cell) => (
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
  );
}
