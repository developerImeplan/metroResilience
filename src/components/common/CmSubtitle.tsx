import { CmSubtitleProps } from "../../types";

export const CmSubtitle = ({ text }: CmSubtitleProps) => {
  return(
    <p className="text-customMain text-3xl font-semibold">{ text }</p>
  );
}