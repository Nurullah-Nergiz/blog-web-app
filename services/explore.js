import { exploreInstance } from "./index";

/**
 * 
 * @param {Number} page 
 * @param {Number} limit 
 * @returns 
 */
export const getExplore = (page = 0, limit = 5) => exploreInstance(`explore?page=${page}&limit=${limit}`);
