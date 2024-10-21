import { ER_PILLS } from "../../constants";
import { ERPillProps } from "../../types";

export const ERPills = () => {
  return (
    <div className="flex w-full sm:justify-end justify-center flex-wrap">
      { ER_PILLS.map(i => (<ERPill {...i} />)) }
    </div>
  )
}

const ERPill = ({ bg }: ERPillProps) => {
  return(
    <div className="sm:w-1/2 flex justify-end">
      <img 
        src={bg}
        className="sm:h-[100px] h-[80px] object-cover flex justify-start items-center px-5" 
      />
    </div>
  );
}