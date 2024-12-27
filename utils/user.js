import Cookies from "js-cookie";

export const getAuthenticationUser = () => {
   const user = Cookies.get("user");
   console.log("user:", user);
};
