import logo from "@/assets/images/logo.svg";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="relative flex justify-between items-center pt-8">
      <div className="absolute top-[-50px] z-[-1] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] h-[275px] bg-accent blue-gradient"></div>
      <div className="flex items-center gap-3">
        <img src={logo} alt="cardano talent logo" />
        <p className="uppercase font-semibold text-lg">Cardano talent</p>
      </div>
      <ul className="flex items-center gap-10">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <Button
            variant="ghost"
            className="bg-white text-primary font-bold hover:bg-white"
          >
            Blog
          </Button>
        </li>
      </ul>
    </nav>
  );
};
