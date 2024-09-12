import { IoIosArrowUp } from "react-icons/io";

import { CoverMenuItem } from "./CoverMenuItem";

export const CoverMenuSection = () => {
  return(
    <div className="flex flex-col">
      <div className="cursor-pointer flex justify-center items-center p-5 my-5">
        <p className="text-customMain text-3xl font-semibold mr-2">Estrategia de resiliencia</p>
        <IoIosArrowUp />
      </div>
      <div>
        <CoverMenuItem text="¿Qué es?" />
      </div>
    </div>
  );
}