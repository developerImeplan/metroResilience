import { ERProsperarIconDescProps } from "../../types";

import prosperarIcon1 from "../../assets/ER_prosperar_icon1.png";
import prosperarIcon2 from "../../assets/ER_prosperar_icon2.png";
import prosperarIcon3 from "../../assets/ER_prosperar_icon3.png";
import { CmBoldText } from "../common";

export const ER_PROSPERAR_ICONS_DESC: ERProsperarIconDescProps[] = [
  {
    icon: prosperarIcon1,
    children: (
      <span>
        <CmBoldText className="text-customBlueLighter">Es la primera a nivel mundial</CmBoldText> en ser publicada en bajo un contexto comunitario y post pandémico.
      </span>
    )
  },
  {
    icon: prosperarIcon2,
    children: (
      <span>
        <CmBoldText className="text-customBlueLighter">Es la primera en México</CmBoldText> en abordar la dimensión y contexto metropolitano.
      </span>
    ),
    margins: true
  },
  {
    icon: prosperarIcon3,
    children: (
      <span>
        <CmBoldText className="text-customBlueLighter">Es dinámica</CmBoldText> por su actualización continua, un compromiso permanente.
      </span>
    )
  },
];