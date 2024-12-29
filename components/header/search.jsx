"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export const Search = () => {
   const [search, setSearch] = useState("");
   const searchRef = useRef();
   const router = useRouter();

   const submit = (e) => {
      e.code == "Enter"
         ? router.push(`/search/${e.target.value.trim().replaceAll(" ", "+")}`)
         : "";
   };

   return (
      <div className="hidden sm:flex max-w-80 text-secondary relative">
         <label className="bx bx-search py-2 px-3 flex items-center gap-2 border border-current rounded-2xl text-2xl">
            <input
               type="text"
               className="w-full bg-transparent text-base outline-none "
               placeholder="Search..."
               onKeyDown={submit}
               ref={searchRef}
               onChange={(e) => setSearch(e.target.value)}
               autoFocus
            />
            {!search ? (
               <button className="bx bx-microphone"></button>
            ) : (
               <button
                  className="bx bx-x"
                  onClick={() => setSearch("")}></button>
            )}
         </label>
         <ul
            className={`${
               !search ? "hidden" : "hidden"
            } h-80 py-2 px-3 bg-white absolute -right-0 top-8 -left-0 border border-t-0 border-current rounded-b-xl`}>
            <hr />
            <li className="w">
               <i className="bx bx-search text-2xl"></i>a
            </li>
         </ul>
      </div>
   );
};
