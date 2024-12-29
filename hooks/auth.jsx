"use server";
import { cookies } from "next/headers";

export default async function useAuthUser() {
   const cookieStore = await cookies();
   if (!cookieStore.get("user")?.value) return {}
   else return JSON.parse(cookieStore.get("user")?.value)?.user;
}
