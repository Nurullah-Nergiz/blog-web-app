"use client";
import { ItemLink } from "./itemLink";
export const Nav = () => {
   const menu = [
      {
         icon: "bx bx-home-alt-2",
         text: "Browse",
         link: "/",
      },
      {
         icon: "bx bx-bookmark",
         text: "Bookmark",
         link: "/bookmarks",
      },
      {
         icon: "bx bx-bookmark",
         text: "Post",
         link: "/post",
      },
   ];

   const general = [
      {
         icon: "bx bx-user",
         text: "Profile",
         link: "/user/nurullah-nergiz",
      },
      {
         icon: "bx bx-cog",
         text: "Settings",
         link: "/Settings",
      },
      {
         icon: "bx bx-log-out",
         text: "Logout",
         link: "auth/logout",
      },
   ];
   /* console.log(router, router.pathname == "/" ? " text-primary" : "as"); */
   return (
      <nav className="sm:max-w-60 sm:relative">
         <div className="hidden max-h-screen w-min h-screen px-6 pr-8 sm:flex flex-col shadow-md shadow-gray-400 text-secondary sticky top-0 left-0 overflow-hidden">
            <div className="">
               <b className="h-20 text-black flex items-center ">logo</b>
            </div>
            <ul className="">
               <li className="text-xs text-gray-400 mb-3 ">Menu</li>
               {menu.map(({ icon, text, link }) => (
                  <li  key={text}>
                     <ItemLink icon={icon} text={text} link={link} />
                  </li>
               ))}
            </ul>
            <ul className="flex-1">
               <li className="text-xs text-gray-400 mb-3 ">List</li>
            </ul>
            <ul className="mb-4">
               <li className="text-xs my-4 text-gray-400 ">General</li>
               {general.map(({ icon, text, link }) => (
                  <li  key={text}>
                     <ItemLink icon={icon} text={text} link={link} />
                  </li>
               ))}
            </ul>
         </div>
         <section className="p-4 bg-slate-400 flex justify-around items-center fixed right-0 bottom-0 left-0 sm:hidden">
            <ItemLink icon="bx bx-home-alt-2" link="/" text="home" mode="col" />
            <ItemLink icon="bx bx-home-alt-2" link="/" text="home" mode="col" />
            <ItemLink icon="bx bx-home-alt-2" link="/" text="home" mode="col" />
            <ItemLink icon="bx bx-home-alt-2" link="/" text="home" mode="col"/>
         </section>
      </nav>
   );
};
