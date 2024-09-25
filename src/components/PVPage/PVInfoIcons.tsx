import { PVInfoIconsProps } from "../../types";

import icon1 from "../../assets/pv_icon1.png";
import icon2 from "../../assets/pv_icon2.png";
import icon3 from "../../assets/pv_icon3.png";
import { CmImage } from "../common";

export const PVInfoIcons = () => {
  return(
    <div className={`flex sm:flex-row flex-col w-full sm:mt-0 mt-5`}>
      { INFO_ICONS.map(i => (
        <InfoIcon {...i} />
      )) }
    </div>
  );
}

const InfoIcon = ({ icon, text, margins }: PVInfoIconsProps) => {
  return (
    <div className={`flex flex-col items-center ${margins ? 'sm:mx-3 mx-0' : ''} sm:p-10 p-5 sm:w-1/3 w-full`}>
      <CmImage src={icon} className="w-[100px] h-[100px] mb-3" />
      <p className="font-thin text-center sm:text-xl">{ text }</p>
    </div>
  )
}

const INFO_ICONS: PVInfoIconsProps[] = [
  {
    icon: icon1,
    text: "Principios de integralidad, sostenibilidad, comunal y resiliencia"
  },
  {
    icon: icon2,
    text: "Prioriza la visibilidad, ventilación, iluminación natural y los elementos paisajísticos existentes",
    margins: false
  },
  {
    icon: icon3,
    text: "Ubicación estratégica cercana a equipamientos, zonas habitacionales o de servicio, garantizando su accesibilidad, consolidación y vigilancia"
  },
];