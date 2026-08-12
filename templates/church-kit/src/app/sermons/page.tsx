import type { Metadata } from "next";
import churchConfig from "../../../church.config";
import { PageHero } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Sermons",
  description: `Recent messages from ${churchConfig.name}.`,
};

export default function SermonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sermons"
        title="Hear the Word"
        lead="Placeholder sermon list driven by church.config.ts. Connect audio, video, or a podcast feed when ready."
      />
      <section className="shell pb-16">
        <ul className="divide-y divide-line rounded-xl border border-line bg-surface">
          {churchConfig.sermons.map((sermon) => (
            <li key={`${sermon.date}-${sermon.title}`} className="p-5 md:p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h2 className="font-display text-xl text-ink">{sermon.title}</h2>
                  <p className="mt-1 text-sm text-muted">
                    {sermon.speaker}
                    {sermon.passage ? ` · ${sermon.passage}` : ""}
                  </p>
                </div>
                <time className="text-sm text-muted" dateTime={sermon.date}>
                  {new Date(sermon.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              {sermon.href ? (
                <a
                  href={sermon.href}
                  className="mt-3 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Listen / watch
                </a>
              ) : (
                <p className="mt-3 text-sm text-muted">Link coming soon</p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
