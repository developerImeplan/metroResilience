import { assets } from "../../assets";
import { GP_PAGE_COVER_IMGS, PV_COVER_LOGOS } from "../../constants";

import { CmBanner, CmBoldText, CmCoverVideo, CmFooter, CmHeader, CmImage } from "../common";
import { GPQueSeraDropdown } from "./GPQueSeraDropdown";

import { GPAprendizajesDropdown } from "./GPAprendizajesDropdown";
import { GPCongresoCounts } from "./GPCongresoCounts";
import { GP_QUOTES, GP_QUOTES_1 } from "./GPQuotes";
import { GPIcons } from "./GPIcons";
import { CoverMenu } from "../coverPage";
import { CmQuote2 } from "../common/CmQuote2";
import { GPEstructuraDropdown } from "./GPEstructuraDropdown";
import { useScroll } from "../../hooks/useScroll";

export const GPPage = () => {
  useScroll();

  return(
    <>
      <CmHeader />
      <CmCoverVideo
        footerContent={
          <div className="flex sm:justify-end justify-center sm:mr-5">
            { PV_COVER_LOGOS.map(i => (<CmImage src={i} className="sm:h-[55px] h-[10px] sm:mx-3 mx-2" />)) }
          </div>
        }
        img={assets.gpCover}
        icon={assets.gpLogo}
        showFooter
        title="Guía para la Gobernanza y Resiliencia Metropolitana"
      />
      <div className="container mx-auto px-4 pb-20">
        <section id="que-es" className="sm:mt-10 mb-5 flex space-x-5 flex sm:flex-row flex-col">
          <div className="sm:w-1/2 flex flex-col sm:justify-center text-justify text-xl sm:my-0 my-5">
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
          <CmBanner text="¿Qué es?" color="[#987BB5]" icon={assets.gpLogo} />
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
          <CmBanner text="Estructura" color="[#987BB5]" icon={assets.gpLogo} />
          <span className="sm:text-2xl">
            Su enfoque integrador, basado en la <CmBoldText color="[#aaa3cc]">suma de saberes</CmBoldText> y la <CmBoldText color="[#aaa3cc]">articulación de esfuerzos</CmBoldText>, se refleja en los <CmBoldText color="[#aaa3cc]">cuatro apartados</CmBoldText> que la conforman:
          </span>
          <div className="mt-10">
            <GPEstructuraDropdown />
          </div>
        </div>
      </section>
      <section id="presentacion-guia" className="my-10">
        <div className="container mx-auto px-4">
          <CmBanner text="Presentación de la Guía" color="[#987BB5]" icon={assets.gpLogo} />
          <div className="flex sm:items-center sm:flex-row flex-col sm:space-x-5 py-10">
            <div className="text-xl text-justify">
              El <CmBoldText color="[#aaa3cc]">4 de diciembre de 2024</CmBoldText>, se presentó la Guía en la Feria Internacional del Libro de Guadalajara (FIL), con la asistencia de <CmBoldText color="[#aaa3cc]">más de 150 personas</CmBoldText> de diversos sectores. El panel, integrado por <CmBoldText color="[#aaa3cc]">Patricia Martínez</CmBoldText> y <CmBoldText color="[#aaa3cc]">Ramon Torra</CmBoldText> como beneficiarios de MRG, <CmBoldText color="[#aaa3cc]">Mario Silva</CmBoldText> en representación de los gobiernos locales, y <CmBoldText color="[#aaa3cc]">Jordana Vásquez</CmBoldText> para abordar la transversalización de la perspectiva de género, propició un diálogo enriquecedor sobre temas como la cooperación internacional, la articulación de esfuerzos, la perspectiva de género en las acciones resiliencia y el intercambio de conocimientos.
            </div>
            <img className="sm:w-1/2" src={assets.feria} />
          </div>
          <div className="flex sm:flex-row flex-col sm:space-x-2">
            {GP_QUOTES_1.map((i, index) => <CmQuote2 key={index} {...i} color="customPurpleGP" maxLines={5} largeTitle minHeaderHeight={130} fontSize="sm:text-base text-base" border={false} />)}
          </div>
          <div className="flex justify-center items-center mt-10">
            <a href={assets.guiaResilenciaPDF} download className="bg-customPurpleGP text-white sm:text-3xl font-bold px-10 py-5 rounded-3xl">Consulta la Guía</a>
          </div>
        </div>
      </section>
      <section id="suma-saberes" className="py-10 bg-customSectionBg">
        <div className="container mx-auto px-4">
          <CmBanner text="Suma de saberes" color="[#987BB5]" icon={assets.gpLogo} />
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
      <section id="congreso-internacional" className="mb-5 font-thin sm:text-2xl text-lg pt-5 pb-20">
        <div className="container mx-auto px-4">
          <div className="py-5 flex justify-start items-end sm:space-x-10 space-x-3">
            <p className="sm:text-6xl text-start font-black text-[#987BB5]">Congreso Internacional<br/> de Resiliencia Metropolitana</p>
            <CmImage src={assets.gpLogo} className="sm:h-[60px] h-[50px]" />
          </div>
          <div className="text-justify mt-5">
            Durante los tres días del Congreso, <CmBoldText color="[#aaa3cc]">personas expertas de diferentes lugares del mundo conversaron sobre sus principales retos y cómo la resiliencia urbana incide en la mejora de nuestras metrópolis.</CmBoldText><br />
            <br />
            <CmBoldText color="[#aaa3cc]">Lo anterior en torno a 8 temáticas centrales: </CmBoldText> Resiliencia Metropolitana, Acción Climática, Ordenamiento Territorial y Gestión de Riesgos, Resiliencia Hídrica, Economía Circular, Movilidad, Gobernanza Energética y Vivienda; y <CmBoldText color="[#aaa3cc]">2 ejes transversales:</CmBoldText> Gobernanza Metropolitana e Igualdad Sustantiva. <br />
            <br />
            Se tuvo participación local, nacional e internacional del sector público, privado, academia, sociedad civil y la ciudadanía en general. <CmBoldText color="[#aaa3cc]">Reconociendo la importancia de la acción colectiva hacia un mundo resiliente.</CmBoldText>
          </div>
          <GPCongresoCounts />
          <div className="mb-5">
            <CmBoldText className="text-xl">En voz de algunas de las personas invitadas</CmBoldText>
          </div>
          <div className="flex sm:flex-row flex-col sm:space-x-5">
            {GP_QUOTES.map((i, index) => <CmQuote2 key={index} {...i} color="customPurpleGP" maxLines={6} largeTitle minHeaderHeight={130} border={false} />)}
          </div>
        </div>
      </section>
      <section id="entrevistas" className="py-10 bg-customSectionBg">
        <div className="container mx-auto px-4">
          <CmBanner text="Entrevistas con actores internacionales" icon={assets.gpLogo} color="[#987BB5]" />
          <p className="py-10 sm:text-2xl text-xl font-thin text-justify">
            Durante el Congreso, conocimos de primera mano las diversas perspectivas sobre la resiliencia urbana en otras metrópolis del mundo. 
          </p>
          <CmBoldText className="sm:text-2xl text-xl">Un poco de lo que nos compartieron:</CmBoldText>
          <div className="flex flex-col items-center mt-5">
            <div className="sm:w-3/4 w-full">
              <iframe className="w-full sm:h-[550px]" src="https://www.youtube.com/embed/VhrLylzMbKc?si=FUtIJkZRtOnQw4qG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:mb-10">
        <div className="container mx-auto px-4">
          <div className="flex sm:flex-row flex-col sm:justify-center sm:items-end items-center w-full my-10">
            <CmImage src={assets.iconEntrevistas} className="sm:h-[120px] sm:w-auto w-1/2 mr-5" />
            <div className="flex flex-col">
              <CmBoldText className="text-customGrayDarker sm:text-3xl text-xl">Somos parte de la metrópoli en acción para</CmBoldText>
              <div className="sm:text-5xl text-2xl font-bold">
                <span className="text-[#8ab5c6]">responder, </span> 
                <span className="text-[#74bd8c]">adaptarse y </span>
                <span className="text-[#997bb5]">prosperar.</span>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col sm:space-x-2 sm:space-y-0 space-y-3 py-5 h-[450px]">
            <CmImage src={assets.entrevistas3} className="sm:w-1/2 object-cover"/>
            <CmImage src={assets.entrevistas2} className="sm:w-1/2 object-cover" />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 pb-20 sm:mt-0 mt-80">
        <CoverMenu current="GP" complete={false} />
      </div>
      <CmFooter />
      <div className="h-0 bg-customPurpleDarker"></div>
      <div className="h-0 bg-customPurpleGP text-customPinkGP"></div>
      <div className="text-[#987BB5]"></div>
    </>
  );
}