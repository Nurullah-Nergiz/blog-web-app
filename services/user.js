import axios from "axios";
axios.defaults.baseURL = "http://16.171.33.188:8080/"


/**
 *
 * @param {string} userName
 * @returns {Promise}
 */
export const getUserPosts = (userName) => {
 return axios.get(`users/${userName}/posts`)
};
