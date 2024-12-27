"use client";
import Link from "next/link";
import Logo from "../Logo";
import { ItemLink } from "@/components/nav/itemLink";

export const Nav = ({ menu }) => {
   return (
      <nav className="sm:max-w-60 sm:relative">
         <section className="hidden max-h-screen w-min h-screen px-6 pr-8 sm:flex flex-col shadow-md shadow-gray-400 text-secondary sticky top-0 left-0 overflow-hidden">
            <Link href="/">
               <Logo />
            </Link>
            <div className=" h-full flex flex-col">
               {Object.entries(menu).map(([key, value]) => (
                  <ul key={key} className={`${key} block`}>
                     <li className="w-min text-xs font-bold text-tertiary">{key}</li>
                     {value.map((item, index) => (
                        <ItemLink key={index} {...item} />
                     ))}
                  </ul>
               ))}
            </div>
         </section>
         <section className="p-4 bg-slate-400 flex justify-around items-center fixed right-0 bottom-0 left-0 sm:hidden">
            <ItemLink icon="bx bx-home-alt-2" link="/" text="home" mode="col" />
            <ItemLink icon="bx bx-home-alt-2" link="/" text="home" mode="col" />
            <ItemLink icon="bx bx-home-alt-2" link="/" text="home" mode="col" />
            <ItemLink icon="bx bx-home-alt-2" link="/" text="home" mode="col" />
         </section>
      </nav>
   );
};
