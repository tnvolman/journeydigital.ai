"use client";

import { useState } from "react";
import { church } from "@/lib/church";

/** Nav order mirrors reference HTML IA (genericized labels). */
const links = [
  { href: church.watchOnlineUrl, label: "Watch Online" },
  { href: "#sermons", label: "Sermons" },
  { href: "#connect", label: "Connect" },
  { href: "#ministries", label: "Ministries" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur">
      <div className="shell flex items-center justify-between gap-4 py-3.5">
        <a href="#top" className="font-serif text-lg font-semibold text-navy">
          {church.shortName}
        </a>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-ink lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-gold">
              {link.label}
            </a>
          ))}
          <a
            href="#visit"
            className="rounded-sm bg-navy px-4 py-2 text-ivory transition hover:bg-navy-deep"
          >
            Plan a Visit
          </a>
        </nav>

        <button
          type="button"
          className="border border-line px-3 py-2 text-xs font-bold tracking-[0.12em] text-navy uppercase lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-ivory px-5 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-3 text-sm font-semibold text-ink">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#visit"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex w-fit bg-navy px-4 py-2 text-ivory"
            >
              Plan a Visit
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
