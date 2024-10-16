import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { CoverMenuItem } from "./CoverMenuItem";
import { CoverMenuSectionProps } from "../../../types";

import { useState } from "react";
import { CmImage } from "../../common";
import { useNavigate } from "react-router-dom";

export const CoverMenuSection = ({
  complete,
  icon,
  title, 
  items,
  mainUrl,
}: CoverMenuSectionProps) => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return(
    <div className="flex flex-col w-full">
      <div 
        onClick={complete ? () => setIsOpen(c => !c) : () => navigate(mainUrl)}
        className="cursor-pointer flex justify-center items-center p-5 h-[85px] my-3"
      >
        <CmImage src={icon} className="h-[50px] mr-10" />
        <p className="text-customMain sm:text-3xl text-xl font-semibold mr-2">{ title }</p>
        { complete ? isOpen ? <IoIosArrowUp /> : <IoIosArrowDown /> : null }
      </div>
      <div>
        {
          (isOpen && complete) && (
            items.map(i => (
              <CoverMenuItem {...i} />
            ))
          )
        }   
      </div>
    </div>
  );
}