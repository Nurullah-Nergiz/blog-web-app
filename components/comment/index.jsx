import { Avatar } from "../widgets/avatar";

export const CommentView = ({ comments = [] }) => {
   return (
      <>
         {comments.map((comment) => (
            <div key={comment._id} className="main my-4 py-4">
               <Avatar
                  userAvatar={comment.author[0]?.profilePicture}
                  name={comment.author[0]?.name}
                  userName={comment.author[0]?.userName}>
                  <span></span>
               </Avatar>
               <div className="ml-12 py-4 px-2">{comment.text}</div>
            </div>
         ))}
      </>
   );
};
