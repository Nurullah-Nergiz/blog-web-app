import { Header } from "@/components/header/index";
import { Nav } from "@/components/nav";

export default function RootLayout({ children }) {
   const isAuthenticated = true;
   const menu = {
      Menu: [
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
      ],
      List: [],
      General: [
         {
            icon: "bx bx-user",
            text: "Profile",
            link: "/profile",
         },
         {
            icon: "bx bx-cog",
            text: "Settings",
            link: "/settings",
         },
         {
            icon: "bx bx-log-out",
            text: "Logout",
            link: "auth/logout",
         },
      ],
   };

   if (!isAuthenticated) {
      delete menu.General;
   }

   return (
      <>
         <Nav menu={menu} />
         <section className="w-full flex-1">
            <Header />
            <section className="h-full px-8 flex gap-4">
               {children}
            </section>
         </section>
      </>
   );
}
