import { COVER_TITLE_TEXTS } from "../../constants";
import { CoverTitleTextProps } from "../../types";
import { CmText } from "../common";

const CoverTitleText: React.FC<CoverTitleTextProps> = ({ text }) => (
  <CmText variant='6xl' color='white'>
    { text }
  </CmText>
) 

export const CoverTitle = () => {
  return(
    <div>
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