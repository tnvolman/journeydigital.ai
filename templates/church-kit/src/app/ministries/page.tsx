import type { Metadata } from "next";
import churchConfig from "../../../church.config";
import { PageHero } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Ministries",
  description: `Ministries at ${churchConfig.name}.`,
};

export default function MinistriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ministries"
        title="Ways to grow and serve"
        lead="A simple overview of key ministries. Expand each into its own page as the church needs."
      />
      <section className="shell grid gap-4 pb-16 sm:grid-cols-2">
        {churchConfig.ministries.map((ministry) => (
          <article
            key={ministry.name}
            className="rounded-xl border border-line bg-surface p-6"
          >
            <h2 className="font-display text-2xl text-ink">{ministry.name}</h2>
            <p className="mt-3 text-muted">{ministry.summary}</p>
          </article>
        ))}
      </section>
    </>
  );
}
