import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { church } from "@/lib/church";
import "./globals.css";

const sans = Inter({
  variable: "--font-kit-sans",
  subsets: ["latin"],
});

const serif = Playfair_Display({
  variable: "--font-kit-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${church.name} — church website starter`,
  description: `${church.tagline} Mobile-first navy/gold church kit from Journey Digital (placeholder sample content).`,
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
