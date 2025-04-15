import { AvatarImg } from "@/components/widgets/avatar";
import { PrimaryBtn, SecondaryBtn } from "@/components/btn";
import useAuthUser from "@/hooks/auth";
import ChartsDoughnut from "@/components/charts/doughnut";
import WidgetsPopup from "@/components/widgets/popup";
import Input from "@/components/forms/input";

export default async function EditProfilePage() {
   const user = await useAuthUser();
   // console.log("file: page.jsx:8 => user=>", user);
   const userFieldCount =
      user &&
      Object.entries(user).filter(
         ([key]) =>
            ![
               "_id",
               "active",
               "createdAt",
               "updatedAt",
               "__v",
               "password",
               "email",
            ].includes(key)
      ).length;
   const validUserFieldCount =
      user &&
      Object.entries(user).filter(
         ([key, val]) =>
            ![
               "_id",
               "active",
               "createdAt",
               "updatedAt",
               "__v",
               "password",
               "email",
            ].includes(key) && val
      ).length;

   return (
      <section>
         <h1 className="mb-4">Edit profile</h1>
         <section className="flex gap-8">
            <main className="flex flex-col gap-8">
               <div className="main flex items-center gap-8">
                  <AvatarImg size={48} />
                  <div className="">
                     <SecondaryBtn>Upload new photo</SecondaryBtn>
                     <p className="whitespace-nowrap">
                        At least 128x128 px recommended
                     </p>
                     <p className="whitespace-nowrap">Jpeg or PNG is allowed</p>
                  </div>
               </div>
               <div className="main relative">
                  <WidgetsPopup title="Personal Information">
                     <ul className="flex justify-between gap-4">
                        <li className="min-w-60">
                           {/* <p>Name</p> */}
                           <Input title="Name" value={user?.name} />
                           {/* <input type="text" className="input" value={user?.name } /> */}
                        </li>
                        <li className="min-w-60">
                           <Input title="Email" value={user?.email} />
                        </li>
                        <li className="min-w-60">
                           <Input title="UserName" value={user?.userName} />
                        </li>
                     </ul>
                  </WidgetsPopup>
                  <ul className="flex justify-between">
                     <li className="min-w-60">
                        <p>Name</p>
                        <b>Roy Howell</b>
                     </li>
                     <li className="min-w-60">
                        <p>Email</p>
                        <b>kah@jocu.am</b>
                     </li>
                     <li className="min-w-60">
                        <p>Username</p>
                        <b>@Jerry-Jensen</b>
                     </li>
                  </ul>
               </div>
               <div className="main relative">
                  <b className="py-2 inline-block">Location</b>
                  <div className="flex items-center gap-2">
                     <label className="w-full  flex items-center gap-4 input">
                        <span className="bx bx-current-location"></span>
                        <input
                           type="text"
                           className="w-full bg-transparent outline-none"
                           placeholder="Enter your location"
                        />
                     </label>
                     <SecondaryBtn>Save</SecondaryBtn>
                  </div>
               </div>
               <div className="main relative">
                  <WidgetsPopup title="Bio">
                     <textarea className="w-full h-32 px-3 py-2 !bg-transparent border relative border-tertiary shadow shadow-tertiary rounded-2xl outline-none">
                        {user?.bio}
                     </textarea>
                  </WidgetsPopup>
                  <p className="">{user?.bio}</p>
                  {/* <SecondaryBtn className="ml-auto">Save</SecondaryBtn> */}
               </div>
               <div className="main relative">
                  <b className="py-2 inline-block">Social media</b>
                  <div className="flex items-center gap-2">
                     <label className="w-full  flex items-center gap-4 input">
                        <span className="bx bxl-facebook"></span>
                        <input
                           type="text"
                           className="w-full bg-transparent outline-none"
                           placeholder="Facebook"
                        />
                     </label>
                     <label className="w-full  flex items-center gap-4 input">
                        <span className="bx bxl-twitter"></span>
                        <input
                           type="text"
                           className="w-full bg-transparent outline-none"
                           placeholder="Twitter"
                        />
                     </label>
                     <label className="w-full  flex items-center gap-4 input">
                        <span className="bx bxl-instagram"></span>
                        <input
                           type="text"
                           className="w-full bg-transparent outline-none"
                           placeholder="Instagram"
                        />
                     </label>
                     <label className="w-full  flex items-center gap-4 input">
                        <span className="bx bxl-linkedin"></span>
                        <input
                           type="text"
                           className="w-full bg-transparent outline-none"
                           placeholder="LinkedIn"
                        />
                     </label>
                     <SecondaryBtn>Save</SecondaryBtn>
                  </div>
               </div>
            </main>
            <aside className="min-w-80 h-min main ">
               <h2 className="text-xl text-center">Profilinizi tamamlayın</h2>

               <ChartsDoughnut
                  datasets={[
                     {
                        label: "# of Votes",
                        data: [
                           100,
                           (100 / userFieldCount) * validUserFieldCount,
                        ],
                        backgroundColor: ["rgba(0, 0, 0, .12)", "green"],
                        borderWidth: 1,
                     },
                  ]}
               />
               <ul className="">
                  {user &&
                     Object.entries(user)
                        .filter(
                           ([key]) =>
                              ![
                                 "_id",
                                 "active",
                                 "createdAt",
                                 "updatedAt",
                                 "__v",
                                 "password",
                                 "email",
                              ].includes(key)
                        )
                        .sort()
                        .map(([key, val]) => {
                           const isComplete =
                              val == null || val == undefined || val == ""
                                 ? false
                                 : true;
                           return (
                              <li
                                 key={key}
                                 className="py-2 flex items-center gap-2">
                                 <i
                                    className={`bx ${
                                       isComplete
                                          ? "bx-check !text-green-500"
                                          : "bx-x"
                                    } text-2xl`}></i>
                                 <span
                                    className={`${
                                       isComplete ? "font-bold" : ""
                                    }`}>
                                    {key}
                                 </span>
                                 {/* <span>{user[key]}</span> */}
                              </li>
                           );
                        })}
               </ul>
            </aside>
         </section>
      </section>
   );
}
