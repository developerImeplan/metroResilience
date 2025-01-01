import { DropdownItemProps } from "../../types";
import { CmBoldText, CmDropdown } from "../common";

export const GPEstructuraDropdown = () => {
  return(
    <div className="flex flex-wrap gap-5">
      {
        ESTRUCTURA_DROPDOWN_ITEMS.map(i => (<Item {...i} />))
      }
    </div>
  );
}

const Item = ({ title, children }: DropdownItemProps) => {
  return(
    <div className="sm:w-[calc(50%-10px)] w-full">
      <CmDropdown
        titleComponent={
          <div className="flex justify-center py-5 rounded-2xl bg-[#997bb5] group">
            <p className="sm:text-3xl text-xl font-bold text-white text-center">{ title }</p>
          </div>
        }
      >
        <div className="flex justify-center mt-[-18px] bg-[#f7f7f7] sm:p-10 p-5 rounded-2xl h-full">
          <span className="font-thin sm:text-xl text-lg text-justify text-[#7f8790]">
            { children }
          </span>
        </div>
      </CmDropdown>
    </div>
  )
}

const ESTRUCTURA_DROPDOWN_ITEMS: DropdownItemProps[] = [
  {
    title: "Metrópolis Resilientes: características y desafíos",
    children: (
      <span>
        Presenta un <CmBoldText>panorama global sobre los desafíos</CmBoldText> que enfrentan las áreas metropolitanas y contextualiza a las áreas metropolitanas de Guadalajara y Barcelona dentro de sus regiones. Además, se analizan los <CmBoldText>impactos y  tensiones comunes.</CmBoldText>
      </span>
    )
  },
  {
    title: "Modelos de gobernanza y resiliencia en entornos metropolitanos",
    children: (
      <span>
        Aborda la <CmBoldText>resiliencia</CmBoldText> como una <CmBoldText>herramienta para fortalecer capacidades</CmBoldText> en personas, comunidades e instituciones y resalta la <CmBoldText>importancia de modelos de gobernanza</CmBoldText> que articulen a múltiples actores, desde gobiernos locales hasta sociedad civil y sector privado, <CmBoldText>promoviendo una planeación estratégica y coordinada.</CmBoldText>
      </span>
    )
  },
  {
    title: "Referentes de Resiliencia: inspiración metropolitana",
    children: (
      <span>
        Recopila <CmBoldText>siete casos</CmBoldText> inspiradores de <CmBoldText>acciones resilientes</CmBoldText> a nivel internacional para analizar y compartir experiencias existentes. Incluye ejemplos como los <CmBoldText>Puntos Verdes Metropolitanos</CmBoldText> del AMG, la <CmBoldText>regeneración del río Llobregat</CmBoldText> en Barcelona, las <CmBoldText>estrategias para abordar la crisis hídrica</CmBoldText> en Ciudad del Cabo, Sudáfrica, y <CmBoldText>programas con perspectiva de género,</CmBoldText> como <CmBoldText>Mujer Salvador</CmBoldText> en Brasil.
      </span>
    )
  },
  {
    title: "Lecciones aprendidas desde el ámbito metropolitano",
    children: (
      <span>
        Sintetiza los <CmBoldText>aprendizajes</CmBoldText> obtenidos durante la <CmBoldText>Acción MRG</CmBoldText> y el análisis de las mejores prácticas globales. Este segmento <CmBoldText>destaca elementos clave para replicar estrategias resilientes</CmBoldText> en otros contextos y <CmBoldText>ofrece recomendaciones</CmBoldText> para avanzar hacia territorios metropolitanos más sostenibles y preparados ante futuros desafíos.
      </span>
    )
  },
]