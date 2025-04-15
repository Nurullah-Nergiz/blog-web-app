import { Header } from "@/components/header/index";
import { Nav } from "@/components/nav";
import useAuthUser from "@/hooks/auth";

export default async function RootLayout({ children }) {
   const user = await useAuthUser();
   const isAuthenticated = typeof user._id === "string" ? true : false;
   
   const menu = {
      Menu: [
         {
            icon: "bx bx-home-alt-2",
            text: "Göz atmak",
            link: "/",
         },
         {
            icon: "bx bx-bookmark",
            text: "Yer işareti",
            link: "/bookmarks",
         },
         {
            icon: "bx bx-bar-chart-alt-2",
            text: "Analitik",
            link: "/analytics",
         },
      ],
      Genel: [
         {
            icon: "bx bx-user",
            text: "Profil",
            link: `/@${user?.userName}`,
         },
         {
            icon: "bx bx-cog",
            text: "Ayarlar ve Gizlilik",
            link: "/settings",
         },
         {
            icon: "bx bx-log-out",
            text: "Oturumu kapat",
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
            <section className="h-full sm:px-8 flex flex-col lg:flex-row gap-4">
               {children}
            </section>
         </section>
      </>
   );
}
