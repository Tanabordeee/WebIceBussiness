import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
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
    default: "ร้านโก๋น้ำแข็ง - บริการน้ำแข็งคุณภาพสูงและครบวงจร", 
    template: "%s | ร้านโก๋น้ำแข็ง",
  },
  description:
    "ร้านโก๋น้ำแข็งให้บริการน้ำแข็งคุณภาพสูง เช่น น้ำแข็งหลอดเล็ก หลอดใหญ่ ซอง ป่น และบริการเช่าถังน้ำแข็งในปทุมธานี ส่งถึงที่ ราคาถูก บริการทันใจ",
  keywords: [
    "ร้านน้ำแข็ง ใกล้ฉัน",
    "ส่งน้ำแข็ง ปทุมธานี",
    "เช่าถังน้ำแข็ง",
    "น้ำแข็งหลอดเล็ก",
    "น้ำแข็งหลอดใหญ่",
    "น้ำแข็งซอง",
    "น้ำแข็งป่น",
    "โรงน้ำแข็ง",
    "สั่งน้ำแข็ง",
  ],
  openGraph: {
    title: "ร้านโก๋น้ำแข็ง - บริการน้ำแข็งครบวงจร",
    description:
      "บริการน้ำแข็งหลากหลายประเภท เช่น น้ำแข็งหลอดเล็ก หลอดใหญ่ ซอง ป่น และเช่าถังน้ำแข็ง ส่งถึงที่ในปทุมธานี",
    url: "https://web-ice-business.vercel.app/",
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
    title: "ร้านโก๋น้ำแข็ง - บริการน้ำแข็งครบวงจร",
    description:
      "น้ำแข็งคุณภาพสูง ส่งถึงที่ในปทุมธานี พร้อมบริการเช่าถังน้ำแข็ง",
    images: ["https://web-ice-business.vercel.app/android-chrome-512x512.png"],
  },
  robots: "index, follow",
  icons: {
    icon: "https://www.tpices.com/favicon.ico?v=4",
    apple: "https://www.tpices.com/apple-touch-icon.png?v=4",
    shortcut: "https://www.tpices.com/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <Head>
        <link rel="icon" type="image/x-icon" href="https://www.tpices.com/favicon.ico?v=4" />
        <link rel="apple-touch-icon" href="https://www.tpices.com/apple-touch-icon.png?v=4" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}