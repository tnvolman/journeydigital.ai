import type { Metadata } from "next";
import churchConfig, { formatAddress } from "../../../church.config";
import { PageHero } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Visit",
  description: `Service times and directions for ${churchConfig.name}.`,
};

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit"
        title="Come as you are"
        lead="Find service times, parking notes, and how to get here. First-time guests are always welcome."
      />
      <section className="shell grid gap-6 pb-16 md:grid-cols-[1fr_1fr]">
        <div className="rounded-xl border border-line bg-surface p-7">
          <h2 className="font-display text-2xl text-ink">Service times</h2>
          <ul className="mt-5 space-y-4">
            {churchConfig.serviceTimes.map((service) => (
              <li key={`${service.label}-${service.time}`}>
                <p className="font-semibold text-ink">{service.label}</p>
                <p className="text-muted">{service.time}</p>
                {service.note ? (
                  <p className="text-sm text-muted">{service.note}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-line bg-accent-soft/40 p-7">
          <h2 className="font-display text-2xl text-ink">Location</h2>
          <p className="mt-4 text-muted">{formatAddress()}</p>
          <a
            href={churchConfig.address.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Open in Maps
          </a>
          <p className="mt-6 text-sm text-muted">
            Add parking, entrance, and kids check-in notes here for first-time
            guests.
          </p>
        </div>
      </section>
    </>
  );
}
