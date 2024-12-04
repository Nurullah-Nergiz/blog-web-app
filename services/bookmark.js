import { bookmarkInstance } from "./index";

/**
 *
 * @param {String} postId
 * @returns
 */
export const setBookmark = (postId) =>
   bookmarkInstance(`posts/${postId}/bookmark`, { method: "post" });

/**
 *
 * @param {String} postId
 * @returns
 */
export const setUnBookmark = (postId) =>
   bookmarkInstance(`posts/${postId}/unbookmark`, { method: "post" });
