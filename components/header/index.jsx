"use client";
import { useSelector } from "react-redux";
import { Search } from "./search";
import { Avatar } from "@/components/widgets/avatar";
import Link  from "next/link";

export const Header = () => {
   const user = useSelector((state) => state.auth.user);
   // console.log(user);

   return (
      <header className="h-20 px-8 -mx-7 bg-gray-50 flex items-center justify-between top-0 sticky">
         <section className="flex items-center gap-4">
            <div className="w-min whitespace-nowrap ">
               <button className="bx bx-chevron-left p-0 text-3xl disabled:text-secondary"></button>
               <button
                  className="bx bx-chevron-right p-0 text-3xl disabled:text-secondary"
                  disabled></button>
            </div>
            <Search />
         </section>

         <section className="flex items-center gap-4">
            {user ? (
               <>
                  <button className="bx bx-message-rounded-dots text-secondary text-2xl "></button>
                  <button className="bx bx-bell text-secondary text-2xl "></button>
                  <Avatar
                     userAvatar="https://picsum.photos/seed/picsum/64/64"
                     userName={`${user.firstName} ${user.lastName}`}
                     subTitle={user.userName}
                  />
               </>
            ) : (
               <>
                  <Link href="/auth/login">Login</Link>
               </>
            )}
         </section>
      </header>
   );
};
