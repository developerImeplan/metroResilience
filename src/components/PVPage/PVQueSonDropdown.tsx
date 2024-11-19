import { CmBoldText, CmDropdown } from "../common";
import { DropdownItemProps } from "../../types";

export const PVQueSonDropdown = () => {
  return(
    <div className={`flex sm:flex-row flex-col w-full sm:mt-0 mt-5`}>
      { ERQueSonDropdownItems.map(i => (
        <DropdownItem {...i} />
      )) }
    </div>
  );
}

const DropdownItem = ({ title, children, margins }: DropdownItemProps) => {
  return (
    <div id="vision-objetivos" className={`mt-5 sm:w-1/3 w-full ${margins ? 'sm:mx-3 mx-0' : ''}`}>
      <CmDropdown
        titleComponent={
          <div className="p-5 rounded-2xl bg-customGreenN2">
            <p className="sm:text-3xl text-lg font-bold text-white text-center">{ title }</p>
          </div>
        }
      >
        <div className="flex justify-center mt-[-25px] bg-customGrayBg p-10 rounded-2xl h-full">
          <span className="font-thin sm:text-2xl text-md text-justify text-customGrayDarker">
            { children }
          </span>
        </div>
      </CmDropdown>
    </div>
  )
}

const boldTextColor = "customGreenN2";

const ERQueSonDropdownItems: DropdownItemProps[] = [
  {
    title: 'Visión',
    children: (
      <span>
        Consolidar los Puntos Verdes Metropolitanos (PVM) como espacios clave para <CmBoldText color={boldTextColor}>incentivar dinámicas comunitarias de economía circular en la metrópoli.</CmBoldText>
      </span>
    )
  },
  {
    title: 'Objetivo',
    children: (
      <span>
        <CmBoldText color={boldTextColor}>Contribuir</CmBoldText> a la meta del PACmetro de reducir el 30% de los residuos que llegan a vertederos*. <CmBoldText color={boldTextColor}>Al fomentar una comunidad que reflexione sobre su consumo, reduzca y valorice los residuos.</CmBoldText>
      </span>
    ),
    margins: true
  },
  {
    title: 'Beneficios',
    children: (
      <span>
        <CmBoldText color={boldTextColor}>Contar con espacios inclusivos y abiertos</CmBoldText>, que promuevan prácticas comunitarias y  de economía circular, además de permitir un fácil acceso al acopio de residuos para su máxima valorización.
      </span>
    )
  },
]