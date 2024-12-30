import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Avatar = ({
   userAvatar = "https://picsum.photos/seed/picsum/64/64",
   name = "Nurullah Nergiz",
   userName = "nurullah-nergiz",
   className = "",
   children,
}) => {
   return (
      <section
         className={twMerge(
            "flex items-center justify-between gap-2",
            className
         )}>
         <Link href={`/@${userName}`} className="flex items-center gap-2">
            <AvatarImg src={userAvatar} alt={name} />
            <div className="">
               <b className="inline text-sm overflow-hidden whitespace-nowrap text-ellipsis">{name}</b>
               <p className="text-xs whitespace-nowrap text-ellipsis">
                  @{userName}
               </p>
            </div>
         </Link>
         {children}
      </section>
   );
};

export const AvatarImg = ({
   src = "https://picsum.photos/seed/picsum/64/64",
   alt = "user avatar",
   size = 12,
   className = "",
}) => {
   return (
      <Image
         src={src}
         width={128}
         height={128}
         className={twMerge(
            `w-12 h-12 p-[2px] rounded-full border-2 border-primary border-r-transparent border-b-transparent`,
            className
         )}
         alt={alt}
      />
   );
};
