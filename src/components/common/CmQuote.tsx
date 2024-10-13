import { useState, useRef } from "react";
import { GiSoundWaves } from "react-icons/gi";
import { IoPauseOutline } from "react-icons/io5";
import { CmQuoteProps } from "../../types";
import { CmBoldText } from "./CmBoldText";

export const CmQuote = ({
  audio,
  img,
  fontSize = 'sm:text-xl text-lg',
  title,
  text,
  maxLines = 4,
  largeTitle = false,
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
        {
          audio && (
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
          )
        }
      </div>
      <div className={`mt-5 ${largeTitle ? 'w-full' : 'sm:w-2/3' } py-3 text-gray-500`}>
        <CmBoldText color="customBlueLighter" className="sm:text-2xl text-xl">{title}</CmBoldText>
      </div>
      <div className={`flex-grow flex justify-center rounded-3xl min-h-[150px]`}>
        <p 
          className={`${fontSize} line-clamp-${maxLines} overflow-hidden hover:overflow-auto hover:line-clamp-none transition-all text-justify`}
          style={{ maxHeight: `${maxLines * 1.8}rem` }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

