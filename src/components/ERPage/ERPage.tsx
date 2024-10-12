import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import { assets } from "../../assets";
import { ER_COUNTS_AND_DESCRIPTIONS, ER_COVER_LOGOS, ER_IMAGES_CARROUSEL, ER_QUE_ES_ICONS } from "../../constants";
import { CmBanner, CmBoldText, CmCoverVideo, CmFooter, CmHeader, CmImage, CmImageCarousel, CmQuote } from "../common";

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
import { CoverMenu } from "../coverPage";

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
      <CmHeader />
      <CmCoverVideo
        footerContent={
          <div className="flex justify-end">
            { ER_COVER_LOGOS.map(i => (<CmImage src={i} className="sm:h-[60px] h-[30px] mx-3" />)) }
          </div>
        }
        img={assets.erm}
        icon={assets.erLogo}
        title="Estrategia de Resiliencia Metropolitana"
      />
      <section id="que-es" className="container mx-auto px-4 sm:pb-10 pb-0 pt-5">
        <CmBanner text="¿Qué es?" color="customPurple" icon={assets.erLogo} />
        <div className="flex sm:flex-row flex-col items-center">
          <span className="font-thin sm:text-2xl text-lg text-justify sm:w-1/2 w-full">
            <CmBoldText color="customBlueLighter">La Estrategia reúne conocimientos técnicos, comunitarios y académicos</CmBoldText> donde se identifican los principales impactos agudos y tensiones crónicas que afectan a las personas que habitan el Área Metropolitana de Guadalajara (AMG), como:
          </span>
          <div className="flex justify-center sm:space-x-10 space-x-3 sm:py-10 sm:w-1/2 w-full sm:p-10 py-3">
            { ER_QUE_ES_ICONS.map(i => (<ERQueEsIcon {...i} />))}
          </div>
        </div>
        <p className="font-thin sm:text-2xl text-lg text-justify">
          El AMG desarrolló la ERM con el fin  de  anticipar y mitigar estos fenómenos, reforzando la corresponsabilidad comunitaria e institucionalizando la resiliencia. Para poder lograrlo, se han planteado <CmBoldText color="customBlueLighter">acciones para Responder, Rdaptar y Prosperar</CmBoldText> ante los desafíos urbanos.
        </p>
      </section>
      <section id="vision-objetivo" className="container mx-auto px-4 pb-5">
        <div className="flex sm:flex-row flex-col">
          {
            ERP_INFO_ITEMS.map((i, index) => (
              <ERInfoItem key={index} {...i} />
            ))
          }
        </div>            
      </section>
      <section id="responder" className="bg-customSectionBg pt-10 pb-20">
        <div className="container mx-auto px-4">
          <CmBanner color="customBlueLighter" text="Responder" icon={assets.erLogo} />
          <div className="flex sm:flex-row flex-col sm:items-center  justify-center py-10">
            <span className="sm:text-2xl font-thin sm:pr-10 pr-0 sm:w-1/2 w-full text-justify">
              A lo largo de estos años, <CmBoldText color="customMain">la metrópoli se ha preparado a través de sus instrumentos de planeación y gestión, para responder ante diferentes impactos y tensiones</CmBoldText> que vulneran al territorio.
            </span>
            <div className="bg-customPurple sm:ml-3 ml-0 sm:mt-0 mt-5 sm:w-1/2 w-full sm:px-10 px-5 py-5 flex justify-center rounded-3xl">
              <CmImage src={assets.responderLogos} className="w-full" />
            </div>
          </div>
          <div className="flex sm:flex-row flex-col justify-center items-center sm:pb-20 pb-5">
            <p className="sm:w-1/2 sm:text-2xl font-thin text-justify sm:pr-10">
              <CmBoldText color="customBlueLighter" className="w-1/2">Sumando la participación de 2 mil personas</CmBoldText> de la sociedad civil, academia y sector público, y bajo la colaboración del actor internacional líder en la materia, Resilient Cities Network <CmBoldText color="customBlueLighter">se generó un Diagnóstico de Resiliencia</CmBoldText>  a través de: 
            </p>
            <div className="sm:w-1/2 w-full flex justify-center h-full sm:space-x-3 space-x-1 sm:mt-0 mt-5">
              {
                ERCountItems.map(i => (
                  <ERCountItem {...i} />
                ))
              }
            </div>
          </div>
          <CmImageCarousel images={ER_IMAGES_CARROUSEL} />
          <div className="flex flex-col items-center sm:text-xl mt-10 mb-5 p-5 pt-0 pb-10 font-thin text-center">
            <p className="text-customGrayDarker">Consulta las fotografías de estas actividades en</p>
            <a 
              className="text-customBlueLighter underline sm:text-xl text-xs font-semibold"
              href="https://www.flickr.com/photos/158129946@N05/albums"
            >https://www.flickr.com/photos/158129946@N05/albums
            </a>
          </div>
          <div className="flex sm:flex-row flex-col">
            <div className="sm:w-2/3">
              <p className="sm:text-3xl text-2xl text-customBlueLighter font-bold text-center mb-5">Gracias a estos ejericios, fueron identificados</p>
              <div className="flex sm:flex-row flex-col sm:space-x-5">
                { ER_COUNTS_AND_DESCRIPTIONS.map(i => (
                  <ERCountAndDescription {...i} />
                )) }
              </div>
            </div>
            <div className="sm:ml-5 ml-0 sm:w-1/3 w-full sm:mt-0 mt-5">
              <CmImage src={assets.erLibro} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section id="adaptarse" className="container mx-auto px-4 mt-10">
        <CmBanner color="customBlueLighter" text="Adaptarse" icon={assets.erLogo} />
        <div className="flex flex-col sm:mb-10 mt-5 text-customPurple">
          <CmBoldText className="sm:text-2xl">A partir de estos resultados, se trabajó bajo</CmBoldText>
          <p className="sm:text-5xl font-black">4 Desafíos Metropolitanos principales</p>
        </div>
        <div className="sm:mt-5 w-full flex sm:flex-row flex-col sm:justify-between sm:items-center sm:space-x-20 sm:gap-0 gap-4">
          <ERAdaptarseIconsText />
          <CmImage src={assets.erLibro2} className="sm:w-1/3 w-full rounded-[50px]" />
        </div>
        <div className="flex sm:flex-row flex-col items-center sm:mt-10">
          <div className="flex flex-col font-thin text-customGrayDarker sm:text-2xl text-xl sm:mb-0 mb-5 sm:w-2/3">
            <p className="sm:text-5xl font-black text-customBlueLighter mb-10">2 Alcances importantes</p>
            <span className="mb-10 flex space-x-5">
              <CmImage src={assets.erLogo} className="h-[60px]" />
              <span>
                <CmBoldText color="customBlueLighter">Las ciudades se apoyan en una compleja red</CmBoldText> de personas, instituciones, infraestructura e información.
              </span>
            </span>
            <span className="flex space-x-5">
              <CmImage src={assets.erLogo} className="h-[60px]" />
              <span>
                <CmBoldText color="customBlueLighter">Su resiliencia depende de fortalecer las capacidades de los sistemas</CmBoldText> individuales para fortalecer la ciudad en general.
              </span>
            </span>
          </div>
          <CmImage src={assets.erTaller} className="sm:w-1/3 object-cover h-full rounded-[50px]" />
        </div>
        <div className="flex flex items-center mt-10 pb-10">
          <div className="w-1/3 text-customGrayDarker">
            <span className="sm:text-4xl text-xl font-thin mb-5">
              En suma,
              <p className="text-customPinkN font-black">la  Estrategia</p>
              <p className="text-customPinkN font-black">de Resiliencia</p>
              Se integra por:
            </span>
          </div>
          <ERPills />
        </div>
      </section>
      <section id="prosperar" className="bg-customSectionBg">
        <div className="container mx-auto px-4 mt-10 pt-10 pb-5">
          <div className="flex h-full items-center">
            <CmBanner color="customBlueLighter" text="Prosperar" icon={assets.erLogo} />
            <div className="flex flex-col ml-10 text-xl">
              <CmBoldText color="customBlueLighter">La Estrategia es un legado comunitario</CmBoldText>
              <span>que marca un procedente a escala nacional e internacional.</span>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col mt-10">
              {
                ER_PROSPERAR_ICONS_DESC.map((i, index) => (
                  <ERProsperarIconDesc key={index} {...i} />
                ))
              }
          </div>
          <div className="mt-5 flex sm:flex-row flex-col w-full sm:h-[75vh] h-screen">
            <video
              autoPlay
              controls
              muted
              loop
              src={assets.loopER}             
              className="sm:w-3/4 w-full sm:h-auto h-full" 
            />
            <video
              autoPlay
              controls
              muted
              loop
              src={assets.resilienciaLLamando}             
              className="sm:w-1/4 w-full sm:ml-5 ml-0 sm:mt-0 mt-5 sm:h-auto h-full"
            />
          </div>
          <div className="flex sm:flex-row flex-col mt-10">
            {ERQuotes.map((i, index) => <CmQuote key={index} {...i} />)}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 mt-10 pb-20">
        <div id="descargas" className="mt-3">
          <div className="flex flex-col pb-10">
            <div className="flex justify-start items-center sm:space-x-5 space-x-3">
              <p className={`sm:text-6xl text-5xl text-center font-black text-customPurple`}>Documentos de descarga</p>
              <CmImage src={assets.erLogo} className="sm:h-[60px] h-[50px]" />
            </div>
            <p className="sm:text-3xl text-xl font-thin">¡Conoce la Estrategia y súmate a la acción!</p>
          </div>
          <div className="flex sm:flex-row flex-col sm:justify-between">
            { ERDowloads.map(i => (<ERDowload {...i} />)) }
          </div>
        </div>
      </section>
      <section className="bg-customSectionBg py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center bg-[#5f93a5] w-full p-5 rounded-2xl mb-5">
            <p className="sm:text-4xl text-lg font-black text-white text-center">¡Quiero saber más sobre la Estrategia de Resiliencia!</p>
          </div>
          <ERDropdownSaberMas />
        </div>
      </section>
      <div className="container mx-auto px-4 py-10">
        <CoverMenu complete={false} />
      </div>
      <CmFooter />

      <div className="h-0 bg-customTurquoiseBlue text-start text-end bg-customBlueLighterN text-customBlueLighterN bg-[#f7f7f7] bg-[#58a4c4] text-[#58a4c4] bg-[#5f93a5] text-[#5f93a5]"></div>
    </> 
  );
}