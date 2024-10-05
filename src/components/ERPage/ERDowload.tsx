import { ERDowloadProps } from "../../types";
import { CmImage } from "../common";

export const ERDowload = ({
  img,
  title,
  doc,
  marginR
}: ERDowloadProps) => {
  return(
    <div className={`flex flex-col items-center sm:mb-0 mb-10 ${marginR ? 'sm:mr-10 mr-0' : ''}`}>
      <CmImage src={img} className="h-full" />
      <p className="text-center font-bold my-4 text-xl">{title}</p>
      <a 
        href={doc}
        download
        className="px-20 py-5 bg-customBlueLighter rounded-xl font-bold text-white" 
      >
        Descarga
      </a>
    </div>
  );
}