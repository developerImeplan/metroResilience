import { CmBoldText } from "../common";
import { CoverDropdownProps } from "../../types";

const boldColor = "customPinkN";
const numberStyles = `font-black mr-5 text-5xl text-${boldColor}`;

export const COVER_DROPDOWNS: CoverDropdownProps[] = [
  {
    headerBg: '[#89b4c6]',
    content: (
      <span key="vision">
        <CmBoldText color="[#89b4c6]">Buscamos impulsar la resiliencia territorial y comunitaria</CmBoldText>, desarrollando mejores prácticas, en la gestión integral de residuos sólidos y la gobernanza metropolitana, para responder, adaptarnos y superar desafíos urbanos actuales o futuros.
      </span>
    ),
    title: 'Visión',
  },
  {
    headerBg: '[#424778]',
    content: (
      <span key="beneficios">
        Aprender de prácticas internacionales que inspiren nuestro sistema metropolitano. Así como compartir conocimientos para fortalecer la resiliencia y la gobernanza en los territorios metropolitanos.
      </span>
    ),
    title: 'Beneficios',
  },
  {
    headerBg: 'customPinkN',
    content: (
      <>
        <span key="objetivoGeneral">
          <CmBoldText color="customPinkN">Fortalecer la gobernanza supramunicipal del Área Metropolitana de Guadalajara</CmBoldText>, en materia de resiliencia urbana y gestión de residuos para identificar, anticipar y mitigar los riesgos y vulnerabilidades que afectan a quienes viven y se desplazan en su territorio, en línea con el Pacto Verde de la UE y la Agenda 2030. Para alcanzar esta meta, la Acción se desplegará <CmBoldText color="customPinkN">a través de tres objetivos específicos:</CmBoldText>
        </span>
        <div className="mt-10">
          <div className="flex">
            <div className={numberStyles}>
              1
            </div>
            <div>
              <CmBoldText color={boldColor}>Mejorar las políticas públicas</CmBoldText> en materia de resiliencia urbana, <CmBoldText color={boldColor}>así como la legislación y el compromiso local</CmBoldText> para anticipar y mitigar los choques agudos o las tensiones crónicas, contribuyendo a una recuperación verde post COVID 19.
            </div>
          </div>
          <div className="flex">
            <div className={numberStyles}>
              2
            </div>
            <div>
              <CmBoldText color={boldColor}>Reforzar la asociación entre el Imeplan y el AMB</CmBoldText>; aumentar su participación en los foros locales, regionales e internacionales y en las redes mundiales de ciudades sobre resiliencia urbana.
            </div>
          </div>
          <div className="flex items-center">
            <div className={numberStyles}>3</div>
            <div>
              <CmBoldText color={boldColor} className="mr-1">Aumentar</CmBoldText> las toneladas de residuos para su valorización a través de la implementación y habilitación de 9 Puntos Verdes Metropolitanos, con potencial de réplica en los municipios que componen la metrópoli.
            </div>
          </div>
        </div>
      </>
    ),
    title: 'Objetivos',
  },
];