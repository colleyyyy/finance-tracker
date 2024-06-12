import { TransactionCard } from "./index";

interface Props {
  category?: string;
  created_at: string;
  id: string;
  transaction_type?: string;
  transaction_value?: string; // Keeping it as string since you're converting it later
}

interface TransactionSummaryProps {
  transactionData: Props[];
}

function TransactionSummary({ transactionData }: TransactionSummaryProps) {
  // Calculate total income
  const totalIncome = transactionData
    .filter((tran: Props) => tran.transaction_type === "income")
    .reduce((acc, cur) => {
      return acc + (cur.transaction_value ? Number(cur.transaction_value) : 0);
    }, 0);

  // Calculate total expenses
  const totalExpenses = transactionData
    .filter((tran: Props) => tran.transaction_type === "expense")
    .reduce((acc, cur) => {
      return acc + (cur.transaction_value ? Number(cur.transaction_value) : 0);
    }, 0);

  // Calculate remaining balance
  const remainingBalance = totalIncome - totalExpenses;

  return (
    <section className="mt-12 padding w-full">
      <h3 className="text-2xl font-bold mb-6">Transaction Summary</h3>
      <section className="w-full grid grid-cols-3">
        <TransactionCard
          title={"Total Income"}
          value={totalIncome}
          icons="move-down-left"
          numTransaction={String(transactionData.length)}
        />
        <TransactionCard
          title={"Total Expenses"}
          value={totalExpenses}
          icons="move-up-right"
          numTransaction={String(transactionData.length)}
        />
        <TransactionCard
          title={"Remaining Balance"}
          value={remainingBalance}
          icons="bar-chart-4"
          numTransaction={String(transactionData.length)}
        />
      </section>
    </section>
  );
}

export default TransactionSummary;
