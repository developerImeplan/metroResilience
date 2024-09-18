import { GiSoundWaves } from "react-icons/gi";
import { ErQuoteSection } from "../../types";

export const ERQuoteSection = ({
  img,
  title,
  text
}: ErQuoteSection) => {
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
      <div className="mt-4 p-10 border rounded-lg border-blue-300">
        <p className="text-xl font-semibold text-customBlueLighter">
          { text }
        </p>
      </div>
      <div className="mt-2 text-gray-500">
        { title }
      </div>
    </div>
  );
}