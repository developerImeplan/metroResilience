import { CmBannerProps } from "../../types";
import { CmImage } from "./CmImage";

export const CmBanner = ({ icon, text }: CmBannerProps) => {
  return(
    <div className="w-full bg-customGrayBg p-5 flex justify-center items-center sm:space-x-5 space-x-3">
      { icon ? <CmImage src={icon ?? ''} className="sm:h-[40px] h-[30px]" /> : null}
      <p className="sm:text-3xl text-2xl text-center font-bold text-customGrayDarker">{ text }</p>
      { icon ? <CmImage src={icon ?? ''} className="sm:h-[40px] h-[30px]" /> : null}
    </div>
  );
}