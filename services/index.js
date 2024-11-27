import axios from "axios";

const headers = {
   // "Content-Type": "application/json",
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
