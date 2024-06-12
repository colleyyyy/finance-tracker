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

export async function getAllTransactions(id: string) {
  try {
    let { data, error } = await supabase
      .from("transaction_table")
      .select("*")
      .eq("user_id", id);

    if (error) {
      throw error;
    }

    console.log("Transactions:", data);
    return data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return null;
  }
}
