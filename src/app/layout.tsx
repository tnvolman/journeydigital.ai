import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Karla({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Church Website Design — Journey Digital | Wilson, NC",
  description:
    "Journey Digital is a church website design studio in Wilson, NC. We build fast, mobile-first, custom websites for churches and ministries — made to be found.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://journeydigital.ai",
  ),
  openGraph: {
    title: "Journey Digital — Church Website Studio",
    description:
      "A website worth the welcome you give on Sunday. Custom AI-built church sites from $2,000.",
    url: "https://journeydigital.ai",
    siteName: "Journey Digital",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Journey Digital",
  description:
    "Church website design studio building custom, mobile-first websites for churches and ministries.",
  url: "https://journeydigital.ai",
  areaServed: "United States",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wilson",
    addressRegion: "NC",
    addressCountry: "US",
  },
  knowsAbout: [
    "church website design",
    "ministry website design",
    "church web development",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
