import Cookies from "js-cookie";

export const getAuthenticationToken = () =>
   JSON.parse(Cookies.get("user") ).authentication;
