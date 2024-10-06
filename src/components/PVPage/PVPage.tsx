import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { CmBanner, CmBoldText, CmCoverVideo, CmImage, CmQuote } from "../common";
import { PVQueSonDropdown } from "./PVQueSonDropdown";
import { PV_MODELOS_IMGS } from "./PVModelosImgs";
import { PV_MODELOS_QUOTES } from "./PVModelosQuotes";

import { assets } from "../../assets";
import mapaPV from "../../assets/mapa_pvs.png";
import renderPV from "../../assets/pv_render.png";
import { PVInfoIcons } from "./PVInfoIcons";
import { PVDropdown } from "./PVDropdown";
import { BsChevronDoubleDown } from "react-icons/bs";

export const PVPage = () => {
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
          <div className="flex sm:w-1/3 sm:space-x-20 space-x-5 sm:mr-60">
            <CmImage className="sm:h-[60px] h-[40px]" src={assets.ambW} />
            <CmImage className="sm:h-[60px] h-[40px]" src={assets.imeplanW} />
          </div>
        }
        img={assets.pvCover}
        icon={assets.pvLogo}
        title="Puntos Verdes Metropolitanos"
      />
      <section id="que-son" className="container mx-auto px-4 pt-10 sm:pb-10 pb-0">
        <div className="w-full flex justify-center items-center">
          <CmImage src={assets.pvLogo} className="h-[40px]" />
          <p className="sm:text-3xl text-2xl text-center font-bold text-customMain px-2">¿Qué son?</p>
          <CmImage src={assets.pvLogo} className="h-[40px]" />
        </div>
        <p className="text-center mt-5 sm:text-xl text-lg font-thin">
          <CmBoldText color="customGreen">Son espacios donde se reciben, recolectan y valorizan residuos</CmBoldText> en una dinámica de economía circular, propiciando la conexión entre comunidad, naturaleza y territorio. Basados en el modelo de gestión de residuos del AMB a través de su experiencia y apoyo técnico. 
        </p>
        <PVQueSonDropdown />
        <div className="flex justify-center sm:mt-5 mt-1">
          <p className="font-thin italic sm:text-base text-sm">*(Plan de Acción Climática, PACmetro,  2023)</p>
        </div>
        <div className="flex justify-center sm:mt-10">
          <span className="font-thin sm:text-2xl text-center">
            <CmBoldText color="customGreen">En nuestra metrópoli</CmBoldText>, sabemos que existen iniciativas locales e internacionales con valiosos conocimientos, por lo que la colaboración es clave.
          </span>
        </div>
      </section>
      <section id="comunidad" className="container mx-auto px-4 sm:pb-10 pb-0">
      <div className="mt-10">
          <CmBanner text="Modelos referentes" icon={assets.pvLogo} />
        </div>
        <div className="mt-5 sm:text-2xl text-lg font-thin">
          <CmBoldText className="text-customGreen">“Puntos Verdes de Barrio” del Área       Metropolitana de Barcelona (AMB).</CmBoldText>
          <p className="text-justify">Se recuperan las buenas prácticas del modelo de gestión de residuos del AMB, particularmente sobre acopio de residuos, el cual se comprende de tres tipologías: Puntos Verdes de Zona, Puntos Verdes Móviles y Puntos Verdes de Barrio. Esta red abarca un total de 142 puntos estratégicamente distribuidos en diez distritos, y en conjunto logran revalorizar un promedio mensual de 120 mil toneladas de residuos. El enfoque replicado para el AMG, son los Puntos Verdes de Barrio, los cuales ofrecen a la ciudadanía actividades como reparaciones, intercambio de artículos y talleres abierto a la comunidad. 
          </p>
          <CmBoldText className="text-customGreen">Colectivo Vecinal Bosque Urbano Tlaquepaque.</CmBoldText>
          <p className="text-justify">“Puntos Verdes de Barrio” del Área Metropolitana de Barcelona (AMB).
            Se recuperan las buenas prácticas del modelo de gestión de residuos del AMB, particularmente sobre acopio de residuos, el cual se comprende de tres tipologías: Puntos Verdes de Zona, Puntos Verdes Móviles y Puntos Verdes de Barrio. Esta red abarca un total de 142 puntos estratégicamente distribuidos en diez distritos, y en conjunto logran revalorizar un promedio mensual de 120 mil toneladas de residuos. El enfoque replicado para el AMG, son los Puntos Verdes de Barrio, los cuales ofrecen a la ciudadanía actividades como reparaciones, intercambio de artículos y talleres abierto a la comunidad. 
            Colectivo Vecinal Bosque Urbano Tlaquepaque.
            Se toma como inspiración la acción ciudadana del colectivo, quienes autogestionan un centro de acopio comunitario de Residuos, el cual a lo largo de dos años de su implementación y operación, ha logrado un promedio anual de acopio y envío a reciclaje de al menos 5 toneladas. Promoviendo con estas acciones la conciencia ambiental y la participación ciudadana para la correcta separación de residuos en su colonia y visitantes del Bosque Urbano Tlaquepaque.
          </p>
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
          <div className="flex justify-center mt-3 w-full h-[80px] sm:space-x-10 space-x-3 py-5">
            <CmImage src={assets.financeEUColor} className="sm:h-[40px] h-[25px]" />
            <CmImage src={assets.ambC} className="sm:h-[40px] h-[25px]" />
            <CmImage src={assets.imeplanC} className="sm:h-[40px] h-[25px]" />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col">
          {PV_MODELOS_QUOTES.map((i, index) => <CmQuote key={index} {...i} color="customGreen" />)}
        </div>
      </section>
      <section id="ubicacion" className="container mx-auto px-4 sm:pb-10 pb-0">
        <CmBanner text="Ubicación" icon={assets.pvLogo} />
        <div className="sm:mt-10 mt-5 font-thin sm:text-2xl flex justify-center">
          <span className="text-center">
            <CmBoldText color="customGreen">El primer módulo está en el Bosque Urbano Tlaquepaque</CmBoldText><br /> y su existencia fortalece el trabajo realizado por el Colectivo Vecinal BUT.
          </span>
        </div>
        <div className="flex justify-center">
          <video
            autoPlay
            controls
            muted
            loop
            src={assets.pvUbicacionVideo}             
            className="my-3 sm:w-3/4 w-full"
          />
        </div>
        <div className="flex sm:flex-row flex-col mt-3">
          <div className="sm:w-1/2 sm:mr-3 mr-0">
            <CmImage src={mapaPV} />
          </div>
          <div className="sm:w-1/2 flex flex-col sm:ml-3 ml-0 sm:text-xl text-justify font-thin">
            <div className="h-[200px]">
              <CmImage 
                src={assets.pvUbicacion} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5">
              <CmBoldText color="customGreen">Cada municipio del AMG tendrá un Punto Verde Metropolitano que podrás visitar, usar y conocer.</CmBoldText>
              <p className="sm:mt-10 mt-5">En cada uno de ellos, se realizarán talleres sobre reparación de artículos y su correcta disposición, además de actividades para concientizar sobre el consumo.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="disenio-caracteristicas" className="container mx-auto px-4 sm:pb-10 pb-0">
        <CmBanner text="Diseño y características" />
        <div className="flex flex-col">
          <span className="font-thin text-center sm:text-2xl text-xl my-5">
            <CmBoldText color="customGreen">Los Puntos Verdes Metropolitanos son espacios vecinales,</CmBoldText><br/>
            por eso su diseño y habilitación integra criterios como:
          </span>
          <PVInfoIcons />
        </div>
        <div className="flex flex-col">
          <div className="w-full bg-customGreen p-5 rounded-2xl text-center">
            <CmBoldText className="sm:text-3xl text-xl text-white">¡Quiero saber más sobre los Puntos Verdes Metropolitanos!</CmBoldText>
          </div>
          <PVDropdown />
          <CmBoldText color="customGreen" className="text-center sm:text-3xl text-xl mt-10">Sigue bajando y descubre más sobre Metro Resilience Guadalajara</CmBoldText>
          <div className="w-full flex justify-center">
            <BsChevronDoubleDown className="mt-2 text-5xl" />
          </div>
        </div>
      </section>
    </>
  );
}