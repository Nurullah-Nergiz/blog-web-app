import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Avatar = ({
   userAvatar = "https://picsum.photos/seed/picsum/64/64",
   name = "Nurullah Nergiz",
   userName = "nurullah-nergiz",
   children,
}) => {
   return (
      <section className="flex items-center justify-between">
         <Link href={`/${userName}`} className="flex items-center gap-2">
            <AvatarImg src={userAvatar} alt={name} />
            <span className="flex-1">
               <b className="text-sm whitespace-nowrap">{name}</b>
               <p className="text-xs whitespace-nowrap">@{userName}</p>
            </span>
         </Link>
         {children}
      </section>
   );
};

export const AvatarImg = ({
   src = "https://picsum.photos/seed/picsum/64/64",
   alt = "user avatar",
   size = 12,
}) => {
   return (
      <img
         src={src}
         className={`w-12 h-12 p-[2px] rounded-full border-2 border-primary border-r-transparent border-b-transparent`}
         alt={alt}
      />
   );
};
