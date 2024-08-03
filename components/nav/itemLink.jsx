import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

/**
 *
 * @param {Object} props
 * @param {String} props.link
 * @param {String} props.icon
 * @param {String} props.text
 * @returns
 */
export const ItemLink = ({ link, icon, text }) => {
   const pathName = usePathname();
   const active = pathName === link ? true : false;
   const navbar =
      useSelector((state) => state.ui.navbar) === true ? true : false;

   return (
      <li>
         <Link
            href={link}
            className={`${
               active
                  ? "before:w-1 before:bg-primary before:absolute before:top-0 before:bottom-0 before:-left-6"
                  : ""
            } mb-2 flex items-center gap-3 relative`}
            title={text}>
            <i
               className={`${
                  active ? icon.replace("bx-", "bxs-") + " text-primary" : icon
               }`}></i>
            <span
               className={`${active ? "font-black" : ""} ${
                  navbar ? "!block" : "!hidden"
               } xl:block hidden transition-all`}>
               {text} <br />
            </span>
         </Link>
      </li>
   );
};
