import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink } from "@/components/EmailLink";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

const title = "Terms of Service | Journey Digital";
const description =
  "Terms for using journeydigital.ai and sending Journey Digital a website inquiry.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: { title, description, url: `${SITE_URL}/terms`, type: "website" },
};

export default function Page() {
  return (
    <LegalPage
      title="Terms of Service"
      lede="These terms govern your use of journeydigital.ai and any inquiry you send Journey Digital through this site or our support email. Effective Date: September 12, 2026. Last updated September 12, 2026."
      related={[{ href: "/privacy", label: "Privacy Policy" }, { href: "/about", label: "About Journey Digital" }]}
    >

      <h2>Agreement</h2>
      <p>By using this website, you agree to these terms and to our <Link href="/privacy">Privacy Policy</Link>. If you do not agree, please do not use the site.</p>

      <h2>The website</h2>
      <p>Journey Digital is a church website studio. This site describes the studio and lets you contact us. Content is provided for general information. We may change or remove pages at any time.</p>

      <h2>Inquiries are not a contract</h2>
      <p>Submitting a Journey Digital website contact form or emailing Journey Digital support or sales (<EmailLink>{CONTACT_EMAIL}</EmailLink>) is a request to start a conversation. It does not create a project, engagement, or other agreement. Any work we do together will be confirmed separately in writing. We may decline an inquiry.</p>

      <h2>Your responsibilities</h2>
      <p>When you contact us, you agree that the information you provide is accurate to the best of your knowledge and that you are authorized to send it. Do not submit unlawful, harmful, or misleading content, or attempt to disrupt the site.</p>

      <h2>Intellectual property</h2>
      <p>The site’s design, text, and marks belong to Journey Digital unless otherwise noted. You may not copy or reuse them for another commercial site without permission. Scripture quotations, if shown, are from the King James Bible (1769), which is public domain.</p>

      <h2>No warranties</h2>
      <p>The site is provided as is. We do not warrant that it will be uninterrupted, error-free, or fit for a particular purpose. Information on the site is not legal, financial, or pastoral advice.</p>

      <h2>Limitation of liability</h2>
      <p>To the fullest extent permitted by law, Journey Digital is not liable for indirect, incidental, or consequential damages arising from your use of the site or from an inquiry you send. This does not limit liability that cannot be limited under applicable law.</p>

      <h2>Privacy and SMS alerts</h2>
      <p>Journey Digital website contact forms and Journey Digital support or sales email may notify the business owner by SMS with lead details. Those messages are owner-alerts only — not marketing texts to site visitors. How we handle that information is described in the <Link href="/privacy">Privacy Policy</Link>.</p>
      <p>Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent are excluded from all information sharing with third parties.</p>

      <h2>Changes</h2>
      <p>We may update these terms. The current version will be posted at <Link href="/terms">journeydigital.ai/terms</Link> with a new “last updated” date.</p>

      <h2>Contact</h2>
      <p>Journey Digital · Wilson, North Carolina · <EmailLink>{CONTACT_EMAIL}</EmailLink></p>
    
    </LegalPage>
  );
}
