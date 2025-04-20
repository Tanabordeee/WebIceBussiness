import Nav from "@/app/navbar";
import BlogUpdatePageHelper from "./blogupdatepage";
type Props = {
  params: {
    blogname:string;
  };
};

export default async function BlogUpdatePage({ params }: Props) {
    const { blogname} = await params || {};
    
  return (
    <>
      <Nav />
      {blogname ? <BlogUpdatePageHelper blogname={blogname} /> : <>NOT FOUND</>}
    </>
  );
}
