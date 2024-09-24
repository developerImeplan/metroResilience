import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { VIDEOS } from "../../constants";
import { CmBanner, CmBoldText, CmCoverVideo, CmImage } from "../common";
import { PVQueSonDropdown } from "./PVQueSonDropdown";
import { PV_MODELOS_IMGS } from "./PVModelosImgs";

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
      </section>
    </>
  );
}