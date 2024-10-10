import { CoverDropdownItemProps } from "../../../types";

export const CoverDropdownContent = ({ children }:  CoverDropdownItemProps) => {
  return(
    <div className="rounded-2xl bg-white mt-[-20px] p-5 pt-[35px] text-2xl font-thin text-customGrayDarker text-justify h-full">
      { children }
    </div>
  );
}