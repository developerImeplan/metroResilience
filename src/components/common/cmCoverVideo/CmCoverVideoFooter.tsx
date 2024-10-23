import { CmCoverVideoFooterProps } from "../../../types";
import { CmImage } from "../CmImage";

export const CmCoverVideoFooter = ({ children, title, icon, width = true }: CmCoverVideoFooterProps) => {
  return (
    <div className="flex flex-row sm:justify-end items-center z-50 sm:pb-0 pb-5">
      <div className={width ? 'w-2/3' : ''}>
        { children }
      </div>
      <div className="sm:mt-0 mt-5">
        <div className="bg-white/80 sm:px-20 sm:py-10 w-full flex items-center">
          <CmImage src={icon} className="sm:h-[40px] h-[20px] sm:mr-5 sm:ml-0 ml-3"/>
          <p className="sm:text-3xl text-xs text-center text-customMain font-bold">{ title }</p>
        </div>
      </div>
    </div>
  );
}
