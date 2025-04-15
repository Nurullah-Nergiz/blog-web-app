import { Header } from "@/components/header/index";
import { Nav } from "@/components/nav";

export const metadata = {
   title: "Settings - Emegen",
};

export default async function RootLayout({ children }) {
   const menu = {
      Hesap: [
         {
            icon: "bx bx-user",
            text: "Profili Düzenle",
            link: "/settings/edit-profile",
         },
         {
            icon: "bx bx-lock",
            text: "Şifre değiştir",
            link: "/settings/change-password",
         },
         {
            icon: "",
            text: "",
            link: "/settings/",
         },
      ],
      "Dış görünüş": [
         {
            icon: "bx bx-palette",
            text: "Tema ayarları",
            link: "/settings/theme",
         },
      ],
   };
   return (
      <>
         <Nav menu={menu} />
         <section className="w-full flex-1">
            <Header />
            <section className="h-full px-8 flex gap-4">{children}</section>
         </section>
      </>
   );
}
