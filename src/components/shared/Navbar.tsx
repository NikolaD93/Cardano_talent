import logo from "@/assets/images/logo.svg";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="container py-4 backdrop-blur-md border-b border-white/20 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <img src={logo} alt="cardano talent logo" />
        <p className="uppercase font-semibold text-lg">Cardano talent</p>
      </div>
      <ul className="flex items-end gap-10">
        <li>
          <a href="#" data-replace="Home" className="text-swap">
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#about" data-replace="About" className="text-swap">
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#team" data-replace="Team" className="text-swap">
            <span>Team</span>
          </a>
        </li>
        <li>
          <a href="#faq" data-replace="FAQ" className="text-swap">
            <span>FAQ</span>
          </a>
        </li>
        <li>
          <Button
            variant="ghost"
            className="bg-white text-primary font-bold transition duration-300 hover:bg-white hover:ring ring-textColor"
          >
            Blog
          </Button>
        </li>
      </ul>
    </nav>
  );
};
