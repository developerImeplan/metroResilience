import { VIDEOS } from "../../constants";
import { CmBoldText, CmCoverVideo, CmImage } from "../common";

import disasters from "../../assets/disasters.png";
import { ERInfoItem } from "./ERInfoItem";
import { ERP_INFO_ITEMS } from "./ERInfoItems";

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
      </section>
    </>
  );
}