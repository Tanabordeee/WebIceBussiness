"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AxiosError } from "axios";

interface Customer {
  url: string;
  alt_description: string;
}

export default function CustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  async function getCustomers() {
    try{
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`);
      if (response.data?.customer) {
        setCustomers(response.data.customer);
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        throw new Error(err.message);
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  }
  useEffect(() => {
      getCustomers();
  }, []);
  const duplicateImage = [...customers , ...customers , ...customers];
  return (
    <div className="w-full">
      {customers.length > 0 ? (
        <div  className="scroll-wrapper overflow-hidden relative">
          <div className="scroll-track flex">
            {duplicateImage.map((item, index) => (
            <div 
              key={`${item.alt_description}-${index}`}
              className="image-item min-w-[250px] h-48 flex-shrink-0 p-2"
            >
              <div className="w-full h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
        <div className="flex items-center justify-center">
          <div className="loader" />
        </div>
      )}
    </div>
  );
}
