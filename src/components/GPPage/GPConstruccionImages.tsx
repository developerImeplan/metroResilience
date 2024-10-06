
import { assets } from "../../assets";
import { CmImage } from "../common";

export const GPConstruccionImages = () => {
  return(
    <div className="sm:w-1/2 sm-w-full flex flex-wrap">
      { GP_CONSTRUCCION_IMAGES.map(i => <CmImage className="sm:w-1/2 p-1 object-cover" src={i} />) }
    </div>
  );
}

const GP_CONSTRUCCION_IMAGES: string[] = [
  assets.gpConstruccion1,
  assets.gpConstruccion2,
  assets.gpConstruccion3,
  assets.gpConstruccion4,
];