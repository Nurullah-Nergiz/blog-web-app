import Link from "next/link";
import { Avatar } from "./avatar";

export default function Post({ post }) {
   return (
      <div className="p-4 flex flex-col gap-4 bg-white shadow shadow-tertiary rounded-2xl overflow-hidden">
         <header className="flex flex-col gap-4">
            <Avatar
               userAvatar="https://picsum.photos/64/64"
               userName={`${post?.author.firstName} ${post?.author.lastName}`}
               subTitle="mustafa-vural"
               fallowViable={true}>
               <details>
                  <summary className="bx bx-dots-vertical-rounded"></summary>
                  <div className="">a</div>
               </details>
            </Avatar>
         </header>
         <main className=" flex-1 flex flex-col gap-2">
            {post?.content}
            <img
               src="https://picsum.photos/720/405"
               // src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*DUigJ7aQ_CFSOuKCklMOow.gif"
               alt="title"
               className=""
            />
         </main>
         <footer className="flex items-center gap-4 text-2xl">
            <button className="bx bx-heart"></button>
            <button className="bx bx-message-rounded"></button>
            <button className="bx bx-bookmark ml-auto"></button>
            {/* <button className="bx bxs-bookmark-minus p-0"></button> */}
         </footer>
      </div>
   );
}
