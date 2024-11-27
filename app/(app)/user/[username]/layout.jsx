"use client";

import { getUser } from "@/services/user";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Layout({ children, params }) {
   const [user, setUser] = useState({
      userAvatar: "https://picsum.photos/seed/picsum/64/64",
      userName: "Nurullah Nergiz",
      userName: "nurullah-nergiz",
   });

   useEffect(() => {
      getUser(params.username).then((res) => {
         setUser(res.data);
         console.log(res.data);
      });
   }, [params.username]);

   return (
      <main>
         <header className="h-64">
            <div className="flex items-center gap-4">
               <img
                  src={user?.userAvatar}
                  className="w-48 h-48 p-1 rounded-full border-4 border-primary border-r-transparent border-b-transparent"
                  alt="user avatar"
               />
               <div className="flex-1">
                  <h1 className="text-2xl whitespace-nowrap">
                     {`${user?.firstName} ${user?.lastName}`}&nbsp;(@{user?.userName})
                  </h1>

                  <p className="text-secondary whitespace-nowrap"></p>
                  <p className="max-w-lg">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Ullam ipsam ab veritatis non, eaque fuga doloribus! Velit
                     perspiciatis, temporibus inventore, quasi necessitatibus in
                     deleniti vel dolor nisi earum, ullam sed.
                  </p>
               </div>
            </div>
         </header>
         <nav className="my-4 flex items-center gap-4">
            <Link href={`/users/${user?.userName}`}>Blogs</Link>
            <Link href={`/users/${user?.userName}`}>Lists</Link>
            <Link href={`/users/${user?.userName}`}>Home</Link>
            <Link href={`/users/${user?.userName}`}>About</Link>
         </nav>
         <hr />
         <section className="h-full mt-4 flex">
            <main className="flex-1 ">{children}</main>
            <aside className="max-w-80 w-full p-4">
               aside <br />
               {params.username}
            </aside>
         </section>
      </main>
   );
}
