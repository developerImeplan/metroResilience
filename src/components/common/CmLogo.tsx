import { CmImage } from './CmImage';
import logo from '../../assets/logo.png';

export const CmLogo = () => {
  return(
    <CmImage
      className="sm:w-[400px] w-[250px]" 
      src={logo}
    />
  );
}