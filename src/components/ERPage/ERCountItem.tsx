import { ERCountItemProps } from "../../types";

export const ERCountItem = ({
  color,
  number,
  title,
}: ERCountItemProps) => {
  return(
    <div className="flex h-full flex-col items-center w-1/4 h-full">
      <div className={`flex justify-center items-center bg-${color} px-10 rounded-2xl h-[90px] w-full`}>
        <p className="text-white text-5xl font-bold">{ number }</p>
      </div>
      <p className={`text-center mt-2 font-bold sm:text-xl text-${color} leading-4`}>
        { title }
      </p>
    </div>
  );
}