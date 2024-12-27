"use client";

import { PrimaryBtn } from "@/components/btn";
import AuthHeaderContext from "@/components/provider/authHeader";
import Link from "next/link";
import { useContext, useEffect } from "react";

export default function RegisterPage({ children }) {
   const [authHeaderData, setAuthHeaderData] = useContext(AuthHeaderContext);

   useEffect(() => {
      setAuthHeaderData({
         title: "Register",
         description: "Please fill the your details",
      });
   }, []);

   const handleSubmit = (e) => {};

   return (
      <main className="flex-1 p-4 bg-white flex flex-col justify-between">
         <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative">
            <label className=" ">
               {/* <i className="bx bx-user"></i> */}
               <b className="mb-1 block">Email</b>
               <input
                  type="text"
                  className="w-full h-9 px-3 py-2 !bg-transparent border relative border-tertiary shadow shadow-tertiary rounded-2xl outline-none"
                  required
                  placeholder="example@emegen.com"
                  autoFocus
               />
            </label>
            <label className="mb-1 block">
               <b>Password</b>
               <input
                  type="password"
                  className="w-full h-9 px-3 py-2 !bg-transparent border relative border-tertiary shadow shadow-tertiary rounded-2xl outline-none"
                  required
                  //   ref={password}
               />
            </label>
            <label className="mb-1 block">
               <b>Password</b>
               <input
                  type="password"
                  className="w-full h-9 px-3 py-2 !bg-transparent border relative border-tertiary shadow shadow-tertiary rounded-2xl outline-none"
                  required
                  //   ref={password}
               />
            </label>
            <label className="flex items-center gap-2 text-xs select-none">
               <input type="checkbox" />
               <span className="whitespace-nowrap">
                  I accept{" "}
                  <Link
                     href="/terms"
                     className="text-primary underline underline-offset-4">
                     Terms and Conditions
                  </Link>
               </span>
            </label>
            <PrimaryBtn type="submit" className="bg-primary">
               Register
            </PrimaryBtn>
            {/* <br />  */}
         </form>
         <p className="text-sm text-center whitespace-nowrap select-none">
            Don't Have As Account &nbsp;
            <Link href="login" className="text-primary">
               Login
            </Link>
         </p>
      </main>
   );
}
