import { postCommentInstance } from "./index";

/**
 * @returns [{}]
 */
export const setPostComment = async (postId, text) => {
   try {
      return await postCommentInstance.post(`/comments/${postId}`, {
         text,
      });
   } catch (error) {
      console.error(error);
      return [];
   }
};
