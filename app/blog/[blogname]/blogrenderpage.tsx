"use client";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import Head from "next/head";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";

type BlogProps = {
  title: string;
  slug: string;
  content: string;
  coverImage: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  publishedAt: Date;
};

type BlogRenderPageProps = {
  blogname: string;
};

export default function BlogRenderPage({ blogname }: BlogRenderPageProps) {
  const [blog, setBlog] = useState<BlogProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Add error state

  const getBlog = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/blog?blogname=${blogname}`
      );
      if (response.data?.blog) {
        setBlog(response.data?.blog);
      } else {
        setError("Blog not found");
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setError("Blog not found"); // Set error message if AxiosError
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (blogname) {
      getBlog();
    }
  }, [blogname]);

  return (
    <article className="p-10">
      {error ? (
        <h1 className="text-9xl text-center font-bold">{error}</h1>
      ) : blog ? (
        <div className="justify-center items-center flex flex-col">
          <Head>
            <title>{blog.metaTitle}</title>
            <meta name="description" content={blog.metaDescription} />
            <meta name="keywords" content={blog.keywords.join(", ")} />
            <meta property="og:title" content={blog.metaTitle} />
            <meta property="og:description" content={blog.metaDescription} />
            <meta property="og:image" content={blog.coverImage} />
            <meta property="og:type" content="article" />
          </Head>
          <h1 className="text-6xl text-center font-bold">{blog.title}</h1>
          {blog.coverImage && (
            <div className="w-full h-[300px] relative overflow-hidden rounded-md mb-4 p-5 mt-5 rounded-lg">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-contain object-center rounded-lg"
              />
            </div>
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog.content),
            }}
            className="w-full max-w-full break-words"
          />
        </div>
      ) : loading ? (
        <p>กำลังโหลด...</p>
      ) : (
        <h1 className="text-xl font-bold">Blog Name: {blogname} NOT FOUND</h1>
      )}
    </article>
  );
}
