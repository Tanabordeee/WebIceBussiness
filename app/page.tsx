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
    "ร้านโก๋น้ำแข็ง บริการน้ำแข็งหลอดเล็ก หลอดใหญ่ ซอง ป่น และเช่าถังน้ำแข็ง ส่งถึงที่ในปทุมธานี ด้วยคุณภาพสูง ราคาถูก บริการรวดเร็วทันใจ"
};
export default async function Home() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center h-lvh">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center mt-5 bg-[#EEEBD8] w-[80%] max-w-[90%] p-10 rounded-[33px]">
          <div className="flex flex-col items-center mb-10 lg:mb-0 lg:mr-10 justify-between">
            <div className="mb-20">
              <h2
                className=" text-[30px] 2xl:text-[48px] text-center text-white font-black mb-4"
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
            <Image
              src="/android-chrome-512x512.png"
              alt="Ice Delivery"
              className="max-w-full h-auto rounded-lg "
              width={375}
              height={225}
              quality={60}
              priority   
              sizes="(max-width: 768px) 100vw, 500px"
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
              <Image
                src="https://img5.pic.in.th/file/secure-sv1/JLhyl7q.webp"
                alt="น้ำแข็งหลอดเล็ก"
                className="h-80 w-full object-cover rounded-md"
                width={500}
                height={300}
              />
              <p className="mt-2 text-lg font-medium">น้ำแข็งหลอดเล็ก</p>
            </div>
            <div className="2xl:w-[32%] w-[80%] lg:w-[50%] p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <Image
                src="https://img2.pic.in.th/pic/7hagRM4.webp"
                alt="น้ำแข็งหลอดใหญ่"
                className="h-80 w-full object-cover rounded-md"
                width={500}
                height={300}
              />
              <p className="mt-2 text-lg font-medium">น้ำแข็งหลอดใหญ่</p>
            </div>
            <div className="2xl:w-[32%] w-[80%] lg:w-[50%] p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <Image
                src="https://img5.pic.in.th/file/secure-sv1/yESNfck.webp"
                alt="น้ำแข็งป่น"
                className="h-80 w-full object-cover rounded-md"
                width={500}
                height={300}
              />
              <p className="mt-2 text-lg font-medium">น้ำแข็งป่น</p>
            </div>
          </div>
          <div className="flex-col flex items-center 2xl:flex 2xl:flex-row w-full mt-10 gap-2 justify-center  ">
            <div className="2xl:w-[20%] w-[80%] md:w-[50%] p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <Image
                src="https://img5.pic.in.th/file/secure-sv1/oxJhFf3.webp"
                alt="น้ำแข็งซอง"
                className="h-80 w-full object-cover rounded-md"
                width={500}
                height={300}
              />
              <p className="mt-2 text-lg font-medium">น้ำแข็งซอง</p>
            </div>
            <div className="2xl:w-[20%] w-[80%]  md:w-[50%] p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <Image
                src="https://img5.pic.in.th/file/secure-sv1/nEG5k02.webp"
                alt="น้ำแข็งหลอดแบบแพ็ค"
                className="h-80 w-full object-cover rounded-md"
                width={500}
                height={300}
              />
              <p className="mt-2 text-lg font-medium">น้ำแข็งหลอดแบบแพ็ค</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">บริการของเรา</h1>
          <div className="flex flex-col items-center2xl:flex flex-wrap gap-2 2xl:justify-center 2xl:flex-row">
            <div className="2xl:w-[32%] w-full p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <Image
                src="https://img5.pic.in.th/file/secure-sv1/5fa30236-81b6-4195-9638-edf65d2874cf.jpg"
                alt="ส่งน้ำแข็งในปทุมธานี"
                className="h-80 w-full object-cover rounded-md"
                width={500}
                height={300}
              />
              <p className="mt-2 text-lg font-medium">
                ส่งน้ำแข็งในปทุมธานี ร้านค้า / ร้านอาหาร / คาเฟ่ / ตลาด
              </p>
            </div>
            <div className="2xl:w-[32%] w-full p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <Image
                src="https://img5.pic.in.th/file/secure-sv1/ATyt9GE.webp"
                alt="บริการให้เช่าถังน้ำแข็ง"
                className="h-80 w-full object-cover rounded-md"
                width={500}
                height={300}
              />
              <p className="mt-2 text-lg font-medium">
                บริการให้เช่าถังน้ำแข็ง พร้อม น้ำแข็ง
              </p>
            </div>
            <div className="2xl:w-[32%] w-full p-2 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <Image
                src="https://img2.pic.in.th/pic/9sBoSdh.webp"
                alt="ส่งน้ำแข็งในงาน"
                className="h-80 w-full object-cover rounded-md"
                width={500}
                height={300}
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
