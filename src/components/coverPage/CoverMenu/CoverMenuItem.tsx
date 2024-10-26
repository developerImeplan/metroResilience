import { Link } from "react-router-dom";
import { CoverMenuItemProps } from "../../../types";

export const CoverMenuItem = ({ text, link, last }: CoverMenuItemProps) => {
  return (
    <Link
      to={link} 
      className={`relative cursor-pointer flex justify-center items-center bg-customMain p-5 hover:bg-white group rounded-2xl ${!last ? 'has-border' : ''}`}
    >
      <p className="text-white text-center text-lg font-semibold group-hover:text-customMain">{text}</p>
      {!last && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-0.5 bg-white"></span>
      )}
    </Link>
  );
};
