import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/home/hero-section";
import { ConceptSection } from "@/components/home/concept-section";
import { FloorCardsSection } from "@/components/home/floor-cards-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ConceptSection />
        <FloorCardsSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
