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
          <div className="p-5 bg-customBlueLighterN rounded-2xl group">
            <p className="sm:text-2xl text-lg font-bold text-center text-white">{ title }</p>
          </div>
        }
      >
        <div className="flex justify-center mt-[-15px] bg-white p-5 rounded-2xl h-full py-10">
          <span className="font-thin sm:text-2xl text-md text-justify text-customGrayDarker">
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
        Los impactos repentinos o tensiones crónicas pueden llevar a la ruptura social, al colapso físico o al deterioro económico y ambiental.
      </span>
    )
  },
  {
    title: '¿Cómo se ve una acción de resiliencia?',
    children: (
      <span className="flex flex-col">
        <span className="mb-5">
          En forma de política pública o normativa, como el programa <CmBoldText className="text-[#207fdd]">Nidos de Lluvia,</CmBoldText> o de proyecto comunitario como los <CmBoldText className="text-[#47ae79]">Puntos Verdes Metropolitanos</CmBoldText>
        </span>
        <a
          className="font-bold mt-10 text-[#5f93a5] text-center" 
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
          Participando en la <CmBoldText className="text-[#9972af]">Escuela de Resiliencia</CmBoldText>, donde podrás aprender los principales conceptos e interpretar procesos de planeación para la resiliencia urbana.
        </span>
        <a 
          href="https://resilientcitiesnetwork.aulasneo.link/courses/course-v1:R-Cities+R-Cities_01+2024_2/about"
          className="font-bold text-[#5f93a5] text-center"
        >
          ¡Quiero inscribirme!
        </a>
      </span>
    )
  },
]