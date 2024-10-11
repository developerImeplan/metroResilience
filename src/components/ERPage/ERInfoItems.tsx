import { ERInfoItemProps } from "../../types";
import { CmBoldText } from "../common";

const BOLD_TEXT_COLOR = "customSkyBlue";

export const ERP_INFO_ITEMS: ERInfoItemProps[] = [
  {
    title: 'Visión',
    children: (
      <span>
        Una metrópoli resiliente donde <CmBoldText color={BOLD_TEXT_COLOR}>la comunidad es la impulsora del cambio</CmBoldText> y la equidad es el principio rector que orienta acciones, políticas y proyectos.
      </span>
    )
  },
  {
    title: 'Objetivo',
    children: (
      <span>
        <CmBoldText color={BOLD_TEXT_COLOR}>Consolidar mecanismos de gobernanza</CmBoldText> que permitan identificar, anticipar y mitigar riesgos en el territorio.
      </span>
    ),
    margins: true
  },
  {
    title: 'Beneficios',
    children: (
      <span>
        <CmBoldText color={BOLD_TEXT_COLOR}>Gestionar de forma óptima nuestro territorio, los riesgos y recursos hídricos;</CmBoldText> potenciar la movilidad eficiente y la provisión de servicios públicos.
      </span>
    )
  },
];