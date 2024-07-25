import { Header } from "@/components/header/index";
import { Nav } from "@/components/nav";



export default function RootLayout({ children }) {
   return (
      <>
         <Nav />
         <section className="w-full px-8 flex-1">
            <Header />
            <>{children}</>
         </section>
      </>
   );
}
