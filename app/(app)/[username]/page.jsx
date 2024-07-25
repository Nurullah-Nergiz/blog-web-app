import { getUserPosts } from "@/services/user";
import Link from "next/link";

export default async function Page() {
   // console.log((await getUserPosts("65b2543de059ab865c0eb763")).data);
   // const userPosts = (await getUserPosts("65b2543de059ab865c0eb763")).data;

   return (
      <section className="">
         {/* {userPosts.map((post) => (
            <Link
               href={`/posts/${post?.slug}`}
               key={post?._id}
               className="h-80 block">
               <b className="w">{post?.title}</b>
               <p className="text-sm">{post?.description }</p>
            </Link>
         ))} */}
      </section>
   );
}
