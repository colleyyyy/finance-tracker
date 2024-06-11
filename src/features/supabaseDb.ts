import supabase from "@/database/supabase";

interface TransactionType {
  id: string;
  transactionType: string;
  transactionValue: string;
  category: string;
}
export async function addTransaction(obj: TransactionType) {
  try {
    const { data, error } = await supabase.from("transaction_table").insert({
      transaction_type: obj.transactionType,
      transaction_value: Number(obj.transactionValue),
      category: obj.category,
      //   user_id: obj.id,
    });

    console.log(obj);

    if (error) {
      console.error("Error inserting transaction:", error);
      return {
        error:
          error.message || "An error occurred while inserting the transaction.",
      };
    }

    return { data };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { error: "An unexpected error occurred." };
  }
}
