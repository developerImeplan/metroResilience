import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { VIDEOS } from "../../constants";
import { CmBanner, CmBoldText, CmCoverVideo, CmImage, CmQuote } from "../common";
import { GPQueSeraDropdown } from "./GPQueSeraDropdown";
import { GPConstruccionImages } from "./GPConstruccionImages";

import iconGobernanza from "../../assets/icon-gobernenza.png";
import iconResiliencia from "../../assets/icon-resilencia.png";
import iconAccion from "../../assets/icon-accion.png";
import iconInspiracion from "../../assets/icon-inspiracion.png";
import iconEntrevistas from "../../assets/icon_entrevistas.png";
import entrevistaQuote from "../../assets/entrevista_quote.png";
import entrevistas1 from "../../assets/entrevistas1.png";
import entrevistas2 from "../../assets/entrevistas2.png";
import entrevistas3 from "../../assets/entrevistas3.png";
import { GPAprendizajesDropdown } from "./GPAprendizajesDropdown";
import { GPCongresoCounts } from "./GPCongresoCounts";
import { GP_QUOTES } from "./GPQuotes";

export const GPPage = () => {
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
        video={VIDEOS.coverVideo} 
        title="Guía Política de Resiliencia y Gobernanza Metropolitanas"
      />
      <div className="container mx-auto px-4">
        <section id="que-es" className="mt-10 mb-5">
          <div className="flex flex-col items-center">
            <CmBoldText 
              color="customPurpleGP"
              className="sm:text-4xl text-2xl mb-5"
            >¿Qué será?</CmBoldText>
            <span className="font-thin text-center sm:text-2xl text-xl">Una Guía que <CmBoldText color="customPurpleGP">recopilará las experiencias y lecciones aprendidas del AMG y el AMB durante el desarrollo de Metrópoli Resiliente.</CmBoldText> Esto con el fin de inspirar a otras metrópolis a replicar y adaptar acciones en materia de resiliencia urbana y gobernanza metropolitana.
            </span>
          </div>
        </section>
        <section id="vision-objetivo">
          <GPQueSeraDropdown />
        </section>
        <section id="construccion" className="mt-10">
          <CmBanner text="Construcción de la Guía" />
          <div className="flex sm:flex-row flex-col mt-10">
            <div className="sm:w-1/2 sm:pr-10 sm:mb-0 mb-5 sm-w-full font-thin sm:text-xl text-lg text-justify h-full">
              <span>
                Desde el 2018, a través del Imeplan, el AMG ha impulsado la acción internacional como herramienta para el fortalecimiento de la metrópoli.
              </span><br/><br/>
              <span>
                Con la puesta en marcha de la acción MRG en 2021, se <CmBoldText color="customPurpleGP">han generado experiencias y conocimientos en materia de resiliencia urbana y acción internacional</CmBoldText> que podrás encontrar en la Guía con el fin de inspirar a otras metrópolis.
              </span>
            </div>
            <GPConstruccionImages />
          </div>
          <div className="flex flex-col items-center font-thin">
            <CmBoldText color="customPurpleGP" className="sm:mt-10 text-center sm:text-3xl text-xl">
              Por ello, la Guía considera cuatro elementos clave:
            </CmBoldText>
            <div className="w-full flex sm:flex-row flex-col sm:justify-around mt-10">
              <div className="flex flex-col items-center">
                <CmImage src={iconGobernanza} className="h-[100px] mb-3" />
                <p className="text-center sm:text-2xl text-xl">Gobernanza metropolitana</p>
              </div>
              <div className="flex flex-col items-center">
                <CmImage src={iconResiliencia} className="h-[100px] mb-3" />
                <p className="text-center sm:text-2xl text-xl">Resiliencia Urbana</p>
              </div>
            </div>
            <div className="w-full flex sm:flex-row flex-col sm:justify-around mt-10">
              <div className="flex flex-row items-center">
                <CmImage src={iconAccion} className="h-[100px] mr-5" />
                <p className="text-center sm:text-2xl text-xl">Acción Internacional</p>
              </div>
              <div className="flex flex-row items-center">
                <CmImage src={iconInspiracion} className="h-[100px] mr-5" />
                <p className="text-center sm:text-2xl text-xl">Inspiración y Replicabilidad</p>
              </div>
            </div>
          </div>
        </section>
        <section id="aprendizajes" className="mt-10">
          <CmBanner text="Aprendizajes" />
          <p className="sm:text-3xl text-2xl text-center font-semibold text-customGrayDarker sm:my-10 my-5">
            Con el fin de integrar diferentes perspectivas,<br /> la Guía contempla:
          </p>
          <GPAprendizajesDropdown />
          <div className="sm:mt-5 flex flex-col items-center">
            <CmBoldText color="customGrayDarker" className="sm:text-3xl text-2xl text-center sm:mt-10 mt-5">
              Echa un vistazo a lo que se vivió durante el Congreso
            </CmBoldText>
            <video className="sm:mt-10 mt-5 sm:w-3/4 w-full" controls>
              <source src={VIDEOS.coverVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
        </section>
        <section id="congreso-internacional" className="mt-10 mb-5 font-thin sm:text-2xl text-lg">
          <CmBanner text="Congreso Internacional de Resiliencia Metropolitana" />
          <div className="text-justify mt-5">
            Durante los tres días del Congreso, <CmBoldText color="customPurpleGP">personas expertas de diferentes lugares del mundo conversaron sobre sus principales retos y cómo la resiliencia urbana incide en la mejora de nuestras metrópolis.</CmBoldText> <br />
            <br />
            <CmBoldText color="customPurpleGP">Lo anterior en torno a 8 temáticas centrales:</CmBoldText> Resiliencia Metropolitana, Acción Climática, Ordenamiento Territorial y Gestión de Riesgos, Resiliencia Hídrica, Economía Circular, Movilidad, Gobernanza Energética y Vivienda; <CmBoldText color="customPurpleGP">y 2 ejes transversales:</CmBoldText> Gobernanza Metropolitana e Igualdad Sustantiva. <br />
            <br />
            Se tuvo participación local, nacional e internacional del sector público, privado, academia, sociedad civil y la ciudadanía en general. <CmBoldText color="customPurpleGP">Reconociendo la importancia de la acción colectiva hacia un mundo resiliente.</CmBoldText>
          </div>
          <GPCongresoCounts />
          <div className="flex justify-center my-5">
            <CmBoldText color="customPurpleGP" className="sm:text-3xl text-2xl">En voz de algunas de las personas invitadas</CmBoldText>
          </div>
          <div className="flex sm:flex-row flex-col">
            {GP_QUOTES.map((i, index) => <CmQuote key={index} {...i} color="customPurpleGP" />)}
          </div>
        </section>
        <section id="entrevistas">
          <CmBanner text="Entrevistas con actores internacionales" />
          <p className="py-10 sm:text-xl text-lg font-thin text-justify">
            Durante el Congreso, conocimos de primera mano las diversas perspectivas sobre la resiliencia urbana en otras metrópolis del mundo. 
          </p>
          <div className="w-full flex justify-center">
            <CmBoldText color="customPurpleGP text-center sm:text-2xl text-xl">Un poco de lo que nos compartieron:</CmBoldText>
          </div>
          <div className="flex justify-center">
            <video className="my-3 sm:w-3/4 w-full" controls>
              <source src={VIDEOS.coverVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex sm:flex-row flex-col sm:justify-between sm:items-end items-center w-full my-5">
            <CmImage src={iconEntrevistas} className="sm:h-[120px] sm:w-auto w-1/2" />
            <CmImage src={entrevistaQuote} className="sm:h-[90px]" />
          </div>
          <div className="flex sm:flex-row flex-col sm:space-x-5 sm:space-y-0 space-y-3 py-5">
            <CmImage src={entrevistas3} className="sm:w-1/3" />
            <CmImage src={entrevistas2} className="sm:w-1/3" />
            <CmImage src={entrevistas1} className="sm:w-1/3"/>
          </div>
        </section>
      </div>
    </>
  );
}