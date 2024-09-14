import { ERInfoItemProps } from "../../types";
import { CmBoldText } from "../common";

export const ERP_INFO_ITEMS: ERInfoItemProps[] = [
  {
    title: 'Visión',
    children: (
      <span>
        Una metrópoli resiliente donde <CmBoldText>la comunidad es la impulsora del cambio</CmBoldText> y la equidad es el principio rector que orienta acciones, políticas y proyectos.
      </span>
    )
  },
  {
    title: 'Objetivo',
    children: (
      <span>
        <CmBoldText>Consolidar mecanismos de gobernanza</CmBoldText> que permitan identificar, anticipar y mitigar riesgos en el territorio.
      </span>
    ),
    margins: true
  },
  {
    title: 'Beneficios',
    children: (
      <span>
        <CmBoldText>Gestionar de forma óptima nuestro territorio, los riesgos y recursos hídricos;</CmBoldText> potenciar la movilidad eficiente y la provisión de servicios públicos.
      </span>
    )
  },
];