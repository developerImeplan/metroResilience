import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { VIDEOS } from "../../constants";
import { CmCoverVideo } from "../common";

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
      <section id="que-es"></section>
      <section id="vision-objetivo"></section>
      <section id="construccion"></section>
      <section id="aprendizajes"></section>
      <section id="congreso-internacional"></section>
      <section id="entrevistas"></section>
    </>
  );
}