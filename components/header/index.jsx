"use client";
import { useSelector } from "react-redux";
import { Search } from "./search";
import { Avatar } from "@/components/widgets/avatar";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { closeNavbar, openNavbar } from "@/store/uiStore";

export const Header = () => {
   const dispatch = useDispatch();

   const user = useSelector((state) => state.auth.user);
   const navbar =
      useSelector((state) => state.ui.navbar) === true ? true : false;

   return (
      <header className="h-20 px-8 -mx-7 bg-gray-50 flex items-center justify-between top-0 sticky">
         <section className="flex items-center gap-4">
            <div className="w-min whitespace-nowrap ">
               <button
                  className="bx bx-chevron-left p-0 text-3xl font-bold disabled:text-secondary disabled:font-normal"
                  onClick={() => dispatch(closeNavbar())}
                  disabled={!navbar}></button>
               <button
                  className="bx bx-chevron-right p-0 text-3xl font-bold disabled:text-secondary disabled:font-normal"
                  onClick={() => dispatch(openNavbar())}
                  disabled={navbar}></button>
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
