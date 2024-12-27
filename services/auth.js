import { authInstance } from "./index";

/**
 * 
 * @param {Object} user
 * @param {String} user.email 
 * @param {String} user.password 
 * @returns 
 */
export const loginServices = (data) => authInstance("auth/login", {
    method: "post",
    data,
});
