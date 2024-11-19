import { CmBoldText, CmDropdown } from "../common";
import { DropdownItemProps } from "../../types";

export const GPQueSeraDropdown = () => {
  return(
    <div className={`flex sm:flex-row flex-col w-full sm:mt-0 mt-5`}>
      { GP_QUE_SERA_DROPDOWN_ITEMS.map(i => (
        <DropdownItem {...i} />
      )) }
    </div>
  );
}

const DropdownItem = ({ title, children, margins }: DropdownItemProps) => {
  return (
    <div className={`mt-5 sm:w-1/3 w-full ${margins ? 'sm:mx-3 mx-0' : ''}`}>
      <CmDropdown
        titleComponent={
          <div className="p-5 bg-customPurpleGP rounded-2xl">
            <p className="sm:text-3xl text-lg font-bold text-white text-center">{ title }</p>
          </div>
        }
      >
        <div className="flex justify-center mt-[-15px] bg-customGrayBg p-5 pb-10 rounded-2xl h-full">
          <span className="font-thin sm:text-xl text-lg text-md text-justify text-customGrayDarker">
            { children }
          </span>
        </div>
      </CmDropdown>
    </div>
  )
}

const boldTextColor = "customPinkGP";

const GP_QUE_SERA_DROPDOWN_ITEMS: DropdownItemProps[] = [
  {
    title: 'Visión',
    children: (
      <span>
        <CmBoldText color={boldTextColor}>Construir entornos urbanos resilientes y sostenibles</CmBoldText> a escala metropolitana mediante mecanismos de gobernanza y acción internacional.
      </span>
    )
  },
  {
    title: 'Objetivo',
    children: (
      <span>
        <CmBoldText color={boldTextColor}>Presentar el modelo de referencia de resiliencia urbana metropolitana del AMG y AMB</CmBoldText> a partir de la experiencia en la acción Metrópoli Resiliente, con el fin de facilitar su adaptación en otras realidades.
      </span>
    ),
    margins: true
  },
  {
    title: 'Beneficios',
    children: (
      <span className="line-clamp-5 overflow-hidden hover:overflow-auto hover:line-clamp-none transition-all" style={{ maxHeight: `${5 * 1.8}rem` }}>
        Está centrada en compartir las lecciones aprendidas, así como las mejores prácticas desarrolladas en el marco del proyecto Metro Resilience Guadalajara, en virtud de <CmBoldText color={boldTextColor}>fomentar la colaboración metrópoli-metrópoli alrededor del mundo.</CmBoldText> Es única en su tipo, pues combina la experiencia de dos metrópolis líderes en resiliencia, ofreciendo una perspectiva global y comparativa.

      </span>
    )
  },
]