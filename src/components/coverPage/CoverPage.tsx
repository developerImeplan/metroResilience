import { CoverVideo, CmLogo, CmPartnersLogos, CoverTitle, CoverPartner, CoverDropdown } from '../';
import { COVER_PARTNERS } from '../../constants';
import { COVER_DROPDOWNS } from './CoverDropdowns';

export const CoverPage = () => {
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <CoverVideo />
        <div className="relative z-10 w-full">
          <div className="container h-screen flex flex-col justify-between mx-auto px-4">
            <div className="sm:mt-20 mt-5">
              <CmLogo />
            </div>
            <div className="pb-10">
              <CoverTitle />
              <CmPartnersLogos />
              <div className="sm:px-20 px-5">
                <p className="text-center text-white font-thin sm:text-lg text-sm">
                  Este sitio se ha elaborado con la asistencia financiera de la Unión Europea. El contenido es responsabilidad exclusiva del 
                  Imeplan, y bajo ninguna circunstancia debe considerarse como un reflejo de la posición de la Unión Europea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-10">
            <p className="text-customMain sm:text-5xl text-3xl font-bold">¿Qué es?</p>
          </div>
          <p className="text-customMain sm:text-4xl text:2xl sm:leading-10 leading-6 text-center font-thin">
            <span className="font-bold">Metro Resilience Guadalajara (MRG) o  Metrópoli Resiliente, por su adaptación al español, reúne esfuerzos comunitarios, locales e internacionales</span>, para fortalecer la gobernanza con el fin de responder, adaptar y prosperar ante los desafíos urbanos en las Áreas Metropolitanas de Guadalajara y Barcelona.
          </p>
          <p className="text-customMain sm:text-2xl text:xl sm:leading-8 leading-5 text-center font-thin my-10">
            <span className="font-bold">Es una acción de cooperación internacional con duración de 3 años, la cual es posible gracias al financiamiento de la Unión Europea y el programa</span> <span className="italic">Asociación para ciudades sostenibles.</span>
          </p>
          <div className="flex justify-center items-end">
            {
              COVER_PARTNERS.map((c, index) => (
                <CoverPartner
                  key={index}
                  title={c.title}
                  src={c.src}
                  url={c.url}
                />
              ))
            }
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-customMain flex justify-center rounded-2xl p-5">
          <p className="sm:text-5xl text-2xl text-center font-bold text-white">¡Conoce más sobre Metrópoli Resiliente!</p>
        </div>
        <div className="flex flex-col">
          <div className="mt-5 flex sm:flex-row flex-col w-100">
            <CoverDropdown { ...COVER_DROPDOWNS[0] } />
            <CoverDropdown { ...COVER_DROPDOWNS[1] } />
          </div>
          <div className="mt-5">
            <CoverDropdown { ...COVER_DROPDOWNS[2] } />
          </div>
          <div className="mt-5">
            <CoverDropdown { ...COVER_DROPDOWNS[3] } />
          </div>
        </div>
      </section>
    </>
  );
};
