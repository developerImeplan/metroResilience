import { CoverMenuItemProps } from "../../../types";

export const CoverMenuItem = ({ text }: CoverMenuItemProps) => {
  return (
    <div className="cursor-pointer flex justify-center items-center bg-customGray p-5 mb-1 hover:bg-customMain group">
      <p className="text-customMain text-lg font-semibold group-hover:text-customGray">{text}</p>
    </div>
  );
};
