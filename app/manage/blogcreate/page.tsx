'use client'

import { useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import Swal from 'sweetalert2';
import edjsHTML from 'editorjs-html';
import Nav from '@/app/navbar';
import DOMPurify from 'dompurify';
import type { OutputData } from '@editorjs/editorjs';
const Editor = dynamic(() => import('../blogcreate/Editor'), { ssr: false });

export default function BlogCreate() {
  const [form, setForm] = useState({
    title: '',
    slug: '',
    content: '',
    coverImage: '',
    metaTitle: '',
    metaDescription: '',
    keywords: '',
    publishedAt: '',
  });

  const [editorData, setEditorData] = useState<OutputData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const edjsParser = edjsHTML();
    if (!editorData) {
        return;
      }
    let htmlContent = edjsParser.parse(editorData);
    htmlContent = DOMPurify.sanitize(htmlContent);
    const blogData = {
      ...form,
      content: htmlContent,
      keywords: form.keywords.split(',').map((kw) => kw.trim()),
      publishedAt: form.publishedAt ? new Date(form.publishedAt) : null,
    };

    try {
      const res = await axios.post('/api/blog', blogData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status !== 201 ) throw new Error('ไม่สามารถสร้างบทความได้');
      Swal.fire({
        icon: 'success',
        title: 'สร้างบทความสำเร็จ!',
        text: 'บทความของคุณถูกสร้างเรียบร้อยแล้ว!',
      });
    } catch (err: unknown) {
        const errorMessage =
        err instanceof Error ? err.message : 'เกิดข้อผิดพลาดที่ไม่คาดคิด';
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: errorMessage,
      });
    }
  };

  return (
    <>
    <Nav/>
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 space-y-4">
      <input name="title" value={form.title} onChange={handleChange} placeholder="ชื่อบทความ" required className="w-full p-2 border rounded" />
      <input name="slug" value={form.slug} onChange={handleChange} placeholder="Slug" required className="w-full p-2 border rounded" />
      
      <Editor onChange={setEditorData} />

      <div>
        <input 
          type="text" 
          name="coverImage" 
          value={form.coverImage} 
          onChange={handleChange} 
          placeholder="ใส่ URL รูปปก" 
          className="w-full p-2 border rounded"
        />
        {form.coverImage && <p className="text-green-600">URL รูปปก: {form.coverImage}</p>}
      </div>

      <input name="metaTitle" value={form.metaTitle} onChange={handleChange} placeholder="Meta Title" required className="w-full p-2 border rounded" />
      <input name="metaDescription" value={form.metaDescription} onChange={handleChange} placeholder="Meta Description" required maxLength={160} className="w-full p-2 border rounded" />
      <input name="keywords" value={form.keywords} onChange={handleChange} placeholder="Keywords (คั่นด้วย ,)" className="w-full p-2 border rounded" />
      <input type="date" name="publishedAt" value={form.publishedAt} onChange={handleChange} className="w-full p-2 border rounded" />

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        สร้างบทความ
      </button>
    </form>
        
    </>
  );
}
