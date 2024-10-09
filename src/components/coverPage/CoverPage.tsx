import { CoverPartner, CoverDropdown, CmSelectToDisplayLabel, CoverMenu, CmBoldText, CoverReturnIcon, CmHeader, CmImage, CoverTitle, CmVideo } from '../';
import { assets } from '../../assets';
import { COVER_PARTNERS } from '../../constants';
import { CmSubtitle } from '../common/CmSubtitle';
import { COVER_DROPDOWNS } from './CoverDropdowns';

export const CoverPage = () => {
  return (
    <>
      <section className="min-h-screen">
        <CmHeader />
        <div className="container mx-auto px-4">
          <div className="flex sm:flex-row sm:items-center flex-col sm:mt-20 mt-10">
            <CmImage src={assets.metroCLg} className="sm:h-[214px] h-[150px] sm:mb-0 mb-10" />
            <CoverTitle />
          </div>
          <div className="flex justify-center">
            <CmVideo   
              autoplay={false}
              muted={false}
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
          <div className="flex justify-center items-center mb-10">
            <CoverReturnIcon />
            <p className="text-customMain sm:text-5xl text-3xl font-bold mx-2">¿Qué es?</p>
            <CoverReturnIcon />
          </div>
          <p className="text-customMain sm:text-4xl text:2xl sm:leading-10 leading-6 text-center font-thin">
            <CmBoldText>Metro Resilience Guadalajara (MRG) o  Metrópoli Resiliente, por su adaptación al español, reúne esfuerzos comunitarios, locales e internacionales</CmBoldText>, para fortalecer la gobernanza con el fin de responder, adaptar y prosperar ante los desafíos urbanos en las Áreas Metropolitanas de Guadalajara y Barcelona.
          </p>
          <p className="text-customMain sm:text-2xl text:xl sm:leading-8 leading-5 text-center font-thin my-10">
            <CmBoldText>Es una acción de cooperación internacional con duración de 3 años, la cual es posible gracias al financiamiento de la Unión Europea y el programa</CmBoldText> <span className="italic">Asociación para ciudades sostenibles.</span>
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
        <CmSelectToDisplayLabel />
        <div className="bg-customMain flex justify-center rounded-2xl p-5 mt-5">
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
      <section className="container mx-auto px-4 pb-20">
        <div className="flex justify-center">
          <CmSubtitle text="La acción cuenta con tres componentes" />
        </div>
        <CmSelectToDisplayLabel />
        <CoverMenu />
        <div className="flex justify-center mt-10">
          <CmSubtitle text="¡Conoce cada uno de ellos!" />
        </div>
      </section>
    </>
  );
};