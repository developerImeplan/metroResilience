import { CmDropdown } from "../common";
import { DropdownItemProps } from "../../types";

export const GPAprendizajesDropdown = () => {
  return(
    <div className={`flex sm:flex-row flex-col w-full sm:mt-5 mt-5`}>
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
        <div className="flex justify-center items-center mt-[-14px] px-5 py-10 border bg-white rounded-2xl h-full">
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
    title: 'Información clave',
    children: (
      <span>
        Para complementar el conocimiento generado entre ambas metrópolis, la Guía se apoyó de una revisión bibliográfica, análisis documental y  compilación de referencias internacionales. 
      </span>
    )
  },
  {
    title: 'Congreso Internacional de Resiliencia Metropolitana',
    children: (
      <span>
        Un espacio clave para analizar los retos urbanos y explorar cómo la resiliencia puede afrontarlos mediante el intercambio de ideas y conocimientos entre distintos contextos. Además, se incluyeron entrevistas a personas expertas, cuyas recomendaciones y experiencias enriquecieron el análisis.
      </span>
    ),
  },
]