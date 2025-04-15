import Cookies from "js-cookie";

export const getAuthenticationToken = () => {
   const token = Cookies.get("user");
   return token ? JSON.parse(token)?.authentication : "";
};

export const getAuthenticationUser = () => {
   const user = Cookies.get("user");
   return user ? JSON.parse(user)?.user : {};
};
