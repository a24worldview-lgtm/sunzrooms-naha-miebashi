"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { useLanguage } from "@/lib/language-context";
import { translations as t } from "@/lib/i18n";

export function ConceptSection() {
  const { locale } = useLanguage();

  const renderLines = (text: string) =>
    text.split("\n").map((line, i, arr) => (
      <span key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </span>
    ));

  return (
    <section
      id="concept"
      className="mx-auto max-w-4xl px-5 py-24 text-center lg:px-8 lg:py-32"
      aria-labelledby="concept-heading"
    >
      <ScrollReveal>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
          {t.concept.label[locale]}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <h2
          id="concept-heading"
          className="mt-8 text-balance text-3xl font-light leading-relaxed text-charcoal md:text-4xl lg:text-5xl"
        >
          {t.concept.heading[locale]}
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="mx-auto mt-10 max-w-2xl space-y-6">
          <p className="text-base leading-[2] text-muted-foreground md:text-lg">
            {renderLines(t.concept.p1[locale])}
          </p>
          <p className="text-base leading-[2] text-muted-foreground md:text-lg">
            {renderLines(t.concept.p2[locale])}
          </p>
          <p className="text-base leading-[2] text-muted-foreground md:text-lg">
            {renderLines(t.concept.p3[locale])}
          </p>
          <p className="text-base leading-[2] text-muted-foreground md:text-lg">
            {renderLines(t.concept.p4[locale])}
          </p>
          <p className="text-base font-medium leading-[2] text-charcoal md:text-lg">
            {renderLines(t.concept.p5[locale])}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <div className="mx-auto mt-12 flex justify-center">
          <div className="h-16 w-28 rounded-t-full border-2 border-b-0 border-secondary" />
        </div>
      </ScrollReveal>
    </section>
  );
}
