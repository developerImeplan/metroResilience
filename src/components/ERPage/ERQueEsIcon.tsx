import { ERQueEsIconProps } from "../../types";
import { CmBoldText, CmImage } from "../common";

export const ERQueEsIcon = ({ icon, title }: ERQueEsIconProps) => {
  return(
    <div className="flex flex-col items-center w-[300px]">
      <CmImage src={icon} className="h-[100px]" />
      <CmBoldText color="customPurple" className="text-center sm:text-2xl mt-2">
        {title}
      </CmBoldText>
    </div>
  );
}