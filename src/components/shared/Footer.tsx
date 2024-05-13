import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="container">
      <div className="py-10 border-t border-white/20 flex items-center justify-between">
        <p>©2024 Cardano Talent. All rights reserved</p>
        <ul className="flex gap-6">
          <li>
            <a href="https://discord.com/invite/5U4Z3r2NJb">
              <FaDiscord className="text-2xl text-textColor transition duration-300 hover:text-white" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/CardanoTalent">
              <FaXTwitter className="text-2xl text-textColor transition duration-300 hover:text-white" />
            </a>{" "}
          </li>
          <li>
            <a href="https://www.linkedin.com/company/cardanotalent/">
              <FaLinkedin className="text-2xl text-textColor transition duration-300 hover:text-white" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
