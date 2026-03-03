import Link from "next/link";
import { MapPin, Train } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CTASection() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h2
            id="cta-heading"
            className="text-balance text-2xl font-light text-charcoal md:text-3xl lg:text-4xl"
          >
            沖縄の旅が、ここから始まる。
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-wood-dark hover:shadow-lg"
            >
              ご予約はこちら
            </Link>
            <Link
              href="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-3.5 text-sm font-medium tracking-wide text-charcoal transition-all hover:bg-secondary"
            >
              お部屋を見る
            </Link>
          </div>
        </ScrollReveal>

        {/* Location teaser */}
        <ScrollReveal delay={400}>
          <div className="mx-auto mt-16 max-w-md rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-center gap-2 text-primary">
              <MapPin size={18} />
              <span className="text-sm font-medium tracking-wide">
                沖縄県那覇市・美栄橋
              </span>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-muted-foreground">
              <Train size={14} />
              <span className="text-sm">
                美栄橋駅（ゆいレール）より徒歩約1分
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
