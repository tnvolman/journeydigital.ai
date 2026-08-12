import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tabernacle preview (draft) — Journey Digital",
  description:
    "Internal draft/preview notes for a project underway with Tabernacle Baptist Church (Wilson, NC). Not a published case study.",
  robots: { index: false, follow: false },
};

export default function TabernacleWorkPage() {
  return (
    <main className="min-h-screen bg-bg px-6 py-24 text-silver md:px-8">
      <div className="mx-auto max-w-[720px]">
        <Link
          href="/#work"
          className="text-sm tracking-[0.08em] text-fog uppercase transition-colors hover:text-cream"
        >
          ← Back to work
        </Link>

        <div className="mt-10 flex items-center gap-3">
          <Image
            src="/brand/journeydigital_mark.png"
            alt=""
            width={28}
            height={28}
          />
          <span className="text-xs font-semibold tracking-[0.18em] text-cream uppercase">
            Journey Digital
          </span>
        </div>

        <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Draft · Preview in progress · Not a published case study
        </p>
        <h1 className="mt-4 font-serif text-[clamp(36px,5vw,52px)] leading-[1.1] font-semibold tracking-[-0.02em] text-cream">
          Tabernacle Baptist Church
        </h1>
        <p className="mt-5 text-lg text-fog">
          Wilson, North Carolina — first project underway for Journey Digital.
          This page is a gated draft placeholder while the preview takes shape.
          It is not a finished engagement or shipped portfolio piece.
        </p>

        <div className="mt-10 rounded-md border border-line bg-bg-2 p-6 text-[15px] text-fog">
          <p className="font-semibold tracking-[0.04em] text-silver">
            Status: preview in progress
          </p>
          <p className="mt-2">
            Full case study content will land only after there is a clear
            go-ahead. Until then, point visitors to a consultation if they want
            to hear about the direction of the work — or start from the generic
            starter in <code className="text-cream">templates/church-kit</code>.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/#contact"
            className="inline-flex bg-accent px-6 py-3.5 text-[15px] font-semibold text-[#141414] transition hover:bg-cream"
          >
            Request a consultation
          </Link>
          <Link
            href="/#work"
            className="inline-flex border border-line px-6 py-3.5 text-[15px] font-semibold text-cream transition hover:border-fog"
          >
            Back to selected work
          </Link>
        </div>
      </div>
    </main>
  );
}
