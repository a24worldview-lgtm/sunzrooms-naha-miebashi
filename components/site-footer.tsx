"use client";

import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations as t } from "@/lib/i18n";

export function SiteFooter() {
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-xl font-bold tracking-[0.15em] text-charcoal">
                SUNZ ROOMS.
              </p>
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground">
                naha miebashi
              </p>
            </div>
            <div className="flex items-start gap-1.5 text-sm text-muted-foreground">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>{t.footer.address[locale]}</span>
            </div>
            <a
              href="mailto:sunzrooms@gmail.com"
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-charcoal"
            >
              <Mail size={14} className="shrink-0" />
              <span>sunzrooms@gmail.com</span>
            </a>
            <p className="text-xs text-muted-foreground">
              A brand by SUNZ HOTELS.
            </p>
          </div>

          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium uppercase tracking-widest text-charcoal">
                {t.footer.navigation[locale]}
              </p>
              <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-charcoal">
                {t.nav.home[locale]}
              </Link>
              <Link href="/rooms" className="text-sm text-muted-foreground transition-colors hover:text-charcoal">
                {t.nav.rooms[locale]}
              </Link>
              <Link href="/booking" className="text-sm text-muted-foreground transition-colors hover:text-charcoal">
                {t.nav.booking[locale]}
              </Link>
              <Link href="/access" className="text-sm text-muted-foreground transition-colors hover:text-charcoal">
                {t.nav.access[locale]}
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium uppercase tracking-widest text-charcoal">
                {t.footer.bookingSites[locale]}
              </p>
              <a href="https://airbnb.jp/h/sunzrooms101" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-charcoal">
                Airbnb
              </a>
              <span className="text-sm text-muted-foreground/50">Booking.com</span>
              <span className="text-sm text-muted-foreground/50">Agoda</span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SUNZ ROOMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
