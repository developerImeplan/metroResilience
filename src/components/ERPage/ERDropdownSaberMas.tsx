import { CmBoldText, CmDropdown } from "../common";
import { DropdownItemProps } from "../../types";

export const ERDropdownSaberMas = () => {
  return(
    <div className={`flex sm:flex-row flex-col w-full sm:mt-0 mt-5`}>
      { ERDropdownSaberMasItems.map(i => (
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
          <div className="p-5 border-2 border-customBlueLighter rounded-2xl hover:bg-customBlueLighter group">
            <p className="sm:text-2xl text-lg font-bold text-customBlueLighter text-center group-hover:text-white">{ title }</p>
          </div>
        }
      >
        <div className="flex justify-center items-center mt-4 bg-customGrayBg p-5 border-2 border-customBlueLighter rounded-2xl h-full">
          <span className="font-thin sm:text-2xl text-md text-center text-customGrayDarker">
            { children }
          </span>
        </div>
      </CmDropdown>
    </div>
  )
}

const ERDropdownSaberMasItems: DropdownItemProps[] = [
  {
    title: '¿Por qué es importante pensar en la resiliencia?',
    children: (
      <span>
        Los impactos repentinos o tensiones crónicas pueden llevar a la ruptura social, al colapso físico o al deterioro económico.
      </span>
    )
  },
  {
    title: '¿Cómo se ve una acción de resiliencia?',
    children: (
      <span className="flex flex-col">
        <span className="mb-5">
          En forma de programa como Nidos de Lluvia o de proyecto comunitario como los Puntos Verdes Metropolitanos.
        </span>
        <a
          className="font-bold" 
          href="https://youtu.be/8Xg3mfdRJYk?si=5dbile9frvQHYPnl&t=180"
        >¡Quiero conocer un Nido de Lluvia!</a>
      </span>
    ),
    margins: true
  },
  {
    title: '¿Cómo puedo aprender más de resiliencia?',
    children: (
      <span className="flex flex-col">
        <span className="mb-5">
          Participando en la <CmBoldText>Escuela de Resiliencia</CmBoldText>, donde podrás aprender los principales conceptos e interpretar procesos de planeación para la resiliencia urbana.
        </span>
        <a 
          href="#"
          className="font-bold"
        >
          ¡Quiero inscribirme!
        </a>
      </span>
    )
  },
]