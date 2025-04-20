"use client";
import axios from "axios";
import Swal from "sweetalert2";
import { FormEvent, useEffect, useState } from "react";

type Product = {
  _id: string;
  url: string;
  alt_description: string;
};
export default function ManageProduct() {
  const [product, setProduct] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [createStatus , SetcreateStatus] = useState<boolean | null>(null);
  const [url , Seturl] = useState<string | null>(null);
  const [alt_description , SetaltDescription] = useState<string | null>(null);
  async function getProduct() {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`);
      if (res.data?.customer) {
        setProduct(res.data.customer);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  const handleInputChange = (id: string, field: string, value: string) => {
    setProduct((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleUpdate = async (id: string) => {
    const updatedProduct = product.find((item) => item._id === id);
    if (!updatedProduct) return;

    try {
      const result = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/product`,
        {
          _id:updatedProduct._id,
          url: updatedProduct.url,
          alt_description: updatedProduct.alt_description,
        }
      );
      if (result.status === 200) {
        Swal.fire({
          title: "Update Success",
          icon: "success",
          text: "Product updated successfully!",
        });
        setEditingId(null);
      } else {
        throw new Error("Update failed");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Update Failure",
        text: "Something went wrong!",
      });
    }
  };
  const handleDelete = async (id:string)=>{
    try{
        const result = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/product?_id=${id}`);
        if(result.status === 200) {
            Swal.fire({
                title: "Delete Success",
                icon: "success",
                text: "Product deleted successfully!",
              });
            setProduct((prev)=>prev.filter((item)=>item._id !== id))
        } else {
            throw new Error("Delete failed");
        }

    }catch(error){
        Swal.fire({
            icon: "error",
            title: "Delete Failure",
            text: "Something went wrong!",
          });
    }
  }
  const handleCreate = async (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
        const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product`,{
            url,
            alt_description
        })
        if(result.status === 200){
            Swal.fire({
                title: "Product created",
                icon: "success",
                text: "Product created successfully!",
            });
        }else{
            throw new Error("created failed");
        }
    }catch(error){
        Swal.fire({
            icon: "error",
            title: "Delete Failure",
            text: `${error}`,
          });
    }
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <nav className="flex w-full justify-around items-center p-5">
        <label>Manage Product</label>
        <button className="bg-green-200 p-5 rounded" onClick={() => SetcreateStatus(prev => !prev)}>Create Product</button>
      </nav>
      {createStatus && <>
        <form action="" onSubmit={handleCreate} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-20 bg-white border rounded shadow-lg gap-5">
        <label className="flex gap-3 w-full truncate mb-5">
              <p className="p-2">URL:</p>
              <input
                className="border p-2 w-full"
                type="text"
                onChange={(e)=>{Seturl(e.target.value)}}
              />
        </label>
            <label className="flex gap-3 w-full mb-5 truncate">
              <p className="p-2">ALT:</p>
              <input
                className="p-2 border w-full"
                type="text"
                onChange={(e)=>{SetaltDescription(e.target.value)}}
              />
            </label>
            <button type="submit" className="border w-full p-3 rounded bg-green-200">Submit</button>
        </form>
      </>}
      {product.length > 0 ? (
        product.map((item) => (
          <form
            className="flex flex-col gap-2 border p-5 mb-5 w-[50%] rounded"
            key={item._id}
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(item._id);
            }}
          >
            <p className="w-full truncate">{item._id}</p>
            <label className="flex gap-3 w-full truncate">
              <p className="p-2">URL:</p>
              <input
                className="p-2 w-full"
                type="text"
                value={item.url}
                disabled={editingId !== item._id}
                onChange={(e) =>
                  handleInputChange(item._id, "url", e.target.value)
                }
              />
            </label>
            <label className="flex gap-3 w-full truncate">
              <p className="p-2">ALT:</p>
              <input
                className="p-2 w-full"
                type="text"
                value={item.alt_description}
                disabled={editingId !== item._id}
                onChange={(e) =>
                  handleInputChange(item._id, "alt_description", e.target.value)
                }
              />
            </label>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() =>
                  setEditingId(editingId === item._id ? null : item._id)
                }
                className="border p-3 rounded bg-blue-100"
              >
                {editingId === item._id ? "Cancel" : "Edit"}
              </button>
              {editingId === item._id && <button name="save" className="rounded p-3 bg-green-200" type="submit">Save</button>}
              {editingId != item._id &&<button type="button" onClick={()=> handleDelete(item._id)} className="border p-3 rounded bg-red-200">Delete</button>}
            </div>
          </form>
        ))
      ) : (
        <>Product loading...</>
      )}
    </div>
  );
}
