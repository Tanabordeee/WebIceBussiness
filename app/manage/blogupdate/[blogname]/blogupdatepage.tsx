'use client'
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

type BlogProps = {
  _id : number;
  title: string;
  slug: string;
  content: string;
  coverImage: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  publishedAt: Date;
};

export default function BlogUpdatePageHelper({ blogname }: {blogname: string }) {
  const [blog, setBlog] = useState<BlogProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getBlog = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog?blogname=${blogname}`);
      if (response.data?.blog) {
        setBlog(response.data.blog);
      } else {
        setError("Blog not found");
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setError("Blog not found");
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (!blog) return;

    if (name === "keywords") {
      setBlog({ ...blog, [name]: value.split(",").map((k) => k.trim()) });
    } else if (name === "publishedAt") {
      setBlog({ ...blog, [name]: new Date(value) });
    } else {
      setBlog({ ...blog, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blog) return;

    try {
      const blogWithId = { ...blog, _id : blog._id };
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/blog`, blogWithId);
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'สำเร็จ!',
          text: 'บทความได้รับการอัปเดตเรียบร้อยแล้ว',
        });
        setError(null);
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: err.response?.data?.message || "ไม่สามารถอัปเดตบทความได้",
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: "เกิดข้อผิดพลาดที่ไม่คาดคิด",
        });
      }
    }
  };

  if (loading) return <p className="text-center">กำลังโหลด...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 space-y-4">
      <input name="title" value={blog?.title || ""} onChange={handleChange} placeholder="ชื่อบทความ" required className="w-full p-2 border rounded" />
      <input name="slug" value={blog?.slug || ""} onChange={handleChange} placeholder="Slug" required className="w-full p-2 border rounded" />
      <textarea name="content" value={blog?.content || ""} onChange={handleChange} placeholder="เนื้อหา" required className="w-full p-2 border rounded min-h-[150px]" />
      <input type="text" name="coverImage" value={blog?.coverImage || ""} onChange={handleChange} placeholder="ใส่ URL รูปปก" className="w-full p-2 border rounded" />
      {blog?.coverImage && <img src={blog.coverImage} alt="cover" className="w-full h-48 object-cover rounded" />}
      <input name="metaTitle" value={blog?.metaTitle || ""} onChange={handleChange} placeholder="Meta Title" required className="w-full p-2 border rounded" />
      <input name="metaDescription" value={blog?.metaDescription || ""} onChange={handleChange} placeholder="Meta Description" required maxLength={160} className="w-full p-2 border rounded" />
      <input name="keywords" value={blog?.keywords?.join(", ") || ""} onChange={handleChange} placeholder="Keywords (คั่นด้วย ,)" className="w-full p-2 border rounded" />
      <input
        type="date"
        name="publishedAt"
        value={blog?.publishedAt ? new Date(blog.publishedAt).toISOString().split("T")[0] : ""}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
        อัปเดตบทความ
      </button>
    </form>
  );
}
