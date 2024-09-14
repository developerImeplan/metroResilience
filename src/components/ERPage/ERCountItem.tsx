import { ERCountItemProps } from "../../types";

export const ERCountItem = ({
  number,
  title,
  marginRight = true
}: ERCountItemProps) => {
  return(
    <div className={`flex flex-col ${ marginRight ? 'mr-10' : '' }`}>
      <div className="flex justify-center items-center">
        { number }
      </div>
      <p className="text-center">
        { title }
      </p>
    </div>
  );
}