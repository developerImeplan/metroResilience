import { ERQueEsIconProps } from "../../types";
import { CmBoldText, CmImage } from "../common";

export const ERQueEsIcon = ({ icon, title, textSide }: ERQueEsIconProps) => {
  return(
    <div className="flex items-center justify-between space-x-5 w-[400px]">
      { textSide === 'left' ? <Text title={title} textSide={textSide} /> : null}
      <CmImage src={icon} className="h-[100px]" />
      { textSide === 'right' ? <Text title={title} textSide={textSide} /> : null}
    </div>
  );
}

const Text = ({ title, textSide }: Pick<ERQueEsIconProps, 'title' | 'textSide'>) => {
  return(
    <CmBoldText 
      color="customPurple" 
      className={`text-${textSide === 'right' ? 'start' : 'end'} sm:text-xl mt-2 text-customPurple`}
    >
      {title}
    </CmBoldText>
  );
}