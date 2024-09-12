import { CoverDropdownItemProps } from "../../../types";

export const CoverDropdownContent = ({ children }:  CoverDropdownItemProps) => {
  return(
    <div className="rounded-2xl border border-black p-5 mt-5 text-xl font-thin text-customGrayDarker text-justify h-full">
      { children }
    </div>
  );
}