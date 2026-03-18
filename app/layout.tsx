import type { Metadata, Viewport } from "next";
import { DM_Sans, Noto_Sans_JP, Noto_Sans_SC, Noto_Sans_TC, Noto_Sans_KR } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  display: "swap",
  weight: ["400", "500", "700"],
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  display: "swap",
  weight: ["400", "500", "700"],
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SUNZ ROOMS. — naha miebashi | 暮らすように、泊まる。",
  description:
    "A designer guesthouse in Miebashi, Naha, Okinawa. 3 unique private floors — live as you stay. 那覇・美栄橋のデザイナーズゲストハウス。暮らすように、泊まる。",
  keywords: [
    "Okinawa",
    "Naha",
    "guesthouse",
    "vacation rental",
    "Miebashi",
    "SUNZROOMS",
    "沖縄",
    "那覇",
    "ゲストハウス",
    "一棟貸し",
    "美栄橋",
    "民泊",
  ],
  openGraph: {
    title: "SUNZ ROOMS. — naha miebashi",
    description: "暮らすように、泊まる。Live as you stay.",
    type: "website",
    url: "https://sunzrooms.com",
    siteName: "SUNZ ROOMS.",
    images: [{ url: "/images/ogp.jpg", width: 1200, height: 630, alt: "SUNZ ROOMS. naha miebashi — 暮らすように、泊まる。" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SUNZ ROOMS. — naha miebashi",
    description: "暮らすように、泊まる。Live as you stay.",
    images: ["/images/ogp.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

/* ===== Schema.org 構造化データ (JSON-LD) ===== */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": "https://sunzrooms.com/#lodging",
      name: "SUNZ ROOMS.-naha miebashi-",
      alternateName: "サンズルームス 那覇美栄橋",
      description: "那覇・美栄橋のデザイナーズゲストハウス。各フロアがすべて独立したプライベート空間。暮らすように、泊まる。",
      url: "https://sunzrooms.com",
      telephone: "",
      email: "sunzrooms@gmail.com",
      image: "https://sunzrooms.com/images/1f-dining.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "前島1丁目1番13号",
        addressLocality: "那覇市",
        addressRegion: "沖縄県",
        postalCode: "900-0016",
        addressCountry: "JP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.2206,
        longitude: 127.6781,
      },
      checkinTime: "15:00",
      checkoutTime: "11:00",
      numberOfRooms: 3,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
        { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
        { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
        { "@type": "LocationFeatureSpecification", name: "Washing Machine", value: true },
        { "@type": "LocationFeatureSpecification", name: "Clothes Dryer", value: true },
        { "@type": "LocationFeatureSpecification", name: "TV", value: true },
        { "@type": "LocationFeatureSpecification", name: "Microwave", value: true },
        { "@type": "LocationFeatureSpecification", name: "Hair Dryer", value: true },
      ],
      publicAccess: true,
      isAccessibleForFree: false,
      currenciesAccepted: "JPY",
      paymentAccepted: "Credit Card",
      availableLanguage: [
        { "@type": "Language", name: "Japanese" },
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "Chinese" },
        { "@type": "Language", name: "Korean" },
      ],
      containsPlace: [
        {
          "@type": "HotelRoom",
          "@id": "https://sunzrooms.com/#room101",
          name: "Room 101 (1F)",
          description: "美しいアーチ型のロフト寝室エリアを中心に据えた、居心地の良い1階のお部屋。カップルや小さなご家族に最適。32㎡、最大4名。",
          floorSize: {
            "@type": "QuantitativeValue",
            value: 32,
            unitCode: "MTK",
          },
          numberOfBedrooms: 1,
          bed: {
            "@type": "BedDetails",
            numberOfBeds: 4,
            typeOfBed: "Single",
          },
          occupancy: {
            "@type": "QuantitativeValue",
            maxValue: 4,
          },
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Private Bathroom", value: true },
            { "@type": "LocationFeatureSpecification", name: "Loft Bedroom", value: true },
            { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
          ],
          image: "https://sunzrooms.com/images/1f-dining.jpg",
          url: "https://sunzrooms.com/rooms#1f",
        },
        {
          "@type": "HotelRoom",
          "@id": "https://sunzrooms.com/#room201",
          name: "Room 201 (2F)",
          description: "2階全体に広がる最大の居住空間。竹のペンダントライトと木製プラットフォームベッドが印象的。畳エリアあり。55㎡、最大7名。",
          floorSize: {
            "@type": "QuantitativeValue",
            value: 55,
            unitCode: "MTK",
          },
          numberOfBedrooms: 2,
          bed: [
            {
              "@type": "BedDetails",
              numberOfBeds: 4,
              typeOfBed: "Single",
            },
            {
              "@type": "BedDetails",
              numberOfBeds: 3,
              typeOfBed: "Futon",
            },
          ],
          occupancy: {
            "@type": "QuantitativeValue",
            maxValue: 7,
          },
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "2 Bathrooms", value: true },
            { "@type": "LocationFeatureSpecification", name: "Tatami Area", value: true },
            { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
          ],
          image: "https://sunzrooms.com/images/2f-dining.jpg",
          url: "https://sunzrooms.com/rooms#2f",
        },
        {
          "@type": "HotelRoom",
          "@id": "https://sunzrooms.com/#room301",
          name: "Room 301 (3F)",
          description: "3階全体を使った開放的な空間。二段ベッド4台で最大8名まで宿泊可能。グループ旅行に最適。57㎡、最大8名。",
          floorSize: {
            "@type": "QuantitativeValue",
            value: 57,
            unitCode: "MTK",
          },
          numberOfBedrooms: 1,
          bed: {
            "@type": "BedDetails",
            numberOfBeds: 8,
            typeOfBed: "Bunk Bed",
          },
          occupancy: {
            "@type": "QuantitativeValue",
            maxValue: 8,
          },
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "2 Bathrooms", value: true },
            { "@type": "LocationFeatureSpecification", name: "Bunk Beds", value: true },
            { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
          ],
          image: "https://sunzrooms.com/images/3f-dining.jpg",
          url: "https://sunzrooms.com/rooms#3f",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://sunzrooms.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "チェックイン・チェックアウトの時間は？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "チェックインは15:00から、チェックアウトは11:00までです。",
          },
        },
        {
          "@type": "Question",
          name: "最寄り駅はどこですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ゆいレール美栄橋駅から徒歩約1分です。那覇空港からは電車で約20分です。",
          },
        },
        {
          "@type": "Question",
          name: "駐車場はありますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "専用駐車場はございません。近隣のコインパーキングをご利用ください。",
          },
        },
        {
          "@type": "Question",
          name: "各フロアは独立していますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい。各フロアはすべて独立したプライベート空間で、専用のキッチン・バスルーム・トイレを完備しています。",
          },
        },
        {
          "@type": "Question",
          name: "エレベーターはありますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "エレベーターはございません。各階までは階段でのご移動となります。",
          },
        },
        {
          "@type": "Question",
          name: "洗濯機・乾燥機はありますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい。各フロアに洗濯機と乾燥機を完備しています。",
          },
        },
        {
          "@type": "Question",
          name: "What are the check-in and check-out times?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check-in is from 3:00 PM and check-out is by 11:00 AM.",
          },
        },
        {
          "@type": "Question",
          name: "How far is it from Naha Airport?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "About 20 minutes by Yui Rail monorail. The nearest station is Miebashi Station, a 1-minute walk from the property.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${dmSans.variable} ${notoSansJP.variable} ${notoSansSC.variable} ${notoSansTC.variable} ${notoSansKR.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
      <Analytics />
    </html>
  );
}
