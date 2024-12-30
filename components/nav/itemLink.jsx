import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

/**
 *
 * @param {Object} props
 * @param {String} props.link
 * @param {String} props.icon
 * @param {String} props.text
 * @param {"col"||"row"} props.mode
 * @returns React.Component
 */
export const ItemLink = ({ link, icon, text, mode = "row" }) => {
   const pathName = usePathname();
   const active = pathName === link ? true : false;
   const navbar =
      useSelector((state) => state.ui.navbar) === true ? true : false;

   return (
      <Link
         href={link}
         className={`${
            active
               ? "before:w-1 before:bg-primary before:absolute sm:before:top-0 before:bottom-0 sm:before:-left-10"
               : ""
         } mb-2 flex ${
            navbar === true ? "flex-row" : "flex-col"
         } items-center gap-3 relative`}
         title={text}>
         <i
            className={`${
               active ? icon.replace("bx-", "bxs-") + " sm:text-primary" : icon
            } text-xl`}></i>
         <span
            className={`${
               active ? "font-black" : ""
            } whitespace-nowrap xl:block transition-all text-base ${
               navbar ? "block" : "!hidden"
            }`}>
            {text} <br />
         </span>
      </Link>
   );
};
