import { TransactionCard } from "./index";

function TransactionSummary() {
  return (
    <section className="mt-12 padding w-full">
      <h3 className="text-2xl font-bold mb-6">Transaction Summary</h3>
      <section className=" w-full grid grid-cols-3">
        <TransactionCard
          title={"total income"}
          value={20000}
          icons="move-down-left"
        />
        <TransactionCard
          title={"total expenses"}
          value={20000}
          icons="move-up-right"
        />
        <TransactionCard
          title={"remaining balance"}
          value={20000}
          icons="bar-chart-4"
        />
      </section>
    </section>
  );
}
export default TransactionSummary;
