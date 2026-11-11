import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { GoatCounter } from "@/components/GoatCounter";
import "./globals.css";

// Self-hosted so `next build` (Turbopack) does not fetch Google Fonts.
// next/font/google flakes on extensionless kit URLs (vercel/next.js#99114).
const sans = localFont({
  src: "./fonts/dm-sans-latin-wght-normal.woff2",
  variable: "--font-jd-sans",
  weight: "400 700",
  display: "swap",
});

const serif = localFont({
  src: "./fonts/source-serif-4-latin-wght-normal.woff2",
  variable: "--font-jd-serif",
  weight: "500 700",
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
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full`}>
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
