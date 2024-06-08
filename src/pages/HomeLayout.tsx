import { Footer, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <Navbar />
      <main className="padding">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default HomeLayout;
