import { getUserPosts } from "@/services/user";

export default async function Page({ params }) {
   const { username } = await params;

   return (
      <main className="">
         <h1 className="py-2">home</h1>
      </main>
   );
}
