import type { Metadata } from "next";
import Head from "next/head";
import localFont from "next/font/local";
import { Kanit } from "next/font/google";
import "./globals.css";


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
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"], 
});

export const metadata: Metadata = {
  title: "ร้านโก๋น้ำแข็ง",
  description: "ค้นหาบริการร้านน้ำแข็ง ใกล้ฉัน รับส่งน้ำแข็งหลอดเล็ก หลอดใหญ่ น้ำแข็งป่น น้ำแข็งซอง น้ำแข็งแพ็ค และบริการเช่าถังน้ำแข็ง",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
        <meta
          name="description"
          content="เรามีการจัดส่งน้ำแข็งในรูปแบบต่างๆ เช่น น้ำแข็งหลอดเล็ก, น้ำแข็งหลอดใหญ่, น้ำแข็งซอง, น้ำแข็งป่น เพื่อให้คุณได้เลือกตามความต้องการ"
        />
        <meta
          name="keywords"
          content="น้ำแข็ง, น้ำแข็งหลอดเล็ก, น้ำแข็งหลอดใหญ่, น้ำแข็งซอง, น้ำแข็งป่น, สั่งน้ำแข็ง"
        />
        <meta property="og:title" content="สินค้าของเรา - โก๋น้ำแข็ง" />
        <meta
          property="og:description"
          content="เรามีการจัดส่งน้ำแข็งในรูปแบบต่างๆ เช่น น้ำแข็งหลอดเล็ก, น้ำแข็งหลอดใหญ่, น้ำแข็งซอง, น้ำแข็งป่น เพื่อให้คุณได้เลือกตามความต้องการ"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
