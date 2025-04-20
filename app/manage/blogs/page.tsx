"use client";
import { useEffect, useState } from "react";
import Nav from "@/app/navbar";
import axios, { AxiosError } from "axios";
import Swal from "sweetalert2";
import Link from "next/link";
type blogsProp = {
  title: string;
  slug: string;
  coverImage: string;
  keywords: string[];
  _id: string;
};
export default function BlogsPage() {
  const [blogs, setblogs] = useState<blogsProp[]>([]);
  const [error, setError] = useState<string | null>(null);
  const getblogs = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
      if (res.status == 200) {
        setblogs(res.data.blogs);
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setError("Blog not found");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };
  const handleDelete = async (id: string) => {
    const confirm = await Swal.fire({
      title: "คุณแน่ใจหรือไม่?",
      text: "คุณต้องการลบบทความนี้ใช่หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "ใช่, ลบเลย!",
      cancelButtonText: "ยกเลิก",
    });

    if (confirm.isConfirmed) {
      try {
        const result = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/blog?_id=${id}`
        );
        if (result.status === 200) {
          Swal.fire({
            title: "ลบสำเร็จ",
            icon: "success",
            text: "บทความถูกลบเรียบร้อยแล้ว!",
          });
          setblogs((prev) => prev.filter((item) => item._id !== id));
        } else {
          throw new Error("Delete failed");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "ลบไม่สำเร็จ",
          text: "เกิดข้อผิดพลาดบางอย่าง!",
        });
      }
    }
  };

  useEffect(() => {
    getblogs();
  }, []);
  return (
    <>
    <Nav/>
      <nav className="flex w-full justify-around items-center p-5 gap-5">
        <Link href="/manage/product" className="bg-sky-200 p-5 rounded w-full text-center">Manage Product</Link>
        <Link href="/manage/blogs" className="bg-amber-200 p-5 rounded w-full text-center">Manage Blogs</Link>
        <Link href="/manage/blogcreate" className="w-full p-5 border rounded bg-green-300 hover:bg-red-200 text-center">CREATE</Link>
      </nav>
      <div className="flex justify-center w-full">
        

      </div>
      {blogs && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          {blogs.map((val, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-md p-5 transition hover:shadow-lg bg-white"
            >
              <p className="text-xl font-semibold">{val.title}</p>
              <p className="text-sm text-gray-500 mb-3">{val.slug}</p>
              <div className="w-full aspect-video overflow-hidden rounded-lg mb-3">
                <img
                  src={val.coverImage}
                  alt={val.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex">
                <div className="flex flex-wrap gap-2 mt-3">
                  {val.keywords.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-200 text-blue-700 text-sm px-3 py-1 rounded-full 
                      hover:bg-green-300 hover:text-black transition cursor-pointer "
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-5">
                <Link href={`/manage/blogupdate/${val.slug}`} className="m-5 p-2 border rounded-lg text-center bg-purple-300 w-full">UPDATE</Link>
                <button
                  className="m-5 p-2 border rounded-lg bg-red-300 w-full"
                  onClick={() => handleDelete(val._id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
