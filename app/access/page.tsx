"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Train, MapPin, PersonStanding, Plane } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations as t } from "@/lib/i18n";

export default function AccessPage() {
  const { locale } = useLanguage();
  const at = t.accessPage;
  const spots = at.spots[locale];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-secondary/30 pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">{at.label[locale]}</p>
              <h1 className="mt-2 text-3xl font-light text-charcoal md:text-4xl lg:text-5xl">{at.title[locale]}</h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">{at.subtitle[locale]}</p>
            </ScrollReveal>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-24">
          <ScrollReveal>
            <div className="rounded-3xl border border-border bg-card p-8 text-center md:p-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Train size={28} className="text-primary" />
              </div>
              <h2 className="mt-6 text-3xl font-medium text-charcoal md:text-4xl lg:text-5xl">{at.miebashiStation[locale]}</h2>
              <p className="mt-2 text-lg text-muted-foreground md:text-xl">{at.yuiRail[locale]}</p>
              <div className="mx-auto mt-6 h-px w-16 bg-border" />
              <p className="mt-6 text-4xl font-bold tracking-tight text-primary md:text-5xl">{at.walk1min[locale]}</p>
              <p className="mt-2 text-sm text-muted-foreground">{at.miebashiEn[locale]}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-8 flex items-center justify-center gap-4 rounded-2xl border border-border bg-card px-6 py-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/20">
                <Plane size={22} className="text-charcoal" />
              </div>
              <div className="text-left">
                <p className="text-lg font-medium text-charcoal">{at.airport[locale]}</p>
                <p className="text-sm text-muted-foreground">{at.airportTime[locale]}</p>
                <p className="mt-0.5 text-xs text-muted-foreground/70">{at.airportEn[locale]}</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="border-t border-border bg-secondary/20 px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-2 text-charcoal">
                <MapPin size={18} className="text-primary" />
                <h2 className="text-xl font-medium">{at.map[locale]}</h2>
                <span className="text-sm text-muted-foreground">{at.mapLabel[locale]}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.286651249736!2d127.68239937701941!3d26.219873977067053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5698216554677%3A0x6cf73e73fea94777!2sSUNZ%20ROOMS.-naha%20miebashi-!5e0!3m2!1sja!2sjp!4v1772596005041!5m2!1sja!2sjp"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SUNZ ROOMS. Map"
                  className="w-full"
                />
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">{at.mapNote[locale]}</p>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-center text-2xl font-light text-charcoal md:text-3xl">{at.nearby[locale]}</h2>
              <p className="mt-1 text-center text-sm text-muted-foreground">{at.nearbyEn[locale]}</p>
            </ScrollReveal>
            <div className="mt-10 flex flex-col gap-3">
              {spots.map((spot: { name: string; time: string }, i: number) => (
                <ScrollReveal key={spot.name} delay={i * 80}>
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-shadow hover:shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/20">
                      <PersonStanding size={18} className="text-charcoal" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-charcoal">{spot.name}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">{spot.time}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={500}>
              <div className="mt-12 rounded-2xl bg-secondary/50 px-6 py-5 text-center">
                <p className="text-base leading-relaxed text-charcoal">{at.footerNote[locale]}</p>
                <p className="mt-1 text-sm text-muted-foreground">{at.footerNoteEn[locale]}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
