import axios from "axios";

const headers = {
   "Content-Type": "application/json",
};

export const searchInstance = axios.create({
   baseURL: process.env.NEXT_PUBLIC_BACKEND_HOSTNAME,
   headers,
});
