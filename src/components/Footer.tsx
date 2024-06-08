import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

function Footer() {
  return (
    <div className="flex  items-center justify-between padding">
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
    </div>
  );
}
export default Footer;
