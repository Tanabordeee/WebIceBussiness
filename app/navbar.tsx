"use client";
import Swal from "sweetalert2";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleCall = () => {
    Swal.fire({
      title: "Calling...",
      text: "กำลังโทรไปยังหมายเลขที่กำหนด!",
      icon: "info",
      confirmButtonText: "OK",
      backdrop: true,
      allowOutsideClick: false,
    });

    setTimeout(() => {
      window.location.href = "tel:+66894448455";
    }, 1000);
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="flex justify-center p-4">
      <div className="flex justify-between items-center w-full max-w-8xl">
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="text-3xl sm:text-4xl lg:text-5xl cursor-pointer"
          >
            ร้านโก๋น้ำแข็ง
          </Link>
          <div className="hidden sm:flex gap-5 p-3">
            <Link
              href="/product"
              className="text-xl cursor-pointer hover:underline"
            >
              สินค้าของเรา
            </Link>
            <Link
              href="/services"
              className="text-xl cursor-pointer hover:underline"
            >
              บริการของเรา
            </Link>
            <Link
              href="/blogs"
              className="text-xl cursor-pointer hover:underline"
            >
              Blogs
            </Link>
          </div>
        </div>
        <div className="flex items-center p-3">
          <button
            onClick={handleCall}
            className="text-xl border-2 pt-4 pb-4 px-8 border-slate-500 rounded-[28px] "
            style={{ boxShadow: "6px 4px 1.3px #38878E" }}
          >
            สั่งสินค้า
          </button>
        </div>
        <div className="sm:hidden flex items-center">
          <button
            className="text-3xl"
            onClick={toggleLinks}
          >
            &#9776;
          </button>
        </div>
      </div>

      {showLinks && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="flex flex-col items-center bg-white p-14 rounded-lg shadow-lg gap-2">
            <Link
              href="/product"
              className="text-xl cursor-pointer border p-3 rounded-lg hover:underline mb-2"
            >
              สินค้าของเรา
            </Link>
            <Link
              href="/services"
              className="text-xl cursor-pointer  border  rounded-lg p-2  hover:underline mb-2"
            >
              บริการของเรา
            </Link>
            <Link
              href="/"
              className="text-xl cursor-pointer  border w-full text-center rounded-lg p-2  hover:underline mb-2"
            >
              หน้าแรก
            </Link>
            <Link
              href="/blogs"
              className="text-xl cursor-pointer hover:underline"
            >
              Blogs
            </Link>
            <button
              className="mt-4 p-2 text-white w-full rounded-lg bg-red-500"
              onClick={toggleLinks}
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
