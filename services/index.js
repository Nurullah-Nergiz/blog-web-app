import { getAuthenticationToken } from "@/utils/auth";
import axios from "axios";

const headers = {
   "Content-Type": "application/json",
   authentication: getAuthenticationToken(),
   // "Access"
};

export const searchInstance = axios.create({
   baseURL: process.env.NEXT_PUBLIC_BACKEND_HOSTNAME,
   headers,
});

export const authInstance = axios.create({
   baseURL: process.env.NEXT_PUBLIC_BACKEND_HOSTNAME,
   headers,
});

export const userInstance = axios.create({
   baseURL: process.env.NEXT_PUBLIC_BACKEND_HOSTNAME,
   headers,
});

export const postInstance = axios.create({
   baseURL: process.env.NEXT_PUBLIC_BACKEND_HOSTNAME,
   headers,
});

export const postLikeInstance = axios.create({
   baseURL: process.env.NEXT_PUBLIC_BACKEND_HOSTNAME,
   headers,
});

export const bookmarkInstance = axios.create({
   baseURL: process.env.NEXT_PUBLIC_BACKEND_HOSTNAME,
   headers,
});

[searchInstance, authInstance, postInstance, postLikeInstance,bookmarkInstance].forEach((a) => {
   a.interceptors.response.use(
      (res) => {
         return res;
      },
      (err) => {
         if (err.status === 403) {
            // window.location.href = "/auth/login";
         } else {
         }
      }
   );
});
