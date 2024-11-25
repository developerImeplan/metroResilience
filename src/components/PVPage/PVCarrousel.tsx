import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { CmBanner } from "../common";
import { assets } from "../../assets";
import { PVCarrouselProps } from "../../types";

export const PVCarrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Índice actual
  const [isTransitioning, setIsTransitioning] = useState(false); // Estado de transición

  const handlePrev = () => {
    if (isTransitioning) return;
    const newIndex =
      currentIndex === 0 ? PV_CARROUSEL.length - 1 : currentIndex - 1;
    startTransition(newIndex);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    const newIndex =
      currentIndex === PV_CARROUSEL.length - 1 ? 0 : currentIndex + 1;
    startTransition(newIndex);
  };

  const startTransition = (newIndex: number) => {
    setIsTransitioning(true); // Iniciar transición
    setTimeout(() => {
      setCurrentIndex(newIndex); // Cambiar el índice después de que la transición termine
      setIsTransitioning(false); // Terminar la transición
    }, 500); // Duración de la transición (500ms)
  };

  return (
    <div className="container mx-auto px-4 pt-[65px]">
      {/* Banner dinámico con transición */}
      <div className="pl-5">
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <CmBanner
            text={PV_CARROUSEL[currentIndex].title} // Título dinámico
            icon={assets.pvLogo}
            color="customPinkN"
          />
        </div>
      </div>

      {/* Contenedor principal del carrusel */}
      <div className="flex items-center mt-10 min-h-[400px] sm:min-h-[500px]">
        {/* Botón izquierda */}
        <button
          onClick={handlePrev}
          className="flex justify-center items-center text-slate-400 hover:text-slate-600 text-5xl sm:w-[50px] w-[35px]"
        >
          <MdKeyboardArrowLeft />
        </button>

        {/* Contenido del carrusel */}
        <div className="flex flex-1 sm:flex-row flex-col bg-customGrayBg2 overflow-hidden relative">
          {/* Texto con transición */}
          <div
            className={`sm:w-1/2 p-10 text-justify flex items-center text-lg transition-opacity duration-500 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {PV_CARROUSEL[currentIndex].text}
          </div>

          {/* Imagen con transición */}
          <img
            className={`sm:w-1/2 w-full transition-opacity`}
            src={PV_CARROUSEL[currentIndex].img}
            alt="Imagen carrusel"
          />
        </div>

        {/* Botón derecha */}
        <button
          onClick={handleNext}
          className="flex justify-center items-center text-slate-400 hover:text-slate-600 text-5xl sm:w-[50px] w-[35px]"
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};



const PV_CARROUSEL: PVCarrouselProps[] = [
  {
    title: "PVM Bosque Urbano Tlaquepaque", // Nuevo título
    text: "Inaugurado el 4 de julio de 2024, el PVM BUT es el primer módulo en operar en el AMG, situado en el Bosque Urbano Tlaquepaque, gestionado por la Agencia Metropolitana de Bosques Urbanos, dentro del Fraccionamiento Revolución, municipio de San Pedro Tlaquepaque. Este PVM se suma para apoyar y fortalecer los esfuerzos del Colectivo Vecinal BUT así como de la comunidad en su compromiso por co-crear espacios para aprender e intercambiar experiencias y saberes, además de promover la gestión adecuada de los residuos valorizables.",
    img: assets.pv1,
  },
  {
    title: "PVM Centro de Desarrollo Comunitario Bellavista", // Nuevo título
    text: "Inaugurado el 24 de septiembre de 2024, el PVM CDCB es el segundo módulo en activarse en el AMG. Ubicado en una zona habitacional consolidada de Zapotlanejo, este PVM se integra a un espacio municipal que ofrece actividades culturales y educativas para todas las edades. Con su presencia, el PVM amplía las oportunidades para fomentar la conciencia ambiental y fortalecer la participación de la comunidad en prácticas sostenibles.",
    img: assets.pv2,
  },
  {
    title: "PVM Agencia Municipal Parques del Castillo", // Nuevo título
    text: "Inaugurado el 24 de septiembre de 2024, el PVM AMPC es el tercer módulo en entrar en operación en el AMG. Ubicado junto a la agencia municipal de El Salto, este PVM se encuentra en una posición estratégica para la comunidad, facilitando su acceso y fomentando la participación en actividades sociales y económicas. Gracias a su ubicación cercana a escuelas y tianguis semanales, este PVM tiene un gran potencial para impulsar prácticas de economía circular y la gestión adecuada de residuos",
    img: assets.pv3,
  },
  {
    title: "PVM Módulo de la Delegación Loma Dorada",
    text: "Está situado dentro del municipio de Tonalá, junto al Módulo de la Delegación Loma Dorada, un lugar frecuentado por los habitantes de la zona para llevar a cabo actividades sociales y económicas, dentro de una zona habitacional altamente consolidada con cercanía a equipamientos educativos y comerciales. Comenzó operaciones el 18 de octubre de 2024.",
    img: assets.pv4,
  },
  {
    title: "PVM Parque Vicente Michel",
    text: "Ubicado en el parque municipal Vicente Michel, cercano a zona habitacional de fácil acceso en Juanacatlán. Este PVM se sitúa cerca del ingreso al centro del municipio y cuenta con diversas opciones de transporte cercanas, por lo que se convierte en un punto de referencia claro, ideal para fortalecer la identidad comunitaria y fomentar la cohesión social en temas de medio ambiente y manejo de residuos.",
    img: assets.pv5,
  },
  {
    title: "PVM Centro de Educación y Capacitación para el Desarrollo Sustentable",
    text: "Ubicado en el municipio de Tlajomulco de Zúñiga, dentro del CECDS, el cual es un equipamiento dedicado a compartir saberes mediante talleres y actividades comunitarias, como la separación de residuos y huertos urbanos. Su ubicación y antecedentes lo posicionan como un punto estratégico para difundir y fortalecer prácticas de Economía Circular en la comunidad.",
    img: assets.pv5,
  },
  {
    title: "PVM Jardín Obregón",
    text: "Situado en un predio municipal a la entrada de Ixtlahuacán de los Membrillos, este PVM se convierte en un punto de alta visibilidad y afluencia, accesible por distintos medios de transporte. Su proximidad a la Casa de la Cultura y al centro de población refuerza su carácter como un espacio socialmente identificable y de fácil acceso para la comunidad.",
    img: assets.pv5,
  },
  {
    title: "PVM CENTRO DE ATENCIÓN AL ADULTO MAYOR",
    text: "Localizado en el municipio de Guadalajara, dentro de un equipamiento del DIF con una agenda comunitaria amplia y constante, orientada a un grupo etario clave. Este PVM cuenta con una ubicación de fácil acceso e identificación en un área urbana consolidada que asegura una afluencia continua de visitantes, facilitando así la difusión y el acceso a servicios de Economía Circular.",
    img: assets.pv5,
  },
  {
    title: "PVM Unidad Administrativa Las Águilas",
    text: "Se sitúa en las inmediaciones de un equipamiento administrativo en el municipio de Zapopan, en una de las avenidas más transitadas de la metrópoli. Este PVM se beneficia de una alta afluencia diaria de personas, lo que lo convierte en un espacio estratégico. Además, concentra esfuerzos previos para el acopio de residuos, por lo que su presencia complementa y refuerza estas dinámicas.",
    img: assets.pv5,
  },
];
