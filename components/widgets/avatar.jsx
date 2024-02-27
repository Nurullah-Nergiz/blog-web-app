export const Avatar = ({ userAvatar, userName, subTitle, fallowViable }) => {
   return (
      <div className="flex items-center gap-2">
         <img
            src={userAvatar}
            className="w-10 h-10 p-[2px] rounded-full border-2 border-primary border-r-transparent border-b-transparent"
            alt="user avatar"
         />
         <span className="flex-1">
            <b className="text-sm whitespace-nowrap">{userName}</b>
            <p className="text-xs whitespace-nowrap">@{subTitle}</p>
         </span>
         {fallowViable ? (
            <button className="px-2 py-1 bg-secondary text-white rounded-md">
               Fallow
            </button>
         ):""}
      </div>
   );
};
