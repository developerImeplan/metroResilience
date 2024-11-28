import { CmBannerProps } from "../../types";
import { CmImage } from "./CmImage";

export const CmBanner = ({ color, icon, text, textCenter = true }: CmBannerProps) => {
  return(
    <div className="sm:py-5 py-3 flex justify-start items-center sm:space-x-5 space-x-3">
      <p className={`sm:text-6xl ${text.length > 10 ? 'text-3xl' : 'text-4xl'} ${textCenter ? 'text-center' : 'text-start'} font-black text-${color}`}>{ text }</p>
      { icon ? <CmImage src={icon ?? ''} className="sm:h-[60px] h-[35px]" /> : null}
    </div>
  );
}