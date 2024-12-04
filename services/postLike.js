import { postLikeInstance } from "./index";

/**
 * @returns [{}]
 */
export const setPostLike = (postId) => postLikeInstance(`posts/${postId}/like`, {
    method:"post"
});

export const setPostUnlike = (postId) => postLikeInstance(`posts/${postId}/unlike`, {
    method:"post"
});
