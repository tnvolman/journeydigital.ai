"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[border-color,background-color] duration-300 ${
        scrolled
          ? "border-line bg-[rgba(17,17,17,0.86)] backdrop-blur-md"
          : "border-transparent bg-[rgba(17,17,17,0.72)] backdrop-blur-md"
      }`}
    >
      <div className="wrap flex h-[74px] items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.18em] text-ink uppercase"
        >
          <Image
            src="/journeydigital_mark.png"
            alt=""
            width={30}
            height={30}
            className="h-[30px] w-auto"
            priority
          />
          Journey Digital
        </a>

        <div className="hidden items-center gap-9 text-[13.5px] tracking-[0.02em] text-fog md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="border border-line px-4 py-2.5 text-[13px] tracking-[0.08em] text-ink uppercase transition-colors hover:border-accent hover:text-accent"
        >
          Start a project
        </a>
      </div>
    </nav>
  );
}
