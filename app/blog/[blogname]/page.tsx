import Nav from "@/app/navbar";
import BlogRenderPage from "./blogrenderpage";

type Props = {
  params: {
    blogname: string;
  };
};

export default async function BlogPage({ params }: Props) {
    const { blogname } = params || {};
  return (
    <>
      <Nav />
      {blogname ? <BlogRenderPage blogname={blogname} /> : <>NOT FOUND</>}
    </>
  );
}
