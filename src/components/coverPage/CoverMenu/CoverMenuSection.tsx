import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { CoverMenuItem } from "./CoverMenuItem";
import { CoverMenuSectionProps } from "../../../types";

import { useState } from "react";

export const CoverMenuSection = ({ 
  title, 
  items,
  margins = false,
}: CoverMenuSectionProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return(
    <div className={`flex flex-col w-full ${margins ? 'mx-5' : ''}`}>
      <div 
        onClick={() => setIsOpen(c => !c)}
        className="cursor-pointer flex justify-center items-center p-5 h-[85px] my-3"
      >
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