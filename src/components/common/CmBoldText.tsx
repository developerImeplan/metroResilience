import { CmBoldTextProps } from "../../types";

export const CmBoldText = ({
  color,
  children,
  size,
  className
}: CmBoldTextProps) => {
  return(
    <span className={`font-bold text-${color} ${className} font-${size}`}>{ children }</span>
  );
}