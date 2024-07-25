"use client";

import { Avatar } from "@/components/widgets/avatar";
import Post from "@/components/widgets/post";
import { getSearch } from "@/services/search";
import { useEffect, useState } from "react";

export default function Page({ params }) {
   const [searchRes, setSearch] = useState({});
   useEffect(() => {
      getSearch({ q: params.query }).then((data) => {
         setSearch(data.data);
      });
   }, [params.query]);
   return (
      <>
         <h1 className="">Searching {params.query}</h1>
         <section className="flex gap-4">
            <main className="flex-1 flex flex-col gap-4">
               {searchRes.posts?.map((post) => {
                  return (
                     <>
                        <Post key={post._id} post={post} />
                     </>
                  );
               })}

               {searchRes.users?.map((user) => {
                  return (
                     <>
                        <Avatar
                           key={user._id}
                           userAvatar="https://picsum.photos/64/64"
                           userName={`${user?.firstName} ${user?.lastName}`}
                           subTitle="mustafa-vural"
                        />
                     </>
                  );
               })}
            </main>
            <aside className="max-w-xs w-full h-min p-4 bg-white shadow shadow-tertiary rounded-2xl overflow-hidden">
               <h2 className="">Filter</h2>
            </aside>
         </section>
      </>
   );
}
