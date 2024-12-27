import { Header } from "@/components/header/index";
import { Nav } from "@/components/nav";

export default function RootLayout({ children }) {
   const menu = {
      Profile: [
         {
            icon: "bx bx-user",
            text: "Edit Profile",
            link: "/settings/edit-profile",
         },
         {
            icon: "bx bx-lock",
            text: "Change Password",
            link: "/settings/change-password",
         },
         {
            icon: "bx bx-bookmark",
            text: "Post",
            link: "/settings/",
         },
      ],
   };
   return (
      <>
         <Nav menu={menu} />
         <section className="w-full flex-1">
            <Header />
            <section className="h-full px-8 flex flex-col  overflow-scroll">
               {children}
            </section>
         </section>
      </>
   );
}
