import Link from "next/link";
import { Users, Maximize, Bath } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const floors = [
  {
    id: "1f",
    label: "1F",
    room: "Room 101",
    area: "32㎡",
    guests: "最大4名",
    beds: "4ベッド",
    baths: "シャワールーム1",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_1F_260227_4-UMKNCxJOSwNgQNfzni2FSHUkMOJUtr.jpg",
    alt: "1Fダイニング：アーチ型ロフト、ラタンチェア、丸い木製テーブル",
    tagline: "親密で温かい空間",
  },
  {
    id: "2f",
    label: "2F",
    room: "Room 201",
    area: "55㎡",
    guests: "最大7名",
    beds: "4ベッド+布団3組",
    baths: "シャワールーム2",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_2F_260227_2-1funoM26icrUeEyzEgsgJGr4yoGGCS.jpg",
    alt: "2F寝室：竹のペンダントライト、木のプラットフォームベッド、ロフトエリア",
    tagline: "広々と寛げる空間",
  },
  {
    id: "3f",
    label: "3F",
    room: "Room 301",
    area: "57㎡",
    guests: "最大8名",
    beds: "8ベッド",
    baths: "シャワールーム2",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_3F_260227_6-F6RLezSvon04lilhUopEarktSlv8aM.jpg",
    alt: "3Fダイニング：ラタンペンダントライト、丸テーブル、編み込みチェア",
    tagline: "賑やかで楽しい空間",
  },
];

export function FloorCardsSection() {
  return (
    <section
      className="bg-secondary/30 px-5 py-24 lg:px-8 lg:py-32"
      aria-labelledby="floors-heading"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Our Spaces
          </p>
          <h2
            id="floors-heading"
            className="mt-2 text-center text-2xl font-light text-charcoal md:text-3xl"
          >
            お部屋
          </h2>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            3フロア、3つの異なる世界
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {floors.map((floor, i) => (
            <ScrollReveal key={floor.id} delay={i * 150}>
              <Link
                href={`/rooms#${floor.id}`}
                className="group block overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={floor.image}
                    alt={floor.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 transition-opacity duration-300 group-hover:opacity-0" />
                  {/* Floor badge */}
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-card/90 backdrop-blur-sm">
                    <span className="text-sm font-bold tracking-wider text-charcoal">
                      {floor.label}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-medium text-charcoal">
                      {floor.room}
                    </h3>
                    <span className="text-xs tracking-wide text-muted-foreground">
                      {floor.tagline}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Maximize size={14} />
                      <span>{floor.area}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Users size={14} />
                      <span>{floor.guests}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Bath size={14} />
                      <span>{floor.baths}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-wood-dark">
                    詳細を見る
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform group-hover:translate-x-1"
                    >
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
