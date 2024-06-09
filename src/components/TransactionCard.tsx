import { MoveUpRight, MoveDownLeft, BarChart4 } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  title: string;
  icons?: string;
  value: number;
}
function TransactionCard({ title, icons, value }: Props) {
  let displayIcons =
    icons === "move-down-left" ? <MoveDownLeft /> : <MoveUpRight />;

  if (icons === "bar-chart-4") {
    displayIcons = <BarChart4 />;
  }
  return (
    <article className="flex items-center gap-x-4">
      <div className="p-2 border-solid border-2">
        <Button asChild size={"icon"}>
          {displayIcons}
        </Button>
      </div>
      <div className="capitalize flex flex-col gap-y-2">
        <h2 className="font-semibold text-xl">{title}</h2>
        {icons === "move-down-left" && (
          <p className="text-primary">+${value}</p>
        )}
        {icons === "move-up-right" && (
          <p className="text-destructive">-${value}</p>
        )}{" "}
        {icons === "bar-chart-4" && <p className="text-black">${value}</p>}
        <p className="font-light text-sm ">in 24 transaction</p>
      </div>
    </article>
  );
}
export default TransactionCard;
