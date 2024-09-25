import { CmCoverVideoFooterProps } from "../../../types";
import { CmImage } from "../CmImage";

export const CmCoverVideoFooter = ({ image, title }: CmCoverVideoFooterProps) => {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-end items-center z-50">
      <div>
        <CmImage 
          src={image} 
          className="sm:w-[650px] w-[320px]"
        />
      </div>
      <div className="sm:mt-0 mt-5">
        <div className="bg-white/80 px-20 py-10 w-full">
          <p className="sm:text-3xl text-2xl text-center text-customMain font-bold">{ title }</p>
        </div>
      </div>
    </div>
  );
}
