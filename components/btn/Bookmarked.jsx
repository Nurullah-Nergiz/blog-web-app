"use client";
import { setBookmark, setUnBookmark } from "@/services/bookmark";
import { useState } from "react";

/**
 *
 * @param {Object} props
 * @param {Boolean} props.isLiked
 * @param {String} props.id
 * @returns
 */
export default function BtnBookmarked({ children, isBookmarked, id,className }) {
   const [bookmark, setBookmarked] = useState(isBookmarked);
   const toggleLike = () => {
      if (bookmark) {
        setUnBookmark(id)
            .then((data) => {
               console.log(data);
            })
            .catch((err) => {
               console.log("err:", err);
            });
      } else {
         setBookmark(id)
            .then(({ data, status }) => {
               console.log(data, status);
            })
            .catch(({ response, status }) => {
               if (status===409) {
                  setBookmark(true)
               }
               console.log("err:", response);
            });
      }
      setBookmarked(!bookmark);
   };

   return (
      <>
         <button
            className={`bx ${bookmark ? "bxs" : "bx"}-bookmark ${className}`}
            onClick={toggleLike}></button>
      </>
   );
}
