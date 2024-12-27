//
import { Avatar } from "@/components/widgets/avatar";
import Link from "next/link";

export default function BookmarksPage() {
   const bookmarks = [
      {
         img: "https://picsum.photos/320/180",
         title: "All posts",
         href: "/bookmarks/all",
      },
      {
         img: "https://picsum.photos/321/181",
         title: "Liked posts",
         href: "/bookmarks/liked",
      },
   ];

   return (
      <main className="">
         <section className="w-3/4">
            <h1 className="text-2xl font-bold">Bookmarks</h1>
            <div className="flex flex-wrap gap-4">
               {bookmarks.map((list, i) => (
                  <Link
                     className="max-w-80 p-4 flex flex-col gap-4  bg-white shadow shadow-white rounded-3xl"
                     href={list.href}
                     key={i}>
                     <img src={list.img} alt="" className="rounded-xl" />
                     <h1 className="overflow-hidden whitespace-nowrap text-ellipsis">
                        {list.title}
                     </h1>
                     <Avatar />
                  </Link>
               ))}
            </div>
         </section>
         {/* <aside className="w-1/4 bg-secondary"></aside> */}
      </main>
   );
}
