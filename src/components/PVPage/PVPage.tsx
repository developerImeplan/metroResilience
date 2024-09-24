import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { VIDEOS } from "../../constants";
import { CmBanner, CmBoldText, CmCoverVideo, CmImage, CmQuote, CmVideo } from "../common";
import { PVQueSonDropdown } from "./PVQueSonDropdown";
import { PV_MODELOS_IMGS } from "./PVModelosImgs";
import { PV_MODELOS_QUOTES } from "./PVModelosQuotes";

import mapaPV from "../../assets/mapa_pvs.png";
import renderPV from "../../assets/pv_render.png";

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
        video={VIDEOS.coverVideo} 
        title="Puntos Verdes Metropolitanos"
      />
      <section id="que-son" className="container mx-auto px-4 pt-10 sm:pb-10 pb-0">
        <div className="w-full flex justify-center items-center">
          <p className="sm:text-3xl text-lg text-center font-bold text-customMain">¿Qué son?</p>
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
          <CmBanner text="Modelos referentes" />
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
          <div className="flex justify-center mt-3">
            <CmImage src="https://placehold.co/600x80" />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col">
          {PV_MODELOS_QUOTES.map((i, index) => <CmQuote key={index} {...i} color="customGreen" />)}
        </div>
        <CmBanner text="Ubicación" />
        <div className="sm:mt-10 mt-5 font-thin sm:text-2xl flex justify-center">
          <span className="text-center">
            <CmBoldText color="customGreen">El primer módulo está en el Bosque Urbano Tlaquepaque</CmBoldText><br /> y su existencia fortalece el trabajo realizado por el Colectivo Vecinal BUT.
          </span>
        </div>
        <CmVideo url={VIDEOS.coverVideo} />
        <div className="flex sm:flex-row flex-col mt-3">
          <div className="sm:w-1/2 sm:mr-3 mr-0">
            <CmImage src={mapaPV} />
          </div>
          <div className="sm:w-1/2 flex flex-col sm:ml-3 ml-0 sm:text-xl text-justify font-thin">
            <CmImage 
              src={renderPV} 
              className="w-full"
            />
            <div className="mt-5">
              <CmBoldText color="customGreen">Cada municipio del AMG tendrá un Punto Verde Metropolitano que podrás visitar, usar y conocer.</CmBoldText>
              <p className="sm:mt-10 mt-5">En cada uno de ellos, se realizarán talleres sobre reparación de artículos y su correcta disposición, además de actividades para concientizar sobre el consumo.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}