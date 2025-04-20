import Nav from "@/app/navbar";
import BlogRenderPage from "./blogrenderpage";

interface Props {
  params: { blogname: string };
}

export default function BlogPage({ params }: Props) {
  const { blogname } = params;
  return (
    <>
      <Nav />
      {blogname ? <BlogRenderPage blogname={blogname} /> : <>NOT FOUND</>}
    </>
  );
}