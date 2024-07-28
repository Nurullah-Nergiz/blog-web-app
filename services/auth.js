import { authInstance } from "./index";

/**
 * 
 * @param {Object} data
 * @param {String} data.email 
 * @param {String} data.password 
 * @returns 
 */
export const loginServices = (data) => authInstance("auth/login", {
    method: "post",
    data,
});
