import Link from "next/link";
import { Avatar } from "@/components/widgets/avatar";
import { WidgetVertical } from "@/components/widgets/RecommendedPeople";
import { CommentEditor } from "@/components/comment/editor";
import { CommentView } from "@/components/comment";
import { Ad } from "@/components/Ad";

function delay(ms) {
   return new Promise((res, rej) => 
   setTimeout(res, ms)
   );
}

export default async function Page() {
   await delay(300);
   return (
      <>
         <h1 className="max-h-20 py-1 text-3xl font-bold overflow-hidden text-ellipsis ">
            Docify-cli Readme Generator
         </h1>
         <section className="my-4 flex gap-4">
            <div className="flex-1 flex flex-col gap-4">
               <img
                  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*DUigJ7aQ_CFSOuKCklMOow.gif"
                  alt=""
                  className=""
               />
               <div className="my-4 py-2 px-4 bg-secondary flex justify-between items-center rounded-md">
                  <span className="text-xs">Mon Jan 22 2024</span>
                  <div className="flex items-center gap-4 text-primary">
                     <button className="bx bx-printer p-0"></button>
                     <button className="bx bx-like p-0"></button>
                     <button className="bx bx-bookmark p-0"></button>
                     <button className="bx bx-share p-0"></button>
                     {/* <button className='bx bxs-bookmark-minus p-0'></button> */}
                     <button className="bx bx-comment p-0"></button>
                  </div>
               </div>
               <h2>1. Readme Dosyalarını Kolayca Oluşturun </h2>
               <p>
                  Docify-cli, geliştiricilere projelerini daha etkili bir
                  şekilde tanıtmak ve işbirliği yapmayı kolaylaştırmak için
                  tasarlanmış bir komut satırı aracıdır. Bu araç, README
                  dosyalarını oluşturmak için kullanıcı dostu bir arayüz sunar
                  ve geliştiricilere projelerini daha profesyonel bir şekilde
                  belgeleme imkanı sağlar.
               </p>
               <h3>2. Kurulum</h3>

               <pre className="p-4 bg-white shadow shadow-secondary">
                  <header className="mb-2 p-1 flex items-center justify-between border-b">
                     <span className="">Bash</span>
                     <button className="bx bxs-copy p-0"></button>
                  </header>
                  <code>npm install -g docify-cli</code>
               </pre>
               <h4>3. Temel Kullanımı</h4>

               <pre className="p-4 bg-white shadow shadow-secondary">
                  <header className="mb-2 p-1 flex items-center justify-between border-b">
                     <span className="">Bash</span>
                     <button className="bx bxs-copy p-0"></button>
                  </header>
                  <code>docify-cli</code>
               </pre>
               <p>
                  Bu yazıda, adım adım `docify-cli` kullanarak README
                  dosyalarını oluşturmanın pratik yöntemlerini keşfettik.
                  Geliştiriciler için projelerini etkili bir şekilde tanıtmak ve
                  işbirliği yapmayı kolaylaştırmak son derece kritik bir
                  adımdır. `docify-cli` kullanımıyla, bu süreç oldukça
                  basitleşir ve profesyonel görünümlü README dosyaları
                  oluşturmak daha erişilebilir hale gelir.
               </p>

               <p>
                  `docify-cli`’yi yüklemek ve kullanmak oldukça basittir. Birkaç
                  terminal komutu ile aracı global olarak yükleyerek hemen
                  kullanmaya başlayabilirsiniz. Bu, geliştiricilere projelerini
                  daha etkili bir şekilde belgeleme ve paylaşma imkanı sunar.
                  Komut satırı
               </p>

               <p>
                  arayüzü, temel bilgileri kullanarak README dosyası oluşturmak
                  için kullanıcı dostu bir araç sunar. Ancak, `docify-cli`’nin
                  gerçek gücü, yapılandırma seçenekleri ve parametrelerle ortaya
                  çıkar. Başlık, açıklama ve diğer detayları projenize özel
                  olarak ekleyerek README dosyanızı kişiselleştirebilirsiniz.
               </p>

               <p>
                  Yapılandırma seçenekleri, projenizin özel ihtiyaçlarını
                  karşılamak için kullanışlıdır. Varsayılan değerler genellikle
                  yeterli olmasa bile, `docify-cli` kullanıcılara özel belgeler
                  oluşturabilme esnekliği sağlar.
               </p>

               <p>
                  Parametreler ve seçenekler, kullanıcılara README dosyalarını
                  daha fazla özelleştirmeleri için fırsat tanır. Belirli bir
                  şablonu kullanma veya çıktı dizinini özelleştirme gibi
                  seçeneklerle, README dosyanızı daha fazla kontrol altında
                  tutabilirsiniz.
               </p>

               <p>
                  Bu rehber, geliştiricilere `docify-cli`’nin temel
                  kullanımından başlayarak, yapılandırma seçeneklerine ve ileri
                  düzey parametre kullanımına kadar geniş bir yelpazede bilgi
                  sunar. Gerçek dünya örnekleriyle desteklenen bu rehber,
                  geliştiricilere projelerini daha etkili bir şekilde belgeleme
                  konusunda güven verir.
               </p>

               <p>
                  `docify-cli` kullanmak, geliştiricilere sadece README
                  dosyalarını oluşturmakla kalmaz, aynı zamanda projelerini daha
                  iyi tanıtmak ve paylaşmak için güçlü bir araç sunar. Bu, açık
                  kaynak toplulukları için projelerin daha çekici ve
                  erişilebilir olmasına katkıda bulunabilir.
               </p>

               <p>
                  Sonuç olarak, `docify-cli` ile README dosyalarını oluşturmak,
                  geliştiricilere zaman kazandırır ve projelerini daha
                  profesyonel bir şekilde sunmalarına yardımcı olur. Kendi
                  projelerinizde `docify-cli`’yi kullanarak belgelerinizi
                  geliştirin ve geliştirici topluluğuna projenizi daha iyi
                  tanıtın. <br />
                  <br />
                  Kaynaklar
                  <br /> Npm: docify-cli
                  <br /> Github: Nurullah-Nergiz/docify-cli
                  <br /> Website: nurullahnergiz.com
               </p>

               <div className="my-4 py-2 px-4">
                  <ul className="flex flex-wrap items-center gap-4">
                     {[
                        "Documentation",
                        "Open Source",
                        "Command Line",
                        "Nodejs",
                        "Github",
                     ].map((tag) => (
                        <li
                           key={tag}
                           className="px-3 py-2 bg-secondary rounded-md">
                           <Link
                              href={`./tags/${tag}`}
                              className=" border-b border-current">
                              {tag}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               <hr />

               <CommentEditor />
               <CommentView subComment={true} />
               <CommentView />
            </div>
            <aside className="max-w-80 pl-2 flex-1 flex flex-col gap-4">
               <Avatar
                  userAvatar="https://picsum.photos/64/64"
                  userName="Mustafa Vural"
                  subTitle="mustafa-vural"
                  fallowViable={true}
               />
                  <hr />
               <Ad />
               {/* <hr /> */}
               <WidgetVertical />
            </aside>
         </section>
      </>
   );
}
