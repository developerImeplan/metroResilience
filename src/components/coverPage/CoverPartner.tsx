import { CoverPartnerProps } from "../../types";

export const CoverPartner = ({ title, src }: CoverPartnerProps) => {
  return (
    <div 
      className={`sm:h-40 h-20 sm:mx-5 mx-1 ${title ? 'flex flex-col justify-between' : 'flex items-end'}`}
    >
      {title && (
        <p className="text-customMain font-thin sm:text-base text-xs">
          {title}
        </p>
      )}
      <img 
        src={src} 
        alt="partner" 
        className="max-w-full"
      />
    </div>
  );
};
