import { Search } from "./search";

export const Header = () => {
   const { userName, userAvatar, subTitle } = {
      userAvatar: "https://picsum.photos/seed/picsum/64/64",
      userName: "Nurullah Nergiz",
      subTitle: "nurullah-nergiz",
   };
   return (
      <header className="h-20 px-8 -mx-7 bg-gray-50 flex items-center justify-between top-0 sticky">
         <section className="flex items-center gap-4">
            <div className="w-min whitespace-nowrap ">
               <button className="bx bx-chevron-left p-0 text-3xl disabled:text-secondary"></button>
               <button
                  className="bx bx-chevron-right p-0 text-3xl disabled:text-secondary"
                  disabled></button>
            </div>
            <Search />
         </section>

         <section className="flex items-center gap-4">
            <button className="bx bx-message-rounded-dots text-secondary text-2xl "></button>
            <button className="bx bx-bell text-secondary text-2xl "></button>
            <div className="flex items-center gap-2">
               <img
                  src={userAvatar}
                  className="w-10 h-10 p-[2px] rounded-full border-2 border-primary border-r-transparent border-b-transparent"
                  alt="user avatar"
               />
               <span className="hidden md:block flex-1">
                  <b className="text-sm whitespace-nowrap">{userName}</b>
                  <p className="text-secondary text-xs whitespace-nowrap">
                     @{subTitle}
                  </p>
               </span>
            </div>
         </section>
      </header>
   );
};
