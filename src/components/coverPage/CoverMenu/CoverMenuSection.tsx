import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { CoverMenuItem } from "./CoverMenuItem";
import { CoverMenuSectionProps } from "../../../types";

import { useState } from "react";
import { CmImage } from "../../common";

export const CoverMenuSection = ({ 
  icon,
  title, 
  items,
  margins = false,
}: CoverMenuSectionProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(true);

  return(
    <div className={`flex flex-col w-full ${margins ? 'mx-5' : ''}`}>
      <div 
        onClick={() => setIsOpen(c => !c)}
        className="cursor-pointer flex justify-center items-center p-5 h-[85px] my-3"
      >
        <CmImage src={icon} className="h-[50px] mr-10" />
        <p className="text-customMain sm:text-3xl text-xl font-semibold mr-2">{ title }</p>
        { isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <div>
        {
          isOpen && (
            items.map(i => (
              <CoverMenuItem {...i} />
            ))
          )
        }   
      </div>
    </div>
  );
}