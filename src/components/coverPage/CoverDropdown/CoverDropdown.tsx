import { CoverDropdownProps } from "../../../types";
import { CoverDropdownHeader } from "./CoverDropdownHeader";
import { CoverDropdownContent } from "./CoverDropdownContent";


export const CoverDropdown = ({ 
  content,
  extraStyles = '',
  width = 'full', 
  padding = '0',
  paddingR = '0',
  paddingL = '0',
  margin = '0',
  marginR = '0',
  marginL = '0',
  specialContent = false,
  title
}: CoverDropdownProps) => {
  return(
    <div className={`
      flex 
      flex-col 
      sm:w-${width} 
      w-100
      p-${padding}
      pr-${paddingR}
      pl-${paddingL}
      m-${margin}
      sm:mr-${marginR}
      sm:ml-${marginL}
      ${extraStyles}
    `}>
      <CoverDropdownHeader title={title} />
      {
        (specialContent) ? content : (
          <CoverDropdownContent>
            { content }
          </CoverDropdownContent>
        )
      }
    </div>
  );
}