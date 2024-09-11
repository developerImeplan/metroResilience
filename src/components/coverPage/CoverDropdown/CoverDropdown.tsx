import { CoverDropdownProps } from "../../../types";
import { CoverDropdownHeader } from "./CoverDropdownHeader";
import { CoverDropdownContent } from "./CoverDropdownContent";


export const CoverDropdown = ({ 
  content,
  width = 'full', 
  padding = '0',
  paddingR = '0',
  paddingL = '0',
  margin = '0',
  marginR = '0',
  marginL = '0',
  title
}: CoverDropdownProps) => {
  return(
    <div className={`
      flex 
      flex-col 
      w-${width} 
      p-${padding}
      pr-${paddingR}
      pl-${paddingL}
      m-${margin}
      mr-${marginR}
      ml-${marginL}
    `}>
      <CoverDropdownHeader title={title} />
      <div>
        <CoverDropdownContent>
          { content }
        </CoverDropdownContent>
      </div>
    </div>
  );
}