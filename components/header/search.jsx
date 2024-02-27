"use client";

export const Search = () => {
   function submit(e) {
      console.log(e);
   }
   return (
      <div className="hidden md:flex w-80 text-secondary">
         <div className="py-2 px-3 flex items-center border border-current rounded-2xl relative">
           <label htmlFor="search" className="bx bx-search"></label>
           <input
              type="search"
              className="mx-2 bg-transparent outline-none"
              id="search"
              placeholder="Search..."
              onKeyDown={submit}
           />
           <button className="bx bx-microphone"></button>
         </div>
         <ul className="hidden h-80 pt-6 bg-white absolute -right-0 top-6 -left-0 border border-t-0 border-current rounded-b-2xl">
            <li className="w">
              <hr />
               {/* <i className="bx bx-search"></i> */}
            </li>
         </ul>
      </div>
   );
};
