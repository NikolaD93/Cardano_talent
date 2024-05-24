import logo from "@/assets/images/logo.svg";
import { Button } from "../ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants";
import { Link, NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();

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
      <Link to="/" className="flex items-center gap-2 xl:gap-3">
        <img className="w-10 md:w-auto" src={logo} alt="cardano talent logo" />
        <p className="uppercase font-semibold text-sm md:text-lg">
          Cardano talent
        </p>
      </Link>

      <ul className="hidden list-none md:flex items-end gap-10">
        {pathname === "/" ? (
          navLinks.map((link, id) => {
            return link.name !== "Blog" ? (
              <li key={id}>
                <NavLink
                  to={link.to}
                  data-replace={link.name}
                  className={link.className}
                >
                  <span>{link.name}</span>
                </NavLink>
              </li>
            ) : (
              <li>
                <Button
                  key={id}
                  variant="ghost"
                  asChild
                  className="bg-white text-primary font-bold transition duration-300 hover:bg-white hover:ring ring-textColor"
                >
                  <Link to={link.to}>{link.name}</Link>
                </Button>
              </li>
            );
          })
        ) : (
          <Button
            variant="ghost"
            asChild
            className="bg-white text-primary font-bold transition duration-300 hover:bg-white hover:ring ring-textColor"
          >
            <Link to="blog">Blog</Link>
          </Button>
        )}
      </ul>
      {pathname === "/" ? (
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
      ) : (
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="md:hidden bg-white text-primary font-bold transition duration-300 hover:bg-white hover:ring ring-textColor"
          onClick={() => setToggle(false)}
        >
          <Link to="blog">Blog</Link>
        </Button>
      )}
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
              {navLinks.map((link, id) =>
                link.name !== "Blog" ? (
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
                      asChild
                      size="lg"
                      className="bg-white text-primary uppercase font-bold transition duration-300 hover:bg-white hover:ring ring-textColor"
                      onClick={() => setToggle(false)}
                    >
                      <Link to={link.name}>Blog</Link>
                    </Button>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
