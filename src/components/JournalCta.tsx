import { EmailLink } from "@/components/EmailLink";
import { CONTACT_EMAIL } from "@/lib/site";
import Link from "next/link";

export function JournalCta() {
  return (
    <section className="border-t border-line bg-bg-2 py-20">
      <div className="mx-auto max-w-[480px] px-6 text-center md:px-8">
        <div className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
          Start a project
        </div>
        <h2 className="mb-[18px] font-serif text-[clamp(26px,3.5vw,42px)] leading-[1.08] font-semibold tracking-[-0.02em] text-cream">
          Ready to build your church&apos;s digital home?
        </h2>
        <p className="mb-8 text-[17px] text-fog">
          Tell us about your church. We&apos;ll reach out within a day — no
          pressure, no sales pitch. Or email {CONTACT_EMAIL}.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center bg-accent px-[30px] py-4 text-[15px] font-semibold text-[#141414] transition hover:-translate-y-0.5 hover:bg-cream"
          >
            Request a consultation
          </Link>
          <EmailLink className="inline-flex items-center border border-line px-[30px] py-4 text-[15px] font-semibold text-cream transition hover:-translate-y-0.5 hover:border-fog">
            Email the studio
          </EmailLink>
        </div>
      </div>
    </section>
  );
}
