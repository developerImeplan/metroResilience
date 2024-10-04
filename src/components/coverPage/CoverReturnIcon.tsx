import { assets } from "../../assets";
import { CmImage } from "../common";

export const CoverReturnIcon = () => {
  return <CmImage 
    src={assets.iconReturn} 
    className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px]" 
  />;
}