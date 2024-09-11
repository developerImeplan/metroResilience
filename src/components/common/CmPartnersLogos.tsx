import { CmImage } from './CmImage';
import partnersLogos from '../../assets/partners.png';

export const CmPartnersLogos = () => {
  return(
    <div className="sm:py-20 py-10">
      <CmImage 
        src={partnersLogos} 
        className="sm:w-[650px] w-[320px]"
      />
    </div>
  );
}