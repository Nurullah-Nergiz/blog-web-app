

export const Avatar = ({
   userAvatar,
   userName,
   subTitle,
   children,
}) => {
   return (
      <section className="flex items-center justify-between">
         <div className="flex items-center gap-2">
            <img
               src={userAvatar}
               className="w-12 h-12 p-[2px] rounded-full border-2 border-primary border-r-transparent border-b-transparent"
               alt="user avatar"
            />
            <span className="flex-1">
               <b className="text-sm whitespace-nowrap">{userName}</b>
               <p className="text-xs whitespace-nowrap">@{subTitle}</p>
            </span>
         </div>
         <div className="flex items-center gap-2">
            {children}
         </div>
      </section>
   );
};
