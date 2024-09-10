import { CoverVideo, CmLogo, CmText } from '../';

export const CoverPage = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <CoverVideo />
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4">
          <div className="mt-20">
            <CmLogo />
          </div>
          <CmText variant='text6Xl'>
            La clave para el futuro de nuestas ciudades
          </CmText>
        </div>
      </div>
    </section>
  );
};
