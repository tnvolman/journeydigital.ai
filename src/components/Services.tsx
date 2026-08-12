import { Reveal } from "@/components/Reveal";

const cells = [
  {
    n: "Design",
    title: "Made for your church",
    body: "No templates, no clip art. Every site is designed around your congregation, your ministries, and the people you're trying to reach.",
  },
  {
    n: "Build",
    title: "Powered by AI",
    body: "We build faster and sharper than a traditional shop — agency-grade work, delivered without agency-grade timelines or invoices.",
  },
  {
    n: "Steward",
    title: "Priced to serve",
    body: "We're believers building for the Church. We price to serve, not to squeeze — and we'll tell you honestly what you need and what you don't.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-[110px]">
      <div className="mx-auto max-w-[1140px] px-6 md:px-8">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            <span className="font-medium text-fog">01</span> What we do
          </div>
          <h2 className="font-serif text-[clamp(30px,4.4vw,52px)] leading-[1.08] font-semibold tracking-[-0.02em] text-cream max-w-[18ch]">
            A website worth the welcome you give on Sunday.
          </h2>
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3">
            {cells.map((cell) => (
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
