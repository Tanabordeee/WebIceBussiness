import Nav from "@/app/navbar";
import BlogRenderPage from "./blogrenderpage";

type Params = Promise<{blogname:string}>

export default async function BlogPage({params} : {params : Params}) {
  const { blogname } = await params;
  return (
    <>
      <Nav />
      {blogname ? <BlogRenderPage blogname={blogname} /> : <>NOT FOUND</>}
    </>
  );
}
