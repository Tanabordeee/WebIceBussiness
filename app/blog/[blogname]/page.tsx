import Nav from "@/app/navbar";
import BlogRenderPage from "./blogrenderpage";

interface BlogPageProps {
  params: Promise<{ blogname: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { blogname } = await params; 
  return (
    <>
      <Nav />
      {blogname ? <BlogRenderPage blogname={blogname} /> : <>NOT FOUND</>}
    </>
  );
}