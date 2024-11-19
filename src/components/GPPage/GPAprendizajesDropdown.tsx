import { CmDropdown } from "../common";
import { DropdownItemProps } from "../../types";

export const GPAprendizajesDropdown = () => {
  return(
    <div className={`flex sm:flex-row flex-col w-full sm:mt-0 mt-5`}>
      { GP_APRENDIZAJES_DROPDOWN_ITEMS.map((i, index) => (
        <DropdownItem {...i} index={index} />
      )) }
    </div>
  );
}

const DropdownItem = ({ title, children, index }: DropdownItemProps & {
  index: number
}) => {
  return (
    <div className={`mt-5 sm:w-1/2 w-full ${index === 0 ? 'sm:mr-3 mr-0' : 'sm:ml-3 ml-0'}`}>
      <CmDropdown
        titleComponent={
          <div className="p-5 rounded-2xl bg-customPurpleGP h-[110px] flex items-center justify-center">
            <p className="sm:text-3xl text-xl font-bold text-center text-white">{ title }</p>
          </div>
        }
      >
        <div className="flex justify-center items-center mt-[-14px] px-5 py-10 border bg-customGrayBg rounded-2xl h-full">
          <span className="font-thin sm:text-xl text-lg text-md text-justify text-customGrayDarker">
            { children }
          </span>
        </div>
      </CmDropdown>
    </div>
  )
}

const GP_APRENDIZAJES_DROPDOWN_ITEMS: DropdownItemProps[] = [
  {
    title: 'Entrevistas con actores clave',
    children: (
      <span>
        Entrevistamos a personas expertas en temas de gobernanza metropolitana y consultamos instrumentos actuales sobre resiliencia urbana y acción internacional. 
      </span>
    )
  },
  {
    title: 'Congreso Internacional de Resiliencia Metropolitana',
    children: (
      <span>
        Fue el espacio para abordar los retos urbanos que la resiliencia puede abordar a partir del intercambio de ideas y conocimientos entre diversos contextos.
      </span>
    ),
  },
]