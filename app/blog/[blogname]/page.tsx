import Nav from "@/app/navbar";
import BlogRenderPage from "./blogrenderpage";


export default async function BlogPage({params} : {params: Promise<{blogname:string}>}) {
  const { blogname } = await params;
  return (
    <>
      <Nav />
      {blogname ? <BlogRenderPage blogname={blogname} /> : <>NOT FOUND</>}
    </>
  );
}