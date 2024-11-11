'use client'
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
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
      if (response.data?.customer) {
        setCustomers(response.data.customer);
      }
    } catch (err : unknown) {
      if (err instanceof AxiosError) {
        throw new Error(err.message);
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  }

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="w-[80%] flex overflow-x-auto">
      {customers.length > 0 ? (
        customers.map((item, index) => (
          <div className="min-w-[200px] h-48 flex-shrink-0 p-2" key={index}>
            <Image
              src={item.url}
              alt={item.alt_description}
              width={400}  // Example fixed width
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        ))
      ) : (
        <div>DON'T HAVE IMAGE</div>
      )}
    </div>
  );
}
