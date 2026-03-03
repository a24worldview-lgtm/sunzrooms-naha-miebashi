"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/rooms", label: "お部屋" },
  { href: "/booking", label: "ご予約" },
  { href: "/access", label: "アクセス" },
];

const languages = ["JP", "EN", "ZH", "KO"];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("JP");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  // On non-home pages, always use light background for readability
  const useTransparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        useTransparent
          ? "bg-charcoal/30 backdrop-blur-sm"
          : "bg-cream/95 backdrop-blur-md shadow-sm"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-none tracking-wider"
          aria-label="SUNZROOMS ホーム"
        >
          <span
            className={cn(
              "text-xl font-bold tracking-[0.15em] transition-colors duration-300",
              useTransparent ? "text-primary-foreground" : "text-charcoal"
            )}
          >
            SUNZ ROOMS.
          </span>
          <span
            className={cn(
              "text-[10px] tracking-[0.2em] transition-colors duration-300",
              useTransparent ? "text-primary-foreground/70" : "text-muted-foreground"
            )}
          >
            naha miebashi
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wide transition-colors duration-200",
                pathname === link.href
                  ? useTransparent
                    ? "text-primary-foreground font-medium"
                    : "text-primary font-medium"
                  : useTransparent
                    ? "text-primary-foreground/70 hover:text-primary-foreground"
                    : "text-charcoal/70 hover:text-charcoal"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-1 rounded-full border border-border/30 bg-card/20 px-1 py-0.5 backdrop-blur-sm">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[11px] tracking-wide transition-all duration-200",
                  activeLang === lang
                    ? "bg-primary text-primary-foreground"
                    : useTransparent
                      ? "text-primary-foreground/60 hover:text-primary-foreground"
                      : "text-charcoal/60 hover:text-charcoal"
                )}
                aria-label={`言語を${lang}に切替`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className={cn(
            "md:hidden transition-colors",
            useTransparent ? "text-primary-foreground" : "text-charcoal"
          )}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-cream/95 px-5 pb-6 pt-2 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block py-3 text-base tracking-wide border-b border-border/40",
                pathname === link.href
                  ? "text-primary font-medium"
                  : "text-charcoal/70"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={cn(
                  "rounded-full px-3 py-1 text-xs tracking-wide transition-all",
                  activeLang === lang
                    ? "bg-primary text-primary-foreground"
                    : "text-charcoal/60 bg-secondary"
                )}
                aria-label={`言語を${lang}に切替`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
