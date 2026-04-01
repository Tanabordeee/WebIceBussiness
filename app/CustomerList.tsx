"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface Customer {
  url: string;
  alt_description: string;
}

export default function CustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  async function getCustomers() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/product`
      );
      if (response.data?.customer) {
        setCustomers(response.data.customer);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getCustomers();
  }, []);

  const duplicateImage = [...customers, ...customers]; // พอ 2 รอบพอ (smooth แล้ว)

  return (
    <div className="w-full overflow-hidden">
      {customers.length > 0 ? (
        <div className="relative">
          {/* fade ซ้าย-ขวา (Apple style) */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* track */}
          <div className="flex gap-4 animate-scroll">
            {duplicateImage.map((item, index) => (
              <div
                key={`${item.alt_description}-${index}`}
                className="w-[260px] h-[180px] flex-shrink-0"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <img
                    src={item.url}
                    alt={item.alt_description}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-40">
          <div className="animate-pulse text-gray-400">Loading...</div>
        </div>
      )}
    </div>
  );
}