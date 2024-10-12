import { ERQueEsIconProps } from "../../types";
import { CmBoldText, CmImage } from "../common";

export const ERQueEsIcon = ({ icon, title, textSide }: ERQueEsIconProps) => {
  return(
    <div className="flex items-center justify-between sm:space-x-5 space-x-2 sm:w-[400px] w-full">
      { textSide === 'left' ? <Text title={title} textSide={textSide} /> : null}
      <CmImage src={icon} className="sm:h-[100px] h-[60px]" />
      { textSide === 'right' ? <Text title={title} textSide={textSide} /> : null}
    </div>
  );
}

const Text = ({ title, textSide }: Pick<ERQueEsIconProps, 'title' | 'textSide'>) => {
  return(
    <CmBoldText 
      color="customPurple" 
      className={`text-${textSide === 'right' ? 'start' : 'end'} sm:text-xl text-sm mt-2 text-customPurple`}
    >
      {title}
    </CmBoldText>
  );
}