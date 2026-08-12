import type { Metadata } from "next";
import churchConfig from "../../../church.config";
import { PageHero } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Give",
  description: `Give to support the mission of ${churchConfig.name}.`,
};

export default function GivePage() {
  const { give } = churchConfig;
  const isPlaceholder = !give.ctaHref || give.ctaHref === "#";

  return (
    <>
      <PageHero eyebrow="Give" title={give.headline} lead={give.body} />
      <section className="shell pb-16">
        <div className="max-w-xl rounded-xl border border-line bg-surface p-7 md:p-8">
          {isPlaceholder ? (
            <>
              <p className="text-muted">
                Online giving is not connected yet. Point{" "}
                <code className="rounded bg-accent-soft px-1.5 py-0.5 text-sm">
                  give.ctaHref
                </code>{" "}
                in <code className="text-sm">church.config.ts</code> to Pushpay,
                Tithe.ly, Planning Center, or your preferred platform.
              </p>
              <span className="mt-5 inline-flex cursor-not-allowed rounded-md bg-accent/40 px-5 py-3 text-sm font-semibold text-white">
                {give.ctaLabel}
              </span>
            </>
          ) : (
            <a
              href={give.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {give.ctaLabel}
            </a>
          )}
        </div>
      </section>
    </>
  );
}
