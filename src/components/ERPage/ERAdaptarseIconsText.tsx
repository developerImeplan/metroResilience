import { ER_ADAPTARSE_ICONS_TEXT } from "../../constants";
import { ERAdaptarseIconsTextProps } from "../../types";
import { CmBoldText, CmImage } from "../common";

export const ERAdaptarseIconsText = () => {
  return(
    <div className="flex sm:flex-row flex-col items-center sm:justify-around h-full sm:space-x-5 mt-5">
      { ER_ADAPTARSE_ICONS_TEXT.map(i => (<Item {...i} />)) }
    </div>
  );
}

export const Item = ({ icon, text }: ERAdaptarseIconsTextProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-[80px] bg-customPurple w-[160px] h-[250px] sm:mt-0 mt-5 mb-1">
      <CmImage src={icon} className="h-[80px]" />
      <CmBoldText color="white text-center mt-5">{ text }</CmBoldText>
    </div>
  )
}