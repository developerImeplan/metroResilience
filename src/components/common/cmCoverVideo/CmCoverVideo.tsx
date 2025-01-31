import { CmCoverVideoProps } from "../../../types";
import { CmImage, CmLogo, CmVideo } from "../";
import { CmCoverVideoFooter } from "./CmCoverVideoFooter";

export const CmCoverVideo = ({ showFooter = true, footerContent, video, children, title, img, icon, width = true }: CmCoverVideoProps) => {
  return(
    <section className="relative sm:h-[calc(100vh-100px)] h-[220px] overflow-hidden">
      {
        video ? <CmVideo url={ video } /> : <CmImage src={img ?? ''} className="absolute top-0 z-10 left-0 w-full sm:h-[calc(100vh-100px)] h-[220px] object-cover" />
      }
      <div className="relative sm:h-[calc(100vh-150px)] h-[220px] z-10 w-full flex flex-col justify-between">
        <div className="container flex flex-col justify-between mx-auto px-4">
          <div className="sm:mt-10 mt-5">
            <CmLogo />
          </div>
          { children }
        </div>
        {
          showFooter && title && icon ? (
            <CmCoverVideoFooter title={title} icon={icon} children={footerContent} width={width} />
          ) : null
        }
      </div>
    </section>
  );
}