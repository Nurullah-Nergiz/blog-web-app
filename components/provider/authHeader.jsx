"use client";
import { createContext, useState } from "react";

const AuthHeaderContext = createContext();

export default AuthHeaderContext;

export const AuthHeaderProvider = ({ children }) => {
   const [header, setHeader] = useState({
      title: "Login",
      description: "Login to your account",
   });
   return (
      <AuthHeaderContext.Provider value={[header, setHeader]}>
         {children}
      </AuthHeaderContext.Provider>
   );
};
