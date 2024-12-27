"use client";
import { loginSuccess } from "@/store/authStore";
import { getAuthenticationUser } from "@/utils/auth";
import { useDispatch, useSelector } from "react-redux";

export default function ProviderLoad() {
   const getUser = getAuthenticationUser();
   
   
   if (Object.keys(getUser).length > 0 && getUser.constructor === Object) {
      // console.log("getUser:", getUser)
      const dispatch = useDispatch();
      // dispatch(loginSuccess(getUser));
      const user = useSelector((state) => state.auth.user);
   }

   return <></>;
}
