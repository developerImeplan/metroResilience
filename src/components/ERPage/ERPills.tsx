import { ER_PILLS } from "../../constants";
import { ERPillProps } from "../../types";
import { CmBoldText } from "../common";

export const ERPills = () => {
  return (
    <div className="flex w-full sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4">
      { ER_PILLS.map(i => (<ERPill {...i} />)) }
    </div>
  )
}

const ERPill = ({ bg, text }: ERPillProps) => {
  return(
    <div 
      className="w-full h-[90px] bg-cover bg-center rounded-[80px] flex justify-start items-center px-10" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      <CmBoldText color="white" className="text-2xl">{ text }</CmBoldText>
    </div>
  );
}