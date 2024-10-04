import { CM_PARTNERS_LOGOS } from '../../constants';
import { CmImage } from './CmImage';

export const CmPartnersLogos = () => {

  const logoStyle = "sm:w-1/3 w-1/4 sm:h-[50px]";

  return(
    <div className="sm:py-10 py-10 flex sm:w-1/2 w-full sm:space-x-20 space-x-5">
      { CM_PARTNERS_LOGOS.map(l => (
        <CmImage src={l} className={logoStyle} />
      )) }
    </div>
  );
}