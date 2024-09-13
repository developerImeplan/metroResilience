import { CmCoverVideoProps } from "../../../types";
import { CmLogo, CmVideo } from "../";
import { CmCoverVideoFooter } from "./CmCoverVideoFooter";

import partnersLogos from "../../../assets/partners.png";

export const CmCoverVideo = ({ showFooter = true, video, children }: CmCoverVideoProps) => {
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
          showFooter ? (
            <CmCoverVideoFooter 
              image={partnersLogos}
              title="Estrategia de Resiliencia Metropolitana"
            />
          ) : null
        }
      </div>
    </section>
  );
}