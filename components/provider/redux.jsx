"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store";
import LoadData from "./load";

export default function ReduxProvider({ children }) {
   return (
      <>
         <Provider store={store}>
            {children}
            <LoadData />
         </Provider>
      </>
   );
}
