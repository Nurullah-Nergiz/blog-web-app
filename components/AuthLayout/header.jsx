"use client";
import AuthHeaderContext from "@/components/provider/authHeader";
import { useContext } from "react";

export default function AuthHeader({ children }) {
   const [authHeaderData, setAuthHeaderData] =
      useContext(AuthHeaderContext);
   return (
      <header className="h-0 mb-4 pt-[45%] relative overflow-hidden">
         <div className="w-[120%] h-[120%] bg-gradient-to-r from-red-500 to-primary -rotate-[22deg] rounded-l-[3rem] absolute right-0 bottom-16 -left-10"></div>
         <div className="p-4 text-white absolute top-4 bottom-20 left-4 z-10">
            <h1 className="text-4xl font-semibold">
               {authHeaderData?.title}
            </h1>
            <h2 className="text-sm">{authHeaderData?.description}</h2>
         </div>
      </header>
   );
}
