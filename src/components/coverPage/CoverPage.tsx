import { CoverVideo, CmLogo, CmText, CmPartnersLogos } from '../';

export const CoverPage = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <CoverVideo />
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4">
          <div className="mt-20">
            <CmLogo />
          </div>
          <div>
            <CmText variant='6xl' color='white'>
              La clave
            </CmText>
            <CmText variant='6xl' color='white'>
              para el futuro de
            </CmText>
            <CmText variant='6xl' color='white'>
              nuestas ciudades
            </CmText>
          </div>
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
