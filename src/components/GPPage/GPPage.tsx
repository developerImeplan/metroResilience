import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { VIDEOS } from "../../constants";
import { CmBoldText, CmCoverVideo } from "../common";
import { GPQueSeraDropdown } from "./GPQueSeraDropdown";

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
        <section id="construccion">
          
        </section>
        <section id="aprendizajes"></section>
        <section id="congreso-internacional"></section>
        <section id="entrevistas"></section>
      </div>
    </>
  );
}