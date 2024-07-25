import { Ad } from "@/components/Ad";
import { Avatar } from "@/components/widgets/avatar";
import Post from "@/components/widgets/post";
import Link from "next/link";
import { WidgetVertical } from '@/components/widgets/vertical';

export default function Home() {
   return (
      <>
         <main className="mb-4 flex gap-4">
            <div className="max-w-screen-xl flex-1 mx-auto flex flex-col gap-4">
               <div className="w-full h-52 p-4 bg-secondary rounded-xl">
                  <h1 className="text-white">Title</h1>
               </div>
               <div className=" flex-1 flex gap-4 bg-white shadow shadow-tertiary rounded-2xl overflow-hidden">
                  <Post />
                  
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
