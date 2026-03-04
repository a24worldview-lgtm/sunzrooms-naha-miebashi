"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { translations as t } from "@/lib/i18n";

const navLinks = [
  { href: "/", key: "home" as const },
  { href: "/rooms", key: "rooms" as const },
  { href: "/booking", key: "booking" as const },
  { href: "/access", key: "access" as const },
];

const languages = [
  { code: "ja" as const, label: "JP" },
  { code: "en" as const, label: "EN" },
  { code: "zh-cn" as const, label: "简" },
  { code: "zh-tw" as const, label: "繁" },
  { code: "ko" as const, label: "KO" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
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
        <Link
          href="/"
          className="flex flex-col leading-none tracking-wider"
          aria-label="SUNZ ROOMS. ホーム"
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
              {t.nav[link.key][locale]}
            </Link>
          ))}

          <div className="flex items-center gap-1 rounded-full border border-border/30 bg-card/20 px-1 py-0.5 backdrop-blur-sm">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLocale(lang.code)}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[11px] tracking-wide transition-all duration-200",
                  locale === lang.code
                    ? "bg-primary text-primary-foreground"
                    : useTransparent
                      ? "text-primary-foreground/60 hover:text-primary-foreground"
                      : "text-charcoal/60 hover:text-charcoal"
                )}
                aria-label={`言語を${lang.label}に切替`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

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
              {t.nav[link.key][locale]}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLocale(lang.code)}
                className={cn(
                  "rounded-full px-3 py-1 text-xs tracking-wide transition-all",
                  locale === lang.code
                    ? "bg-primary text-primary-foreground"
                    : "text-charcoal/60 bg-secondary"
                )}
                aria-label={`言語を${lang.label}に切替`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
