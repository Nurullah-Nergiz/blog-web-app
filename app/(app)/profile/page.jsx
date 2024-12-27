"use client"

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";


export default function ProfilePage () {
    const router = useRouter();
    const user = useSelector((state) => state.auth.user) || {};
    router.push(`/${user.userName ?? "auth/login"}`);
    return (Link)
}