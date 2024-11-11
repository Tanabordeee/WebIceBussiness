import { Suspense } from "react";
import Nav from "./navbar";
import MapEmbed from "./MapEmbed";
import TelButton from "./telButton";
import Footer from "./Footer";
import Head from "next/head";
import CustomerList from "./CustomerList";
export default async function Home() {
  return (
    <>
      <Head>
        <title>ร้านน้ำแข็ง ใกล้ฉัน | บริการน้ำแข็งคุณภาพสูง</title>
        <meta
          name="description"
          content="ค้นหาบริการร้านน้ำแข็ง ใกล้ฉัน รับส่งน้ำแข็งหลอดเล็ก หลอดใหญ่ น้ำแข็งป่น และบริการเช่าถังน้ำแข็ง"
        />
        <meta
          name="keywords"
          content="ร้านน้ำแข็ง ใกล้ฉัน, ส่งน้ำแข็ง ใกล้ฉัน, เช่าถังน้ำแข็ง, น้ำแข็งหลอดเล็ก, น้ำแข็งป่น, โรงน้ำแข็ง, เช่าถังน้ำแข็ง ใกล้ฉัน , ส่งน้ำแข็งในปทุมธานี , บริการทันใจ พร้อมราคาถูก"
        />
        <meta property="og:title" content="ร้านน้ำแข็ง ใกล้ฉัน" />
        <meta
          property="og:description"
          content="บริการน้ำแข็งหลากหลายประเภทส่งถึงมือคุณ พร้อมเช่าถังน้ำแข็งในพื้นที่ใกล้คุณ"
        />
        <meta property="og:image" content="URL_of_image_here" />
        <meta property="og:url" content="https://your-website-url.com" />
      </Head>
      <Nav />
      <div className="flex flex-col items-center h-lvh">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center mt-5 bg-[#EEEBD8] w-[80%] max-w-[90%] p-10 rounded-[33px]">
          <div className="flex flex-col items-center mb-10 lg:mb-0 lg:mr-10 justify-between">
            <div className="mb-20">
              <h2
                className="text-[48px] text-center text-white font-black mb-4"
                style={{
                  textShadow:
                    "3px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
                }}
              >
                CLEAN AND FAST DELIVERY
              </h2>
              <p className="text-center text-lg mb-6">
                น้ำแข็งคุณภาพสะอาดและส่งไวน้ำแข็งที่คุณไว้วางใจ
              </p>
            </div>

            <div className="flex flex-col sm:flex-col lg:flex-row justify-center gap-8 items-center lg:items-start">
              <TelButton />
              <p className="mt-4 lg:mt-0 lg:ml-10 w-full lg:w-[30%] text-center text-lg">
                เราคือร้านน้ำแข็งที่ใกล้ที่สุดในปทุมธานี ส่งน้ำแข็งถึงที่
                และบริการเช่าถังน้ำแข็งราคาไม่แพง พร้อมบริการส่งน้ำแข็ง
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/jIjk5tA.jpeg"
              alt="Ice Delivery"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="mt-10 w-[80%] flex flex-col items-center p-6">
          <p className="text-3xl font-bold mb-6 text-center">
            ลูกค้าที่ไว้ใจ ร้านโก๋น้ำแข็ง
          </p>
          <Suspense fallback={<p>LOADING IMAGE...</p>}>
            <CustomerList />
          </Suspense>
        </div>
        <div className="mt-10 mb-20 flex flex-col items-center bg-[#EEEBD8] p-6 rounded-lg shadow-lg w-[90%] max-w-[600px]">
          <p className="text-xl font-semibold text-gray-800 mb-4">
            เวลาเปิดให้บริการ
          </p>
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
                <span>5:00–20:00</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col text-center justify-center w-full items-center mb-20">
          <h1 className="text-3xl font-bold mb-6">สินค้าของเรา</h1>
          <div className="sm:flex-col sm:items-center lg:flex-row flex flex-wrap gap-2 justify-center items-center">
            <div className="2xl:w-[32%] w-[80%] lg:w-[50%] p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <img
                src="https://asiaice.co.th/wp-content/uploads/2023/03/small-cylinder-ice.webp"
                alt="น้ำแข็งหลอดเล็ก"
                className="h-80 w-full object-cover rounded-md"
              />
              <p className="mt-2 text-lg font-medium">น้ำแข็งหลอดเล็ก</p>
            </div>
            <div className="2xl:w-[32%] w-[80%] lg:w-[50%] p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <img
                src="https://asiaice.co.th/wp-content/uploads/2023/03/big-cylinder-ice.webp"
                alt="น้ำแข็งหลอดใหญ่"
                className="h-80 w-full object-cover rounded-md"
              />
              <p className="mt-2 text-lg font-medium">น้ำแข็งหลอดใหญ่</p>
            </div>
            <div className="2xl:w-[32%] w-[80%] lg:w-[50%] p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <img
                src="https://asiaice.co.th/wp-content/uploads/2023/03/frozen-ice-backgrounds-white-cold-1.webp"
                alt="น้ำแข็งป่น"
                className="h-80 w-full object-cover rounded-md"
              />
              <p className="mt-2 text-lg font-medium">น้ำแข็งป่น</p>
            </div>
          </div>
          <div className="flex-col flex items-center 2xl:flex 2xl:flex-row w-full mt-10 gap-2 justify-center  ">
            <div className="2xl:w-[20%] w-[80%] md:w-[50%] p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <img
                src="https://asiaice.co.th/wp-content/uploads/2023/03/blue-water-ripple-textured-wallpaper-5.webp"
                alt="น้ำแข็งซอง"
                className="h-80 w-full object-cover rounded-md"
              />
              <p className="mt-2 text-lg font-medium">น้ำแข็งซอง</p>
            </div>
            <div className="2xl:w-[20%] w-[80%]  md:w-[50%] p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <img
                src="https://asiaice.co.th/wp-content/uploads/2023/03/blue-water-ripple-textured-wallpaper-7.webp"
                alt="น้ำแข็งหลอดแบบแพ็ค"
                className="h-80 w-full object-cover rounded-md"
              />
              <p className="mt-2 text-lg font-medium">น้ำแข็งหลอดแบบแพ็ค</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">บริการของเรา</h1>
          <div className="flex flex-col items-center2xl:flex flex-wrap gap-2 2xl:justify-center 2xl:flex-row">
            <div className="2xl:w-[32%] w-full p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <img
                src="https://asiaice.co.th/wp-content/uploads/2023/04/department-store-market-flea-retail-shop-commercial-provider-vendor-bangkok-rama3-rama4-chonburi-prachinburi-chacheongsao-asia-ice-bangna.webp"
                alt="ส่งน้ำแข็งในปทุมธานี"
                className="h-80 w-full object-cover rounded-md"
              />
              <p className="mt-2 text-lg font-medium">
                ส่งน้ำแข็งในปทุมธานี ร้านค้า / ร้านอาหาร / คาเฟ่ / ตลาด
              </p>
            </div>
            <div className="2xl:w-[32%] w-full p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <img
                src="https://asiaice.co.th/wp-content/uploads/2023/04/red-ice-machine-tub-storage-store-provider-vendor-bangkok-rama3-rama4-chonburi-prachinburi-chacheongsao-asia-ice-bangna.webp"
                alt="บริการให้เช่าถังน้ำแข็ง"
                className="h-80 w-full object-cover rounded-md"
              />
              <p className="mt-2 text-lg font-medium">
                บริการให้เช่าถังน้ำแข็ง พร้อม น้ำแข็ง
              </p>
            </div>
            <div className="2xl:w-[32%] w-full p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <img
                src="https://asiaice.co.th/wp-content/uploads/2024/03/asia-ice-bangkok-thailand-bangna-vendor-wholesale-retail-1.webp"
                alt="ส่งน้ำแข็งในงาน"
                className="h-80 w-full object-cover rounded-md"
              />
              <p className="mt-2 text-lg font-medium">
                ส่งน้ำแข็งในงาน Event ต่างๆ
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mb-20 mt-20">
          <MapEmbed />
        </div>
        <div className="flex justify-center w-full p-20">
          <Footer />
        </div>
      </div>
    </>
  );
}
