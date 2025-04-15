"use client";

import { useState } from "react";

export default function Input({
   title = "",
   value = "",
   ...props
}) {
   const [inputValue, setInputValue] = useState("");
   return (
      <label>
         <b className="block">{title}</b>
         <input
            className="w-full h-9 px-3 py-2 !bg-transparent border relative border-tertiary shadow shadow-tertiary rounded-2xl outline-none"
            type="text"
            placeholder={value}
            value={inputValue}
            onChange={(e) => {
               setInputValue(e.target.value);
               onChange(e);
            }}
            {...props}
         />
      </label>
   );
}
