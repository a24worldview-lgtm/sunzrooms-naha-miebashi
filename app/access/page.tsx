import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Train, MapPin, PersonStanding, Plane } from "lucide-react";

export const metadata: Metadata = {
  title: "アクセス・周辺情報 — SUNZ ROOMS. | 美栄橋駅 徒歩約1分",
  description:
    "SUNZROOMSは沖縄・那覇の美栄橋駅から徒歩約1分。国際通り、牧志公設市場、とまりんフェリーターミナルへも好アクセス。",
};

const nearbySpots = [
  { name: "最寄りのコンビニ", time: "徒歩1分" },
  { name: "国際通り", time: "徒歩8分" },
  { name: "ドン・キホーテ国際通り店", time: "徒歩9分" },
  { name: "牧志公設市場", time: "徒歩11分" },
  { name: "とまりん（泊港・離島フェリーターミナル）", time: "徒歩9分" },
];

export default function AccessPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Page hero */}
        <section className="bg-secondary/30 pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
                Access
              </p>
              <h1 className="mt-2 text-3xl font-light text-charcoal md:text-4xl lg:text-5xl">
                アクセス・周辺情報
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
                那覇の中心に位置し、観光・ショッピング・離島へのアクセスも抜群です。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Main station highlight */}
        <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-24">
          <ScrollReveal>
            <div className="rounded-3xl border border-border bg-card p-8 text-center md:p-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Train size={28} className="text-primary" />
              </div>
              <h2 className="mt-6 text-3xl font-medium text-charcoal md:text-4xl lg:text-5xl">
                美栄橋駅
              </h2>
              <p className="mt-2 text-lg text-muted-foreground md:text-xl">
                ゆいレール
              </p>
              <div className="mx-auto mt-6 h-px w-16 bg-border" />
              <p className="mt-6 text-4xl font-bold tracking-tight text-primary md:text-5xl">
                徒歩約1分
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Miebashi Station (Yui Rail) — approx. 1 min walk
              </p>
            </div>
          </ScrollReveal>

          {/* Airport access */}
          <ScrollReveal delay={200}>
            <div className="mt-8 flex items-center justify-center gap-4 rounded-2xl border border-border bg-card px-6 py-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/20">
                <Plane size={22} className="text-charcoal" />
              </div>
              <div className="text-left">
                <p className="text-lg font-medium text-charcoal">
                  那覇空港
                </p>
                <p className="text-sm text-muted-foreground">
                  ゆいレールで約16分
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground/70">
                  Naha Airport — approx. 16 min by Yui Rail
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Google Maps embed */}
        <section className="border-t border-border bg-secondary/20 px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-2 text-charcoal">
                <MapPin size={18} className="text-primary" />
                <h2 className="text-xl font-medium">
                  地図
                </h2>
                <span className="text-sm text-muted-foreground">Map</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.286651249736!2d127.68239937701941!3d26.219873977067053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5698216554677%3A0x6cf73e73fea94777!2sSUNZ%20ROOMS.-naha%20miebashi-!5e0!3m2!1sja!2sjp!4v1772596005041!5m2!1sja!2sjp"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SUNZROOMS 地図"
                  className="w-full"
                />
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                沖縄県那覇市美栄橋
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Nearby spots */}
        <section className="px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-center text-2xl font-light text-charcoal md:text-3xl">
                周辺スポット
              </h2>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                Neighborhood
              </p>
            </ScrollReveal>

            <div className="mt-10 flex flex-col gap-3">
              {nearbySpots.map((spot, i) => (
                <ScrollReveal key={spot.name} delay={i * 80}>
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-shadow hover:shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/20">
                      <PersonStanding size={18} className="text-charcoal" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-charcoal">{spot.name}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {spot.time}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Footer note */}
            <ScrollReveal delay={500}>
              <div className="mt-12 rounded-2xl bg-secondary/50 px-6 py-5 text-center">
                <p className="text-base leading-relaxed text-charcoal">
                  那覇の中心に位置し、観光・ショッピング・離島へのアクセスも抜群です。
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Centrally located in Naha — perfect access to sightseeing, shopping, and island hopping.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
