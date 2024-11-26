import { assets } from "../../assets";
import { VIDEOS } from "../../constants";

import { CmBanner, CmBoldText, CmCoverVideo, CmFooter, CmHeader, CmImage } from "../common";
import { GPQueSeraDropdown } from "./GPQueSeraDropdown";
import { GPConstruccionImages } from "./GPConstruccionImages";

import { GPAprendizajesDropdown } from "./GPAprendizajesDropdown";
import { GPCongresoCounts } from "./GPCongresoCounts";
import { GP_QUOTES } from "./GPQuotes";
import { GPIcons } from "./GPIcons";
import { CoverMenu } from "../coverPage";
import { useScroll } from "../../hooks/useScroll";
import { CmQuote2 } from "../common/CmQuote2";

export const GPPage = () => {
  //useScroll();

  return(
    <>
      <CmHeader />
      <CmCoverVideo
        footerContent={
          <div className="flex sm:w-1/2 sm:space-x-20 sm:space-x-5 space-x-2 sm:mr-40 ml-5 sm:ml-20">
            <CmImage className="sm:h-[60px] h-[15px]" src={assets.ambW} />
            <CmImage className="sm:h-[60px] h-[15px]" src={assets.imeplanW} />
          </div>
        }
        img={assets.gpCover}
        icon={assets.gpLogo}
        showFooter
        title="Guía Política de Resiliencia y Gobernanza Metropolitanas"
      />
      <div className="container mx-auto px-4 pb-20">
        <section id="que-es" className="sm:mt-20 sm:mt-5 mb-5">
          <CmBanner text="¿Qué es?" icon={assets.gpLogo} color="customPinkGP" />
          <div className="flex flex-col items-center my-5">
            <span className="font-thin text-justify sm:text-2xl text-xl">Una Guía que <CmBoldText className="text-customTurquoiseGP">recopila las experiencias y lecciones aprendidas del AMG y el AMB durante el desarrollo de Metrópoli Resiliente.</CmBoldText> Esto con el fin de inspirar a otras metrópolis a replicar y adaptar acciones en materia de resiliencia urbana y gobernanza metropolitana.
            </span>
          </div>
        </section>
        <section id="vision-objetivo">
          <GPQueSeraDropdown />
        </section>
      </div>
      <section id="construccion" className="py-20 bg-customSectionBg">
        <div className="container mx-auto px-4">
          <CmBanner text="Construcción de la Guía" icon={assets.gpLogo} color="customPinkN" />
          <div className="flex sm:flex-row flex-col mt-10">
            <div className="sm:w-1/2 sm:pr-10 sm:mb-0 mb-5 sm-w-full font-thin sm:text-xl text-lg text-justify h-full">
              <span>
                Desde el 2018, a través del Imeplan, el AMG ha impulsado la acción internacional como herramienta para el fortalecimiento de la metrópoli.
              </span><br/><br/>
              <span>
                Con la puesta en marcha de la acción MRG en 2021, se <CmBoldText color="customTurquoiseGP">han generado tanto experiencias como conocimientos en materia de resiliencia urbana y gobernanza metropolitana</CmBoldText> que podrás encontrar en la Guía con el fin de inspirar a otras metrópolis.
              </span>
            </div>
            <GPConstruccionImages />
          </div>
          <div className="flex flex-col font-thin sm:mt-0 mt-10">
            <div>
              <p className="sm:text-xl text-lg">Para ello,</p>
              <CmBoldText color="customPurpleGP" className="sm:text-3xl text-xl text-customPurpleGP">
                la Guía considera 4 elementos clave:
              </CmBoldText>
            </div>
            <GPIcons />
          </div>
        </div>
      </section>
      <section id="aprendizajes" className="mt-10 container mx-auto px-4">
        <CmBanner text="Aprendizajes" icon={assets.gpLogo} color="customPinkN" />
        <p className="sm:text-3xl text-2xl text-customGrayDarker sm:my-10 my-5">
          Con el fin de integrar diferentes perspectivas,<br /> <CmBoldText color="customTurquoiseGP">la Guía contempla:</CmBoldText>
        </p>
        <GPAprendizajesDropdown />
        <div className="sm:mt-5 flex flex-col items-center">
          <video className="sm:mt-10 mt-5 sm:w-[85%] w-full" controls>
            <source src={assets.gpCongresoVideo} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section id="congreso-internacional" className="mt-10 mb-5 font-thin sm:text-2xl text-lg bg-customSectionBg py-20">
        <div className="container mx-auto px-4">
          <div className="py-5 flex justify-start items-end sm:space-x-10 space-x-3">
            <p className="sm:text-6xl text-start font-black text-customPinkN">Congreso Internacional<br/> de Resiliencia Metropolitana</p>
            <CmImage src={assets.gpLogo} className="sm:h-[60px] h-[50px]" />
          </div>
          <div className="text-justify mt-5">
            Durante los tres días del Congreso, <CmBoldText color="customTurquoiseGP">personas expertas</CmBoldText> de diferentes lugares del mundo conversaron sobre sus <CmBoldText color="customTurquoiseGP">principales retos y cómo la resiliencia urbana incide en la mejora</CmBoldText> de nuestras metrópolis. <br />
            <br />
            Lo anterior en torno a <CmBoldText color="customTurquoiseGP">8 temáticas centrales:</CmBoldText> Resiliencia Metropolitana, Acción Climática, Ordenamiento Territorial y Gestión de Riesgos, Resiliencia Hídrica, Economía Circular, Movilidad, Gobernanza Energética y Vivienda; y <CmBoldText color="customTurquoiseGP">2 ejes transversales:</CmBoldText> Gobernanza Metropolitana e Igualdad Sustantiva. <br />
            <br />
            Se tuvo <CmBoldText color="customTurquoiseGP">participación local, nacional e internacional del sector público, privado, academia, sociedad civil y la ciudadanía en general.</CmBoldText> Reconociendo la importancia de la acción colectiva hacia un mundo resiliente.
          </div>
          <GPCongresoCounts />
          <div className="flex sm:flex-row flex-col space-x-5">
            {GP_QUOTES.map((i, index) => <CmQuote2 key={index} {...i} color="customPurpleGP" maxLines={6} largeTitle minHeaderHeight={120} border={false} />)}
          </div>
        </div>
      </section>
      <section id="entrevistas" className="container mx-auto px-4 py-10">
        <CmBanner text="Entrevistas con actores internacionales" icon={assets.gpLogo} color="customPinkN" />
        <p className="py-10 sm:text-2xl text-xl font-thin text-justify">
          Durante el Congreso, conocimos de primera mano las diversas perspectivas sobre la resiliencia urbana en otras metrópolis del mundo. 
        </p>
        <div className="flex flex-col items-center">
          <div className="sm:w-3/4 w-full">
            <CmBoldText className="text-[#45ae79] sm:text-2xl text-xl">Un poco de lo que nos compartieron:</CmBoldText>
            <video className="w-full mt-3" controls>
              <source src={VIDEOS.coverVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col sm:justify-center sm:items-end items-center w-full my-10">
          <CmImage src={assets.iconEntrevistas} className="sm:h-[120px] sm:w-auto w-1/2 mr-5" />
          <div className="flex flex-col items-center text-center">
            <CmBoldText className="text-customGreenBlue sm:text-2xl text-xl">Somos parte de la metrópoli en acción para</CmBoldText>
            <div className="sm:text-5xl text-2xl font-bold">
              <span className="text-customSkyBlue">responder, </span> 
              <span className="text-customGreenLighter">adaptarse y </span>
              <span className="text-customPink">prosperar.</span>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col sm:space-x-2 sm:space-y-0 space-y-3 py-5">
          <CmImage src={assets.entrevistas1} className="sm:w-1/3 object-cover h-80" />
          <CmImage src={assets.entrevistas3} className="sm:w-1/3 object-cover h-80"/>
          <CmImage src={assets.entrevistas2} className="sm:w-1/3 object-cover h-80" />
        </div>
      </section>
      <div className="container mx-auto px-4 pb-20">
        <CoverMenu current="GP" complete={false} />
      </div>
      <CmFooter />
      <div className="h-0 bg-customPurpleDarker"></div>
      <div className="h-0 bg-customPurpleGP text-customPinkGP"></div>
    </>
  );
}