import { CmBoldText, CmDropdown } from "../common";
import { DropdownItemProps } from "../../types";

export const GPQueSeraDropdown = () => {
  return(
    <div className={`flex sm:flex-row flex-col w-full sm:mt-0 mt-5 sm:space-x-5`}>
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
          <div className="p-5 bg-[#aaa3cc] rounded-2xl">
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

const boldTextColor = "[#aaa3cc]";

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
      <span>
        Fomenta la <CmBoldText color={boldTextColor}>colaboración global entre metrópolis</CmBoldText> para fortalecer la resiliencia metropolitana mediante la <CmBoldText color={boldTextColor}>articulación de esfuerzos y la transferencia de conocimientos.</CmBoldText>
      </span>
    )
  },
]