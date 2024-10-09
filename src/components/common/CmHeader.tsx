import { Link } from "react-router-dom";
import { assets } from "../../assets";
import { CmImage } from "./CmImage";
import { CmHeaderProps } from "../../types";
import { CM_HEADER_ITEMS } from "../../constants";

export const CmHeader = () => {
  return(
    <div className="w-full bg-customPurple py-3">
      <div className="container mx-auto px-1 py-3 flex justify-between">
        <CmImage src={assets.imeplanC} className="h-[50px]" />
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
    <Link to={link} className="flex items-center w-[180px]">
      <CmImage src={logo} className="h-[50px] mr-4" />
      <p className="text-white sm:text-base font-thin text-start">{text}</p>
    </Link>
  )
}

