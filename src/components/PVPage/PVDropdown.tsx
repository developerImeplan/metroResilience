import { CmBoldText, CmDropdown } from "../common";
import { DropdownItemProps } from "../../types";

export const PVDropdown = () => {
  return(
    <div className={`flex sm:flex-row flex-col w-full sm:mt-0 mt-5`}>
      { PV_DROPDOWN_ITEMS.map(i => (
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
          <div className="p-5 bg-customPinkN rounded-2xl ">
            <p className="sm:text-2xl text-lg font-bold text-white text-center">{ title }</p>
          </div>
        }
      >
        <div className="flex justify-center mt-[-10px] bg-white p-5 rounded-2xl h-full">
          <span className="font-thin sm:text-2xl text-md text-justify text-customGrayDarker">
            { children }
          </span>
        </div>
      </CmDropdown>
    </div>
  )
}

const boldTextColor = "customGreenN";

const PV_DROPDOWN_ITEMS: DropdownItemProps[] = [
  {
    title: '¿Por qué es importante dejar de generar residuos?',
    children: (
      <span>
        Por nuestra salud, del ecosistema y la calidad del aire. <CmBoldText color={boldTextColor}>18% de las emisiones contaminantes en el AMG son generadas por residuos.</CmBoldText>
      </span>
    )
  },
  {
    title: '¿Qué tipo de residuos puedo llevar?',
    children: (
      <span className="flex flex-col">
        <span className="mb-5">
          Valorizables como plástico, PET, papel, cartón, vidrio y metales que estén limpios y sin etiquetas.
        </span>
        <a
          className="font-bold text-customPinkN text-center"
          href="#"
        >Consulta la guía paso a paso</a>
      </span>
    ),
    margins: true
  },
  {
    title: '¿Cómo nos benefician a nivel metropolitano?',
    children: (
      <span>
        <CmBoldText color={boldTextColor}>Ayudan a reducir la cantidad de residuos que llegan a los sitios de disposición final.</CmBoldText> Disminuir las emisiones de CO2eq, la contaminación de suelos y cuerpos de agua debido a la infiltración de lixiviados. Nos acerca a una visión de economía circular.
      </span>
    )
  },
]