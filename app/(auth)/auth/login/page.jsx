"use client";
import PrimaryBtn from "@/components/btn/primary";
import { loginServices } from "@/services/auth";
import { loginSuccess } from "@/store/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function Page() {
   const userName = useRef();
   const password = useRef();
   const dispatch = useDispatch();
   const router = useRouter();

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(userName.current.value, password.current.value);
      loginServices({
         email: userName.current.value,
         password: password.current.value,
      }).then((data) => {
         console.log(data.data);
         dispatch(loginSuccess(data.data));
         router.push("/");
      });
   };

   return (
      <>
         <header className="absolute top-10 text-white">
            <h1 className="text-4xl font-semibold">Log In</h1>
            <h2 className="text-sm">Please log in to use the app</h2>
         </header>
         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="sliding px-3 py-2 bg-white flex items-center gap-2 border relative border-tertiary shadow shadow-tertiary rounded-2xl ">
               <i className="bx bx-user"></i>
               <input
                  type="text"
                  className="w-full !bg-transparent outline-none"
                  required
                  ref={userName}
               />
               <span>UserName Or Email</span>
            </label>
            <label className="sliding px-3 py-2 bg-white flex items-center gap-2 border relative border-tertiary shadow shadow-tertiary rounded-2xl ">
               <i className="bx bx-lock-alt"></i>
               <input
                  type="password"
                  className="w-full !bg-transparent outline-none"
                  required
                  ref={password}
               />
               <span>Password</span>
            </label>
            <div className="flex justify-between items-center text-xs">
               <label className=" flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="whitespace-nowrap">Remember Me</span>
               </label>
               <Link href="./">Forgot Password?</Link>
            </div>
            <PrimaryBtn type="submit" className="my-6">Login</PrimaryBtn>
            {/* <br />  */}
            <p className="text-sm text-center">
               Don't Have As Account
               <Link href="auth/register" className="ml-2 text-primary">
                  Sing Up
               </Link>
            </p>
         </form>
      </>
   );
}
