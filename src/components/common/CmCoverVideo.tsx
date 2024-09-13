import { CmCoverVideoProps } from "../../types";
import { CmVideo } from "./CmVideo";

export const CmCoverVideo = ({ video, children }: CmCoverVideoProps) => {
  return(
    <section className="relative h-screen overflow-hidden">
      <CmVideo url={ video } />
      <div className="relative z-10 w-full">
        <div className="container h-[90vh] flex flex-col justify-between mx-auto px-4">
          { children }
        </div>
      </div>
    </section>
  );
}