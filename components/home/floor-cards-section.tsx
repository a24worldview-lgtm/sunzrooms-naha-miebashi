"use client";

import Link from "next/link";
import { Users, Maximize, Droplets } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useLanguage } from "@/lib/language-context";
import { translations as t } from "@/lib/i18n";

const floors = [
  {
    id: "1f",
    label: "1F",
    room: "Room 101",
    area: "32㎡",
    guestsNum: "4",
    baths: "1",
    taglineKey: "tagline1f" as const,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_1F_260227_4-UMKNCxJOSwNgQNfzni2FSHUkMOJUtr.jpg",
    alt: "1F interior",
  },
  {
    id: "2f",
    label: "2F",
    room: "Room 201",
    area: "55㎡",
    guestsNum: "7",
    baths: "2",
    taglineKey: "tagline2f" as const,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_2F_260227_2-1funoM26icrUeEyzEgsgJGr4yoGGCS.jpg",
    alt: "2F interior",
  },
  {
    id: "3f",
    label: "3F",
    room: "Room 301",
    area: "57㎡",
    guestsNum: "8",
    baths: "2",
    taglineKey: "tagline3f" as const,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_3F_260227_6-F6RLezSvon04lilhUopEarktSlv8aM.jpg",
    alt: "3F interior",
  },
];

export function FloorCardsSection() {
  const { locale } = useLanguage();

  return (
    <section
      className="bg-secondary/30 px-5 py-24 lg:px-8 lg:py-32"
      aria-labelledby="floors-heading"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-primary">
            {t.floors.sectionLabel[locale]}
          </p>
          <h2
            id="floors-heading"
            className="mt-2 text-center text-2xl font-light text-charcoal md:text-3xl"
          >
            {t.floors.sectionTitle[locale]}
          </h2>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            {t.floors.sectionSub[locale]}
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {floors.map((floor, i) => (
            <ScrollReveal key={floor.id} delay={i * 150}>
              <Link
                href={`/rooms#${floor.id}`}
                className="group block overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={floor.image}
                    alt={floor.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 transition-opacity duration-300 group-hover:opacity-0" />
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-card/90 backdrop-blur-sm">
                    <span className="text-sm font-bold tracking-wider text-charcoal">
                      {floor.label}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-medium text-charcoal">
                      {floor.room}
                    </h3>
                    <span className="text-xs tracking-wide text-muted-foreground">
                      {t.floors[floor.taglineKey][locale]}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Maximize size={14} />
                      <span>{floor.area}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Users size={14} />
                      <span>{t.floors.maxGuests[locale]}{floor.guestsNum}{t.floors.guests[locale]}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Droplets size={14} />
                      <span>{t.floors.showerRoom[locale]}{floor.baths}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-wood-dark">
                    {t.floors.viewDetails[locale]}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
