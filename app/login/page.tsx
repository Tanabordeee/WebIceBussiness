'use client';
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Script from "next/script";
export default function Login() {
    const router = useRouter();
    const [loginAttempts, setLoginAttempts] = useState(0);
    const [isLocked, setIsLocked] = useState(false);
    const MAX_ATTEMPTS = 10;
    const LOCK_TIME = 300000;

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if (isLocked) {
            Swal.fire({
                icon: "error",
                title: "Account Locked",
                text: "Too many failed attempts. Please try again in 5 minutes.",
            });
            return;
        }

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const password = formData.get("password") as string;
        const token = (document.querySelector('[name="cf-turnstile-response"]') as HTMLInputElement)?.value;
        try{
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_Login}`, {
                name,
                password,
                token
            });

            if(res.status == 200) {
                setLoginAttempts(0);
                Swal.fire({
                    title : "Login Success",
                    icon : "success",
                    text : "Welcome to system!"
                })
                router.push("/manage/product")
            } else {
                handleFailedLogin();
            }
        } catch(err) {
            handleFailedLogin();
        }
    }

    const handleFailedLogin = () => {
        const newAttempts = loginAttempts + 1;
        setLoginAttempts(newAttempts);
        
        if (newAttempts >= MAX_ATTEMPTS) {
            setIsLocked(true);
            setTimeout(() => {
                setIsLocked(false);
                setLoginAttempts(0);
            }, LOCK_TIME);
            
            Swal.fire({
                icon: "error",
                title: "Account Locked",
                text: "Too many failed attempts. Please try again in 5 minutes.",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Login Failure",
            });
        }
    }

    return (
        <>
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
        <div className="h-screen flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label>
                    <p className="mr-5">Name</p>
                    <input type="text" name="name" className="border p-2 rounded w-full" required />
                </label>
                <label>
                    <p className="mr-5">Password</p>
                    <input type="password" name="password" className="border p-2 rounded w-full" required/>
                </label>
                <div 
                        className="cf-turnstile" 
                        data-sitekey="0x4AAAAAABL9ZnOgZ01ehtZg" 
                        data-theme="light"
                    ></div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">LOGIN</button>
            </form>
        </div>
        </>
        
    );
}
