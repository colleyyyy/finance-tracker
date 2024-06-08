import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { SunMoon } from "lucide-react";
import useThemeStore from "@/store/themeStore";
function Navbar() {
  const setTheme = useThemeStore((state) => state.setTheme);
  return (
    <header className="padding flex justify-between">
      <h1 className="text-xl font-bold">
        Finance <span className="text-primary capitalize">tracker</span>
      </h1>

      <nav>
        <ul className="flex items-center gap-x-2">
          <Button asChild size={"sm"} className="rounded-md" variant={"link"}>
            <NavLink to="/login">login</NavLink>
          </Button>
          <Button asChild size={"sm"} className="rounded-md">
            <NavLink to="/register">sign up</NavLink>
          </Button>
          <Button size={"sm"} variant={"ghost"} onClick={setTheme}>
            <SunMoon />
          </Button>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
