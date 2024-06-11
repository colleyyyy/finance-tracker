import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/store/userStore";

function ProtectRouter({ children }: { children: React.ReactNode }) {
  const user = useUserStore((state) => state.user);
  const auth = user?.role;
  const navigate = useNavigate();

  useEffect(() => {
    if (auth !== "authenticated") {
      navigate("/login");
    }
  }, [auth, navigate]);

  return <>{children}</>;
}

export default ProtectRouter;
