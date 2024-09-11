import { CoverDropdownHeaderProps } from "../../../types";

export const CoverDropdownHeader = ({ title }: CoverDropdownHeaderProps) => {
  return(
    <div className="bg-customGray flex justify-center item-center p-5 rounded-2xl">
      <p className="text-customMain text-xl font-thin">{ title }</p>
    </div>
  );
}