import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-col justify-center item-center w-[80%]">
      <div className="flex justify-center item-center w-full mb-20">
        <img
          src="https://i.imgur.com/jIjk5tA.jpeg"
          alt="Ice Delivery"
          className="2xl:w-[15%] xl:w-[20%] w-full h-auto rounded-lg"
        />
      </div>
      <div className="2xl:flex 2xl:flex-row flex flex-col justify-evenly mb-20">
        <div>
          <h2 className="font-bold text-2xl">ร้านโก๋น้ำแข็ง</h2>
          <p className="text-lg w-[50%]">
            50/5 หมู่2 ถนน 345 ตำบล บางคูวัด อำเภอ เมืองปทุม จังหวัดปทุมธานี
            รหัสไปรษณีย์ 12000
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/" legacyBehavior>
            <a className="text-2xl hover:underline">หน้าแรก</a>
          </Link>
          <Link href="/product" legacyBehavior>
            <a className="text-2xl hover:underline">สินค้าของเรา</a>
          </Link>
          <Link href="/service" legacyBehavior>
            <a className="text-2xl hover:underline">บริการของเรา</a>
          </Link>
        </div>
      </div>
      <div className="text-center w-full">
        <p>Web Design by CodeKub</p>
      </div>
    </div>
  );
}
