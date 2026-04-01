import Nav from "../navbar";
import Footer from "../Footer";
import Image from "next/image";

export const metadata = {
  title: "บริการส่งน้ำแข็งและเช่าถังน้ำแข็งในปทุมธานี | ร้านโก๋น้ำแข็ง",
  description:
    "บริการส่งน้ำแข็งหลอดเล็ก หลอดใหญ่ ซอง ป่น ในปทุมธานี สำหรับร้านค้า ร้านอาหาร คาเฟ่ ตลาด และงานอีเวนต์ พร้อมเช่าถังน้ำแข็ง ติดต่อสอบถาม 089-444-8455",
  keywords: [
    "บริการส่งน้ำแข็ง",
    "เช่าถังน้ำแข็ง",
    "ส่งน้ำแข็งปทุมธานี",
    "บริการน้ำแข็งงานอีเวนต์",
    "เช่าถังน้ำแข็งราคาถูก",
    "ส่งน้ำแข็งถึงที่",
    "ร้านน้ำแข็งใกล้ฉัน",
    "บริการน้ำแข็งงานเลี้ยง",
    "ส่งน้ำแข็งงานแต่งงาน",
    "น้ำแข็งพร้อมถัง",
    "บริการน้ำแข็งร้านอาหาร",
    "บริการน้ำแข็งคาเฟ่",
  ],
  openGraph: {
    title: "บริการส่งน้ำแข็งและเช่าถังน้ำแข็ง - ร้านโก๋น้ำแข็ง",
    description:
      "ส่งน้ำแข็งถึงที่ในปทุมธานี สำหรับทุกความต้องการ พร้อมบริการเช่าถังน้ำแข็ง",
    images: [
      {
        url: "https://img5.pic.in.th/file/secure-sv1/5fa30236-81b6-4195-9638-edf65d2874cf.jpg",
        width: 500,
        height: 300,
        alt: "บริการส่งน้ำแข็งในปทุมธานี",
      },
    ],
  },
  alternates: {
    canonical: "https://www.tpices.com/services",
  },
};

const services = [
  {
    id: "delivery",
    image:
      "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775057234/rice_fq7ftw.jpg",
    alt: "บริการส่งน้ำแข็งในปทุมธานี",
    title: "ส่งน้ำแข็งในปทุมธานี",
    desc: "บริการจัดส่งน้ำแข็งถึงที่สำหรับร้านค้า ร้านอาหาร คาเฟ่ และตลาดต่างๆ ครอบคลุมทั่วพื้นที่ปทุมธานี ด้วยน้ำแข็งคุณภาพสูงที่คงความเย็นได้ยาวนาน",
    tags: ["ร้านอาหาร", "คาเฟ่", "ตลาดสด", "ร้านค้า"],
  },
  {
    id: "tank-rental",
    image:
      "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775057088/box_esmi9h.jpg",
    alt: "บริการให้เช่าถังน้ำแข็ง",
    title: "เช่าถังน้ำแข็ง",
    desc: "บริการให้เช่าถังน้ำแข็งทั้งขนาดใหญ่และขนาดเล็ก เหมาะสำหรับงานเลี้ยง งานอีเวนต์ หรือธุรกิจที่ต้องการน้ำแข็งจำนวนมาก (ต้องซื้อน้ำแข็งจากทางร้านด้วย)",
    tags: ["งานเลี้ยง", "งานอีเวนต์", "ธุรกิจ"],
  },
  {
    id: "event",
    image: "https://img2.pic.in.th/pic/9sBoSdh.webp",
    alt: "ส่งน้ำแข็งในงาน Event",
    title: "ส่งน้ำแข็งงาน Event",
    desc: "สำหรับงานแต่งงาน งานสังสรรค์ งานเลี้ยง หรือกิจกรรมต่างๆ เราจัดส่งน้ำแข็งปริมาณมากได้ทันเวลา เลือกประเภทน้ำแข็งที่เหมาะกับงานได้เลย",
    tags: ["งานแต่งงาน", "งานสังสรรค์", "กิจกรรมกลางแจ้ง"],
  },
  {
    id: "nearby",
    image:
      "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775056312/2024-12-28_u7vtkb.jpg",
    alt: "ร้านน้ำแข็งใกล้ฉัน ปทุมธานี",
    title: "ร้านน้ำแข็งใกล้ฉัน",
    desc: "ตั้งอยู่ในบางคูวัด ปทุมธานี พร้อมให้บริการส่งน้ำแข็งถึงที่ ไม่ว่าจะเป็นน้ำแข็งหลอดเล็ก หลอดใหญ่ ซอง หรือป่น เราพร้อมตอบสนองทุกความต้องการ",
    tags: ["บางคูวัด", "เมืองปทุมธานี"],
  },
];

export default function Services() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <div className="text-center py-12 bg-[#EEEBD8] mx-4 rounded-2xl mt-4 mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold mb-3">บริการของเรา</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto px-4">
          ครบ ตรงเวลา คุณภาพดี — ส่งถึงที่ทั่วปทุมธานี
        </p>
        <a
          href="tel:+66894448455"
          id="services-cta-top"
          className="mt-6 inline-block bg-[#38878E] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2d6f75] transition-colors"
        >
          สอบถามบริการ — 089-444-8455
        </a>
      </div>

      {/* Services List */}
      <div className="max-w-4xl mx-auto px-4 flex flex-col gap-6 mb-12">
        {services.map((s) => (
          <article
            key={s.id}
            id={s.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col lg:flex-row"
          >
            <div className="lg:w-64 lg:flex-shrink-0 overflow-hidden">
              <Image
                src={s.image}
                alt={s.alt}
                width={400}
                height={300}
                className="w-full h-56 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-xl font-bold text-[#38878E] mb-3">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#EEEBD8] text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="tel:+66894448455"
                className="self-start text-[#38878E] font-semibold border border-[#38878E] px-5 py-2 rounded-full hover:bg-[#38878E] hover:text-white transition-colors text-sm"
              >
                สอบถามบริการนี้
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* CTA Bottom */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-[#EEEBD8] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">ต้องการบริการที่ไม่มีในรายการ?</h2>
          <p className="text-gray-600 mb-6">
            ติดต่อเราโดยตรง ทีมงานพร้อมช่วยหาทางออกที่ดีที่สุดให้คุณ
          </p>
          <a
            href="tel:+66894448455"
            id="services-cta-bottom"
            className="inline-block bg-[#38878E] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#2d6f75] transition-colors shadow-md"
          >
            โทร 089-444-8455
          </a>
          <p className="text-sm text-gray-500 mt-3">เปิดทุกวัน 05:00–20:00 น.</p>
        </div>
      </div>

      <div className="flex justify-center w-full px-10 pb-10">
        <Footer />
      </div>
    </>
  );
}
