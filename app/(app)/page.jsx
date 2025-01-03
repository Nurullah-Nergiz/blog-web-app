"use client";

import { Ad } from "@/components/Ad";
import { Avatar } from "@/components/widgets/avatar";
import Post from "@/components/widgets/post";
import Link from "next/link";
import { RecommendedPeopleWidget } from "@/components/widgets/RecommendedPeople";
import { getExplore } from "@/services/explore";
import { useEffect, useState } from "react";
import Posts from "@/components/post";

export default function Home() {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      getExplore().then(({ data = [], status }) => {
         console.log(data, status);
         setPosts(data);
      });
   }, []);

   return (
      <>
         <main className="w-full h-h-full mb-4 flex gap-4">
            <div className="flex-1 mx-auto ">
               <div className="w-full h-52 mb-4 p-4 bg-secondary rounded-xl">
                  new post
               </div>
               <Posts posts={posts} />
            </div>
         </main>
         <aside className=" max-w-sm pl-4 flex-1 flex flex-col gap-4">
            <Ad />
            <RecommendedPeopleWidget />
         </aside>
      </>
   );
}
