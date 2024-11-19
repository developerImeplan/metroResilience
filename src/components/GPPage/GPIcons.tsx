import { assets } from "../../assets";
import { GpIconsProps } from "../../types";
import { CmImage } from "../common";

export const GPIcons = () => {
  return(
    <div className="flex sm:flex-row flex-wrap sm:justify-around justify-center gap-10 sm:space-x-20 mt-10">
      { GP_ICONS.map(i => <GPIcon {...i} />) }
    </div>
  );
}

const GPIcon = ({ icon, text }: GpIconsProps) => {
  return (
    <div className="flex flex-col items-center">
      <CmImage src={icon} className="h-[130px] mb-3" />
      <p className="text-center sm:text-xl text-lg font-semibold w-[120px] text-customTurquoiseGP">{ text }</p>
    </div>
  )
}

const GP_ICONS: GpIconsProps[] = [
  {
    icon: assets.iconGobernanza,
    text: "Gobernanza metropolitan"
  },
  {
    icon: assets.iconResiliencia,
    text: "Resiliencia Urbana"
  },
  {
    icon: assets.iconAccion,
    text: "Colaboración  entre metrópolis"
  },
  {
    icon: assets.iconInspiracion,
    text: "Inspiración y Replicabilidad"
  },
]