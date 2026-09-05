export const SITE_URL = "https://journeydigital.ai";

/** Public, email-only studio inbox. Do not invent a phone number. */
export const CONTACT_EMAIL = "hello@journeydigital.ai";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

/** The one pastoral-safe AI line. Use this wording — do not invent variants. */
export const PASTORAL_AI =
  "AI accelerates the work. A human still owns design judgment, theology-sensitive copy, and launch.";

export const studioPages = [
  { href: "/about", label: "About" },
  { href: "/wilson-nc-church-websites", label: "Wilson church websites" },
  {
    href: "/church-website-not-a-template",
    label: "Custom, not a template",
  },
  { href: "/contact", label: "Contact" },
] as const;
