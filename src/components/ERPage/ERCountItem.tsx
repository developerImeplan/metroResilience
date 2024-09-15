import { ERCountItemProps } from "../../types";

export const ERCountItem = ({
  number,
  title,
  marginRight = true
}: ERCountItemProps) => {
  return(
    <div className={`flex flex-col items-center ${ marginRight ? 'mr-10' : '' }`}>
      <div className="flex justify-center items-center bg-customBlueLighter w-[170px] h-[120px] rounded-2xl">
        <p className="text-white text-6xl font-bold">{ number }</p>
      </div>
      <p className="text-center mt-5 font-semibold text-2xl text-customGrayDarker">
        { title }
      </p>
    </div>
  );
}