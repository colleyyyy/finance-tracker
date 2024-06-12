import { Reviews } from "@/components";
import jar from "../assets/jar.jpg";
import { Check } from "lucide-react";
function Landing() {
  return (
    <>
      <section className="grid grid-cols-2 mt-10 lg:gap-x-4">
        {/* rightside text */}
        <section className="place-self-center">
          <h2 className="text-3xl mb-4 font-bold">
            To track your monthly spending
          </h2>
          <p className="max-w-[25rem] tracking-wide font-serif leading-7 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            velit ab quasi saepe, optio cumque mollitia odio asperiores dolores
            similique!
          </p>
          <ul className="capitalize font-semibold">
            <li className="flex items-center gap-x-2 mb-2">
              <Check className="text-primary " />
              clean ui style
            </li>
            <li className="flex items-center gap-x-2 mb-2">
              <Check className="text-primary" />
              easy to use
            </li>
            <li className="flex items-center gap-x-2 mb-2">
              <Check className="text-primary" />
              modern ui
            </li>
          </ul>
        </section>

        {/* picture */}
        <aside>
          <img src={jar} alt="money jar" className="rounded-lg opacity-85 lg:h-[45rem] lg:w-[45rem]" />
        </aside>
      </section>
      <Reviews />
    </>
  );
}
export default Landing;
