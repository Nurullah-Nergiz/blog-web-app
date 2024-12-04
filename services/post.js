import { postInstance } from "./index";

/**
 * 
 * @param {Number} page 
 * @param {Number} limit 
 * @returns 
 */
export const getPosts = (page = 0, limit = 5) => postInstance(`explore?page=${page}&limit=${limit}`);
