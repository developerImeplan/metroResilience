import { CmBanner, CmBoldText, CmCoverVideo, CmFooter, CmHeader, CmImage, CmQuote } from "../common";
import { PVQueSonDropdown } from "./PVQueSonDropdown";
import { PV_MODELOS_IMGS } from "./PVModelosImgs";
import { PV_MODELOS_QUOTES } from "./PVModelosQuotes";

import { assets } from "../../assets";

import { PVInfoIcons } from "./PVInfoIcons";
import { PVDropdown } from "./PVDropdown";
import { ER_COVER_LOGOS } from "../../constants";
import { CoverMenu } from "../coverPage";
import { useScroll } from "../../hooks/useScroll";
import { PVCarrousel } from "./PVCarrousel";
import { PVBullets } from "./PVBullets";
import { PVResiduos } from "./PVResiduos";

export const PVPage = () => {
  //useScroll();

  return(
    <>
      <CmHeader />
      <CmCoverVideo
        footerContent={
          <div className="flex sm:justify-end justify-center sm:mr-20">
            { ER_COVER_LOGOS.map(i => (<CmImage src={i} className="sm:h-[60px] h-[15px] mx-3" />)) }
          </div>
        }
        img={assets.pvCover}
        icon={assets.pvLogo}
        title="Puntos Verdes Metropolitanos"
        width={false}
      />
      <section id="que-son" className="container mx-auto px-4 sm:pt-10 sm:pb-10 pb-0 mt-10">
        <CmBanner text="¿Qué son?" color="customGreenN2" icon={assets.pvLogo} />
        <p className="text-justify my-5 sm:text-xl text-lg font-thin">
          <CmBoldText className="text-customPinkN">Son espacios donde se reciben, acopian, y envían los residuos para su valorización</CmBoldText> en una dinámica de economía circular, propiciando la conexión entre comunidad, naturaleza y territorio. Basados en el modelo de gestión de residuos del AMB a través de su experiencia y apoyo técnico. 
        </p>
        <PVQueSonDropdown />
        <div className="flex justify-center">
          <p className="font-thin sm:text-base text-sm">*(Plan de Acción Climática, PACmetro,  2023)</p>
        </div>
        {/*<div className="flex justify-center sm:mt-10 my-5">
          <span className="font-thin sm:text-2xl text-justify">
            <CmBoldText color="customGreenN2">En nuestra metrópoli</CmBoldText>, sabemos que existen iniciativas locales e internacionales con valiosos conocimientos, por lo que la colaboración es clave.
          </span>
        </div>*/}
      </section>
      <section id="centros" className="bg-customSectionBg">
        <div className="container mx-auto px-4 pb-20 pt-5">
          <div className="mt-10">
            <div className="sm:py-5 py-3 flex justify-start items-center sm:space-x-5 space-x-">
              <p className={`sm:text-6xl text-3xl font-black text-customPinkN sm:w-[65%]`}>9 centros de acopio de residuos metropolitanos</p>
              <CmImage src={assets.pvLogo} className="sm:h-[60px] h-[35px]" />
            </div>
          </div>
          <div className="mt-10 sm:text-2xl text-lg font-thin text-center sm:space-x-10">
            <div>
              <CmBoldText className="text-customGreenN sm:text-4xl">EL AMG cuenta con 9 PVM</CmBoldText>
              <p>distribuidos y emplazados de manera estratégica en los municipios metropolitanos. En cada uno de ellos, se realiza recepción de residuos valorizables para su correcta disposición y actividades para concientizar sobre el consumo responsable. 
              </p>
            </div>
          </div>
          <img className="mt-10 w-full" src={assets.pv} />
        </div>
      </section>
      <section id="pvs" className="flex">
        <PVCarrousel />
      </section>
      <section id="ubicacion" className="container mx-auto px-4 pb-20">
        <CmBanner text="Ubicación" icon={assets.pvLogo} color="customPinkN" />
        {/*<div className="sm:mt-10 mt-5 mb-5 font-thin sm:text-3xl flex justify-center">
          <span className="text-center">
            <CmBoldText color="customGreenN">El primer módulo está en el Bosque Urbano Tlaquepaque</CmBoldText><br /> y su existencia fortalece el trabajo realizado por el Colectivo Vecinal BUT.
          </span>
        </div>
        <div className="flex justify-center">
          <video
            autoPlay
            controls
            muted
            loop
            src={assets.pvUbicacionVideo}             
            className="mt-3 mb-10"
          />
        </div>*/}
        <div className="flex sm:flex-row flex-col mt-10 sm:min-h-[500px]">
          <div className="sm:w-1/2">
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1sY66qNbNm4XrswXjGItrOjbQPgQ0KRQ&ehbc=2E312F&noprof=1" className="w-full h-full"></iframe>
          </div>
          <div className="sm:w-1/2 bg-customGrayBg2 p-10">
            <p className="font-semibold text-customGreen text-2xl text-justify">Cada municipio del AMG cuenta con un Punto Verde Metropolitano que puedes visitar, ocupar y conocer.</p>

            <div className="mt-5">
              <PVBullets />
            </div>
          </div>
          {/*<div className="sm:w-1/3 flex flex-col sm:ml-3 ml-0 sm:text-xl text-justify font-thin">
            <div className="h-[200px]">
              <CmImage 
                src={assets.pvUbicacion} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-10">
              <CmBoldText color="customGreenN" className="text-2xl">Cada municipio del AMG cuenta con un Punto Verde Metropolitano que puedes visitar, ocupar y conocer.</CmBoldText>
              <p className="mt-3">En cada uno de ellos, se realizarán talleres sobre reparación de artículos y su correcta disposición, además de actividades para concientizar sobre el consumo.</p>
            </div>
          </div>*/}
        </div>
      </section>
      <section id="residuos" className="container mx-auto px-4 pb-20">
        <CmBanner text="¿Qué residuos se reciben?" icon={assets.pvLogo} color="customPinkN" />
        <PVResiduos />
      </section>
      <section id="disenio-caracteristicas" className="bg-customSectionBg">
        <div className="container mx-auto px-4 sm:pb-10 pb-0 py-20">
          <CmBanner text="Diseño y características" icon={assets.pvLogo} color="customPinkN" />
          <div className="flex flex-col">
            <span className="font-thin sm:text-2xl text-xl my-5">
              <CmBoldText color="customGreenN">Los Puntos Verdes Metropolitanos son espacios vecinales,</CmBoldText><br/>
              por eso su diseño y habilitación integra criterios como:
            </span>
            <PVInfoIcons />
          </div>
          <div className="flex flex-col">
            <div className="w-full bg-customGreenN p-5 rounded-2xl text-center">
              <CmBoldText className="sm:text-3xl text-xl text-white">¡Quiero saber más sobre los Puntos Verdes Metropolitanos!</CmBoldText>
            </div>
            <PVDropdown />
          </div>
        </div>
      </section>
      <section id="comunidad" className="bg-customSectionBg">
        <div className="container mx-auto px-4 pb-20 pt-5">
          <div className="mt-10">
            <CmBanner text="Modelos referentes" icon={assets.pvLogo} color="customPinkN" />
          </div>
          <div className="flex sm:flex-row flex-col mt-5 sm:text-2xl text-lg font-thin text-justify sm:space-x-10">
            <div className="sm:w-1/2 w-full sm:space-y-10 space-y-5">
              <CmBoldText className="text-customGreenN sm:text-4xl">“Puntos Verdes de Barrio” del Área       Metropolitana de Barcelona (AMB).</CmBoldText>
              <p>Parte de la inspiración para la PVM, fue recuperar las buenas prácticas del modelo de gestión de residuos del AMB, particularmente sobre acopio de residuos, el cual se comprende de tres tipologías: Puntos Verdes de Zona, Puntos Verdes Móviles y Puntos Verdes de Barrio. Esta red abarca un total de 142 puntos estratégicamente distribuidos en diez distritos, y en conjunto logran revalorizar un promedio mensual de 120 mil toneladas de residuos. El enfoque replicado para el AMG, son los Puntos Verdes de Barrio, los cuales ofrecen a la ciudadanía actividades como reparaciones, intercambio de artículos y talleres abierto a la comunidad. 
              </p>
            </div>
            <div className="sm:w-1/2 w-full sm:space-y-10 space-y-5 sm:mt-0 mt-10">
              <CmBoldText className="text-customGreenN sm:text-4xl">Colectivo Vecinal Bosque Urbano Tlaquepaque.</CmBoldText>
              <p>
                Uno de los impulsos para desarrollar los PVM, fue la acción ciudadana del Colectivo, quienes impulsaron la gestión del Bosque Urbano Tlaquepaque y de un centro de acopio comunitario de residuos. El cual a lo largo de dos años de operación logró un promedio anual de acopio y valorización de al menos 5 toneladas de residuos.  Fomentando la correcta separación de residuos, la conciencia ambiental y la participación activa al rededor del BUT.
              </p>
            </div>
          </div>
          <div>
            <div className="flex sm:flex-row flex-col">
            {PV_MODELOS_IMGS.map((i, index) => (
              <CmImage 
                key={index}
                src={i} 
                className={`
                  sm:w-1/4 w-full mt-5 
                  ${index !== PV_MODELOS_IMGS.length - 1 ? 'sm:pr-4 pr-0' : ''}
                `}
              />
            ))}
            </div>
            <div className="flex justify-center mt-3 w-full h-[80px] sm:space-x-20 space-x-3 py-5">
              <CmImage src={assets.financeEUColor} className="sm:h-[40px] h-[25px]" />
              <CmImage src={assets.ambC} className="sm:h-[40px] h-[25px]" />
              <CmImage src={assets.imeplanC} className="sm:h-[40px] h-[25px]" />
            </div>
          </div>
          <div className="flex sm:flex-row flex-col mt-10">
            {PV_MODELOS_QUOTES.map((i, index) => <CmQuote key={index} {...i} color="customGreen" maxLines={6} largeTitle minHeaderHeight={80} />)}
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 py-10">
          <CoverMenu current="PV" complete={false} />
        </div>
      </section>
      <CmFooter />
      <div className="text-customGreenN2"></div>
    </>
  );
}