"use client"; // ระบุว่าเป็น Client Component

import dynamic from 'next/dynamic';

// โหลด MapEmbedContent แบบ dynamic
const MapEmbedContent = dynamic(() => import('./MapEmbedContent'), {
  ssr: false, // ปิด SSR ได้ใน Client Component
});

export default function MapEmbed() {
  return <MapEmbedContent />;
}