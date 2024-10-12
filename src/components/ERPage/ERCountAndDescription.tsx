import { ERCountAndDescriptionProps } from "../../types";
import { CmBoldText } from "../common";

export const ERCountAndDescription = ({
  title,
  bgColor,
  number,
  description,
  examples,
}: ERCountAndDescriptionProps) => {
  return(
    <div className={`flex flex-col ml-0 sm:mt-0 mt-5`}>
      <div className={`flex sm:flex-col p-3 items-center justify-center bg-${bgColor} rounded-2xl text-white z-10`}>
        <p className="sm:text-5xl text-3xl font-extrabold sm:mr-0 mr-2">{ number }</p>
        <p className="sm:text-2xl text-xl font-bold">{ title }</p>
      </div>
      <div className="flex flex-col rounded-2xl sm:px-10 px-5 pt-10 py-5 bg-white font-thin sm:text-xl mt-[-23px] text-customGrayDarker h-full">
        <p>{ description }</p>
        <CmBoldText color="[#5f93a5]" className="mt-5">{ examples }</CmBoldText>
      </div>
    </div>
  );
}