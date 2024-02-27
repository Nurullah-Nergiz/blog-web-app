import { Avatar } from "./avatar";

export const WidgetVertical = () => {
   return (
      <>
         <header className=" py-2 text-2xl font-semibold flex items-center gap-2">
            <i className="bx bx-trending-up text-primary"></i>
            Recommended blog
         </header>
         {["", "", "", "", ""].map((val, key) => (
            <div className="h-80 bg-white shadow shadow-secondary rounded-2xl" key={key}>
               <img
                  src={`https://picsum.photos/32${key}/16${key}`}
                  alt=""
                  className="h-40 rounded-2xl "
               />
               <div className="px-2 flex flex-col gap-2">
                  <h3 className="py-1 whitespace-nowrap text-ellipsis overflow-hidden">
                     demo {++key}
                  </h3>
                  <p className="h-12 text-xs text-ellipsis overflow-hidden">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Error neque praesentium in animi suscipit commodi quibusdam
                     voluptate inventore nobis. Molestiae totam et quam
                     doloribus ipsam laborum sit aliquam veniam aliquid?
                  </p>
                  <hr />
                  <Avatar
                     userAvatar="https://picsum.photos/64/64"
                     userName="Mustafa Vural"
                     subTitle="mustafa-vural"
                     fallowViable={true}
                  />
               </div>
            </div>
         ))}
      </>
   );
};
