import { CoverDropdownProps } from "../../../types";
import { CoverDropdownHeader } from "./CoverDropdownHeader";
import { CoverDropdownContent } from "./CoverDropdownContent";
import { useState } from "react";


export const CoverDropdown = ({ 
  content,
  extraStyles = '',
  headerBg,
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

  const [show, setShow] = useState(false);

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
      my-3
    `}>
      <CoverDropdownHeader 
        bg={headerBg}
        title={title} 
        onClick={() => setShow(p => !p)}
      />
      {
        (show) ? (
          (specialContent) ? content : (
            <CoverDropdownContent>
              { content }
            </CoverDropdownContent>
          )
        ) : null
      }
    </div>
  );
}