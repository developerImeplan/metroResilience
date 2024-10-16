import { ER_PILLS } from "../../constants";
import { ERPillProps } from "../../types";
import { CmBoldText } from "../common";

export const ERPills = () => {
  return (
    <div className="flex w-full sm:justify-end flex-wrap gap-y-5 gap-x-4">
      { ER_PILLS.map(i => (<ERPill {...i} />)) }
    </div>
  )
}

const ERPill = ({ bg, text }: ERPillProps) => {
  return(
    <div 
      className="w-[45%] h-[90px] bg-cover bg-center rounded-[80px] flex justify-start items-center px-10" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      <CmBoldText color="white" className="text-2xl">{ text }</CmBoldText>
    </div>
  );
}