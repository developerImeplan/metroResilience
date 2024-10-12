import { assets } from "../../assets";
import { ERProsperarIconDescProps } from "../../types";

import { CmBoldText } from "../common";

export const ER_PROSPERAR_ICONS_DESC: ERProsperarIconDescProps[] = [
  {
    icon: assets.prosperarIcon1,
    children: (
      <span>
        <CmBoldText className="text-customBlueLighter">Es la primera a nivel mundial</CmBoldText><br /> en ser publicada en bajo un contexto comunitario y post pandémico.
      </span>
    )
  },
  {
    icon: assets.prosperarIcon2,
    children: (
      <span>
        <CmBoldText className="text-customBlueLighter">Es la primera en México</CmBoldText><br /> en abordar la dimensión y contexto metropolitano.
      </span>
    ),
    margins: true
  },
  {
    icon: assets.prosperarIcon3,
    children: (
      <span>
        <CmBoldText className="text-customBlueLighter">Es dinámica</CmBoldText><br /> por su actualización continua, un compromiso permanente.
      </span>
    )
  },
];