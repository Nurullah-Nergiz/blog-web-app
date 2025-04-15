"use client";
import { PrimaryBtn } from "@/components/btn/";
import Cookies from "js-cookie";
import { useState } from "react";

export default function ThemePage({ children }) {
   const themes = [
      {
         name: "System Theme",
         description:
            "This is the theme that will take it your system is using",
         image: "https://picsum.photos/160/90",
         value: "system",
      },
      {
         name: "Ligth Theme",
         description:
            "This theme will activate when your system is using a light mode",
         image: "https://picsum.photos/161/91",
         value: "light",
      },
      {
         name: "Dark Theme",
         description:
            "This theme will activate when your system is set to dark mode",
         image: "https://picsum.photos/162/92",
         value: "dark",
      },
   ];

   const [currentTheme, setCurrentTheme] = useState(Cookies.get("theme"));
   const handleThemeChange = () => {
      Cookies.set("theme", currentTheme, { expires: 365 });

      document.documentElement.classList.remove("system", "light", "dark");
      document.documentElement.classList.add(currentTheme);
   };

   return (
      <>
         <main>
            <h1>Preferences</h1>
            <p className="py-4">
               Select how you would like your interface to look. Select a theme
               or sync with your system and have automatic theme switching.
            </p>
            <section className="p-4 bg-main rounded-xl">
               <ul className="flex gap-4 rounded-2xl">
                  {themes.map((theme) => (
                     <li key={theme.name}>
                        <label className="theme-switch min-w-80 p-4">
                           <input
                              type="radio"
                              name="theme"
                              checked={currentTheme === theme.value}
                              onChange={() => setCurrentTheme(theme.value)}
                           />
                           <b>{theme.name}</b>
                           <p className="py-2">{theme.description}</p>
                           <img
                              src={theme.image}
                              alt={theme.name}
                              className="w-full h-full"
                           />
                        </label>
                     </li>
                  ))}
               </ul>
               <div className="my-4 text-right">
                  <PrimaryBtn onClick={() => handleThemeChange()}>
                     Save changes
                  </PrimaryBtn>
               </div>
            </section>
         </main>
      </>
   );
}
