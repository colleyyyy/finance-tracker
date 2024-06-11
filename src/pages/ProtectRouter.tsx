import useUserStore from "@/store/userStore";
import { redirect } from "react-router-dom";

function ProtectRouter({ children }: { children: React.ReactNode }) {
  const user = useUserStore((state) => state.user);
  const auth = user?.role;
  if (auth !== "authenticated") {
    redirect("/login");
  }
  return <>{children}</>;
}
export default ProtectRouter;
