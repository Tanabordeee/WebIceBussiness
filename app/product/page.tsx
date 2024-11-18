import Nav from "../navbar";
import Head from "next/head";
import Image from "next/image";
export default function Product() {
  return (
    <>
      <Head>
        <title>สินค้าของเรา - โก๋น้ำแข็ง</title>
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
        <meta property="og:image" content="URL_TO_AN_IMAGE" />
        <meta property="og:url" content="URL_OF_THE_PRODUCT_PAGE" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="URL_OF_THE_PRODUCT_PAGE" />
      </Head>
      <div className="p-1">
        <Nav />
        <div className="gap-5">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-5">สินค้าของเรา</h1>
            <p className="text-2xl font-medium mb-5">
              ความหลากหลายที่มาพร้อมกับคุณภาพ
            </p>
            <p className="text-lg">
              ที่ร้านโก๋น้ำแข็ง เรามีการจัดส่งน้ำแข็งในรูปแบบที่หลากหลาย เช่น
              น้ำแข็งหลอดเล็ก น้ำแข็งหลอดใหญ่ น้ำแข็งซอง น้ำแข็งป่น
            </p>
          </div>
          <div className="flex flex-col  2xl:w-[90%] m-16 h-auto border bg-white p-10 rounded-md">
            <h2 className="font-semibold text-3xl">
              จุดเด่นของน้ำแข็งหลอดเล็ก
            </h2>
            <div className="flex flex-col 2xl:flex-row justify-between mt-16">
              <Image
                src="https://asiaice.co.th/wp-content/uploads/2023/03/small-cylinder-ice.webp"
                alt="น้ำแข็งหลอดเล็ก"
                className="h-80 object-cover rounded-md"
                width={600}
                height={600}
              />
              <div className="2xl:w-[60%] 2xl:mt-0 mt-5">
                <p className="text-lg mb-4">
                  น้ำแข็งหลอดเล็กเป็นน้ำแข็งที่เหมาะสำหรับการบริโภคโดยตรง
                  และยังเป็นตัวเลือกที่ดีที่สุดสำหรับเครื่องดื่มเย็นต่างๆ
                  ซึ่งช่วยให้เครื่องดื่มของคุณคงความเย็นได้นานโดยไม่ทำให้รสชาติเปลี่ยนแปลง
                </p>
                <h3 className="text-2xl font-semibold mb-2">
                  น้ำแข็งหลอดเล็กเหมาะกับผู้ประกอบการประเภทไหน?
                </h3>
                <ul className="list-disc pl-6 text-lg mb-6">
                  <li>ร้านอาหาร</li>
                  <li>ร้านกาแฟและคาเฟ่</li>
                  <li>ผับและบาร์</li>
                  <li>ตลาดนัด ตลาดสด</li>
                  <li>ร้านขายของชำ</li>
                  <li>โรงเรียนและโรงแรม</li>
                  <li>ร้านค้าชั้นนำในห้างสรรพสินค้า</li>
                </ul>
                <p className="text-lg mb-6">
                  นอกจากนี้ยังเหมาะสำหรับลูกค้าที่ต้องการน้ำแข็งสะอาดและปลอดภัยสำหรับการบริโภคในเครื่องดื่มต่างๆ
                </p>
                <div className="flex justify-center items-center">
                  <a
                    className="2xl:px-6 px-2 py-3 bg-[#38878E] text-white md:text-lg rounded-md text-xs 2xl:text-lg"
                    href="tel:+66894448455"
                  >
                    กดเพื่อสั่งน้ำแข็งหลอดเล็ก
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* น้ำแข็งหลอดใหญ่ */}
          <div className="flex flex-col 2xl:w-[90%] m-16 h-auto border bg-white p-10 rounded-md">
            <h2 className="font-semibold text-3xl">
              จุดเด่นของน้ำแข็งหลอดใหญ่
            </h2>
            <div className="flex flex-col 2xl:flex-row justify-between mt-16">
              <Image
                src="https://asiaice.co.th/wp-content/uploads/2023/03/big-cylinder-ice.webp"
                alt="น้ำแข็งหลอดใหญ่"
                className="h-80 object-cover rounded-md"
                width={600}
                height={600}
              />
              <div className="2xl:w-[60%] mt-5 2xl:mt-0">
                <p className="text-lg mb-4">
                  น้ำแข็งหลอดใหญ่มีลักษณะที่เหมาะสำหรับเครื่องดื่มประเภทต่างๆ
                  โดยน้ำแข็งหลอดใหญ่จะคงความเย็นได้นานและไม่ละลายเร็วมาก
                </p>
                <h3 className="text-2xl font-semibold mb-2">
                  น้ำแข็งหลอดใหญ่เหมาะกับผู้ประกอบการประเภทไหน?
                </h3>
                <ul className="list-disc pl-6 text-lg mb-6">
                  <li>ร้านอาหาร</li>
                  <li>คาเฟ่และร้านกาแฟ</li>
                  <li>ผับ บาร์</li>
                  <li>โรงแรม</li>
                </ul>
                <p className="text-lg mb-6">
                  เหมาะสำหรับลูกค้าที่ต้องการน้ำแข็งสำหรับการใช้งานที่ยาวนาน
                  เช่นในบาร์และร้านอาหาร
                </p>
                <div className="flex justify-center items-center">
                  <a
                    className="2xl:px-6 px-2 py-3 bg-[#38878E] text-white rounded-md md:text-lg text-xs 2xl:text-lg"
                    href="tel:+66894448455"
                  >
                    กดเพื่อสั่งน้ำแข็งหลอดใหญ่
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* น้ำแข็งซอง */}
          <div className="flex flex-col 2xl:w-[90%] m-16 h-auto border bg-white p-10 rounded-md">
            <h2 className="font-semibold text-3xl">จุดเด่นของน้ำแข็งซอง</h2>
            <div className="flex flex-col 2xl:flex-row justify-between mt-16">
              <Image
                src="https://asiaice.co.th/wp-content/uploads/2023/03/blue-water-ripple-textured-wallpaper-5.webp"
                alt="น้ำแข็งซอง"
                className="h-80 object-cover rounded-md"
                width={600}
                height={600}
              />
              <div className="2xl:w-[60%] mt-5 2xl:mt-0">
                <p className="text-lg mb-4">
                  น้ำแข็งซองเป็นน้ำแข็งที่มีความสะดวกในการใช้และเหมาะสำหรับการขนส่ง
                  โดยเหมาะกับการใช้ในงานที่ต้องการจำนวนมาก เช่น งานปาร์ตี้
                </p>
                <h3 className="text-2xl font-semibold mb-2">
                  น้ำแข็งซองเหมาะกับผู้ประกอบการประเภทไหน?
                </h3>
                <ul className="list-disc pl-6 text-lg mb-6">
                  <li>งานปาร์ตี้</li>
                  <li>กิจกรรมกลางแจ้ง</li>
                  <li>โรงแรมและรีสอร์ท</li>
                </ul>
                <p className="text-lg mb-6">
                  เหมาะสำหรับลูกค้าที่ต้องการน้ำแข็งในปริมาณมาก
                  โดยการจัดส่งในซองที่สะดวก
                </p>
                <div className="flex justify-center items-center">
                  <a
                    className="2xl:px-6 px-2 py-3 bg-[#38878E] text-white rounded-md text-xs md:text-lg 2xl:text-lg ml-5 2xl:ml-0 "
                    href=":tel:+66894448455"
                  >
                    กดเพื่อสั่งน้ำแข็งซอง
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* น้ำแข็งป่น */}
          <div className="flex flex-col 2xl:w-[90%] m-16 h-auto border bg-white p-10 rounded-md">
            <h2 className="font-semibold text-3xl">จุดเด่นของน้ำแข็งป่น</h2>
            <div className="flex flex-col 2xl:flex-row justify-between mt-16">
              <Image
                src="https://asiaice.co.th/wp-content/uploads/2023/03/frozen-ice-backgrounds-white-cold-1.webp"
                alt="น้ำแข็งป่น"
                className="h-80 object-cover rounded-md"
                width={600}
                height={600}
              />
              <div className="2xl:w-[60%] mt-5 2xl:mt-0">
                <p className="text-lg mb-4">
                  น้ำแข็งป่นเหมาะสำหรับเครื่องดื่มที่ต้องการเย็นเร็วและเย็นจัด
                  น้ำแข็งป่นมักใช้ในเครื่องดื่มเย็นๆ
                  หรือการเก็บอาหารที่ต้องการการแช่เย็น
                </p>
                <h3 className="text-2xl font-semibold mb-2">
                  น้ำแข็งป่นเหมาะกับผู้ประกอบการประเภทไหน?
                </h3>
                <ul className="list-disc pl-6 text-lg mb-6">
                  <li>ร้านเครื่องดื่ม</li>
                  <li>กิจกรรมที่ต้องการการแช่เย็นทันที</li>
                  <li>งานจัดเลี้ยง</li>
                </ul>
                <p className="text-lg mb-6">
                  เหมาะสำหรับลูกค้าที่ต้องการน้ำแข็งที่สามารถใช้ได้ทันทีในเครื่องดื่มหรือการเก็บรักษาอาหาร
                </p>
                <div className="flex justify-center items-center">
                  <a
                    className="px-6 py-3 bg-[#38878E] text-white rounded-md md:text-lg text-xs 2xl:text-lg"
                    href="tel:+66894448455"
                  >
                    กดเพื่อสั่งน้ำแข็งป่น
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*น้ำแข็งแพ็ค*/}
          <div className="flex flex-col 2xl:w-[90%] m-16 h-auto border bg-white p-10 rounded-md">
            <h2 className="font-semibold text-3xl">จุดเด่นของน้ำแข็งแพ๊ค</h2>
            <div className="flex flex-col 2xl:flex-row justify-between mt-16">
              <Image
                src="https://asiaice.co.th/wp-content/uploads/2023/03/big-cylinder-ice.webp"
                alt="น้ำแข็งหลอดใหญ่"
                className="h-80 object-cover rounded-md"
                width={600}
                height={600}
              />
              <div className="2xl:w-[60%] mt-5 2xl:mt-0 ">
                <p className="text-lg mb-4">
                  น้ำแข็งแพ๊คเป็นผลิตภัณฑ์ที่ได้รับความนิยมในหลายๆ อุตสาหกรรม
                  โดยเฉพาะในธุรกิจที่ต้องการความเย็นที่ยาวนานและสะดวกในการใช้งาน
                  น้ำแข็งแพ๊คมีลักษณะที่เป็นก้อนๆ หรือแพ๊คเล็กๆ
                  ที่สะดวกต่อการใช้และจัดเก็บ
                  ช่วยลดปัญหาน้ำแข็งละลายเร็วและยังสามารถใช้ในหลายๆ
                  รูปแบบของเครื่องดื่มหรือการจัดเก็บสินค้าที่ต้องการความเย็นได้เป็นอย่างดี
                </p>

                <h3 className="text-2xl font-semibold mb-2">
                  น้ำแข็งแพ๊คเหมาะกับผู้ประกอบการประเภทไหน?
                </h3>
                <ul className="list-disc pl-6 text-lg mb-6">
                  <li>ร้านอาหาร</li>
                  <li>คาเฟ่และร้านกาแฟ</li>
                  <li>ผับ บาร์</li>
                  <li>โรงแรม</li>
                </ul>

                <p className="text-lg mb-6">
                  น้ำแข็งแพ๊คเหมาะมากกับผู้ประกอบการที่ต้องการน้ำแข็งสำหรับการใช้งานที่ยาวนานและคุ้มค่า
                  เช่น
                  ร้านอาหารที่ต้องการน้ำแข็งในเครื่องดื่มหรือผับและบาร์ที่ต้องการน้ำแข็งเย็นๆ
                  สำหรับค็อกเทล
                </p>
                <div className="flex justify-center items-center">
                  <a
                    className="2xl:px-6 px-2 py-3 bg-[#38878E] text-white rounded-md text-xs md:text-lg  2xl:text-lg ml-5 2xl:ml-0"
                    href=":tel:+66894448455"
                  >
                    กดเพื่อสั่งน้ำแข็งแพ๊ค
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
