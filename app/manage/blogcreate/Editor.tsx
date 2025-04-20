'use client';

import { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import type { OutputData } from '@editorjs/editorjs';
export default function Editor({
    onChange,
    initialData,
  }: {
    onChange: (data: OutputData) => void;
    initialData?: OutputData;
  }) {
    const ref = useRef<EditorJS | null>(null);
  
    useEffect(() => {
      if (!ref.current) {
        const editor = new EditorJS({
          holder: 'editorjs',
          tools: {
            header: Header,
            list: List,
            paragraph: Paragraph,
          },
          data: initialData || undefined,
          onChange: async () => {
            const content = await editor.saver.save();
            onChange(content);
          },
        });
  
        ref.current = editor;
      }
  
      return () => {
        if (ref.current?.destroy) {
          ref.current.destroy();
          ref.current = null;
        }
      };
    }, [initialData, onChange]);
  
    return <div id="editorjs" className="bg-white border rounded p-4 min-h-[300px]" />;
  }
  