import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { VIDEOS } from "../../constants";
import { CmBoldText, CmCoverVideo } from "../common";
import { PVQueSonDropdown } from "./PVQueSonDropdown";

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
      </section>
    </>
  );
}