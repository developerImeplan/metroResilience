import { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { BsChevronDoubleDown } from "react-icons/bs";

import { assets } from "../../assets";
import { ER_COUNTS_AND_DESCRIPTIONS, ER_COVER_LOGOS, ER_IMAGES_CARROUSEL, ER_QUE_ES_ICONS } from "../../constants";
import { CmBanner, CmBoldText, CmCoverVideo, CmImage, CmImageCarousel, CmQuote } from "../common";

import { ERInfoItem } from "./ERInfoItem";
import { ERP_INFO_ITEMS } from "./ERInfoItems";
import { ERCountItem } from "./ERCountItem";
import { ERCountAndDescription } from "./ERCountAndDescription";
import { ER_PROSPERAR_ICONS_DESC } from "./ERProsperarIconDescs";
import { ERQuotes } from "./ERQuotes";
import { 
  ERAdaptarseIconsText,
  ERCountItems,
  ERDowload,
  ERDowloads,
  ERDropdownSaberMas,
  ERProsperarIconDesc,
  ERPills,
  ERQueEsIcon
} from "./";

import responderLogos from "../../assets/responder_logos.png";

export const ERPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return(
    <>
      <CmCoverVideo
        footerContent={
          <div className="flex justify-end">
            { ER_COVER_LOGOS.map(i => (<CmImage src={i} className="sm:w-1/4 w-1/3 sm:h-[60px] h-[30px] sm:ml-20 sm:mr-5 mx-3" />)) }
          </div>
        }
        img={assets.erm}
        title="Estrategia de Resiliencia Metropolitana"
      />
      <section id="que-es" className="container mx-auto px-4 pt-10 sm:pb-10 pb-0">
        <div className="flex flex-col items-center">
          <div className="flex sm:space-x-4 space-x-2">
            <CmImage src={assets.erLogo} className="sm:h-[40px] h-[30px]" />
            <p className="text-customMain sm:text-4xl text-2xl font-bold">¿Qué es?</p>
            <CmImage src={assets.erLogo} className="sm:h-[40px] h-[30px]" />
          </div>
          <span className="p-5 font-thin sm:text-2xl text-lg text-center">
            <CmBoldText color="customBlueLighter">La Estrategia reúne conocimientos técnicos, comunitarios y académicos</CmBoldText> donde se identifican los principales impactos agudos y tensiones crónicas que afectan a las personas que habitan el Área Metropolitana de Guadalajara (AMG), como:
          </span>
          <div className="flex justify-center w-full sm:space-x-40 sm:py-10">
            { ER_QUE_ES_ICONS.map(i => (<ERQueEsIcon {...i} />))}
          </div>
          <span className="p-5 font-thin sm:text-2xl text-lg text-center">
            El AMG desarrolló la ERM con el fin  de  anticipar y mitigar estos fenómenos, reforzando la corresponsabilidad comunitaria e institucionalizando la resiliencia. Para poder lograrlo, se han planteado <CmBoldText color="customBlueLighter">acciones para responder, adaptar y prosperar</CmBoldText> ante los desafíos urbanos.
          </span>
        </div>
      </section>
      <section id="vision-objetivo" className="container mx-auto px-4 sm:pb-5 pb-0">
        <div className="flex sm:flex-row flex-col">
          {
            ERP_INFO_ITEMS.map((i, index) => (
              <ERInfoItem key={index} {...i} />
            ))
          }
        </div>
        <div className="py-10">
          <CmBanner text="Responder" icon={assets.erLogo} />
          <div className="flex sm:flex-row flex-col sm:items-center  justify-center py-10">
            <span className="sm:text-3xl font-thin sm:pr-20 pr-0 sm:w-1/2 w-full sm:text-start text-center">
              A lo largo de estos años, <CmBoldText color="customMain">la metrópoli se ha preparado a través de sus instrumentos de planeación y gestión, para responder ante diferentes impactos y tensiones</CmBoldText> que vulneran al territorio.
            </span>
            <div className="bg-customPurple sm:ml-3 ml-0 sm:mt-0 mt-5 sm:w-1/2 w-full sm:p-20 p-10 flex justify-center rounded-3xl">
              <CmImage src={responderLogos} className="w-full" />
            </div>
          </div>
          <p className="sm:text-3xl font-thin text-center">
            <CmBoldText color="customBlueLighter">Sumando la participación de 2 mil personas</CmBoldText> de la sociedad civil, academia y sector público, y bajo la colaboración del actor internacional líder en la materia, Resilient Cities Network <CmBoldText color="customBlueLighter">se generó un Diagnóstico de Resiliencia</CmBoldText>  a través de: 
          </p>
          <div className="flex justify-center sm:flex-row flex-col sm:p-10 p-5">
            {
              ERCountItems.map(i => (
                <ERCountItem {...i} />
              ))
            }
          </div>
        </div>
      </section>
      <section id="responder" className="container mx-auto px-4">
        <CmImageCarousel images={ER_IMAGES_CARROUSEL} />
        <div className="flex flex-col items-center text-xl mt-10 mb-5 p-5 bg-customGrayBg font-thin text-center">
          <p>Consulta las fotografías de estas actividades en</p>
          <a 
            className="text-customBlueLighter underline sm:text-xl text-xs"
            href="https://www.flickr.com/photos/158129946@N05/albums"
          >https://www.flickr.com/photos/158129946@N05/albums
          </a>
        </div>
        <div className="flex sm:flex-row flex-col">
          <div>
            <p className="text-2xl text-customBlueLighter font-bold text-center mb-5">A partir de estos ejercicios fueron identificados</p>
            <div className="flex sm:flex-row flex-col">
              { ER_COUNTS_AND_DESCRIPTIONS.map(i => (
                <ERCountAndDescription {...i} />
              )) }
            </div>
          </div>
          <div className="sm:ml-5 ml-0 sm:w-1/2 w-full sm:mt-0 mt-5">
            <CmImage src={assets.erLibro} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <section id="adaptarse" className="container mx-auto px-4 mt-10">
        <CmBanner text="Adaptarse" icon={assets.erLogo} />
        <div className="mt-5 w-full flex sm:flex-row flex-col sm:justify-between">
          <CmImage src={assets.erLibro2} className="sm:w-1/3 w-full sm:mr-5 mr-0" />
          <div className="flex flex-col justify-between sm:w-2/3 w-full">
            <p className="text-center font-bold sm:text-3xl text-customMain">Con estos resultados, se trabajó bajo
            cuatro principales desafíos metropolitanos
            </p>
            <ERAdaptarseIconsText />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center sm:mt-10">
          <div className="flex flex-col font-thin text-customGrayDarker sm:text-2xl text-xl sm:mb-0 mb-5">
            <div className="flex justify-center mb-5">
              <p className="sm:text-3xl text-xl text-customBlueLighter font-bold text-center">y dos importantes alcances:</p>
            </div>
            <span className="mb-5">
              - <CmBoldText>Las ciudades se apoyan en una compleja red</CmBoldText> de personas, instituciones, infraestructura e información.
            </span>
            <span>
            - <CmBoldText>Su resiliencia depende de fortalecer las capacidades de los sistemas</CmBoldText> individuales para fortalecer la ciudad en general.
            </span>
          </div>
          <CmImage src={assets.erTaller} className="sm:w-1/3" />
        </div>
        <div className="flex flex-col items-center mt-10">
          <span className="sm:text-3xl text-xl font-thin mb-5">En suma, la <CmBoldText color="customBlueLighter">Estrategia de Resiliencia</CmBoldText> se integra por</span>
          <ERPills />
        </div>
      </section>
      <section id="prosperar" className="container mx-auto px-4 mt-10">
        <CmBanner text="Prosperar" />
        <div className="py-10 w-full flex justify-center">
          <span className="sm:text-3xl text-center font-thin">
            <CmBoldText className="text-customBlueLighter">La Estrategia es un legado comunitario</CmBoldText> que marca un precedente a escala nacional e internacional.
          </span>
        </div>
        <div className="flex sm:flex-row flex-col">
            {
              ER_PROSPERAR_ICONS_DESC.map((i, index) => (
                <ERProsperarIconDesc key={index} {...i} />
              ))
            }
        </div>
        <div className="mt-5 flex sm:flex-row flex-col w-full sm:h-[75vh] h-screen">
          <iframe
            allow="autoplay"
            className="sm:w-3/4 w-full sm:h-auto h-full"
            src="https://drive.google.com/file/d/1CT_tonWNwwZ4k9vJn5bAltZZX72F_ls0/preview"
          />
          <iframe 
            allow="autoplay" 
            className="sm:w-1/4 w-full sm:ml-5 ml-0 sm:mt-0 mt-5 sm:h-auto h-full"
            src="https://drive.google.com/file/d/1a2sb0s43OlT7pbvLFyZM8woIufqtFs4g/preview" 
          />
        </div>
      </section>
      <section className="container mx-auto px-4 mt-10">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-customMain mb-5 text-center">En la voz de nuestra comunidad</p>
          <div className="flex sm:flex-row flex-col">
            {ERQuotes.map((i, index) => <CmQuote key={index} {...i} />)}
          </div>
        </div>
        <div id="descargas" className="mt-3">
          <CmBanner text="Documentos de descarga" />
          <div className="flex justify-center py-10">
            <p className="sm:text-3xl text-xl text-center font-thin">¡Conoce la Estrategia y súmate a la acción!</p>
          </div>
          <div className="flex sm:flex-row flex-col sm:justify-between">
            { ERDowloads.map(i => (<ERDowload {...i} />)) }
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 mt-10">
        <div className="flex justify-center items-center bg-customBlueLighter w-full p-5 rounded-2xl">
          <p className="sm:text-2xl text-lg font-bold text-white text-center">¡Quiero saber más sobre la Estrategia de Resiliencia!</p>
        </div>
        <ERDropdownSaberMas />
        <div className="flex flex-col items-center py-10 w-full">
          <p className="sm:text-3xl text-xl text-center text-customBlueLighter font-bold">Sigue bajando y descubre más sobre Metrópoli Resiliente</p>
          <BsChevronDoubleDown className="mt-2 text-5xl" />
        </div>
      </section>
      <div className="h-0 bg-customTurquoiseBlue"></div>
    </> 
  );
}