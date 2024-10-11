import { useState } from "react";
import { CmDropdownProps } from "../../types";

export const CmDropdown = ({
  titleComponent,
  children
}: CmDropdownProps) => {

  const [showContent, setShowContent] = useState(true);

  return(
    <div className="flex flex-col h-full">
      <div className="cursor-pointer z-10" onClick={() => setShowContent(show => !show)}>
        { titleComponent }
      </div>
      { showContent ? (
        <div className="h-full">
          { children }
        </div>
      ) : null }
    </div>
  );
}