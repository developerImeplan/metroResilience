import { assets } from "../../assets";
import { CM_ICONS_SN } from "../../constants";
import { CmIconSN } from "./CmIconSN";
import { CmImage } from "./CmImage";

export const CmFooter = () => {
  return(
    <div className="w-full bg-customPurple p-10 flex sm:flex-row flex-col sm:items-center sm:space-x-5">
      <div className="space-y-4 w-2/3">
        <div className="flex justify-center space-x-10">
          <CmImage src={assets.financeEU} className="h-[50px] object-contain sm:mb-0 mb-5" />
          <CmImage src={assets.ambW} className="h-[50px] object-contain sm:mb-0 mb-5" />
          <CmImage src={assets.imeplanW} className="h-[50px] object-contain sm:mb-0 mb-5" />
        </div>
        <p className="text-justify text-xs text-white font-thin sm:mb-0 mb-5">
          Este sitio web se ha realizado con la ayuda financiera de la Unión Europea. El contenido de éste es responsabilidad exclusiva del Instituto de Planeación y Gestión del Desarrollo del Área Metropolitana de Guadalajara (IMEPLAN) y bajo ninguna circunstancia debe considerarse que refleja la posición de la Unión Europea
        </p>
      </div>
      <div className="flex sm:space-x-2 space-x-5 px-5">
        {CM_ICONS_SN.map(i => <CmIconSN {...i} />)}
      </div>
    </div>
  );
}

