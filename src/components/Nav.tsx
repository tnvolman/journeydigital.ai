"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Journal" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const onJournal = pathname === "/blog" || pathname.startsWith("/blog/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[border-color,background] duration-300 ${
        scrolled
          ? "border-line bg-[rgba(17,17,17,0.88)] backdrop-blur-md"
          : "border-transparent bg-[rgba(17,17,17,0.72)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-[1140px] items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.18em] text-cream uppercase"
        >
          <Image
            src="/brand/journeydigital_mark.png"
            alt=""
            width={30}
            height={30}
            className="h-[30px] w-auto"
            priority
          />
          Journey Digital
        </Link>

        <div className="hidden items-center gap-9 text-[13.5px] tracking-[0.02em] text-fog md:flex">
          {links.map((link) => {
            const active = link.href === "/blog" && onJournal;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-cream ${
                  active ? "text-cream" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/#contact"
          className="border border-line px-4 py-2.5 text-[13px] tracking-[0.08em] text-cream uppercase transition-colors hover:border-accent hover:text-accent md:px-5"
        >
          Start a project
        </Link>
      </div>
    </nav>
  );
}
