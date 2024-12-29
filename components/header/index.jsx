"use server";
import { Search } from "./search";
import { Avatar } from "@/components/widgets/avatar";

import { SecondaryBtn, PrimaryBtn } from "@/components/btn";
import NavbarBtn from "./navbarBtn";
import useAuthUser from "@/hooks/auth";
// import { usePathname, useRouter } from "next/router";

export const Header = async () => {
   const user = await useAuthUser();
   // const router = useRouter();
   // const pathname = usePathname();

   return (
      <header className="h-28 px-8 flex items-center justify-between ">
         <section className="flex-1 flex items-center gap-4">
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
                  <SecondaryBtn
                     onClick={() =>
                        router.push(`/auth/register?redirect=${pathname}`)
                     }>
                     Register
                  </SecondaryBtn>
                  <PrimaryBtn
                     onClick={() =>
                        router.push(`/auth/login?redirect=${pathname}`)
                     }>
                     Login
                  </PrimaryBtn>
               </>
            )}
         </section>
      </header>
   );
};
