import { ICmText } from "../../types";

export const CmText = ({ 
  align = 'center',
  children = '', 
  color = 'black', 
  variant = 'base' 
}: ICmText) => {
  return(
    <p className={`text-${variant} text-${color} ${align}`}>{ children }</p>
  );
}