import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink } from "@/components/EmailLink";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

const title = "Privacy Policy | Journey Digital";
const description =
  "How Journey Digital collects and uses contact form and support email information, including owner SMS alerts for new inquiries.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: `${SITE_URL}/privacy`, type: "website" },
};

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      lede="This page explains what information Journey Digital collects when you use journeydigital.ai or contact the studio, and how that information is used. Effective Date: September 12, 2026. Last updated September 12, 2026."
      related={[{ href: "/terms", label: "Terms of Service" }, { href: "/about", label: "About Journey Digital" }]}
    >

      <h2>Who we are</h2>
      <p>Journey Digital is a church website studio based in Wilson, North Carolina. This policy applies to the Journey Digital website at <a href="https://journeydigital.ai">journeydigital.ai</a> and to Journey Digital support and sales email (<EmailLink>{CONTACT_EMAIL}</EmailLink>).</p>

      <h2>Information we collect</h2>
      <p>When you use the contact form on this site, we collect the information you submit. That typically includes:</p>
      <ul>
        <li>Your name</li>
        <li>Church or organization name</li>
        <li>Email address</li>
        <li>Phone number, if you choose to provide one</li>
        <li>Your message, including optional notes about what you are hoping for</li>
      </ul>
      <p>If you write the studio by email instead of the form, we collect whatever you send — typically your name, email address, and message. We may also receive standard technical information from our hosting provider, such as IP address, browser type, and pages requested, to operate and secure the site.</p>

      <h2>How we use this information</h2>
      <p>We use inquiry information to respond to you, keep a record of the request, and operate the studio. We do not sell your information. We do not use contact form or support email submissions to send marketing text messages to you.</p>

      <h2>SMS notifications to the business owner</h2>
      <p>Journey Digital website contact forms and Journey Digital support or sales email may notify the business owner by SMS with lead details — such as name, church or organization, email address, and a short excerpt of the message — so the studio can follow up. These are owner-alerts only. They are not marketing texts to site visitors.</p>
      <p>Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent are excluded from all information sharing with third parties.</p>

      <h2>Email notifications</h2>
      <p>The same inquiry may also be sent to Journey Digital support inboxes so we can reply by email. If you write us, we may reply from <EmailLink>{CONTACT_EMAIL}</EmailLink> or another studio address.</p>

      <h2>Service providers</h2>
      <p>We use service providers to host the website, send email, and deliver the owner SMS alert. Those providers process information only as needed to provide those services.</p>

      <h2>How long we keep information</h2>
      <p>We keep inquiry records as long as needed to respond, follow up, and maintain ordinary business records. You may ask us to update or delete information we hold about you.</p>

      <h2>Privacy requests</h2>
      <p>To ask what information we have, request a correction or deletion, or ask a question about this policy, email <EmailLink>{CONTACT_EMAIL}</EmailLink>.</p>

      <h2>Children</h2>
      <p>This site is for churches and other organizations considering a website. It is not directed at children, and we do not knowingly collect personal information from children.</p>

      <h2>Changes</h2>
      <p>We may update this policy when our practices change. The updated page will be posted at <Link href="/privacy">journeydigital.ai/privacy</Link> with a new “last updated” date.</p>

      <h2>Contact</h2>
      <p>Journey Digital · Wilson, North Carolina · <EmailLink>{CONTACT_EMAIL}</EmailLink></p>
    
    </LegalPage>
  );
}
