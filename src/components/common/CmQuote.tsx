import { GiSoundWaves } from "react-icons/gi";
import { CmQuoteProps } from "../../types";

export const CmQuote = ({
  color,
  img,
  title,
  text
}: CmQuoteProps) => {
  return (
    <div className="flex flex-col items-center text-center p-4 sm:w-1/3 w-full">
      <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden">
        <img
          src={img}
          alt="imagen de fondo"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
          <div className="bg-white p-10 rounded-full">
            <GiSoundWaves className="w-10 h-10 text-black" />
          </div>
        </div>
      </div>
      <div className={`flex-grow flex justify-center items-center mt-4 p-10 border rounded-3xl border-${color} min-h-[150px]`}>
        <p className={`sm:text-xl text-lg font-semibold text-${color}`}>
          { text }
        </p>
      </div>
      <div className="mt-2 w-full py-3 text-gray-500 bg-customGrayBg">
        <p className="font-bold">{ title }</p>
      </div>
    </div>
  );
}
