import { CmTextProps } from "../../types";

export const CmText = ({ 
  align = 'start',
  children = '', 
  color = 'black', 
  fontWeight = 'normal',
  variant = 'base' 
}: CmTextProps) => {
  return(
    <p className={`
      font-montserrat
      font-${fontWeight}
      text-${variant} 
      text-${color} 
      text-${align}
      p-0
      m-0
    `}>{ children }</p>
  );
}