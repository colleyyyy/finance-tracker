import { TopHeader, Footer, TransactionSummary } from "@/components";
import { Separator } from "@/components/ui/separator";
import { getCurrentUser } from "@/features/supabaseAuth";
import useUserStore from "@/store/userStore";
import { Outlet, useLoaderData } from "react-router-dom";

function Dashboard() {
  const setUserName = useUserStore((state) => state.setUserName);
  const userName = useUserStore((state) => state.name);

  const { user } = useLoaderData();

  setUserName(user.user_metadata.first_name);

  return (
    <div className="grid grid-rows-[5rem_auto_1fr_5rem] h-screen">
      <TopHeader userName={userName} />
      <Separator className="h-1 max-w-[85vw] mx-auto" />
      <TransactionSummary />
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
