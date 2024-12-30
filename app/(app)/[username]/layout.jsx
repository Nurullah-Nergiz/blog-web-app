import { AvatarImg } from "@/components/widgets/avatar";
import Link from "next/link";
import { PrimaryBtn, SecondaryBtn } from "@/components/btn";
import { RecommendedPeopleWidget } from "../../../components/widgets/RecommendedPeople";
import FollowBtn from "@/components/btn/Follow";
import { getUser } from "@/services/user";
import { notFound } from "next/navigation";
import useAuthUser from "@/hooks/auth";
import { Ad } from "@/components/Ad";
import Image from "next/image";

export default async function Layout({ children, params }) {
   // console.clear();

   const { username } = await params;
   const { status, data: user } = await getUser(
      username.replace(/%40/g, "").trim()
   );
   // console.log("user:", user);

   // console.log(await useAuthUser());
   const isAuthenticatedUser = (await useAuthUser())?._id === user?._id;

   if (status !== 200 || user.length == 0) notFound();

   return (
      <>
         <section className="flex-1">
            <header className="">
               <section className="bg-secondary relative">
                  <Image
                     src="https://picsum.photos/600/200"
                     width={600}
                     height={200}
                     alt=""
                     className="w-full max-h-52"
                  />
                  <div className="px-4 flex items-end justify-between absolute right-0 bottom-0 left-0 translate-y-16">
                     <AvatarImg className="w-32 h-32 max-w-40 max-h-40 p-1 " />
                     <div className="mb-5 flex items-center gap-4">
                        {isAuthenticatedUser ? (
                           <>
                              <Link href="/settings/edit-profile">
                                 <PrimaryBtn>
                                    <i className="bx bx-edit"></i>
                                    Edit profile
                                 </PrimaryBtn>
                              </Link>
                           </>
                        ) : (
                           <>
                              <SecondaryBtn>
                                 <i className="bx bx-send"></i>
                                 Message
                              </SecondaryBtn>
                              <FollowBtn />
                           </>
                        )}
                     </div>
                  </div>
               </section>
               <section className="mt-12 py-4 flex flex-wrap gap-4 overflow-hidden">
                  <section className="flex-1 flex gap-4">
                     <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                           <div className="whitespace-nowrap">
                              <h1 className="inline-flex items-center gap-2 text-2xl font-bolds ">
                                 {user?.name}
                                 <i className="bx bxs-check-circle text-blue-500"></i>
                              </h1>
                           </div>
                        </div>
                        <p className=" text-base">@{user?.userName}</p>
                        <p className="max-h-10 text-sm overflow-hidden text-ellipsis">
                           {user?.bio} Lorem ipsum, dolor sit amet consectetur
                           adipisicing elit. Ex impedit nihil doloremque
                           voluptas itaque laboriosam nesciunt, quam error quo
                           cum dolores perferendis in quisquam? Consequatur sit
                           recusandae sed praesentium non!
                        </p>
                        {/* </div>
                     <div className="flex flex-col gap-4"> */}
                        <div className="flex items-center gap-4">
                           <span>
                              <b>{user?.followingCount}</b> following
                           </span>
                           <span>
                              <b>{user?.followersCount}</b> followers
                           </span>
                        </div>
                        <div className="flex items-center gap-4">
                           <p className="px-1 border-b border-tertiary whitespace-nowrap">
                              <i className="bx bx-map"></i>
                              Location
                           </p>
                           <p className="px-1 border-b border-tertiary whitespace-nowrap">
                              <i className="bx bx-link"></i>
                              {user?.website}
                              Website
                           </p>
                           <p className="px-1 border-b border-tertiary whitespace-nowrap">
                              <i className="bx bx-phone"></i>
                              {user?.phoneNumber}
                              Phone
                           </p>
                           {/* <p className="whitespace-nowrap">
                              <i className="bx bx-calendar"></i>
                              {new Date(user?.createdAt).toLocaleDateString()} Joined
                           </p> */}
                        </div>
                        <div className="flex items-center gap-2">
                           {[
                              "#react",
                              "#nextjs",
                              "#tailwindcss",
                              "nodejs",
                              "vuejs",
                           ].map((tag) => (
                              <span
                                 key={tag}
                                 className="text-xs px-2 py-1 bg-primary text-white rounded-lg">
                                 {tag}
                              </span>
                           ))}
                        </div>
                        <div className="justify-items-end flex gap-4"></div>
                     </div>
                  </section>
               </section>
            </header>
            <nav className="py-1 flex gap-4 border-b border-secondary">
               {[
                  { name: "Home", href: "" },
                  { name: "Posts", href: "posts" },
                  { name: "About", href: "about" },
               ].map(({ name, href }) => (
                  <Link
                     href={`/${user?.userName}/${href}`}
                     className="hover:underline"
                     key={name}>
                     {name}
                  </Link>
               ))}
            </nav>
            {children}
         </section>
         <aside className="max-w-sm w-full px-2 hiddens lg:block">
            <Ad />
            {/* <Ad /> */}
            <RecommendedPeopleWidget />
         </aside>
      </>
   );
}

export async function generateMetadata({ params }) {
   const { username } = await params;
   const { status, data: user } = await getUser(
      username.replace(/%40/g, "").trim()
   );
   if (status == 200 || user.length !== 0)
      return {
         title: `${user?.name} (@${user?.userName}) - Emegen`,
      };
}
