import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="flex  items-center justify-between padding w-full self-end ">
      <p>&reg; {new Date().getFullYear()} Untitled UI. All right reserved.</p>
      <ul>
        <Button asChild variant={"link"}>
          <NavLink to={""}>Terms</NavLink>
        </Button>
        <Button asChild variant={"link"}>
          <NavLink to={""}>privacy</NavLink>
        </Button>
        <Button asChild variant={"link"}>
          <NavLink to={""}>cookies</NavLink>
        </Button>
      </ul>
    </footer>
  );
}
export default Footer;
