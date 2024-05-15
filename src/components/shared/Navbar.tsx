import logo from "@/assets/images/logo.svg";
import { Button } from "../ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: (custom: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom },
    }),
  };

  return (
    <nav className="container py-4 backdrop-blur-md border-b border-white/20 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center gap-2 xl:gap-3">
        <img className="w-10 md:w-auto" src={logo} alt="cardano talent logo" />
        <p className="uppercase font-semibold text-sm md:text-lg">
          Cardano talent
        </p>
      </div>
      <ul className="hidden list-none md:flex items-end gap-10">
        {navLinks.map((link, id) => {
          return link.name !== "Blog" ? (
            <li key={id}>
              <a
                href={link.to}
                data-replace={link.name}
                className={link.className}
              >
                <span>{link.name}</span>
              </a>
            </li>
          ) : (
            <li>
              <Button
                key={id}
                variant="ghost"
                className="bg-white text-primary font-bold transition duration-300 hover:bg-white hover:ring ring-textColor"
              >
                {link.name}
              </Button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="md:hidden flex flex-1 justify-end items-center z-50"
        onClick={() => setToggle((prev) => !prev)}
      >
        <div
          className={`${
            toggle ? "tham-active" : "null"
          } tham tham-e-spin tham-w-6`}
        >
          <div className="tham-box">
            <div className="tham-inner bg-white" />
          </div>
        </div>
      </button>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            exit={{ y: -1000, opacity: 1, transition: { duration: 0.8 } }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.5,
            }}
            className="flex md:hidden py-16 bg-accent absolute top-0 right-0 w-full z-30"
          >
            <ul className="list-none flex flex-col space-y-8 uppercase font-semibold justify-end items-center flex-1">
              {navLinks.map((link, id) => {
                return link.name !== "Blog" ? (
                  <motion.li
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    custom={(id + 1) * 0.2}
                    key={id}
                  >
                    <a href={link.to} onClick={() => setToggle(false)}>
                      {link.name}
                    </a>
                  </motion.li>
                ) : (
                  <motion.li
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    custom={(id + 1) * 0.2}
                    key={id}
                  >
                    <Button
                      variant="ghost"
                      size="lg"
                      className="bg-white text-primary uppercase font-bold transition duration-300 hover:bg-white hover:ring ring-textColor"
                      onClick={() => setToggle(false)}
                    >
                      {link.name}
                    </Button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
