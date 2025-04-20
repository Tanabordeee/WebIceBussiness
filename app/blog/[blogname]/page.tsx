"use client";
import Nav from "@/app/navbar";
import BlogRenderPage from "./blogrenderpage";
import { use } from "react";
type Params = Promise<{blogname:string}>

export default function BlogPage({ params }: { params: Params }) {
  const { blogname } = use(params); 
  return (
    <>
      <Nav />
      {blogname ? <BlogRenderPage blogname={blogname} /> : <>NOT FOUND</>}
    </>
  );
}
