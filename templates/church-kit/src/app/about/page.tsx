import type { Metadata } from "next";
import churchConfig from "../../../church.config";
import { PageHero } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "About",
  description: `About ${churchConfig.name} — our pastor, mission, and welcome.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`Who we are at ${churchConfig.shortName}`}
        lead={churchConfig.description}
      />
      <section className="shell grid gap-8 pb-16 md:grid-cols-[1fr_1fr]">
        <div className="rounded-xl border border-line bg-surface p-7 md:p-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Leadership
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink">
            {churchConfig.pastor.name}
          </h2>
          <p className="mt-1 text-sm text-muted">{churchConfig.pastor.title}</p>
          <p className="mt-4 text-muted">{churchConfig.pastor.bio}</p>
        </div>
        <div className="rounded-xl border border-line bg-accent-soft/50 p-7 md:p-8">
          <h2 className="font-display text-2xl text-ink">Our hope</h2>
          <p className="mt-4 text-muted">
            We exist to help people know Jesus, grow as disciples, and love our
            neighbors well. Update this section with your church&apos;s mission,
            beliefs summary, and story.
          </p>
        </div>
      </section>
    </>
  );
}
