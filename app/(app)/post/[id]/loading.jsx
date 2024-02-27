export default function Loading({}) {
   return (
      <section className="h-scr overflow-hidden">
         <h1 className="max-h-20 h-20 py-1 bg-gray-300 text-3xl font-bold overflow-hidden text-ellipsis "></h1>
         <section className="my-4 flex gap-4">
            <div className="flex-1 flex flex-col gap-4">
               <div className="pt-[56.25%] bg-gray-300"></div>
               <div className="h-8 my-4 py-2 px-4 bg-gray-300 flex justify-between items-center rounded-md"></div>

               <div className="my-4 py-2 px-4"></div>

               <hr />
            </div>
            <aside className="max-w-80 pl-2 flex-1 flex flex-col gap-4">
               <div className="h-52 bg-gray-300"></div>
               <div className="flex items-center gap-2">
                  <div className="w-10 h-10 p-[2px] bg-gray-300 rounded-full"></div>
                  <span className="flex-1 flex flex-col items-stretch">
                     <b className="h-4 p-px bg-gray-300 text-sm whitespace-nowrap"></b>
                     <p className="h-4 bg-gray-300 text-xs whitespace-nowrap"></p>
                  </span>
                  <button className="w-16 h-8 px-2 py-1 bg-gray-300 rounded-md"></button>
               </div>
                       <div className="h-80 bg-gray-300"></div>
                       <div className="h-80 bg-gray-300"></div>
            </aside>
         </section>
      </section>
   );
}
