import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { GoatCounter } from "@/components/GoatCounter";
import "./globals.css";

// Self-hosted latin variable cuts that next/font/google actually served on
// main 72a4115, so metrics and line breaks match. Official opsz+wght TTFs
// from google/fonts do not interpolate to those same advances. Identifiers
// must not be CSS generic families (`sans` / `serif`).
const dmSans = localFont({
  src: "./fonts/dmsans/DMSans-latin-wght.woff2",
  variable: "--font-jd-sans",
  weight: "100 1000",
  display: "swap",
});

const sourceSerif4 = localFont({
  src: "./fonts/sourceserif4/SourceSerif4-latin-wght.woff2",
  variable: "--font-jd-serif",
  weight: "200 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Church Website Design — Journey Digital | Wilson, NC",
  description:
    "Journey Digital is a small, owner-run church web studio in Wilson, NC — a beachhead for eastern North Carolina. Fast, mobile-first, custom websites for churches and ministries.",
  metadataBase: new URL("https://journeydigital.ai"),
  openGraph: {
    title: "Church Website Design — Journey Digital | Wilson, NC",
    description:
      "A small, owner-run church web studio in Wilson, NC. Agency-grade craft, priced to serve ministry.",
    url: "https://journeydigital.ai",
    siteName: "Journey Digital",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSerif4.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <GoatCounter />
        <Script
          data-goatcounter="https://journeydigital.goatcounter.com/count"
          src="//gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
