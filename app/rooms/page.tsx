"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { RoomDetail } from "@/components/rooms/room-detail";
import { useLanguage } from "@/lib/language-context";
import { translations as t } from "@/lib/i18n";

export default function RoomsPage() {
  const { locale } = useLanguage();
  const rt = t.roomsPage;

  const rooms = [
    {
      id: "1f",
      floor: "1F",
      roomName: "Room 101",
      area: "32㎡",
      maxGuests: "4" + (locale === "ja" ? "名" : locale === "zh-cn" || locale === "zh-tw" ? "人" : locale === "ko" ? "명" : ""),
      beds: locale === "ja" ? "4ベッド" : locale === "zh-cn" || locale === "zh-tw" ? "4床" : locale === "ko" ? "4베드" : "4 beds",
      baths: "1",
      features: rt.room1f.features[locale],
      image: "/images/1f-dining.jpg",
      imageAlt: "Room 101 interior",
      airbnbLink: "https://airbnb.jp/h/sunzrooms101",
      tagline: rt.room1f.tagline[locale],
      description: rt.room1f.description[locale],
      reverse: false,
      gallery: [
        "/images/1f-loft-bed.jpg",
        "/images/1f-bedroom.jpg",
        "/images/1f-bathroom.jpg",
        "/images/1f-kitchen.jpg",
      ],
    },
    {
      id: "2f",
      floor: "2F",
      roomName: "Room 201",
      area: "55㎡",
      maxGuests: "7" + (locale === "ja" ? "名" : locale === "zh-cn" || locale === "zh-tw" ? "人" : locale === "ko" ? "명" : ""),
      beds: locale === "ja" ? "4ベッド+布団3組" : locale === "en" ? "4 beds + 3 futons" : locale === "zh-cn" ? "4床+3组被褥" : locale === "zh-tw" ? "4床+3組被褥" : "4베드+이불3조",
      baths: "2",
      features: rt.room2f.features[locale],
      image: "/images/2f-dining.jpg",
      imageAlt: "Room 201 interior",
      airbnbLink: "https://airbnb.jp/h/sunzrooms201",
      tagline: rt.room2f.tagline[locale],
      description: rt.room2f.description[locale],
      reverse: true,
      gallery: [
        "/images/2f-bedroom.jpg",
        "/images/2f-loft-bed.jpg",
        "/images/2f-kitchen.jpg",
        "/images/2f-tatami.jpg",
      ],
    },
    {
      id: "3f",
      floor: "3F",
      roomName: "Room 301",
      area: "57㎡",
      maxGuests: "8" + (locale === "ja" ? "名" : locale === "zh-cn" || locale === "zh-tw" ? "人" : locale === "ko" ? "명" : ""),
      beds: locale === "ja" ? "8ベッド" : locale === "zh-cn" || locale === "zh-tw" ? "8床" : locale === "ko" ? "8베드" : "8 beds",
      baths: "2",
      features: rt.room3f.features[locale],
      image: "/images/3f-dining.jpg",
      imageAlt: "Room 301 interior",
      airbnbLink: "https://airbnb.jp/h/sunzrooms301",
      tagline: rt.room3f.tagline[locale],
      description: rt.room3f.description[locale],
      reverse: false,
      gallery: [
        "/images/3f-bunkbed.jpg",
        "/images/3f-loft-bed.jpg",
        "/images/3f-bathroom.jpg",
        "/images/3f-living.jpg",
      ],
    },
  ];

  const renderLines = (text: string) =>
    text.split("\n").map((line, i, arr) => (
      <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
    ));

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-secondary/30 pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
                {rt.label[locale]}
              </p>
              <h1 className="mt-2 text-3xl font-light text-charcoal md:text-4xl lg:text-5xl">
                {rt.title[locale]}
              </h1>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                {rt.subtitle[locale]}
              </p>
              <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
                {renderLines(rt.description[locale])}
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          {rooms.map((room, index) => (
            <div key={room.id}>
              <RoomDetail {...room} />
              {index < rooms.length - 1 && (
                <div className="mx-auto my-4 h-px w-24 bg-border lg:my-8" />
              )}
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
