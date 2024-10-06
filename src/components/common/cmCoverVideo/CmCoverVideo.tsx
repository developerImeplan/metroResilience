import { CmCoverVideoProps } from "../../../types";
import { CmImage, CmLogo, CmVideo } from "../";
import { CmCoverVideoFooter } from "./CmCoverVideoFooter";

export const CmCoverVideo = ({ showFooter = true, footerContent, video, children, title, img, icon }: CmCoverVideoProps) => {
  return(
    <section className="relative h-screen overflow-hidden">
      {
        video ? <CmVideo url={ video } /> : <CmImage src={img ?? ''} className="absolute top-0 z-10 left-0 w-full h-full object-cover" />
      }
      <div className="relative h-[90vh] z-10 w-full flex flex-col justify-between">
        <div className="container flex flex-col justify-between mx-auto px-4">
          <div className="sm:mt-10 mt-5">
            <CmLogo />
          </div>
          { children }
        </div>
        {
          showFooter && title && icon ? (
            <CmCoverVideoFooter title={title} icon={icon} children={footerContent} />
          ) : null
        }
      </div>
    </section>
  );
}