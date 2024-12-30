"use client";
import FollowBtn from "@/components/btn/Follow";
import { Avatar } from "./avatar";
import { getExploreByUser } from "@/services/explore";
import { useEffect, useState } from "react";

export const RecommendedPeopleWidget = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      getExploreByUser()
         .then(({ data, status }) => {
            setUsers(data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return (
      <section className="p-4 bg-main flex flex-col gap-4 rounded-xl">
         <div className="text-xl font-semibold flex items-center gap-2 whitespace-nowrap">
            <i className="bx bx-trending-up text-primary"></i>
            Recommended People
         </div>
         {/* <div className="flex flex-col gap-2"> */}
         {users.map((user, key) => (
            <Avatar
               key={user?._id}
               userAvatar={`https://picsum.photos/6${key}`}
               name={user?.name}
               userName={user?.username}>
               <FollowBtn id={user?._id} className="p-2" />
            </Avatar>
         ))}
         {/* </div> */}
      </section>
   );
};
