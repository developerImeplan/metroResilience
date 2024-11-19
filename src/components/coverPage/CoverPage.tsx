import { CoverPartner, CoverDropdown, CoverMenu, CmBoldText, CmHeader, CmImage, CoverTitle, CmVideo, CmBanner, CmFooter } from '../';
import { assets } from '../../assets';
import { COVER_PARTNERS } from '../../constants';
import { COVER_DROPDOWNS } from './CoverDropdowns';

export const CoverPage = () => {
  return (
    <>
      <section className="min-h-screen">
        <CmHeader />
        <div className="container mx-auto px-4">
          <div className="flex sm:flex-row items-center flex-col sm:mt-20 mt-10">
            <CmImage src={assets.metroCLg} className="sm:h-[214px] h-[120px] sm:w-auto w-[300px] sm:mb-0 mb-10" />
            <CoverTitle />
          </div>
          <div className="flex justify-center">
            <CmVideo   
              autoplay={true}
              muted={true}
              url={assets.videoCover}   
              className="my-3 sm:w-3/4 w-full py-10"
            />
          </div>
          <div className="sm:px-20 px-5">
            <p className="text-center font-thin sm:text-lg text-sm">
              Este sitio se ha elaborado con la asistencia financiera de la Unión Europea. El contenido es responsabilidad exclusiva del 
              Imeplan, y bajo ninguna circunstancia debe considerarse como un reflejo de la posición de la Unión Europea.
            </p>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden py-10">
        <div className="container mx-auto px-4">
          <CmBanner text="¿Qué es?" color="customPinkN" icon={assets.iconReturn} />
          <div className="text-customGrayDarker sm:text-2xl text:xl font-thin text-justify flex sm:space-x-10 sm:space-y-0 space-y-5 sm:mt-10 sm:flex-row flex-col">
            <p>
              <CmBoldText className="text-customGreenN">Metro Resilience Guadalajara (MRG) o  Metrópoli Resiliente,</CmBoldText> por su adaptación al español, reúne <CmBoldText color="customGreenN">esfuerzos comunitarios, locales e internacionales,</CmBoldText> para fortalecer la gobernanza con el fin de responder, adaptar y prosperar ante los desafíos urbanos en las Áreas Metropolitanas de Guadalajara (AMG) y Barcelona (AMB).
            </p>
            <p>
              <span className="text-customPinkN font-medium">Es una acción de cooperación internacional con duración de 3 años (2022-2025), la cual es posible gracias al financiamiento de la Unión Europea y el programa</span> <span className="italic">Asociación para ciudades sostenibles.</span>
            </p>
          </div>
          <div className="flex justify-center">
            <div className='flex sm:w-2/3 sm:space-x-10'>
              {
                COVER_PARTNERS.map((c, index) => (
                  <CoverPartner
                    key={index}
                    src={c.src}
                    url={c.url}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className="bg-customSectionBg">
        <div className='container mx-auto py-20 px-4 pb-20 '>
          <p className="sm:text-5xl text-4xl font-black text-customGreenN sm:mb-10 mb-5">Conoce más</p>
          <div className="flex flex-col">
            {COVER_DROPDOWNS.map(d => <CoverDropdown {...d} />)}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center">
          <p className="sm:text-5xl text-3xl text-center font-black text-customPurple">La acción cuenta con 3 componentes</p>
          <p className="sm:text-5xl text-2xl text-center font-semibold text-customPurple mt-5 mb-10">¡Conoce cada uno de ellos!</p>
        </div>
        <CoverMenu current="HOME" />
      </section>
      <CmFooter />
      <div className='bg-[#89b4c6] bg-[#424778] bg-customPinkN bg-customGreenN text-[#89b4c6] text-[#424778]'></div>
    </>

  );
};