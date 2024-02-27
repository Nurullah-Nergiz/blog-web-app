import Link from "next/link";
import { Avatar } from "./avatar";

export default function Post() {
   return (
      <div className=" flex bg-white shadow shadow-tertiary rounded-2xl overflow-hidden">
         <div className="p-4 flex flex-col gap-4">
            <Avatar
               userAvatar="https://picsum.photos/64/64"
               userName="Mustafa Vural"
               subTitle="mustafa-vural"
            />
            <div className=" flex-1 flex gap-2">
               <div>
                  <Link href="/" className="flex flex-col gap-2">
                     <header className="text-3xl font-bold">
                        Docify-cli Readme Generator
                     </header>
                     <p className="max-h-20 py-1 overflow-hidden text-ellipsis">
                        Docify-cli, geliştiricilere projelerini daha etkili bir
                        şekilde tanıtmak ve işbirliği yapmayı kolaylaştırmak
                        için tasarlanmış bir komut satırı aracıdır. Bu araç,
                        README dosyalarını oluşturmak için kullanıcı dostu bir
                        arayüz sunar ve geliştiricilere projelerini daha
                        profesyonel bir şekilde belgeleme imkanı sağlar.
                     </p>
                  </Link>
                  <div className="h-5 flex flex-wrap items-center gap-4 text-xs overflow-hidden">
                     {[
                        "Documentation",
                        "Open-Source",
                        "Command-Line",
                        "Nodejs",
                        "Github",
                     ].map((tag) => (
                        // className="h-10 px-3 py-2 flex text-white bg-secondary rounded-md">
                        <Link
                           key={tag}
                           href={`/tags/${tag}`}
                           className=" border-b border-current">
                           #{tag.replaceAll("-"," ")}
                        </Link>
                     ))}
                  </div>
               </div>
               <img
                  // src="https://picsum.photos/720/405"
                  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*DUigJ7aQ_CFSOuKCklMOow.gif"
                  alt="title"
                  className="w-1/3  object-fill"
               />
            </div>

            <footer className="flex items-center gap-4 text-2xl">
               <button className="bx bx-heart"></button>
               <button className="bx bx-message-rounded"></button>
               <button className="bx bx-bookmark ml-auto"></button>
               {/* <button className="bx bxs-bookmark-minus p-0"></button> */}
            </footer>
         </div>
      </div>
   );
}
