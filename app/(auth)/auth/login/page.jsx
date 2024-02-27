import PrimaryBtn from "@/components/btn/primary";
import Link from "next/link";

export default function Page() {
   return (
      <>
         <label className="px-3 py-2 bg-white flex items-center gap-2 border relative border-tertiary shadow shadow-tertiary rounded-2xl ">
            <i className="bx bx-user"></i>
            <input type="text" className="w-full bg-transparent outline-none" required />
            <span>UserName Or Email</span>
         </label>
         <label className="px-3 py-2 bg-white flex items-center gap-2 border relative border-tertiary shadow shadow-tertiary rounded-2xl ">
            <i className="bx bx-lock-alt"></i>
            <input type="text" className="w-full bg-transparent outline-none" required />
            <span>Password</span>
         </label>
         <span className="flex justify-between">
            <Link href="./">Forgot</Link>
            {/* <button  className="px-3 py-2 bg-primary text-white">Login</button> */}
         </span>
         <PrimaryBtn >Login</PrimaryBtn>
      </>
   );
}
