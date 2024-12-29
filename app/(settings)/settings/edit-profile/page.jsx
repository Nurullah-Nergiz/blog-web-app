
import { AvatarImg } from "@/components/widgets/avatar";
import { SecondaryBtn } from "@/components/btn";
import useAuthUser from "@/hooks/auth";
import Input from "@/components/input";

export default async function EditProfilePage() {
   const user = {};

   return (
      <>
         <main className="flex-1 flex flex-col gap-4">
            <h1>Edit profile</h1>
            <section className="flex items-center gap-8">
               <AvatarImg size={48} />
               <div className="">
                  <SecondaryBtn>Upload new photo</SecondaryBtn>
                  <p className="whitespace-nowrap">
                     At least 128x128 px recommended
                  </p>
                  <p className="whitespace-nowrap">Jpeg or PNG is allowed</p>
               </div>
            </section>
            <section className="w">
               <h2>Personal Information</h2>
               <div className="flex">
                  {/* <Input title="Full name" value={user.name} /> */}
                  {/* <Input title="Email" value={user.email} /> */}
                  {/* <Input
                     title="Phone number"
                     value={user.phoneNumber}
                     onChange={(e) => {
                        console.log(e.target.value);
                     }}
                  /> */}
               </div>
               <SecondaryBtn className="ml-auto">Save</SecondaryBtn>
            </section>
            <section className="">
               <b>Bio</b>
               <textarea
                  className="w-full h-32 px-3 py-2 !bg-transparent border relative border-tertiary shadow shadow-tertiary rounded-2xl outline-none"
                  placeholder={user?.bio}
               />
               <SecondaryBtn className="ml-auto">Save</SecondaryBtn>
            </section>
            <section>
               <hr />
               {/* {Object.keys(user).map((key) => (
                     <p key={key}>
                        {key} - {typeof key}
                     </p>
                  ))} */}
               <SecondaryBtn>Save</SecondaryBtn>
            </section>
         </main>
         <aside className="max-w-xs w-full bg-white">
            <h2>Complete yor profile</h2>
         </aside>
      </>
   );
}
