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
  const [loading, setloading] = useState<boolean | null>(true);
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
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    getblogs();
  }, []);
  return (
    <>
      <Nav />
      {loading ? (
        <div className="w-full h-full">
          <div className="text-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-[80px] h-[80px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        blogs && (
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
        )
      )}
    </>
  );
}
