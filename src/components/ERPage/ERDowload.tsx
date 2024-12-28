import { ERDowloadProps } from "../../types";
import { CmImage } from "../common";
import { GoDownload } from "react-icons/go";

export const ERDowload = ({
  img,
  title,
  doc,
  marginR
}: ERDowloadProps) => {
  return(
    <div className={`flex flex-col items-center sm:mb-0 mb-10 ${marginR ? 'sm:mr-10 mr-0' : ''}`}>
      <CmImage src={img} className="h-[350px]" />
      <a 
        href={doc}
        download
        className="w-60 py-5 bg-customBlueLighterN rounded-xl font-bold text-white mt-5 flex justify-start items-center px-5 min-h-[80px]"
      >
        <GoDownload className="mr-4 text-3xl" />
        <p className="w-2/3 leading-5 text-center">
          { title }
        </p>
      </a>
    </div>
  );
}