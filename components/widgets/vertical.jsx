import { Avatar } from "./avatar";

export const WidgetVertical = () => {
   return (
      <>
         <header className=" py-2 text-2xl font-semibold flex items-center gap-2">
            <i className="bx bx-trending-up text-primary"></i>
            Recommended People
         </header>
         {["", "", "", "", ""].map((val, key) => (
            <div className="flex flex-col gap-2" key={key}>
               <Avatar
                  userAvatar="https://picsum.photos/64/64"
                  userName="Mustafa Vural"
                  subTitle="mustafa-vural"
                  fallowViable={true}
               />
            </div>
         ))}
      </>
   );
};
