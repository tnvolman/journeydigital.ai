import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { church } from "@/lib/church";
import "./globals.css";

const sans = Source_Sans_3({
  variable: "--font-kit-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const serif = Libre_Baskerville({
  variable: "--font-kit-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: `${church.name} — placeholder church site`,
  description: `${church.tagline} Mobile-first church website starter from Journey Digital.`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
