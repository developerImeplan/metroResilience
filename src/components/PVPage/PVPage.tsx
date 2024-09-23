import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { VIDEOS } from "../../constants";
import { CmCoverVideo } from "../common";

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
        
      </section>
    </>
  );
}