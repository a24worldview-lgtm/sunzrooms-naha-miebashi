import { ScrollReveal } from "@/components/scroll-reveal";

export function ConceptSection() {
  return (
    <section
      id="concept"
      className="mx-auto max-w-4xl px-5 py-24 text-center lg:px-8 lg:py-32"
      aria-labelledby="concept-heading"
    >
      <ScrollReveal>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
          コンセプト
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <h2
          id="concept-heading"
          className="mt-8 text-balance text-3xl font-light leading-relaxed text-charcoal md:text-4xl lg:text-5xl"
        >
          暮らすように、泊まる。
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="mx-auto mt-10 max-w-2xl space-y-6">
          <p className="text-base leading-[2] text-muted-foreground md:text-lg">
            ただ泊まるだけの場所ではなく、
            <br />
            まるでこの街に暮らしているかのように過ごせる宿。
          </p>
          <p className="text-base leading-[2] text-muted-foreground md:text-lg">
            キッチンで朝ごはんをつくり、
            <br />
            お気に入りのカフェを見つけ、
            <br />
            夕暮れの街をふらりと歩く。
          </p>
          <p className="text-base leading-[2] text-muted-foreground md:text-lg">
            各フロアはすべて独立したプライベート空間。
            <br />
            {"自分たちだけの"沖縄の家"で、"}
            <br />
            自由きままな時間をお過ごしください。
          </p>
          <p className="text-base leading-[2] text-muted-foreground md:text-lg">
            美栄橋駅まで徒歩1分、国際通りまで徒歩8分。
            <br />
            離島へのフェリーが発着するとまりんまで、徒歩9分。
          </p>
          <p className="text-base font-medium leading-[2] text-charcoal md:text-lg">
            街歩きも、離島めぐりも、ぜんぶここから。
            <br />
            ここが、あなたの沖縄の拠点になる。
          </p>
        </div>
      </ScrollReveal>

      {/* Decorative arch divider */}
      <ScrollReveal delay={300}>
        <div className="mx-auto mt-12 flex justify-center">
          <div className="h-16 w-28 rounded-t-full border-2 border-b-0 border-secondary" />
        </div>
      </ScrollReveal>
    </section>
  );
}
