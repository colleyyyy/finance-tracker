import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
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
function TransactionsContainer({
  transactionData,
}: {
  transactionData: TransactionSummaryProps;
}) {
  return (
    <Table className="padding mt-12">
      <TableCaption className="font-semibold text-secondary">
        A list of your recent transactions.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Created</TableHead>
          <TableHead>Transaction Type</TableHead>
          <TableHead>Transaction Value</TableHead>
          <TableHead className="text-right">Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactionData.map((tran) => {
          return (
            <TableRow key={tran.id}>
              <TableCell className="font-medium">
                {format(tran.created_at, "MM/dd/yyyy")}
              </TableCell>
              <TableCell>{tran.transaction_type}</TableCell>
              <TableCell>{tran.transaction_value}</TableCell>
              <TableCell className="text-right">{tran.category}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>
            Total:{" "}
            <span className="text-primary">
              {" "}
              {"$"}
              {transactionData.reduce(
                (acc, cur) => acc + Number(cur.transaction_value),
                0
              )}
            </span>
          </TableCell>
          <TableCell className="text-right">
            total transactions: {""}
            <span className="text-primary">{transactionData.length}</span>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
export default TransactionsContainer;
