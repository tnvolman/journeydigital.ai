import { EmailLink } from "@/components/EmailLink";
import { CONTACT_EMAIL } from "@/lib/site";
import Link from "next/link";

export function PricingCare({ className }: { className?: string }) {
  return (
    <p className={className}>
      And if $2,000 is more than your church can put toward it right now, still
      write us at{" "}
      <EmailLink className="text-cream underline decoration-line underline-offset-2 transition-colors hover:decoration-accent">
        {CONTACT_EMAIL}
      </EmailLink>{" "}
      or{" "}
      <Link
        href="#contact"
        className="text-cream underline decoration-line underline-offset-2 transition-colors hover:decoration-accent"
      >
        request a consultation
      </Link>
      . We would rather hear from you than have a pastor stay quiet because the
      number felt too big. We will tell you honestly what we can work out.
    </p>
  );
}
