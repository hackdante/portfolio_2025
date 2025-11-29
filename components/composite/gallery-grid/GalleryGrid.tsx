import { CardV1 } from "@/components/card/card-v1/CardV1";
import { Cardv1UI } from "@/types/global";

interface GalleryGridUI {
  portfolioList: Cardv1UI["cardInfoV1"][];
}

export const GalleryGrid = ({ portfolioList }: GalleryGridUI) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {portfolioList.map((item, index) => (
        <CardV1 key={index} cardInfoV1={item} />
      ))}
    </div>
  );
};
