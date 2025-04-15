"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store";
import { PersistGate } from "redux-persist/integration/react";

export default function ReduxProvider({ children }) {
   return (
      <>
         <Provider store={store}>{children}</Provider>
      </>
   );
}
