import { Avatar } from "../widgets/avatar";
export const CommentView = ({ user, text, subComment }) => {
   return (
      <div className="py-4">
         <Avatar
            userAvatar="https://picsum.photos/seed/picsum/64/64"
            userName="Nurullah Nergiz"
            subTitle="nurullah-nergiz"
         />
         <div className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            laboriosam rem nostrum at aliquid omnis doloremque accusamus!
         </div>
         {subComment ? (
            <div className="ml-14">
               <CommentView />
            </div>
         ) : (
            ""
         )}
      </div>
   );
};
