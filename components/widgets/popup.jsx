"use client";
import { PrimaryBtn, SecondaryBtn } from "@/components/btn";
import { useRef } from "react";

export default function WidgetsPopup({
   children,
   title = "",
   saveAction = () => {},
}) {
   const details = useRef();

   return (
      <>
         <details ref={details} className="WidgetsPopup">
            <summary className="flex items-center justify-between">
               <b className="py-2 inline-block">{title}</b>
               <span>
                  <i className="bx bx-edit-alt"></i>
                  Düzenle
               </span>
            </summary>
            <div
            //    className="main absolute top-4 right-0 a left-0 z-50"
            >
               {/* <b className="py-2 inline-block">{title}</b> */}
               {children}
               <div className="pt-4 text-right">
                  <SecondaryBtn
                     className="mx-4"
                     onClick={() =>
                        console.log((details.current.open = false))
                     }>
                     Kapat
                  </SecondaryBtn>
                  <PrimaryBtn
                     onClick={() => {
                        saveAction();
                        details.current.open = false;
                     }}>
                     Değişiklikleri Kaydet
                  </PrimaryBtn>
               </div>
            </div>
         </details>
      </>
   );
}
