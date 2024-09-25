import construccion1 from "../../assets/construccion1.png";
import construccion2 from "../../assets/construccion2.png";
import construccion3 from "../../assets/construccion3.png";
import construccion4 from "../../assets/construccion4.png";
import { CmImage } from "../common";

export const GPConstruccionImages = () => {
  return(
    <div className="sm:w-1/2 sm-w-full flex flex-wrap">
      { GP_CONSTRUCCION_IMAGES.map(i => <CmImage className="sm:w-1/2 p-1" src={i} />) }
    </div>
  );
}

const GP_CONSTRUCCION_IMAGES: string[] = [
  construccion1,
  construccion2,
  construccion3,
  construccion4
];