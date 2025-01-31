import { useState, useRef } from "react";
import { CmQuoteProps } from "../../types";
import { CmBoldText } from "./CmBoldText";
import { CmPlayIcon } from "./CmPlayIcon";
import { CmPauseIcon } from "./CmPauseIcon";

export const CmQuote = ({
  audio,
  border = true,
  img,
  fontSize = 'sm:text-xl text-lg',
  title,
  subtitle,
  text,
  maxLines = 4,
  largeTitle = false,
  minHeaderHeight = 0,
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
    <div className={`
      flex flex-col items-center text-center p-4 sm:w-1/3 w-full
      ${border ? 'border-2 border-customBlueLighter rounded-lg' : ''} 
    `}>
      <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden">
        <img
          src={img}
          alt="imagen de fondo"
          className="object-cover w-full h-full"
        />
        {
          audio && (
            <div className="absolute inset-0 flex justify-center items-center text-white">
              <div 
                className="rounded-full cursor-pointer mt-20"
                onClick={handleAudioClick}
              >
                {
                  isPlaying ? <CmPauseIcon /> : <CmPlayIcon />
                }
              </div>
            </div>
          )
        }
      </div>
      <div className={`flex-grow flex justify-center rounded-3xl min-h-[150px] mt-5`}>
        <p 
          className={`${fontSize} line-clamp-6 overflow-hidden hover:overflow-auto hover:line-clamp-none transition-all text-center`}
          style={{ maxHeight: `${maxLines * 1.8}rem` }}
        >
          {text}
        </p>
      </div>
      <div className={`${largeTitle ? 'w-full' : 'sm:w-2/3' } text-gray-500 ${minHeaderHeight != 0 ? `h-[${minHeaderHeight}px]` : ''} mt-5`}>
        <CmBoldText color="customBlueLighter" className={`${largeTitle ? 'sm:text-xl text-lg' : 'sm:text-2xl text-xl'}`}>{title}</CmBoldText>
      </div>
      <div className={`text-gray-500`}>
        <p className="text-xl text-customBlueLighter">{subtitle}</p>
      </div>
    </div>
  );
};

