import { Footer, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="grid grid-rows-[5rem_1fr_3rem] h-screen">
      <Navbar />
      <main className="padding">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default HomeLayout;
