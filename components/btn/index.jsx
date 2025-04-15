"use client";

import { twMerge } from "tailwind-merge";

/**
 *
 * @param {String} param0.className
 * @param {Function} param0.onClick
 * @returns {import("react").ReactHTMLElement}
 */
export function PrimaryBtn({
   children,
   className = "",
   onClick = () => {},
   ...attr
}) {
   return (
      <button
         className={twMerge(
            "px-6 py-1 bg-primary !text-current rounded-md text-white shadow shadow-secondary inline-block",
            className
         )}
         onClick={() => onClick()}
         {...attr}>
         {children}
      </button>
   );
}

export function SecondaryBtn({
   children,
   className = "",
   onClick = () => {},
   attr,
}) {
   return (
      <button
         className={twMerge(
            "h-110 px-8 py-1 !text-current border border-primary rounded-md text-secondary",
            className
         )}
         onClick={() => onClick()}
         {...attr}>
         {children}
      </button>
   );
}
