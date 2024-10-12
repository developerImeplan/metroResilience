import { CoverMenuProps } from "../../../types";
import { CoverMenuSection } from "./CoverMenuSection";
import { COVER_MENU_SECTIONS } from "./CoverMenuSections";

export const CoverMenu = ({ complete = true }: CoverMenuProps) => {
  return(
    <div className="flex sm:flex-row flex-col justify-between">
      {
        COVER_MENU_SECTIONS.map(s => (
          <CoverMenuSection { ...s } complete={complete} />
        ))
      }
    </div>
  );
}