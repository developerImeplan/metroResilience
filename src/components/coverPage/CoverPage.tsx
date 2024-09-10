import { CoverVideo, CmLogo, CmText, CmPartnersLogos, CoverTitle } from '../';

export const CoverPage = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <CoverVideo />
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4">
          <div className="mt-20">
            <CmLogo />
          </div>
          <CoverTitle />
          <CmPartnersLogos />
          <CmText color='white'>
            Este sitio se ha elaborado con la asistencia financiera de la Unión Europea. El contenido es responsabilidad exclusiva del 
            Imeplan, y bajo ninguna circunstancia debe considerarse como un reflejo de la posición de la Unión Europea.
          </CmText>
        </div>
      </div>
    </section>
  );
};
