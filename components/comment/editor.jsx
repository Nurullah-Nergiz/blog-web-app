"use client";
import { SecondaryBtn } from "@/components/btn";
import { setPostComment } from "@/services/postComment";
import { useState } from "react";

export const CommentEditor = ({ postId }) => {
   const [comment, setComment] = useState("");
   const handleComment = (postId) => {
      setPostComment(postId, comment)
         .then(({ data, status }) => {
            console.log(data);

            if (status === 200) {
               setComment("");
            }
         })
         .catch((error) => {
            console.error(error);
         });
   };

   return (
      <>
         <div className="my-4 p-4 flex items-end gap-4 main border-secondary border-2">
            <textarea
               className="w-full py-2 px-3 bg-transparent resize-none outline-none"
               placeholder="Add a comment"
               onChange={(e) => {
                  setComment(e.target.value);
               }}></textarea>
            <SecondaryBtn
               className="px-2"
               onClick={() => handleComment(postId)}>
               Submit
            </SecondaryBtn>
         </div>
      </>
   );
};
