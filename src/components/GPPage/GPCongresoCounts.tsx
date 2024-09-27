import { GPCongresoCountsProps } from "../../types";
import { CmBoldText } from "../common";

export const GPCongresoCounts = () => {
  return(
    <div className="flex sm:flex-row flex-col justify-between mt-5 sm:space-x-5">
      {
        GP_CONGRESO_COUNTS.map(i => (
          <GPCongresoCountsItem {...i} />
        ))
      }
    </div>
  );
}

export const GPCongresoCountsItem = ({
  color,
  title,
  subtitle
}: GPCongresoCountsProps) => {
  return(
    <div className={`flex flex-col items-center justify-center p-5 bg-${color} text-white sm:w-1/3 w-full rounded-3xl sm:mt-0 mt-5`}>
      <CmBoldText className="sm:text-6xl text-5xl">{ title }</CmBoldText>
      <p>{ subtitle }</p>
    </div>
  );
}

const GP_CONGRESO_COUNTS: GPCongresoCountsProps[] = [
  {
    color: 'customPurpleGP',
    title: '+ 20',
    subtitle: 'ciudades'
  },
  {
    color: 'customPurple',
    title: '5',
    subtitle: 'continentes'
  },
  {
    color: 'customPurpleDarker',
    title: '+ 200',
    subtitle: 'asistentes'
  },
]