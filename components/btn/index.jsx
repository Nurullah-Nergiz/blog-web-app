import { twMerge } from "tailwind-merge";


export  function PrimaryBtn({ children, className, ...attr }) {
   return (
      <button
         className={"px-3 py-2 border-primary border rounded-xl " + className}
         {...attr}>
         {children}
      </button>
   );
}


export function BtnSecondary({ children, className, attr }) {
   return (
      <button
         className={twMerge(
            "px-3 py-2 bg-secondary text-white rounded-xl ",
            className
         )}
         {...attr}>
         {children}
      </button>
   );
}
