"use client";

import { useState } from "react";
import {
  Users,
  Maximize,
  Droplets,
  BedDouble,
  UtensilsCrossed,
  Wifi,
  AirVent,
  Tv,
  WashingMachine,
  Microwave,
  Wind,
  CupSoda,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useLanguage } from "@/lib/language-context";
import { translations as t } from "@/lib/i18n";

interface RoomDetailProps {
  id: string;
  floor: string;
  roomName: string;
  area: string;
  maxGuests: string;
  beds: string;
  baths: string;
  features: string[];
  image: string;
  imageAlt: string;
  airbnbLink: string;
  tagline: string;
  description: string;
  reverse?: boolean;
  gallery?: string[];
}

const amenityIcons: Record<string, React.ReactNode> = {
  キッチン: <UtensilsCrossed size={16} />,
  "Wi-Fi": <Wifi size={16} />,
  エアコン: <AirVent size={16} />,
  テレビ: <Tv size={16} />,
  洗濯機: <WashingMachine size={16} />,
  電子レンジ: <Microwave size={16} />,
  ドライヤー: <Wind size={16} />,
  電気ケトル: <CupSoda size={16} />,
};

const amenityKeys = ["キッチン", "Wi-Fi", "エアコン", "テレビ", "洗濯機", "電子レンジ", "ドライヤー", "電気ケトル"];

export function RoomDetail({
  id,
  floor,
  roomName,
  area,
  maxGuests,
  beds,
  baths,
  features,
  image,
  imageAlt,
  airbnbLink,
  tagline,
  description,
  reverse = false,
  gallery = [],
}: RoomDetailProps) {
  const { locale } = useLanguage();
  const rt = t.roomsPage;
  const [mainImage, setMainImage] = useState(image);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [image, ...gallery];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = () => setLightboxIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  const nextImage = () => setLightboxIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));

  return (
    <>
      <div id={id} className="scroll-mt-24 py-16 first:pt-0 lg:py-24">
        <div
          className={`flex flex-col gap-8 lg:gap-12 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
          <ScrollReveal className="flex-1">
            {/* Main image */}
            <div
              className="relative cursor-pointer overflow-hidden rounded-2xl lg:rounded-3xl"
              onClick={() => openLightbox(allImages.indexOf(mainImage))}
            >
              <div className="aspect-[4/3] lg:aspect-[3/2]">
                <img src={mainImage} alt={imageAlt} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="absolute left-5 top-5 rounded-full bg-card/90 px-4 py-2 backdrop-blur-sm">
                <span className="text-lg font-bold tracking-wider text-charcoal">{floor}</span>
              </div>
            </div>

            {/* Thumbnail gallery */}
            {gallery.length > 0 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
                <button
                  onClick={() => setMainImage(image)}
                  className={`flex-shrink-0 overflow-hidden rounded-lg transition-all ${mainImage === image ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"}`}
                >
                  <img src={image} alt={imageAlt} className="h-16 w-24 object-cover" />
                </button>
                {gallery.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setMainImage(src)}
                    className={`flex-shrink-0 overflow-hidden rounded-lg transition-all ${mainImage === src ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"}`}
                  >
                    <img src={src} alt={`${imageAlt} ${i + 2}`} className="h-16 w-24 object-cover" />
                  </button>
                ))}
              </div>
            )}
          </ScrollReveal>

          <div className="flex flex-1 flex-col justify-center">
            <ScrollReveal delay={100}>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">{tagline}</p>
              <h3 className="mt-3 text-2xl font-medium tracking-wide text-charcoal md:text-3xl">{roomName}</h3>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="flex flex-col items-center rounded-xl bg-secondary/50 p-3">
                  <Maximize size={18} className="text-primary" />
                  <span className="mt-1.5 text-sm font-medium text-charcoal">{area}</span>
                  <span className="text-[11px] text-muted-foreground">{rt.area[locale]}</span>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-secondary/50 p-3">
                  <Users size={18} className="text-primary" />
                  <span className="mt-1.5 text-sm font-medium text-charcoal">{maxGuests}</span>
                  <span className="text-[11px] text-muted-foreground">{rt.capacity[locale]}</span>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-secondary/50 p-3">
                  <BedDouble size={18} className="text-primary" />
                  <span className="mt-1.5 text-center text-sm font-medium text-charcoal">{beds}</span>
                  <span className="text-[11px] text-muted-foreground">{rt.beds[locale]}</span>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-secondary/50 p-3">
                  <Droplets size={18} className="text-primary" />
                  <span className="mt-1.5 text-sm font-medium text-charcoal">{baths}</span>
                  <span className="text-[11px] text-muted-foreground">{rt.showerRoom[locale]}</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-widest text-charcoal">{rt.features[locale]}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <li key={feature} className="rounded-full bg-sage/20 px-3 py-1 text-xs text-charcoal">{feature}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <div className="mt-5">
                <p className="text-xs font-medium uppercase tracking-widest text-charcoal">{rt.amenities[locale]}</p>
                <div className="mt-2 flex flex-wrap gap-3">
                  {amenityKeys.map((key) => (
                    <div key={key} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      {amenityIcons[key] || null}
                      <span>{rt.amenityNames[key as keyof typeof rt.amenityNames]?.[locale] ?? key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <a
                href={airbnbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-wood-dark hover:shadow-lg"
              >
                {rt.bookThis[locale]}
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft size={28} />
          </button>

          <img
            src={allImages[lightboxIndex]}
            alt={imageAlt}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-6 text-sm text-white/70">
            {lightboxIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </>
  );
}
