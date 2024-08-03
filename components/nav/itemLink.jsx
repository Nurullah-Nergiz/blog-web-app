import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 *
 * @param {Object} param0
 * @param {String} param0.link
 * @param {String} param0.icon
 * @param {String} param0.text
 * @returns
 */
export const ItemLink = ({ link, icon, text }) => {
   const pathName = usePathname();
   const active = pathName === link ? true : false;

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
               className={`${
                  active ? "font-black" : ""
               } xl:block hidden transition-all`}>
               {text}
            </span>
         </Link>
      </li>
   );
};
