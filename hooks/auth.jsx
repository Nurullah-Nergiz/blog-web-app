"use server";
import { cookies } from "next/headers";

export default async function useAuthUser() {
   const cookieStore = await cookies();
   return (JSON.parse(cookieStore.get("user").value))?.user;
}
