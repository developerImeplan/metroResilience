import sampleVideo from '../../assets/sample_video.mp4';

export const CoverVideo = () => {
  return(
    <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
      <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  );
}