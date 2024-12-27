"use client";
import { VList, WindowVirtualizer } from "virtua";
import Post from "../widgets/post";

export default function Posts({ posts = [] }) {
   return (
      <>
         <WindowVirtualizer className="!h-full">
            {posts.map((post, index) => (
               <Post key={post._id} post={post} />
            ))}
         </WindowVirtualizer>
      </>
   );
}
