import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { EmailLink } from "@/components/EmailLink";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

const title = "Contact Journey Digital | Wilson, NC church web studio";
const description =
  "Email hello@journeydigital.ai or request a free consultation. Journey Digital is an independent church web studio in Wilson, North Carolina.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="border-b border-line px-6 pt-[140px] pb-[60px] md:px-8">
          <div className="mx-auto max-w-[1140px]">
            <div className="mb-5 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Contact
            </div>
            <h1 className="mb-5 max-w-[18ch] font-serif text-[clamp(32px,4.8vw,60px)] leading-[1.08] font-semibold tracking-[-0.03em] text-cream">
              Write the studio.
            </h1>
            <p className="max-w-[54ch] text-lg text-fog">
              Journey Digital is an independent church web studio in Wilson,
              North Carolina. Email is the fastest path. The consultation form
              is here if you would rather send details that way.
            </p>
          </div>
        </header>

        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-[1140px]">
            <Reveal>
              <div className="rounded-md border border-line bg-bg-2 px-8 py-10 md:px-11">
                <div className="mb-4 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                  Email the studio
                </div>
                <p className="max-w-[62ch] text-[17px] leading-[1.78] text-silver">
                  <EmailLink className="text-cream underline decoration-line underline-offset-2 transition-colors hover:decoration-accent">
                    {CONTACT_EMAIL}
                  </EmailLink>
                  . That is the public inbox — email only. We do not publish a
                  phone number. We reply within a day.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <ContactForm numbered={false} />
      </main>
      <Footer />
    </>
  );
}
