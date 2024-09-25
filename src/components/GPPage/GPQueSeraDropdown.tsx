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
          <div className="p-5 border-2 border-customPurpleGP rounded-2xl hover:bg-customPurpleGP group">
            <p className="sm:text-2xl text-lg font-bold text-customPurpleGP text-center group-hover:text-white">{ title }</p>
          </div>
        }
      >
        <div className="flex justify-center items-center mt-4 bg-customGrayBg p-5 border-2 border-customPurpleGP rounded-2xl h-full">
          <span className="font-thin sm:text-xl text-lg text-md text-justify text-customGrayDarker">
            { children }
          </span>
        </div>
      </CmDropdown>
    </div>
  )
}

const GP_QUE_SERA_DROPDOWN_ITEMS: DropdownItemProps[] = [
  {
    title: 'Visión',
    children: (
      <span>
        <CmBoldText>Construir entornos urbanos resilientes y sostenibles</CmBoldText> a escala metropolitana mediante mecanismos de gobernanza y acción internacional.
      </span>
    )
  },
  {
    title: 'Objetivo',
    children: (
      <span>
        <CmBoldText>Presentar el modelo de referencia de resiliencia urbana metropolitana del AMG y AMB</CmBoldText> a partir de la experiencia en la acción Metrópoli Resiliente, con el fin de facilitar su adaptación en otras realidades.
      </span>
    ),
    margins: true
  },
  {
    title: 'Beneficios',
    children: (
      <span>
        <CmBoldText>1. Fortalecer las capacidades en materia de resiliencia urbana</CmBoldText>, gobernanza metropolitana a partir de la experiencia del AMG y el AMB.<br/>
        <CmBoldText>2. Contar con un punto de partida</CmBoldText> para la adaptación de la resiliencia urbana en entornos metropolitanos.<br/>
        <CmBoldText>3. Explorar la acción internacional como herramienta clave</CmBoldText> para el fortalecimiento de la gobernanza metropolitana y la resiliencia urbana.
      </span>
    )
  },
]