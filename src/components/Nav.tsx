"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const onJournal = pathname === "/blog" || pathname.startsWith("/blog/");
  const onAbout = pathname === "/about";
  const onContact = pathname === "/contact";
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  // Close on route change
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Escape closes; Tab is trapped within toggle + menu while open
  useEffect(() => {
    if (!open) return;
    const firstLink = menuRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu(true);
        return;
      }
      if (e.key !== "Tab") return;
      const items = [
        toggleRef.current,
        ...Array.from(menuRef.current?.querySelectorAll<HTMLElement>("a") ?? []),
      ].filter(Boolean) as HTMLElement[];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      const idx = items.indexOf(document.activeElement as HTMLElement);
      if (e.shiftKey && (document.activeElement === first || idx === -1)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (document.activeElement === last || idx === -1)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeMenu]);

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
            const active =
              (link.href === "/blog" && onJournal) ||
              (link.href === "/about" && onAbout) ||
              (link.href === "/contact" && onContact);
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

        <div className="flex items-center gap-3">
        <Link
          href="/contact"
          className="hidden border border-line px-4 py-2.5 sm:inline-block text-[13px] tracking-[0.08em] text-cream uppercase transition-colors hover:border-accent hover:text-accent md:px-5"
        >
          Start a project
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-line text-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => (open ? closeMenu(false) : setOpen(true))}
        >
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span className={`absolute left-0 h-px w-5 bg-current transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-px w-5 bg-current ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-px w-5 bg-current transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="border-t border-line bg-[#111] px-6 pb-6 md:hidden"
      >
        <ul className="flex flex-col">
          {links.map((link) => (
            <li key={link.href} className="border-b border-line">
              <Link
                href={link.href}
                className="block py-4 text-[15px] tracking-[0.02em] text-cream"
                onClick={() => closeMenu(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
