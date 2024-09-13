import { CmVideoProps } from '../../types';

export const CmVideo = ({ url }: CmVideoProps) => {
  return(
    <video className="absolute top-0 z-10 left-0 w-full h-full object-cover" controls loop>
      <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  );
}