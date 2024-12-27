"use client";
import { PrimaryBtn } from "@/components/btn/";
import Logo from "@/components/Logo";
import { useRouter } from "next/navigation";

export default function Page() {
   const router = useRouter();

   return (
      <main className="flex-1 px-4 flex flex-col">
         <section className="flex-1">
          <Logo />
            <p>
               {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
               obcaecati, aliquid eum sed ex temporibus cum veniam? Harum amet
               cumque corporis culpa dolores voluptatum labore doloremque
               quisquam quae molestias. Temporibus? */}
            </p>
         </section>
         <section className="p-4 flex flex-col items-center gap-4">
            <PrimaryBtn
               onClick={() => router.push("/auth/login")}
               className="w-60 p-2 bg-primary block">
               Log in Now
            </PrimaryBtn>
            <PrimaryBtn
               onClick={() => router.push("/auth/register")}
               className="w-60 p-2 bg-primary block">
               Create Account
            </PrimaryBtn>
         </section>
      </main>
   );
}
