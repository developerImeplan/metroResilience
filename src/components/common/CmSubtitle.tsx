import { CmSubtitleProps } from "../../types";

export const CmSubtitle = ({ text }: CmSubtitleProps) => {
  return(
    <p className="text-customMain sm:text-3xl text-xl font-semibold">{ text }</p>
  );
}