import { CmIconSNProps } from "../../types";

export const CmIconSN = ({ icon, url}: CmIconSNProps) => {
  const Icon = icon;
  return(
    <a href={url} className="bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center">
      <Icon className="text-customPurple text-3xl" />
    </a>
  );
}