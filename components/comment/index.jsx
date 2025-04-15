import { Avatar } from "../widgets/avatar";

export const CommentView = ({ comments=[] }) => {
   return (
      <>
         {comments.map((comment) => (
            <div key={comment._id} className="py-4">
               <Avatar
                  userAvatar="https://picsum.photos/seed/picsum/64/64"
                  userName={`${comment.author?.firstName} ${comment.author?.lastName}`}
                  subTitle={comment.author?.username}
               />
               <div className="py-4">{comment.text}</div>
            </div>
         ))}
      </>
      // <div className="py-4">
      //    <Avatar
      //       userAvatar="https://picsum.photos/seed/picsum/64/64"
      //       userName="Nurullah Nergiz"
      //       subTitle="nurullah-nergiz"
      //    />
      //    <div className="py-4">
      //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
      //       laboriosam rem nostrum at aliquid omnis doloremque accusamus!
      //    </div>
      // { {subComment ? (
      //    <div className="ml-14">
      //       <CommentView />
      //    </div>
      // ) : (
      //    ""
      // )}}
      // </div>
   );
};
