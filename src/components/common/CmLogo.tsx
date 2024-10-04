import { assets } from '../../assets';
import { CmImage } from './CmImage';

export const CmLogo = () => {
  return(
    <CmImage
      className="sm:w-[400px] w-[250px]" 
      src={assets.metroLg}
    />
  );
}