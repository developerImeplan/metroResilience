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
    <div className={`mt-5 sm:w-1/3 w-full ${margins ? 'sm:mx-3 mx-0' : ''}`}>
      <CmDropdown
        titleComponent={
          <div className="p-5 border-2 border-customGrayBg rounded-2xl hover:bg-customGreen hover:border-customGreen group">
            <p className="sm:text-2xl text-lg font-bold text-customGreen text-center group-hover:text-white">{ title }</p>
          </div>
        }
      >
        <div className="flex justify-center items-center mt-4 bg-customGrayBg p-5 border-2 border-customGrayBg rounded-2xl h-full group-hover:border-customGreen">
          <span className="font-thin sm:text-2xl text-md text-center text-customGrayDarker">
            { children }
          </span>
        </div>
      </CmDropdown>
    </div>
  )
}

const ERQueSonDropdownItems: DropdownItemProps[] = [
  {
    title: 'Visión',
    children: (
      <span>
        Consolidar los PVM como espacios clave para <CmBoldText>incentivar dinámicas comunitarias de economía circular en la metrópoli.</CmBoldText>
      </span>
    )
  },
  {
    title: 'Objetivo',
    children: (
      <span>
        <CmBoldText>Contribuir</CmBoldText> a la meta del PACmetro de reducir el 30% de los residuos que llegan a vertederos*. <CmBoldText>Fomentando una comunidad que reflexione sobre su consumo, reduzca y valorice los residuos.</CmBoldText>
      </span>
    ),
    margins: true
  },
  {
    title: 'Beneficios',
    children: (
      <span>
        <CmBoldText>Contar con espacios inclusivos y abiertos</CmBoldText>, promover prácticas comunitarias y  de economía circular, y permitir un fácil acceso al acopio de residuos para su máxima valorización.
      </span>
    )
  },
]