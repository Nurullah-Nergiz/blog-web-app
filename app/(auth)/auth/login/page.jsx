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
         console.log(data.data)
         dispatch(loginSuccess(data.data));
         router.push("/")
      });
   };

   return (
      <form onSubmit={handleSubmit}>
         <label className="px-3 py-2 bg-white flex items-center gap-2 border relative border-tertiary shadow shadow-tertiary rounded-2xl ">
            <i className="bx bx-user"></i>
            <input
               type="text"
               className="w-full bg-transparent outline-none"
               required
               ref={userName}
            />
            <span>UserName Or Email</span>
         </label>
         <label className="px-3 py-2 bg-white flex items-center gap-2 border relative border-tertiary shadow shadow-tertiary rounded-2xl ">
            <i className="bx bx-lock-alt"></i>
            <input
               type="password"
               className="w-full bg-transparent outline-none"
               required
               ref={password}
            />
            <span>Password</span>
         </label>
         <span className="flex justify-between">
            <Link href="./">Forgot</Link>
            {/* <button  className="px-3 py-2 bg-primary text-white">Login</button> */}
         </span>
         <PrimaryBtn type="submit">Login</PrimaryBtn>
      </form>
   );
}
