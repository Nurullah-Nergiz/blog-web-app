import FollowBtn from "@/components/btn/Follow";
import { Avatar } from "./avatar";

export const RecommendedPeopleWidget = () => {
   return (
      <section className="flex flex-col gap-4">
         <div className="text-xl font-semibold flex items-center gap-2 whitespace-nowrap">
            <i className="bx bx-trending-up text-primary"></i>
            Recommended People
         </div>
         {/* <div className="flex flex-col gap-2"> */}
         {["", "", "", "", ""].map((val, key) => (
            <Avatar
               key={key}
               userAvatar={`https://picsum.photos/6${key}`}
               name="Mustafa Vural"
               userName="mustafa-vural">
               <FollowBtn className="px-2" />
            </Avatar>
         ))}
         {/* </div> */}
      </section>
   );
};
