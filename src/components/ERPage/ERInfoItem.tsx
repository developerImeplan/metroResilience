import { ERInfoItemProps } from "../../types";
import { CmDropdown } from "../common";

export const ERInfoItem = ({
  title,
  children,
  margins = false
}: ERInfoItemProps) => {
  return(
    <div className={`flex flex-col w-full sm:mt-0 mt-10 ${ margins ? 'sm:mx-5 mx-0' : '' }`}>
      <CmDropdown
        titleComponent={
          <div className="flex justify-center py-5 border-2 rounded-2xl">
            <p className="sm:text-3xl text-xl font-bold text-customBlueLighter">{ title }</p>
          </div>
        }
      >
        <div className="flex justify-center items-center mt-4 bg-customGrayBg p-10 border-2 rounded-2xl h-full">
          <span className="font-thin sm:text-2xl text-lg text-center text-customGrayDarker">
            { children }
          </span>
        </div>
      </CmDropdown>      
    </div>
  );
}