import type { ReactNode } from "react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export function EmailLink({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={CONTACT_MAILTO} className={className}>
      {children ?? CONTACT_EMAIL}
    </a>
  );
}
