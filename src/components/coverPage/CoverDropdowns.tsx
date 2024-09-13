import { CoverDropdownProps } from "../../types";
import { CmBoldText } from "../common";
import { CoverDropdownContent } from "./CoverDropdown/CoverDropdownContent";

export const COVER_DROPDOWNS: CoverDropdownProps[] = [
  {
    content: (
      <span key="vision">
        <CmBoldText>Buscamos impulsar la resiliencia territorial y comunitaria</CmBoldText>, desarrollando mejores prácticas para el manejo de residuos sólidos y la gobernanza metropolitana, para responder, adaptarnos y superar desafíos urbanos actuales o futuros.
      </span>
    ),
    extraStyles: 'sm:mb-0 mb-5',
    title: 'Visión',
    width: '1/2',
    marginR: '4',
  },
  {
    content: (
      <span key="beneficios">
        <CmBoldText>Aprender buenas prácticas internacionales para  evolucionar nuestros sistemas urbanos</CmBoldText> basándonos en el contexto metropolitano, así como aplicar los conocimientos para mejorar la Resiliencia en las metrópolis a través de la gobernanza metropolitana.
      </span>
    ),
    title: 'Beneficios',
    width: '1/2',
    marginL: '4',
  },
  {
    content: (
      <span key="objetivoGeneral">
        <CmBoldText>Fortalecer la gobernanza supramunicipal del Área Metropolitana de Guadalajara</CmBoldText>, en materia de resiliencia urbana y gestión de residuos para identificar, anticipar y mitigar los riesgos y vulnerabilidades que afectan a quienes viven y se desplazan en su territorio, en línea con el Pacto Verde de la UE y la Agenda 2030 Para alcanzar esta meta, la Acción se desplegará <span className="font-bold">a través de tres objetivos específicos complementarios:</span>
      </span>
    ),
    title: 'Objetivo general',
  },
  {
    content: (
      <div>
        <div className="flex sm:flex-row flex-col">
          <div className="sm:w-1/2 w-full mr-4">
            <CoverDropdownContent>
              <span>
                <CmBoldText>Mejorar las políticas públicas</CmBoldText> en materia de resiliencia urbana, <CmBoldText>así como la legislación y el compromiso local</CmBoldText> para anticipar y mitigar los choques agudos o las tensiones crónicas, contribuyendo a una recuperación verde post COVID 19.
              </span>,
            </CoverDropdownContent>
          </div>
          <div className="sm:w-1/2 w-full sm:ml-4">
            <CoverDropdownContent>
              <span>
                <CmBoldText>Reforzar la asociación entre el Imeplan y el AMB</CmBoldText>; aumentar su participación en los foros locales, regionales e internacionales y en las redes mundiales de ciudades sobre resiliencia urbana.
              </span>,
            </CoverDropdownContent>
          </div>
        </div>
        <div className="sm:pt-5">
          <CoverDropdownContent>
            <span className="sm:flex justify-center">
              <CmBoldText className="mr-1">Aumentar</CmBoldText>las toneladas de residuos para su valorización.
            </span>
          </CoverDropdownContent>
        </div>
      </div>
    ),
    title: 'Objetivos específicos',
    specialContent: true
  },
];