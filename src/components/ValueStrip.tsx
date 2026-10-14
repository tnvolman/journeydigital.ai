const items = [
  "Custom design",
  "Mobile-first",
  "Wilson, NC",
  "Sermon archives",
  "Online giving",
  "Ministry pages",
];

export function ValueStrip() {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-line bg-bg-2 py-5">
      <div className="strip-track flex gap-[60px] text-[13px] tracking-[0.18em] text-fog uppercase whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-3.5">
            {item}
            <span aria-hidden className="text-[8px] text-accent">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
