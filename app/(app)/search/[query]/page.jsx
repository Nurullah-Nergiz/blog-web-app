import Post from "@/components/widgets/post";
// import { getSearch } from "@/services/search";

export default async function Page({ params }) {
   // const search = getSearch({ q: params.query });
   return (
      <>
         <h1 className="">Searching {params.query}</h1>
         <div className="flex gap-4">
            <section className="flex-1 flex flex-col gap-4">
               {/* {search} */}
               {/* <Post /> */}
             </section>
            <aside className="max-w-xs w-full h-min p-4 bg-white shadow shadow-tertiary rounded-2xl overflow-hidden">
               <h2 className="">Filter</h2>
            </aside>
         </div>
      </>
   );
}
