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
  ],
  openGraph: {
    title: "SUNZ ROOMS. — naha miebashi",
    description: "暮らすように、泊まる。Live as you stay.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${dmSans.variable} ${notoSansJP.variable} ${notoSansSC.variable} ${notoSansTC.variable} ${notoSansKR.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
      <Analytics />
    </html>
  );
}
