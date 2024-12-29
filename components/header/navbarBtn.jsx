"use client";
import { closeNavbar, openNavbar } from "@/store/uiStore";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function NavbarBtn({ children }) {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.auth.user) || {};
   const navbar =
      useSelector((state) => state.ui.navbar) === true ? true : false;

   return (
      <div className="hidden sm:block text-3xl whitespace-nowrap ">
         <button
            className="bx bx-chevron-left w-min p-0 font-bold disabled:text-secondary disabled:font-normal"
            onClick={() => dispatch(closeNavbar())}
            disabled={!navbar}></button>
         <button
            className="bx bx-chevron-right w-min p-0 font-bold disabled:text-secondary disabled:font-normal"
            onClick={() => dispatch(openNavbar())}
            disabled={navbar}></button>
      </div>
   );
}
