import Nav from "@/app/navbar";
import BlogRenderPage from "./blogrenderpage";
type PageProps = {
  params: {
    blogname: string;
  };
};
export default async function BlogPage({ params }: PageProps) {
  return (
    <>
      <Nav />
      {params.blogname ? <BlogRenderPage blogname={params.blogname} /> : <>NOT FOUND</>}
    </>
  );
}
