export default function PrimaryBtn({ children, className, ...attr }) {
   return (
      <button
         className={"px-3 py-2 bg-primary text-white rounded-xl " + className}
         {...attr}>
         {children}
      </button>
   );
}
