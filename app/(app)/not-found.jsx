"use client";
import { PrimaryBtn } from "@/components/btn";
import { redirect } from "next/navigation";

export default function NotFound({}) {
   return (
      <main className="w-full h-full flex flex-col items-center justify-center">
         <h1 className="text-primary text-4xl font-bold">404 Page not found</h1>
         <p className="my-4 text-sm text-center font-normal">
            The page you are looking for might have been removed,
            <br /> had its name changed, or is temporarily unavailable.
         </p>
         <PrimaryBtn onClick={() => redirect("/")} className="bg-primary">
            Go back home
         </PrimaryBtn>
      </main>
   );
}
