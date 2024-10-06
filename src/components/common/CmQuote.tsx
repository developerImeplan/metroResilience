import { useState, useRef } from "react";
import { GiSoundWaves } from "react-icons/gi";
import { IoPauseOutline } from "react-icons/io5";
import { CmQuoteProps } from "../../types";

export const CmQuote = ({
  audio,
  color,
  img,
  fontSize = 'sm:text-xl text-lg',
  title,
  text
}: CmQuoteProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleAudioClick = () => {
    if (audio) {
      if (!audioRef.current) {
        audioRef.current = new Audio(audio);

        audioRef.current.onended = () => {
          setIsPlaying(false);
        };
      }

      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col items-center text-center p-4 sm:w-1/3 w-full">
      <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden">
        <img
          src={img}
          alt="imagen de fondo"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
          <div 
            className="bg-white p-10 rounded-full cursor-pointer"
            onClick={handleAudioClick}
          >
            {
              isPlaying ? <IoPauseOutline className="w-10 h-10" /> : <GiSoundWaves className="w-10 h-10" />
            }
          </div>
        </div>
      </div>
      <div className={`flex-grow flex justify-center items-center mt-4 p-10 border rounded-3xl border-${color} min-h-[150px]`}>
        <p className={`${fontSize} font-semibold text-${color}`}>
          {text}
        </p>
      </div>
      <div className="mt-2 w-full py-3 text-gray-500 bg-customGrayBg">
        <p className="font-bold">{title}</p>
      </div>
    </div>
  );
};
