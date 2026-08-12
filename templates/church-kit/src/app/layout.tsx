import type { Metadata } from "next";
import { Literata, Source_Sans_3 } from "next/font/google";
import churchConfig from "../../church.config";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import "./globals.css";

const display = Literata({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: churchConfig.name,
    template: `%s · ${churchConfig.shortName}`,
  },
  description: churchConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { colors } = churchConfig;

  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <style>{`:root{
          --background:${colors.background};
          --surface:${colors.surface};
          --ink:${colors.ink};
          --muted:${colors.muted};
          --accent:${colors.accent};
          --accent-soft:${colors.accentSoft};
        }`}</style>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
