import { Link } from "react-router-dom";
import { assets } from "../../assets";
import { CmImage } from "./CmImage";
import { CmHeaderProps } from "../../types";
import { CM_HEADER_ITEMS } from "../../constants";

export const CmHeader = () => {
  return(
    <div className="w-full bg-[#31365c] py-3 sm:h-[100px] sm:px-0 px-5">
      <div className="container mx-auto sm:px-1 py-3 flex flex-row justify-between items-center">
        <Link to="/">
          <CmImage src={assets.imeplanW} className="sm:h-[40px] h-[20px] sm:w-[150px] w-[75px]" />
        </Link>
        <div className="flex sm:space-x-2">
          {CM_HEADER_ITEMS.map(i => <CmHeaderItem {...i} />)}
        </div>
      </div>
    </div>
  );
}

const CmHeaderItem = ({
  text,
  link,
  logo
}: CmHeaderProps) => {
  return (
    <Link to={link} className="flex items-center sm:w-[188px] w-[75px] cursor-pointer">
      <CmImage src={logo} className="sm:h-[50px] h-[20px] sm:mr-3 mr-2" />
      <p className="text-white sm:text-base text-[7px] font-bold text-start sm:mt-0">{text}</p>
    </Link>
  )
}

