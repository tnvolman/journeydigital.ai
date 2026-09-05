import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import { GoatCounter } from "@/components/GoatCounter";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-jd-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const serif = Source_Serif_4({
  variable: "--font-jd-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Church Website Design — Journey Digital | Wilson, NC",
  description:
    "Journey Digital is an independent church web studio in Wilson, NC — a beachhead for eastern North Carolina. Fast, mobile-first, custom websites for churches and ministries.",
  metadataBase: new URL("https://journeydigital.ai"),
  openGraph: {
    title: "Church Website Design — Journey Digital | Wilson, NC",
    description:
      "An independent church web studio in Wilson, NC. Agency-grade craft, priced to serve ministry.",
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
