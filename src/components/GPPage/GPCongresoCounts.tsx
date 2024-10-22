import { assets } from "../../assets";
import { GPCongresoCountsProps } from "../../types";

export const GPCongresoCounts = () => {
  return(
    <div className="flex sm:flex-row flex-col justify-between sm:py-20 py-5 sm:space-x-5">
      {
        GP_CONGRESO_COUNTS.map(i => (
          <GPCongresoCountsItem {...i} />
        ))
      }
    </div>
  );
}

export const GPCongresoCountsItem = ({ img }: GPCongresoCountsProps) => {
  return(
    <img 
      src={img}
      className="w-1/3 h-[100px]"
    />
  );
}

const GP_CONGRESO_COUNTS: GPCongresoCountsProps[] = [
  {
    img: assets.congreso1
  },
  {
    img: assets.congreso2
  },
  {
    img: assets.congreso3
  },
]