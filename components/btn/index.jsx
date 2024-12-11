"use client";

import { twMerge } from "tailwind-merge";

export function PrimaryBtn({ children, className = "", ...attr }) {
   return (
      <button
         className={twMerge(
            "h-110 px-8 py-1 bg-secondary rounded-md text-white shadow shadow-secondary inline-block",
            className
         )}
         {...attr}
      >
         {children}
      </button>
   );
}

export function SecondaryBtn({ children, className='', attr }) {
   return (
      <button
         className={twMerge(
            "h-110 px-8 py-1 border border-secondary rounded-md text-secondary",
            className
         )}
         {...attr}
      >
         {children}
      </button>
   );
}
