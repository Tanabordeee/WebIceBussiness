import { Suspense } from "react";
import Nav from "./navbar";
import MapEmbed from "./MapEmbed";
import TelButton from "./telButton";
import Footer from "./Footer";
import CustomerList from "./CustomerList";
import Image from "next/image";

export const metadata = {
  title: "ร้านโก๋น้ำแข็ง - ร้านน้ำแข็งคุณภาพสูง ส่งถึงที่ในปทุมธานี",
  description:
    "ร้านโก๋น้ำแข็ง บริการน้ำแข็งหลอดเล็ก หลอดใหญ่ ซอง ป่น และเช่าถังน้ำแข็ง ส่งถึงที่ในปทุมธานี ด้วยคุณภาพสูง บริการรวดเร็วทันใจ เปิดทุกวัน 05:00–20:00",
  keywords: [
    "ร้านน้ำแข็ง ปทุมธานี",
    "ส่งน้ำแข็งถึงที่",
    "น้ำแข็งหลอดเล็ก ปทุมธานี",
    "น้ำแข็งส่งด่วน",
    "เช่าถังน้ำแข็ง",
    "โรงน้ำแข็ง บางคูวัด",
    "สั่งน้ำแข็ง โทร",
  ],
  alternates: {
    canonical: "https://www.tpices.com/",
  },
};

const whyUs = [
  {
    icon: "🧊",
    title: "น้ำแข็งสะอาด ได้มาตรฐาน",
    desc: "ผลิตจากน้ำบริสุทธิ์ กระบวนการผลิตสะอาด ปลอดภัยสำหรับการบริโภค",
  },
  {
    icon: "🚚",
    title: "ส่งเร็ว ตรงเวลา",
    desc: "บริการจัดส่งน้ำแข็งถึงหน้าบ้านหรือร้านของท่าน ในพื้นที่ปทุมธานี",
  },
  {
    icon: "📅",
    title: "เปิดทุกวัน ไม่หยุด",
    desc: "เปิดให้บริการทุกวัน ตั้งแต่ 05:00–20:00 น. พร้อมรับออร์เดอร์ตลอด",
  },
  {
    icon: "💰",
    title: "ราคายุติธรรม คุ้มค่า",
    desc: "ราคาน้ำแข็งที่เหมาะสม เหมาะสำหรับทั้งลูกค้าทั่วไปและธุรกิจ",
  },
];

const steps = [
  { num: "1", label: "โทรหาเรา", desc: "โทร 089-444-8455 หรือกดปุ่มสั่งสินค้า" },
  { num: "2", label: "แจ้งประเภทและปริมาณและลักษณะงาน", desc: "บอกชนิดน้ำแข็งและจำนวนที่ต้องการและแจ้งว่าเป็นงาน event หรือ ร้านค้า" },
  { num: "3", label: "รับน้ำแข็งถึงที่", desc: "เราจัดส่งถึงหน้าบ้านหรือร้านของท่าน" },
];

const serviceAreas = [
  "อ.เมืองปทุมธานี",
  "ต.บางคูวัด"
];

const faqs = [
  {
    q: "ส่งน้ำแข็งถึงที่ได้ไหม?",
    a: "ได้เลยครับ เรามีบริการจัดส่งน้ำแข็งถึงที่ในพื้นที่ปทุมธานี โทรสั่งได้เลยที่ 089-444-8455",
  },
  {
    q: "มีน้ำแข็งประเภทไหนบ้าง?",
    a: "มีครบทุกประเภท: น้ำแข็งหลอดเล็ก, หลอดใหญ่, น้ำแข็งซอง, น้ำแข็งป่น และน้ำแข็งแพ็ค",
  },
  {
    q: "สามารถเช่าถังน้ำแข็งได้ไหม?",
    a: "ได้ครับ เรามีบริการเช่าถังน้ำแข็ง โดยต้องซื้อน้ำแข็งจากทางร้านด้วย เหมาะสำหรับงานอีเวนต์และธุรกิจ",
  },
  {
    q: "น้ำแข็งสะอาดพอกินได้เลยไหม?",
    a: "น้ำแข็งหลอดเล็กของเราผ่านกระบวนการผลิตที่สะอาดและได้มาตรฐาน เหมาะสำหรับการบริโภคในเครื่องดื่ม",
  },
  {
    q: "สั่งขั้นต่ำเท่าไหร่?",
    a: "ติดต่อสอบถามโดยตรงได้เลยที่ 089-444-8455 ทีมงานพร้อมให้ข้อมูลทุกวัน",
  },
];

export default async function Home() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center">

        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row w-full justify-center items-center mt-5 bg-[#EEEBD8] max-w-[90%] p-10 rounded-[33px]">
          <div className="flex flex-col items-center mb-10 lg:mb-0 lg:mr-10 justify-between">
            <div className="mb-10">
              <h1
                className="text-[30px] 2xl:text-[48px] text-center text-white font-black mb-4"
                style={{
                  textShadow:
                    "3px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
                }}
              >
                CLEAN AND FAST DELIVERY
              </h1>
              <p className="text-center text-lg mb-4">
                น้ำแข็งคุณภาพสะอาด ส่งไว ในปทุมธานี ที่คุณไว้วางใจ
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
                <span className="bg-[#38878E] text-white px-4 py-1.5 rounded-full">✓ เปิดทุกวัน 05:00–20:00</span>
                <span className="bg-[#38878E] text-white px-4 py-1.5 rounded-full">✓ ส่งถึงที่</span>
                <span className="bg-[#38878E] text-white px-4 py-1.5 rounded-full">✓ สะอาด ได้มาตรฐาน</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-col lg:flex-row justify-center gap-8 items-center lg:items-start">
              <TelButton />
              <p className="mt-4 lg:mt-0 lg:ml-10 w-full lg:w-[30%] text-center text-lg">
                เราคือร้านน้ำแข็งที่ใกล้ที่สุดในปทุมธานี ส่งน้ำแข็งถึงที่
                และบริการเช่าถังน้ำแข็งราคาไม่แพง
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/android-chrome-512x512.png"
              alt="ร้านโก๋น้ำแข็ง — บริการส่งน้ำแข็งปทุมธานี"
              className="max-w-full h-auto rounded-lg"
              width={375}
              height={225}
              quality={60}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>

        {/* ทำไมต้องเลือกเรา */}
        <section className="mt-16 w-[90%] max-w-5xl" aria-labelledby="why-us-heading">
          <h2 id="why-us-heading" className="text-3xl font-bold text-center mb-10">
            ทำไมต้องเลือก ร้านโก๋น้ำแข็ง?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-[#EEEBD8] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-5xl mb-4">{item.icon}</span>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ขั้นตอนสั่ง */}
        <section className="mt-16 w-[90%] max-w-4xl" aria-labelledby="how-to-order-heading">
          <h2 id="how-to-order-heading" className="text-3xl font-bold text-center mb-10">
            สั่งน้ำแข็ง ง่ายแค่ 3 ขั้นตอน
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
            {steps.map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center bg-white border-2 border-[#38878E] rounded-2xl p-8 shadow-sm relative">
                <div className="w-14 h-14 rounded-full bg-[#38878E] text-white flex items-center justify-center text-2xl font-black mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.label}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="tel:+66894448455"
              id="order-now-cta"
              className="inline-block bg-[#38878E] text-white text-xl px-10 py-4 rounded-full font-bold hover:bg-[#2d6f75] transition-colors shadow-lg"
            >
              สั่งน้ำแข็งเลย โทร 089-444-8455
            </a>
          </div>
        </section>

        {/* สินค้าของเรา */}
        <section className="mt-16 flex flex-col text-center justify-center w-full items-center" aria-labelledby="products-heading">
          <h2 id="products-heading" className="text-3xl font-bold mb-2">สินค้าของเรา</h2>
          <p className="text-gray-500 mb-8">น้ำแข็งคุณภาพสูง ครบทุกประเภท</p>
          <div className="sm:flex-col sm:items-center lg:flex-row flex flex-wrap gap-4 justify-center items-center w-[90%] max-w-5xl">
            {[
              { src: "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775056312/2024-12-28_u7vtkb.jpg", alt: "น้ำแข็งหลอดเล็ก", name: "น้ำแข็งหลอดเล็ก" },
              { src: "https://img2.pic.in.th/pic/7hagRM4.webp", alt: "น้ำแข็งหลอดใหญ่", name: "น้ำแข็งหลอดใหญ่" },
              { src: "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775056490/pon_n4emwj.jpg", alt: "น้ำแข็งป่น", name: "น้ำแข็งป่น" },
            ].map((p) => (
              <div key={p.name} className="w-[80%] lg:w-[30%] p-2 bg-white shadow-lg rounded-xl flex flex-col items-center group overflow-hidden">
                <div className="overflow-hidden w-full rounded-md">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    className="h-64 w-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={256}
                    quality={65}
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 80vw, 30vw"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-lg font-semibold">{p.name}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-[90%] max-w-4xl mt-4">
            {[
              { src: "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775056654/songice_w1dc5w.jpg", alt: "น้ำแข็งซอง", name: "น้ำแข็งซอง" },
              { src: "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775056750/dophin_i75auw.jpg", alt: "น้ำแข็งหลอดแบบแพ็ค", name: "น้ำแข็งหลอดแบบแพ็ค" },
            ].map((p) => (
              <div key={p.name} className="w-[80%] sm:w-[45%] lg:w-[30%] p-2 bg-white shadow-lg rounded-xl flex flex-col items-center group overflow-hidden">
                <div className="overflow-hidden w-full rounded-md">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    className="h-64 w-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={256}
                    quality={65}
                    sizes="(max-width: 640px) 80vw, (max-width: 768px) 45vw, 30vw"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-lg font-semibold">{p.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/product"
              className="inline-block border-2 border-[#38878E] text-[#38878E] px-8 py-3 rounded-full font-semibold hover:bg-[#38878E] hover:text-white transition-colors"
            >
              ดูสินค้าทั้งหมด →
            </a>
          </div>
        </section>

        {/* บริการของเรา */}
        <section className="mt-16 w-[90%] max-w-5xl text-center" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-3xl font-bold mb-2">บริการของเรา</h2>
          <p className="text-gray-500 mb-8">ครอบคลุมทุกความต้องการ</p>
          <div className="flex flex-col items-center 2xl:flex flex-wrap gap-4 2xl:justify-center 2xl:flex-row">
            {[
              { src: "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775057234/rice_fq7ftw.jpg", alt: "ส่งน้ำแข็งในปทุมธานี", name: "ส่งน้ำแข็งในปทุมธานี\nร้านค้า / ร้านอาหาร / คาเฟ่ / ตลาด" },
              { src: "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775057088/box_esmi9h.jpg", alt: "บริการให้เช่าถังน้ำแข็ง", name: "บริการให้เช่าถังน้ำแข็ง\nพร้อมน้ำแข็ง" },
              { src: "https://img2.pic.in.th/pic/9sBoSdh.webp", alt: "ส่งน้ำแข็งในงาน Event", name: "ส่งน้ำแข็งในงาน Event\nต่างๆ" },
            ].map((s) => (
              <div key={s.alt} className="2xl:w-[32%] w-full p-2 bg-white shadow-lg rounded-xl flex flex-col items-center group overflow-hidden">
                <div className="overflow-hidden w-full rounded-md">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    className="h-64 w-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={256}
                    quality={65}
                    sizes="(max-width: 1024px) 100vw, 32vw"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-lg font-medium whitespace-pre-line">{s.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/services"
              className="inline-block border-2 border-[#38878E] text-[#38878E] px-8 py-3 rounded-full font-semibold hover:bg-[#38878E] hover:text-white transition-colors"
            >
              ดูบริการทั้งหมด →
            </a>
          </div>
        </section>

        {/* พื้นที่ให้บริการ */}
        <section className="mt-16 w-[90%] max-w-3xl bg-[#EEEBD8] rounded-2xl p-8 text-center" aria-labelledby="area-heading">
          <h2 id="area-heading" className="text-2xl font-bold mb-4">พื้นที่ให้บริการ</h2>
          <p className="text-gray-600 mb-6">เราให้บริการจัดส่งน้ำแข็งครอบคลุมทั่ว <strong>จังหวัดปทุมธานี</strong></p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span key={area} className="bg-white border border-[#38878E] text-[#38878E] px-4 py-2 rounded-full text-sm font-medium">
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 text-gray-500 text-sm">ไม่แน่ใจว่าอยู่ในพื้นที่ให้บริการไหม? โทรถามได้เลย!</p>
        </section>

        {/* ลูกค้าที่ไว้ใจ */}
        <div className="mt-16 w-[90%] flex flex-col items-center p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            ลูกค้าที่ไว้ใจ ร้านโก๋น้ำแข็ง
          </h2>
          <Suspense fallback={<p>LOADING IMAGE...</p>}>
            <CustomerList />
          </Suspense>
        </div>

        {/* FAQ Section */}
        <section className="mt-16 w-[90%] max-w-3xl" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-3xl font-bold text-center mb-10">คำถามที่พบบ่อย</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm group"
              >
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center gap-2">
                  <span>{faq.q}</span>
                  <span className="text-[#38878E] text-xl group-open:rotate-45 transition-transform">＋</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* เวลาเปิดให้บริการ */}
        <div className="mt-16 mb-10 flex flex-col items-center bg-[#EEEBD8] p-6 rounded-lg shadow-lg w-[90%] max-w-[600px]">
          <p className="text-xl font-semibold text-gray-800 mb-4">เวลาเปิดให้บริการ</p>
          <ul className="text-gray-700 space-y-2 w-full">
            {[
              "วันศุกร์",
              "วันเสาร์",
              "วันอาทิตย์",
              "วันจันทร์",
              "วันอังคาร",
              "วันพุธ",
              "วันพฤหัสบดี",
            ].map((day) => (
              <li key={day} className="flex justify-between w-full">
                <span>{day}</span>
                <span className="font-medium text-[#38878E]">5:00–20:00</span>
              </li>
            ))}
          </ul>
        </div>

        {/* แผนที่ */}
        <div className="flex justify-center w-full mb-10 mt-6">
          <MapEmbed />
        </div>

        {/* Footer */}
        <div className="flex justify-center w-full p-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
