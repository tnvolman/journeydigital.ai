import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
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
    "Journey Digital is a church website design studio in Wilson, NC. We build fast, mobile-first, custom websites for churches and ministries — made to be found.",
  metadataBase: new URL("https://journeydigital.ai"),
  openGraph: {
    title: "Church Website Design — Journey Digital | Wilson, NC",
    description:
      "Agency-grade craft for the Church — built with AI, priced to serve ministry.",
    url: "https://journeydigital.ai",
    siteName: "Journey Digital",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
