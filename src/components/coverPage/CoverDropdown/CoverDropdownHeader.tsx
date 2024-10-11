import { CoverDropdownHeaderProps } from "../../../types";

export const CoverDropdownHeader = ({ 
  bg = 'customGray',
  title, 
  onClick
}: CoverDropdownHeaderProps) => {
  return(
    <div
      onClick={onClick} 
      className={`bg-${bg} flex justify-center item-center p-5 rounded-2xl cursor-pointer z-10`}
    >
      <p className="text-white sm:text-4xl text-3xl font-black">{ title }</p>
    </div>
  );
}