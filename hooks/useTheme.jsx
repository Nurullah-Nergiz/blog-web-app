"use server";
import { cookies } from "next/headers";

export default async function useTheme() {
   const cookieStore = await cookies();
   const theme = cookieStore.get("theme")?.value;
   return theme ?? "system";
}
