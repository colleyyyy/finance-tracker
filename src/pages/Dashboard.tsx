import {
  TopHeader,
  Footer,
  TransactionSummary,
  Modal,
  Transaction,
} from "@/components";
import TransactionsContainer from "@/components/TransactionsContainer";
import { Separator } from "@/components/ui/separator";
import { getCurrentUser } from "@/features/supabaseAuth";
import { getAllTransactions } from "@/features/supabaseDb";
import useUserStore from "@/store/userStore";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [transactionData, setTransactionData] = useState([]);
  const setUserName = useUserStore((state) => state.setUserName);
  const userName = useUserStore((state) => state.user?.name);
  const setUserProfile = useUserStore((state) => state.setUserProfile);
  const { user: user2 } = useLoaderData();

  useEffect(() => {
    if (user2) {
      setUserName(user2.first_name);
      const obj = {
        name: user2?.first_name || "undefined",
        id: user2?.sub,
        role: user2?.role,
      };
      setUserProfile(obj);
    }
  }, [user2, setUserName, setUserProfile]);
  useEffect(() => {
    async function getAll() {
      const transactions = await getAllTransactions(user2.sub);
      if (transactions) {
        setTransactionData(transactions);
      } else {
        console.log("No transactions found.");
      }
    }

    if (user2?.sub) {
      getAll();
    }
  }, [user2, showModal]);
  return (
    <div className="grid grid-rows-[5rem_auto_auto_1fr_5rem] h-screen">
      <TopHeader userName={userName} setShowModal={setShowModal} />
      <Separator className="h-1 max-w-[85vw] mx-auto" />
      {transactionData.length > 0 && (
        <TransactionSummary transactionData={transactionData} />
      )}
      {transactionData.length > 0 && (
        <TransactionsContainer transactionData={transactionData} />
      )}
      {showModal && (
        <Modal>
          <Transaction setShowModal={setShowModal} />
        </Modal>
      )}{" "}
      <Footer />
    </div>
  );
}

export async function loader() {
  const { user } = await getCurrentUser();

  if (user === null || user === undefined) return null;

  return { user };
}

export default Dashboard;
