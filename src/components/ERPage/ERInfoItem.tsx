import { ERInfoItemProps } from "../../types";
import { CmDropdown } from "../common";

export const ERInfoItem = ({
  title,
  children,
  margins = false
}: ERInfoItemProps) => {
  return(
    <div className={`flex flex-col w-full sm:mt-0 sm:mt-10 mt-5 ${ margins ? 'sm:mx-5 mx-0' : '' }`}>
      <CmDropdown
        titleComponent={
          <div className="flex justify-center py-5 rounded-2xl bg-customBlueLighterN group">
            <p className="sm:text-3xl text-xl font-bold text-white">{ title }</p>
          </div>
        }
      >
        <div className="flex justify-center mt-[-18px] bg-[#f7f7f7] sm:p-10 p-5 rounded-2xl h-full">
          <span className="font-thin sm:text-2xl text-lg text-justify text-customGrayDarker">
            { children }
          </span>
        </div>
      </CmDropdown>      
    </div>
  );
}