import { CoverMenuItemProps } from "../../../types";

export const CoverMenuItem = ({ text }: CoverMenuItemProps) => {
  return(
    <div className="cursor-pointer flex justify-center items-center bg-customGray p-5">
      <p className="text-customMain text-lg font-semibold">{ text }</p>
    </div>
  );
}