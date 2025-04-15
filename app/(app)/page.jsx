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
         setPosts([...data]);
      });
   }, []);

   return (
      <>
         <main className="w-full h-h-full mb-4 flex gap-4">
            <section className="flex-1 mx-auto ">
               <div className="w-full h-52 mb-4 p-4 bg-secondary text-white rounded-xl">
                  Yeni gönderi ekle
               </div>
               <Posts posts={posts} />
            </section>
         </main>
         <aside className=" min-w-96 pl-4 w-1/3 flex flex-col gap-4">
            {/* <Ad /> */}
            <RecommendedPeopleWidget />
         </aside>
      </>
   );
}
