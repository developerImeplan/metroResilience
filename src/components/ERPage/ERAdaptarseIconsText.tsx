import { ER_ADAPTARSE_ICONS_TEXT } from "../../constants";
import { ERAdaptarseIconsTextProps } from "../../types";
import { CmBoldText, CmImage } from "../common";

export const ERAdaptarseIconsText = () => {
  return (
    <div className="sm:w-2/3 w-full flex flex-wrap items-center sm:justify-between h-full sm:mt-0 mt-5 gap-4">
      {ER_ADAPTARSE_ICONS_TEXT.map(i => (<Item key={i.text} {...i} />))}
    </div>
  );
}

export const Item = ({ icon, text }: ERAdaptarseIconsTextProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-[50px] bg-customPurple sm:w-[170px] w-[45%] h-[250px] px-5">
      <CmImage src={icon} className="h-[80px]" />
      <CmBoldText color="white text-center mt-5">{text}</CmBoldText>
    </div>
  );
}
