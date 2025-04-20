'use client'
import Nav from "@/app/navbar";
import BlogUpdatePageHelper from "./blogupdatepage";
import { use } from "react";
type Params = Promise<{blogname:string}>
export default function BlogUpdatePage({ params }: { params: Params }) {
  const { blogname } = use(params); 
  return (
    <>
      <Nav />
      {blogname ? <BlogUpdatePageHelper blogname={blogname} /> : <>NOT FOUND</>}
    </>
  );
}
