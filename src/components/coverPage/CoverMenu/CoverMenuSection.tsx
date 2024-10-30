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
  index,
  mainUrl,
  img = false,
}: CoverMenuSectionProps) => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return(
    <div className="flex flex-col sm:w-1/3 w-full">
      <div 
        onClick={complete ? () => setIsOpen(c => !c) : () => navigate(mainUrl)}
        className={`w-full cursor-pointer flex justify-center items-center p-5 h-[85px] bg-[#eaeaea] ${index === 0 ? 'sm:rounded-bl-3xl' : ''} ${index === 2 ? 'rounded-br-3xl rounded-bl-3xl sm:rounded-bl-[0]' : ''}`}
      >
        <CmImage src={icon} className="h-[50px] mr-10" />
        {
          !img ? (
            <p className="text-customMain sm:text-2xl text-xl font-semibold mr-2 max-w-[167px]">{ title }</p>
          ) : (
            <img className="h-[60px]" src={title} />
          )
        }
        { complete ? isOpen ? <IoIosArrowUp className="text-3xl" /> : <IoIosArrowDown className="text-3xl" /> : null }
      </div>
      <div className={`mx-3 ${isOpen ? 'p-2' : ''} bg-customMain rounded-bl-3xl rounded-br-3xl`}>
        {
          (isOpen && complete) && (
            items.map((i, index) => (
              <CoverMenuItem {...i} last={index === items.length - 1} />
            ))
          )
        }   
      </div>
    </div>
  );
}