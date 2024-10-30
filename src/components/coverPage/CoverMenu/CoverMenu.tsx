import { CoverMenuProps } from "../../../types";
import { CmBoldText } from "../../common";
import { CoverMenuSection } from "./CoverMenuSection";
import { COVER_MENU_SECTIONS } from "./CoverMenuSections";

export const CoverMenu = ({ complete = true, current }: CoverMenuProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full text-center bg-[#d8d8d8] py-2 rounded-tl-3xl rounded-tr-3xl">
        <CmBoldText className="text-[#6193a5] text-2xl">Conoce más</CmBoldText>
      </div>
      <div className="w-full flex sm:flex-row flex-col rounded-bl-3xl rounded-br-3xl">
        {
          COVER_MENU_SECTIONS.filter(s => s.id !== current).map((s, i) => (
            <CoverMenuSection { ...s } complete={complete} index={i} />
          ))
        }
      </div>
    </div>
  );
}