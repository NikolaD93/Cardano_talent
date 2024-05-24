import { ReactNode } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

type CtaButtonProps = {
  className: string;
  children: ReactNode;
  link: string;
};

export const CtaButton = ({ className, children, link }: CtaButtonProps) => {
  return (
    <div>
      <Button
        variant="ghost"
        size="lg"
        asChild
        className={`${className} bg-accent font-semibold border border-[rgba(255,255,255,0.2)] ring ring-2 ring-[#133367] hover:ring-blue-500 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-300 hover:text-white`}
      >
        <Link to={link} target="_blank">
          {children}
        </Link>
      </Button>
    </div>
  );
};
