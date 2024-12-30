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
            icon: "bx bx-bar-chart-alt-2",
            text: "Analytics",
            link: "/analytics",
         },
      ],
      General: [
         {
            icon: "bx bx-user",
            text: "Profile",
            link: "/profile",
         },
         {
            icon: "bx bx-cog",
            text: "Settings And Privacy",
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
         <section className="w-full px-4 flex-1">
            <Header />
            <section className="h-full px-4 sm:px-8 flex flex-col lg:flex-row gap-4">
               {children}
            </section>
         </section>
      </>
   );
}
