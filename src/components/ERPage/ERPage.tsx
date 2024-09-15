import { VIDEOS } from "../../constants";
import { CmBanner, CmBoldText, CmCoverVideo, CmImage } from "../common";

import disasters from "../../assets/disasters.png";
import responderLogos from "../../assets/responder_logos.png";
import { ERInfoItem } from "./ERInfoItem";
import { ERP_INFO_ITEMS } from "./ERInfoItems";
import { ERCountItems } from "./ERCountItems";
import { ERCountItem } from "./ERCountItem";

export const ERPage = () => {
  return(
    <>
      <CmCoverVideo video={VIDEOS.coverVideo} />
      <section className="container mx-auto px-4 pt-10 sm:pb-10 pb-0">
        <div className="flex flex-col items-center">
          <p className="text-customMain sm:text-4xl text-xl font-bold">¿Qué es?</p>
          <span className="p-5 font-thin sm:text-2xl text-lg text-center">
            <CmBoldText color="customBlueLighter">La Estrategia reúne conocimientos técnicos, comunitarios y académicos</CmBoldText> donde se identifican los principales impactos agudos y tensiones crónicas que afectan a las personas que habitan el Área Metropolitana de Guadalajara (AMG), como:
          </span>
          <CmImage
            src={disasters}
            className="sm:w-1/2 w-full py-5"
          />
          <span className="p-5 font-thin sm:text-2xl text-lg text-center">
            El AMG desarrolló la ERM con el fin  de  anticipar y mitigar estos fenómenos, reforzando la corresponsabilidad comunitaria e institucionalizando la resiliencia. Para poder lograrlo, se han planteado <CmBoldText color="customBlueLighter">acciones para responder, adaptar y prosperar</CmBoldText> ante los desafíos urbanos.
          </span>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-5">
        <div className="flex sm:flex-row flex-col">
          {
            ERP_INFO_ITEMS.map((i, index) => (
              <ERInfoItem key={index} {...i} />
            ))
          }
        </div>
        <div className="py-10">
          <CmBanner text="Responder" />
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
    </>
  );
}