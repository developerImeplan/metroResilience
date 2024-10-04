import { CmCoverVideoProps } from "../../../types";
import { CmLogo, CmVideo } from "../";
import { CmCoverVideoFooter } from "./CmCoverVideoFooter";

export const CmCoverVideo = ({ showFooter = true, footerContent, video, children, title }: CmCoverVideoProps) => {
  return(
    <section className="relative h-screen overflow-hidden">
      <CmVideo url={ video } />
      <div className="relative h-[90vh] z-10 w-full flex flex-col justify-between">
        <div className="container flex flex-col justify-between mx-auto px-4">
          <div className="sm:mt-10 mt-5">
            <CmLogo />
          </div>
          { children }
        </div>
        {
          showFooter && title ? (
            <CmCoverVideoFooter title={title} children={footerContent} />
          ) : null
        }
      </div>
    </section>
  );
}