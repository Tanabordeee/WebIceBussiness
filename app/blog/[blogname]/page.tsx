import Nav from "@/app/navbar";
import BlogRenderPage from "./blogrenderpage";

type ParamsType = Promise<{ blogname: string }>;


export default async function BlogPage({ params }: { params: ParamsType }) {
  const { blogname } = await params;
  return (
    <>
      <Nav />
      {blogname ? <BlogRenderPage blogname={blogname} /> : <>NOT FOUND</>}
    </>
  );
}