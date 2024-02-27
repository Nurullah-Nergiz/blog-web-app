import { Ad } from "@/components/Ad";
import { Avatar } from "@/components/widgets/avatar";
import Link from "next/link";

export default function Home() {
   return (
      <>
         <section className="mb-4 flex gap-4">
            <div className="max-w-screen-xl flex-1 mx-auto flex flex-col gap-4">
               <div className="w-full h-52 p-4 bg-secondary rounded-xl">
                  <h1 className="text-white">Title</h1>
               </div>
               <div className=" flex-1 flex gap-4 bg-white shadow shadow-tertiary rounded-2xl overflow-hidden">
                  <div className="h-64 flex-1 p-4 flex flex-col gap-4 ">
                     <Avatar
                        userAvatar="https://picsum.photos/64/64"
                        userName="Mustafa Vural"
                        subTitle="mustafa-vural"
                     />
                     <header className="text-3xl font-bold">
                        Docify-cli Readme Generator
                     </header>
                     <p className="w">
                        Docify-cli, geliştiricilere projelerini daha etkili bir
                        şekilde tanıtmak ve işbirliği yapmayı kolaylaştırmak
                        için tasarlanmış bir komut satırı aracıdır. Bu araç,
                        README dosyalarını oluşturmak için kullanıcı dostu bir
                        arayüz sunar ve geliştiricilere projelerini daha
                        profesyonel bir şekilde belgeleme imkanı sağlar.
                     </p>
                     <span className="h-10 flex flex-wrap items-center gap-4 overflow-hidden">
                        {[
                           "Documentation",
                           "Open Source",
                           "Command Line",
                           "Nodejs",
                           "Github",
                        ].map((tag) => (
                           // className="h-10 px-3 py-2 flex text-white bg-secondary rounded-md">
                           <Link
                              key={tag}
                              href={`./tags/${tag}`}
                              className=" border-b border-current">
                              #{tag}
                           </Link>
                        ))}
                     </span>
                     <footer className="flex items-center gap-4 text-2xl">
                        <button className="bx bx-heart"></button>
                        <button className="bx bx-message-rounded"></button>
                        <button className="bx bx-bookmark ml-auto"></button>
                        {/* <button className="bx bx-share p-0"></button> */}
                        {/* <button className='bx bxs-bookmark-minus p-0'></button> */}
                     </footer>
                  </div>
                  {/* <div className="h-full bg-secondary pl-[10%] relative overflow-hidden"> */}
                     <img
                     src="https://picsum.photos/720/405"
                     // src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*DUigJ7aQ_CFSOuKCklMOow.gif"
                     alt="title"
                     className="h-64"
                  />
                  {/* </div> */}
                  {/* 421.875 */}
               </div>
               {/* <div className="h-screen"></div> */}
            </div>
            <aside className="max-w-80 pl-4 flex-1 flex flex-col gap-4">
               <Ad />
               <Avatar
                  userAvatar="https://picsum.photos/64/64"
                  userName="Mustafa Vural"
                  subTitle="mustafa-vural"
                  fallowViable={true}
               />
            </aside>
         </section>
      </>
   );
}
