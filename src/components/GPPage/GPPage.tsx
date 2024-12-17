import { assets } from "../../assets";
import { GP_PAGE_COVER_IMGS, PV_COVER_LOGOS, VIDEOS } from "../../constants";

import { CmBanner, CmBoldText, CmCoverVideo, CmFooter, CmHeader, CmImage } from "../common";
import { GPQueSeraDropdown } from "./GPQueSeraDropdown";
import { GPConstruccionImages } from "./GPConstruccionImages";

import { GPAprendizajesDropdown } from "./GPAprendizajesDropdown";
import { GPCongresoCounts } from "./GPCongresoCounts";
import { GP_QUOTES, GP_QUOTES_1 } from "./GPQuotes";
import { GPIcons } from "./GPIcons";
import { CoverMenu } from "../coverPage";
import { useScroll } from "../../hooks/useScroll";
import { CmQuote2 } from "../common/CmQuote2";
import { GPEstructuraDropdown } from "./GPEstructuraDropdown";

export const GPPage = () => {
  //useScroll();

  return(
    <>
      <CmHeader />
      <CmCoverVideo
        footerContent={
          <div className="flex sm:justify-end justify-center sm:mr-5">
            { PV_COVER_LOGOS.map(i => (<CmImage src={i} className="sm:h-[50px] h-[15px] mx-3" />)) }
          </div>
        }
        img={assets.gpCover}
        icon={assets.gpLogo}
        showFooter
        title="Guía para la Gobernanza y Resiliencia Metropolitana"
      />
      <div className="container mx-auto px-4 pb-20">
        <section id="que-es" className="sm:mt-10 mb-5 flex space-x-5">
          <div className="sm:w-1/2 flex sm:flex-col sm:justify-center text-justify text-xl">
            <span>
              Desde el 2018, a través del Imeplan, el AMG ha impulsado la acción internacional como herramienta para el fortalecimiento de la metrópoli.
            </span>
            <br />
            <span>
              Con la puesta en marcha de la <CmBoldText className="text-[#aaa3cc]">Acción MRG</CmBoldText> en 2021, se <CmBoldText className="text-[#aaa3cc]">han generado tanto experiencias como conocimientos en materia de resiliencia urbana y gobernanza metropolitana</CmBoldText> que podrás encontrar en la Guía con el fin de inspirar a otras metrópolis.
            </span>
          </div>
          <div className="sm:w-1/2 flex flex-wrap gap-2">
            { GP_PAGE_COVER_IMGS.map((i => (<img className="w-[calc(50%-8px)] object-cover aspect-[16/9]"  src={i} />))) }
          </div>
        </section>
        <section id="vision-objetivo" className="sm:mt-10">
          <CmBanner text="¿Qué es?" color="[#aaa3cc]" />
          <p className="text-justify sm:text-xl mb-5">
            La Guía es única en su tipo, ya que <CmBoldText color="[#aaa3cc]">recopila y compara de forma innovadora las experiencias y lecciones aprendidas de las áreas metropolitanas de Guadalajara y Barcelona durante el desarrollo de Metrópoli Resiliente.</CmBoldText> Busca inspirar a otras metrópolis a replicar y adaptar acciones en resiliencia y gobernanza metropolitana. Diseñada como un recurso práctico y dinámico, está dirigida a quienes participan en la toma de decisiones y en el diseño y ejecución de políticas públicas. Además, aborda la resiliencia no sólo desde la perspectiva de riesgos, sino centrándose en las personas que habitan y transitan las metrópolis, lo que permite analizar las temáticas de manera integral.
          </p>
          <GPQueSeraDropdown />
          <div className="flex flex-col font-thin mt-10">
            <div>
              <p className="sm:text-xl text-lg">Para ello,</p>
              <CmBoldText color="[#aaa3cc]" className="sm:text-3xl text-xl text-customPurpleGP">
                la Guía considera 4 elementos clave:
              </CmBoldText>
            </div>
            <GPIcons />
          </div>
        </section>
      </div>
      <section id="estructura" className="py-10 bg-customSectionBg">
        <div className="container mx-auto px-4">
          <CmBanner text="Estructura" color="[#aaa3cc]" />
          <span className="sm:text-2xl">
            Su enfoque integrador, basado en la <CmBoldText color="[#aaa3cc]">suma de saberes</CmBoldText> y la <CmBoldText color="[#aaa3cc]">articulación de esfuerzos</CmBoldText>, se refleja en los <CmBoldText color="[#aaa3cc]">cuatro apartados</CmBoldText> que la conforman:
          </span>
          <div className="mt-10">
            <GPEstructuraDropdown />
          </div>
        </div>
      </section>
      <section className="my-10">
        <div className="container mx-auto px-4">
          <CmBanner text="Presentación de la Guía" color="[#aaa3cc]" />
          <div className="flex sm:items-center sm:flex-row flex-col sm:space-x-5 py-10">
            <div className="text-xl text-justify">
              El <CmBoldText color="[#aaa3cc]">4 de diciembre de 2024</CmBoldText>, se presentó la Guía en la Feria Internacional del Libro de Guadalajara (FIL), con la asistencia de <CmBoldText color="[#aaa3cc]">más de 150 personas</CmBoldText> de diversos sectores. El panel, integrado por <CmBoldText color="[#aaa3cc]">Patricia Martínez</CmBoldText> y <CmBoldText color="[#aaa3cc]">Ramon Torra</CmBoldText> como beneficiarios de MRG, <CmBoldText color="[#aaa3cc]">Mario Silva</CmBoldText> en representación de los gobiernos locales, y <CmBoldText color="[#aaa3cc]">Jordana Vásquez</CmBoldText> para abordar la transversalización de la perspectiva de género, propició un diálogo enriquecedor sobre temas como la cooperación internacional, la articulación de esfuerzos, la perspectiva de género en las acciones resiliencia y el intercambio de conocimientos.
            </div>
            <img className="sm:w-1/2" src={assets.feria} />
          </div>
          <div className="flex sm:flex-row flex-col space-x-2">
            {GP_QUOTES_1.map((i, index) => <CmQuote2 key={index} {...i} color="customPurpleGP" maxLines={6} largeTitle minHeaderHeight={130} fontSize="sm:text-base text-base" border={false} />)}
          </div>
          <div className="flex justify-center items-center mt-10">
            <a href="#" className="bg-customPurpleGP text-white sm:text-3xl font-bold px-10 py-5 rounded-3xl">Consulta la Guía</a>
          </div>
        </div>
      </section>
      <section id="suma-saberes" className="py-10 bg-customSectionBg">
        <div className="container mx-auto px-4">
          <CmBanner text="Suma de saberes" color="[#aaa3cc]" />
          <CmBoldText className="text-xl">Con el fin de integrar diferentes perspectivas, la Guía contempla:</CmBoldText>
          <GPAprendizajesDropdown />
          <div className="my-10">
            <CmBoldText className="text-xl">Echa un vistazo a lo que se vivió durante el Congreso
            </CmBoldText>
          </div>
          <div className="flex flex-col items-center">
            <video className="sm:w-[85%] w-full" controls>
              <source src={assets.gpCongresoVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section id="congreso-internacional" className="mt-10 mb-5 font-thin sm:text-2xl text-lg py-20">
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
            {GP_QUOTES.map((i, index) => <CmQuote2 key={index} {...i} color="customPurpleGP" maxLines={6} largeTitle minHeaderHeight={130} border={false} />)}
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