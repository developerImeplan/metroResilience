import { COVER_TITLE_TEXTS } from "../../constants";
import { CoverTitleTextProps } from "../../types";

const CoverTitleText: React.FC<CoverTitleTextProps> = ({ text }) => (
  <p className="font-bold sm:text-6xl text-4xl text-white">
    { text }
  </p>
) 

export const CoverTitle = () => {
  return(
    <div className="mt-20">
      {
        COVER_TITLE_TEXTS.map((text, index) => (
          <CoverTitleText
            text={text}
            key={index}
          />
        ))
      }
    </div>
  );
}