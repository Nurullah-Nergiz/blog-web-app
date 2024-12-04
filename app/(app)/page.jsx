"use client";

import { Ad } from "@/components/Ad";
import { Avatar } from "@/components/widgets/avatar";
import Post from "@/components/widgets/post";
import Link from "next/link";
import { WidgetVertical } from "@/components/widgets/vertical";
import { useEffect, useState } from "react";
import { getPosts } from "@/services/post";

export default function Home() {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      getPosts()
         .then(({data}) => {            
            console.log("data:", data)
            setPosts(data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   return (
      <>
         <main className="mb-4 flex gap-4">
            <div className="flex-1 mx-auto flex flex-col gap-4">
               <div className="w-full h-52 p-4 bg-secondary rounded-xl">
                  new post
               </div>
               <div className="w-full flex-1 flex flex-col gap-4 bg-white shadow shadow-tertiary rounded-2xl overflow-hidden">
                  {posts.map((post) => {
                     return <Post key={post._id} post={post} />;
                  })}

                  {/* </div> */}
                  {/* 421.875 */}
               </div>
               {/* <div className="h-screen"></div> */}
            </div>
            <aside className="max-w-80 pl-4 flex-1 flex flex-col gap-4">
               <Ad />
               <WidgetVertical />
            </aside>
         </main>
      </>
   );
}
