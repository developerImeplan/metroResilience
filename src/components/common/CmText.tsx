import { ICmText, variantClasses } from "../../types";

export const CmText = ({ children = '', variant = 'textBase' }: ICmText) => {
const className = variantClasses[variant] || 'text-base';
  return(
    <p className={className}>{ children }</p>
  );
}