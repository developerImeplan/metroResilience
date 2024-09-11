import { CoverDropdownItemProps } from "../../../types";

export const CoverDropdownContent = ({ children }:  CoverDropdownItemProps) => {
  return(
    <div className="rounded-2xl border border-black p-5 mt-5 text-lg font-thin text-customGrayDarker">
      { children }
    </div>
  );
}