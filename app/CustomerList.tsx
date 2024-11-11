'use client'
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
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
      if (response.data?.customer) {
        setCustomers(response.data.customer);
      }
    } catch (err: any) {
      console.error("Error fetching customers:", err.message);
      throw new Error(err.message);
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
            <img
              src={item.url}
              alt={item.alt_description}
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
