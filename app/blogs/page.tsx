"use client";
import { useEffect, useState } from "react";
import Nav from "../navbar";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import Image from "next/image";
type blogsProp = {
  title: string;
  slug: string;
  coverImage: string;
  keywords: string[];
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
    }catch (err: unknown) {
          if (err instanceof AxiosError) {
            setError("Blog not found"); 
          } else {
            setError("An unexpected error occurred");
          }
    };
  }
  useEffect(() => {
    getblogs();
  }, []);
  return (
    <>
      <Nav />
      {blogs && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          {blogs.map((val, index) => (
            <Link
              key={index}
              href={`/blog/${encodeURIComponent(val.slug)}`}
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
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
