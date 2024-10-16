import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Si no se encuentra el elemento, desplazar hacia arriba
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Si no hay hash en la URL, también desplazarse hasta arriba
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

}