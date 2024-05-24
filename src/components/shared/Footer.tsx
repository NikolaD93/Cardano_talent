import { footerLinks } from "@/constants";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="container">
      <div className="py-6 lg:py-10 border-t border-white/20 flex flex-col gap-6 items-center lg:flex-row lg:justify-between lg:gap-0">
        <p>©2024 Cardano Talent. All rights reserved</p>
        <ul className="flex gap-6">
          {footerLinks.map((link, id) => {
            return (
              <li>
                <Link to={link.to} target="_blank">
                  <link.logo className="text-xl text-textColor transition duration-300 hover:text-white focus:text-white" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
