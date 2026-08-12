import type { Metadata } from "next";
import churchConfig, { formatAddress } from "../../../church.config";
import { PageHero } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${churchConfig.name}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        lead="Reach the church office by phone or email. Add a form later if the church wants inbox automation."
      />
      <section className="shell grid gap-4 pb-16 md:grid-cols-3">
        <div className="rounded-xl border border-line bg-surface p-6">
          <h2 className="font-display text-xl text-ink">Phone</h2>
          <a
            href={`tel:${churchConfig.contact.phone}`}
            className="mt-3 block text-muted hover:text-ink"
          >
            {churchConfig.contact.phone}
          </a>
        </div>
        <div className="rounded-xl border border-line bg-surface p-6">
          <h2 className="font-display text-xl text-ink">Email</h2>
          <a
            href={`mailto:${churchConfig.contact.email}`}
            className="mt-3 block text-muted hover:text-ink"
          >
            {churchConfig.contact.email}
          </a>
        </div>
        <div className="rounded-xl border border-line bg-surface p-6">
          <h2 className="font-display text-xl text-ink">Address</h2>
          <p className="mt-3 text-muted">{formatAddress()}</p>
        </div>
      </section>
    </>
  );
}
