import { CmImageProps } from "../../types";

export const CmImage = ({ 
  src, 
  className,
}: CmImageProps) => {
  return(
    <img 
      className={className}
      src={src} 
    />
  );
}