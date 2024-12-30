import { PrimaryBtn } from "./index";

export default function FollowBtn({ id = "", className = "" }) {
   return (
      <>
         <PrimaryBtn className={className}>Follow</PrimaryBtn>
      </>
   );
}
