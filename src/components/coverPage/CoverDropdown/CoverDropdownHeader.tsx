import { CoverDropdownHeaderProps } from "../../../types";

export const CoverDropdownHeader = ({ 
  title, 
  onClick
}: CoverDropdownHeaderProps) => {
  return(
    <div
      onClick={onClick} 
      className="bg-customGray flex justify-center item-center p-5 rounded-2xl cursor-pointer"
    >
      <p className="text-customMain text-xl font-thin">{ title }</p>
    </div>
  );
}