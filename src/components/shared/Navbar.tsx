import logo from "@/assets/images/logo.svg";
import { Button } from "../ui/button";
import { useState } from "react";
import { close, menu } from "@/assets/images";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="container py-4 backdrop-blur-md border-b border-white/20 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center gap-2 xl:gap-3">
        <img className="w-10 md:w-auto" src={logo} alt="cardano talent logo" />
        <p className="uppercase font-semibold text-sm md:text-lg">
          Cardano talent
        </p>
      </div>
      <ul className="hidden md:flex items-end gap-10">
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
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-50"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } py-16 bg-accent absolute top-0 left-0 w-full sidebar z-30`}
        >
          <ul className="list-none flex flex-col space-y-4 justify-end items-center flex-1">
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
        </div>
      </div>
    </nav>
  );
};
