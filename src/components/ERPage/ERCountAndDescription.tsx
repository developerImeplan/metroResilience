import { ERCountAndDescriptionProps } from "../../types";
import { CmBoldText } from "../common";

export const ERCountAndDescription = ({
  title,
  bgColor,
  number,
  description,
  examples,
  mr = '0',
  ml = '0'
}: ERCountAndDescriptionProps) => {
  return(
    <div className={`flex flex-col mr-${mr} ml-${ml}`}>
        <div className={`flex flex-col p-3 items-center bg-${bgColor} rounded-2xl text-white`}>
        <p className="text-5xl font-extrabold">{ number }</p>
        <p className="text-xl">{ title }</p>
      </div>
      <div className="flex flex-col rounded-2xl p-10 items-center bg-customGrayBg font-thin text-xl mt-4 text-customGrayDarker border-customBlueLighter border text-center h-full">
        <p>{ description }</p>
        <CmBoldText className="mt-5">{ examples }</CmBoldText>
      </div>
    </div>
  );
}