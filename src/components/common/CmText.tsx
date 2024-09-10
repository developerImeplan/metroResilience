import { CmTextProps } from "../../types";

export const CmText = ({ 
  align = 'center',
  children = '', 
  color = 'black', 
  variant = 'base' 
}: CmTextProps) => {
  return(
    <p className={`font-montserrat text-${variant} text-${color} ${align}`}>{ children }</p>
  );
}