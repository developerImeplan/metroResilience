import { Link } from "react-router-dom";
import { assets } from "../../assets";
import { CmImage } from "./CmImage";
import { CmHeaderProps } from "../../types";
import { CM_HEADER_ITEMS } from "../../constants";

export const CmHeader = () => {
  return(
    <div className="w-full bg-[#424777] py-3 sm:h-[100px]">
      <div className="container mx-auto px-1 py-3 flex sm:flex-row flex-col justify-between items-center">
        <CmImage src={assets.imeplanW} className="sm:h-[40px] w-[150px]" />
        <div className="flex space-x-2">
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
    <Link to={link} className="flex items-center sm:w-[180px] w-1/3">
      <CmImage src={logo} className="h-[50px] sm:mr-4 mr-2" />
      <p className="text-white sm:text-base text-xs font-thin text-start sm:mt-0 mt-3">{text}</p>
    </Link>
  )
}

