import Nav from "../navbar";
import Image from "next/image";
import Footer from "../Footer";

export const metadata = {
  title: "สินค้าน้ำแข็ง — น้ำแข็งหลอดเล็ก หลอดใหญ่ ซอง ป่น แพ็ค | ร้านโก๋น้ำแข็ง",
  description:
    "น้ำแข็งหลอดเล็ก หลอดใหญ่ ซอง ป่น และน้ำแข็งแพ็ค คุณภาพสูงจากร้านโก๋น้ำแข็ง ส่งถึงที่ในปทุมธานี ติดต่อสอบถามราคาได้เลย 089-444-8455",
  keywords: [
    "น้ำแข็งหลอดเล็ก",
    "น้ำแข็งหลอดใหญ่",
    "น้ำแข็งซอง",
    "น้ำแข็งป่น",
    "น้ำแข็งแพ็ค",
    "ร้านน้ำแข็งปทุมธานี",
    "สั่งน้ำแข็ง",
    "ส่งน้ำแข็ง",
    "น้ำแข็งหลอดเล็กราคา",
    "น้ำแข็งสำหรับร้านอาหาร",
    "น้ำแข็งสำหรับคาเฟ่",
    "น้ำแข็งสำหรับบาร์",
    "น้ำแข็งสำหรับโรงแรม",
    "น้ำแข็งสำหรับตลาด",
    "น้ำแข็งกระสอบ",
    "น้ำแข็งบริโภค",
    "สั่งน้ำแข็งออนไลน์",
    "โรงน้ำแข็งปทุมธานี",
  ],
  openGraph: {
    title: "สินค้าน้ำแข็ง — ร้านโก๋น้ำแข็ง ปทุมธานี",
    description:
      "น้ำแข็งหลากหลายประเภท เช่น หลอดเล็ก หลอดใหญ่ ซอง ป่น และแพ็ค ส่งถึงที่ในปทุมธานี",
    images: [
      {
        url: "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775056312/2024-12-28_u7vtkb.jpg",
        width: 600,
        height: 600,
        alt: "น้ำแข็งหลอดเล็ก",
      },
    ],
  },
  alternates: {
    canonical: "https://www.tpices.com/product",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "สินค้าน้ำแข็ง ร้านโก๋น้ำแข็ง",
  description: "น้ำแข็งคุณภาพสูงครบทุกประเภท ส่งถึงที่ในปทุมธานี",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "น้ำแข็งหลอดเล็ก",
        description:
          "น้ำแข็งหลอดเล็กคุณภาพสูง เหมาะสำหรับเครื่องดื่ม ร้านอาหาร คาเฟ่ บาร์",
        image:
          "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775056312/2024-12-28_u7vtkb.jpg",
        brand: { "@type": "Brand", name: "ร้านโก๋น้ำแข็ง" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "THB",
          seller: { "@type": "LocalBusiness", name: "ร้านโก๋น้ำแข็ง" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "น้ำแข็งหลอดใหญ่",
        description:
          "น้ำแข็งหลอดใหญ่ คงความเย็นได้นาน เหมาะสำหรับร้านอาหาร บาร์ โรงแรม",
        image: "https://img2.pic.in.th/pic/7hagRM4.webp",
        brand: { "@type": "Brand", name: "ร้านโก๋น้ำแข็ง" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "THB",
          seller: { "@type": "LocalBusiness", name: "ร้านโก๋น้ำแข็ง" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "น้ำแข็งซอง",
        description: "น้ำแข็งบรรจุซอง สะดวกขนส่ง เหมาะสำหรับงานปาร์ตี้และกิจกรรมกลางแจ้ง",
        image:
          "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775056654/songice_w1dc5w.jpg",
        brand: { "@type": "Brand", name: "ร้านโก๋น้ำแข็ง" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "THB",
          seller: { "@type": "LocalBusiness", name: "ร้านโก๋น้ำแข็ง" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "น้ำแข็งป่น",
        description: "น้ำแข็งป่นละเอียด เย็นเร็ว เหมาะสำหรับเครื่องดื่มเย็นและงานจัดเลี้ยง",
        image:
          "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775056490/pon_n4emwj.jpg",
        brand: { "@type": "Brand", name: "ร้านโก๋น้ำแข็ง" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "THB",
          seller: { "@type": "LocalBusiness", name: "ร้านโก๋น้ำแข็ง" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Product",
        name: "น้ำแข็งแพ็ค (Dolphin)",
        description:
          "น้ำแข็งแพ็คสำเร็จรูป สะดวกใช้ เหมาะสำหรับร้านอาหาร บาร์ คาเฟ่",
        image:
          "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775056750/dophin_i75auw.jpg",
        brand: { "@type": "Brand", name: "ร้านโก๋น้ำแข็ง" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "THB",
          seller: { "@type": "LocalBusiness", name: "ร้านโก๋น้ำแข็ง" },
        },
      },
    },
  ],
};

const products = [
  {
    id: "small-tube-ice",
    image:
      "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775056312/2024-12-28_u7vtkb.jpg",
    alt: "น้ำแข็งหลอดเล็ก",
    heading: "จุดเด่นของน้ำแข็งหลอดเล็ก",
    desc: "น้ำแข็งหลอดเล็กเป็นน้ำแข็งที่เหมาะสำหรับการบริโภคโดยตรง และยังเป็นตัวเลือกที่ดีที่สุดสำหรับเครื่องดื่มเย็นต่างๆ ซึ่งช่วยให้เครื่องดื่มของคุณคงความเย็นได้นานโดยไม่ทำให้รสชาติเปลี่ยนแปลง",
    subHead: "น้ำแข็งหลอดเล็กเหมาะกับผู้ประกอบการประเภทไหน?",
    list: ["ร้านอาหาร", "ร้านกาแฟและคาเฟ่", "ผับและบาร์", "ตลาดนัด ตลาดสด", "ร้านขายของชำ", "โรงเรียนและโรงแรม", "ร้านค้าชั้นนำในห้างสรรพสินค้า"],
    extra: "นอกจากนี้ยังเหมาะสำหรับลูกค้าที่ต้องการน้ำแข็งสะอาดและปลอดภัยสำหรับการบริโภคในเครื่องดื่มต่างๆ",
    cta: "สอบถามราคาน้ำแข็งหลอดเล็ก",
  },
  {
    id: "large-tube-ice",
    image: "https://img2.pic.in.th/pic/7hagRM4.webp",
    alt: "น้ำแข็งหลอดใหญ่",
    heading: "จุดเด่นของน้ำแข็งหลอดใหญ่",
    desc: "น้ำแข็งหลอดใหญ่มีลักษณะที่เหมาะสำหรับเครื่องดื่มประเภทต่างๆ โดยน้ำแข็งหลอดใหญ่จะคงความเย็นได้นานและไม่ละลายเร็วมาก",
    subHead: "น้ำแข็งหลอดใหญ่เหมาะกับผู้ประกอบการประเภทไหน?",
    list: ["ร้านอาหาร", "คาเฟ่และร้านกาแฟ", "ผับ บาร์", "โรงแรม"],
    extra: "เหมาะสำหรับลูกค้าที่ต้องการน้ำแข็งสำหรับการใช้งานที่ยาวนาน เช่นในบาร์และร้านอาหาร",
    cta: "สอบถามราคาน้ำแข็งหลอดใหญ่",
  },
  {
    id: "bag-ice",
    image:
      "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775056654/songice_w1dc5w.jpg",
    alt: "น้ำแข็งซอง",
    heading: "จุดเด่นของน้ำแข็งซอง",
    desc: "น้ำแข็งซองเป็นน้ำแข็งที่มีความสะดวกในการใช้และเหมาะสำหรับการขนส่ง โดยเหมาะกับการใช้ในงานที่ต้องการจำนวนมาก เช่น งานปาร์ตี้",
    subHead: "น้ำแข็งซองเหมาะกับผู้ประกอบการประเภทไหน?",
    list: ["งานปาร์ตี้", "กิจกรรมกลางแจ้ง", "โรงแรมและรีสอร์ท"],
    extra: "เหมาะสำหรับลูกค้าที่ต้องการน้ำแข็งในปริมาณมาก โดยการจัดส่งในซองที่สะดวก",
    cta: "สอบถามราคาน้ำแข็งซอง",
  },
  {
    id: "crushed-ice",
    image:
      "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775056490/pon_n4emwj.jpg",
    alt: "น้ำแข็งป่น",
    heading: "จุดเด่นของน้ำแข็งป่น",
    desc: "น้ำแข็งป่นเหมาะสำหรับเครื่องดื่มที่ต้องการเย็นเร็วและเย็นจัด น้ำแข็งป่นมักใช้ในเครื่องดื่มเย็นๆ หรือการเก็บอาหารที่ต้องการการแช่เย็น",
    subHead: "น้ำแข็งป่นเหมาะกับผู้ประกอบการประเภทไหน?",
    list: ["ร้านเครื่องดื่ม", "กิจกรรมที่ต้องการการแช่เย็นทันที", "งานจัดเลี้ยง"],
    extra: "เหมาะสำหรับลูกค้าที่ต้องการน้ำแข็งที่สามารถใช้ได้ทันทีในเครื่องดื่มหรือการเก็บรักษาอาหาร",
    cta: "สอบถามราคาน้ำแข็งป่น",
  },
  {
    id: "pack-ice",
    image:
      "https://res.cloudinary.com/dlwgvzoyg/image/upload/v1775056750/dophin_i75auw.jpg",
    alt: "น้ำแข็งหลอดแพ็ค",
    heading: "จุดเด่นของน้ำแข็งแพ็ค",
    desc: "น้ำแข็งแพ็คเป็นผลิตภัณฑ์ที่ได้รับความนิยมในหลายๆ อุตสาหกรรม โดยเฉพาะในธุรกิจที่ต้องการความเย็นที่ยาวนานและสะดวกในการใช้งาน",
    subHead: "น้ำแข็งแพ็คเหมาะกับผู้ประกอบการประเภทไหน?",
    list: ["ร้านอาหาร", "คาเฟ่และร้านกาแฟ", "ผับ บาร์", "โรงแรม"],
    extra: "น้ำแข็งแพ็คเหมาะมากกับผู้ประกอบการที่ต้องการน้ำแข็งสำหรับการใช้งานที่ยาวนานและคุ้มค่า",
    cta: "สอบถามราคาน้ำแข็งแพ็ค",
  },
];

export default function Product() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="p-1">
        <Nav />

        {/* Hero */}
        <div className="text-center py-10 bg-[#EEEBD8] mx-4 rounded-2xl mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">สินค้าของเรา</h1>
          <p className="text-xl font-medium mb-2">ความหลากหลายที่มาพร้อมกับคุณภาพ</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
            ที่ร้านโก๋น้ำแข็ง เรามีน้ำแข็งครบทุกประเภท ตอบโจทย์ทุกธุรกิจ
          </p>
          {/* CTA ด้านบน */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+66894448455"
              id="product-cta-top"
              className="bg-[#38878E] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#2d6f75] transition-colors shadow-md"
            >
              089-444-8455 — สอบถามราคา
            </a>
            <div className="flex flex-wrap justify-center gap-2 mt-4 w-full">
              <span className="bg-white border border-[#38878E] text-[#38878E] px-4 py-1.5 rounded-full text-sm">✓ น้ำแข็งสะอาด</span>
              <span className="bg-white border border-[#38878E] text-[#38878E] px-4 py-1.5 rounded-full text-sm">✓ ส่งด่วน</span>
              <span className="bg-white border border-[#38878E] text-[#38878E] px-4 py-1.5 rounded-full text-sm">✓ เปิดทุกวัน</span>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="gap-5 px-4">
          {products.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className="flex flex-col 2xl:w-[90%] mx-auto mb-8 h-auto border bg-white p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="font-semibold text-2xl lg:text-3xl mb-6 text-[#38878E]">
                {p.heading}
              </h2>
              <div className="flex flex-col 2xl:flex-row justify-between gap-3">
                <div className="overflow-hidden rounded-xl flex-shrink-0">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    className="h-full w-full 2xl:w-80 object-fit rounded-xl hover:scale-105 transition-transform duration-300"
                    width={320}
                    height={288}
                    quality={65}
                    sizes="(max-width: 1536px) 100vw, 320px"
                    loading="lazy"
                  />
                </div>
                <div className="2xl:w-[60%]">
                  <p className="text-lg mb-4 text-gray-700">{p.desc}</p>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {p.subHead}
                  </h3>
                  <ul className="list-none mb-4 grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {p.list.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-700">
                        <span className="text-[#38878E] font-bold">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 mb-6">{p.extra}</p>

                  {/* Info box — ติดต่อสอบถาม */}
                  <div className="bg-[#EEEBD8] rounded-xl p-4 mb-5 text-sm text-gray-600">
                    <strong>สนใจสั่ง?</strong> ติดต่อสอบถามราคาและเงื่อนไขได้โดยตรง ทีมงานพร้อมให้ข้อมูลทุกวัน
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="tel:+66894448455"
                      className="px-6 py-3 bg-[#38878E] text-white rounded-full font-semibold hover:bg-[#2d6f75] transition-colors shadow-sm"
                    >
                      {p.cta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-12 bg-[#EEEBD8] mx-4 rounded-2xl mt-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">ยังไม่แน่ใจว่าจะสั่งอะไรดี?</h2>
          <p className="text-gray-600 mb-6">โทรหาเราได้เลย ทีมงานพร้อมให้คำแนะนำ ไม่มีค่าใช้จ่าย</p>
          <a
            href="tel:+66894448455"
            id="product-cta-bottom"
            className="inline-block bg-[#38878E] text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-[#2d6f75] transition-colors shadow-lg"
          >
            โทร 089-444-8455
          </a>
        </div>

        <div className="flex justify-center w-full p-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
