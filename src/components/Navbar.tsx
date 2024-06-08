import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
function Navbar() {
  return (
    <header className="padding flex justify-between">
      <h1 className="text-xl font-bold">
        Finance <span className="text-primary capitalize">tracker</span>
      </h1>

      <nav>
        <ul>
          <Button asChild size={"sm"} className="rounded-md" variant={"link"}>
            <NavLink to="/login">login</NavLink>
          </Button>
          <Button asChild size={"sm"} className="rounded-md">
            <NavLink to="/register">sign up</NavLink>
          </Button>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
