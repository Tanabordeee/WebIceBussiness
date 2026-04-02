import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["100", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "ร้านโก๋น้ำแข็ง - บริการน้ำแข็งคุณภาพสูงและครบวงจร ปทุมธานี",
    template: "%s | ร้านโก๋น้ำแข็ง",
  },
  description:
    "ร้านโก๋น้ำแข็งให้บริการน้ำแข็งคุณภาพสูง เช่น น้ำแข็งหลอดเล็ก หลอดใหญ่ ซอง ป่น และบริการเช่าถังน้ำแข็งในปทุมธานี ส่งถึงที่ ราคาถูก บริการทันใจ เปิดทุกวัน 05:00–20:00",
  keywords: [
    "ร้านน้ำแข็ง ใกล้ฉัน",
    "ร้านน้ำแข็งใกล้ฉัน",
    "ร้านน้ำแข็ง",
    "ร้านน้ำแข็งปทุมธานี",
    "ส่งน้ำแข็ง ปทุมธานี",
    "เช่าถังน้ำแข็ง",
    "น้ำแข็งหลอดเล็ก",
    "น้ำแข็งหลอดใหญ่",
    "น้ำแข็งซอง",
    "น้ำแข็งป่น",
    "โรงน้ำแข็ง",
    "สั่งน้ำแข็ง",
    "น้ำแข็งส่งด่วน",
    "ร้านน้ำแข็งปทุมธานี",
    "โรงน้ำแข็งปทุมธานี",
    "น้ำแข็งราคาถูก",
    "น้ำแข็งคุณภาพสูง",
    "น้ำแข็งสะอาด",
    "ส่งน้ำแข็งถึงที่",
    "น้ำแข็งสำหรับร้านอาหาร",
    "น้ำแข็งสำหรับคาเฟ่",
    "น้ำแข็งสำหรับบาร์",
    "น้ำแข็งงานอีเวนต์",
    "น้ำแข็งงานแต่งงาน",
    "น้ำแข็งงานเลี้ยง",
    "เช่าถังน้ำแข็งราคาถูก",
    "เช่าถังน้ำแข็งปทุมธานี",
    "น้ำแข็งกระสอบ",
    "น้ำแข็งแพ็ค",
    "สั่งน้ำแข็งออนไลน์",
    "ส่งน้ำแข็งรายวัน",
    "บริการน้ำแข็งครบวงจร",
    "น้ำแข็งบางคูวัด",
    "น้ำแข็งเมืองปทุม",
    "ร้านน้ำแข็ง 24 ชั่วโมง",
    "ส่งน้ำแข็งเร็ว",
    "น้ำแข็งสำหรับตลาดสด",
    "น้ำแข็งสำหรับโรงแรม",
    "โก๋น้ำแข็ง",
    "tpices",
  ],
  openGraph: {
    title: "ร้านโก๋น้ำแข็ง - บริการน้ำแข็งครบวงจร ปทุมธานี",
    description:
      "บริการน้ำแข็งหลากหลายประเภท เช่น น้ำแข็งหลอดเล็ก หลอดใหญ่ ซอง ป่น และเช่าถังน้ำแข็ง ส่งถึงที่ในปทุมธานี เปิดทุกวัน 05:00–20:00",
    url: "https://www.tpices.com/",
    siteName: "ร้านโก๋น้ำแข็ง",
    type: "website",
    locale: "th_TH",
    images: [
      {
        url: "https://web-ice-business.vercel.app/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "โลโก้ร้านโก๋น้ำแข็ง",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ร้านโก๋น้ำแข็ง - บริการน้ำแข็งครบวงจร ปทุมธานี",
    description:
      "น้ำแข็งคุณภาพสูง ส่งถึงที่ในปทุมธานี พร้อมบริการเช่าถังน้ำแข็ง เปิดทุกวัน 05:00–20:00",
    images: ["https://web-ice-business.vercel.app/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48 32x32 16x16", type: "image/x-icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    other: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "ร้านโก๋น้ำแข็ง",
    statusBarStyle: "default",
    capable: true,
  },
  alternates: {
    canonical: "https://www.tpices.com/",
  },
  authors: [{ name: "ร้านโก๋น้ำแข็ง", url: "https://www.tpices.com" }],
  category: "food & beverage",
  other: {
    publisher: "ร้านโก๋น้ำแข็ง",
    "geo.region": "TH-13",
    "geo.placename": "ปทุมธานี",
    "geo.position": "14.0208;100.5250",
    ICBM: "14.0208, 100.5250",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.tpices.com/#business",
  name: "ร้านโก๋น้ำแข็ง",
  alternateName: "โก๋น้ำแข็ง tpices",
  description:
    "บริการน้ำแข็งครบวงจร ทั้งน้ำแข็งหลอดเล็ก หลอดใหญ่ ซอง ป่น และบริการเช่าถังน้ำแข็ง พร้อมจัดส่งถึงที่ในปทุมธานี",
  url: "https://www.tpices.com",
  telephone: "+66894448455",
  priceRange: "฿",
  image: "https://web-ice-business.vercel.app/android-chrome-512x512.png",
  logo: "https://web-ice-business.vercel.app/android-chrome-512x512.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "50/5 หมู่2 ถนน 345",
    addressLocality: "บางคูวัด",
    addressRegion: "ปทุมธานี",
    postalCode: "12000",
    addressCountry: "TH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 14.0208,
    longitude: 100.525,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "05:00",
      closes: "20:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ประเภทน้ำแข็ง",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "น้ำแข็งหลอดเล็ก",
          description: "น้ำแข็งหลอดเล็กคุณภาพสูง เหมาะสำหรับเครื่องดื่ม",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "น้ำแข็งหลอดใหญ่",
          description: "น้ำแข็งหลอดใหญ่ คงความเย็นได้นาน",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "น้ำแข็งซอง",
          description: "น้ำแข็งบรรจุซอง สะดวกในการขนส่ง",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "น้ำแข็งป่น",
          description: "น้ำแข็งป่น เย็นเร็ว เหมาะสำหรับเครื่องดื่มเย็น",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "บริการเช่าถังน้ำแข็ง",
          description: "เช่าถังน้ำแข็งพร้อมน้ำแข็ง สำหรับงานอีเวนต์และธุรกิจ",
        },
      },
    ],
  },
  areaServed: {
    "@type": "State",
    name: "ปทุมธานี",
  },
  currenciesAccepted: "THB",
  paymentAccepted: "Cash",
  sameAs: ["https://www.tpices.com"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ร้านโก๋น้ำแข็งเปิดกี่โมง?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ร้านโก๋น้ำแข็งเปิดให้บริการทุกวัน ตั้งแต่ 05:00–20:00 น.",
      },
    },
    {
      "@type": "Question",
      name: "ส่งน้ำแข็งถึงที่ได้ไหม?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ได้เลยครับ! เรามีบริการจัดส่งน้ำแข็งถึงที่ในพื้นที่ปทุมธานี โทรสั่งได้เลยที่ 089-444-8455",
      },
    },
    {
      "@type": "Question",
      name: "มีน้ำแข็งประเภทไหนบ้าง?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "เรามีน้ำแข็งครบทุกประเภท ได้แก่ น้ำแข็งหลอดเล็ก น้ำแข็งหลอดใหญ่ น้ำแข็งซอง น้ำแข็งป่น และน้ำแข็งแพ็ค",
      },
    },
    {
      "@type": "Question",
      name: "สามารถเช่าถังน้ำแข็งได้ไหม?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "สามารถเช่าถังน้ำแข็งได้ครับ โดยจะต้องซื้อน้ำแข็งจากทางร้านด้วย เหมาะสำหรับงานอีเวนต์ งานเลี้ยง หรือธุรกิจที่ต้องการน้ำแข็งจำนวนมาก",
      },
    },
    {
      "@type": "Question",
      name: "น้ำแข็งสะอาดไหม? กินได้เลยไหม?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "น้ำแข็งของเราผ่านกระบวนการผลิตที่สะอาดและได้มาตรฐาน น้ำแข็งหลอดเล็กเหมาะสำหรับการบริโภคโดยตรงในเครื่องดื่ม",
      },
    },
    {
      "@type": "Question",
      name: "ร้านโก๋น้ำแข็งอยู่ที่ไหน?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ร้านตั้งอยู่ที่ 50/5 หมู่2 ถนน 345 ตำบลบางคูวัด อำเภอเมืองปทุม จังหวัดปทุมธานี 12000",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="ร้านโก๋น้ำแข็ง" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}