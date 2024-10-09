import { CmVideoProps } from '../../types';

export const CmVideo = ({ autoplay = true, className, muted = true, url }: CmVideoProps) => {
  return(
    <video
      autoPlay={autoplay}
      controls
      muted={muted}
      loop
      src={url}             
      className={className}
    />
  );
}