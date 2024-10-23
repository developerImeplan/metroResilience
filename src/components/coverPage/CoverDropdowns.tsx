import { CmBoldText } from "../common";
import { CoverDropdownProps } from "../../types";

const boldColor = "customGreenN";
const numberStyles = `font-black mr-5 text-5xl text-${boldColor}`;

export const COVER_DROPDOWNS: CoverDropdownProps[] = [
  {
    headerBg: '[#89b4c6]',
    content: (
      <span key="vision">
        <CmBoldText color="[#89b4c6]">Buscamos impulsar la resiliencia territorial y comunitaria</CmBoldText>, desarrollando mejores prácticas para el manejo de residuos sólidos y la gobernanza metropolitana, para responder, adaptarnos y superar desafíos urbanos actuales o futuros.
      </span>
    ),
    title: 'Visión',
  },
  {
    headerBg: '[#424778]',
    content: (
      <span key="beneficios">
        <CmBoldText color="[#424778]">Aprender buenas prácticas internacionales para  evolucionar nuestros sistemas urbanos</CmBoldText> basándonos en el contexto metropolitano, así como aplicar los conocimientos para mejorar la Resiliencia en las metrópolis a través de la gobernanza metropolitana.
      </span>
    ),
    title: 'Beneficios',
  },
  {
    headerBg: 'customPinkN',
    content: (
      <span key="objetivoGeneral">
        <CmBoldText color="customPinkN">Fortalecer la gobernanza supramunicipal del Área Metropolitana de Guadalajara</CmBoldText>, en materia de resiliencia urbana y gestión de residuos para identificar, anticipar y mitigar los riesgos y vulnerabilidades que afectan a quienes viven y se desplazan en su territorio, en línea con el Pacto Verde de la UE y la Agenda 2030. Para alcanzar esta meta, la Acción se desplegará <CmBoldText color="customPinkN">a través de tres objetivos específicos complementarios.</CmBoldText>
      </span>
    ),
    title: 'Objetivo general',
  },
  {
    headerBg: 'customGreenN',
    content: (
      <div>
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
            <CmBoldText color={boldColor} className="mr-1">Aumentar</CmBoldText>las toneladas de residuos para su valorización.
          </div>
        </div>
      </div>
    ),
    title: 'Objetivos específicos',
  },
];