import { CmBannerProps } from "../../types";

export const CmBanner = ({ text }: CmBannerProps) => {
  return(
    <div className="w-full bg-customGrayBg p-5 flex justify-center items-center">
      <p className="sm:text-3xl text-xl text-center font-bold text-customGrayDarker">{ text }</p>
    </div>
  );
}