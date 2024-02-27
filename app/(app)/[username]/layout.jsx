import Link from "next/link";

export default function Layout({ children }) {
   const user = {
      userAvatar: "https://picsum.photos/seed/picsum/64/64",
      userName: "Nurullah Nergiz",
      subTitle: "nurullah-nergiz",
   };

   return (
      <>
         <header className="h-64">
            <div className="flex items-center gap-4">
               <img
                  src={user?.userAvatar}
                  className="w-48 h-48 p-1 rounded-full border-4 border-primary border-r-transparent border-b-transparent"
                  alt="user avatar"
               />
               <div className="flex-1">
                  <h1 className="text-2xl whitespace-nowrap">
                     {user?.userName}&nbsp;(@{user?.subTitle})
                  </h1>

                  <p className="text-secondary whitespace-nowrap">
                  </p>
                  <p className="max-w-lg">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ipsam ab veritatis non, eaque fuga doloribus! Velit perspiciatis, temporibus inventore, quasi necessitatibus in deleniti vel dolor nisi earum, ullam sed.
                  </p>
               </div>
            </div>
         </header>
         <nav className="my-4 flex items-center gap-4">
            <Link href={`/users/${user?.subTitle}`}>Blogs</Link>
            <Link href={`/users/${user?.subTitle}`}>Lists</Link>
            <Link href={`/users/${user?.subTitle}`}>Home</Link>
            <Link href={`/users/${user?.subTitle}`}>About</Link>
         </nav>
         <hr />
         <section className="h-full mt-4 flex">
            <main className="flex-1 ">{children}</main>
            <aside className="max-w-80 w-full p-4">aside</aside>
         </section>
      </>
   );
}
