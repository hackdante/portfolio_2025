import { MiniCard } from "@/shared/components/base";
import { CARD_SERVICES } from "@/shared/constants";

export function MiniCardContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start px-5">
      {CARD_SERVICES.map((feat) => (
        <MiniCard
          key={feat.id}
          {...feat}
        />
      ))}
    </div>
  );
}