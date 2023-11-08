import { cardData } from "@/data/cards";
import { ManageConsumersCard } from "./manage-consumer-card";
import { Card } from "./card";

export function CardsList() {
  return (
    <div className="flex items-center space-x-4">
      <ManageConsumersCard />
      {cardData.map((data) => {
        return (
          <Card
            Icon={data.Icon}
            count={data.count}
            action={data.action}
            body={data.body}
            className={data.className}
          />
        );
      })}
    </div>
  );
}
