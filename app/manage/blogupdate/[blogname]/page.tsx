'use client'
import Nav from "@/app/navbar";
import BlogUpdatePageHelper from "./blogupdatepage";
import { use } from "react";
import Link from "next/link";
type Params = Promise<{blogname:string}>
export default function BlogUpdatePage({ params }: { params: Params }) {
  const { blogname } = use(params); 
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center">
      <div className="flex w-[50%] gap-5 p-2">
      <Link
            href="/manage/product"
            className="bg-sky-200 p-5 rounded w-[50%] text-center"
          >
            Manage Product
          </Link>
          <Link
            href="/manage/blogs"
            className="bg-amber-200 p-5 rounded w-[50%] text-center"
          >
            Manage Blogs
        </Link>
      </div>
      {blogname ? <BlogUpdatePageHelper blogname={blogname} /> : <>NOT FOUND</>}
      </div>

    </>
  );
}
