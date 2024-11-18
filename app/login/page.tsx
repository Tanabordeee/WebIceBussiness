'use client';
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
export default function Login() {
    const router = useRouter();
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const password = formData.get("password") as string;
        try{
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_Login}`, {
                name,
                password,
            });

            if(res.status == 200) {
                Swal.fire({
                    title : "Login Success",
                    icon : "success",
                    text : "Welcome to system!"
                })
                router.push("/manage/product")
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Login Failure",
                    text: "Something went wrong!",
                  });
            }
        }catch(err : any){
            Swal.fire({
                icon: "error",
                title: "Login Failure",
                text: "Something went wrong!",
              });
        }
    }
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label>
                    <p className="mr-5">Name</p>
                    <input type="text" name="name" className="border p-2 rounded" required />
                </label>
                <label>
                    <p className="mr-5">Password</p>
                    <input type="password" name="password" className="border p-2 rounded" required/>
                </label>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">LOGIN</button>
            </form>
        </div>
    );
}
