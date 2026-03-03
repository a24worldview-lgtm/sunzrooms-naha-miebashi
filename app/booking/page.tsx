import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "ご予約 — SUNZ ROOMS. | お好みのプラットフォームで予約",
  description:
    "Airbnb、Booking.com、楽天トラベル、じゃらん、ヤフートラベル、Agodaから、SUNZROOMSのご予約が可能です。",
};

const platforms = [
  {
    name: "Airbnb",
    url: "https://airbnb.jp/h/sunzrooms101",
    note: "世界標準の予約サイトで安心",
    color: "#FF5A5F",
    active: true,
    rooms: [
      { label: "1F — Room 101", url: "https://airbnb.jp/h/sunzrooms101" },
      { label: "2F — Room 201", url: "https://airbnb.jp/h/sunzrooms201" },
      { label: "3F — Room 301", url: "https://airbnb.jp/h/sunzrooms301" },
    ],
  },
  {
    name: "Booking.com",
    url: "https://www.booking.com",
    note: "世界中で利用される予約サイト",
    color: "#003580",
    active: false,
    rooms: null,
  },
  {
    name: "楽天トラベル",
    subtitle: "Rakuten Travel",
    url: "https://travel.rakuten.co.jp",
    note: "楽天ポイントが貯まる！",
    color: "#BF0000",
    active: false,
    rooms: null,
  },
  {
    name: "じゃらん",
    subtitle: "Jalan",
    url: "https://www.jalan.net",
    note: "国内旅行に大人気",
    color: "#FF6600",
    active: false,
    rooms: null,
  },
  {
    name: "ヤフートラベル",
    subtitle: "Yahoo Travel",
    url: "https://travel.yahoo.co.jp",
    note: "PayPayポイント対応",
    color: "#FF0033",
    active: false,
    rooms: null,
  },
  {
    name: "Agoda",
    url: "https://www.agoda.com",
    note: "アジアでお得な価格",
    color: "#5392F9",
    active: false,
    rooms: null,
  },
];

export default function BookingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Page hero */}
        <section className="bg-secondary/30 pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
                Reservations
              </p>
              <h1 className="mt-2 text-3xl font-light text-charcoal md:text-4xl lg:text-5xl">
                ご予約
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
                お好みの予約プラットフォームからご予約いただけます。
                各リンクからSUNZROOMSの掲載ページに直接アクセスできます。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Platform cards */}
        <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform, i) => (
              <ScrollReveal key={platform.name} delay={i * 80}>
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 ${platform.active ? "hover:shadow-lg" : "opacity-70"}`}
                >
                  {/* Coming soon badge */}
                  {!platform.active && (
                    <div className="absolute right-3 top-3 z-10 rounded-full bg-muted-foreground/10 px-3 py-1">
                      <span className="text-[11px] font-medium text-muted-foreground">
                        まもなく対応予定
                      </span>
                    </div>
                  )}

                  {/* Header with color accent */}
                  <div
                    className="flex items-center gap-3 px-5 py-4"
                    style={{
                      borderBottom: `3px solid ${platform.active ? platform.color : `${platform.color}60`}`,
                    }}
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-card"
                      style={{
                        backgroundColor: platform.active
                          ? platform.color
                          : `${platform.color}60`,
                      }}
                    >
                      {platform.name.charAt(0)}
                    </div>
                    <div>
                      <p
                        className={`font-medium ${platform.active ? "text-charcoal" : "text-muted-foreground"}`}
                      >
                        {platform.name}
                      </p>
                      {platform.subtitle && (
                        <p className="text-xs text-muted-foreground">
                          {platform.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-5 py-4">
                    {/* Note */}
                    <p className="text-sm text-muted-foreground">
                      {platform.note}
                    </p>

                    {/* Room links for Airbnb */}
                    {platform.rooms && platform.active && (
                      <div className="mt-4 flex flex-col gap-2">
                        {platform.rooms.map((room) => (
                          <a
                            key={room.label}
                            href={room.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2 text-sm text-charcoal transition-colors hover:bg-secondary"
                          >
                            <span className="tabular-nums">{room.label}</span>
                            <ExternalLink
                              size={13}
                              className="text-muted-foreground"
                            />
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Greyed out button for inactive platforms */}
                    {!platform.active && (
                      <div className="mt-auto pt-4">
                        <div className="flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-border/50 px-5 py-2.5 text-sm text-muted-foreground/60">
                          準備中
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Note */}
          <ScrollReveal delay={500}>
            <p className="mt-12 text-center text-sm text-muted-foreground">
              料金と空室状況はプラットフォームによって異なる場合があります。
              お得な料金を見つけるため、複数のサイトを比較されることをおすすめします。
            </p>
          </ScrollReveal>
        </section>

        {/* Direct room links */}
        <section className="border-t border-border bg-secondary/20 px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="text-center text-2xl font-light text-charcoal md:text-3xl">
                お部屋から予約する
              </h2>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Quick Links by Room
              </p>
            </ScrollReveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  floor: "1F",
                  room: "Room 101",
                  guests: "最大4名",
                  url: "https://airbnb.jp/h/sunzrooms101",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_1F_260227_4-UMKNCxJOSwNgQNfzni2FSHUkMOJUtr.jpg",
                },
                {
                  floor: "2F",
                  room: "Room 201",
                  guests: "最大7名",
                  url: "https://airbnb.jp/h/sunzrooms201",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_2F_260227_2-1funoM26icrUeEyzEgsgJGr4yoGGCS.jpg",
                },
                {
                  floor: "3F",
                  room: "Room 301",
                  guests: "最大8名",
                  url: "https://airbnb.jp/h/sunzrooms301",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_3F_260227_6-F6RLezSvon04lilhUopEarktSlv8aM.jpg",
                },
              ].map((room, i) => (
                <ScrollReveal key={room.floor} delay={i * 100}>
                  <a
                    href={room.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <img
                        src={room.image}
                        alt={`${room.room} の室内`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-charcoal/20 transition-opacity group-hover:opacity-0" />
                      <div className="absolute bottom-4 left-4 rounded-full bg-card/90 px-3 py-1 backdrop-blur-sm">
                        <span className="text-xs font-bold tracking-wider text-charcoal">
                          {room.floor}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="font-medium text-charcoal">{room.room}</p>
                      <p className="text-sm text-muted-foreground">
                        {room.guests}
                      </p>
                      <p className="mt-2 flex items-center gap-1 text-sm font-medium text-primary">
                        Airbnbで予約する
                        <ExternalLink size={13} />
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
