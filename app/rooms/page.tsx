import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { RoomDetail } from "@/components/rooms/room-detail";

export const metadata: Metadata = {
  title: "お部屋 — SUNZROOMS. | 3フロア、3つのユニークな空間",
  description:
    "沖縄・那覇のSUNZROOMSの3つのユニークなフロアをご覧ください。各フロアは完全プライベートな自己完結型の居住空間です。",
};

const rooms = [
  {
    id: "1f",
    floor: "1F",
    roomName: "Room 101",
    area: "32㎡",
    maxGuests: "4名",
    beds: "4ベッド",
    baths: "1",
    features: [
      "アーチ型ロフト",
      "ラタンダイニングセット",
      "円形ラグ",
      "アーティザンペンダントライト",
      "キッチン付き",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_1F_260227_4-UMKNCxJOSwNgQNfzni2FSHUkMOJUtr.jpg",
    imageAlt:
      "1Fダイニング：アーチ型ロフト寝室エリア、丸い木製テーブルを囲むラタンチェア、アーティザンペンダントライト",
    airbnbLink: "https://airbnb.jp/h/sunzrooms101",
    tagline: "Intimate & Artisan",
    description:
      "美しいアーチ型のロフト寝室エリアを中心に据えた、居心地の良い1階のお部屋。ラタンのダイニングセットと円形ラグが温かみのある空間を生み出し、アーティザンペンダントライトがエクレクティックなアクセントを加えます。カップルや小さなご家族に最適な、ユニークで親密な沖縄体験をお届けします。",
    reverse: false,
  },
  {
    id: "2f",
    floor: "2F",
    roomName: "Room 201",
    area: "55㎡",
    maxGuests: "7名",
    beds: "4ベッド+布団3組",
    baths: "2",
    features: [
      "竹ペンダントライト",
      "木製プラットフォームベッド",
      "階段付きロフト",
      "木製スラットパーティション",
      "間接照明",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_2F_260227_2-1funoM26icrUeEyzEgsgJGr4yoGGCS.jpg",
    imageAlt:
      "2F寝室：迫力のある竹ペンダントライト、木製プラットフォームベッド、ロフトエリア、温かみのある間接照明",
    airbnbLink: "https://airbnb.jp/h/sunzrooms201",
    tagline: "Spacious & Warm",
    description:
      "2階全体に広がる最大の居住空間。迫力のある竹のペンダントライトと木製プラットフォームベッドが印象的です。階段付きのロフトエリアが追加の寝室空間を提供し、木製スラットのパーティションが開放感を損なわずに空間をやさしく仕切ります。ご家族やグループでのご利用に最適です。",
    reverse: true,
  },
  {
    id: "3f",
    floor: "3F",
    roomName: "Room 301",
    area: "57㎡",
    maxGuests: "8名",
    beds: "8ベッド",
    baths: "2",
    features: [
      "ラタンケーンペンダント",
      "丸型ダイニングテーブル",
      "編み込みチェア",
      "ラタンミラー",
      "モダンブラインド",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_3F_260227_6-F6RLezSvon04lilhUopEarktSlv8aM.jpg",
    imageAlt:
      "3Fダイニング：エレガントなラタンペンダントライト、食事用にセットされた丸テーブル、編み込みチェア、ラタンミラー",
    airbnbLink: "https://airbnb.jp/h/sunzrooms301",
    tagline: "Lively & Inviting",
    description:
      "最上階は集いの場としてデザインされました。美しい丸型ダイニングテーブルを編み込みチェアが囲み、その上には見事なラタンケーンのペンダントライトが輝きます。8ベッドと最大の床面積を誇り、那覇を一緒に楽しむ大人数グループの拠点として最適です。",
    reverse: false,
  },
];

export default function RoomsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Page hero */}
        <section className="bg-secondary/30 pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
                Our Spaces
              </p>
              <h1 className="mt-2 text-3xl font-light text-charcoal md:text-4xl lg:text-5xl">
                お部屋
              </h1>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                3フロア、3つのユニークな空間
              </p>
              <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
                各フロアは完全にプライベートな自己完結型の居住空間。
                快適さ、美しさ、そして日常の暮らしのためにデザインされています。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Room details */}
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
