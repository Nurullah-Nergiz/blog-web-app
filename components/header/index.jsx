"use server";
import { Search } from "./search";
import { Avatar } from "@/components/widgets/avatar";

import AuthHeader from "@/components/header/AuthHeader";
import Link from "next/link";
import NavbarBtn from "./navbarBtn";
import useAuthUser from "@/hooks/auth";
import Logo from "@/components/Logo";

export const Header = async () => {
   const user = await useAuthUser();

   return (
      <header className="h-20 px-8 flex items-center justify-between ">
         <section className="flex-1 flex items-center gap-4">
            <Link href="/" className="sm:hidden">
               <Logo />
            </Link>
            <NavbarBtn />
            <Search />
         </section>

         <section className="flex-1 flex items-center justify-end gap-4">
            {Object.keys(user).length > 0 ? (
               <>
                  <button className="bx bx-message-rounded-dots text-secondary text-2xl "></button>
                  <button className="bx bx-bell text-secondary text-2xl "></button>
                  <Avatar
                     userAvatar={user?.avatar}
                     name={`${user.name} `}
                     userName={user.userName}
                     className="sm:flex hidden"
                  />
                  <i className="bx bx-search text-2xl sm:hidden"></i>
               </>
            ) : (
               <>
                  <AuthHeader />
               </>
            )}
         </section>
      </header>
   );
};
