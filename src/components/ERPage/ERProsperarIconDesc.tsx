import { ERProsperarIconDescProps } from "../../types";
import { CmImage } from "../common";

export const ERProsperarIconDesc = ({
  icon, 
  children,
  margins
}: ERProsperarIconDescProps) => {
  return(
    <div className={`flex flex-col items-center text-customGrayDarker sm:w-1/3 w-full sm:mt-0 mt-5 ${margins ? 'sm:mx-5 mx-0' : ''}`}>
      <CmImage src={ icon } className="h-[120px] mb-5" />
      <span className="text-center font-thin sm:text-xl text-lg">
        { children }
      </span>
    </div>
  );
}