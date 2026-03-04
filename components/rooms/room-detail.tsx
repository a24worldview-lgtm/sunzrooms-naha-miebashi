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
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

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
}

const amenityIcons: Record<string, React.ReactNode> = {
  キッチン: <UtensilsCrossed size={16} />,
  "Wi-Fi": <Wifi size={16} />,
  エアコン: <AirVent size={16} />,
  テレビ: <Tv size={16} />,
  洗濯乾燥機: <WashingMachine size={16} />,
  電子レンジ: <Microwave size={16} />,
  ドライヤー: <Wind size={16} />,
  電気ケトル: <CupSoda size={16} />,
};

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
}: RoomDetailProps) {
  const amenities = ["キッチン", "Wi-Fi", "エアコン", "テレビ", "洗濯機", "電子レンジ", "ドライヤー", "電気ケトル"];

  return (
    <div id={id} className="scroll-mt-24 py-16 first:pt-0 lg:py-24">
      <div
        className={`flex flex-col gap-8 lg:gap-12 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >
        {/* Image */}
        <ScrollReveal className="flex-1">
          <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl">
            <div className="aspect-[4/3] lg:aspect-[3/2]">
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floor badge */}
            <div className="absolute left-5 top-5 rounded-full bg-card/90 px-4 py-2 backdrop-blur-sm">
              <span className="text-lg font-bold tracking-wider text-charcoal">
                {floor}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Details */}
        <div className="flex flex-1 flex-col justify-center">
          <ScrollReveal delay={100}>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {tagline}
            </p>
            <h3 className="mt-3 text-2xl font-medium tracking-wide text-charcoal md:text-3xl">
              {roomName}
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          </ScrollReveal>

          {/* Specs grid */}
          <ScrollReveal delay={300}>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="flex flex-col items-center rounded-xl bg-secondary/50 p-3">
                <Maximize size={18} className="text-primary" />
                <span className="mt-1.5 text-sm font-medium text-charcoal">
                  {area}
                </span>
                <span className="text-[11px] text-muted-foreground">面積</span>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-secondary/50 p-3">
                <Users size={18} className="text-primary" />
                <span className="mt-1.5 text-sm font-medium text-charcoal">
                  {maxGuests}
                </span>
                <span className="text-[11px] text-muted-foreground">定員</span>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-secondary/50 p-3">
                <BedDouble size={18} className="text-primary" />
                <span className="mt-1.5 text-center text-sm font-medium text-charcoal">
                  {beds}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  ベッド
                </span>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-secondary/50 p-3">
                <Droplets size={18} className="text-primary" />
                <span className="mt-1.5 text-sm font-medium text-charcoal">
                  {baths}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  シャワールーム
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Features */}
          <ScrollReveal delay={400}>
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-widest text-charcoal">
                特徴
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full bg-sage/20 px-3 py-1 text-xs text-charcoal"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Amenities */}
          <ScrollReveal delay={450}>
            <div className="mt-5">
              <p className="text-xs font-medium uppercase tracking-widest text-charcoal">
                設備・アメニティ
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                {amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground"
                  >
                    {amenityIcons[amenity] || null}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={500}>
            <a
              href={airbnbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-wood-dark hover:shadow-lg"
            >
              この部屋を予約する
            </a>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
