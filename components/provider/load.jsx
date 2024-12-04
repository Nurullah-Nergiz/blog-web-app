"use client";
import { loginSuccess } from "@/store/authStore";
import Cookies from "js-cookie";
import { useDispatch,useSelector } from "react-redux";

export default function ProviderLoad({ children }) {
   const dispatch = useDispatch();
   dispatch(loginSuccess(JSON.parse(Cookies.get("user"))));
   const user = useSelector((state) => state.auth.user);
   // console.log("user:", user)
   
   return <></>;
}
